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
        [SerializeField] private float flapVelocityThreshold = -1.2f;

        [Header("Wing / Avatar Transforms")]
        [SerializeField] private Transform leftWingTransform;
        [SerializeField] private Transform rightWingTransform;
        [SerializeField] private Transform birdBeakTransform;

        private float currentSpeed;
        private float currentVelocityY;
        private float flapCooldownTimer;
        private Vector3 prevLeftPos;
        private Vector3 prevRightPos;

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
            if (!IsFlying) return;

            float dt = Time.deltaTime;
            if (flapCooldownTimer > 0) flapCooldownTimer -= dt;

            // 1. Controller Velocity Tracking
            Vector3 leftPos = OVRInput.GetLocalControllerPosition(OVRInput.Controller.LTouch);
            Vector3 rightPos = OVRInput.GetLocalControllerPosition(OVRInput.Controller.RTouch);

            float leftVy = (leftPos.y - prevLeftPos.y) / Mathf.Max(dt, 0.001f);
            float rightVy = (rightPos.y - prevRightPos.y) / Mathf.Max(dt, 0.001f);

            prevLeftPos = leftPos;
            prevRightPos = rightPos;

            bool leftFlapped = leftVy < flapVelocityThreshold;
            bool rightFlapped = rightVy < flapVelocityThreshold;

            // Fallback controller triggers or keyboard space
            bool triggerPressed = OVRInput.GetDown(OVRInput.Button.PrimaryIndexTrigger) ||
                                  OVRInput.GetDown(OVRInput.Button.SecondaryIndexTrigger) ||
                                  Input.GetKeyDown(KeyCode.Space);

            if ((leftFlapped || rightFlapped || triggerPressed) && flapCooldownTimer <= 0)
            {
                TriggerFlap(leftFlapped && rightFlapped);
            }

            // 2. Physics: Gravity & Forward Travel
            currentVelocityY += gravity * dt;
            currentVelocityY = Mathf.Max(currentVelocityY, terminalFallSpeed);

            Vector3 step = new Vector3(0, currentVelocityY * dt, -currentSpeed * dt);
            transform.position += step;

            // 3. Dynamic Beak Tilt for flight feedback
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

        private void TriggerFlap(bool isBoth)
        {
            flapCooldownTimer = 0.18f;
            float boost = isBoth ? flapImpulse * 1.15f : flapImpulse;
            currentVelocityY = Mathf.Max(currentVelocityY * 0.2f, 0) + boost;

            // Haptics on Quest Touch Plus controllers
            OVRInput.SetControllerVibration(0.7f, 0.7f, OVRInput.Controller.LTouch);
            OVRInput.SetControllerVibration(0.7f, 0.7f, OVRInput.Controller.RTouch);
            Invoke(nameof(StopHaptics), 0.08f);

            OnFlap?.Invoke(isBoth);
        }

        private void StopHaptics()
        {
            OVRInput.SetControllerVibration(0, 0, OVRInput.Controller.LTouch);
            OVRInput.SetControllerVibration(0, 0, OVRInput.Controller.RTouch);
        }

        public void IncreaseSpeed(float increment)
        {
            currentSpeed = Mathf.Min(currentSpeed + increment, 13.0f);
        }
    }
}
