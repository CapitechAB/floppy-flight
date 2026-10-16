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
        [SerializeField] private AudioClip flapClip;
        [SerializeField] private AudioClip scoreClip;
        [SerializeField] private AudioClip crashClip;

        private GameState currentState = GameState.Ready;
        private int currentScore = 0;
        private int bestScore = 0;
        private float gameOverCooldown = 0f;

        void Awake()
        {
            if (Instance == null) Instance = this;
            else Destroy(gameObject);
        }

        void Start()
        {
            bestScore = PlayerPrefs.GetInt("BestScore", 0);
            flightController.OnFlap += HandlePlayerFlap;
            ResetGame();
        }

        public void ResetGame()
        {
            currentState = GameState.Ready;
            currentScore = 0;
            flightController.ResetPosition(new Vector3(0, 5.0f, 0));
            pipeSpawner.ResetPipes(-18f);
        }

        private void HandlePlayerFlap(bool isBoth)
        {
            if (audioSource && flapClip) audioSource.PlayOneShot(flapClip);
            if (avatarController) avatarController.TriggerWingFlap(isBoth);

            if (currentState == GameState.Ready)
            {
                currentState = GameState.Flying;
                flightController.IsFlying = true;
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
            if (audioSource && scoreClip) audioSource.PlayOneShot(scoreClip);
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

            if (audioSource && crashClip) audioSource.PlayOneShot(crashClip);

            // Submit score to Meta Horizon Leaderboard
            if (MetaPlatformManager.Instance != null)
            {
                MetaPlatformManager.Instance.SubmitScore(currentScore);
            }
        }
    }
}
