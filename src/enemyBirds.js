import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneModel } from 'three/examples/jsm/utils/SkeletonUtils.js';

// Unity prefab scale. The mesh is ~0.31 m and the web pipes use the same
// 1.15 m radius as the Quest scene, so scale 4 keeps the same size relationship.
const BIRD_SCALE = 4;
const BODY_RADIUS = 0.12 * BIRD_SCALE;

const POOL_SIZE = 4;
const MAX_ALIVE = 2;
const INITIAL_DELAY = 1.6;
const MIN_INTERVAL = 4.5;
const MAX_INTERVAL = 7;
const LATERAL_START = 7.5;
const MIN_SPEED = 3.4;
const MAX_SPEED = 4.8;
const MIN_ALTITUDE = 2.4;
const MAX_ALTITUDE = 8.6;
const ALTITUDE_SEPARATION = 2.2;
const GAP_OFFSET_MIN = 1.9;
const GAP_OFFSET_MAX = 2.45;
const BOB_MIN = 0.22;
const BOB_MAX = 0.4;

const FIRST_PIPE_Z = -18;
const PIPE_SPACING = 20;
const PIPE_CLEARANCE = 3.2;

const RECYCLE_BEHIND = 14;
const LATERAL_LIMIT = 10.5;
const FAR_AHEAD = 80;
const MAX_AGE = 14;

const OUTLINE_COLOR = 0x1a0e0a;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function pipePhase(z) {
  return ((z - FIRST_PIPE_Z) % PIPE_SPACING + PIPE_SPACING) % PIPE_SPACING;
}

// Keep the body out of a pipe's Z slab. The bird still crosses x = 0 later.
function pushClearOfPipes(z) {
  const phase = pipePhase(z);
  if (phase < PIPE_CLEARANCE) return z + (PIPE_CLEARANCE - phase);
  const tail = PIPE_SPACING - PIPE_CLEARANCE;
  if (phase > tail) return z - (phase - tail);
  return z;
}

function applyOutlineMaterial(root, outlineColor) {
  root.traverse((obj) => {
    if (!obj.isMesh || !obj.material) return;
    const source = Array.isArray(obj.material) ? obj.material : [obj.material];
    let replaced = false;
    const mapped = source.map((mat) => {
      if (!mat || mat.name !== 'Bird_Outline') return mat;
      replaced = true;
      // Inverted hull: front faces are the shell. DoubleSide would fill the bird black.
      const basic = new THREE.MeshBasicMaterial({
        color: outlineColor,
        side: THREE.FrontSide
      });
      basic.name = 'Bird_Outline';
      return basic;
    });
    if (replaced) obj.material = Array.isArray(obj.material) ? mapped : mapped[0];
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    obj.castShadow = mats.some((mat) => mat && mat.name !== 'Bird_Outline');
  });
}

