using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Low-poly puffy clouds shared by the three decorative sky placements.
    /// The puff tables match src/cloudMesh.js. Meshes are opaque, with the
    /// face and the blue underside stored as vertex colours.
    /// </summary>
    public static class CloudMeshBuilder
    {
        const string Folder = "Assets/Art/Clouds";

        static readonly Vector4[][] Variants =
        {
            new[]
            {
                new Vector4(0f, 0.12f, 0f, 0.46f),
                new Vector4(-0.55f, -0.02f, 0.02f, 0.34f),
                new Vector4(0.58f, 0f, -0.02f, 0.36f),
                new Vector4(0.05f, 0.42f, 0.04f, 0.30f),
                new Vector4(0.12f, 0.08f, 0.22f, 0.28f)
            },
            new[]
            {
                new Vector4(0f, 0.05f, 0f, 0.40f),
                new Vector4(0.08f, 0.38f, 0.04f, 0.34f),
                new Vector4(-0.06f, 0.68f, 0f, 0.26f),
                new Vector4(-0.46f, 0.08f, 0.02f, 0.30f),
                new Vector4(0.48f, 0.14f, 0.02f, 0.28f)
            },
            new[]
            {
                new Vector4(-0.20f, 0.05f, 0f, 0.36f),
                new Vector4(0.32f, 0.10f, 0.04f, 0.34f),
                new Vector4(0.02f, 0.36f, 0.08f, 0.30f),
                new Vector4(-0.48f, 0.16f, 0.06f, 0.26f),
                new Vector4(0.55f, 0f, -0.04f, 0.28f),
                new Vector4(0.10f, -0.02f, 0.24f, 0.24f)
            }
        };

        public static Mesh GetOrCreate(int variant)
        {
            var safe = Mathf.Clamp(variant, 0, Variants.Length - 1);
            var path = Folder + "/Cloud" + safe + ".asset";
            var existing = AssetDatabase.LoadAssetAtPath<Mesh>(path);
            if (existing != null) return existing;

            if (!AssetDatabase.IsValidFolder(Folder))
            {
                if (!AssetDatabase.IsValidFolder("Assets/Art"))
                    AssetDatabase.CreateFolder("Assets", "Art");
                AssetDatabase.CreateFolder("Assets/Art", "Clouds");
            }

            var mesh = Build(safe);
            AssetDatabase.CreateAsset(mesh, path);
            return mesh;
        }

        public static Mesh Build(int variant)
        {
            var puffs = Variants[Mathf.Clamp(variant, 0, Variants.Length - 1)];
            var smile = variant == 1;
            var verts = new List<Vector3>();
            var normals = new List<Vector3>();
            var colors = new List<Color>();
            var tris = new List<int>();

            var minY = float.PositiveInfinity;
            var maxY = float.NegativeInfinity;
            var bodyStart = 0;
            for (var i = 0; i < puffs.Length; i++)
            {
                var puff = puffs[i];
                AddSphere(verts, normals, tris, puff.w, new Vector3(puff.x, puff.y, puff.z), 1);
            }
            var bodyEnd = verts.Count;
            for (var i = bodyStart; i < bodyEnd; i++)
            {
                var y = verts[i].y;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
            var span = Mathf.Max(0.001f, maxY - minY);
            // three.js stores Color(0xc5e8ff) as linear. Match that so the
            // underside reads the same in the linear built-in pipeline.
            var bottom = Srgb(0.773f, 0.910f, 1f);
            var top = Color.white;
            for (var i = bodyStart; i < bodyEnd; i++)
            {
                var t = Mathf.Pow((verts[i].y - minY) / span, 0.7f);
                colors.Add(Color.Lerp(bottom, top, t));
            }

            AddFace(verts, normals, colors, tris, smile);
            var mesh = new Mesh { name = "Cloud" + variant };
            mesh.SetVertices(verts);
            mesh.SetNormals(normals);
            mesh.SetColors(colors);
            mesh.SetTriangles(tris, 0);
            mesh.RecalculateBounds();
            return mesh;
        }

        static void AddFace(List<Vector3> verts, List<Vector3> normals, List<Color> colors, List<int> tris, bool smile)
        {
            var spread = smile ? 0.18f : 0.22f;
            const float eyeY = 0.2f;
            const float eyeZ = 0.5f;
            var eye = Color.white;
            var pupil = Srgb(0.165f, 0.141f, 0.220f);
            var blush = Srgb(1f, 0.718f, 0.784f);
            var mouth = Srgb(0.227f, 0.165f, 0.204f);
            for (var side = -1; side <= 1; side += 2)
            {
                AddSphere(verts, normals, tris, 0.085f, new Vector3(side * spread, eyeY, eyeZ), 0, eye, colors);
                AddSphere(verts, normals, tris, 0.042f, new Vector3(side * spread * 1.02f, eyeY - 0.005f, eyeZ + 0.055f), 0, pupil, colors);
            }
            AddSphere(verts, normals, tris, 0.055f, new Vector3(-0.34f, 0.06f, 0.36f), 0, blush, colors);
            AddSphere(verts, normals, tris, 0.055f, new Vector3(0.34f, 0.06f, 0.36f), 0, blush, colors);

            var beads = smile ? 3 : 5;
            var width = smile ? 0.62f : 1.05f;
            var beadRadius = smile ? 0.03f : 0.034f;
            for (var i = 0; i < beads; i++)
            {
                var t = beads == 1 ? 0f : i / (float)(beads - 1);
                var angle = (t - 0.5f) * width;
                var x = Mathf.Sin(angle) * 0.24f;
                var y = -0.06f - (1f - Mathf.Cos(angle)) * 0.16f;
                AddSphere(verts, normals, tris, beadRadius, new Vector3(x, y, 0.48f), 0, mouth, colors);
            }
        }

        static void AddSphere(
            List<Vector3> verts,
            List<Vector3> normals,
            List<int> tris,
            float radius,
            Vector3 center,
            int detail,
            Color? color = null,
            List<Color> colors = null)
        {
            var localVerts = new List<Vector3>();
            var localTris = new List<int>();
            BuildIcosahedron(localVerts, localTris);
            for (var d = 0; d < detail; d++)
                Subdivide(localVerts, localTris);

            var offset = verts.Count;
            for (var i = 0; i < localVerts.Count; i++)
            {
                var n = localVerts[i].normalized;
                verts.Add(center + n * radius);
                normals.Add(n);
                if (color.HasValue && colors != null)
                    colors.Add(color.Value);
            }
            // Unity front faces are clockwise. The icosahedron table is the
            // three.js counter-clockwise order, so swap each triangle.
            for (var i = 0; i < localTris.Count; i += 3)
            {
                tris.Add(localTris[i] + offset);
                tris.Add(localTris[i + 2] + offset);
                tris.Add(localTris[i + 1] + offset);
            }
        }

        static Color Srgb(float r, float g, float b)
        {
            return new Color(ToLinear(r), ToLinear(g), ToLinear(b), 1f);
        }

        static float ToLinear(float channel)
        {
            return channel <= 0.04045f
                ? channel / 12.92f
                : Mathf.Pow((channel + 0.055f) / 1.055f, 2.4f);
        }

        static void BuildIcosahedron(List<Vector3> verts, List<int> tris)
        {
            const float t = 1.6180339887f;
            verts.Add(new Vector3(-1f, t, 0f));
            verts.Add(new Vector3(1f, t, 0f));
            verts.Add(new Vector3(-1f, -t, 0f));
            verts.Add(new Vector3(1f, -t, 0f));
            verts.Add(new Vector3(0f, -1f, t));
            verts.Add(new Vector3(0f, 1f, t));
            verts.Add(new Vector3(0f, -1f, -t));
            verts.Add(new Vector3(0f, 1f, -t));
            verts.Add(new Vector3(t, 0f, -1f));
            verts.Add(new Vector3(t, 0f, 1f));
            verts.Add(new Vector3(-t, 0f, -1f));
            verts.Add(new Vector3(-t, 0f, 1f));

            int[] faces =
            {
                0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11,
                1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
                3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
                4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
            };
            tris.AddRange(faces);
        }

        static void Subdivide(List<Vector3> verts, List<int> tris)
        {
            var cache = new Dictionary<long, int>();
            var next = new List<int>(tris.Count * 4);
            int Mid(int a, int b)
            {
                var lo = a < b ? a : b;
                var hi = a < b ? b : a;
                var key = ((long)lo << 32) | (uint)hi;
                int index;
                if (cache.TryGetValue(key, out index)) return index;
                verts.Add((verts[a] + verts[b]) * 0.5f);
                index = verts.Count - 1;
                cache[key] = index;
                return index;
            }

            for (var i = 0; i < tris.Count; i += 3)
            {
                var a = tris[i];
                var b = tris[i + 1];
                var c = tris[i + 2];
                var ab = Mid(a, b);
                var bc = Mid(b, c);
                var ca = Mid(c, a);
                next.Add(a); next.Add(ab); next.Add(ca);
                next.Add(b); next.Add(bc); next.Add(ab);
                next.Add(c); next.Add(ca); next.Add(bc);
                next.Add(ab); next.Add(bc); next.Add(ca);
            }

            tris.Clear();
            tris.AddRange(next);
        }
    }
}
