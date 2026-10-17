using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Cartoon cumulus clouds shared by the three decorative sky placements.
    /// Puff tables match src/cloudMesh.js. Opaque, unlit vertex colours, no collider.
    /// </summary>
    public static class CloudMeshBuilder
    {
        const string Folder = "Assets/Art/Clouds";
        const int BodyDetail = 2;

        struct Puff
        {
            public Vector3 Center;
            public float Radius;
            public Vector3 Scale;
            public bool FlatBottom;

            public Puff(float x, float y, float z, float radius, float sx, float sy, float sz, bool flatBottom)
            {
                Center = new Vector3(x, y, z);
                Radius = radius;
                Scale = new Vector3(sx, sy, sz);
                FlatBottom = flatBottom;
            }
        }

        static readonly Puff[][] Variants =
        {
            new[]
            {
                new Puff(0f, 0.02f, 0f, 0.58f, 1.28f, 0.78f, 0.92f, true),
                new Puff(-0.40f, 0.30f, 0.02f, 0.36f, 1f, 1f, 1f, false),
                new Puff(0.42f, 0.26f, 0f, 0.34f, 1f, 1f, 1f, false),
                new Puff(0.02f, 0.48f, 0.04f, 0.30f, 1f, 0.95f, 1f, false)
            },
            new[]
            {
                new Puff(0f, 0f, 0f, 0.50f, 1.15f, 0.70f, 0.90f, true),
                new Puff(0.02f, 0.32f, 0.02f, 0.36f, 1f, 1f, 1f, false),
                new Puff(-0.06f, 0.62f, 0f, 0.28f, 1f, 1f, 1f, false)
            },
            new[]
            {
                new Puff(0.02f, 0f, 0f, 0.54f, 1.22f, 0.72f, 0.88f, true),
                new Puff(-0.34f, 0.28f, 0.04f, 0.34f, 1f, 1f, 1f, false),
                new Puff(0.36f, 0.22f, -0.02f, 0.32f, 1f, 1f, 1f, false),
                new Puff(0.08f, 0.46f, 0.06f, 0.28f, 1f, 1f, 1f, false)
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
            var colors = new List<Color>();
            var tris = new List<int>();

            for (var i = 0; i < puffs.Length; i++)
                AddSphere(verts, tris, puffs[i].Radius, puffs[i].Center, puffs[i].Scale, BodyDetail, puffs[i].FlatBottom, null, null);

            var bodyCount = verts.Count;
            var minY = float.PositiveInfinity;
            var maxY = float.NegativeInfinity;
            var minX = float.PositiveInfinity;
            var maxX = float.NegativeInfinity;
            var maxZ = float.NegativeInfinity;
            for (var i = 0; i < bodyCount; i++)
            {
                var p = verts[i];
                if (p.y < minY) minY = p.y;
                if (p.y > maxY) maxY = p.y;
                if (p.x < minX) minX = p.x;
                if (p.x > maxX) maxX = p.x;
                if (p.z > maxZ) maxZ = p.z;
            }

            var span = Mathf.Max(0.001f, maxY - minY);
            var bottom = Srgb(0.843f, 0.937f, 1f);
            for (var i = 0; i < bodyCount; i++)
            {
                var t = (verts[i].y - minY) / span;
                var u = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(t / 0.2f));
                colors.Add(Color.Lerp(bottom, Color.white, u));
            }

            AddFace(verts, colors, tris, smile, minX, maxX, minY, maxY, maxZ);
            if (colors.Count != verts.Count)
                throw new InvalidOperationException("Cloud " + variant + " colour count " + colors.Count + " does not match vertex count " + verts.Count + ".");

            var mesh = new Mesh { name = "Cloud" + variant };
            mesh.SetVertices(verts);
            mesh.SetColors(colors);
            mesh.SetTriangles(tris, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        static void AddFace(List<Vector3> verts, List<Color> colors, List<int> tris, bool smile, float minX, float maxX, float minY, float maxY, float front)
        {
            var width = maxX - minX;
            var height = maxY - minY;
            var midY = minY + height * 0.56f;
            var spread = width * (smile ? 0.16f : 0.2f);
            var eyeR = height * (smile ? 0.17f : 0.2f);
            var eye = Srgb(0.086f, 0.086f, 0.102f);
            var blush = Srgb(1f, 0.561f, 0.671f);
            var mouth = Srgb(0.141f, 0.094f, 0.125f);
            var unit = Vector3.one;

            for (var side = -1; side <= 1; side += 2)
            {
                var ex = side * spread;
                var ez = front + eyeR * 0.05f;
                AddSphere(verts, tris, eyeR, new Vector3(ex, midY, ez), new Vector3(0.78f, 1.2f, 0.4f), 2, false, eye, colors);
                AddSphere(verts, tris, eyeR * 0.26f, new Vector3(ex - eyeR * 0.2f, midY + eyeR * 0.38f, ez + eyeR * 0.36f), unit, 1, false, Color.white, colors);
            }

            for (var side = -1; side <= 1; side += 2)
            {
                AddSphere(
                    verts, tris, eyeR * 0.62f,
                    new Vector3(side * spread * 1.72f, midY - eyeR * 0.85f, front + eyeR * 0.02f),
                    new Vector3(1.3f, 0.68f, 0.38f), 1, false, blush, colors);
            }

            var ring = spread * (smile ? 0.72f : 0.95f);
            var tube = eyeR * 0.16f;
            AddSmile(verts, tris, colors, ring, tube, new Vector3(0f, midY - eyeR * 1.15f, front + tube), mouth);
        }

        static void AddSphere(
            List<Vector3> verts,
            List<int> tris,
            float radius,
            Vector3 center,
            Vector3 scale,
            int detail,
            bool flatBottom,
            Color? color,
            List<Color> colors)
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
                var y = n.y;
                if (flatBottom && y < 0f) y *= 0.32f;
                var p = new Vector3(n.x * scale.x, y * scale.y, n.z * scale.z) * radius;
                verts.Add(center + p);
                if (color.HasValue && colors != null)
                    colors.Add(color.Value);
            }

            // Unity front faces are clockwise. The icosahedron table matches three.js, so swap.
            for (var i = 0; i < localTris.Count; i += 3)
            {
                tris.Add(localTris[i] + offset);
                tris.Add(localTris[i + 2] + offset);
                tris.Add(localTris[i + 1] + offset);
            }
        }

        static void AddSmile(List<Vector3> verts, List<int> tris, List<Color> colors, float ring, float tube, Vector3 center, Color color)
        {
            const int radial = 8;
            const int tubular = 16;
            const float arc = Mathf.PI;
            var offset = verts.Count;

            for (var j = 0; j <= radial; j++)
            {
                for (var i = 0; i <= tubular; i++)
                {
                    var u = i / (float)tubular * arc;
                    var v = j / (float)radial * Mathf.PI * 2f;
                    var x = (ring + tube * Mathf.Cos(v)) * Mathf.Cos(u);
                    var y = (ring + tube * Mathf.Cos(v)) * Mathf.Sin(u);
                    var z = tube * Mathf.Sin(v);
                    // Half torus rotated 180 degrees around Z so the arc bows downward.
                    verts.Add(center + new Vector3(-x, -y, z));
                    colors.Add(color);
                }
            }

            var stride = tubular + 1;
            for (var j = 1; j <= radial; j++)
            {
                for (var i = 1; i <= tubular; i++)
                {
                    var a = stride * j + i - 1;
                    var b = stride * (j - 1) + i - 1;
                    var c = stride * (j - 1) + i;
                    var d = stride * j + i;
                    // Flipped from the three.js counter-clockwise order.
                    // three.js writes (a, b, d) and (b, c, d). Flip both for clockwise faces.
                    tris.Add(offset + a);
                    tris.Add(offset + d);
                    tris.Add(offset + b);
                    tris.Add(offset + b);
                    tris.Add(offset + d);
                    tris.Add(offset + c);
                }
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