function buildProceduralTemplate(kind) {
  const purple = kind === 'purple';
  const root = new THREE.Group();
  root.name = purple ? 'PurpleBird' : 'FloppyBird';

  const bodyMat = new THREE.MeshStandardMaterial({ color: purple ? 0xa58ad9 : 0xf07a2a, roughness: 0.55 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: purple ? 0xebc7e6 : 0xfcae7c, roughness: 0.55 });
  const beakMat = new THREE.MeshStandardMaterial({ color: purple ? 0xf7a632 : 0xf9a23a, roughness: 0.4 });
  const wingMat = new THREE.MeshStandardMaterial({ color: purple ? 0x6d4fb3 : 0xee7e68, roughness: 0.5 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.3 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.4 });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.11, 18, 14), bodyMat);
  body.scale.set(1.05, 0.92, 1.25);
  body.castShadow = true;
  root.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 12), bellyMat);
  belly.position.set(0, -0.03, 0.02);
  belly.scale.set(0.85, 0.7, 1.05);
  root.add(belly);

  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.09, 8), beakMat);
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.01, 0.14);
  root.add(beak);

  const eyeGeo = new THREE.SphereGeometry(0.018, 10, 8);
  const pupilGeo = new THREE.SphereGeometry(0.009, 8, 8);
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(0.045 * side, 0.035, 0.07);
    root.add(eye);
    const pupil = new THREE.Mesh(pupilGeo, pupilMat);
    pupil.position.set(0.052 * side, 0.035, 0.082);
    root.add(pupil);
  }

  const wingGeo = new THREE.SphereGeometry(0.07, 12, 8);
  wingGeo.scale(1.1, 0.22, 0.7);
  for (const side of [-1, 1]) {
    const wing = new THREE.Mesh(wingGeo, wingMat);
    wing.name = side < 0 ? 'Wing_L' : 'Wing_R';
    wing.position.set(0.1 * side, 0.01, -0.01);
    wing.castShadow = true;
    root.add(wing);
  }

  const shellGeo = new THREE.SphereGeometry(0.125, 16, 12);
  shellGeo.scale(1.08, 0.98, 1.32);
  const shell = new THREE.Mesh(
    shellGeo,
    new THREE.MeshBasicMaterial({ color: purple ? 0x2c1a45 : OUTLINE_COLOR, side: THREE.BackSide })
  );
  shell.name = 'OutlineShell';
  root.add(shell);

  root.scale.setScalar(BIRD_SCALE);
  return root;
}

export class EnemyBirdManager {
  constructor(scene) {
    this.scene = scene;
    this.pool = [];
    this.variants = [];
    this.pendingLoads = 2;
    this.ready = false;
    this.source = null;
    this.spawnTimer = INITIAL_DELAY;
    this.spawnCount = 0;
    const base = import.meta.env.BASE_URL;
    this.loadVariant('orange', `${base}models/FloppyBird.glb`, 0x1a0e0a);
    this.loadVariant('purple', `${base}models/PurpleBird.glb`, 0x2c1a45);
  }

