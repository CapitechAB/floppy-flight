import * as THREE from 'three';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.clouds = [];
    this.islands = [];
    this.windmills = [];
    this.bgBirds = [];
    this.leafParticles = null;
    this.sparkleParticles = null;
    this.sunRays = null;

    this.createSkyDome();
    this.createSunAndLighting();
    this.createGround();
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

    const skyGeom = new THREE.SphereGeometry(220, 32, 24);
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

    // Cheerful stepped grass pattern with border trim
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Lime/emerald green base
    ctx.fillStyle = '#78e08f';
    ctx.fillRect(0, 0, 128, 128);

    // Checker pattern
    ctx.fillStyle = '#38ada9';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillRect(64, 64, 64, 64);

    // Golden accent border
    ctx.strokeStyle = '#fad390';
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 120);

    const groundGeom = new THREE.PlaneGeometry(40, 360);
    groundGeom.rotateX(-Math.PI / 2);

    const groundMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.75,
      metalness: 0.05
    });

    this.groundMesh = new THREE.Mesh(groundGeom, groundMat);
    this.groundMesh.position.set(0, 0, -100);
    this.groundMesh.receiveShadow = true;
    groundGroup.add(this.groundMesh);

    // Golden-brown soil base
    const soilGeom = new THREE.BoxGeometry(40, 12, 360);
    const soilMat = new THREE.MeshStandardMaterial({
      color: 0xe58e26,
      roughness: 0.9
    });
    const soilMesh = new THREE.Mesh(soilGeom, soilMat);
    soilMesh.position.set(0, -6, -100);
    groundGroup.add(soilMesh);

    this.scene.add(groundGroup);
    this.groundGroup = groundGroup;
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

  createSmilingFaceTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Eyes
    ctx.fillStyle = '#2c3e50';
    ctx.beginPath();
    ctx.arc(38, 52, 9, 0, Math.PI * 2);
    ctx.arc(90, 52, 9, 0, Math.PI * 2);
    ctx.fill();

    // Eye catchlights (sparkles in eyes)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(41, 49, 3.5, 0, Math.PI * 2);
    ctx.arc(93, 49, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Rosy pink blush cheeks
    ctx.fillStyle = 'rgba(255, 107, 129, 0.55)';
    ctx.beginPath();
    ctx.ellipse(30, 68, 11, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(98, 68, 11, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cheerful cute smile
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(64, 64, 18, 0.15 * Math.PI, 0.85 * Math.PI, false);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  createSmilingClouds() {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.0
    });

    const faceTexture = this.createSmilingFaceTexture();
    const faceMat = new THREE.MeshBasicMaterial({
      map: faceTexture,
      transparent: true,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < 20; i++) {
      const cloudGroup = new THREE.Group();
      const puffGeom = new THREE.SphereGeometry(1.2, 8, 8);
      puffGeom.scale(1.3, 0.85, 1.1);

      const puffCount = 4 + Math.floor(Math.random() * 3);
      for (let p = 0; p < puffCount; p++) {
        const puff = new THREE.Mesh(puffGeom, cloudMat);
        puff.position.set(
          (p - puffCount / 2) * 1.5,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.5
        );
        const s = 1.0 + Math.random() * 0.7;
        puff.scale.set(s, s * 0.85, s);
        cloudGroup.add(puff);
      }

      // Add cute smiling face on every 3rd cloud
      if (i % 3 === 0) {
        const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.6), faceMat);
        facePlane.position.set(0, 0, 1.25);
        cloudGroup.add(facePlane);
      }

      const x = (Math.random() - 0.5) * 75;
      const y = 8.5 + Math.random() * 15.0;
      const z = -Math.random() * 220;
      cloudGroup.position.set(x, y, z);
      cloudGroup.userData = { speed: 0.6 + Math.random() * 0.9 };

      this.scene.add(cloudGroup);
      this.clouds.push(cloudGroup);
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

    // Scroll ground seamlessly with player
    if (this.groundGroup) {
      this.groundGroup.position.z = Math.floor(playerZ / 10) * 10;
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

    // Drift smiling clouds
    for (let i = 0; i < this.clouds.length; i++) {
      const cloud = this.clouds[i];
      cloud.position.z += cloud.userData.speed * delta;
      if (cloud.position.z > playerZ + 20) {
        cloud.position.z = playerZ - 180 - Math.random() * 40;
        cloud.position.x = (Math.random() - 0.5) * 75;
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
