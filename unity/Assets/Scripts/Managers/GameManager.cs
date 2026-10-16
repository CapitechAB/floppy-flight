using UnityEngine;
using FloppyFlight.Flight;
using FloppyFlight.Obstacles;
using FloppyFlight.Avatar;
using FloppyFlight.Platform;

namespace FloppyFlight.Managers
{
    public enum GameState { Ready, Flying, GameOver }

    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

        [Header("System References")]
        [SerializeField] private FlapFlightController flightController;
        [SerializeField] private PipeSpawner pipeSpawner;
        [SerializeField] private BirdAvatarController avatarController;

        [Header("Audio")]
        [SerializeField] private AudioSource audioSource;
        [SerializeField] private AudioSource bgmAudioSource;
        [SerializeField] private AudioClip bgmClip;
        [SerializeField] private AudioClip[] flapClips;
        [SerializeField] private AudioClip scoreClip;
        [SerializeField] private AudioClip bonkClip;
        [SerializeField] private AudioClip gameOverClip;
        [SerializeField] private AudioClip fightClip;
        [SerializeField] private AudioClip fatalityClip;
        [SerializeField] private AudioClip uhOhClip;
        [SerializeField] private AudioClip[] announcerClips;

        private GameState currentState = GameState.Ready;
        private int currentScore = 0;
        private int bestScore = 0;
        private float gameOverCooldown = 0f;

        public int Score => currentScore;
        public int Best => bestScore;
        public GameState State => currentState;

        void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        void Start()
        {
            bestScore = PlayerPrefs.GetInt("BestScore", 0);
            flightController.OnFlap += HandlePlayerFlap;
            PrepareBgm();
            ResetGame();
        }

        public void ResetGame()
        {
            currentState = GameState.Ready;
            currentScore = 0;
            flightController.ResetPosition(new Vector3(0, 5.0f, 0));
            pipeSpawner.ResetPipes(-18f);
            if (bgmAudioSource) bgmAudioSource.volume = 0.38f;
        }

        private void PrepareBgm()
        {
            if (bgmAudioSource == null) return;
            if (bgmClip != null) bgmAudioSource.clip = bgmClip;
            bgmAudioSource.loop = true;
            bgmAudioSource.volume = 0.38f;
        }

        private void HandlePlayerFlap(bool isBoth)
        {
            if (audioSource && flapClips != null && flapClips.Length > 0)
            {
                AudioClip clip = flapClips[Random.Range(0, flapClips.Length)];
                audioSource.pitch = Random.Range(0.95f, 1.05f);
                audioSource.PlayOneShot(clip, 0.85f);
            }
            if (avatarController) avatarController.TriggerWingFlap(isBoth);

            if (currentState == GameState.Ready)
            {
                currentState = GameState.Flying;
                flightController.IsFlying = true;
                if (bgmAudioSource && !bgmAudioSource.isPlaying) bgmAudioSource.Play();
                if (audioSource && fightClip) audioSource.PlayOneShot(fightClip, 1.0f);
            }
            else if (currentState == GameState.GameOver && gameOverCooldown <= 0)
            {
                ResetGame();
            }
        }

        void Update()
        {
            if (gameOverCooldown > 0) gameOverCooldown -= Time.deltaTime;

            if (currentState == GameState.Flying)
            {
                pipeSpawner.UpdatePipes(flightController.transform.position.z, OnPointScored);
            }
        }

        private void OnPointScored()
        {
            currentScore++;
            if (audioSource && scoreClip)
            {
                audioSource.pitch = 1.0f;
                audioSource.PlayOneShot(scoreClip, 0.7f);
            }

            // Mortal Kombat Announcer ("One!", "Two!", "Excellent!", etc.)
            if (audioSource && announcerClips != null && currentScore <= announcerClips.Length)
            {
                audioSource.PlayOneShot(announcerClips[currentScore - 1], 1.0f);
            }

            flightController.IncreaseSpeed(0.12f);

            if (currentScore > bestScore)
            {
                bestScore = currentScore;
                PlayerPrefs.SetInt("BestScore", bestScore);
                PlayerPrefs.Save();
            }
        }

        public void OnPlayerCrashed()
        {
            if (currentState != GameState.Flying) return;

            currentState = GameState.GameOver;
            flightController.IsFlying = false;
            gameOverCooldown = 1.0f;

            // Duck BGM
            if (bgmAudioSource) bgmAudioSource.volume = 0.15f;

            // 1. Immediate cartoon bonk impact
            if (audioSource && bonkClip)
            {
                audioSource.pitch = 1.0f;
                audioSource.PlayOneShot(bonkClip, 1.0f);
            }

            // 2. Comical sad trombone Game Over fanfare
            if (audioSource && gameOverClip)
            {
                StartCoroutine(PlayGameOverDelayed(0.24f));
            }

            // 3. Cheerful "Uh ooh!" on crash
            if (audioSource && (uhOhClip != null || fatalityClip != null))
            {
                StartCoroutine(PlayUhOhDelayed(1.75f));
            }

            // Submit score to Meta Horizon Leaderboard
            if (MetaPlatformManager.Instance != null)
            {
                MetaPlatformManager.Instance.SubmitScore(currentScore);
            }
        }

        private System.Collections.IEnumerator PlayGameOverDelayed(float delay)
        {
            yield return new WaitForSeconds(delay);
            if (audioSource && gameOverClip)
            {
                audioSource.PlayOneShot(gameOverClip, 0.95f);
            }
        }

        private System.Collections.IEnumerator PlayUhOhDelayed(float delay)
        {
            yield return new WaitForSeconds(delay);
            AudioClip clip = uhOhClip != null ? uhOhClip : fatalityClip;
            if (audioSource && clip)
            {
                audioSource.PlayOneShot(clip, 1.0f);
            }
        }
    }
}
