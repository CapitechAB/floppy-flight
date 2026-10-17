"""
FloppyBird generator for "floppy-flight" (Unity 6 / Meta Quest).
Run:  blender -b --python /workspace/bird-model/make_bird.py
Blender convention used here: Z up, bird faces -Y (Blender "front").
FBX export (-Z forward, Y up, apply transform) => Unity +Z forward, +Y up.
GLB export (glTF is +Y up, +Z forward)       => same orientation in Unity/glTFast.
"""
import bpy, bmesh, math, os, sys
from mathutils import Matrix, Vector, Euler

OUT = "/workspace/bird-model"
RENDER = "--no-render" not in sys.argv
FPS = 30
CYCLE = 12            # frames -> 0.4 s at 30 fps
OUTLINE = 0.0045      # inverted-hull outline thickness (m)

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
    "Body":     make_mat("Bird_Body",     "#F07A2A"),
    "Belly":    make_mat("Bird_Belly",    "#FCAE7C"),
    "Beak":     make_mat("Bird_Beak",     "#F9A23A", rough=0.4),
    "Mouth":    make_mat("Bird_Mouth",    "#4E1418"),
    "EyeWhite": make_mat("Bird_EyeWhite", "#FAFAFA", rough=0.3, spec=0.4),
    "Pupil":    make_mat("Bird_Pupil",    "#141414", rough=0.2, spec=0.5),
    "Crest":    make_mat("Bird_Crest",    "#FAAE3C"),
    "Wing":     make_mat("Bird_Wing",     "#EE7E68"),
    "Outline":  make_mat("Bird_Outline",  "#3A1E14", rough=1.0, spec=0.0),
}
for _m in M.values():
    _m.use_backface_culling = True   # closed meshes; glTF doubleSided=false, outline hull needs culling

# ---------------------------------------------------------------- helpers
def ellipsoid(matrix, mat, seg=12, rings=8, taper=0.0, hook=0.0):
    """UV-sphere transformed by matrix (unit sphere -> ellipsoid).
    taper narrows the -Y (front) end, hook bends the front end down (beaks)."""
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

def feather(base, rot, length, width, thick, mat, seg=6, rings=5):
    """Elongated ellipsoid whose root sits at `base`, extending along local +Y."""
    m = T(*base) @ rot @ T(0, length * 0.5, 0) @ S(width * 0.5, length * 0.5, thick * 0.5)
    return ellipsoid(m, mat, seg, rings)

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

# ---------------------------------------------------------------- body
RX, RY, RZ = 0.112, 0.108, 0.104          # body radii (m)
outlined, plain = [], []

body = ellipsoid(S(RX, RY, RZ), M["Body"], seg=18, rings=12)
body.data.materials.append(M["Belly"])
for p in body.data.polygons:                # lighter belly on the lower front
    c = p.center
    n = Vector((c.x / RX, c.y / RY, c.z / RZ))
    if n.z < -0.05 - 0.35 * max(0.0, n.y):
        p.material_index = 1
outlined.append(body)

# eyes: big white googly ellipsoids, nearly touching on the face
pupils = []
for sx in (1, -1):
    c = Vector((sx * 0.041, -0.084, 0.036))
    r = Vector((0.040, 0.034, 0.047))
    meye = T(*c) @ R(z=sx * 16) @ R(x=-8) @ S(*r)
    outlined.append(ellipsoid(meye, M["EyeWhite"], seg=12, rings=7))
    u = Vector((-sx * 0.22, -1.0, 0.10)).normalized() * 1.01
    p = meye @ u
    mp = T(*p) @ R(z=sx * 16) @ R(x=-8) @ S(0.0165, 0.006, 0.0185)
    plain.append(ellipsoid(mp, M["Pupil"], seg=8, rings=5))

# beak (open): upper + lower mandible + dark mouth
outlined.append(ellipsoid(T(0, -0.112, -0.016) @ R(x=-10) @ S(0.034, 0.048, 0.019), M["Beak"], 10, 6, taper=0.75, hook=0.45))
outlined.append(ellipsoid(T(0, -0.101, -0.060) @ R(x=26) @ S(0.026, 0.036, 0.011), M["Beak"], 10, 5, taper=0.7))
plain.append(ellipsoid(T(0, -0.104, -0.038) @ S(0.025, 0.030, 0.023), M["Mouth"], 8, 5))

# crest tuft on top of the head
for ang, ln, w in ((-20, 0.050, 0.032), (12, 0.062, 0.034), (42, 0.048, 0.030)):
    outlined.append(feather((0, -0.030, 0.082), R(x=90 - ang), ln, w, 0.014, M["Crest"], seg=8))

# short tail fan at the back
for yaw, ln in ((-30, 0.058), (0, 0.068), (30, 0.058)):
    outlined.append(feather((0, 0.085, 0.020), R(x=22) @ R(z=yaw), ln, 0.034, 0.011, M["Wing"]))

body = join(outlined, "TmpBody")
add_outline(body)
for p in plain:
    p.data.materials.clear()
allp = [body] + plain
# re-attach materials for plain parts after join (join merges slots by material)
for p, mat in zip(plain, [M["Pupil"], M["Pupil"], M["Mouth"]]):
    p.data.materials.append(mat)
body = join(allp, "FloppyBird")
smooth(body)
body.location = (0, 0, 0)

# ---------------------------------------------------------------- wings
SHOULDER = Vector((0.094, 0.012, -0.004))
REST = 48     # degrees: drooped against the body side
UP = -60      # degrees: raised

