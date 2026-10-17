import * as THREE from 'three';
import cloudHappyUrl from './assets/cloud_happy.png';
import cloudSmileUrl from './assets/cloud_smile.png';
import grassTuft1Url from './assets/grass_tuft_1.png';
import grassTuft2Url from './assets/grass_tuft_2.png';
import grassTuftFlowerUrl from './assets/grass_tuft_flower.png';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.clouds = [];
    this.islands = [];
    this.windmills = [];
    this.bgBirds = [];
    this.grassTufts = [];
    this.elapsedTime = 0;
    this.leafParticles = null;
    this.sparkleParticles = null;
    this.sunRays = null;
    this.runwayTexture = null;
    this.meadowTexture = null;

    this.createSkyDome();
    this.createSunAndLighting();
    this.createGround();
    this.createGrassTufts();
    this.createFloatingIslands();
    this.createSmilingClouds();
    this.createBackgroundBirds();
    this.createSwirlingParticles();
  }

  createSkyDome() {
    // Large hemisphere dome with vibrant vertical sunset gradient
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.0, '#1da2d8'); // Deep vibrant sky blue at top
    grad.addColorStop(0.35, '#56ccf2'); // Bright aqua
    grad.addColorStop(0.65, '#fbc531'); // Radiant warm gold
    grad.addColorStop(0.88, '#fa8231'); // Sunset orange
    grad.addColorStop(1.0, '#eb3b5a'); // Rose horizon base
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 256);

    const skyTex = new THREE.CanvasTexture(canvas);
    skyTex.magFilter = THREE.LinearFilter;
    skyTex.minFilter = THREE.LinearFilter;

    const skyGeom = new THREE.SphereGeometry(220, 64, 32);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide,
      fog: false
    });

    this.skyDome = new THREE.Mesh(skyGeom, skyMat);
    this.scene.add(this.skyDome);

    // Warm atmospheric fog that blends into the golden horizon
    this.scene.fog = new THREE.FogExp2(0xfbc531, 0.0075);
  }

  createSunAndLighting() {
    // Ambient warmth
    const hemiLight = new THREE.HemisphereLight(0xfffae6, 0x4cd137, 0.95);
    this.scene.add(hemiLight);

    // Golden Sunlight
    const sunLight = new THREE.DirectionalLight(0xfff1c5, 1.4);
    sunLight.position.set(10, 28, -40);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 120;
    sunLight.shadow.camera.left = -30;
    sunLight.shadow.camera.right = 30;
    sunLight.shadow.camera.top = 30;
    sunLight.shadow.camera.bottom = -30;
    this.scene.add(sunLight);

    // Radiant Sun Glow Mesh on horizon
    const sunGlowGeom = new THREE.CircleGeometry(16, 32);
    const sunGlowMat = new THREE.MeshBasicMaterial({
      color: 0xfff4b8,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    this.sunMesh = new THREE.Mesh(sunGlowGeom, sunGlowMat);
    this.sunMesh.position.set(0, 16, -170);
    this.scene.add(this.sunMesh);

    // Sun Rays / Godrays
    const rayGroup = new THREE.Group();
    const rayGeom = new THREE.PlaneGeometry(12, 140);
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xfffae0,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    for (let i = 0; i < 8; i++) {
      const ray = new THREE.Mesh(rayGeom, rayMat);
      ray.rotation.z = (i * Math.PI) / 8;
      rayGroup.add(ray);
    }
    rayGroup.position.set(0, 16, -168);
    this.scene.add(rayGroup);
    this.sunRays = rayGroup;
  }

  createGround() {
    const groundGroup = new THREE.Group();

    // 1. Expansive Meadow Ground (320m wide x 440m deep)
    // Completely eliminates edge clipping and covers the horizon on all sides
    const meadowCanvas = document.createElement('canvas');
    meadowCanvas.width = 128;
    meadowCanvas.height = 128;
    const mctx = meadowCanvas.getContext('2d');

    // Vibrant cartoon emerald green base
    mctx.fillStyle = '#68d374';
    mctx.fillRect(0, 0, 128, 128);

    // Subtle checkered shade variance
    mctx.fillStyle = '#55c062';
    mctx.fillRect(0, 0, 64, 64);
    mctx.fillRect(64, 64, 64, 64);

    // Micro grass flecks for soft organic texture
    mctx.fillStyle = '#7eed8b';
    mctx.fillRect(16, 16, 8, 8);
    mctx.fillRect(80, 80, 8, 8);
    mctx.fillRect(32, 96, 6, 6);
    mctx.fillRect(96, 32, 6, 6);

    const meadowTex = new THREE.CanvasTexture(meadowCanvas);
    meadowTex.wrapS = THREE.RepeatWrapping;
    meadowTex.wrapT = THREE.RepeatWrapping;
    meadowTex.repeat.set(40, 55);
    this.meadowTexture = meadowTex;

    const meadowGeom = new THREE.PlaneGeometry(320, 440);
    meadowGeom.rotateX(-Math.PI / 2);

    const meadowMat = new THREE.MeshStandardMaterial({
      map: meadowTex,
      roughness: 0.82,
      metalness: 0.05
    });

    this.meadowMesh = new THREE.Mesh(meadowGeom, meadowMat);
    this.meadowMesh.position.set(0, 0, -120);
    this.meadowMesh.receiveShadow = true;
    groundGroup.add(this.meadowMesh);

    // 2. Central Flight Runway (22m wide x 440m deep)
    // Stylized path with vibrant checkerboard and golden accent border
    const runwayCanvas = document.createElement('canvas');
    runwayCanvas.width = 128;
    runwayCanvas.height = 128;
    const rctx = runwayCanvas.getContext('2d');

    // Lime/emerald green base
    rctx.fillStyle = '#78e08f';
    rctx.fillRect(0, 0, 128, 128);

    // Checker pattern
    rctx.fillStyle = '#38ada9';
    rctx.fillRect(0, 0, 64, 64);
    rctx.fillRect(64, 64, 64, 64);

    // Golden accent border
    rctx.strokeStyle = '#fad390';
    rctx.lineWidth = 6;
    rctx.strokeRect(0, 0, 128, 128);

    const runwayTex = new THREE.CanvasTexture(runwayCanvas);
    runwayTex.wrapS = THREE.RepeatWrapping;
    runwayTex.wrapT = THREE.RepeatWrapping;
    runwayTex.repeat.set(4, 110);
    this.runwayTexture = runwayTex;

    const runwayGeom = new THREE.PlaneGeometry(22, 440);
    runwayGeom.rotateX(-Math.PI / 2);

    const runwayMat = new THREE.MeshStandardMaterial({
      map: runwayTex,
      roughness: 0.72,
      metalness: 0.05,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });

    this.runwayMesh = new THREE.Mesh(runwayGeom, runwayMat);
    this.runwayMesh.position.set(0, 0.005, -120);
    this.runwayMesh.receiveShadow = true;
    groundGroup.add(this.runwayMesh);

    // 3. Golden Curbs along runway edges for crisp 3D definition
    const curbMat = new THREE.MeshStandardMaterial({
      color: 0xfad390,
      roughness: 0.4,
      metalness: 0.2
    });
    const curbGeom = new THREE.BoxGeometry(0.35, 0.06, 440);

    const leftCurb = new THREE.Mesh(curbGeom, curbMat);
    leftCurb.position.set(-11.0, 0.03, -120);
    leftCurb.receiveShadow = true;
    groundGroup.add(leftCurb);

    const rightCurb = new THREE.Mesh(curbGeom, curbMat);
    rightCurb.position.set(11.0, 0.03, -120);
    rightCurb.receiveShadow = true;
    groundGroup.add(rightCurb);

    this.scene.add(groundGroup);
    this.groundGroup = groundGroup;
  }

  createGrassTufts() {
    const loader = new THREE.TextureLoader();

    const tuft1Tex = loader.load(grassTuft1Url);
    tuft1Tex.magFilter = THREE.NearestFilter;
    tuft1Tex.minFilter = THREE.NearestFilter;
    tuft1Tex.colorSpace = THREE.SRGBColorSpace;

    const tuft2Tex = loader.load(grassTuft2Url);
    tuft2Tex.magFilter = THREE.NearestFilter;
    tuft2Tex.minFilter = THREE.NearestFilter;
    tuft2Tex.colorSpace = THREE.SRGBColorSpace;

    const tuftFlowerTex = loader.load(grassTuftFlowerUrl);
    tuftFlowerTex.magFilter = THREE.NearestFilter;
    tuftFlowerTex.minFilter = THREE.NearestFilter;
    tuftFlowerTex.colorSpace = THREE.SRGBColorSpace;

    const mat1 = new THREE.SpriteMaterial({ map: tuft1Tex, transparent: true, depthWrite: false });
    const mat2 = new THREE.SpriteMaterial({ map: tuft2Tex, transparent: true, depthWrite: false });
    const matFlower = new THREE.SpriteMaterial({ map: tuftFlowerTex, transparent: true, depthWrite: false });

    // 72 charming grass tuft sprites along the runway and meadows
    const tuftCount = 72;
    for (let i = 0; i < tuftCount; i++) {
      let mat;
      let aspect;
      const typeRand = Math.random();
      if (typeRand < 0.40) {
        mat = mat1.clone();
        aspect = 32 / 24;
      } else if (typeRand < 0.72) {
        mat = mat2.clone();
        aspect = 36 / 24;
      } else {
        mat = matFlower.clone();
        aspect = 32 / 24;
      }

      const sprite = new THREE.Sprite(mat);
      // Pivot at bottom center so the base sits directly on the ground plane (y = 0)
      sprite.center.set(0.5, 0.0);

      const baseScale = 0.65 + Math.random() * 0.45; // 0.65m to 1.1m width
      const flip = Math.random() > 0.5 ? 1 : -1;
      sprite.scale.set(baseScale * aspect * flip, baseScale, 1.0);

      // Distribute:
      // Zone 1 (30%): Runway borders (x ~ ±10.5 to ±12.5)
      // Zone 2 (35%): Clustered around pipe columns (x ~ ±1.8 to ±3.8)
      // Zone 3 (35%): Flanking meadows (x ~ ±13.5 to ±36.0)
      let x;
      const zoneRand = Math.random();
      const side = Math.random() > 0.5 ? 1 : -1;
      if (zoneRand < 0.30) {
        x = side * (10.5 + Math.random() * 2.2);
      } else if (zoneRand < 0.65) {
        x = side * (1.8 + Math.random() * 2.0);
      } else {
        x = side * (13.5 + Math.random() * 22.0);
      }

      const y = 0.01;
      const z = -4 - Math.random() * 160;

      sprite.position.set(x, y, z);
      sprite.userData = {
        baseY: y,
        phase: Math.random() * Math.PI * 2,
        swaySpeed: 1.8 + Math.random() * 1.5,
        swayAmp: 0.04 + Math.random() * 0.04,
        zoneRand,
        side
      };

      this.scene.add(sprite);
      this.grassTufts.push(sprite);
    }
  }

  createFloatingIslands() {
    const islandMatGrass = new THREE.MeshStandardMaterial({ color: 0x78e08f, roughness: 0.6 });
    const islandMatRock = new THREE.MeshStandardMaterial({ color: 0xb71540, roughness: 0.9 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xe58e26, roughness: 0.7 });
    const sailMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, side: THREE.DoubleSide });

    const spawnIsland = (x, y, z, scale = 1.0) => {
      const group = new THREE.Group();

      // Top grass plateau
      const topGeom = new THREE.CylinderGeometry(3.5 * scale, 3.8 * scale, 1.2 * scale, 8);
      const topMesh = new THREE.Mesh(topGeom, islandMatGrass);
      topMesh.castShadow = true;
      group.add(topMesh);

      // Inverted rocky cone underneath
      const rockGeom = new THREE.ConeGeometry(3.8 * scale, 5.5 * scale, 7);
      rockGeom.rotateX(Math.PI);
      const rockMesh = new THREE.Mesh(rockGeom, islandMatRock);
      rockMesh.position.y = -2.8 * scale;
      rockMesh.castShadow = true;
      group.add(rockMesh);

      // Windmill Tower
      const millGroup = new THREE.Group();
      const towerGeom = new THREE.CylinderGeometry(0.7 * scale, 0.9 * scale, 2.5 * scale, 6);
      const towerMesh = new THREE.Mesh(towerGeom, woodMat);
      towerMesh.position.y = 1.8 * scale;
      millGroup.add(towerMesh);

      const roofGeom = new THREE.ConeGeometry(1.0 * scale, 1.2 * scale, 6);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0xb71540 });
      const roofMesh = new THREE.Mesh(roofGeom, roofMat);
      roofMesh.position.y = 3.6 * scale;
      millGroup.add(roofMesh);

      // Spinning 4-blade propeller
      const bladeHub = new THREE.Group();
      bladeHub.position.set(0, 2.7 * scale, 0.8 * scale);

      for (let b = 0; b < 4; b++) {
        const bladeGeom = new THREE.BoxGeometry(0.25 * scale, 2.2 * scale, 0.05 * scale);
        const bladeMesh = new THREE.Mesh(bladeGeom, sailMat);
        bladeMesh.position.y = 1.1 * scale;
        const bladePivot = new THREE.Group();
        bladePivot.rotation.z = (b * Math.PI) / 2;
        bladePivot.add(bladeMesh);
        bladeHub.add(bladePivot);
      }
      millGroup.add(bladeHub);
      group.add(millGroup);

      // Tiny cartoon shrub
      const bushGeom = new THREE.SphereGeometry(0.6 * scale, 6, 6);
      const bushMesh = new THREE.Mesh(bushGeom, islandMatGrass);
      bushMesh.position.set(1.8 * scale, 0.8 * scale, 1.0 * scale);
      group.add(bushMesh);

      group.position.set(x, y, z);
      this.scene.add(group);

      this.islands.push({ group, bladeHub, initialZ: z, speed: 0.5 });
    };

    // Spawn 6 scenic islands drifting on the flanks
    spawnIsland(-26, 11, -35, 1.1);
    spawnIsland(28, 14, -65, 1.3);
    spawnIsland(-30, 16, -110, 1.4);
    spawnIsland(32, 9, -145, 1.0);
    spawnIsland(-25, 12, -180, 1.2);
    spawnIsland(27, 15, -220, 1.3);
  }

  createSmilingClouds() {
    const loader = new THREE.TextureLoader();

    const happyTex = loader.load(cloudHappyUrl);
    happyTex.magFilter = THREE.NearestFilter;
    happyTex.minFilter = THREE.NearestFilter;
    happyTex.colorSpace = THREE.SRGBColorSpace;

    const smileTex = loader.load(cloudSmileUrl);
    smileTex.magFilter = THREE.NearestFilter;
    smileTex.minFilter = THREE.NearestFilter;
    smileTex.colorSpace = THREE.SRGBColorSpace;

    const happyMat = new THREE.SpriteMaterial({
      map: happyTex,
      transparent: true,
      depthWrite: false
    });

    const smileMat = new THREE.SpriteMaterial({
      map: smileTex,
      transparent: true,
      depthWrite: false
    });

    // Create 32 charming smiling pixel-art cloud sprites
    const cloudCount = 32;
    for (let i = 0; i < cloudCount; i++) {
      const isHappy = (i % 2 === 0);
      const mat = isHappy ? happyMat.clone() : smileMat.clone();
      const sprite = new THREE.Sprite(mat);

      const aspect = isHappy ? 1.62 : 1.56;
      const isFar = (i % 3 === 0);
      const baseScale = isFar ? (6.0 + Math.random() * 3.5) : (3.0 + Math.random() * 2.6);
      const flip = (Math.random() > 0.4) ? 1 : -1;
      sprite.scale.set(baseScale * aspect * flip, baseScale, 1.0);

      // Flank distribution: frame the sky beautifully on both left and right flanks
      const side = (i % 2 === 0) ? -1 : 1;
      const x = side * (14 + Math.random() * (isFar ? 55 : 28));
      const y = (isFar ? 10.5 : 7.0) + Math.random() * (isFar ? 14.0 : 9.5);
      const z = -20 - Math.random() * 240;

      sprite.position.set(x, y, z);
      sprite.userData = {
        baseY: y,
        speed: (isFar ? 0.35 : 0.75) + Math.random() * 0.5,
        bobPhase: Math.random() * Math.PI * 2,
        bobSpeed: 1.0 + Math.random() * 1.4,
        bobAmp: 0.18 + Math.random() * 0.28,
        isFar,
        side
      };

      this.scene.add(sprite);
      this.clouds.push(sprite);
    }
  }

  createBackgroundBirds() {
    // Cute round cartoon birds fluttering in the sky (blue, orange, purple)
    const birdColors = [0x54a0ff, 0xff9f43, 0xa55eea];

    for (let i = 0; i < 4; i++) {
      const bird = new THREE.Group();
      const col = birdColors[i % birdColors.length];
      const bodyMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.4 });
      const beakMat = new THREE.MeshStandardMaterial({ color: 0xffa502 });
      const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });

      // Round chubby body
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), bodyMat);
      body.scale.set(1.1, 0.9, 1.3);
      bird.add(body);

      // Beak
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 4), beakMat);
      beak.rotation.x = Math.PI / 2;
      beak.position.set(0, 0, 0.45);
      bird.add(beak);

      // Wings
      const wingGeom = new THREE.ConeGeometry(0.18, 0.45, 3);
      wingGeom.rotateZ(Math.PI / 2);
      const leftWing = new THREE.Mesh(wingGeom, wingMat);
      leftWing.position.set(-0.35, 0.05, 0);
      const rightWing = new THREE.Mesh(wingGeom, wingMat);
      rightWing.position.set(0.35, 0.05, 0);
      rightWing.rotation.z = Math.PI;

      bird.add(leftWing);
      bird.add(rightWing);

      bird.position.set(
        (i % 2 === 0 ? -1 : 1) * (14 + Math.random() * 18),
        10 + Math.random() * 8,
        -40 - i * 35
      );

      this.scene.add(bird);
      this.bgBirds.push({ group: bird, leftWing, rightWing, phase: i * 1.5, speed: 2.2 });
    }
  }

  createSwirlingParticles() {
    // Swirling green ivy leaves & golden sparkles drifting past the player
    const leafCount = 45;
    const leafGeom = new THREE.BufferGeometry();
    const leafPositions = new Float32Array(leafCount * 3);
    const leafSizes = new Float32Array(leafCount);

    for (let i = 0; i < leafCount; i++) {
      leafPositions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      leafPositions[i * 3 + 1] = 1.5 + Math.random() * 11;
      leafPositions[i * 3 + 2] = -Math.random() * 45;
      leafSizes[i] = 0.22 + Math.random() * 0.15;
    }

    leafGeom.setAttribute('position', new THREE.BufferAttribute(leafPositions, 3));

    // Green leaf particle material
    const leafCanvas = document.createElement('canvas');
    leafCanvas.width = 64;
    leafCanvas.height = 64;
    const lctx = leafCanvas.getContext('2d');
    lctx.fillStyle = '#2ed573';
    lctx.beginPath();
    lctx.ellipse(32, 32, 24, 12, Math.PI / 4, 0, Math.PI * 2);
    lctx.fill();
    lctx.strokeStyle = '#26af5f';
    lctx.lineWidth = 3;
    lctx.stroke();

    const leafTex = new THREE.CanvasTexture(leafCanvas);
    const leafMat = new THREE.PointsMaterial({
      map: leafTex,
      size: 0.35,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });

    this.leafParticles = new THREE.Points(leafGeom, leafMat);
    this.scene.add(this.leafParticles);

    // Golden Sparkles
    const sparkleCount = 35;
    const sparkleGeom = new THREE.BufferGeometry();
    const sparklePos = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount; i++) {
      sparklePos[i * 3 + 0] = (Math.random() - 0.5) * 12;
      sparklePos[i * 3 + 1] = 2.0 + Math.random() * 10;
      sparklePos[i * 3 + 2] = -Math.random() * 35;
    }
    sparkleGeom.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));

    const sCanvas = document.createElement('canvas');
    sCanvas.width = 64;
    sCanvas.height = 64;
    const sctx = sCanvas.getContext('2d');
    sctx.fillStyle = '#ffa502';
    sctx.beginPath();
    sctx.arc(32, 32, 16, 0, Math.PI * 2);
    sctx.fill();
    sctx.fillStyle = '#ffffff';
    sctx.beginPath();
    sctx.arc(32, 32, 8, 0, Math.PI * 2);
    sctx.fill();

    const sTex = new THREE.CanvasTexture(sCanvas);
    const sparkleMat = new THREE.PointsMaterial({
      map: sTex,
      size: 0.28,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.sparkleParticles = new THREE.Points(sparkleGeom, sparkleMat);
    this.scene.add(this.sparkleParticles);
  }

  update(delta, playerZ) {
    this.elapsedTime += delta;

    // Sky dome stays centered around player
    if (this.skyDome) {
      this.skyDome.position.z = playerZ - 30;
      this.skyDome.position.x = 0;
    }

    // Gentle sun ray rotation
    if (this.sunRays) {
      this.sunRays.rotation.z += delta * 0.08;
      this.sunRays.position.z = playerZ - 170;
      if (this.sunMesh) this.sunMesh.position.z = playerZ - 172;
    }

    // Smooth continuous ground scrolling (zero snapping, zero popping)
    if (this.groundGroup) {
      this.groundGroup.position.z = playerZ;
    }
    if (this.runwayTexture) {
      this.runwayTexture.offset.y = (-playerZ / 4.0) % 1.0;
    }
    if (this.meadowTexture) {
      this.meadowTexture.offset.y = (-playerZ / 8.0) % 1.0;
    }

    // Animate grass tufts with gentle wind sway & recycle forward
    for (let i = 0; i < this.grassTufts.length; i++) {
      const tuft = this.grassTufts[i];
      if (tuft.material) {
        tuft.material.rotation = Math.sin(this.elapsedTime * tuft.userData.swaySpeed + tuft.userData.phase) * tuft.userData.swayAmp;
      }
      if (tuft.position.z > playerZ + 15) {
        tuft.position.z = playerZ - 140 - Math.random() * 35;
      }
    }

    // Rotate windmill blades on islands & recycle islands
    for (let i = 0; i < this.islands.length; i++) {
      const island = this.islands[i];
      if (island.bladeHub) {
        island.bladeHub.rotation.z += delta * 3.5;
      }
      if (island.group.position.z > playerZ + 25) {
        island.group.position.z = playerZ - 200 - Math.random() * 40;
      }
    }

    // Drift smiling clouds with gentle floating bob
    for (let i = 0; i < this.clouds.length; i++) {
      const cloud = this.clouds[i];
      cloud.position.z += cloud.userData.speed * delta;
      if (cloud.userData.bobPhase !== undefined) {
        cloud.userData.bobPhase += delta * cloud.userData.bobSpeed;
        cloud.position.y = cloud.userData.baseY + Math.sin(cloud.userData.bobPhase) * cloud.userData.bobAmp;
      }
      if (cloud.position.z > playerZ + 25) {
        const isFar = cloud.userData.isFar;
        const side = (Math.random() > 0.5) ? 1 : -1;
        cloud.position.z = playerZ - 200 - Math.random() * 60;
        cloud.position.x = side * (14 + Math.random() * (isFar ? 55 : 28));
      }
    }

    // Animate cute background birds
    for (let i = 0; i < this.bgBirds.length; i++) {
      const bird = this.bgBirds[i];
      bird.phase += delta * 9.0;
      const wingBend = Math.sin(bird.phase) * 0.65;
      bird.leftWing.rotation.z = wingBend;
      bird.rightWing.rotation.z = Math.PI - wingBend;
      bird.group.position.z -= bird.speed * delta;
      bird.group.position.y += Math.sin(bird.phase * 0.4) * 0.012;

      if (bird.group.position.z > playerZ + 15) {
        bird.group.position.z = playerZ - 150 - Math.random() * 30;
      }
    }

    // Swirling Leaf particles
    if (this.leafParticles) {
      const pos = this.leafParticles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length / 3; i++) {
        const idx = i * 3;
        // Subtle drift and spiral
        pos[idx + 0] += Math.sin(playerZ * 0.1 + i) * 0.02;
        pos[idx + 1] -= delta * 0.35; // gentle flutter down

        if (pos[idx + 2] > playerZ + 5) {
          pos[idx + 0] = (Math.random() - 0.5) * 14;
          pos[idx + 1] = 2.0 + Math.random() * 11;
          pos[idx + 2] = playerZ - 35 - Math.random() * 15;
        }
      }
      this.leafParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Sparkle particles
    if (this.sparkleParticles) {
      const pos = this.sparkleParticles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length / 3; i++) {
        const idx = i * 3;
        if (pos[idx + 2] > playerZ + 5) {
          pos[idx + 0] = (Math.random() - 0.5) * 12;
          pos[idx + 1] = 2.0 + Math.random() * 10;
          pos[idx + 2] = playerZ - 30 - Math.random() * 10;
        }
      }
      this.sparkleParticles.geometry.attributes.position.needsUpdate = true;
    }
  }
}
