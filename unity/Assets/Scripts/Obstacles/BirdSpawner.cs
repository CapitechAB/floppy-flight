using System.Collections.Generic;
using UnityEngine;

namespace FloppyFlight.Obstacles
{
    /// <summary>
    /// Releases a couple of crossing birds ahead of the player. The player only
    /// moves in height, so a bird that sweeps across x = 0 is a dodgeable gate.
    /// </summary>
    public class BirdSpawner : MonoBehaviour
    {
        [Header("Pool")]
        [SerializeField] private GameObject birdPrefab;
        [SerializeField] private GameObject purpleBirdPrefab;
        [SerializeField] private int poolSize = 4;
        [SerializeField] private int maxAlive = 2;

        [Header("Timing")]
        [SerializeField] private float initialDelay = 3.6f;
        [SerializeField] private float minInterval = 4.5f;
        [SerializeField] private float maxInterval = 7f;

        [Header("Path")]
        [SerializeField] private float minAhead = 26f;
        [SerializeField] private float maxAhead = 42f;
        [SerializeField] private float minAltitude = 2.4f;
        [SerializeField] private float maxAltitude = 8.6f;
        [SerializeField] private float lateralStart = 7.5f;
        [SerializeField] private float minSpeed = 3.4f;
        [SerializeField] private float maxSpeed = 4.8f;
        [SerializeField] private float altitudeSeparation = 2.2f;

        readonly List<FloppyBird> pool = new List<FloppyBird>();
        float spawnTimer;

        public void ResetBirds()
        {
            InitializePool();
            spawnTimer = initialDelay;
            for (var i = 0; i < pool.Count; i++)
                pool[i].Recycle();
        }

        public void UpdateBirds(float playerZ)
        {
            if (birdPrefab == null && purpleBirdPrefab == null) return;
            InitializePool();

            var dt = Time.deltaTime;
            var active = 0;
            for (var i = 0; i < pool.Count; i++)
            {
                var bird = pool[i];
                if (!bird.gameObject.activeSelf) continue;
                active++;
                bird.Tick(dt);
                if (bird.IsExpired(playerZ))
                    bird.Recycle();
            }

            if (active >= maxAlive)
            {
                spawnTimer = Mathf.Max(spawnTimer, minInterval * 0.5f);
                return;
            }

            spawnTimer -= dt;
            if (spawnTimer > 0f) return;

            if (TrySpawn(playerZ))
                spawnTimer = Random.Range(minInterval, maxInterval);
        }

        void InitializePool()
        {
            if (pool.Count > 0) return;
            if (birdPrefab == null && purpleBirdPrefab == null) return;

            var both = birdPrefab != null && purpleBirdPrefab != null;
            var orangeCount = both ? poolSize / 2 : (birdPrefab != null ? poolSize : 0);
            var purpleCount = both ? poolSize - orangeCount : (purpleBirdPrefab != null ? poolSize : 0);
            AddToPool(birdPrefab, orangeCount);
            AddToPool(purpleBirdPrefab, purpleCount);
        }

        void AddToPool(GameObject prefab, int count)
        {
            if (prefab == null || count <= 0) return;
            for (var i = 0; i < count; i++)
            {
                var obj = Instantiate(prefab, transform);
                var bird = obj.GetComponent<FloppyBird>();
                if (bird == null)
                {
                    Debug.LogError("[FloppyFlight] Bird prefab is missing FloppyBird: " + prefab.name);
                    Destroy(obj);
                    continue;
                }
                obj.SetActive(false);
                pool.Add(bird);
            }
        }

        bool TrySpawn(float playerZ)
        {
            var preferPurple = Random.value < 0.5f;
            var bird = TakeInactive(preferPurple) ?? TakeInactive(!preferPurple);
            if (bird == null) return false;

            var z = AlignBetweenPipes(playerZ - Random.Range(minAhead, maxAhead));
            var y = PickAltitude();
            var toPositiveX = Random.value > 0.5f;
            var startX = toPositiveX ? -lateralStart : lateralStart;
            var direction = new Vector3(-startX * 2f, 0f, Random.Range(-1.2f, 1.2f));
            var origin = new Vector3(startX, y, z);
            bird.Launch(
                origin,
                direction,
                Random.Range(minSpeed, maxSpeed),
                y,
                Random.Range(0.28f, 0.55f));
            return true;
        }

        FloppyBird TakeInactive(bool purple)
        {
            for (var i = 0; i < pool.Count; i++)
            {
                var bird = pool[i];
                if (bird == null || bird.gameObject.activeSelf) continue;
                var isPurple = bird.gameObject.name.IndexOf("Purple", System.StringComparison.Ordinal) >= 0;
                if (isPurple == purple) return bird;
            }
            return null;
        }

        float PickAltitude()
        {
            var y = Random.Range(minAltitude, maxAltitude);
            for (var attempt = 0; attempt < 4; attempt++)
            {
                var crowded = false;
                for (var i = 0; i < pool.Count; i++)
                {
                    var other = pool[i];
                    if (!other.gameObject.activeSelf) continue;
                    if (Mathf.Abs(other.Altitude - y) < altitudeSeparation)
                        crowded = true;
                }
                if (!crowded) break;
                y = Random.Range(minAltitude, maxAltitude);
            }
            return y;
        }

        static float AlignBetweenPipes(float z)
        {
            var phase = Mathf.Repeat(z - PipeSpawner.FirstPipeZ, PipeSpawner.PipeSpacingZ);
            return z + (PipeSpawner.PipeSpacingZ * 0.5f - phase);
        }
    }
}
