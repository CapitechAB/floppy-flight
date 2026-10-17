using UnityEngine;

namespace FloppyFlight.Flight
{
    public class FlapFlightController : MonoBehaviour
    {
        [Header("Movement Settings")]
        [SerializeField] private float baseForwardSpeed = 8.0f;
        [SerializeField] private float flapImpulse = 4.8f;
        [SerializeField] private float gravity = -11.5f;
        [SerializeField] private float terminalFallSpeed = -9.5f;

        [Header("Wing / Avatar Transforms")]
        [SerializeField] private Transform leftWingTransform;
        [SerializeField] private Transform rightWingTransform;
        [SerializeField] private Transform birdBeakTransform;

        [SerializeField] private MonoBehaviour flapSource;

        private float currentSpeed;
        private float currentVelocityY;
        private float flapCooldownTimer;

        public bool IsFlying { get; set; } = false;

        public delegate void FlapAction(bool isBoth);
        public event FlapAction OnFlap;

        void Start()
        {
            currentSpeed = baseForwardSpeed;
        }

        public void ResetPosition(Vector3 startPos)
        {
            transform.position = startPos;
            currentVelocityY = 0f;
            currentSpeed = baseForwardSpeed;
            IsFlying = false;
        }

        void Update()
        {
            float dt = Time.deltaTime;
            if (flapCooldownTimer > 0) flapCooldownTimer -= dt;

            // Ready and game-over still need the flap so a tap or arm swing can start.
            bool bothHands;
            if (flapCooldownTimer <= 0f && TryReadFlap(out bothHands))
                TriggerFlap(bothHands);

            if (!IsFlying) return;

            currentVelocityY += gravity * dt;
            currentVelocityY = Mathf.Max(currentVelocityY, terminalFallSpeed);

            Vector3 step = new Vector3(0, currentVelocityY * dt, -currentSpeed * dt);
            transform.position += step;

            if (birdBeakTransform != null)
            {
                float targetPitch = Mathf.Clamp(currentVelocityY * 3.5f, -32f, 22f);
                birdBeakTransform.localRotation = Quaternion.Slerp(
                    birdBeakTransform.localRotation,
                    Quaternion.Euler(targetPitch, 0, 0),
                    dt * 8.0f
                );
            }
        }

        bool TryReadFlap(out bool bothHands)
        {
            bothHands = false;
            var source = flapSource as IFlapInput;
            if (source == null)
                source = GetComponent<IFlapInput>();
            if (source == null)
                return false;
            return source.Poll(out bothHands);
        }

        private void TriggerFlap(bool isBoth)
        {
            flapCooldownTimer = 0.18f;
            float boost = isBoth ? flapImpulse * 1.15f : flapImpulse;
            currentVelocityY = Mathf.Max(currentVelocityY * 0.2f, 0) + boost;
            OnFlap?.Invoke(isBoth);
        }

        public void IncreaseSpeed(float increment)
        {
            currentSpeed = Mathf.Min(currentSpeed + increment, 13.0f);
        }
    }
}
