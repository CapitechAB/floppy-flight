using UnityEngine;
using UnityEngine.InputSystem;

namespace FloppyFlight.Flight
{
    /// <summary>
    /// Quest arm swing, index triggers, and Space. The velocity test matches the
    /// original in-controller flap: a hand moving down faster than the threshold.
    /// </summary>
    public class QuestArmFlapInput : MonoBehaviour, IFlapInput
    {
        [SerializeField] private float flapVelocityThreshold = -1.2f;

        Vector3 prevLeftPos;
        Vector3 prevRightPos;
        bool primed;
        FlapFlightController flight;

        void OnEnable()
        {
            flight = GetComponent<FlapFlightController>();
            if (flight != null) flight.OnFlap += HandleFlap;
        }

        void OnDisable()
        {
            if (flight != null) flight.OnFlap -= HandleFlap;
        }

        public bool Poll(out bool bothHands)
        {
            bothHands = false;
            if (FlightPlatform.IsMobile)
                return false;

#if FLOPPY_MOBILE
            return false;
#else
            var dt = Mathf.Max(Time.deltaTime, 0.001f);
            var leftPos = OVRInput.GetLocalControllerPosition(OVRInput.Controller.LTouch);
            var rightPos = OVRInput.GetLocalControllerPosition(OVRInput.Controller.RTouch);

            var leftFlapped = false;
            var rightFlapped = false;
            if (!primed)
            {
                primed = true;
            }
            else
            {
                var leftVy = (leftPos.y - prevLeftPos.y) / dt;
                var rightVy = (rightPos.y - prevRightPos.y) / dt;
                leftFlapped = leftVy < flapVelocityThreshold;
                rightFlapped = rightVy < flapVelocityThreshold;
            }

            prevLeftPos = leftPos;
            prevRightPos = rightPos;

            var keyboard = Keyboard.current;
            var triggerPressed = OVRInput.GetDown(OVRInput.Button.PrimaryIndexTrigger) ||
                                 OVRInput.GetDown(OVRInput.Button.SecondaryIndexTrigger) ||
                                 (keyboard != null && keyboard.spaceKey.wasPressedThisFrame);

            if (!leftFlapped && !rightFlapped && !triggerPressed)
                return false;

            bothHands = leftFlapped && rightFlapped;
            return true;
#endif
        }

        void HandleFlap(bool both)
        {
#if !FLOPPY_MOBILE
            if (FlightPlatform.IsMobile)
                return;
            OVRInput.SetControllerVibration(0.7f, 0.7f, OVRInput.Controller.LTouch);
            OVRInput.SetControllerVibration(0.7f, 0.7f, OVRInput.Controller.RTouch);
            Invoke(nameof(StopHaptics), 0.08f);
#endif
        }

#if !FLOPPY_MOBILE
        void StopHaptics()
        {
            OVRInput.SetControllerVibration(0, 0, OVRInput.Controller.LTouch);
            OVRInput.SetControllerVibration(0, 0, OVRInput.Controller.RTouch);
        }
#endif
    }
}
