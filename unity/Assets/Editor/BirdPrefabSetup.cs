using System.IO;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Builds the FloppyBird obstacle prefab from the imported FBX the first time
    /// the scene generator runs. The model is about 0.31 m; the prefab scales it
    /// so the round body reads in the pipe-sized world.
    /// </summary>
    public static class BirdPrefabSetup
    {
        public const string ModelPath = "Assets/Art/Bird/FloppyBird.fbx";
        public const string PrefabPath = "Assets/Prefabs/FloppyBird.prefab";
        public const string PurpleModelPath = "Assets/Art/Bird/PurpleBird.fbx";
        public const string PurplePrefabPath = "Assets/Prefabs/PurpleBird.prefab";
        const string ControllerPath = "Assets/Art/Bird/FloppyBird.controller";
        const string PurpleControllerPath = "Assets/Art/Bird/PurpleBird.controller";
        const float BirdScale = 4f;
        const float BodyRadius = 0.12f;

        enum BirdKind
        {
            Orange,
            Purple
        }

        public static readonly string[] MaterialNames =
        {
            "Bird_Body",
            "Bird_Belly",
            "Bird_Beak",
            "Bird_Mouth",
            "Bird_EyeWhite",
            "Bird_Pupil",
            "Bird_Crest",
            "Bird_Wing",
            "Bird_Outline"
        };

        public static readonly string[] PurpleMaterialNames =
        {
            "Bird_Body",
            "Bird_Belly",
            "Bird_WingCovert",
            "Bird_Wing",
            "Bird_Beak",
            "Bird_Pupil",
            "Bird_Eye",
            "Bird_Feet",
            "Bird_Outline"
        };

        public static string MaterialPath(string materialName)
        {
            return "Assets/Art/Bird/Materials/" + materialName + ".mat";
        }

        public static string PurpleMaterialPath(string materialName)
        {
            return "Assets/Art/Bird/Purple/Materials/" + materialName + ".mat";
        }

        public static GameObject EnsurePrefab()
        {
            return Ensure(BirdKind.Orange);
        }

        public static GameObject EnsurePurplePrefab()
        {
            return Ensure(BirdKind.Purple);
        }

        static GameObject Ensure(BirdKind kind)
        {
            EnsureMaterials(kind);
            var existing = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabPathOf(kind));
            if (IsReady(existing)) return existing;
            return BuildPrefab(kind);
        }

        static bool IsReady(GameObject prefab)
        {
            if (prefab == null) return false;
            if (prefab.GetComponent<Obstacles.FloppyBird>() == null) return false;
            var animator = prefab.GetComponent<Animator>();
            if (animator == null || animator.runtimeAnimatorController == null) return false;
            var sphere = prefab.GetComponent<SphereCollider>();
            if (sphere == null || !sphere.isTrigger) return false;
            var body = prefab.GetComponent<Rigidbody>();
            return body != null && body.isKinematic;
        }

        static GameObject BuildPrefab(BirdKind kind)
        {
            var model = LoadModel(kind);
            if (model == null)
            {
                Debug.LogError("[FloppyFlight] Bird model missing at " + ModelPathOf(kind));
                return null;
            }

            var controller = EnsureController(kind);
            var instance = (GameObject)PrefabUtility.InstantiatePrefab(model);
            instance.name = kind == BirdKind.Purple ? "PurpleBird" : "FloppyBird";
            instance.transform.localScale = Vector3.one * BirdScale;

            var animator = instance.GetComponent<Animator>();
            if (animator == null) animator = instance.AddComponent<Animator>();
            animator.runtimeAnimatorController = controller;
            animator.applyRootMotion = false;
            animator.cullingMode = AnimatorCullingMode.AlwaysAnimate;

            var sphere = instance.GetComponent<SphereCollider>();
            if (sphere == null) sphere = instance.AddComponent<SphereCollider>();
            sphere.isTrigger = true;
            sphere.center = Vector3.zero;
            sphere.radius = BodyRadius;

            var body = instance.GetComponent<Rigidbody>();
            if (body == null) body = instance.AddComponent<Rigidbody>();
            body.isKinematic = true;
            body.useGravity = false;
            body.interpolation = RigidbodyInterpolation.None;
            body.collisionDetectionMode = CollisionDetectionMode.ContinuousSpeculative;
            body.constraints = RigidbodyConstraints.FreezeRotation;

            if (instance.GetComponent<Obstacles.FloppyBird>() == null)
                instance.AddComponent<Obstacles.FloppyBird>();

            AssignProjectMaterials(instance, kind);

            var prefabPath = PrefabPathOf(kind);
            var prefab = PrefabUtility.SaveAsPrefabAsset(instance, prefabPath);
            UnityEngine.Object.DestroyImmediate(instance);
            Debug.Log("[FloppyFlight] Created " + prefabPath);
            return prefab;
        }

        static GameObject LoadModel(BirdKind kind)
        {
            var modelPath = ModelPathOf(kind);
            var model = AssetDatabase.LoadAssetAtPath<GameObject>(modelPath);
            if (model != null) return model;
            AssetDatabase.ImportAsset(modelPath, ImportAssetOptions.ForceUpdate);
            return AssetDatabase.LoadAssetAtPath<GameObject>(modelPath);
        }

        static RuntimeAnimatorController EnsureController(BirdKind kind)
        {
            var controllerPath = ControllerPathOf(kind);
            var existing = AssetDatabase.LoadAssetAtPath<AnimatorController>(controllerPath);
            if (existing != null && ControllerHasFlap(existing)) return existing;

            var clip = LoadFlapClip(kind);
            if (clip == null)
            {
                Debug.LogError("[FloppyFlight] " + ModelPathOf(kind) + " has no Flap animation clip.");
                return existing;
            }

            var settings = AnimationUtility.GetAnimationClipSettings(clip);
            if (!settings.loopTime)
            {
                settings.loopTime = true;
                AnimationUtility.SetAnimationClipSettings(clip, settings);
                clip = LoadFlapClip(kind);
                if (clip == null) return existing;
            }

            if (existing != null)
                AssetDatabase.DeleteAsset(controllerPath);

            var controller = AnimatorController.CreateAnimatorControllerAtPath(controllerPath);
            var machine = controller.layers[0].stateMachine;
            var state = machine.AddState("Flap");
            state.motion = clip;
            machine.defaultState = state;
            EditorUtility.SetDirty(controller);
            AssetDatabase.SaveAssets();
            return controller;
        }

        static bool ControllerHasFlap(AnimatorController controller)
        {
            if (controller.layers == null || controller.layers.Length == 0) return false;
            var machine = controller.layers[0].stateMachine;
            if (machine == null) return false;
            var states = machine.states;
            for (var i = 0; i < states.Length; i++)
            {
                if (states[i].state != null && states[i].state.name == "Flap" && states[i].state.motion != null)
                    return true;
            }
            return false;
        }

        static AnimationClip LoadFlapClip(BirdKind kind)
        {
            var assets = AssetDatabase.LoadAllAssetsAtPath(ModelPathOf(kind));
            AnimationClip fallback = null;
            for (var i = 0; i < assets.Length; i++)
            {
                var clip = assets[i] as AnimationClip;
                if (clip == null || clip.name.StartsWith("__preview__")) continue;
                if (clip.name == "Flap") return clip;
                fallback = clip;
            }
            return fallback;
        }

        static void AssignProjectMaterials(GameObject instance, BirdKind kind)
        {
            var renderers = instance.GetComponentsInChildren<Renderer>(true);
            for (var r = 0; r < renderers.Length; r++)
            {
                var renderer = renderers[r];
                var slots = renderer.sharedMaterials;
                var changed = false;
                for (var i = 0; i < slots.Length; i++)
                {
                    var project = AssetDatabase.LoadAssetAtPath<Material>(MaterialPathOf(kind, SlotName(slots[i])));
                    if (project == null || slots[i] == project) continue;
                    slots[i] = project;
                    changed = true;
                }
                if (changed) renderer.sharedMaterials = slots;

                renderer.shadowCastingMode = ShadowCastingMode.Off;
                renderer.lightProbeUsage = LightProbeUsage.Off;
                renderer.reflectionProbeUsage = ReflectionProbeUsage.Off;
            }
        }

        static string SlotName(Material material)
        {
            if (material == null) return "";
            var name = material.name;
            const string suffix = " (Instance)";
            if (name.EndsWith(suffix))
                name = name.Substring(0, name.Length - suffix.Length);
            return name;
        }

        static void EnsureMaterials(BirdKind kind)
        {
            var names = NamesOf(kind);
            var rebuilt = false;
            for (var i = 0; i < names.Length; i++)
            {
                var name = names[i];
                var path = MaterialPathOf(kind, name);
                if (AssetDatabase.LoadAssetAtPath<Material>(path) != null) continue;

                var absolute = AbsoluteMaterialPath(kind, name);
                if (File.Exists(absolute))
                {
                    File.Delete(absolute);
                    AssetDatabase.Refresh();
                }

                var material = CreateFallbackMaterial(kind, name);
                if (material == null) continue;
                AssetDatabase.CreateAsset(material, path);
                rebuilt = true;
            }

            if (rebuilt)
                AssetDatabase.ImportAsset(ModelPathOf(kind), ImportAssetOptions.ForceUpdate);
        }

        static Material CreateFallbackMaterial(BirdKind kind, string name)
        {
            if (name == "Bird_Outline")
            {
                var shader = Shader.Find("FloppyFlight/BirdOutline");
                if (shader == null)
                {
                    Debug.LogError("[FloppyFlight] Bird outline shader was not found.");
                    return null;
                }

                var outline = new Material(shader) { name = name };
                outline.color = kind == BirdKind.Purple
                    ? new Color(0.025187f, 0.010330f, 0.059511f, 1f)
                    : new Color(0.102f, 0.055f, 0.039f, 1f);
                outline.renderQueue = 2001;
                return outline;
            }

            var standard = Shader.Find("Standard");
            if (standard == null)
            {
                Debug.LogError("[FloppyFlight] Built-in Standard shader was not found.");
                return null;
            }

            var color = FallbackColor(kind, name);
            var material = new Material(standard) { name = name, color = color };
            material.SetFloat("_Glossiness", 0.3f);
            material.SetFloat("_Metallic", 0f);
            material.SetFloat("_SpecularHighlights", 0f);
            material.SetFloat("_GlossyReflections", 0f);
            material.EnableKeyword("_SPECULARHIGHLIGHTS_OFF");
            material.EnableKeyword("_GLOSSYREFLECTIONS_OFF");
            material.enableInstancing = true;
            return material;
        }

        static Color FallbackColor(BirdKind kind, string name)
        {
            if (kind == BirdKind.Purple)
            {
                switch (name)
                {
                    case "Bird_Body": return Hex(0xA5, 0x8A, 0xD9);
                    case "Bird_Belly": return Hex(0xEB, 0xC7, 0xE6);
                    case "Bird_WingCovert": return Hex(0x92, 0x77, 0xCE);
                    case "Bird_Wing": return Hex(0x6D, 0x4F, 0xB3);
                    case "Bird_Beak": return Hex(0xF7, 0xA6, 0x32);
                    case "Bird_Pupil": return Hex(0x12, 0x0D, 0x16);
                    case "Bird_Eye": return Hex(0xFF, 0xFF, 0xFF);
                    case "Bird_Feet": return Hex(0xF0, 0x90, 0x2E);
                    default: return Color.white;
                }
            }

            switch (name)
            {
                case "Bird_Body": return Hex(0xF0, 0x7A, 0x2A);
                case "Bird_Belly": return Hex(0xFC, 0xAE, 0x7C);
                case "Bird_Beak": return Hex(0xF9, 0xA2, 0x3A);
                case "Bird_Mouth": return Hex(0x4E, 0x14, 0x18);
                case "Bird_EyeWhite": return Hex(0xFA, 0xFA, 0xFA);
                case "Bird_Pupil": return Hex(0x14, 0x14, 0x14);
                case "Bird_Crest": return Hex(0xFA, 0xAE, 0x3C);
                case "Bird_Wing": return Hex(0xEE, 0x7E, 0x68);
                default: return Color.white;
            }
        }

        static string ModelPathOf(BirdKind kind)
        {
            return kind == BirdKind.Purple ? PurpleModelPath : ModelPath;
        }

        static string PrefabPathOf(BirdKind kind)
        {
            return kind == BirdKind.Purple ? PurplePrefabPath : PrefabPath;
        }

        static string ControllerPathOf(BirdKind kind)
        {
            return kind == BirdKind.Purple ? PurpleControllerPath : ControllerPath;
        }

        static string[] NamesOf(BirdKind kind)
        {
            return kind == BirdKind.Purple ? PurpleMaterialNames : MaterialNames;
        }

        static string MaterialPathOf(BirdKind kind, string materialName)
        {
            return kind == BirdKind.Purple ? PurpleMaterialPath(materialName) : MaterialPath(materialName);
        }

        static string AbsoluteMaterialPath(BirdKind kind, string materialName)
        {
            var folder = kind == BirdKind.Purple
                ? "Art/Bird/Purple/Materials/"
                : "Art/Bird/Materials/";
            return Path.Combine(Application.dataPath, folder + materialName + ".mat");
        }

        static Color Hex(int r, int g, int b)
        {
            return new Color(r / 255f, g / 255f, b / 255f, 1f);
        }
    }
}
