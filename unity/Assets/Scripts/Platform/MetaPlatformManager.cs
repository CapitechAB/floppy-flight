using UnityEngine;
using Oculus.Platform;
using Oculus.Platform.Models;
using Application = UnityEngine.Application;

namespace FloppyFlight.Platform
{
    public class MetaPlatformManager : MonoBehaviour
    {
        [Header("Leaderboard IDs")]
        [SerializeField] private string highScoresLeaderboard = "floppy_highscores";

        public static MetaPlatformManager Instance { get; private set; }

        public bool IsEntitled { get; private set; } = false;

        void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
                DontDestroyOnLoad(gameObject);
                InitializeMetaPlatform();
            }
            else
            {
                Destroy(gameObject);
            }
        }

        private void InitializeMetaPlatform()
        {
            try
            {
                Core.AsyncInitialize().OnComplete(OnPlatformInitCompleted);
            }
            catch (System.Exception ex)
            {
                Debug.LogWarning($"[MetaPlatform] Meta SDK not active (likely desktop test): {ex.Message}");
            }
        }

        private void OnPlatformInitCompleted(Message<PlatformInitialize> msg)
        {
            if (msg.IsError)
            {
                Debug.LogError($"[MetaPlatform] Init Error: {msg.GetError().Message}");
                return;
            }

            Debug.Log("[MetaPlatform] Core Platform initialized. Checking Entitlements...");
            CheckStoreEntitlement();
        }

        // Required by Meta VRC.Quest.Security: Enforce legitimate store purchases
        private void CheckStoreEntitlement()
        {
            Entitlements.IsUserEntitledToApplication().OnComplete(OnEntitlementResult);
        }

        private void OnEntitlementResult(Message msg)
        {
            if (msg.IsError)
            {
                Debug.LogError("[MetaPlatform] User is NOT entitled to this application. Terminating app.");
                IsEntitled = false;
                Application.Quit();
            }
            else
            {
                Debug.Log("[MetaPlatform] Entitlement verified! Player owns a valid license.");
                IsEntitled = true;
            }
        }

        public void SubmitScore(int score)
        {
            if (!IsEntitled) return;
            Leaderboards.WriteEntry(highScoresLeaderboard, score, null, false);
        }

        void Update()
        {
            // Meta VRC Requirement: Pause when Meta Universal Menu is summoned
            if (OVRManager.hasInputFocus == false)
            {
                Time.timeScale = 0f;
            }
            else if (Time.timeScale == 0f)
            {
                Time.timeScale = 1f;
            }
        }
    }
}
