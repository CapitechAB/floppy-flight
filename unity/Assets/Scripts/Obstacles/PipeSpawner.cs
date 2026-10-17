using System.Collections.Generic;
using UnityEngine;

namespace FloppyFlight.Obstacles
{
    public class PipeSpawner : MonoBehaviour
    {
        public const float FirstPipeZ = -18f;
        public const float PipeSpacingZ = 20f;

        [Header("Pool Settings")]
        [SerializeField] private GameObject pipePrefab;
        [SerializeField] private int poolSize = 10;
        [SerializeField] private float spacingZ = PipeSpacingZ;
        [SerializeField] private float minGapY = 3.5f;
        [SerializeField] private float maxGapY = 8.0f;

        private List<PipePair> pipePool = new List<PipePair>();
        private float nextSpawnZ;

        public void InitializePool()
        {
            if (pipePool.Count > 0) return;

            for (int i = 0; i < poolSize; i++)
            {
                GameObject obj = Instantiate(pipePrefab, transform);
                PipePair pair = obj.GetComponent<PipePair>();
                obj.SetActive(false);
                pipePool.Add(pair);
            }
        }

        public void ResetPipes(float startZ = -18.0f)
        {
            InitializePool();
            nextSpawnZ = startZ;

            for (int i = 0; i < pipePool.Count; i++)
            {
                PipePair pipe = pipePool[i];
                float gapY = Random.Range(minGapY, maxGapY);
                pipe.transform.position = new Vector3(0, 0, nextSpawnZ);
                pipe.Setup(gapY);
                pipe.gameObject.SetActive(true);

                nextSpawnZ -= spacingZ;
            }
        }

        public void UpdatePipes(float playerZ, System.Action onScore)
        {
            for (int i = 0; i < pipePool.Count; i++)
            {
                PipePair pipe = pipePool[i];
                if (!pipe.gameObject.activeSelf) continue;

                float pz = pipe.transform.position.z;

                // Scoring check
                if (!pipe.Scored && playerZ <= pz)
                {
                    pipe.Scored = true;
                    pipe.CollectRing();
                    onScore?.Invoke();
                }

                // Recycle pipe when well behind player
                if (pz > playerZ + 15.0f)
                {
                    float gapY = Random.Range(minGapY, maxGapY);
                    pipe.transform.position = new Vector3(0, 0, nextSpawnZ);
                    pipe.Setup(gapY);
                    nextSpawnZ -= spacingZ;
                }
            }
        }
    }
}
