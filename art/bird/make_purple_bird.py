"""
PurpleBird generator for "floppy-flight" (Unity 6 / Meta Quest / web).
Second bird, based on the purple cartoon-bird reference (slim body, normal eye,
no crest, big layered wings).  Same rig/export conventions as FloppyBird:
Run:  blender -b --python /workspace/bird-model-purple/make_purple_bird.py [-- --no-render]
Blender convention used here: Z up, bird faces -Y (Blender "front").
FBX export (-Z forward, Y up, apply transform) => Unity +Z forward, +Y up (beak +Z).
GLB export (glTF is +Y up, +Z forward)       => same orientation in Unity/glTFast/three.js.
Hierarchy: PurpleBird (root mesh) -> Wing_L, Wing_R (pivot at shoulders), action/clip "Flap".
"""
import bpy, bmesh, math, os, sys
from mathutils import Matrix, Vector, Euler

OUT = "/workspace/bird-model-purple"
NAME = "PurpleBird"
RENDER = "--no-render" not in sys.argv
FPS = 30
CYCLE = 12            # frames -> 0.4 s at 30 fps
OUTLINE = 0.0040      # inverted-hull outline thickness (m)

# ---------------------------------------------------------------- reset
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.name = "Flap"          # becomes the FBX take / Unity clip name
scene.unit_settings.system = 'METRIC'
scene.unit_settings.scale_length = 1.0
scene.render.fps = FPS
scene.frame_start, scene.frame_end = 0, CYCLE

# ---------------------------------------------------------------- materials
def srgb(h):
    h = h.lstrip('#')
    c = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    lin = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return (*lin, 1.0)

def make_mat(name, hexcol, rough=0.55, spec=0.25):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = srgb(hexcol)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Specular IOR Level"].default_value = spec
    m.diffuse_color = srgb(hexcol)
    return m

M = {
    "Body":      make_mat("Bird_Body",       "#A58AD9"),   # lavender
    "Belly":     make_mat("Bird_Belly",      "#EBC7E6"),   # pinkish lilac
    "Covert":    make_mat("Bird_WingCovert", "#9277CE"),   # upper wing feathers
    "Wing":      make_mat("Bird_Wing",       "#6D4FB3"),   # darker flight feathers
    "Beak":      make_mat("Bird_Beak",       "#F7A632", rough=0.4),
    "Pupil":     make_mat("Bird_Pupil",      "#120D16", rough=0.45, spec=0.15),
    "Eye":       make_mat("Bird_Eye",        "#FFFFFF", rough=0.2, spec=0.4),  # highlight
    "Feet":      make_mat("Bird_Feet",       "#F0902E"),
    "Outline":   make_mat("Bird_Outline",    "#2C1A45", rough=1.0, spec=0.0),
}
for _m in M.values():
    _m.use_backface_culling = True

# ---------------------------------------------------------------- helpers
def ellipsoid(matrix, mat, seg=12, rings=8, taper=0.0, hook=0.0):
    """UV-sphere transformed by matrix. taper narrows the -Y end, hook bends it down."""
    me = bpy.data.meshes.new("tmp")
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=rings, radius=1.0)
    for v in bm.verts:
        f = max(0.0, -v.co.y)
        v.co.x *= 1.0 - taper * f
        v.co.z = v.co.z * (1.0 - taper * f) - hook * f * f
    bm.transform(matrix)
    bm.to_mesh(me); bm.free()
    me.materials.append(mat)
    ob = bpy.data.objects.new("part", me)
    scene.collection.objects.link(ob)
    return ob

def S(x, y, z): return Matrix.Diagonal((x, y, z, 1.0))
def T(x, y, z): return Matrix.Translation((x, y, z))
def R(x=0, y=0, z=0): return Euler((math.radians(x), math.radians(y), math.radians(z)), 'XYZ').to_matrix().to_4x4()

def feather(base, rot, length, width, thick, mat, seg=6, rings=4, taper=0.0):
    """Elongated ellipsoid whose root sits at `base`, extending along local +Y.
    taper>0 makes the tip (+Y end) pointed."""
    m = T(*base) @ rot @ T(0, length * 0.5, 0) @ S(width * 0.5, length * 0.5, thick * 0.5) @ R(z=180)
    return ellipsoid(m, mat, seg, rings, taper=taper)

def join(parts, name):
    bpy.ops.object.select_all(action='DESELECT')
    for p in parts: p.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = name; ob.data.name = name + "_Mesh"
    return ob

