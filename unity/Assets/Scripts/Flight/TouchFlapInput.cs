using UnityEngine;
using UnityEngine.InputSystem;

namespace FloppyFlight.Flight
{
    /// <summary>
    /// Phone and tablet flap. A new touch, a pointer press, Space, or a mouse click.
    /// </summary>
    public class TouchFlapInput : MonoBehaviour, IFlapInput
    {
        public bool Poll(out bool bothHands)
        {
            bothHands = false;
            if (Pressed(Keyboard.current != null ? Keyboard.current.spaceKey : null))
                return true;
            if (Pressed(Mouse.current != null ? Mouse.current.leftButton : null))
                return true;

            var touch = Touchscreen.current;
            if (touch != null && Pressed(touch.primaryTouch.press))
                return true;

            var pointer = Pointer.current;
            if (pointer != null && pointer != Mouse.current && Pressed(pointer.press))
                return true;

            return false;
        }

        static bool Pressed(InputControl control)
        {
            var button = control as UnityEngine.InputSystem.Controls.ButtonControl;
            return button != null && button.wasPressedThisFrame;
        }
    }
}
