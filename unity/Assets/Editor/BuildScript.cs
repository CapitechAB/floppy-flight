using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text;
using System.Xml;
using UnityEditor;
using UnityEditor.Android;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEditor.XR.Management;
using UnityEditor.XR.Management.Metadata;
using UnityEditor.XR.OpenXR.Features;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.XR.Management;
using UnityEngine.XR.OpenXR;
using UnityEngine.XR.OpenXR.Features.MetaQuestSupport;

namespace FloppyFlight.Editor
{
    /// <summary>
    /// Configures a Quest App Lab / Horizon Store player and builds a signed release .aab.
    /// Signing material is read from command-line arguments (game-ci) or environment
    /// variables. Passwords are cleared from Player Settings after the build.
    /// </summary>
    public static class BuildScript
    {
        public const string PackageName = "com.capitechab.floppyflight";
        public const string MobilePackageName = "com.capitech.floppyflight.mobile";
        public const string ProductName = "Floppy Flight";
        public const string CompanyName = "Capitech AB";
        public const string DefaultVersion = "1.0.0";
        public const string MobileDefine = "FLOPPY_MOBILE";
        const string TargetPref = "FloppyFlight.Target";
        const string OpenXrLoader = "UnityEngine.XR.OpenXR.OpenXRLoader";
        const string MetaXrFeatureSetId = "com.meta.openxr.featureset.metaxr";
        const string MetaXrFeatureId = "com.meta.openxr.feature.metaxr";

        static int s_bootstrapRetries;
        static bool s_buildInProgress;

        [InitializeOnLoadMethod]
        static void Bootstrap()
        {
            EditorApplication.delayCall += ApplyWhenReady;
        }

        static void ApplyWhenReady()
        {
            // Batch mode applies the target inside BuildRelease, after assemblies are locked.
            // Setting FLOPPY_MOBILE from this delay call domain-reloads and drops -executeMethod.
            if (s_buildInProgress || Application.isBatchMode)
                return;
            if ((EditorApplication.isCompiling || EditorApplication.isUpdating) && s_bootstrapRetries < 5)
            {
                s_bootstrapRetries++;
                EditorApplication.delayCall += ApplyWhenReady;
                return;
            }

            try
            {
                var mobile = WantsMobileOnLoad();
                var code = Math.Max(1, PlayerSettings.Android.bundleVersionCode);
                if (mobile)
                    ApplyMobilePlayerSettings(DefaultVersion, code);
                else
                    ApplyPlayerSettings(DefaultVersion, code);
                QuestSceneSetup.PreferMobile = mobile;
                QuestSceneSetup.EnsureMainScene();
            }
            catch (Exception ex)
            {
                Debug.LogWarning("[FloppyFlight] Project setup deferred until packages finish importing: " + ex.Message);
            }
        }

        static bool WantsMobileOnLoad()
        {
            if (CommandLineRequestsMobile()) return true;
            if (Application.isBatchMode) return false;
            return EditorPrefs.GetString(TargetPref, "quest") == "mobile";
        }

        static bool CommandLineRequestsMobile()
        {
            var args = Environment.GetCommandLineArgs();
            for (var i = 0; i < args.Length - 1; i++)
            {
                if (string.Equals(args[i], "-floppyTarget", StringComparison.OrdinalIgnoreCase)
                    && string.Equals(args[i + 1], "mobile", StringComparison.OrdinalIgnoreCase))
                    return true;
            }
            return false;
        }

        [MenuItem("Floppy Flight/Configure Quest Player Settings")]
        public static void ConfigureFromMenu()
        {
            ApplyPlayerSettings(DefaultVersion, Math.Max(1, PlayerSettings.Android.bundleVersionCode));
            ConfigureOpenXr();
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Quest player settings and OpenXR loader are configured.");
        }

        [MenuItem("Floppy Flight/Switch Target/Quest")]
        public static void SwitchToQuest()
        {
            EditorPrefs.SetString(TargetPref, "quest");
            WriteTargetMarker(false);
            ApplyPlayerSettings(DefaultVersion, Math.Max(1, PlayerSettings.Android.bundleVersionCode));
            ConfigureOpenXr();
            QuestSceneSetup.PreferMobile = false;
            QuestSceneSetup.EnsureMainScene();
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Target is Quest. Package " + PackageName + ", landscape, OpenXR on. Enter Play mode after the scripts finish compiling.");
        }

        [MenuItem("Floppy Flight/Switch Target/Mobile")]
        public static void SwitchToMobile()
        {
            EditorPrefs.SetString(TargetPref, "mobile");
            WriteTargetMarker(true);
            ApplyMobilePlayerSettings(DefaultVersion, Math.Max(1, PlayerSettings.Android.bundleVersionCode));
            DisableMobileXr();
            QuestSceneSetup.PreferMobile = true;
            QuestSceneSetup.EnsureMainScene();
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Target is mobile. Package " + MobilePackageName + ", portrait, XR off. Enter Play mode after the scripts finish compiling.");
        }

        [MenuItem("Floppy Flight/Build Signed Release APK")]
        public static void BuildAndroidApk()
        {
            RunBuild(false, false);
        }

        [MenuItem("Floppy Flight/Build Signed Release AAB")]
        public static void BuildAndroidAab()
        {
            RunBuild(true, false);
        }

        [MenuItem("Floppy Flight/Build Mobile APK")]
        public static void BuildMobileApk()
        {
            RunBuild(false, true);
        }

        [MenuItem("Floppy Flight/Build Mobile AAB")]
        public static void BuildMobileAab()
        {
            RunBuild(true, true);
        }

        /// <summary>
        /// Headless entry for CI. Produces a signed APK and a signed AAB.
        /// Unity 6 Build Profiles are not used: game-ci calls this method, and a
        /// profile would be a second source of package name, SDK, and XR state.
        /// FLOPPY_MOBILE plus Library/FloppyFlightTarget.txt is the switch.
        /// </summary>
        public static void BuildMobilePackages()
        {
            var batch = Application.isBatchMode;
            try
            {
                var apk = BuildRelease(false, true);
                var aab = BuildRelease(true, true);
                Debug.Log("[FloppyFlight] Mobile APK: " + apk);
                Debug.Log("[FloppyFlight] Mobile AAB: " + aab);
                if (batch) EditorApplication.Exit(0);
            }
            catch (Exception ex)
            {
                Debug.LogError("[FloppyFlight] Mobile release build failed: " + ex);
                if (batch)
                    EditorApplication.Exit(1);
                else
                    EditorUtility.DisplayDialog("Floppy Flight mobile build failed", ex.Message, "OK");
            }
        }

        static void RunBuild(bool appBundle, bool mobile)
        {
            var batch = Application.isBatchMode;
            var label = (mobile ? "Mobile " : "Quest ") + (appBundle ? "AAB" : "APK");
            try
            {
                var output = BuildRelease(appBundle, mobile);
                Debug.Log("[FloppyFlight] Signed release " + label + ": " + output);
                if (batch) EditorApplication.Exit(0);
            }
            catch (Exception ex)
            {
                Debug.LogError("[FloppyFlight] Release build failed: " + ex);
                if (batch)
                    EditorApplication.Exit(1);
                else
                    EditorUtility.DisplayDialog("Floppy Flight build failed", ex.Message, "OK");
            }
        }

        static string BuildRelease(bool appBundle, bool mobile)
        {
            s_buildInProgress = true;
            var args = ParseArgs();
            var version = GetOpt(args, "buildVersion", "APP_VERSION") ?? DefaultVersion;
            if (string.Equals(version, "none", StringComparison.OrdinalIgnoreCase))
                version = DefaultVersion;

            var versionCode = DefaultVersionCode(args);
            EditorApplication.LockReloadAssemblies();
            try
            {
                if (mobile)
                    ApplyMobilePlayerSettings(version, versionCode);
                else
                    ApplyPlayerSettings(version, versionCode);
                SwitchToAndroid();
                if (mobile)
                    DisableMobileXr();
                else
                {
                    ConfigureOpenXr();
                    ApplyAppId(args);
                }

                QuestSceneSetup.PreferMobile = mobile;
                QuestSceneSetup.EnsureMainScene();
                return BuildSignedPlayer(args, appBundle);
            }
            finally
            {
                // Batch mode exits after the build. Unlocking here would domain-reload
                // over the Exit call when FLOPPY_MOBILE was just added.
                if (!Application.isBatchMode)
                    EditorApplication.UnlockReloadAssemblies();
            }
        }

