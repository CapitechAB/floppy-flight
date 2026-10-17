using UnityEngine;

namespace FloppyFlight.Flight
{
    /// <summary>
    /// True on the phone/tablet player. The mobile build sets FLOPPY_MOBILE.
    /// A generated Platform_Mobile object is the fallback when the editor scene
    /// was switched without a fresh player compile.
    /// </summary>
    public static class FlightPlatform
    {
        public const string MobileMarker = "Platform_Mobile";

        static bool? cached;

        public static bool IsMobile
        {
            get
            {
#if FLOPPY_MOBILE
                return true;
#else
                if (!cached.HasValue)
                    cached = GameObject.Find(MobileMarker) != null;
                return cached.Value;
#endif
            }
        }
    }
}