  loadVariant(kind, url, outlineColor) {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        const template = gltf.scene;
        applyOutlineMaterial(template, outlineColor);
        template.scale.setScalar(BIRD_SCALE);
        const clip = gltf.animations.find((entry) => entry.name === 'Flap') || gltf.animations[0] || null;
        this.variants.push({ kind, template, clip, source: 'glb' });
        this.finishVariant();
      },
      undefined,
      (error) => {
        console.error(kind + ' bird GLB failed to load, using a procedural bird.', error);
        this.variants.push({
          kind,
          template: buildProceduralTemplate(kind),
          clip: null,
          source: 'procedural'
        });
        this.finishVariant();
      }
    );
  }

  finishVariant() {
    this.pendingLoads -= 1;
    if (this.pendingLoads > 0 || this.ready) return;
    const share = this.variants.length > 1 ? Math.floor(POOL_SIZE / this.variants.length) : POOL_SIZE;
    for (let v = 0; v < this.variants.length; v++) {
      const count = v === this.variants.length - 1 ? POOL_SIZE - share * v : share;
      for (let i = 0; i < count; i++) this.pool.push(this.createInstance(this.variants[v]));
    }
    this.source = this.variants.every((variant) => variant.source === 'glb') ? 'glb' : 'procedural';
    this.ready = true;
  }

  createInstance(variant) {
    const model = cloneModel(variant.template);
    model.visible = false;
    model.name = variant.kind === 'purple' ? 'PurpleBirdObstacle' : 'FloppyBirdObstacle';
    this.scene.add(model);

    const mixer = new THREE.AnimationMixer(model);
    let action = null;
    if (variant.clip) {
      action = mixer.clipAction(variant.clip);
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    }

    return {
      model,
      mixer,
      action,
      kind: variant.kind,
      alive: false,
      travel: new THREE.Vector3(),
      baseY: 0,
      bobAmp: 0,
      bobPhase: 0,
      bobSpeed: 0,
      age: 0
    };
  }

  reset() {
    this.spawnTimer = INITIAL_DELAY;
    this.spawnCount = 0;
    for (let i = 0; i < this.pool.length; i++) {
      this.recycle(this.pool[i]);
    }
  }

  aliveCount() {
    let count = 0;
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].alive) count++;
    }
    return count;
  }

  update(delta, playerZ, playerSpeed, pipeManager) {
    if (!this.ready) return;

    let active = 0;
    for (let i = 0; i < this.pool.length; i++) {
      const bird = this.pool[i];
      if (!bird.alive) continue;
      active++;
      this.tick(bird, delta);
      if (this.isExpired(bird, playerZ)) {
        this.recycle(bird);
        active--;
      }
    }

    if (active >= MAX_ALIVE) {
      this.spawnTimer = Math.max(this.spawnTimer, MIN_INTERVAL * 0.5);
      return;
    }

    this.spawnTimer -= delta;
    if (this.spawnTimer > 0) return;
    if (this.trySpawn(playerZ, playerSpeed, pipeManager)) {
      // The second bird follows quickly so both colours are on screen in a 10 s recording.
      this.spawnTimer = this.spawnCount === 1 ? 1.35 : rand(MIN_INTERVAL, MAX_INTERVAL);
    }
  }

  trySpawn(playerZ, playerSpeed, pipeManager) {
    let kind = 'orange';
    if (this.spawnCount === 1) kind = 'purple';
    else if (this.spawnCount > 1) kind = Math.random() < 0.5 ? 'purple' : 'orange';
    let bird = this.pool.find((entry) => !entry.alive && entry.kind === kind);
    if (!bird) bird = this.pool.find((entry) => !entry.alive);
    if (!bird) return false;

    const toPositiveX = Math.random() > 0.5;
    const startX = toPositiveX ? -LATERAL_START : LATERAL_START;
    const cruise = rand(MIN_SPEED, MAX_SPEED);
    const vz = rand(-0.35, 0.35);
    const closing = Math.max(2.5, playerSpeed + vz);
    let z = pushClearOfPipes(playerZ - (LATERAL_START / cruise) * closing);

    if (playerZ - z < 10) z = pushClearOfPipes(z - PIPE_SPACING);
    for (let i = 0; i < this.pool.length; i++) {
      const other = this.pool[i];
      if (!other.alive) continue;
      if (Math.abs(other.model.position.z - z) < 8) {
        z = pushClearOfPipes(other.model.position.z - PIPE_SPACING);
      }
    }

    const ahead = Math.max(8, playerZ - z);
    const meetTime = ahead / closing;
    // Reach the player's x = 0 lane as the player arrives, then keep going.
    const vx = THREE.MathUtils.clamp(-startX / meetTime, -6.2, 6.2);

    const altitude = this.pickAltitude(z, pipeManager);
    this.launch(bird, startX, altitude, z, vx, vz, rand(BOB_MIN, BOB_MAX));
    this.spawnCount++;
    return true;
  }

  pickAltitude(birdZ, pipeManager) {
    const gapY = this.targetGapY(birdZ, pipeManager);
    const minClearance = 1.7;
    const candidates = [];
    const signs = Math.random() > 0.5 ? [1, -1] : [-1, 1];
    for (let i = 0; i < signs.length; i++) {
      candidates.push(gapY + signs[i] * rand(GAP_OFFSET_MIN, GAP_OFFSET_MAX));
    }
    for (let i = 0; i < 4; i++) candidates.push(rand(MIN_ALTITUDE, MAX_ALTITUDE));

    for (let i = 0; i < candidates.length; i++) {
      const y = THREE.MathUtils.clamp(candidates[i], MIN_ALTITUDE, MAX_ALTITUDE);
      if (Math.abs(y - gapY) < minClearance) continue;
      if (!this.altitudeCrowded(y)) return y;
    }

    const low = MIN_ALTITUDE;
    const high = MAX_ALTITUDE;
    return Math.abs(low - gapY) >= Math.abs(high - gapY) ? low : high;
  }

  targetGapY(birdZ, pipeManager) {
    if (!pipeManager || !pipeManager.pipes) return 5;
    let bestZ = -Infinity;
    let gapY = 5;
    for (let i = 0; i < pipeManager.pipes.length; i++) {
      const pipe = pipeManager.pipes[i];
      const pz = pipe.group.position.z;
      if (pz < birdZ - 0.5 && pz > bestZ) {
        bestZ = pz;
        gapY = pipe.gapY;
      }
    }
    return gapY;
  }

  altitudeCrowded(y) {
    for (let i = 0; i < this.pool.length; i++) {
      const other = this.pool[i];
      if (!other.alive) continue;
      if (Math.abs(other.baseY - y) < ALTITUDE_SEPARATION) return true;
    }
    return false;
  }

  launch(bird, x, y, z, vx, vz, bobAmp) {
    bird.alive = true;
    bird.age = 0;
    bird.baseY = y;
    bird.bobAmp = bobAmp;
    bird.bobPhase = rand(0, Math.PI * 2);
    bird.bobSpeed = rand(1.6, 2.4);
    bird.travel.set(vx, 0, vz);
    bird.model.visible = true;
    bird.model.position.set(x, y + Math.sin(bird.bobPhase) * bobAmp, z);
    this.faceTravel(bird);

    if (bird.action) {
      bird.action.reset();
      bird.action.setLoop(THREE.LoopRepeat, Infinity);
      bird.action.play();
      const duration = bird.action.getClip().duration || 0.4;
      bird.action.time = Math.random() * duration;
      bird.mixer.update(0);
    }
  }

  tick(bird, delta) {
    bird.age += delta;
    bird.bobPhase += delta * bird.bobSpeed;
    const pos = bird.model.position;
    pos.x += bird.travel.x * delta;
    pos.z += bird.travel.z * delta;
    pos.y = bird.baseY + Math.sin(bird.bobPhase) * bird.bobAmp;
    this.faceTravel(bird);
    if (bird.action) {
      bird.mixer.update(delta);
    } else {
      this.flapProceduralWings(bird);
    }
  }

  flapProceduralWings(bird) {
    const flap = Math.sin(bird.age * (Math.PI * 2) / 0.4);
    bird.model.traverse((obj) => {
      if (obj.name === 'Wing_L') obj.rotation.z = -0.5 - flap * 0.6;
      if (obj.name === 'Wing_R') obj.rotation.z = 0.5 + flap * 0.6;
    });
  }

  faceTravel(bird) {
    const travel = bird.travel;
    if (travel.x * travel.x + travel.z * travel.z < 1e-6) return;
    // Model beak is +Z. three.js yaw atan2(x, z) aims +Z along travel.
    bird.model.rotation.set(0, Math.atan2(travel.x, travel.z), 0);
  }

  isExpired(bird, playerZ) {
    if (bird.age > MAX_AGE) return true;
    const pos = bird.model.position;
    if (pos.z > playerZ + RECYCLE_BEHIND) return true;
    if (pos.z < playerZ - FAR_AHEAD) return true;
    if (bird.travel.x > 0 && pos.x > LATERAL_LIMIT) return true;
    if (bird.travel.x < 0 && pos.x < -LATERAL_LIMIT) return true;
    return false;
  }

  recycle(bird) {
    bird.alive = false;
    if (bird.model) bird.model.visible = false;
  }

  checkCollision(playerPos, playerRadius = 0.38) {
    const limit = playerRadius + BODY_RADIUS;
    const limitSq = limit * limit;
    for (let i = 0; i < this.pool.length; i++) {
      const bird = this.pool[i];
      if (!bird.alive) continue;
      const pos = bird.model.position;
      const dx = playerPos.x - pos.x;
      const dy = playerPos.y - pos.y;
      const dz = playerPos.z - pos.z;
      if (dx * dx + dy * dy + dz * dz < limitSq) {
        return { hit: true, cause: 'bird' };
      }
    }
    return { hit: false };
  }
}
