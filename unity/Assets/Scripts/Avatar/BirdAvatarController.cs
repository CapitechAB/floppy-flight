using UnityEngine;

namespace FloppyFlight.Avatar
{
    public class BirdAvatarController : MonoBehaviour
    {
        [Header("Wing Anchors")]
        [SerializeField] private Transform leftControllerAnchor;
        [SerializeField] private Transform rightControllerAnchor;
        [SerializeField] private Transform leftWingMesh;
        [SerializeField] private Transform rightWingMesh;

        [Header("Beak Settings")]
        [SerializeField] private Transform centerEyeCamera;
        [SerializeField] private Transform beakMesh;
        [SerializeField] private Vector3 beakOffset = new Vector3(0, -0.16f, 0.32f);

        private float leftFlapBend = 0f;
        private float rightFlapBend = 0f;

        void Start()
        {
            if (beakMesh != null && centerEyeCamera != null)
            {
                beakMesh.SetParent(centerEyeCamera, false);
                beakMesh.localPosition = beakOffset;
                beakMesh.localRotation = Quaternion.Euler(10f, 0, 0);
            }
        }

        public void TriggerWingFlap(bool both, bool isLeftOnly = false)
        {
            if (both || isLeftOnly) leftFlapBend = 1.0f;
            if (both || !isLeftOnly) rightFlapBend = 1.0f;
        }

        void Update()
        {
            float dt = Time.deltaTime;

            // Animate wing flap bend and recovery
            if (leftWingMesh != null && leftFlapBend > 0)
            {
                leftFlapBend = Mathf.Max(0, leftFlapBend - dt * 4.5f);
                float bend = Mathf.Sin(leftFlapBend * Mathf.PI) * 25.0f;
                leftWingMesh.localRotation = Quaternion.Euler(-bend, 0, -bend * 0.5f);
            }

            if (rightWingMesh != null && rightFlapBend > 0)
            {
                rightFlapBend = Mathf.Max(0, rightFlapBend - dt * 4.5f);
                float bend = Mathf.Sin(rightFlapBend * Mathf.PI) * 25.0f;
                rightWingMesh.localRotation = Quaternion.Euler(-bend, 0, bend * 0.5f);
            }
        }
    }
}
