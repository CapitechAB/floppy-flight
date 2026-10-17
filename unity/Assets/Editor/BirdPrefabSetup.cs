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
        const string ControllerPath = "Assets/Art/Bird/FloppyBird.controller";
        const float BirdScale = 4f;
        const float BodyRadius = 0.12f;

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

        public static string MaterialPath(string materialName)
        {
            return "Assets/Art/Bird/Materials/" + materialName + ".mat";
        }

        public static GameObject EnsurePrefab()
        {
            EnsureMaterials();
            var existing = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabPath);
            if (IsReady(existing)) return existing;
            return BuildPrefab();
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

        static GameObject BuildPrefab()
        {
            var model = LoadModel();
            if (model == null)
            {
                Debug.LogError("[FloppyFlight] Bird model missing at " + ModelPath);
                return null;
            }

            var controller = EnsureController();
            var instance = (GameObject)PrefabUtility.InstantiatePrefab(model);
            instance.name = "FloppyBird";
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

            AssignProjectMaterials(instance);

            var prefab = PrefabUtility.SaveAsPrefabAsset(instance, PrefabPath);
            UnityEngine.Object.DestroyImmediate(instance);
            Debug.Log("[FloppyFlight] Created " + PrefabPath);
            return prefab;
        }

        static GameObject LoadModel()
        {
            var model = AssetDatabase.LoadAssetAtPath<GameObject>(ModelPath);
            if (model != null) return model;
            AssetDatabase.ImportAsset(ModelPath, ImportAssetOptions.ForceUpdate);
            return AssetDatabase.LoadAssetAtPath<GameObject>(ModelPath);
        }

        static RuntimeAnimatorController EnsureController()
        {
            var existing = AssetDatabase.LoadAssetAtPath<AnimatorController>(ControllerPath);
            if (existing != null && ControllerHasFlap(existing)) return existing;

            var clip = LoadFlapClip();
            if (clip == null)
            {
                Debug.LogError("[FloppyFlight] FloppyBird.fbx has no Flap animation clip.");
                return existing;
            }

            var settings = AnimationUtility.GetAnimationClipSettings(clip);
            if (!settings.loopTime)
            {
                settings.loopTime = true;
                AnimationUtility.SetAnimationClipSettings(clip, settings);
                clip = LoadFlapClip();
                if (clip == null) return existing;
            }

            if (existing != null)
                AssetDatabase.DeleteAsset(ControllerPath);

            var controller = AnimatorController.CreateAnimatorControllerAtPath(ControllerPath);
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

        static AnimationClip LoadFlapClip()
        {
            var assets = AssetDatabase.LoadAllAssetsAtPath(ModelPath);
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

        static void AssignProjectMaterials(GameObject instance)
        {
            var renderers = instance.GetComponentsInChildren<Renderer>(true);
            for (var r = 0; r < renderers.Length; r++)
            {
                var renderer = renderers[r];
                var slots = renderer.sharedMaterials;
                var changed = false;
                for (var i = 0; i < slots.Length; i++)
                {
                    var project = AssetDatabase.LoadAssetAtPath<Material>(MaterialPath(SlotName(slots[i])));
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

        static void EnsureMaterials()
        {
            var rebuilt = false;
            for (var i = 0; i < MaterialNames.Length; i++)
            {
                var name = MaterialNames[i];
                var path = MaterialPath(name);
                if (AssetDatabase.LoadAssetAtPath<Material>(path) != null) continue;

                var absolute = Path.Combine(Application.dataPath, "Art/Bird/Materials/" + name + ".mat");
                if (File.Exists(absolute))
                {
                    File.Delete(absolute);
                    AssetDatabase.Refresh();
                }

                var material = CreateFallbackMaterial(name);
                if (material == null) continue;
                AssetDatabase.CreateAsset(material, path);
                rebuilt = true;
            }

            if (rebuilt)
                AssetDatabase.ImportAsset(ModelPath, ImportAssetOptions.ForceUpdate);
        }

        static Material CreateFallbackMaterial(string name)
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
                outline.color = new Color(0.102f, 0.055f, 0.039f, 1f);
                outline.renderQueue = 2001;
                return outline;
            }

            var standard = Shader.Find("Standard");
            if (standard == null)
            {
                Debug.LogError("[FloppyFlight] Built-in Standard shader was not found.");
                return null;
            }

            var color = FallbackColor(name);
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

        static Color FallbackColor(string name)
        {
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

        static Color Hex(int r, int g, int b)
        {
            return new Color(r / 255f, g / 255f, b / 255f, 1f);
        }
    }
}