        static string BuildSignedPlayer(Dictionary<string, string> args, bool appBundle)
        {

            var keystore = ResolveKeystore(args);
            var keystorePass = RequireSecret(args, "androidKeystorePass", "ANDROID_KEYSTORE_PASS", "keystore password");
            var alias = RequireSecret(args, "androidKeyaliasName", "ANDROID_KEYALIAS_NAME", "key alias");
            var aliasPass = RequireSecret(args, "androidKeyaliasPass", "ANDROID_KEYALIAS_PASS", "key alias password");

            var output = ResolveOutput(GetOpt(args, "customBuildPath", appBundle ? "AAB_OUTPUT" : "APK_OUTPUT"), appBundle);
            Directory.CreateDirectory(Path.GetDirectoryName(output) ?? ".");

            try
            {
                PlayerSettings.Android.useCustomKeystore = true;
                PlayerSettings.Android.keystoreName = keystore;
                PlayerSettings.Android.keystorePass = keystorePass;
                PlayerSettings.Android.keyaliasName = alias;
                PlayerSettings.Android.keyaliasPass = aliasPass;

                EditorUserBuildSettings.buildAppBundle = appBundle;
                EditorUserBuildSettings.exportAsGoogleAndroidProject = false;
                EditorUserBuildSettings.androidBuildSystem = AndroidBuildSystem.Gradle;
                EditorUserBuildSettings.development = false;
                EditorUserBuildSettings.connectProfiler = false;
                EditorUserBuildSettings.allowDebugging = false;
                // Unity 6000.0 / AGP 9 sign a release package with APK Signature Scheme v2.
                // Do not set v2SigningEnabled false in a Gradle template or post-process.

                var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
                {
                    scenes = new[] { QuestSceneSetup.ScenePath },
                    locationPathName = output,
                    target = BuildTarget.Android,
                    targetGroup = BuildTargetGroup.Android,
                    options = BuildOptions.None
                });

                if (report.summary.result != BuildResult.Succeeded)
                {
                    throw new InvalidOperationException(
                        "Unity build result: " + report.summary.result + ". " + FirstError(report));
                }

                if (!File.Exists(output))
                {
                    throw new FileNotFoundException(
                        "Build reported success but the " + (appBundle ? ".aab" : ".apk") + " is missing.", output);
                }

                return Path.GetFullPath(output);
            }
            finally
            {
                PlayerSettings.Android.keystorePass = string.Empty;
                PlayerSettings.Android.keyaliasPass = string.Empty;
                PlayerSettings.Android.useCustomKeystore = false;
                PlayerSettings.Android.keystoreName = string.Empty;
                PlayerSettings.Android.keyaliasName = string.Empty;
                AssetDatabase.SaveAssets();
            }
        }

        public static void ApplyPlayerSettings(string version, int versionCode)
        {
            ApplySharedPlayerSettings(version, versionCode, PackageName);
            EditorPrefs.SetString(TargetPref, "quest");
            WriteTargetMarker(false);
            SetMobileDefine(false);
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.LandscapeLeft;
            PlayerSettings.allowedAutorotateToPortrait = false;
            PlayerSettings.allowedAutorotateToPortraitUpsideDown = false;
            PlayerSettings.allowedAutorotateToLandscapeLeft = true;
            PlayerSettings.allowedAutorotateToLandscapeRight = true;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel32;
            PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel34;
            PlayerSettings.Android.forceInternetPermission = true;
            PlayerSettings.SetUseDefaultGraphicsAPIs(BuildTarget.Android, false);
            PlayerSettings.SetGraphicsAPIs(BuildTarget.Android, new[] { GraphicsDeviceType.Vulkan });
            Debug.Log("[FloppyFlight] Quest player: " + PackageName + ", landscape, API 32/34, Vulkan.");
        }

        public static void ApplyMobilePlayerSettings(string version, int versionCode)
        {
            ApplySharedPlayerSettings(version, versionCode, MobilePackageName);
            EditorPrefs.SetString(TargetPref, "mobile");
            WriteTargetMarker(true);
            SetMobileDefine(true);
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.Portrait;
            PlayerSettings.allowedAutorotateToPortrait = false;
            PlayerSettings.allowedAutorotateToPortraitUpsideDown = false;
            PlayerSettings.allowedAutorotateToLandscapeLeft = false;
            PlayerSettings.allowedAutorotateToLandscapeRight = false;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;
            PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel35;
            PlayerSettings.Android.forceInternetPermission = false;
            PlayerSettings.SetUseDefaultGraphicsAPIs(BuildTarget.Android, false);
            PlayerSettings.SetGraphicsAPIs(BuildTarget.Android, new[]
            {
                GraphicsDeviceType.OpenGLES3,
                GraphicsDeviceType.Vulkan
            });
            Debug.Log("[FloppyFlight] Mobile player: " + MobilePackageName + ", portrait, API 24/35, GLES3+Vulkan, XR off.");
        }

        static void ApplySharedPlayerSettings(string version, int versionCode, string packageName)
        {
            var android = NamedBuildTarget.Android;
            PlayerSettings.companyName = CompanyName;
            PlayerSettings.productName = ProductName;
            PlayerSettings.bundleVersion = version;
            PlayerSettings.SetApplicationIdentifier(android, packageName);
            PlayerSettings.Android.bundleVersionCode = Math.Max(1, versionCode);
            Debug.Log("[FloppyFlight] Android versionName " + version + ", versionCode " + PlayerSettings.Android.bundleVersionCode + ".");
            PlayerSettings.colorSpace = ColorSpace.Linear;
            PlayerSettings.MTRendering = true;
            PlayerSettings.stripEngineCode = false;
            PlayerSettings.SetMobileMTRendering(android, true);
            PlayerSettings.SetScriptingBackend(android, ScriptingImplementation.IL2CPP);
            PlayerSettings.SetApiCompatibilityLevel(android, ApiCompatibilityLevel.NET_Standard);
            PlayerSettings.SetManagedStrippingLevel(android, ManagedStrippingLevel.Low);
            PlayerSettings.SetIl2CppCompilerConfiguration(android, Il2CppCompilerConfiguration.Release);
            // One arm64 package. No per-ABI splits and no OBB expansion file.
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.splitApplicationBinary = false;
            PlayerSettings.Android.preferredInstallLocation = AndroidPreferredInstallLocation.Auto;
            PlayerSettings.Android.forceSDCardPermission = false;
            PlayerSettings.Android.androidTVCompatibility = false;
            // Unity 6 OpenXR validation requires exactly Game Activity, not Activity.
            PlayerSettings.Android.applicationEntry = AndroidApplicationEntry.GameActivity;
            EnsureInputSystemOnly();
            QualitySettings.vSyncCount = 0;
            QualitySettings.antiAliasing = 4;
        }

        static void SetMobileDefine(bool mobile)
        {
            var android = NamedBuildTarget.Android;
            var current = PlayerSettings.GetScriptingDefineSymbols(android) ?? string.Empty;
            var parts = new List<string>();
            var tokens = current.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            for (var i = 0; i < tokens.Length; i++)
            {
                var token = tokens[i].Trim();
                if (token.Length == 0 || token == MobileDefine)
                    continue;
                parts.Add(token);
            }
            if (mobile)
                parts.Add(MobileDefine);
            var desired = string.Join(";", parts);
            if (string.Equals(NormalizeDefines(current), desired, StringComparison.Ordinal))
                return;
            PlayerSettings.SetScriptingDefineSymbols(android, desired);
        }

        static string NormalizeDefines(string value)
        {
            var parts = new List<string>();
            var tokens = (value ?? string.Empty).Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            for (var i = 0; i < tokens.Length; i++)
            {
                var token = tokens[i].Trim();
                if (token.Length > 0)
                    parts.Add(token);
            }
            return string.Join(";", parts);
        }

        public static bool IsMobilePlayerBuild()
        {
            var marker = TargetMarkerPath();
            if (File.Exists(marker))
            {
                var text = File.ReadAllText(marker).Trim();
                if (text == "mobile") return true;
                if (text == "quest") return false;
            }

            var defines = PlayerSettings.GetScriptingDefineSymbols(NamedBuildTarget.Android) ?? string.Empty;
            return defines.IndexOf(MobileDefine, StringComparison.Ordinal) >= 0;
        }

        static void WriteTargetMarker(bool mobile)
        {
            var path = TargetMarkerPath();
            Directory.CreateDirectory(Path.GetDirectoryName(path) ?? ".");
            File.WriteAllText(path, mobile ? "mobile" : "quest");
        }

        static string TargetMarkerPath()
        {
            return Path.GetFullPath(Path.Combine(Application.dataPath, "..", "Library", "FloppyFlightTarget.txt"));
        }

        static void DisableMobileXr()
        {
            var group = BuildTargetGroup.Android;
            var perTarget = GetOrCreateXrSettings();
            if (perTarget.HasSettingsForBuildTarget(group))
            {
                var general = perTarget.SettingsForBuildTarget(group);
                general.InitManagerOnStart = false;
                EditorUtility.SetDirty(general);
                RemoveAssignedLoaders(general.Manager, group);
            }

            DisableOpenXrFeature(group, MetaXrFeatureSetId, true);
            DisableOpenXrFeature(group, MetaXrFeatureId, false);
            DisableOpenXrFeature(group, MetaQuestFeature.featureId, false);
            foreach (var id in InteractionProfileIds)
                DisableOpenXrFeature(group, id, false);

            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Mobile: Android XR loader startup is off and Meta/OpenXR features are disabled.");
        }

        static void RemoveAssignedLoaders(XRManagerSettings manager, BuildTargetGroup group)
        {
            if (manager == null || manager.activeLoaders == null)
                return;

            var names = new List<string>();
            foreach (var loader in manager.activeLoaders)
            {
                if (loader != null)
                    names.Add(loader.GetType().FullName);
            }

            for (var i = 0; i < names.Count; i++)
            {
                if (!XRPackageMetadataStore.RemoveLoader(manager, names[i], group))
                    Debug.LogWarning("[FloppyFlight] Could not remove XR loader " + names[i] + ".");
            }
        }

        static void DisableOpenXrFeature(BuildTargetGroup group, string id, bool featureSet)
        {
            try
            {
                if (featureSet)
                {
                    var set = OpenXRFeatureSetManager.GetFeatureSetWithId(group, id);
                    if (set == null)
                        return;
                    set.isEnabled = false;
                    OpenXRFeatureSetManager.SetFeaturesFromEnabledFeatureSets(group);
                    return;
                }

                var feature = FeatureHelpers.GetFeatureWithIdForBuildTarget(group, id);
                if (feature == null)
                    return;
                feature.enabled = false;
                EditorUtility.SetDirty(feature);
            }
            catch (Exception ex)
            {
                Debug.LogWarning("[FloppyFlight] Could not disable OpenXR feature " + id + ": " + ex.Message);
            }
        }

