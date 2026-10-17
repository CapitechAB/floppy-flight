using UnityEngine;

namespace FloppyFlight.Obstacles
{
    /// <summary>
    /// Flying cartoon bird. The headset trigger treats this component as a crash,
    /// the same way it treats a pipe. The model faces +Z; flight aims that axis
    /// along the travel direction.
    /// </summary>
    public class FloppyBird : MonoBehaviour
    {
        const float MaxAge = 14f;
        const float RecycleBehind = 14f;
        const float LateralLimit = 10.5f;
        const float FarAhead = 80f;

        Vector3 travel;
        float baseY;
        float bobAmplitude;
        float bobPhase;
        float bobSpeed;
        float age;
        bool launched;
        Rigidbody body;
        Animator animator;

        public float Altitude => baseY;

        void Awake()
        {
            body = GetComponent<Rigidbody>();
            animator = GetComponent<Animator>();
        }

        public void Launch(Vector3 position, Vector3 direction, float speed, float altitude, float amplitude)
        {
            travel = direction.sqrMagnitude > 0.0001f
                ? direction.normalized * speed
                : Vector3.right * speed;
            baseY = altitude;
            bobAmplitude = amplitude;
            bobPhase = Random.Range(0f, Mathf.PI * 2f);
            bobSpeed = Random.Range(1.6f, 2.4f);
            age = 0f;
            launched = true;

            var flat = new Vector3(travel.x, 0f, travel.z);
            var rotation = flat.sqrMagnitude > 0.0001f
                ? Quaternion.LookRotation(flat.normalized, Vector3.up)
                : Quaternion.identity;

            var posed = position;
            posed.y = baseY + Mathf.Sin(bobPhase) * bobAmplitude;
            gameObject.SetActive(true);
            ApplyPose(posed, rotation);
            PlayFlap();
        }

        public void Tick(float deltaTime)
        {
            if (!launched) return;

            age += deltaTime;
            bobPhase += deltaTime * bobSpeed;
            var pos = transform.position + travel * deltaTime;
            pos.y = baseY + Mathf.Sin(bobPhase) * bobAmplitude;
            ApplyPose(pos, transform.rotation);
        }

        public bool IsExpired(float playerZ)
        {
            if (!launched) return false;
            if (age > MaxAge) return true;
            var pos = transform.position;
            if (pos.z > playerZ + RecycleBehind) return true;
            if (pos.z < playerZ - FarAhead) return true;
            if (travel.x > 0f && pos.x > LateralLimit) return true;
            if (travel.x < 0f && pos.x < -LateralLimit) return true;
            return false;
        }

        public void Recycle()
        {
            launched = false;
            gameObject.SetActive(false);
        }

        void ApplyPose(Vector3 position, Quaternion rotation)
        {
            transform.SetPositionAndRotation(position, rotation);
            if (body == null) return;
            body.position = position;
            body.rotation = rotation;
        }

        void PlayFlap()
        {
            if (animator == null || animator.runtimeAnimatorController == null) return;
            animator.Play("Flap", 0, Random.value);
        }
    }
}
