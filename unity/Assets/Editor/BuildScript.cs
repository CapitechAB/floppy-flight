using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text;
using UnityEditor;
using UnityEditor.Android;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEditor.XR.Management;
using UnityEditor.XR.Management.Metadata;
using UnityEditor.XR.OpenXR.Features;
using UnityEngine;
using UnityEngine.Rendering;
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
        public const string ProductName = "Floppy Flight";
        public const string CompanyName = "Capitech AB";
        public const string DefaultVersion = "1.0.0";
        const string OpenXrLoader = "UnityEngine.XR.OpenXR.OpenXRLoader";
        const string MetaXrFeatureSetId = "com.meta.openxr.featureset.metaxr";
        const string MetaXrFeatureId = "com.meta.openxr.feature.metaxr";

        static int s_bootstrapRetries;

        [InitializeOnLoadMethod]
        static void Bootstrap()
        {
            EditorApplication.delayCall += ApplyWhenReady;
        }

        static void ApplyWhenReady()
        {
            if ((EditorApplication.isCompiling || EditorApplication.isUpdating) && s_bootstrapRetries < 5)
            {
                s_bootstrapRetries++;
                EditorApplication.delayCall += ApplyWhenReady;
                return;
            }

            try
            {
                ApplyPlayerSettings(DefaultVersion, Math.Max(1, PlayerSettings.Android.bundleVersionCode));
                QuestSceneSetup.EnsureMainScene();
            }
            catch (Exception ex)
            {
                Debug.LogWarning("[FloppyFlight] Project setup deferred until packages finish importing: " + ex.Message);
            }
        }

        [MenuItem("Floppy Flight/Configure Quest Player Settings")]
        public static void ConfigureFromMenu()
        {
            ApplyPlayerSettings(DefaultVersion, Math.Max(1, PlayerSettings.Android.bundleVersionCode));
            ConfigureOpenXr();
            AssetDatabase.SaveAssets();
            Debug.Log("[FloppyFlight] Quest player settings and OpenXR loader are configured.");
        }

        [MenuItem("Floppy Flight/Build Signed Release AAB")]
        public static void BuildAndroidAab()
        {
            var batch = Application.isBatchMode;
            try
            {
                var output = BuildRelease();
                Debug.Log("[FloppyFlight] Signed release AAB: " + output);
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

        static string BuildRelease()
        {
            var args = ParseArgs();
            var version = GetOpt(args, "buildVersion", "APP_VERSION") ?? DefaultVersion;
            if (string.Equals(version, "none", StringComparison.OrdinalIgnoreCase))
                version = DefaultVersion;

            var versionCode = DefaultVersionCode(args);
            ApplyPlayerSettings(version, versionCode);
            SwitchToAndroid();
            ConfigureOpenXr();
            ApplyAppId(args);
            QuestSceneSetup.EnsureMainScene();

            var keystore = ResolveKeystore(args);
            var keystorePass = RequireSecret(args, "androidKeystorePass", "ANDROID_KEYSTORE_PASS", "keystore password");
            var alias = RequireSecret(args, "androidKeyaliasName", "ANDROID_KEYALIAS_NAME", "key alias");
            var aliasPass = RequireSecret(args, "androidKeyaliasPass", "ANDROID_KEYALIAS_PASS", "key alias password");

            var output = ResolveOutput(GetOpt(args, "customBuildPath", "AAB_OUTPUT"));
            Directory.CreateDirectory(Path.GetDirectoryName(output) ?? ".");

            try
            {
                PlayerSettings.Android.useCustomKeystore = true;
                PlayerSettings.Android.keystoreName = keystore;
                PlayerSettings.Android.keystorePass = keystorePass;
                PlayerSettings.Android.keyaliasName = alias;
                PlayerSettings.Android.keyaliasPass = aliasPass;

                EditorUserBuildSettings.buildAppBundle = true;
                EditorUserBuildSettings.exportAsGoogleAndroidProject = false;
                EditorUserBuildSettings.androidBuildSystem = AndroidBuildSystem.Gradle;
                EditorUserBuildSettings.development = false;
                EditorUserBuildSettings.connectProfiler = false;
                EditorUserBuildSettings.allowDebugging = false;

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
                    throw new FileNotFoundException("Build reported success but the .aab is missing.", output);

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
            var android = NamedBuildTarget.Android;
            PlayerSettings.companyName = CompanyName;
            PlayerSettings.productName = ProductName;
            PlayerSettings.bundleVersion = version;
            PlayerSettings.SetApplicationIdentifier(android, PackageName);
            PlayerSettings.Android.bundleVersionCode = Math.Max(1, versionCode);
            PlayerSettings.colorSpace = ColorSpace.Linear;
            PlayerSettings.MTRendering = true;
            PlayerSettings.stripEngineCode = false;
            PlayerSettings.SetMobileMTRendering(android, true);
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.LandscapeLeft;
            PlayerSettings.allowedAutorotateToPortrait = false;
            PlayerSettings.allowedAutorotateToPortraitUpsideDown = false;
            PlayerSettings.allowedAutorotateToLandscapeLeft = true;
            PlayerSettings.allowedAutorotateToLandscapeRight = true;

            PlayerSettings.SetScriptingBackend(android, ScriptingImplementation.IL2CPP);
            PlayerSettings.SetApiCompatibilityLevel(android, ApiCompatibilityLevel.NET_Standard);
            PlayerSettings.SetManagedStrippingLevel(android, ManagedStrippingLevel.Low);
            PlayerSettings.SetIl2CppCompilerConfiguration(android, Il2CppCompilerConfiguration.Release);

            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel32;
            PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel34;
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.preferredInstallLocation = AndroidPreferredInstallLocation.Auto;
            PlayerSettings.Android.forceInternetPermission = true;
            PlayerSettings.Android.forceSDCardPermission = false;
            PlayerSettings.Android.androidTVCompatibility = false;
            // Unity 6 OpenXR validation requires exactly Game Activity, not Activity.
            PlayerSettings.Android.applicationEntry = AndroidApplicationEntry.GameActivity;

            PlayerSettings.SetUseDefaultGraphicsAPIs(BuildTarget.Android, false);
            PlayerSettings.SetGraphicsAPIs(BuildTarget.Android, new[] { GraphicsDeviceType.Vulkan });
            EnsureInputSystemOnly();

            QualitySettings.vSyncCount = 0;
            QualitySettings.antiAliasing = 4;
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

            var openXr = OpenXRSettings.GetSettingsForBuildTargetGroup(group);
            if (openXr == null)
                throw new InvalidOperationException("OpenXR Android settings asset was not created.");
            openXr.renderMode = OpenXRSettings.RenderMode.SinglePassInstanced;
            openXr.symmetricProjection = false;
            openXr.optimizeBufferDiscards = true;
            openXr.latencyOptimization = OpenXRSettings.LatencyOptimization.PrioritizeInputPolling;
            EditorUtility.SetDirty(openXr);
            AssetDatabase.SaveAssets();

            Debug.Log("[FloppyFlight] OpenXR Android loader enabled. Meta Quest Support and the Meta XR feature group are on. Meta's build step keeps OVRPlugin's libopenxr_loader.so and drops Unity's openxr_loader.aar. Targets are Quest 2, Quest Pro, Quest 3, and Quest 3S. Stereo mode is Single Pass Instanced (Vulkan multiview). Oculus Touch, Touch Pro, and Touch Plus profiles are enabled. Symmetric projection is off. System keyboard manifest entries are off. Latency optimization is Prioritize Input Polling.");
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

        static string ResolveOutput(string custom)
        {
            if (string.IsNullOrWhiteSpace(custom))
                custom = Path.GetFullPath(Path.Combine(Application.dataPath, "..", "Builds", "FloppyFlight.aab"));

            if (!Path.IsPathRooted(custom))
                custom = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), custom));

            if (custom.EndsWith(".apk", StringComparison.OrdinalIgnoreCase))
                custom = Path.ChangeExtension(custom, ".aab");
            else if (!custom.EndsWith(".aab", StringComparison.OrdinalIgnoreCase))
                custom += ".aab";

            return custom;
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
    /// </summary>
    class OpenXrLoaderGradleDedupe : IPostGenerateGradleAndroidProject
    {
        const string PickFirstMarker = "FloppyFlightOpenXrLoaderPickFirst";
        const string LoaderSo = "libopenxr_loader.so";

        public int callbackOrder => 100000;

        public void OnPostGenerateGradleAndroidProject(string path)
        {
            var unityLibrary = ResolveUnityLibrary(path);
            var removed = StripUnityLoaderBesideOvrPlugin(unityLibrary);
            var launcherGradle = ResolveLauncherGradle(path, unityLibrary);
            var patched = PatchLauncherPickFirst(launcherGradle);
            Debug.Log(
                "[FloppyFlight] OpenXR loader packaging: removed " + removed
                + " libopenxr_loader.so entries from Unity's openxr_loader.aar"
                + (patched ? " and added launcher jniLibs.pickFirsts." : ". Launcher pickFirst was already present.")
                + " OVRPlugin keeps the loader Quest runs.");
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
            using (var outputStream = File.Create(temp))
            using (var output = new ZipArchive(outputStream, ZipArchiveMode.Create))
            {
                foreach (var entry in input.Entries)
                {
                    var name = entry.FullName.Replace('\\', '/');
                    if (name.EndsWith("/" + LoaderSo, StringComparison.Ordinal)
                        || string.Equals(entry.Name, LoaderSo, StringComparison.Ordinal))
                    {
                        removed++;
                        continue;
                    }

                    if (string.IsNullOrEmpty(entry.Name))
                    {
                        output.CreateEntry(entry.FullName);
                        continue;
                    }

                    var stored = entry.Length == entry.CompressedLength;
                    var created = output.CreateEntry(
                        entry.FullName,
                        stored ? System.IO.Compression.CompressionLevel.NoCompression : System.IO.Compression.CompressionLevel.Optimal);
                    using (var source = entry.Open())
                    using (var destination = created.Open())
                        source.CopyTo(destination);
                }
            }

            if (removed == 0)
            {
                File.Delete(temp);
                return 0;
            }

            var attributes = File.GetAttributes(aarPath);
            if ((attributes & FileAttributes.ReadOnly) != 0)
                File.SetAttributes(aarPath, attributes & ~FileAttributes.ReadOnly);
            File.Copy(temp, aarPath, true);
            File.Delete(temp);
            return removed;
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
    }
}
