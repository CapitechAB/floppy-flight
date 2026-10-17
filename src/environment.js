import * as THREE from 'three';
import { createCloudGeometries, createCloudMaterial } from './cloudMesh.js';
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
    this.sideTrees = [];
    this.sideTerraces = [];
    this.innerTreelineSegments = [];
    this.outerTreelineSegments = [];
    this.vFlock = null;
    this.elapsedTime = 0;
    this.leafParticles = null;
    this.sparkleParticles = null;
    this.sunRays = null;
    this.sunLight = null;
    this.sunTarget = null;
    this.runwayTexture = null;
    this.meadowTexture = null;

    this.createSkyDome();
    this.createSunAndLighting();
    this.createGround();
    this.createSideForest();
    this.createSideTerraces();
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

    // Golden Sunlight with dynamic shadow tracking
    const sunLight = new THREE.DirectionalLight(0xfff1c5, 1.45);
    sunLight.position.set(12, 36, -75);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 1.0;
    sunLight.shadow.camera.far = 145;
    sunLight.shadow.camera.left = -35;
    sunLight.shadow.camera.right = 35;
    sunLight.shadow.camera.top = 48;
    sunLight.shadow.camera.bottom = -48;
    sunLight.shadow.bias = -0.0003;
    sunLight.shadow.normalBias = 0.035;

    const sunTarget = new THREE.Object3D();
    sunTarget.position.set(0, 4.0, -25);
    this.scene.add(sunTarget);
    sunLight.target = sunTarget;

    this.scene.add(sunLight);
    this.sunLight = sunLight;
    this.sunTarget = sunTarget;

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

  createTreelineTexture(isFar = false, variant = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, 512, 128);

    // Stepped pixel pine tree with wrapping
    function drawSteppedPine(cx, baseY, w, h, darkColor, midColor, lightColor, highlightColor) {
      const tiers = 3;
      for (let t = 0; t < tiers; t++) {
        const tierH = h * (0.38 - t * 0.05);
        const tierW = w * (1.0 - t * 0.28);
        const yTop = baseY - h + t * (h * 0.25);

        ctx.fillStyle = darkColor;
        const steps = 6;
        for (let s = 0; s <= steps; s++) {
          const frac = s / steps;
          const currY = yTop + frac * tierH;
          const halfW = (frac * tierW) / 2;
          ctx.fillRect(Math.round(cx - halfW), Math.round(currY), Math.round(halfW * 2), Math.round(tierH / steps) + 1);
        }

        ctx.fillStyle = midColor;
        for (let s = 1; s < steps; s++) {
          const frac = s / steps;
          const currY = yTop + frac * tierH;
          const halfW = (frac * tierW * 0.75) / 2;
          ctx.fillRect(Math.round(cx - halfW), Math.round(currY), Math.round(halfW * 2), Math.round(tierH / steps));
        }

        ctx.fillStyle = lightColor;
        for (let s = 1; s < steps - 1; s++) {
          const frac = s / steps;
          const currY = yTop + frac * tierH;
          const halfW = (frac * tierW * 0.45) / 2;
          ctx.fillRect(Math.round(cx - halfW + 2), Math.round(currY), Math.round(halfW * 2), Math.round(tierH / steps));
        }

        ctx.fillStyle = highlightColor;
        ctx.fillRect(Math.round(cx - 3), Math.round(yTop), 7, 3);
        ctx.fillRect(Math.round(cx + 1), Math.round(yTop + 3), 4, 3);
      }
    }

    // Stepped pixel round oak tree with wrapping
    function drawSteppedOak(cx, baseY, radius, darkColor, midColor, lightColor, highlightColor) {
      const subSpheres = [
        { ox: 0, oy: -radius * 0.8, r: radius * 0.9 },
        { ox: -radius * 0.5, oy: -radius * 0.5, r: radius * 0.7 },
        { ox: radius * 0.5, oy: -radius * 0.5, r: radius * 0.7 },
        { ox: 0, oy: -radius * 1.1, r: radius * 0.6 }
      ];

      ctx.fillStyle = darkColor;
      for (const s of subSpheres) {
        const x0 = cx + s.ox;
        const y0 = baseY + s.oy;
        const r = s.r;
        for (let dy = -r; dy <= r; dy += 4) {
          const halfW = Math.sqrt(Math.max(0, r * r - dy * dy));
          ctx.fillRect(Math.round(x0 - halfW), Math.round(y0 + dy), Math.round(halfW * 2), 5);
        }
      }

      ctx.fillStyle = midColor;
      for (const s of subSpheres) {
        const x0 = cx + s.ox + 1;
        const y0 = baseY + s.oy - 1;
        const r = s.r * 0.78;
        for (let dy = -r; dy <= r; dy += 4) {
          const halfW = Math.sqrt(Math.max(0, r * r - dy * dy));
          ctx.fillRect(Math.round(x0 - halfW), Math.round(y0 + dy), Math.round(halfW * 2), 5);
        }
      }

      ctx.fillStyle = lightColor;
      for (const s of subSpheres) {
        const x0 = cx + s.ox + 3;
        const y0 = baseY + s.oy - 4;
        const r = s.r * 0.5;
        for (let dy = -r; dy <= r; dy += 4) {
          const halfW = Math.sqrt(Math.max(0, r * r - dy * dy));
          ctx.fillRect(Math.round(x0 - halfW), Math.round(y0 + dy), Math.round(halfW * 2), 5);
        }
      }

      ctx.fillStyle = highlightColor;
      for (const s of subSpheres) {
        ctx.fillRect(Math.round(cx + s.ox - 2), Math.round(baseY + s.oy - s.r), 6, 3);
        ctx.fillRect(Math.round(cx + s.ox + 2), Math.round(baseY + s.oy - s.r + 3), 4, 3);
      }
    }

    // Wrap drawing across boundaries so texture tiles seamlessly
    const wrapPine = (cx, baseY, w, h, d, m, l, hl) => {
      drawSteppedPine(cx, baseY, w, h, d, m, l, hl);
      if (cx - w / 2 < 0) drawSteppedPine(cx + 512, baseY, w, h, d, m, l, hl);
      if (cx + w / 2 > 512) drawSteppedPine(cx - 512, baseY, w, h, d, m, l, hl);
    };

    const wrapOak = (cx, baseY, r, d, m, l, hl) => {
      drawSteppedOak(cx, baseY, r, d, m, l, hl);
      if (cx - r < 0) drawSteppedOak(cx + 512, baseY, r, d, m, l, hl);
      if (cx + r > 512) drawSteppedOak(cx - 512, baseY, r, d, m, l, hl);
    };

    if (isFar) {
      // Distant ridge
      for (let x = 0; x < 512; x += 36) {
        if ((x % 72) === 0) {
          wrapPine(x, 128, 40, 58, '#244c35', '#2f6043', '#3f7c57', '#7dc495');
        } else {
          wrapOak(x, 128, 28, '#244c35', '#2f6043', '#3f7c57', '#7dc495');
        }
      }
      for (let x = 18; x < 512; x += 44) {
        if ((x % 88) === 0) {
          wrapPine(x, 128, 46, 72, '#1a3f2d', '#23523c', '#2c6d4f', '#96dbae');
        } else {
          wrapOak(x, 128, 32, '#1a3f2d', '#23523c', '#2c6d4f', '#96dbae');
        }
      }
      ctx.fillStyle = '#122e20';
      ctx.fillRect(0, 105, 512, 23);
    } else {
      // Foreground lush ridge with golden sunrise highlights
      const offset = variant * 28;
      for (let x = offset % 40; x < 512 + (offset % 40); x += 40) {
        wrapOak(x % 512, 128, 26, '#264e36', '#316645', '#45855c', '#89d4a3');
      }
      for (let x = (14 + offset) % 48; x < 512 + ((14 + offset) % 48); x += 48) {
        if (((x + variant * 12) % 96) < 48) {
          wrapPine(x % 512, 128, 48, 76, '#1b4332', '#245942', '#2d7a56', '#a3e6be');
        } else {
          wrapOak(x % 512, 128, 32, '#1b4332', '#245942', '#2d7a56', '#a3e6be');
        }
      }
      for (let x = (26 + offset) % 56; x < 512 + ((26 + offset) % 56); x += 56) {
        if (((x + variant * 20) % 112) < 56) {
          wrapPine(x % 512, 128, 52, 90, '#133624', '#1c4a32', '#246342', '#ffd32a');
        } else {
          wrapOak(x % 512, 128, 38, '#133624', '#1c4a32', '#246342', '#ffd32a');
        }
      }
      ctx.fillStyle = '#133624';
      ctx.fillRect(0, 105, 512, 23);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.repeat.set(1, 1);
    return tex;
  }

  createSideForest() {
    // 1. Layered Pixel-Art Treeline Billboard Segments (anchored in world coordinates!)
    const nearTexA = this.createTreelineTexture(false, 0);
    const nearTexB = this.createTreelineTexture(false, 1);
    const farTex = this.createTreelineTexture(true, 0);

    const nearMatA = new THREE.MeshBasicMaterial({
      map: nearTexA,
      transparent: true,
      alphaTest: 0.15,
      side: THREE.DoubleSide
    });

    const nearMatB = new THREE.MeshBasicMaterial({
      map: nearTexB,
      transparent: true,
      alphaTest: 0.15,
      side: THREE.DoubleSide
    });

    const farMat = new THREE.MeshBasicMaterial({
      map: farTex,
      transparent: true,
      alphaTest: 0.15,
      side: THREE.DoubleSide
    });

    this.innerTreelineSegments = [];
    this.outerTreelineSegments = [];

    // Inner treeline segments (X = ±26m, 7.5m tall sitting at ground level Y = 3.75m)
    // 8 segments of 48m each = 384m continuous wall on left and right
    const innerSegLength = 48.0;
    const innerSegHeight = 7.5;
    const innerSegGeom = new THREE.PlaneGeometry(innerSegLength, innerSegHeight);
    const numInnerSegs = 8;

    for (let i = 0; i < numInnerSegs; i++) {
      const z = 24.0 - (i * innerSegLength);
      const mat = (i % 2 === 0) ? nearMatA : nearMatB;

      // Left inner segment
      const leftSeg = new THREE.Mesh(innerSegGeom, mat);
      leftSeg.position.set(-26.0, innerSegHeight / 2, z);
      leftSeg.rotation.y = Math.PI / 2 + 0.03;
      this.scene.add(leftSeg);
      this.innerTreelineSegments.push(leftSeg);

      // Right inner segment
      const rightSeg = new THREE.Mesh(innerSegGeom, mat);
      rightSeg.position.set(26.0, innerSegHeight / 2, z);
      rightSeg.rotation.y = -Math.PI / 2 - 0.03;
      this.scene.add(rightSeg);
      this.innerTreelineSegments.push(rightSeg);
    }

    // Outer treeline segments (X = ±46m, 11.5m tall sitting at ground level Y = 5.75m)
    // 7 segments of 60m each = 420m continuous wall on left and right
    const outerSegLength = 60.0;
    const outerSegHeight = 11.5;
    const outerSegGeom = new THREE.PlaneGeometry(outerSegLength, outerSegHeight);
    const numOuterSegs = 7;

    for (let i = 0; i < numOuterSegs; i++) {
      const z = 30.0 - (i * outerSegLength);

      // Left outer segment
      const leftOuter = new THREE.Mesh(outerSegGeom, farMat);
      leftOuter.position.set(-46.0, outerSegHeight / 2, z);
      leftOuter.rotation.y = Math.PI / 2 + 0.02;
      this.scene.add(leftOuter);
      this.outerTreelineSegments.push(leftOuter);

      // Right outer segment
      const rightOuter = new THREE.Mesh(outerSegGeom, farMat);
      rightOuter.position.set(46.0, outerSegHeight / 2, z);
      rightOuter.rotation.y = -Math.PI / 2 - 0.02;
      this.scene.add(rightOuter);
      this.outerTreelineSegments.push(rightOuter);
    }

    // 2. Procedural 3D Cartoon Trees (Foreground & Midground with real stereo volume & shadows)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x784e2d, roughness: 0.8 });
    const pineColors = [0x1e824c, 0x27ae60, 0x2ecc71];
    const oakMats = [
      new THREE.MeshStandardMaterial({ color: 0x4cd137, roughness: 0.35 }),
      new THREE.MeshStandardMaterial({ color: 0x44bd32, roughness: 0.35 }),
      new THREE.MeshStandardMaterial({ color: 0x7bed9f, roughness: 0.35 })
    ];

    const spawnTree = (type, x, z, scale = 1.0) => {
      const tree = new THREE.Group();

      if (type === 'pine') {
        const trunkGeom = new THREE.CylinderGeometry(0.22 * scale, 0.32 * scale, 1.2 * scale, 6);
        const trunk = new THREE.Mesh(trunkGeom, trunkMat);
        trunk.position.y = 0.6 * scale;
        trunk.castShadow = true;
        tree.add(trunk);

        // 3 stepped conical pine tiers
        for (let c = 0; c < 3; c++) {
          const coneGeom = new THREE.ConeGeometry((1.5 - c * 0.3) * scale, (1.6 - c * 0.22) * scale, 7);
          const coneMat = new THREE.MeshStandardMaterial({ color: pineColors[c], roughness: 0.4 });
          const cone = new THREE.Mesh(coneGeom, coneMat);
          cone.position.y = (1.5 + c * 0.95) * scale;
          cone.castShadow = true;
          cone.receiveShadow = true;
          tree.add(cone);
        }
      } else {
        // Round fluffy oak tree
        const trunkGeom = new THREE.CylinderGeometry(0.28 * scale, 0.42 * scale, 1.8 * scale, 6);
        const trunk = new THREE.Mesh(trunkGeom, trunkMat);
        trunk.position.y = 0.9 * scale;
        trunk.castShadow = true;
        tree.add(trunk);

        const c1 = new THREE.Mesh(new THREE.SphereGeometry(1.25 * scale, 7, 7), oakMats[0]);
        c1.position.y = 2.4 * scale;
        c1.scale.set(1.2, 0.95, 1.1);
        c1.castShadow = true;
        tree.add(c1);

        const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.95 * scale, 6, 6), oakMats[1]);
        c2.position.set(0.6 * scale, 2.7 * scale, 0.4 * scale);
        c2.castShadow = true;
        tree.add(c2);

        const c3 = new THREE.Mesh(new THREE.SphereGeometry(0.75 * scale, 6, 6), oakMats[2]);
        c3.position.set(-0.5 * scale, 2.8 * scale, -0.3 * scale);
        c3.castShadow = true;
        tree.add(c3);
      }

      tree.position.set(x, 0, z);
      this.scene.add(tree);
      this.sideTrees.push({ group: tree, x, initialZ: z });
    };

    // Spawn 64 trees along both sides
    const treeCount = 64;
    for (let i = 0; i < treeCount; i++) {
      const side = (i % 2 === 0) ? -1 : 1;
      const type = (i % 3 === 0) ? 'oak' : 'pine';
      const x = side * (13.5 + (i % 5) * 2.5 + Math.random() * 2.0);
      const z = 8 - (i * 3.8) + (Math.random() - 0.5) * 3.0;
      const scale = 0.95 + Math.random() * 0.55;
      spawnTree(type, x, z, scale);
    }
  }

  createSideTerraces() {
    // Generate diagonal green-and-lime striped curb texture matching the reference image!
    const curbCanvas = document.createElement('canvas');
    curbCanvas.width = 64;
    curbCanvas.height = 64;
    const cctx = curbCanvas.getContext('2d');
    cctx.fillStyle = '#78e08f';
    cctx.fillRect(0, 0, 64, 64);
    cctx.fillStyle = '#2ecc71';
    cctx.beginPath();
    cctx.moveTo(0, 0); cctx.lineTo(32, 0); cctx.lineTo(0, 32); cctx.fill();
    cctx.beginPath();
    cctx.moveTo(32, 0); cctx.lineTo(64, 0); cctx.lineTo(0, 64); cctx.fill();
    cctx.beginPath();
    cctx.moveTo(64, 32); cctx.lineTo(64, 64); cctx.lineTo(32, 64); cctx.fill();

    const curbTex = new THREE.CanvasTexture(curbCanvas);
    curbTex.wrapS = THREE.RepeatWrapping;
    curbTex.wrapT = THREE.RepeatWrapping;
    curbTex.repeat.set(1, 10);

    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x8c532b,
      roughness: 0.9,
      metalness: 0.05
    });

    const grassPlateauMat = new THREE.MeshStandardMaterial({
      color: 0x68d374,
      roughness: 0.65
    });

    const curbMat = new THREE.MeshStandardMaterial({
      map: curbTex,
      roughness: 0.4
    });

    const spawnTerrace = (x, z, width = 7.0, height = 1.9, length = 18.0) => {
      const group = new THREE.Group();

      // Earth body
      const bodyGeom = new THREE.BoxGeometry(width, height, length);
      const body = new THREE.Mesh(bodyGeom, earthMat);
      body.position.y = height / 2;
      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);

      // Grass top
      const topGeom = new THREE.BoxGeometry(width + 0.1, 0.12, length + 0.1);
      const top = new THREE.Mesh(topGeom, grassPlateauMat);
      top.position.y = height + 0.06;
      top.receiveShadow = true;
      group.add(top);

      // Striped curb along the inner edge facing the runway
      const curbGeom = new THREE.BoxGeometry(0.35, 0.22, length + 0.1);
      const curb = new THREE.Mesh(curbGeom, curbMat);
      const innerX = (x > 0) ? (-width / 2) : (width / 2);
      curb.position.set(innerX, height + 0.1, 0);
      curb.receiveShadow = true;
      group.add(curb);

      group.position.set(x, 0, z);
      this.scene.add(group);
      this.sideTerraces.push({ group, x, initialZ: z });
    };

    // Spawn 6 prominent raised ledges along the flanks
    spawnTerrace(17.5, -25, 6.5, 1.8, 18);
    spawnTerrace(-18.0, -60, 7.0, 2.0, 20);
    spawnTerrace(18.5, -100, 6.5, 1.9, 18);
    spawnTerrace(-18.5, -140, 7.0, 2.1, 20);
    spawnTerrace(19.0, -180, 6.5, 1.9, 18);
    spawnTerrace(-18.0, -220, 7.0, 2.0, 20);
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
    const geometries = createCloudGeometries();
    const material = createCloudMaterial();

    // Flank clouds reduced by 20% (from 32 to 26): far ones larger and slower.
    const cloudCount = 26;
    for (let i = 0; i < cloudCount; i++) {
      const isFar = (i % 3 === 0);
      const baseScale = isFar ? (6.0 + Math.random() * 3.5) : (3.0 + Math.random() * 2.6);
      const cloud = new THREE.Mesh(geometries[i % geometries.length], material);
      cloud.scale.setScalar(baseScale);
      cloud.castShadow = false;
      cloud.receiveShadow = false;

      const side = (i % 2 === 0) ? -1 : 1;
      const x = side * (14 + Math.random() * (isFar ? 55 : 28));
      const y = (isFar ? 10.5 : 7.0) + Math.random() * (isFar ? 14.0 : 9.5);
      const z = -20 - Math.random() * 240;

      cloud.position.set(x, y, z);
      // Local +Z is the face. Orient it to face the player!
      const dx = 0 - x;
      const dz = 0 - z;
      cloud.rotation.y = Math.atan2(dx, dz);
      cloud.userData = {
        baseY: y,
        speed: (isFar ? 0.35 : 0.75) + Math.random() * 0.5,
        bobPhase: Math.random() * Math.PI * 2,
        bobSpeed: 1.0 + Math.random() * 1.4,
        bobAmp: 0.18 + Math.random() * 0.28,
        isFar,
        side
      };

      this.scene.add(cloud);
      this.clouds.push(cloud);
    }
  }

  createBackgroundBirds() {
    this.bgBirds = [];

    // Helper to create a cute inspiration bird
    const createBirdModel = (config) => {
      const bird = new THREE.Group();

      const bodyMat = new THREE.MeshStandardMaterial({ color: config.bodyColor, roughness: 0.35 });
      const bellyMat = new THREE.MeshStandardMaterial({ color: config.bellyColor || 0xffffff, roughness: 0.4 });
      const beakMat = new THREE.MeshStandardMaterial({ color: config.beakColor || 0xffa502, roughness: 0.3 });
      const eyeMatWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const eyeMatPupil = new THREE.MeshBasicMaterial({ color: 0x1e272e });
      const wingMat = new THREE.MeshStandardMaterial({ color: config.wingColor || 0xffffff, side: THREE.DoubleSide, roughness: 0.35 });

      // 1. Chubby round body
      const scale = config.scale || 1.0;
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.40 * scale, 12, 10), bodyMat);
      body.scale.set(1.15, 0.95, 1.25);
      body.castShadow = true;
      bird.add(body);

      // 2. Belly patch on underside/front
      const belly = new THREE.Mesh(new THREE.SphereGeometry(0.36 * scale, 10, 8), bellyMat);
      belly.position.set(0, -0.06 * scale, 0.12 * scale);
      belly.scale.set(0.9, 0.85, 1.05);
      bird.add(belly);

      // 3. Big cute expressive cartoon eyes!
      const eyeGeom = new THREE.SphereGeometry(0.12 * scale, 8, 8);
      const pupilGeom = new THREE.SphereGeometry(0.065 * scale, 6, 6);
      const shineGeom = new THREE.SphereGeometry(0.025 * scale, 4, 4);

      // Left eye
      const leftEye = new THREE.Mesh(eyeGeom, eyeMatWhite);
      leftEye.position.set(-0.16 * scale, 0.12 * scale, 0.30 * scale);
      const leftPupil = new THREE.Mesh(pupilGeom, eyeMatPupil);
      leftPupil.position.set(-0.17 * scale, 0.13 * scale, 0.40 * scale);
      const leftShine = new THREE.Mesh(shineGeom, eyeMatWhite);
      leftShine.position.set(-0.15 * scale, 0.15 * scale, 0.45 * scale);
      bird.add(leftEye);
      bird.add(leftPupil);
      bird.add(leftShine);

      // Right eye
      const rightEye = new THREE.Mesh(eyeGeom, eyeMatWhite);
      rightEye.position.set(0.16 * scale, 0.12 * scale, 0.30 * scale);
      const rightPupil = new THREE.Mesh(pupilGeom, eyeMatPupil);
      rightPupil.position.set(0.17 * scale, 0.13 * scale, 0.40 * scale);
      const rightShine = new THREE.Mesh(shineGeom, eyeMatWhite);
      rightShine.position.set(0.15 * scale, 0.15 * scale, 0.45 * scale);
      bird.add(rightEye);
      bird.add(rightPupil);
      bird.add(rightShine);

      // 4. Beak cone
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.12 * scale, 0.30 * scale, 4), beakMat);
      beak.rotation.x = Math.PI / 2;
      beak.position.set(0, -0.02 * scale, 0.52 * scale);
      bird.add(beak);

      // 5. Wings (animated flapping)
      const wingGeom = new THREE.PlaneGeometry(0.55 * scale, 0.35 * scale);
      wingGeom.translate(0.28 * scale, 0, 0);

      const leftWingGroup = new THREE.Group();
      leftWingGroup.position.set(-0.40 * scale, 0.05 * scale, 0);
      const leftWingMesh = new THREE.Mesh(wingGeom, wingMat);
      leftWingMesh.rotation.y = Math.PI;
      leftWingGroup.add(leftWingMesh);
      bird.add(leftWingGroup);

      const rightWingGroup = new THREE.Group();
      rightWingGroup.position.set(0.40 * scale, 0.05 * scale, 0);
      const rightWingMesh = new THREE.Mesh(wingGeom, wingMat);
      rightWingGroup.add(rightWingMesh);
      bird.add(rightWingGroup);

      bird.position.set(config.x, config.y, config.z);
      this.scene.add(bird);

      return {
        group: bird,
        leftWing: leftWingGroup,
        rightWing: rightWingGroup,
        phase: config.phase || 0,
        speed: config.speed || 1.8,
        initialX: config.x,
        initialY: config.y
      };
    };

    // 1. Classic Blue Flappy Bird on Left Flank (from inspiration art!)
    this.bgBirds.push(createBirdModel({
      bodyColor: 0x0abde3,
      bellyColor: 0xffffff,
      wingColor: 0xffffff,
      beakColor: 0xffa502,
      x: -14.5,
      y: 9.5,
      z: -30,
      scale: 1.15,
      phase: 0.0,
      speed: 2.1
    }));

    // 2. Chubby Coral-Orange Bird on Right Flank
    this.bgBirds.push(createBirdModel({
      bodyColor: 0xff6b6b,
      bellyColor: 0xfeca57,
      wingColor: 0xffffff,
      beakColor: 0xff9f43,
      x: 14.8,
      y: 8.8,
      z: -48,
      scale: 1.1,
      phase: 1.4,
      speed: 2.3
    }));

    // 3. Purple Soaring Bird High on Right
    this.bgBirds.push(createBirdModel({
      bodyColor: 0x9b59b6,
      bellyColor: 0xe056fd,
      wingColor: 0xffffff,
      beakColor: 0xf1c40f,
      x: 21.0,
      y: 14.8,
      z: -36,
      scale: 1.05,
      phase: 2.8,
      speed: 1.9
    }));

    // 4. Terracotta Brown Bird Cruising on Left
    this.bgBirds.push(createBirdModel({
      bodyColor: 0xcd6133,
      bellyColor: 0xf7d794,
      wingColor: 0xffffff,
      beakColor: 0xe67e22,
      x: -19.5,
      y: 12.5,
      z: -70,
      scale: 1.0,
      phase: 4.2,
      speed: 2.0
    }));

    // 5. Slate-Blue Songbird on Right
    this.bgBirds.push(createBirdModel({
      bodyColor: 0x4b7bec,
      bellyColor: 0xfff200,
      wingColor: 0xffffff,
      beakColor: 0xff9f43,
      x: 18.5,
      y: 11.2,
      z: -95,
      scale: 0.95,
      phase: 5.1,
      speed: 2.2
    }));

    // 6. Distant V-Formation Bird Flock Soaring Across Horizon Sunburst
    const flockGroup = new THREE.Group();
    const vBirdMat = new THREE.MeshBasicMaterial({ color: 0x2c3e50, side: THREE.DoubleSide });
    const vWingGeom = new THREE.PlaneGeometry(0.65, 0.22);

    for (let f = 0; f < 7; f++) {
      const vBird = new THREE.Group();
      const leftW = new THREE.Mesh(vWingGeom, vBirdMat);
      leftW.position.set(-0.30, 0, 0);
      leftW.rotation.z = 0.35;
      const rightW = new THREE.Mesh(vWingGeom, vBirdMat);
      rightW.position.set(0.30, 0, 0);
      rightW.rotation.z = -0.35;
      vBird.add(leftW);
      vBird.add(rightW);

      const row = Math.abs(f - 3);
      vBird.position.set((f - 3) * 3.2, -row * 1.4, row * 2.5);
      flockGroup.add(vBird);
    }

    flockGroup.position.set(12, 19, -155);
    this.scene.add(flockGroup);
    this.vFlock = flockGroup;
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

  update(delta, playerZ, playerY = 5.0) {
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

    // Dynamic directional sunlight and shadow tracking
    // Frustum travels forward in lockstep with playerZ, ensuring all upcoming pipes,
    // trees, avatar, and obstacles cast crisp, complete shadows forever into the run.
    if (this.sunLight && this.sunTarget) {
      const targetZ = playerZ - 25;
      this.sunTarget.position.set(0, 4.0, targetZ);
      this.sunLight.position.set(12, 36, targetZ - 50);
      this.sunTarget.updateMatrixWorld();
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

    // Drift smiling clouds with gentle floating bob & face the player!
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
        cloud.userData.side = side;
        cloud.position.z = playerZ - 200 - Math.random() * 60;
        cloud.position.x = side * (14 + Math.random() * (isFar ? 55 : 28));
      }

      // Orient happy face (local +Z) to look directly at the player!
      const dx = 0 - cloud.position.x;
      const dz = playerZ - cloud.position.z;
      cloud.rotation.y = Math.atan2(dx, dz);

      // Subtle gentle gaze towards player altitude without distorting the flat bottom
      const distXZ = Math.hypot(dx, dz);
      if (distXZ > 0.1) {
        const dy = playerY - cloud.position.y;
        cloud.rotation.x = THREE.MathUtils.clamp(Math.atan2(dy, distXZ) * 0.45, -0.15, 0.12);
      }
    }

    // Animate and recycle 3D side trees (fixed in world coordinates, recycling seamlessly when passed)
    for (let i = 0; i < this.sideTrees.length; i++) {
      const tree = this.sideTrees[i];
      if (tree.group.position.z > playerZ + 25) {
        tree.group.position.z = playerZ - 230 - Math.random() * 25;
      }
    }

    // Animate and recycle side terraces
    for (let i = 0; i < this.sideTerraces.length; i++) {
      const terrace = this.sideTerraces[i];
      if (terrace.group.position.z > playerZ + 30) {
        terrace.group.position.z = playerZ - 230 - Math.random() * 25;
      }
    }

    // Treeline billboard planes stay at fixed world Z positions!
    // As player flies forward along -Z, the segments stay anchored in space, so the trees physically rush past the player!
    const innerRecycleZ = playerZ + 48.0;
    const innerTotalSpan = 8 * 48.0; // 384m
    for (let i = 0; i < this.innerTreelineSegments.length; i++) {
      const seg = this.innerTreelineSegments[i];
      if (seg.position.z > innerRecycleZ) {
        seg.position.z -= innerTotalSpan;
      }
    }

    const outerRecycleZ = playerZ + 60.0;
    const outerTotalSpan = 7 * 60.0; // 420m
    for (let i = 0; i < this.outerTreelineSegments.length; i++) {
      const seg = this.outerTreelineSegments[i];
      if (seg.position.z > outerRecycleZ) {
        seg.position.z -= outerTotalSpan;
      }
    }

    // Animate cute inspiration background birds (flapping wings & flying past in world space)
    for (let i = 0; i < this.bgBirds.length; i++) {
      const bird = this.bgBirds[i];
      bird.phase += delta * 11.0;
      const wingAngle = Math.sin(bird.phase) * 0.70;
      if (bird.leftWing) bird.leftWing.rotation.z = wingAngle;
      if (bird.rightWing) bird.rightWing.rotation.z = -wingAngle;

      bird.group.position.z -= bird.speed * delta;
      bird.group.position.y = bird.initialY + Math.sin(bird.phase * 0.35) * 0.4;
      bird.group.position.x = bird.initialX + Math.cos(bird.phase * 0.25) * 0.5;

      if (bird.group.position.z > playerZ + 25) {
        bird.group.position.z = playerZ - 150 - Math.random() * 40;
      }
    }

    // Distant V-Flock soaring across horizon
    if (this.vFlock) {
      this.vFlock.position.z = playerZ - 155;
      this.vFlock.position.x = 12 + Math.sin(this.elapsedTime * 0.35) * 6.0;
      this.vFlock.position.y = 19 + Math.cos(this.elapsedTime * 0.5) * 0.6;
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