def make_wing(sx):
    parts = []
    # fan of feathers in local XY plane, pointing outward (+/-X) and back (+Y)
    for ang, ln, w in ((20, 0.118, 0.056), (45, 0.110, 0.052), (70, 0.090, 0.044)):
        rot = R(z=-sx * (90 - ang))          # local +Y rotated toward outward X
        parts.append(feather((0, 0, 0), rot, ln, w, 0.011, M["Wing"]))
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
    # make it cyclic in Blender too
    for fc in act.fcurves if hasattr(act, "fcurves") else []:
        fc.modifiers.new('CYCLES')
    # push to NLA track "Flap" so glTF merges both wings into one clip
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
    print(f"{ob.name}: {len(me.loop_triangles)} tris")
    tris += len(me.loop_triangles)
    ob.evaluated_get(dg).to_mesh_clear()
print("TOTAL_TRIS", tris)
scene.frame_set(0)
bb = [body.matrix_world @ Vector(c) for c in body.bound_box]
print("BODY_BBOX_MIN", [round(min(v[i] for v in bb), 4) for i in range(3)],
      "MAX", [round(max(v[i] for v in bb), 4) for i in range(3)])

# ---------------------------------------------------------------- export
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.export_scene.fbx(
    filepath=os.path.join(OUT, "FloppyBird.fbx"),
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
    filepath=os.path.join(OUT, "FloppyBird.glb"), export_format='GLB',
    export_yup=True, export_apply=True, export_animations=True,
    export_animation_mode='NLA_TRACKS', export_frame_range=False,
    export_force_sampling=True, export_materials='EXPORT')
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, "FloppyBird.blend"), compress=True)
if os.path.exists(os.path.join(OUT, "FloppyBird.blend1")): os.remove(os.path.join(OUT, "FloppyBird.blend1"))

if not RENDER:
    sys.exit(0)

# ---------------------------------------------------------------- preview renders
# outline material: hide front-facing hull side in Cycles (Unity does this via back-face culling)
nt = M["Outline"].node_tree
nodes, links = nt.nodes, nt.links
out = nodes["Material Output"]
geo = nodes.new("ShaderNodeNewGeometry")
lp = nodes.new("ShaderNodeLightPath")
mx = nodes.new("ShaderNodeMath"); mx.operation = 'MAXIMUM'
em = nodes.new("ShaderNodeEmission"); em.inputs[0].default_value = srgb("#2A140C")
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
world.node_tree.nodes["Background"].inputs[0].default_value = srgb("#E6ECF0")
world.node_tree.nodes["Background"].inputs[1].default_value = 1.15

def light(name, kind, loc, energy, size=0.5, rot=None):
    ld = bpy.data.lights.new(name, kind); ld.energy = energy
    if kind == 'AREA': ld.size = size
    if kind == 'SUN': ld.angle = math.radians(8)
    lo = bpy.data.objects.new(name, ld); scene.collection.objects.link(lo)
    lo.location = loc
    tgt = Vector((0, 0, 0)) - Vector(loc)
    lo.rotation_euler = tgt.to_track_quat('-Z', 'Y').to_euler()
    return lo

light("Key", 'SUN', (0.6, -0.8, 1.0), 2.2)
light("Fill", 'AREA', (-0.8, -0.6, 0.3), 25, size=1.0)
light("Rim", 'AREA', (0.2, 0.9, 0.6), 18, size=0.8)
light("Bounce", 'AREA', (0.2, -0.5, -0.9), 14, size=1.2)

cam_d = bpy.data.cameras.new("Cam"); cam_d.lens = 85
cam = bpy.data.objects.new("Cam", cam_d); scene.collection.objects.link(cam)
scene.camera = cam

def shoot(name, loc, frame, target=(0, 0.01, 0.0)):
    scene.frame_set(frame)
    cam.location = loc
    d = Vector(target) - Vector(loc)
    cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    scene.render.filepath = os.path.join(OUT, f"preview_{name}.png")
    bpy.ops.render.render(write_still=True)
    print("RENDERED", scene.render.filepath)

D = 1.25
shoot("front34", (D * 0.62, -D * 0.72, D * 0.22), 0)
shoot("side",    (D * 1.0, 0.0, D * 0.08), 0)
shoot("flap",    (D * 0.80, -D * 0.55, D * 0.60), 4)
shoot("refangle", (D * 0.74, -D * 0.64, D * 0.20), 5)   # matches the reference view, wings raised

# ---------------------------------------------------------------- compare sheet
try:
    import subprocess
    subprocess.run([sys.executable if False else "python3", "-c", r"""
from PIL import Image, ImageDraw, ImageFont
ref=Image.open('/workspace/bird-ref.png').convert('RGBA')
bg=Image.new('RGBA',ref.size,(255,255,255,255)); bg.alpha_composite(ref)
ref=bg.convert('RGB').resize((1024,1004),Image.LANCZOS)
r=Image.open('/workspace/bird-model/preview_refangle.png').convert('RGB').crop((170,170,890,890)).resize((1024,1024),Image.LANCZOS)
c=Image.new('RGB',(2068,1100),(255,255,255)); c.paste(ref,(10,70)); c.paste(r,(1044,66))
d=ImageDraw.Draw(c); f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',40)
d.text((20,15),'Reference (upscaled from 105px)',fill=(0,0,0),font=f)
d.text((1054,15),'FloppyBird 3D (Cycles render)',fill=(0,0,0),font=f)
c.save('/workspace/bird-model/compare.png')
"""], check=True)
    print("COMPARE written")
except Exception as e:
    print("compare sheet failed:", e)