        static void EnsureInputSystemOnly()
        {
            // 0 = Input Manager (Old), 1 = Input System Package, 2 = Both.
            // Both is unsupported on Android. The editor and the player then compile
            // Meta XR types with different fields and the player build cannot serialize them.
            // The value has to already be 1 when the editor starts; changing it here does not recompile.
            var settings = Resources.FindObjectsOfTypeAll<PlayerSettings>();
            if (settings == null || settings.Length == 0)
                throw new InvalidOperationException("PlayerSettings was not found.");
            var serialized = new SerializedObject(settings[0]);
            var handler = serialized.FindProperty("activeInputHandler");
            if (handler == null)
                throw new InvalidOperationException("PlayerSettings.activeInputHandler was not found.");
            if (handler.intValue == 1)
                return;

            handler.intValue = 1;
            serialized.ApplyModifiedPropertiesWithoutUndo();
            AssetDatabase.SaveAssets();
            throw new InvalidOperationException(
                "Active Input Handling was not Input System Package. ProjectSettings/ProjectSettings.asset now has activeInputHandler: 1. Restart the editor so ENABLE_INPUT_SYSTEM is applied, then rebuild. Do not use Both.");
        }

        static void SwitchToAndroid()
        {
            if (EditorUserBuildSettings.activeBuildTarget == BuildTarget.Android) return;
            if (!EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Android, BuildTarget.Android))
            {
                throw new InvalidOperationException(
                    "Could not switch the active build target to Android. Install Android Build Support (SDK, NDK, OpenJDK).");
            }
        }

        public static void ConfigureOpenXr()
        {
            var group = BuildTargetGroup.Android;
            var perTarget = GetOrCreateXrSettings();
            if (!perTarget.HasSettingsForBuildTarget(group))
                perTarget.CreateDefaultSettingsForBuildTarget(group);
            if (!perTarget.HasManagerSettingsForBuildTarget(group))
                perTarget.CreateDefaultManagerSettingsForBuildTarget(group);

            var general = perTarget.SettingsForBuildTarget(group);
            general.InitManagerOnStart = true;
            EditorUtility.SetDirty(general);

            if (!XRPackageMetadataStore.IsLoaderAssigned(OpenXrLoader, group))
            {
                if (!XRPackageMetadataStore.AssignLoader(general.Manager, OpenXrLoader, group))
                {
                    throw new InvalidOperationException(
                        "Failed to enable the OpenXR loader for Android. Check that com.unity.xr.openxr imported.");
                }
            }

            FeatureHelpers.RefreshFeatures(group);
            var feature = FeatureHelpers.GetFeatureWithIdForBuildTarget(group, MetaQuestFeature.featureId) as MetaQuestFeature;
            if (feature == null)
            {
                throw new InvalidOperationException(
                    "Meta Quest Support OpenXR feature was not found. com.unity.xr.openxr 1.18.0 is required.");
            }

            feature.enabled = true;
            // Manifest names from Unity's MetaQuestFeature.DeviceManifestName.
            // OnEnable also inserts Quest 1 as enabled. Symmetric projection is an
            // error while that device is enabled, so leave it off and drop Quest 1.
            feature.AddTargetDevice("quest2", "Quest 2", true);
            feature.AddTargetDevice("cambria", "Quest Pro", true);
            feature.AddTargetDevice("eureka", "Quest 3", true);
            feature.AddTargetDevice("quest3s", "Quest 3S", true);
            InvokeInstance(feature, "EnableTargetDevice", "quest", false);
            SetInternal(feature, "symmetricProjection", false);
            SetInternal(feature, "optimizeBufferDiscards", true);
            // OVRProjectConfig.requiresSystemKeyboard also writes oculus.software.overlay_keyboard.
            // Unity warns about a duplicate uses-feature when both are enabled.
            feature.enableSystemKeyboard = false;
            EditorUtility.SetDirty(feature);
            EnableInteractionProfiles(group);
            EnableMetaXrFeatureGroup(group);
            DisableOvrSystemKeyboard();
            // Meta XR Core 207 maps DeviceType.VRGlasses to the manifest token "stanley".
            // The Horizon dashboard rejects that token. Quest 1 is "quest" and is also rejected.
            ApplyOvrTargetDevices();

            var openXr = OpenXRSettings.GetSettingsForBuildTargetGroup(group);
            if (openXr == null)
                throw new InvalidOperationException("OpenXR Android settings asset was not created.");
            openXr.renderMode = OpenXRSettings.RenderMode.SinglePassInstanced;
            openXr.symmetricProjection = false;
            openXr.optimizeBufferDiscards = true;
            openXr.latencyOptimization = OpenXRSettings.LatencyOptimization.PrioritizeInputPolling;
            EditorUtility.SetDirty(openXr);
            AssetDatabase.SaveAssets();

            Debug.Log("[FloppyFlight] OpenXR Android loader enabled. Meta Quest Support and the Meta XR feature group are on. Meta's build step keeps OVRPlugin's libopenxr_loader.so and drops Unity's openxr_loader.aar. com.oculus.supportedDevices is quest2|questpro|quest3|quest3s. Quest 1 and VR Glasses (stanley) are not targeted. Stereo mode is Single Pass Instanced (Vulkan multiview). Oculus Touch, Touch Pro, and Touch Plus profiles are enabled. Symmetric projection is off. System keyboard manifest entries are off. Latency optimization is Prioritize Input Polling.");
        }

        static void EnableMetaXrFeatureGroup(BuildTargetGroup group)
        {
            // com.meta.xr.sdk.core OVRGradleGeneration only strips the second loader
            // when MetaXRFeature is enabled. The feature-group enabler does not run
            // in batch mode before the package features exist, so enable it here.
            var featureSet = OpenXRFeatureSetManager.GetFeatureSetWithId(group, MetaXrFeatureSetId);
            if (featureSet == null)
            {
                throw new InvalidOperationException(
                    "Meta XR OpenXR feature group was not found (" + MetaXrFeatureSetId + "). com.meta.xr.sdk.core from com.meta.xr.sdk.all 207.0.1 is required.");
            }

            featureSet.isEnabled = true;
            OpenXRFeatureSetManager.SetFeaturesFromEnabledFeatureSets(group);

            var metaXr = FeatureHelpers.GetFeatureWithIdForBuildTarget(group, MetaXrFeatureId);
            if (metaXr == null)
            {
                throw new InvalidOperationException(
                    "Meta XR Feature was not found (" + MetaXrFeatureId + "). com.meta.xr.sdk.core 207.0.1 is required.");
            }

            metaXr.enabled = true;
            EditorUtility.SetDirty(metaXr);
        }

        static void DisableOvrSystemKeyboard()
        {
            var configType = FindTypeByName("OVRProjectConfig");
            if (configType == null)
                return;

            var cached = configType.GetProperty("CachedProjectConfig", BindingFlags.Public | BindingFlags.Static)
                ?.GetValue(null);
            var field = configType.GetField("requiresSystemKeyboard", BindingFlags.Instance | BindingFlags.Public);
            if (cached == null || field == null || !(field.GetValue(cached) is bool on) || !on)
                return;

            field.SetValue(cached, false);
            configType.GetMethod("CommitProjectConfig", BindingFlags.Public | BindingFlags.Static)
                ?.Invoke(null, new[] { cached });
            Debug.Log("[FloppyFlight] Turned off OVRProjectConfig.requiresSystemKeyboard so it does not duplicate the Meta Quest Support keyboard manifest entry.");
        }

        static readonly string[] OvrTargetDeviceNames = { "Quest2", "QuestPro", "Quest3", "Quest3S" };

        static void ApplyOvrTargetDevices()
        {
            var configType = FindTypeByName("OVRProjectConfig");
            if (configType == null)
            {
                Debug.LogWarning("[FloppyFlight] OVRProjectConfig was not found. The generated manifest will still force com.oculus.supportedDevices.");
                return;
            }

            var cached = configType.GetProperty("CachedProjectConfig", BindingFlags.Public | BindingFlags.Static)
                ?.GetValue(null);
            var field = configType.GetField("targetDeviceTypes", BindingFlags.Instance | BindingFlags.Public);
            var deviceType = configType.GetNestedType("DeviceType", BindingFlags.Public);
            if (cached == null || field == null || deviceType == null || !deviceType.IsEnum)
            {
                Debug.LogWarning("[FloppyFlight] OVRProjectConfig.targetDeviceTypes was not found. The generated manifest will still force com.oculus.supportedDevices.");
                return;
            }

            var next = Activator.CreateInstance(typeof(List<>).MakeGenericType(deviceType)) as System.Collections.IList;
            if (next == null)
            {
                Debug.LogWarning("[FloppyFlight] Could not create OVRProjectConfig.targetDeviceTypes. The generated manifest will still force com.oculus.supportedDevices.");
                return;
            }

            foreach (var name in OvrTargetDeviceNames)
            {
                try
                {
                    next.Add(Enum.Parse(deviceType, name));
                }
                catch (ArgumentException)
                {
                    Debug.LogWarning("[FloppyFlight] OVRProjectConfig.DeviceType has no " + name + ". Left targetDeviceTypes unchanged. The generated manifest will still force com.oculus.supportedDevices.");
                    return;
                }
            }

            field.SetValue(cached, next);
            configType.GetMethod("CommitProjectConfig", BindingFlags.Public | BindingFlags.Static)
                ?.Invoke(null, new[] { cached });
            if (cached is UnityEngine.Object asset)
                EditorUtility.SetDirty(asset);
            Debug.Log("[FloppyFlight] OVRProjectConfig.targetDeviceTypes is Quest 2, Quest Pro, Quest 3, and Quest 3S. Quest 1 and VR Glasses are omitted so the manifest does not contain quest or stanley.");
        }

        static readonly string[] InteractionProfileIds =
        {
            "com.unity.openxr.feature.input.oculustouch",
            "com.unity.openxr.feature.input.metaquestpro",
            "com.unity.openxr.feature.input.metaquestplus"
        };

        static void EnableInteractionProfiles(BuildTargetGroup group)
        {
            foreach (var id in InteractionProfileIds)
            {
                var profile = FeatureHelpers.GetFeatureWithIdForBuildTarget(group, id);
                if (profile == null)
                {
                    throw new InvalidOperationException(
                        "OpenXR interaction profile was not found: " + id + ". com.unity.xr.openxr 1.18.0 is required.");
                }
                profile.enabled = true;
                EditorUtility.SetDirty(profile);
            }
        }

        static XRGeneralSettingsPerBuildTarget GetOrCreateXrSettings()
        {
            var method = typeof(XRGeneralSettingsPerBuildTarget).GetMethod(
                "GetOrCreate",
                BindingFlags.Static | BindingFlags.NonPublic);
            if (method == null)
                throw new MissingMethodException("XRGeneralSettingsPerBuildTarget.GetOrCreate");
            return (XRGeneralSettingsPerBuildTarget)method.Invoke(null, null);
        }

        static void SetInternal(object target, string propertyName, object value)
        {
            var property = target.GetType().GetProperty(propertyName, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
            if (property == null)
            {
                Debug.LogWarning("[FloppyFlight] Could not set " + target.GetType().Name + "." + propertyName);
                return;
            }
            property.SetValue(target, value);
        }

        static void InvokeInstance(object target, string methodName, params object[] args)
        {
            var method = target.GetType().GetMethod(methodName, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
            if (method == null)
            {
                Debug.LogWarning("[FloppyFlight] Could not call " + target.GetType().Name + "." + methodName);
                return;
            }
            method.Invoke(target, args);
        }

        static void ApplyAppId(Dictionary<string, string> args)
        {
            var appId = RequireSecret(args, "metaAppId", "META_APP_ID",
                "Meta Quest app id (Horizon Developer Dashboard > App > API)");
            var settingsType = Type.GetType("Oculus.Platform.PlatformSettings, Oculus.Platform")
                ?? FindType("PlatformSettings");
            if (settingsType == null)
            {
                throw new InvalidOperationException(
                    "Oculus.Platform.PlatformSettings was not found. com.meta.xr.sdk.platform (pulled in by com.meta.xr.sdk.all) must import.");
            }

            settingsType.GetProperty("MobileAppID", BindingFlags.Public | BindingFlags.Static)?.SetValue(null, appId);
            settingsType.GetProperty("AppID", BindingFlags.Public | BindingFlags.Static)?.SetValue(null, appId);
            settingsType.GetProperty("UseMobileAppIDInEditor", BindingFlags.Public | BindingFlags.Static)?.SetValue(null, true);

            var instance = settingsType.GetProperty("Instance", BindingFlags.Public | BindingFlags.Static)?.GetValue(null) as UnityEngine.Object;
            if (instance != null) EditorUtility.SetDirty(instance);
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Meta Platform mobile app id applied. Leaderboard API name expected by the game: floppy_highscores.");
        }

        static Type FindType(string simpleName)
        {
            return FindTypeByName(simpleName, "Oculus.Platform");
        }

        static Type FindTypeByName(string simpleName, string namespaceName = null)
        {
            foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                Type[] types;
                try { types = assembly.GetTypes(); }
                catch (ReflectionTypeLoadException ex) { types = ex.Types; }
                if (types == null) continue;
                foreach (var type in types)
                {
                    if (type != null
                        && type.Name == simpleName
                        && (namespaceName == null || type.Namespace == namespaceName))
                        return type;
                }
            }
            return null;
        }

        static string ResolveKeystore(Dictionary<string, string> args)
        {
            var named = GetOpt(args, "androidKeystoreName", "ANDROID_KEYSTORE_PATH");
            if (!string.IsNullOrEmpty(named))
            {
                var resolved = ResolveExistingFile(named);
                if (resolved != null) return resolved;
            }

            var base64 = Environment.GetEnvironmentVariable("ANDROID_KEYSTORE_BASE64");
            if (!string.IsNullOrWhiteSpace(base64))
            {
                var bytes = Convert.FromBase64String(base64.Trim().Replace("\n", "").Replace("\r", ""));
                var temp = Path.Combine(Path.GetTempPath(), "floppy-flight-release.keystore");
                File.WriteAllBytes(temp, bytes);
                return temp;
            }

            throw new InvalidOperationException(
                "No release keystore was provided. Pass -androidKeystoreName <file> (game-ci decodes ANDROID_KEYSTORE_BASE64 into the project) or set ANDROID_KEYSTORE_PATH / ANDROID_KEYSTORE_BASE64. Do not commit the keystore.");
        }

        static string ResolveExistingFile(string path)
        {
            if (File.Exists(path)) return Path.GetFullPath(path);
            var project = Path.GetFullPath(Path.Combine(Application.dataPath, "..", path));
            if (File.Exists(project)) return project;
            var cwd = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), path));
            if (File.Exists(cwd)) return cwd;
            return null;
        }

        static string ResolveOutput(string custom, bool appBundle)
        {
            var extension = appBundle ? ".aab" : ".apk";
            if (string.IsNullOrWhiteSpace(custom))
            {
                // unity/Assets -> repository root, matching game-ci buildsPath "build".
                custom = Path.GetFullPath(Path.Combine(
                    Application.dataPath, "..", "..", "build", "Android", "FloppyFlight" + extension));
            }
            else if (!Path.IsPathRooted(custom))
            {
                custom = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), custom));
            }

            if (custom.EndsWith(".apk", StringComparison.OrdinalIgnoreCase)
                || custom.EndsWith(".aab", StringComparison.OrdinalIgnoreCase))
                return Path.ChangeExtension(custom, extension);

            return custom + extension;
        }

        static int DefaultVersionCode(Dictionary<string, string> args)
        {
            var raw = GetOpt(args, "androidVersionCode", "ANDROID_VERSION_CODE");
            if (string.IsNullOrEmpty(raw) || raw == "0") return 1;
            if (!int.TryParse(raw, out var code) || code < 1)
                throw new InvalidOperationException("androidVersionCode must be a positive integer. Got '" + raw + "'.");
            return code;
        }

        static string RequireSecret(Dictionary<string, string> args, string argName, string envName, string label)
        {
            var value = GetOpt(args, argName, envName);
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new InvalidOperationException(
                    "Missing " + label + ". Provide -" + argName + " or environment variable " + envName + ". It is not stored in the repository.");
            }
            return value.Trim();
        }

        static string GetOpt(Dictionary<string, string> args, string argName, string envName)
        {
            if (args.TryGetValue(argName, out var value) && !string.IsNullOrWhiteSpace(value))
                return value.Trim();
            var env = Environment.GetEnvironmentVariable(envName);
            return string.IsNullOrWhiteSpace(env) ? null : env.Trim();
        }

        static Dictionary<string, string> ParseArgs()
        {
            var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            var args = Environment.GetCommandLineArgs();
            for (var i = 0; i < args.Length; i++)
            {
                if (!args[i].StartsWith("-", StringComparison.Ordinal) || args[i].StartsWith("---", StringComparison.Ordinal))
                    continue;
                var key = args[i].TrimStart('-');
                if (i + 1 < args.Length && !args[i + 1].StartsWith("-", StringComparison.Ordinal))
                {
                    map[key] = args[i + 1];
                    i++;
                }
            }
            return map;
        }

        static string FirstError(BuildReport report)
        {
            if (report == null) return "No build report.";
            foreach (var step in report.steps)
            {
                foreach (var message in step.messages)
                {
                    if (message.type == LogType.Error || message.type == LogType.Exception)
                        return message.content;
                }
            }
            return "See the Unity log for the first error.";
        }
    }

    /// <summary>
    /// Meta XR Core's DevAgent build processor injects the editor machine address and
    /// an access token into RuntimeSettings for every build, including release.
    /// Clear that connection after it runs so the values are not packed into the AAB.
    /// </summary>
    class StripDevAgentFromReleaseBuild : IPreprocessBuildWithReport
    {
        public int callbackOrder => 1000;

        public void OnPreprocessBuild(BuildReport report)
        {
            if ((report.summary.options & BuildOptions.Development) != 0)
                return;

            var settingsType = FindDevAgentSettings();
            if (settingsType == null)
            {
                Debug.Log("[FloppyFlight] DevAgent RuntimeSettings was not found. No dev-agent connection to strip.");
                return;
            }

            var instance = settingsType.GetProperty("Instance", BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic)
                ?.GetValue(null);
            if (instance == null)
                return;

            const BindingFlags flags = BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic;
            settingsType.GetProperty("Enabled", flags)?.SetValue(instance, false);
            settingsType.GetProperty("ServerAddress", flags)?.SetValue(instance, string.Empty);
            settingsType.GetMethod("SetAccessToken", flags)?.Invoke(instance, new object[] { string.Empty });
            settingsType.GetProperty("WitClientAccessToken", flags)?.SetValue(instance, string.Empty);
            if (instance is UnityEngine.Object asset)
            {
                EditorUtility.SetDirty(asset);
                AssetDatabase.SaveAssets();
            }

            Debug.Log("[FloppyFlight] Release build: disabled DevAgent and cleared its server address and access token.");
        }

        static Type FindDevAgentSettings()
        {
            foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                Type[] types;
                try { types = assembly.GetTypes(); }
                catch (ReflectionTypeLoadException ex) { types = ex.Types; }
                if (types == null) continue;
                foreach (var type in types)
                {
                    if (type != null
                        && type.Name == "RuntimeSettings"
                        && type.Namespace != null
                        && type.Namespace.IndexOf("DevAgent", StringComparison.Ordinal) >= 0)
                        return type;
                }
            }
            return null;
        }
    }

    /// <summary>
    /// Unity OpenXR 1.18 and Meta XR Core 207 both package libopenxr_loader.so.
    /// The binaries differ (Khronos 1.1.54 AAR vs the smaller loader inside OVRPlugin.aar).
    /// Meta's preprocess removes the Unity AAR when the Meta XR feature is enabled. This
    /// runs after that and still drops any leftover copy from openxr_loader.aar, then
    /// tells the launcher module to pick a single match so mergeReleaseNativeLibs cannot
    /// fail if another package adds the same path.
    /// It also rewrites com.oculus.supportedDevices after Meta's manifest preprocessor
    /// (callback order 99999) and drops non-arm64 .so files that AARs keep under assets/.
    /// </summary>
    class OpenXrLoaderGradleDedupe : IPostGenerateGradleAndroidProject
    {
        const string PickFirstMarker = "FloppyFlightOpenXrLoaderPickFirst";
        const string LoaderSo = "libopenxr_loader.so";
        const string SupportedDevicesName = "com.oculus.supportedDevices";
        const string SupportedDevicesValue = "quest2|questpro|quest3|quest3s";
        const string AndroidNs = "http://schemas.android.com/apk/res/android";
        const string ToolsNs = "http://schemas.android.com/tools";

        static readonly string[] NonArm64AbiSegments =
        {
            "armeabi-v7a",
            "armeabi",
            "x86_64",
            "x86",
            "mips64",
            "mips"
        };

        public int callbackOrder => 100000;

        public void OnPostGenerateGradleAndroidProject(string path)
        {
            if (BuildScript.IsMobilePlayerBuild())
            {
                StripMobileXr(path);
                return;
            }

            var unityLibrary = ResolveUnityLibrary(path);
            var gradleRoot = ResolveGradleRoot(path, unityLibrary);
            var removed = StripUnityLoaderBesideOvrPlugin(unityLibrary);
            var launcherGradle = ResolveLauncherGradle(path, unityLibrary);
            var patched = PatchLauncherPickFirst(launcherGradle);
            var strippedLibs = StripNonArm64NativeLibraries(gradleRoot ?? unityLibrary);
            RewriteSupportedDevices(unityLibrary, gradleRoot);
            Debug.Log(
                "[FloppyFlight] OpenXR loader packaging: removed " + removed
                + " libopenxr_loader.so entries from Unity's openxr_loader.aar"
                + (patched ? " and added launcher jniLibs.pickFirsts." : ". Launcher pickFirst was already present.")
                + " OVRPlugin keeps the loader Quest runs. Removed " + strippedLibs
                + " non-arm64 native libraries. com.oculus.supportedDevices is " + SupportedDevicesValue + ".");
        }

        static void StripMobileXr(string path)
        {
            var unityLibrary = ResolveUnityLibrary(path);
            var gradleRoot = ResolveGradleRoot(path, unityLibrary);
            var root = !string.IsNullOrEmpty(gradleRoot) && Directory.Exists(gradleRoot)
                ? gradleRoot
                : unityLibrary;
            if (string.IsNullOrEmpty(root) || !Directory.Exists(root))
            {
                throw new InvalidOperationException(
                    "Mobile build could not find the generated Gradle project, so XR packaging could not be removed.");
            }

            var removedAars = 0;
            foreach (var aar in Directory.GetFiles(root, "openxr_loader.aar", SearchOption.AllDirectories))
            {
                ClearReadOnly(aar);
                File.Delete(aar);
                removedAars++;
            }

            var removedSo = 0;
            foreach (var so in Directory.GetFiles(root, LoaderSo, SearchOption.AllDirectories))
            {
                ClearReadOnly(so);
                File.Delete(so);
                removedSo++;
            }

            var strippedArchives = 0;
            var cleanedManifests = 0;
            foreach (var archive in FindArchives(root))
            {
                strippedArchives += RemoveLoaderFromAar(archive);
                cleanedManifests += StripXrFromArchive(archive);
            }

            var cleanedFiles = 0;
            foreach (var manifest in Directory.GetFiles(root, "AndroidManifest.xml", SearchOption.AllDirectories))
            {
                if (StripXrFromManifest(manifest))
                    cleanedFiles++;
            }

            InjectMobileXrRemovals(unityLibrary);
            VerifyMobileHasNoXr(root);
            Debug.Log(
                "[FloppyFlight] Mobile packaging removed XR. Deleted " + removedAars
                + " openxr_loader.aar and " + removedSo + " loose " + LoaderSo
                + " files, stripped loader entries from " + strippedArchives
                + " archives, cleaned " + cleanedManifests + " archive manifests and "
                + cleanedFiles + " project manifests. No VR intent category, com.oculus.supportedDevices, or "
                + LoaderSo + " remains.");
        }

        static bool StripXrFromManifest(string path)
        {
            var doc = LoadManifest(path);
            if (!RemoveXrNodes(doc))
                return false;
            SaveManifest(doc, path);
            return true;
        }

        static int StripXrFromArchive(string archivePath)
        {
            var changed = false;
            var temp = archivePath + ".floppyflight-tmp";
            using (var inputStream = File.OpenRead(archivePath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                foreach (var entry in input.Entries)
                {
                    var name = NormalizeZipName(entry.FullName);
                    if (string.IsNullOrEmpty(entry.Name) || !IsAndroidManifestEntry(name))
                        continue;
                    if (ManifestBytesHaveXr(ReadEntryBytes(entry)))
                    {
                        changed = true;
                        break;
                    }
                }

                if (!changed)
                    return 0;

                try
                {
                    using (var outputStream = File.Create(temp))
                    using (var output = new ZipArchive(outputStream, ZipArchiveMode.Create))
                    {
                        foreach (var entry in input.Entries)
                        {
                            var name = NormalizeZipName(entry.FullName);
                            if (!string.IsNullOrEmpty(entry.Name) && IsAndroidManifestEntry(name))
                            {
                                var cleaned = RemoveXrManifestBytes(ReadEntryBytes(entry));
                                WriteBytesEntry(output, entry, cleaned);
                                continue;
                            }

                            if (string.IsNullOrEmpty(entry.Name))
                            {
                                output.CreateEntry(entry.FullName);
                                continue;
                            }

                            CopyZipEntry(output, entry);
                        }
                    }
                }
                catch
                {
                    if (File.Exists(temp))
                        File.Delete(temp);
                    throw;
                }
            }

            ReplaceGeneratedFile(archivePath, temp);
            return 1;
        }

        static bool ManifestBytesHaveXr(byte[] xml)
        {
            try
            {
                var doc = new XmlDocument();
                using (var stream = new MemoryStream(xml, false))
                    doc.Load(stream);
                return FindXrNodes(doc).Count > 0;
            }
            catch (XmlException)
            {
                return BinaryContainsXr(xml);
            }
        }

        static byte[] RemoveXrManifestBytes(byte[] xml)
        {
            try
            {
                var doc = new XmlDocument();
                using (var stream = new MemoryStream(xml, false))
                    doc.Load(stream);
                if (!RemoveXrNodes(doc))
                    return xml;
                using (var memory = new MemoryStream())
                {
                    var settings = ManifestWriterSettings();
                    settings.CloseOutput = false;
                    using (var writer = XmlWriter.Create(memory, settings))
                        doc.Save(writer);
                    return memory.ToArray();
                }
            }
            catch (XmlException)
            {
                // AAR manifests are often binary Android XML. The string pool is still
                // contiguous UTF-8 or UTF-16, so same-length rewrites keep the offsets valid.
                var neutered = NeuterBinaryXrMarkers(xml);
                if (BinaryContainsXr(neutered))
                {
                    throw new InvalidOperationException(
                        "A binary AndroidManifest still declares Quest or OpenXR entries after the marker rewrite.");
                }
                return neutered;
            }
        }

        static readonly string[][] XrTokenRewrites =
        {
            new[] { "oculus", "oculux" },
            new[] { "Oculus", "Oculux" },
            new[] { "OCULUS", "OCULUX" },
            new[] { "openxr", "openxs" },
            new[] { "OpenXR", "OpenXS" },
            new[] { "OPENXR", "OPENXS" },
            new[] { "supportedDevices", "supportedDevicex" },
            new[] { "IMMERSIVE_XR", "IMMERSIVE_XX" },
            new[] { "vr.headtracking", "xx.headtracking" },
            new[] { "vr.mode", "xx.mode" },
            new[] { "vr.application", "xx.application" },
            new[] { "com.unity.xr", "com.unity.xx" }
        };

        static readonly string[] XrBinaryMarkers =
        {
            "com.oculus.supportedDevices",
            "com.oculus.intent.category.VR",
            "org.khronos.openxr",
            "android.hardware.vr.headtracking",
            "com.unity.xr",
            "IMMERSIVE_XR"
        };

        static byte[] NeuterBinaryXrMarkers(byte[] data)
        {
            var current = data;
            for (var i = 0; i < XrTokenRewrites.Length; i++)
            {
                var from = XrTokenRewrites[i][0];
                var to = XrTokenRewrites[i][1];
                current = ReplaceEncoded(current, from, to, Encoding.UTF8);
                current = ReplaceEncoded(current, from, to, Encoding.Unicode);
            }
            return current;
        }

        static byte[] ReplaceEncoded(byte[] data, string from, string to, Encoding encoding)
        {
            var pattern = encoding.GetBytes(from);
            var replacement = encoding.GetBytes(to);
            if (pattern.Length == 0 || pattern.Length != replacement.Length)
                return data;
            var index = IndexOfBytes(data, pattern, 0);
            if (index < 0)
                return data;
            var copy = (byte[])data.Clone();
            while (index >= 0)
            {
                Buffer.BlockCopy(replacement, 0, copy, index, replacement.Length);
                index = IndexOfBytes(copy, pattern, index + pattern.Length);
            }
            return copy;
        }

        static bool BinaryContainsXr(byte[] data)
        {
            if (data == null || data.Length == 0)
                return false;
            for (var i = 0; i < XrBinaryMarkers.Length; i++)
            {
                var marker = XrBinaryMarkers[i];
                if (IndexOfBytes(data, Encoding.UTF8.GetBytes(marker), 0) >= 0)
                    return true;
                if (IndexOfBytes(data, Encoding.Unicode.GetBytes(marker), 0) >= 0)
                    return true;
            }
            return false;
        }

        static int IndexOfBytes(byte[] data, byte[] pattern, int start)
        {
            if (data == null || pattern == null || pattern.Length == 0 || start < 0)
                return -1;
            var last = data.Length - pattern.Length;
            for (var i = start; i <= last; i++)
            {
                var matched = true;
                for (var j = 0; j < pattern.Length; j++)
                {
                    if (data[i + j] != pattern[j])
                    {
                        matched = false;
                        break;
                    }
                }
                if (matched)
                    return i;
            }
            return -1;
        }

        static void InjectMobileXrRemovals(string unityLibrary)
        {
            if (string.IsNullOrEmpty(unityLibrary))
                return;
            var main = Path.Combine(unityLibrary, "src", "main", "AndroidManifest.xml");
            if (!File.Exists(main))
            {
                throw new InvalidOperationException(
                    "Mobile build could not find " + main + " to add VR manifest removal rules.");
            }

            var doc = LoadManifest(main);
            var manifest = doc.DocumentElement;
            if (manifest == null || !string.Equals(manifest.LocalName, "manifest", StringComparison.Ordinal))
                throw new InvalidOperationException(main + " has no manifest root.");
            if (string.IsNullOrEmpty(manifest.GetAttribute("xmlns:tools")))
                manifest.SetAttribute("xmlns:tools", ToolsNs);

            EnsureRemoval(doc, manifest, "uses-feature", "android.hardware.vr.headtracking");
            EnsureRemoval(doc, manifest, "uses-feature", "android.hardware.vr.high_performance");
            EnsureRemoval(doc, manifest, "uses-feature", "android.software.vr.mode");
            EnsureRemoval(doc, manifest, "uses-permission", "org.khronos.openxr.permission.OPENXR");
            EnsureRemoval(doc, manifest, "uses-permission", "org.khronos.openxr.permission.OPENXR_SYSTEM");

            var application = FindChildElement(manifest, "application");
            if (application == null)
                throw new InvalidOperationException(main + " has no application element.");
            EnsureRemoval(doc, application, "meta-data", SupportedDevicesName);

            var filters = doc.GetElementsByTagName("intent-filter");
            foreach (XmlNode node in filters)
            {
                var filter = node as XmlElement;
                if (filter == null)
                    continue;
                EnsureRemoval(doc, filter, "category", "com.oculus.intent.category.VR");
                EnsureRemoval(doc, filter, "category", "org.khronos.openxr.intent.category.IMMERSIVE_XR");
            }

            SaveManifest(doc, main);
        }

        static void EnsureRemoval(XmlDocument doc, XmlElement parent, string localName, string androidName)
        {
            foreach (XmlNode child in parent.ChildNodes)
            {
                var element = child as XmlElement;
                if (element == null || !string.Equals(element.LocalName, localName, StringComparison.Ordinal))
                    continue;
                if (!string.Equals(AndroidAttribute(element, "name"), androidName, StringComparison.Ordinal))
                    continue;
                element.SetAttribute("node", ToolsNs, "remove");
                return;
            }

            var created = doc.CreateElement(localName);
            created.SetAttribute("name", AndroidNs, androidName);
            created.SetAttribute("node", ToolsNs, "remove");
            parent.AppendChild(created);
        }

        static bool RemoveXrNodes(XmlDocument doc)
        {
            var nodes = FindXrNodes(doc);
            if (nodes.Count == 0)
                return false;
            for (var i = 0; i < nodes.Count; i++)
            {
                if (nodes[i].ParentNode != null)
                    nodes[i].ParentNode.RemoveChild(nodes[i]);
            }
            return true;
        }

        static List<XmlElement> FindXrNodes(XmlDocument doc)
        {
            var found = new List<XmlElement>();
            var nodes = doc.GetElementsByTagName("*");
            foreach (XmlNode node in nodes)
            {
                var element = node as XmlElement;
                if (element != null && IsMobileXrNode(element))
                    found.Add(element);
            }
            return found;
        }

        static bool IsMobileXrNode(XmlElement element)
        {
            if (string.Equals(ToolsAttribute(element, "node"), "remove", StringComparison.OrdinalIgnoreCase))
                return false;
            var local = element.LocalName;
            var name = AndroidAttribute(element, "name") ?? string.Empty;
            if (string.Equals(local, "category", StringComparison.Ordinal))
                return IsVrCategoryName(name);
            if (string.Equals(local, "meta-data", StringComparison.Ordinal)
                || string.Equals(local, "uses-feature", StringComparison.Ordinal)
                || string.Equals(local, "uses-permission", StringComparison.Ordinal))
                return IsXrComponentName(name);
            return false;
        }

        static bool IsVrCategoryName(string name)
        {
            if (string.IsNullOrEmpty(name))
                return false;
            if (name.IndexOf("LAUNCHER", StringComparison.Ordinal) >= 0)
                return false;
            if (name.IndexOf("oculus", StringComparison.OrdinalIgnoreCase) >= 0)
                return true;
            if (name.IndexOf("openxr", StringComparison.OrdinalIgnoreCase) >= 0)
                return true;
            if (name.IndexOf("IMMERSIVE_XR", StringComparison.Ordinal) >= 0)
                return true;
            return name.EndsWith(".VR", StringComparison.Ordinal);
        }

        static bool IsXrComponentName(string name)
        {
            if (string.IsNullOrEmpty(name))
                return false;
            var lower = name.ToLowerInvariant();
            return lower.Contains("oculus")
                || lower.Contains("openxr")
                || lower.Contains("com.unity.xr")
                || lower.Contains("supporteddevices")
                || lower.Contains("vr.headtracking")
                || lower.Contains("vr.mode")
                || lower.Contains("vr.application");
        }

        static void VerifyMobileHasNoXr(string root)
        {
            foreach (var so in Directory.GetFiles(root, LoaderSo, SearchOption.AllDirectories))
            {
                throw new InvalidOperationException("Mobile build still contains " + so + ".");
            }

            foreach (var manifest in Directory.GetFiles(root, "AndroidManifest.xml", SearchOption.AllDirectories))
            {
                var nodes = FindXrNodes(LoadManifest(manifest));
                if (nodes.Count > 0)
                {
                    throw new InvalidOperationException(
                        manifest + " still declares " + nodes.Count + " Quest/OpenXR manifest entries.");
                }
            }

            foreach (var archive in FindArchives(root))
            {
                if (ArchiveContainsLoader(archive) || ArchiveContainsXrManifest(archive))
                {
                    throw new InvalidOperationException(
                        archive + " still contains " + LoaderSo + " or a Quest/OpenXR manifest entry.");
                }
            }
        }

        static bool ArchiveContainsLoader(string archivePath)
        {
            using (var inputStream = File.OpenRead(archivePath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                foreach (var entry in input.Entries)
                {
                    if (IsOpenXrLoaderEntry(NormalizeZipName(entry.FullName)))
                        return true;
                }
            }
            return false;
        }

        static bool ArchiveContainsXrManifest(string archivePath)
        {
            using (var inputStream = File.OpenRead(archivePath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                foreach (var entry in input.Entries)
                {
                    var name = NormalizeZipName(entry.FullName);
                    if (string.IsNullOrEmpty(entry.Name) || !IsAndroidManifestEntry(name))
                        continue;
                    if (ManifestBytesHaveXr(ReadEntryBytes(entry)))
                        return true;
                }
            }
            return false;
        }

        static int StripUnityLoaderBesideOvrPlugin(string unityLibrary)
        {
            if (string.IsNullOrEmpty(unityLibrary) || !Directory.Exists(unityLibrary))
                return 0;

            var ovrPresent = Directory.GetFiles(unityLibrary, "OVRPlugin.aar", SearchOption.AllDirectories).Length > 0;
            if (!ovrPresent)
            {
                Debug.LogWarning("[FloppyFlight] OVRPlugin.aar was not in the Gradle project, so Unity's OpenXR loader was left in place.");
                return 0;
            }

            var loaderAars = Directory.GetFiles(unityLibrary, "openxr_loader.aar", SearchOption.AllDirectories);
            if (loaderAars.Length == 0)
            {
                Debug.Log("[FloppyFlight] Unity openxr_loader.aar is not in the Gradle project. Meta's Meta XR feature preprocess already excluded it. OVRPlugin supplies libopenxr_loader.so.");
            }

            var removed = 0;
            foreach (var aar in loaderAars)
                removed += RemoveLoaderFromAar(aar);

            var jniLibs = Path.Combine(unityLibrary, "src", "main", "jniLibs");
            if (Directory.Exists(jniLibs))
            {
                foreach (var so in Directory.GetFiles(jniLibs, LoaderSo, SearchOption.AllDirectories))
                {
                    File.Delete(so);
                    removed++;
                }
            }

            return removed;
        }

        static int RemoveLoaderFromAar(string aarPath)
        {
            var temp = aarPath + ".floppyflight-tmp";
            var removed = 0;
            using (var inputStream = File.OpenRead(aarPath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                var dropLoader = false;
                foreach (var entry in input.Entries)
                {
                    if (IsOpenXrLoaderEntry(NormalizeZipName(entry.FullName)))
                    {
                        dropLoader = true;
                        break;
                    }
                }

                if (!dropLoader)
                    return 0;

                using (var outputStream = File.Create(temp))
                using (var output = new ZipArchive(outputStream, ZipArchiveMode.Create))
                {
                    foreach (var entry in input.Entries)
                    {
                        if (IsOpenXrLoaderEntry(NormalizeZipName(entry.FullName)))
                        {
                            removed++;
                            continue;
                        }

                        if (string.IsNullOrEmpty(entry.Name))
                        {
                            output.CreateEntry(entry.FullName);
                            continue;
                        }

                        CopyZipEntry(output, entry);
                    }
                }
            }

            ReplaceGeneratedFile(aarPath, temp);
            return removed;
        }

        static bool IsOpenXrLoaderEntry(string name)
        {
            return name.EndsWith("/" + LoaderSo, StringComparison.Ordinal)
                || string.Equals(Path.GetFileName(name.TrimEnd('/')), LoaderSo, StringComparison.Ordinal);
        }

        static bool PatchLauncherPickFirst(string launcherGradle)
        {
            if (string.IsNullOrEmpty(launcherGradle) || !File.Exists(launcherGradle))
            {
                Debug.LogWarning("[FloppyFlight] launcher/build.gradle was not found. Could not add the OpenXR loader pickFirst.");
                return false;
            }

            var text = File.ReadAllText(launcherGradle);
            if (text.Contains(PickFirstMarker) || text.Contains("libopenxr_loader.so"))
                return false;

            var snippet = new StringBuilder();
            snippet.AppendLine();
            snippet.AppendLine("// " + PickFirstMarker);
            snippet.AppendLine("// Unity's openxr_loader.aar and OVRPlugin.aar can both contain this library.");
            snippet.AppendLine("// The Unity copy is removed above; pickFirst covers any other leftover.");
            snippet.AppendLine("android {");
            snippet.AppendLine("    packaging {");
            snippet.AppendLine("        jniLibs {");
            snippet.AppendLine("            pickFirsts += ['**/libopenxr_loader.so']");
            snippet.AppendLine("        }");
            snippet.AppendLine("    }");
            snippet.AppendLine("}");
            File.AppendAllText(launcherGradle, snippet.ToString());
            return true;
        }

        static string ResolveUnityLibrary(string path)
        {
            if (string.IsNullOrEmpty(path))
                return null;
            if (File.Exists(Path.Combine(path, "build.gradle")) && Directory.Exists(Path.Combine(path, "src")))
                return path;
            var nested = Path.Combine(path, "unityLibrary");
            if (Directory.Exists(nested))
                return nested;
            var parent = Directory.GetParent(path);
            if (parent != null)
            {
                var sibling = Path.Combine(parent.FullName, "unityLibrary");
                if (Directory.Exists(sibling))
                    return sibling;
            }
            return path;
        }

        static string ResolveLauncherGradle(string path, string unityLibrary)
        {
            var candidates = new List<string>();
            if (!string.IsNullOrEmpty(path))
                candidates.Add(Path.Combine(path, "launcher", "build.gradle"));
            if (!string.IsNullOrEmpty(unityLibrary))
            {
                var parent = Directory.GetParent(unityLibrary);
                if (parent != null)
                    candidates.Add(Path.Combine(parent.FullName, "launcher", "build.gradle"));
            }

            foreach (var candidate in candidates)
            {
                if (File.Exists(candidate))
                    return candidate;
            }
            return candidates.Count > 0 ? candidates[candidates.Count - 1] : null;
        }

        static string ResolveGradleRoot(string path, string unityLibrary)
        {
            var candidates = new List<string>();
            if (!string.IsNullOrEmpty(unityLibrary))
            {
                var parent = Directory.GetParent(unityLibrary);
                if (parent != null)
                    candidates.Add(parent.FullName);
            }
            if (!string.IsNullOrEmpty(path))
            {
                candidates.Add(path);
                var parent = Directory.GetParent(path);
                if (parent != null)
                    candidates.Add(parent.FullName);
            }

            foreach (var candidate in candidates)
            {
                if (Directory.Exists(Path.Combine(candidate, "launcher"))
                    && Directory.Exists(Path.Combine(candidate, "unityLibrary")))
                    return candidate;
            }

            if (!string.IsNullOrEmpty(unityLibrary))
                return unityLibrary;
            return path;
        }

        static void RewriteSupportedDevices(string unityLibrary, string gradleRoot)
        {
            if (string.IsNullOrEmpty(unityLibrary))
            {
                throw new InvalidOperationException(
                    "The generated Unity Android library was not found. Cannot set com.oculus.supportedDevices.");
            }

            var main = Path.Combine(unityLibrary, "src", "main", "AndroidManifest.xml");
            if (!File.Exists(main))
            {
                throw new InvalidOperationException(
                    "Generated AndroidManifest.xml was not found at " + main + ". Cannot set com.oculus.supportedDevices.");
            }

            var searchRoot = !string.IsNullOrEmpty(gradleRoot) && Directory.Exists(gradleRoot) ? gradleRoot : unityLibrary;
            var mainFull = Path.GetFullPath(main);
            var removedElsewhere = 0;
            foreach (var file in Directory.GetFiles(searchRoot, "AndroidManifest.xml", SearchOption.AllDirectories))
            {
                if (string.Equals(Path.GetFullPath(file), mainFull, StringComparison.OrdinalIgnoreCase))
                    continue;
                if (RemoveSupportedDevicesFile(file))
                    removedElsewhere++;
            }

            EnsureMainSupportedDevices(main);
            VerifySupportedDevices(searchRoot, mainFull);
            Debug.Log(
                "[FloppyFlight] com.oculus.supportedDevices is exactly " + SupportedDevicesValue
                + ". Removed that meta-data from " + removedElsewhere
                + " other manifests so the merged manifest declares it once, with tools:replace=\"android:value\".");
        }

        static void EnsureMainSupportedDevices(string path)
        {
            var doc = LoadManifest(path);
            var manifest = doc.DocumentElement;
            if (manifest == null || !string.Equals(manifest.LocalName, "manifest", StringComparison.Ordinal))
                throw new InvalidOperationException(path + " has no manifest root.");

            if (string.IsNullOrEmpty(manifest.GetAttribute("xmlns:tools")))
                manifest.SetAttribute("xmlns:tools", ToolsNs);

            var application = FindChildElement(manifest, "application");
            if (application == null)
                throw new InvalidOperationException(path + " has no application element.");

            XmlElement kept = null;
            var existing = FindSupportedDevices(doc);
            for (var i = 0; i < existing.Count; i++)
            {
                var element = existing[i];
                if (kept == null && element.ParentNode == application)
                {
                    kept = element;
                    continue;
                }
                if (element.ParentNode != null)
                    element.ParentNode.RemoveChild(element);
            }

            if (kept == null)
            {
                kept = doc.CreateElement("meta-data");
                application.AppendChild(kept);
            }

            kept.SetAttribute("name", AndroidNs, SupportedDevicesName);
            kept.SetAttribute("value", AndroidNs, SupportedDevicesValue);
            kept.SetAttribute("replace", ToolsNs, "android:value");
            SaveManifest(doc, path);
        }

        static bool RemoveSupportedDevicesFile(string path)
        {
            var doc = LoadManifest(path);
            var existing = FindSupportedDevices(doc);
            if (existing.Count == 0)
                return false;

            for (var i = 0; i < existing.Count; i++)
            {
                if (existing[i].ParentNode != null)
                    existing[i].ParentNode.RemoveChild(existing[i]);
            }

            SaveManifest(doc, path);
            return true;
        }

        static void VerifySupportedDevices(string root, string mainFull)
        {
            var declarations = 0;
            foreach (var file in Directory.GetFiles(root, "AndroidManifest.xml", SearchOption.AllDirectories))
            {
                var nodes = FindSupportedDevices(LoadManifest(file));
                if (string.Equals(Path.GetFullPath(file), mainFull, StringComparison.OrdinalIgnoreCase))
                {
                    if (nodes.Count != 1)
                    {
                        throw new InvalidOperationException(
                            file + " declares com.oculus.supportedDevices " + nodes.Count + " times. Expected one.");
                    }

                    var value = AndroidAttribute(nodes[0], "value");
                    if (!string.Equals(value, SupportedDevicesValue, StringComparison.Ordinal))
                    {
                        throw new InvalidOperationException(
                            file + " com.oculus.supportedDevices is '" + value + "'. Expected " + SupportedDevicesValue + ".");
                    }

                    if (!AllowedDeviceList(value))
                    {
                        throw new InvalidOperationException(
                            file + " includes a device other than quest2, questpro, quest3, and quest3s.");
                    }

                    var replace = ToolsAttribute(nodes[0], "replace");
                    if (string.IsNullOrEmpty(replace) || replace.IndexOf("android:value", StringComparison.Ordinal) < 0)
                    {
                        throw new InvalidOperationException(
                            file + " is missing tools:replace=\"android:value\" on com.oculus.supportedDevices.");
                    }

                    declarations++;
                }
                else if (nodes.Count != 0)
                {
                    throw new InvalidOperationException(file + " still declares com.oculus.supportedDevices.");
                }
            }

            foreach (var archive in FindArchives(root))
            {
                if (ArchiveDeclaresSupportedDevices(archive))
                    throw new InvalidOperationException(archive + " still declares com.oculus.supportedDevices.");
            }

            if (declarations != 1)
            {
                throw new InvalidOperationException(
                    "com.oculus.supportedDevices must be declared once in the Gradle project. Found " + declarations + ".");
            }
        }

        static bool AllowedDeviceList(string value)
        {
            if (!string.Equals(value, SupportedDevicesValue, StringComparison.Ordinal))
                return false;
            var tokens = value.Split('|');
            if (tokens.Length != 4)
                return false;
            for (var i = 0; i < tokens.Length; i++)
            {
                if (tokens[i] == "quest" || tokens[i] == "stanley" || tokens[i] == "vrglasses"
                    || tokens[i] == "cambria" || tokens[i] == "eureka")
                    return false;
            }
            return true;
        }

        static int StripNonArm64NativeLibraries(string root)
        {
            if (string.IsNullOrEmpty(root) || !Directory.Exists(root))
                return 0;

            var removed = 0;
            foreach (var so in Directory.GetFiles(root, "*.so", SearchOption.AllDirectories))
            {
                if (!IsNonArm64NativeLibrary(so))
                    continue;
                ClearReadOnly(so);
                File.Delete(so);
                removed++;
                Debug.Log("[FloppyFlight] Removed non-arm64 native library " + so);
            }

            foreach (var archive in FindArchives(root))
                removed += SanitizeNativeArchive(archive);

            if (removed == 0)
                Debug.Log("[FloppyFlight] No armeabi-v7a, x86, or other non-arm64 .so files were in the generated Gradle project.");
            return removed;
        }

        static int SanitizeNativeArchive(string archivePath)
        {
            var manifestBytes = new Dictionary<string, byte[]>(StringComparer.Ordinal);
            var manifestChanged = false;
            var hasNonArm64 = false;
            var temp = archivePath + ".floppyflight-tmp";
            var removed = 0;

            using (var inputStream = File.OpenRead(archivePath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                foreach (var entry in input.Entries)
                {
                    var name = NormalizeZipName(entry.FullName);
                    if (IsNonArm64NativeLibrary(name))
                        hasNonArm64 = true;
                    if (string.IsNullOrEmpty(entry.Name) || !IsAndroidManifestEntry(name) || manifestBytes.ContainsKey(name))
                        continue;

                    var updated = RemoveSupportedDevicesBytes(ReadEntryBytes(entry), out var changed);
                    manifestBytes[name] = updated;
                    if (changed)
                        manifestChanged = true;
                }

                if (!hasNonArm64 && !manifestChanged)
                    return 0;

                try
                {
                    using (var outputStream = File.Create(temp))
                    using (var output = new ZipArchive(outputStream, ZipArchiveMode.Create))
                    {
                        foreach (var entry in input.Entries)
                        {
                            var name = NormalizeZipName(entry.FullName);
                            if (IsNonArm64NativeLibrary(name))
                            {
                                removed++;
                                Debug.Log("[FloppyFlight] Removed non-arm64 native library " + name + " from " + Path.GetFileName(archivePath));
                                continue;
                            }

                            if (manifestBytes.TryGetValue(name, out var replacement))
                            {
                                WriteBytesEntry(output, entry, replacement);
                                continue;
                            }

                            if (string.IsNullOrEmpty(entry.Name))
                            {
                                output.CreateEntry(entry.FullName);
                                continue;
                            }

                            CopyZipEntry(output, entry);
                        }
                    }
                }
                catch
                {
                    if (File.Exists(temp))
                        File.Delete(temp);
                    throw;
                }
            }

            ReplaceGeneratedFile(archivePath, temp);
            return removed;
        }

        static bool ArchiveDeclaresSupportedDevices(string archivePath)
        {
            using (var inputStream = File.OpenRead(archivePath))
            using (var input = new ZipArchive(inputStream, ZipArchiveMode.Read))
            {
                foreach (var entry in input.Entries)
                {
                    var name = NormalizeZipName(entry.FullName);
                    if (string.IsNullOrEmpty(entry.Name) || !IsAndroidManifestEntry(name))
                        continue;
                    var doc = new XmlDocument();
                    using (var stream = entry.Open())
                        doc.Load(stream);
                    if (FindSupportedDevices(doc).Count > 0)
                        return true;
                }
            }
            return false;
        }

        static byte[] RemoveSupportedDevicesBytes(byte[] xml, out bool changed)
        {
            var doc = new XmlDocument();
            using (var stream = new MemoryStream(xml, false))
                doc.Load(stream);
            var existing = FindSupportedDevices(doc);
            changed = existing.Count > 0;
            if (!changed)
                return xml;

            for (var i = 0; i < existing.Count; i++)
            {
                if (existing[i].ParentNode != null)
                    existing[i].ParentNode.RemoveChild(existing[i]);
            }

            using (var memory = new MemoryStream())
            {
                var settings = ManifestWriterSettings();
                settings.CloseOutput = false;
                using (var writer = XmlWriter.Create(memory, settings))
                    doc.Save(writer);
                return memory.ToArray();
            }
        }

        static List<XmlElement> FindSupportedDevices(XmlDocument doc)
        {
            var found = new List<XmlElement>();
            var nodes = doc.GetElementsByTagName("meta-data");
            foreach (XmlNode node in nodes)
            {
                var element = node as XmlElement;
                if (element == null)
                    continue;
                if (string.Equals(AndroidAttribute(element, "name"), SupportedDevicesName, StringComparison.Ordinal))
                    found.Add(element);
            }
            return found;
        }

        static string AndroidAttribute(XmlElement element, string localName)
        {
            var value = element.GetAttribute(localName, AndroidNs);
            if (!string.IsNullOrEmpty(value))
                return value;
            value = element.GetAttribute("android:" + localName);
            return string.IsNullOrEmpty(value) ? null : value;
        }

        static string ToolsAttribute(XmlElement element, string localName)
        {
            var value = element.GetAttribute(localName, ToolsNs);
            if (!string.IsNullOrEmpty(value))
                return value;
            value = element.GetAttribute("tools:" + localName);
            return string.IsNullOrEmpty(value) ? null : value;
        }

        static XmlElement FindChildElement(XmlElement parent, string localName)
        {
            foreach (XmlNode child in parent.ChildNodes)
            {
                var element = child as XmlElement;
                if (element != null && string.Equals(element.LocalName, localName, StringComparison.Ordinal))
                    return element;
            }
            return null;
        }

        static bool IsAndroidManifestEntry(string name)
        {
            return string.Equals(name, "AndroidManifest.xml", StringComparison.OrdinalIgnoreCase)
                || name.EndsWith("/AndroidManifest.xml", StringComparison.OrdinalIgnoreCase);
        }

        static bool IsNonArm64NativeLibrary(string path)
        {
            var name = NormalizeZipName(path);
            if (!name.EndsWith(".so", StringComparison.OrdinalIgnoreCase))
                return false;

            var segments = name.Split('/');
            for (var i = 0; i < segments.Length; i++)
            {
                var segment = segments[i];
                if (segment.StartsWith("android.", StringComparison.OrdinalIgnoreCase))
                    segment = segment.Substring("android.".Length);
                for (var j = 0; j < NonArm64AbiSegments.Length; j++)
                {
                    if (string.Equals(segment, NonArm64AbiSegments[j], StringComparison.OrdinalIgnoreCase))
                        return true;
                }
            }
            return false;
        }

        static string NormalizeZipName(string name)
        {
            return (name ?? string.Empty).Replace('\\', '/');
        }

        static IEnumerable<string> FindArchives(string root)
        {
            if (string.IsNullOrEmpty(root) || !Directory.Exists(root))
                yield break;
            foreach (var archive in Directory.GetFiles(root, "*.aar", SearchOption.AllDirectories))
                yield return archive;
            foreach (var archive in Directory.GetFiles(root, "*.jar", SearchOption.AllDirectories))
                yield return archive;
        }

        static XmlDocument LoadManifest(string path)
        {
            var doc = new XmlDocument();
            doc.Load(path);
            return doc;
        }

        static void SaveManifest(XmlDocument doc, string path)
        {
            var temp = path + ".floppyflight-tmp";
            var settings = ManifestWriterSettings();
            using (var writer = XmlWriter.Create(temp, settings))
                doc.Save(writer);
            ReplaceGeneratedFile(path, temp);
        }

        static XmlWriterSettings ManifestWriterSettings()
        {
            return new XmlWriterSettings
            {
                Encoding = new UTF8Encoding(false),
                Indent = true,
                OmitXmlDeclaration = false
            };
        }

        static void CopyZipEntry(ZipArchive output, ZipArchiveEntry entry)
        {
            var stored = entry.Length == entry.CompressedLength;
            var created = output.CreateEntry(
                entry.FullName,
                stored ? System.IO.Compression.CompressionLevel.NoCompression : System.IO.Compression.CompressionLevel.Optimal);
            using (var source = entry.Open())
            using (var destination = created.Open())
                source.CopyTo(destination);
        }

        static void WriteBytesEntry(ZipArchive output, ZipArchiveEntry entry, byte[] bytes)
        {
            var stored = entry.Length == entry.CompressedLength;
            var created = output.CreateEntry(
                entry.FullName,
                stored ? System.IO.Compression.CompressionLevel.NoCompression : System.IO.Compression.CompressionLevel.Optimal);
            using (var destination = created.Open())
                destination.Write(bytes, 0, bytes.Length);
        }

        static byte[] ReadEntryBytes(ZipArchiveEntry entry)
        {
            using (var source = entry.Open())
            using (var memory = new MemoryStream())
            {
                source.CopyTo(memory);
                return memory.ToArray();
            }
        }

        static void ReplaceGeneratedFile(string destination, string temp)
        {
            try
            {
                ClearReadOnly(destination);
                File.Copy(temp, destination, true);
                File.Delete(temp);
            }
            catch
            {
                if (File.Exists(temp))
                    File.Delete(temp);
                throw;
            }
        }

        static void ClearReadOnly(string path)
        {
            if (!File.Exists(path))
                return;
            var attributes = File.GetAttributes(path);
            if ((attributes & FileAttributes.ReadOnly) != 0)
                File.SetAttributes(path, attributes & ~FileAttributes.ReadOnly);
        }
    }
}
