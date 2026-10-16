using FloppyFlight.Managers;
using FloppyFlight.Obstacles;
using UnityEngine;

namespace FloppyFlight.Flight
{
    /// <summary>
    /// Ends a run when the headset proxy hits a pipe or the ground.
    /// PipePair itself has no collision logic; this lives on the eye anchor.
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
            if (other != null && other.GetComponentInParent<PipePair>() != null)
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