def add_outline(ob):
    """Inverted hull: outward shell with flipped normals, outline material."""
    if M["Outline"].name not in ob.data.materials:
        ob.data.materials.append(M["Outline"])
    mod = ob.modifiers.new("Outline", 'SOLIDIFY')
    mod.thickness = OUTLINE
    mod.offset = 1.0
    mod.use_flip_normals = True
    mod.use_rim = False
    mod.material_offset = 100          # clamped to last slot = Outline
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.modifier_apply(modifier=mod.name)

def smooth(ob):
    for p in ob.data.polygons: p.use_smooth = True

BELLY_P = Vector((0.0, -0.020, -0.019))           # belly boundary plane (point)
BELLY_N = Vector((0.0, 0.55, 0.835)).normalized()   # normal points up/back (= not belly side)

def paint_belly(ob):
    """Cut the mesh along the belly plane (clean, straight colour edge) and give the
    lower-front side the Belly material."""
    ob.data.materials.append(M["Belly"])
    idx = len(ob.data.materials) - 1
    bm = bmesh.new(); bm.from_mesh(ob.data)
    geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
    bmesh.ops.bisect_plane(bm, geom=geom, dist=1e-5, plane_co=BELLY_P, plane_no=BELLY_N)
    for f in bm.faces:
        if (f.calc_center_median() - BELLY_P).dot(BELLY_N) < 0:
            f.material_index = idx
    bm.to_mesh(ob.data); bm.free()

# ---------------------------------------------------------------- body + head
outlined, plain = [], []

BODY_C = Vector((0.0, 0.020, -0.012))
BODY_R = Vector((0.064, 0.100, 0.070))
body = ellipsoid(T(*BODY_C) @ R(x=-18) @ S(*BODY_R), M["Body"], seg=14, rings=9)
# belly: lower-front of the body
paint_belly(body)
outlined.append(body)

HEAD_C = Vector((0.0, -0.070, 0.048))
HEAD_R = 0.056
head = ellipsoid(T(*HEAD_C) @ S(HEAD_R * 0.96, HEAD_R * 1.04, HEAD_R), M["Body"], seg=14, rings=9)
# throat / cheek patch
paint_belly(head)
outlined.append(head)

# beak: small closed orange cone with a slight hook
outlined.append(ellipsoid(T(0, -0.124, 0.036) @ R(x=-4) @ S(0.017, 0.030, 0.0135),
                          M["Beak"], 10, 6, taper=0.78, hook=0.18))

# tail: small fan of three feathers angled down-back
for yaw, ln, w in ((-26, 0.066, 0.034), (0, 0.076, 0.036), (26, 0.066, 0.034)):
    outlined.append(feather((0, 0.092, -0.016), R(x=-24) @ R(z=yaw), ln, w, 0.010, M["Wing"], taper=0.2))

body = join(outlined, "TmpBody")
add_outline(body)

# eyes: normal-size black eye with a white highlight (not outlined)
for sx in (1, -1):
    d = Vector((sx * 0.76, -0.52, 0.38)).normalized()
    p = HEAD_C + d * (HEAD_R * 0.985)
    q = d.to_track_quat('Z', 'Y').to_matrix().to_4x4()      # local Z = surface normal
    plain.append(ellipsoid(T(*p) @ q @ S(0.0118, 0.0150, 0.0060), M["Pupil"], seg=10, rings=5))
    # highlight up/front of the eye centre
    hp = p + d * 0.0025 + Vector((0, -0.0040, 0.0055))
    plain.append(ellipsoid(T(*hp) @ q @ S(0.0042, 0.0042, 0.0024), M["Eye"], seg=6, rings=4))

# feet: two tucked little orange feet with three toes each
for sx in (1, -1):
    base = Vector((sx * 0.024, 0.006, -0.072))
    plain.append(ellipsoid(T(*base) @ S(0.009, 0.009, 0.016), M["Feet"], 6, 4))
    for yaw in (-30, 0, 30):
        plain.append(feather(base + Vector((0, 0, -0.012)), R(x=-35) @ R(z=180 + yaw), 0.026, 0.0080, 0.0060,
                             M["Feet"], seg=6, rings=4))

body = join([body] + plain, NAME)
smooth(body)
body.location = (0, 0, 0)

# ---------------------------------------------------------------- wings
SHOULDER = Vector((0.050, 0.004, 0.022))
REST = 30     # degrees: wings down (downstroke end)
UP = -62      # degrees: raised high, like the reference pose

