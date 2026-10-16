using FloppyFlight.Managers;
using UnityEngine;

namespace FloppyFlight.UI
{
    /// <summary>
    /// World-space score and prompt that rides ahead of the bird.
    /// </summary>
    public class FlightHud : MonoBehaviour
    {
        [SerializeField] private Transform flightRoot;
        [SerializeField] private TextMesh scoreText;
        [SerializeField] private TextMesh promptText;
        [SerializeField] private TextMesh bestText;

        void LateUpdate()
        {
            var game = GameManager.Instance;
            if (game == null || flightRoot == null) return;

            var position = flightRoot.position;
            transform.position = new Vector3(0f, position.y + 1.35f, position.z - 7.5f);
            // TextMesh faces its local +Z. The bird looks toward world -Z, so the
            // text's +Z must point back at the bird (world +Z).
            transform.rotation = Quaternion.identity;

            if (scoreText != null) scoreText.text = game.Score.ToString();
            if (bestText != null) bestText.text = "Best " + game.Best;

            if (promptText == null) return;
            switch (game.State)
            {
                case GameState.Ready:
                    promptText.text = "Flap to start";
                    break;
                case GameState.GameOver:
                    promptText.text = "Crashed    Flap to retry";
                    break;
                default:
                    promptText.text = string.Empty;
                    break;
            }
        }
    }
}
