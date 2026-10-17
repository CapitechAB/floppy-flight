using FloppyFlight.Managers;
using FloppyFlight.Obstacles;
using UnityEngine;

namespace FloppyFlight.Flight
{
    /// <summary>
    /// Ends a run when the headset proxy hits a pipe, a bird obstacle, or the ground.
    /// The orange and purple birds both carry FloppyBird, so one parent check covers both.
    /// PipePair and FloppyBird have no collision logic of their own; this lives on the eye anchor.
    /// </summary>
    public class FlightCollision : MonoBehaviour
    {
        [SerializeField] private float groundHeight = 0.35f;

        void Update()
        {
            if (transform.position.y < groundHeight)
                TryCrash();
        }

        void OnTriggerEnter(Collider other)
        {
            if (other == null) return;
            if (other.GetComponentInParent<PipePair>() != null ||
                other.GetComponentInParent<FloppyBird>() != null)
                TryCrash();
        }

        private void TryCrash()
        {
            if (GameManager.Instance == null) return;
            if (GameManager.Instance.State != GameState.Flying) return;
            GameManager.Instance.OnPlayerCrashed();
        }
    }
}