def make_wing(sx):
    parts = []
    # leading-edge "arm": rounded covert mass (lighter)
    parts.append(ellipsoid(T(sx * 0.070, 0.012, 0.0015) @ R(z=sx * 4) @ S(0.074, 0.026, 0.010),
                           M["Covert"], 10, 6))
    # primaries/secondaries: long dark feathers, from back-pointing (inner) to out-pointing (tip)
    N = 6
    for i in range(N):
        t = i / (N - 1)
        root = (sx * (0.018 + 0.112 * t), 0.014 - 0.006 * t, -0.002 - 0.0006 * i)
        ang = 84 - 72 * t                              # 90 = straight back, 0 = straight out
        ln = 0.070 + 0.050 * t
        parts.append(feather(root, R(z=-sx * (90 - ang)), ln, 0.032, 0.0075, M["Wing"], taper=0.12))
    # covert row: shorter, lighter feathers layered on top -> scalloped mid-wing
    N2 = 4
    for i in range(N2):
        t = i / (N2 - 1)
        root = (sx * (0.014 + 0.096 * t), 0.012, 0.0035)
        ang = 82 - 50 * t
        ln = 0.050 + 0.014 * t
        parts.append(feather(root, R(z=-sx * (90 - ang)), ln, 0.036, 0.0080, M["Covert"], taper=0.08))
    w = join(parts, "Wing_L" if sx > 0 else "Wing_R")
    add_outline(w)
    smooth(w)
    w.parent = body
    w.location = SHOULDER * Vector((sx, 1, 1))
    w.rotation_mode = 'XYZ'
    return w

wings = [make_wing(1), make_wing(-1)]

# ---------------------------------------------------------------- flap animation
def keyframes(w, sx):
    w.animation_data_create()
    act = bpy.data.actions.new("Flap_" + w.name)
    w.animation_data.action = act
    for f, a in ((0, REST), (CYCLE * 0.5, UP), (CYCLE, REST)):
        w.rotation_euler = (0, math.radians(sx * a), 0)
        w.keyframe_insert("rotation_euler", frame=f)
    for fc in act.fcurves if hasattr(act, "fcurves") else []:
        fc.modifiers.new('CYCLES')
    tr = w.animation_data.nla_tracks.new()
    tr.name = "Flap"
    st = tr.strips.new("Flap", 0, act)
    st.extrapolation = 'HOLD'
    w.animation_data.action = None
    return act

for w, sx in zip(wings, (1, -1)):
    keyframes(w, sx)

# ---------------------------------------------------------------- stats
dg = bpy.context.evaluated_depsgraph_get()
tris = 0
for ob in [body] + wings:
    me = ob.evaluated_get(dg).to_mesh()
    me.calc_loop_triangles()
    print(f"{ob.name}: {len(me.loop_triangles)} tris, mats={[m.name for m in ob.data.materials]}")
    tris += len(me.loop_triangles)
    ob.evaluated_get(dg).to_mesh_clear()
print("TOTAL_TRIS", tris)
scene.frame_set(0)
pts = []
for ob in [body] + wings:
    pts += [ob.matrix_world @ Vector(c) for c in ob.bound_box]
print("BBOX_MIN", [round(min(v[i] for v in pts), 4) for i in range(3)],
      "MAX", [round(max(v[i] for v in pts), 4) for i in range(3)])
bb = [body.matrix_world @ Vector(c) for c in body.bound_box]
print("BODY_LENGTH_Y", round(max(v.y for v in bb) - min(v.y for v in bb), 4))

# ---------------------------------------------------------------- export
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.fbx(
    filepath=os.path.join(OUT, NAME + ".fbx"),
    use_selection=False, object_types={'MESH', 'EMPTY'},
    apply_unit_scale=True, apply_scale_options='FBX_SCALE_ALL',
    axis_forward='-Z', axis_up='Y', bake_space_transform=True,
    use_mesh_modifiers=True, mesh_smooth_type='FACE', use_tspace=False,
    add_leaf_bones=False,
    bake_anim=True, bake_anim_use_all_bones=False, bake_anim_use_nla_strips=False,
    bake_anim_use_all_actions=False, bake_anim_force_startend_keying=True,
    bake_anim_step=1.0, bake_anim_simplify_factor=0.0,
    path_mode='AUTO')
