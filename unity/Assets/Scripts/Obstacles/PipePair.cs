using UnityEngine;

namespace FloppyFlight.Obstacles
{
    public class PipePair : MonoBehaviour
    {
        [Header("Pipe Elements")]
        [SerializeField] private Transform topPipe;
        [SerializeField] private Transform bottomPipe;
        [SerializeField] private Transform scoreRing;
        [SerializeField] private float gapHeight = 3.8f;

        public bool Scored { get; set; } = false;

        public void Setup(float gapY)
        {
            Scored = false;
            if (scoreRing != null)
            {
                scoreRing.gameObject.SetActive(true);
                scoreRing.localPosition = new Vector3(0, gapY, 0);
            }

            if (bottomPipe != null)
            {
                bottomPipe.localPosition = new Vector3(0, gapY - gapHeight / 2.0f, 0);
            }

            if (topPipe != null)
            {
                topPipe.localPosition = new Vector3(0, gapY + gapHeight / 2.0f, 0);
            }
        }

        void Update()
        {
            if (scoreRing != null && scoreRing.gameObject.activeSelf)
            {
                scoreRing.Rotate(Vector3.up * (90f * Time.deltaTime), Space.Self);
            }
        }

        public void CollectRing()
        {
            if (scoreRing != null)
            {
                scoreRing.gameObject.SetActive(false);
            }
        }
    }
}
