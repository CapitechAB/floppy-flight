using System;
using System.IO;
using System.Reflection;
using FloppyFlight.Avatar;
using FloppyFlight.Flight;
using FloppyFlight.Managers;
using FloppyFlight.Obstacles;
using FloppyFlight.Platform;
using FloppyFlight.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Builds the playable Quest scene from the existing gameplay scripts.
    /// The scene is generated in the editor because the repository previously
    /// shipped scripts without a scene, prefabs, or script GUIDs.
    /// </summary>
    public static class QuestSceneSetup
    {
        public const string ScenePath = "Assets/Scenes/Main.unity";
        const string BgmPath = "Assets/Audio/FloppyFlight_BGM.mp3";

        public static void EnsureMainScene()
        {
            EnsureFolders();
            if (File.Exists(Path.Combine(Application.dataPath, "Scenes/Main.unity")))
            {
                var existing = AssetDatabase.LoadAssetAtPath<SceneAsset>(ScenePath);
                if (existing != null)
                {
                    EditorBuildSettings.scenes = new[]
                    {
                        new EditorBuildSettingsScene(ScenePath, true)
                    };
                    return;
                }
            }

            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            var materials = CreateMaterials();
            CreateEnvironment(materials);
            var pipePrefab = CreatePipePrefab(materials);
            var flight = CreateFlightRig(materials);
            CreateGameSystems(flight, pipePrefab);
            CreateHud(flight.transform);

            EditorSceneManager.SaveScene(scene, ScenePath);
            EditorBuildSettings.scenes = new[]
            {
                new EditorBuildSettingsScene(ScenePath, true)
            };
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Created " + ScenePath);
        }

        static void EnsureFolders()
        {
            CreateFolder("Assets", "Scenes");
            CreateFolder("Assets", "Prefabs");
            CreateFolder("Assets", "Materials");
        }

        static void CreateFolder(string parent, string name)
        {
            if (!AssetDatabase.IsValidFolder(parent + "/" + name))
                AssetDatabase.CreateFolder(parent, name);
        }

        struct Materials
        {
            public Material Pipe;
            public Material Lip;
            public Material Vine;
            public Material Ring;
            public Material Beak;
            public Material Nostril;
            public Material WingWhite;
            public Material WingCyan;
            public Material Island;
            public Material Grass;
            public Material Cloud;
            public Material Sun;
            public Material Ground;
        }

        static Materials CreateMaterials()
        {
            return new Materials
            {
                Pipe = Mat("Assets/Materials/Pipe.mat", new Color(0.298f, 0.820f, 0.216f), 0.35f, 0.05f),
                Lip = Mat("Assets/Materials/PipeLip.mat", new Color(0.267f, 0.741f, 0.196f), 0.32f, 0.08f),
                Vine = Mat("Assets/Materials/Vine.mat", new Color(0.106f, 0.541f, 0.212f), 0.45f, 0.02f),
                Ring = Mat("Assets/Materials/ScoreRing.mat", new Color(1f, 0.647f, 0.008f), 0.25f, 0.75f, new Color(1f, 0.65f, 0f) * 0.35f),
                Beak = Mat("Assets/Materials/Beak.mat", new Color(0.953f, 0.612f, 0.071f), 0.28f, 0.05f),
                Nostril = Mat("Assets/Materials/Nostril.mat", new Color(0.557f, 0.173f, 0f), 0.4f, 0f),
                WingWhite = Mat("Assets/Materials/WingWhite.mat", Color.white, 0.25f, 0.08f, new Color(0.875f, 0.976f, 0.984f) * 0.25f),
                WingCyan = Mat("Assets/Materials/WingCyan.mat", new Color(0.494f, 0.839f, 0.875f), 0.3f, 0.12f, new Color(0.133f, 0.651f, 0.702f) * 0.35f),
                Island = Mat("Assets/Materials/Island.mat", new Color(0.45f, 0.32f, 0.18f), 0.55f, 0f),
                Grass = Mat("Assets/Materials/Grass.mat", new Color(0.30f, 0.72f, 0.22f), 0.45f, 0f),
                Cloud = Mat("Assets/Materials/Cloud.mat", Color.white, 0.6f, 0f),
                Sun = Mat("Assets/Materials/Sun.mat", new Color(1f, 0.96f, 0.72f), 0.2f, 0f, new Color(1f, 0.85f, 0.4f)),
                Ground = Mat("Assets/Materials/Ground.mat", new Color(0.18f, 0.62f, 0.22f), 0.5f, 0f)
            };
        }

        static Material Mat(string path, Color color, float gloss, float metallic, Color? emission = null)
        {
            var existing = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (existing != null) return existing;

            var shader = Shader.Find("Standard");
            if (shader == null)
                throw new InvalidOperationException("Built-in Standard shader was not found. The project is configured for the built-in render pipeline.");

            var material = new Material(shader) { color = color };
            material.SetFloat("_Glossiness", gloss);
            material.SetFloat("_Metallic", metallic);
            if (emission.HasValue)
            {
                material.EnableKeyword("_EMISSION");
                material.SetColor("_EmissionColor", emission.Value);
            }

            AssetDatabase.CreateAsset(material, path);
            return material;
        }

        static void CreateEnvironment(Materials materials)
        {
            var skyShader = Shader.Find("Skybox/Procedural");
            if (skyShader != null)
            {
                var sky = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/SunsetSky.mat");
                if (sky == null)
                {
                    sky = new Material(skyShader);
                    sky.SetColor("_SkyTint", new Color(0.114f, 0.635f, 0.847f));
                    sky.SetColor("_GroundColor", new Color(0.922f, 0.231f, 0.353f));
                    sky.SetFloat("_AtmosphereThickness", 1.15f);
                    sky.SetFloat("_Exposure", 1.3f);
                    sky.SetFloat("_SunSize", 0.06f);
                    AssetDatabase.CreateAsset(sky, "Assets/Materials/SunsetSky.mat");
                }
                RenderSettings.skybox = sky;
            }

            RenderSettings.ambientMode = AmbientMode.Trilight;
            RenderSettings.ambientSkyColor = new Color(0.40f, 0.78f, 0.95f);
            RenderSettings.ambientEquatorColor = new Color(0.98f, 0.77f, 0.30f);
            RenderSettings.ambientGroundColor = new Color(0.25f, 0.70f, 0.28f);
            RenderSettings.fog = true;
            RenderSettings.fogMode = FogMode.ExponentialSquared;
            RenderSettings.fogColor = new Color(0.984f, 0.773f, 0.192f);
            RenderSettings.fogDensity = 0.0065f;

            var sun = new GameObject("Sun");
            var light = sun.AddComponent<Light>();
            light.type = LightType.Directional;
            light.color = new Color(1f, 0.945f, 0.773f);
            light.intensity = 1.4f;
            light.shadows = LightShadows.Soft;
            sun.transform.rotation = Quaternion.Euler(28f, -25f, 0f);

            var sunMesh = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            sunMesh.name = "SunDisc";
            sunMesh.transform.position = new Vector3(18f, 22f, -70f);
            sunMesh.transform.localScale = Vector3.one * 10f;
            sunMesh.GetComponent<Renderer>().sharedMaterial = materials.Sun;
            UnityEngine.Object.DestroyImmediate(sunMesh.GetComponent<Collider>());

            var ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
            ground.name = "Ground";
            ground.transform.position = new Vector3(0f, 0f, -40f);
            ground.transform.localScale = new Vector3(30f, 1f, 30f);
            ground.GetComponent<Renderer>().sharedMaterial = materials.Ground;

            CreateIsland(materials, new Vector3(-14f, 3.2f, -35f), 4.5f);
            CreateIsland(materials, new Vector3(16f, 4.5f, -58f), 6f);
            CreateIsland(materials, new Vector3(-18f, 2.4f, -78f), 5f);
            CreateCloud(materials, new Vector3(-8f, 14f, -30f), 2.2f);
            CreateCloud(materials, new Vector3(10f, 16f, -48f), 2.8f);
            CreateCloud(materials, new Vector3(-4f, 18f, -70f), 3.2f);
            CreateWindmill(materials, new Vector3(16f, 7.2f, -58f));
        }

        static void CreateIsland(Materials materials, Vector3 position, float radius)
        {
            var rock = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            rock.name = "Island";
            rock.transform.position = position;
            rock.transform.localScale = new Vector3(radius, 1.4f, radius);
            rock.GetComponent<Renderer>().sharedMaterial = materials.Island;
            UnityEngine.Object.DestroyImmediate(rock.GetComponent<Collider>());

            var top = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            top.name = "IslandGrass";
            top.transform.position = position + new Vector3(0f, 1.35f, 0f);
            top.transform.localScale = new Vector3(radius * 0.92f, 0.25f, radius * 0.92f);
            top.GetComponent<Renderer>().sharedMaterial = materials.Grass;
            UnityEngine.Object.DestroyImmediate(top.GetComponent<Collider>());
        }

        static void CreateCloud(Materials materials, Vector3 position, float scale)
        {
            var cloud = new GameObject("Cloud");
            cloud.transform.position = position;
            for (var i = 0; i < 3; i++)
            {
                var puff = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                puff.transform.SetParent(cloud.transform, false);
                puff.transform.localPosition = new Vector3((i - 1) * scale * 0.55f, (i == 1 ? 0.25f : 0f) * scale, 0f);
                puff.transform.localScale = Vector3.one * (scale * (i == 1 ? 1f : 0.75f));
                puff.GetComponent<Renderer>().sharedMaterial = materials.Cloud;
                UnityEngine.Object.DestroyImmediate(puff.GetComponent<Collider>());
            }
        }

        static void CreateWindmill(Materials materials, Vector3 position)
        {
            var mill = new GameObject("Windmill");
            mill.transform.position = position;
            var pole = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            pole.transform.SetParent(mill.transform, false);
            pole.transform.localScale = new Vector3(0.25f, 2.2f, 0.25f);
            pole.GetComponent<Renderer>().sharedMaterial = materials.Island;
            UnityEngine.Object.DestroyImmediate(pole.GetComponent<Collider>());

            for (var i = 0; i < 4; i++)
            {
                var blade = GameObject.CreatePrimitive(PrimitiveType.Cube);
                blade.transform.SetParent(mill.transform, false);
                blade.transform.localPosition = new Vector3(0f, 2.2f, 0f);
                blade.transform.localRotation = Quaternion.Euler(0f, 0f, i * 90f);
                blade.transform.localScale = new Vector3(0.18f, 1.6f, 0.08f);
                blade.GetComponent<Renderer>().sharedMaterial = materials.WingWhite;
                UnityEngine.Object.DestroyImmediate(blade.GetComponent<Collider>());
            }
        }

        static GameObject CreatePipePrefab(Materials materials)
        {
            var root = new GameObject("PipePair");
            var pair = root.AddComponent<PipePair>();
            var bottom = CreatePipe("BottomPipe", false, materials);
            var top = CreatePipe("TopPipe", true, materials);
            var ring = CreateRing(materials);
            bottom.transform.SetParent(root.transform, false);
            top.transform.SetParent(root.transform, false);
            ring.transform.SetParent(root.transform, false);

            var serialized = new SerializedObject(pair);
            SetRef(serialized, "bottomPipe", bottom.transform);
            SetRef(serialized, "topPipe", top.transform);
            SetRef(serialized, "scoreRing", ring.transform);
            serialized.ApplyModifiedPropertiesWithoutUndo();

            var prefab = PrefabUtility.SaveAsPrefabAsset(root, "Assets/Prefabs/PipePair.prefab");
            UnityEngine.Object.DestroyImmediate(root);
            return prefab;
        }

        static GameObject CreatePipe(string name, bool top, Materials materials)
        {
            var pipe = new GameObject(name);
            var body = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            body.name = "Body";
            body.transform.SetParent(pipe.transform, false);
            body.transform.localScale = new Vector3(2.3f, 8f, 2.3f);
            body.transform.localPosition = new Vector3(0f, top ? 8f : -8f, 0f);
            body.GetComponent<Renderer>().sharedMaterial = materials.Pipe;

            var lip = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            lip.name = "Lip";
            lip.transform.SetParent(pipe.transform, false);
            lip.transform.localScale = new Vector3(2.85f, 0.3f, 2.85f);
            lip.transform.localPosition = new Vector3(0f, top ? 0.35f : -0.35f, 0f);
            lip.GetComponent<Renderer>().sharedMaterial = materials.Lip;

            var vine = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            vine.name = "Vine";
            vine.transform.SetParent(pipe.transform, false);
            vine.transform.localScale = new Vector3(0.12f, 6f, 0.12f);
            vine.transform.localPosition = new Vector3(1.05f, top ? 6.2f : -6.2f, 0.2f);
            vine.transform.localRotation = Quaternion.Euler(0f, 25f, 8f);
            vine.GetComponent<Renderer>().sharedMaterial = materials.Vine;
            UnityEngine.Object.DestroyImmediate(vine.GetComponent<Collider>());
            return pipe;
        }

        static GameObject CreateRing(Materials materials)
        {
            var ring = new GameObject("ScoreRing");
            var mesh = Torus(0.85f, 0.08f, 28, 12);
            var filter = ring.AddComponent<MeshFilter>();
            filter.sharedMesh = mesh;
            var renderer = ring.AddComponent<MeshRenderer>();
            renderer.sharedMaterial = materials.Ring;
            ring.transform.localRotation = Quaternion.Euler(0f, 0f, 0f);
            return ring;
        }

        static Mesh Torus(float radius, float tube, int segments, int sides)
        {
            var assetPath = "Assets/Materials/ScoreRingMesh.asset";
            var existing = AssetDatabase.LoadAssetAtPath<Mesh>(assetPath);
            if (existing != null) return existing;

            var vertices = new Vector3[segments * sides];
            var normals = new Vector3[vertices.Length];
            var triangles = new int[segments * sides * 6];
            var vi = 0;
            for (var i = 0; i < segments; i++)
            {
                var u = i / (float)segments * Mathf.PI * 2f;
                var center = new Vector3(Mathf.Cos(u) * radius, Mathf.Sin(u) * radius, 0f);
                for (var j = 0; j < sides; j++)
                {
                    var v = j / (float)sides * Mathf.PI * 2f;
                    var normal = new Vector3(Mathf.Cos(u) * Mathf.Cos(v), Mathf.Sin(u) * Mathf.Cos(v), Mathf.Sin(v));
                    normals[vi] = normal;
                    vertices[vi] = center + normal * tube;
                    vi++;
                }
            }

            var ti = 0;
            for (var i = 0; i < segments; i++)
            {
                for (var j = 0; j < sides; j++)
                {
                    var a = i * sides + j;
                    var b = ((i + 1) % segments) * sides + j;
                    var c = ((i + 1) % segments) * sides + (j + 1) % sides;
                    var d = i * sides + (j + 1) % sides;
                    triangles[ti++] = a;
                    triangles[ti++] = b;
                    triangles[ti++] = c;
                    triangles[ti++] = a;
                    triangles[ti++] = c;
                    triangles[ti++] = d;
                }
            }

            var mesh = new Mesh { name = "ScoreRing" };
            mesh.vertices = vertices;
            mesh.normals = normals;
            mesh.triangles = triangles;
            mesh.RecalculateBounds();
            AssetDatabase.CreateAsset(mesh, assetPath);
            return mesh;
        }

        static GameObject CreateFlightRig(Materials materials)
        {
            var rigObject = new GameObject("FlightRig");
            // Travel is locked to world -Z. Turn the rig so the headset's default
            // forward faces the pipes on first launch.
            rigObject.transform.rotation = Quaternion.Euler(0f, 180f, 0f);
            rigObject.transform.position = new Vector3(0f, 5f, 0f);

            var flight = rigObject.AddComponent<FlapFlightController>();
            var avatar = rigObject.AddComponent<BirdAvatarController>();

            var rigType = FindType("OVRCameraRig");
            var managerType = FindType("OVRManager");
            if (rigType == null || managerType == null)
            {
                throw new InvalidOperationException(
                    "OVRCameraRig / OVRManager were not found. Import com.meta.xr.sdk.all before building the scene.");
            }

            var manager = rigObject.AddComponent(managerType);
            var rig = rigObject.AddComponent(rigType);
            // Meta XR SDK 207 exposes anchors as runtime properties. EnsureGameObjectIntegrity
            // creates TrackingSpace, CenterEyeAnchor, and the hand anchors and is called again
            // from OVRCameraRig.Awake, which reuses those children by name.
            InvokeIfPresent(rig, "EnsureGameObjectIntegrity");

            var centerEye = Anchor(rig, "centerEyeAnchor");
            var leftHand = Anchor(rig, "leftHandAnchor");
            var rightHand = Anchor(rig, "rightHandAnchor");
            if (centerEye == null || leftHand == null || rightHand == null)
            {
                throw new InvalidOperationException(
                    "OVRCameraRig.EnsureGameObjectIntegrity did not create the eye and hand anchors.");
            }

            // EyeLevel keeps the headset at the flight rig, whose start height is y = 5.
            SetEnum(manager, "_trackingOriginType", 0);

            foreach (var camera in rigObject.GetComponentsInChildren<Camera>(true))
                camera.nearClipPlane = 0.05f;
            if (rigObject.GetComponentInChildren<AudioListener>(true) == null)
                centerEye.gameObject.AddComponent<AudioListener>();

            var beak = CreateBeak(materials);
            beak.transform.SetParent(centerEye, false);
            beak.transform.localPosition = new Vector3(0f, -1.5f, 0.32f);
            beak.transform.localRotation = Quaternion.Euler(10f, 0f, 0f);

            var leftWing = CreateWing(materials, true);
            leftWing.transform.SetParent(leftHand, false);
            var rightWing = CreateWing(materials, false);
            rightWing.transform.SetParent(rightHand, false);

            var hit = new GameObject("HeadCollider");
            hit.transform.SetParent(centerEye, false);
            var sphere = hit.AddComponent<SphereCollider>();
            sphere.isTrigger = true;
            sphere.radius = 0.18f;
            var body = hit.AddComponent<Rigidbody>();
            body.isKinematic = true;
            body.useGravity = false;
            hit.AddComponent<FlightCollision>();

            var flightSo = new SerializedObject(flight);
            SetRef(flightSo, "leftWingTransform", leftWing.transform);
            SetRef(flightSo, "rightWingTransform", rightWing.transform);
            SetRef(flightSo, "birdBeakTransform", beak.transform);
            flightSo.ApplyModifiedPropertiesWithoutUndo();

            var avatarSo = new SerializedObject(avatar);
            SetRef(avatarSo, "leftControllerAnchor", leftHand);
            SetRef(avatarSo, "rightControllerAnchor", rightHand);
            SetRef(avatarSo, "leftWingMesh", leftWing.transform);
            SetRef(avatarSo, "rightWingMesh", rightWing.transform);
            SetRef(avatarSo, "centerEyeCamera", centerEye);
            SetRef(avatarSo, "beakMesh", beak.transform);
            avatarSo.ApplyModifiedPropertiesWithoutUndo();

            return rigObject;
        }

        static GameObject CreateBeak(Materials materials)
        {
            var beak = new GameObject("Beak");
            var mesh = FacetedBeak();
            var filter = beak.AddComponent<MeshFilter>();
            filter.sharedMesh = mesh;
            var renderer = beak.AddComponent<MeshRenderer>();
            renderer.sharedMaterial = materials.Beak;

            var left = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            left.name = "LeftNostril";
            left.transform.SetParent(beak.transform, false);
            left.transform.localPosition = new Vector3(-0.024f, 0.032f, 0.08f);
            left.transform.localScale = new Vector3(0.012f, 0.018f, 0.016f);
            left.GetComponent<Renderer>().sharedMaterial = materials.Nostril;
            UnityEngine.Object.DestroyImmediate(left.GetComponent<Collider>());

            var right = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            right.name = "RightNostril";
            right.transform.SetParent(beak.transform, false);
            right.transform.localPosition = new Vector3(0.024f, 0.032f, 0.08f);
            right.transform.localScale = new Vector3(0.012f, 0.018f, 0.016f);
            right.GetComponent<Renderer>().sharedMaterial = materials.Nostril;
            UnityEngine.Object.DestroyImmediate(right.GetComponent<Collider>());
            return beak;
        }

        static Mesh FacetedBeak()
        {
            const string path = "Assets/Materials/BeakMesh.asset";
            var existing = AssetDatabase.LoadAssetAtPath<Mesh>(path);
            if (existing != null) return existing;

            var tip = new Vector3(0f, 0f, 0.28f);
            var corners = new[]
            {
                new Vector3(-0.07f, -0.045f, 0f),
                new Vector3(0.07f, -0.045f, 0f),
                new Vector3(0.07f, 0.05f, 0f),
                new Vector3(-0.07f, 0.05f, 0f)
            };
            var vertices = new Vector3[12];
            var triangles = new int[12];
            for (var i = 0; i < 4; i++)
            {
                vertices[i * 3] = tip;
                vertices[i * 3 + 1] = corners[i];
                vertices[i * 3 + 2] = corners[(i + 1) % 4];
                triangles[i * 3] = i * 3;
                triangles[i * 3 + 1] = i * 3 + 1;
                triangles[i * 3 + 2] = i * 3 + 2;
            }

            var mesh = new Mesh { name = "FacetedBeak" };
            mesh.vertices = vertices;
            mesh.triangles = triangles;
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            AssetDatabase.CreateAsset(mesh, path);
            return mesh;
        }

        static GameObject CreateWing(Materials materials, bool left)
        {
            var wing = new GameObject(left ? "LeftWing" : "RightWing");
            var sign = left ? -1f : 1f;
            for (var i = 0; i < 5; i++)
            {
                var feather = GameObject.CreatePrimitive(PrimitiveType.Cube);
                feather.name = "Feather" + i;
                feather.transform.SetParent(wing.transform, false);
                var length = 0.36f - i * 0.04f;
                feather.transform.localScale = new Vector3(length, 0.035f, 0.09f - i * 0.008f);
                feather.transform.localPosition = new Vector3(sign * (0.12f + i * 0.07f), -i * 0.02f, -i * 0.03f);
                feather.transform.localRotation = Quaternion.Euler(0f, sign * -8f, sign * (8f + i * 10f));
                feather.GetComponent<Renderer>().sharedMaterial = i == 0 ? materials.WingCyan : materials.WingWhite;
                UnityEngine.Object.DestroyImmediate(feather.GetComponent<Collider>());
            }
            return wing;
        }

        static void CreateGameSystems(GameObject flightRig, GameObject pipePrefab)
        {
            var systems = new GameObject("GameSystems");
            var game = systems.AddComponent<GameManager>();
            var spawner = systems.AddComponent<PipeSpawner>();
            systems.AddComponent<MetaPlatformManager>();
            var avatar = flightRig.GetComponent<BirdAvatarController>();
            var flight = flightRig.GetComponent<FlapFlightController>();

            var sfx = systems.AddComponent<AudioSource>();
            sfx.playOnAwake = false;
            sfx.spatialBlend = 0f;

            var bgm = systems.AddComponent<AudioSource>();
            bgm.playOnAwake = false;
            bgm.loop = true;
            bgm.volume = 0.38f;
            bgm.spatialBlend = 0f;
            var clip = LoadClip(BgmPath);
            bgm.clip = clip;

            var announcer = new AudioClip[20];
            for (var i = 0; i < announcer.Length; i++)
                announcer[i] = LoadClip("Assets/Audio/Voice/voice_" + (i + 1) + ".mp3");

            var uhOh = LoadClip("Assets/Audio/Voice/voice_fatality.mp3");

            var gameSo = new SerializedObject(game);
            SetRef(gameSo, "flightController", flight);
            SetRef(gameSo, "pipeSpawner", spawner);
            SetRef(gameSo, "avatarController", avatar);
            SetRef(gameSo, "audioSource", sfx);
            SetRef(gameSo, "bgmAudioSource", bgm);
            SetRef(gameSo, "bgmClip", clip);
            SetClipArray(gameSo, "flapClips", new[]
            {
                LoadClip("Assets/Audio/SFX/flap_1.mp3"),
                LoadClip("Assets/Audio/SFX/flap_2.mp3"),
                LoadClip("Assets/Audio/SFX/flap_3.mp3")
            });
            SetRef(gameSo, "bonkClip", LoadClip("Assets/Audio/SFX/bonk.mp3"));
            SetRef(gameSo, "gameOverClip", LoadClip("Assets/Audio/SFX/gameover.mp3"));
            SetRef(gameSo, "fightClip", LoadClip("Assets/Audio/Voice/voice_fight.mp3"));
            SetRef(gameSo, "uhOhClip", uhOh);
            SetRef(gameSo, "fatalityClip", uhOh);
            SetClipArray(gameSo, "announcerClips", announcer);
            gameSo.ApplyModifiedPropertiesWithoutUndo();

            var spawnerSo = new SerializedObject(spawner);
            SetRef(spawnerSo, "pipePrefab", pipePrefab);
            spawnerSo.ApplyModifiedPropertiesWithoutUndo();
        }

        static void CreateHud(Transform flightRoot)
        {
            var hudObject = new GameObject("Hud");
            var hud = hudObject.AddComponent<FlightHud>();
            var score = MakeText("Score", hudObject.transform, new Vector3(0f, 0.55f, 0f), 0.12f, Color.white);
            var best = MakeText("Best", hudObject.transform, new Vector3(0f, -0.15f, 0f), 0.05f, new Color(1f, 0.95f, 0.8f));
            var prompt = MakeText("Prompt", hudObject.transform, new Vector3(0f, -0.7f, 0f), 0.045f, Color.white);

            var so = new SerializedObject(hud);
            SetRef(so, "flightRoot", flightRoot);
            SetRef(so, "scoreText", score);
            SetRef(so, "bestText", best);
            SetRef(so, "promptText", prompt);
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        static TextMesh MakeText(string name, Transform parent, Vector3 localPosition, float characterSize, Color color)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = localPosition;
            var text = go.AddComponent<TextMesh>();
            text.text = name;
            text.anchor = TextAnchor.MiddleCenter;
            text.alignment = TextAlignment.Center;
            text.characterSize = characterSize;
            text.fontSize = 64;
            text.color = color;
            text.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            return text;
        }

        static Type FindType(string simpleName)
        {
            foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                Type[] types;
                try
                {
                    types = assembly.GetTypes();
                }
                catch (ReflectionTypeLoadException ex)
                {
                    types = ex.Types;
                }

                if (types == null) continue;
                foreach (var type in types)
                {
                    if (type != null && type.Name == simpleName)
                        return type;
                }
            }
            return null;
        }

        static void InvokeIfPresent(Component component, string methodName)
        {
            var method = component.GetType().GetMethod(methodName, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
            if (method != null && method.GetParameters().Length == 0)
                method.Invoke(component, null);
        }

        static Transform Anchor(Component rig, string propertyName)
        {
            var property = rig.GetType().GetProperty(propertyName, BindingFlags.Instance | BindingFlags.Public);
            return property != null ? property.GetValue(rig) as Transform : null;
        }

        static void SetEnum(Component component, string field, int value)
        {
            var so = new SerializedObject(component);
            var prop = so.FindProperty(field);
            if (prop == null)
            {
                Debug.LogWarning("[FloppyFlight] Could not set " + component.GetType().Name + "." + field);
                return;
            }
            prop.enumValueIndex = value;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        static AudioClip LoadClip(string path)
        {
            var clip = AssetDatabase.LoadAssetAtPath<AudioClip>(path);
            if (clip == null)
                Debug.LogWarning("[FloppyFlight] Missing audio clip at " + path);
            return clip;
        }

        static void SetClipArray(SerializedObject so, string property, AudioClip[] clips)
        {
            var prop = so.FindProperty(property);
            if (prop == null || !prop.isArray)
                throw new InvalidOperationException("Missing clip array '" + property + "' on " + so.targetObject.GetType().Name + ".");
            prop.arraySize = clips.Length;
            for (var i = 0; i < clips.Length; i++)
                prop.GetArrayElementAtIndex(i).objectReferenceValue = clips[i];
        }

        static void SetRef(SerializedObject so, string property, UnityEngine.Object value)
        {
            var prop = so.FindProperty(property);
            if (prop == null)
                throw new InvalidOperationException("Missing serialized field '" + property + "' on " + so.targetObject.GetType().Name + ".");
            prop.objectReferenceValue = value;
        }
    }
}