bpy.ops.export_scene.gltf(
    filepath=os.path.join(OUT, NAME + ".glb"), export_format='GLB',
    export_yup=True, export_apply=True, export_animations=True,
    export_animation_mode='NLA_TRACKS', export_frame_range=False,
    export_force_sampling=True, export_materials='EXPORT')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, NAME + ".blend"), compress=True)
if os.path.exists(os.path.join(OUT, NAME + ".blend1")): os.remove(os.path.join(OUT, NAME + ".blend1"))

if not RENDER:
    sys.exit(0)

# ---------------------------------------------------------------- preview renders
nt = M["Outline"].node_tree
nodes, links = nt.nodes, nt.links
out = nodes["Material Output"]
geo = nodes.new("ShaderNodeNewGeometry")
lp = nodes.new("ShaderNodeLightPath")
mx = nodes.new("ShaderNodeMath"); mx.operation = 'MAXIMUM'
em = nodes.new("ShaderNodeEmission"); em.inputs[0].default_value = srgb("#24143A")
tp = nodes.new("ShaderNodeBsdfTransparent")
mix = nodes.new("ShaderNodeMixShader")
links.new(geo.outputs["Backfacing"], mx.inputs[0])
links.new(lp.outputs["Is Shadow Ray"], mx.inputs[1])
links.new(mx.outputs[0], mix.inputs[0])
links.new(em.outputs[0], mix.inputs[1])
links.new(tp.outputs[0], mix.inputs[2])
links.new(mix.outputs[0], out.inputs["Surface"])

scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = 48
scene.cycles.use_denoising = True
scene.cycles.transparent_max_bounces = 16
scene.render.resolution_x = scene.render.resolution_y = 1024
scene.view_settings.view_transform = 'Standard'
scene.render.film_transparent = False

world = bpy.data.worlds.new("W"); scene.world = world
world.use_nodes = True
world.node_tree.nodes["Background"].inputs[0].default_value = srgb("#DCEEF6")
world.node_tree.nodes["Background"].inputs[1].default_value = 1.15

def light(name, kind, loc, energy, size=0.5):
    ld = bpy.data.lights.new(name, kind); ld.energy = energy
    if kind == 'AREA': ld.size = size
    if kind == 'SUN': ld.angle = math.radians(8)
    lo = bpy.data.objects.new(name, ld); scene.collection.objects.link(lo)
    lo.location = loc
    tgt = Vector((0, 0, 0)) - Vector(loc)
    lo.rotation_euler = tgt.to_track_quat('-Z', 'Y').to_euler()
    return lo

light("Key", 'SUN', (-0.4, -0.8, 1.0), 2.2)
light("Fill", 'AREA', (0.8, -0.6, 0.3), 22, size=1.0)
light("Fill2", 'AREA', (-0.9, -0.3, 0.2), 18, size=1.0)
light("Rim", 'AREA', (0.2, 0.9, 0.6), 18, size=0.8)
light("Bounce", 'AREA', (0.2, -0.5, -0.9), 14, size=1.2)

cam_d = bpy.data.cameras.new("Cam"); cam_d.lens = 85
cam = bpy.data.objects.new("Cam", cam_d); scene.collection.objects.link(cam)
scene.camera = cam

def shoot(name, loc, frame, target=(0, 0.0, 0.02)):
    scene.frame_set(frame)
    cam.location = loc
    d = Vector(target) - Vector(loc)
    cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    scene.render.filepath = os.path.join(OUT, f"preview_{name}.png")
    bpy.ops.render.render(write_still=True)
    print("RENDERED", scene.render.filepath)

D = 1.45
only = [a for a in sys.argv if a.startswith("--only=")]
only = only[0].split("=", 1)[1].split(",") if only else None
shots = [
    ("front34",  (D * 0.62, -D * 0.72, D * 0.22), 3),
    ("side",     (D * 1.0, 0.0, D * 0.08), 3),
    ("flap",     (D * 0.80, -D * 0.55, D * 0.60), 0),
    ("refangle", (-D * 0.86, -D * 0.42, D * 0.16), 5),   # reference view: beak to the right, wings up
]
for n, loc, f in shots:
    if only is None or n in only:
        shoot(n, loc, f)

# ---------------------------------------------------------------- compare sheet
try:
    import subprocess
    subprocess.run(["python3", os.path.join(OUT, "make_compare.py")], check=True)
    print("COMPARE written")
except Exception as e:
    print("compare sheet failed:", e)
