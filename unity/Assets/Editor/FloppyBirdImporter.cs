using UnityEditor;
using UnityEngine;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Keeps the Flap clip looping and the FBX slots on the project materials.
    /// The .meta already records loopTime and the remaps; this runs on import
    /// so a fresh take range from the file still loops.
    /// </summary>
    public class FloppyBirdImporter : AssetPostprocessor
    {
        const string ModelPath = "Assets/Art/Bird/FloppyBird.fbx";
        const string PurpleModelPath = "Assets/Art/Bird/PurpleBird.fbx";

        string NormalizedPath => assetPath.Replace('\\', '/');
        bool IsOrange => NormalizedPath == ModelPath;
        bool IsPurple => NormalizedPath == PurpleModelPath;
        bool IsBird => IsOrange || IsPurple;

        void OnPreprocessModel()
        {
            if (!IsBird) return;

            var importer = (ModelImporter)assetImporter;
            if (importer.animationType != ModelImporterAnimationType.Generic)
                importer.animationType = ModelImporterAnimationType.Generic;
            if (importer.avatarSetup != ModelImporterAvatarSetup.CreateFromThisModel)
                importer.avatarSetup = ModelImporterAvatarSetup.CreateFromThisModel;
            if (!importer.importAnimation)
                importer.importAnimation = true;
            if (importer.materialImportMode != ModelImporterMaterialImportMode.ImportViaMaterialDescription)
                importer.materialImportMode = ModelImporterMaterialImportMode.ImportViaMaterialDescription;
            if (importer.animationCompression != ModelImporterAnimationCompression.Off)
                importer.animationCompression = ModelImporterAnimationCompression.Off;
            if (importer.optimizeBones)
                importer.optimizeBones = false;

            RemapMaterials(importer);
        }

        void OnPreprocessAnimation()
        {
            if (!IsBird) return;

            var importer = (ModelImporter)assetImporter;
            var defaults = importer.defaultClipAnimations;
            if (defaults == null || defaults.Length == 0) return;

            for (var i = 0; i < defaults.Length; i++)
            {
                // Unity 6 names: loopTime loops the clip, loopPose is the old loopBlend
                // pose blend (still stored as loopBlend in the .meta). Leave pose blend off;
                // the authored flap already cycles cleanly.
                defaults[i].loopTime = true;
                defaults[i].loopPose = false;
                if (defaults.Length == 1 || defaults[i].takeName == "Flap" || defaults[i].name == "Flap")
                    defaults[i].name = "Flap";
            }

            var current = importer.clipAnimations;
            if (ClipsMatch(current, defaults)) return;
            importer.clipAnimations = defaults;
        }

        static bool ClipsMatch(ModelImporterClipAnimation[] current, ModelImporterClipAnimation[] defaults)
        {
            if (current == null || current.Length != defaults.Length) return false;
            for (var i = 0; i < defaults.Length; i++)
            {
                if (!current[i].loopTime) return false;
                if (current[i].name != defaults[i].name) return false;
                if (Mathf.Abs(current[i].firstFrame - defaults[i].firstFrame) > 0.01f) return false;
                if (Mathf.Abs(current[i].lastFrame - defaults[i].lastFrame) > 0.01f) return false;
            }
            return true;
        }

        void RemapMaterials(ModelImporter importer)
        {
            var map = importer.GetExternalObjectMap();
            var pending = new System.Collections.Generic.List<string>();
            var names = IsPurple ? BirdPrefabSetup.PurpleMaterialNames : BirdPrefabSetup.MaterialNames;
            foreach (var name in names)
            {
                var material = AssetDatabase.LoadAssetAtPath<Material>(MaterialAssetPath(name));
                if (material == null) continue;

                var already = false;
                foreach (var pair in map)
                {
                    if (pair.Key.name == name && pair.Value == material)
                    {
                        already = true;
                        break;
                    }
                }
                if (!already) pending.Add(name);
            }

            for (var i = 0; i < pending.Count; i++)
            {
                var name = pending[i];
                var material = AssetDatabase.LoadAssetAtPath<Material>(MaterialAssetPath(name));
                importer.AddRemap(new AssetImporter.SourceAssetIdentifier(typeof(Material), name), material);
            }
        }

        string MaterialAssetPath(string materialName)
        {
            return IsPurple
                ? BirdPrefabSetup.PurpleMaterialPath(materialName)
                : BirdPrefabSetup.MaterialPath(materialName);
        }
    }
}
