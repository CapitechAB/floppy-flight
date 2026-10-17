import * as THREE from 'three';

export class PipeManager {
  constructor(scene) {
    this.scene = scene;
    this.pipes = [];
    this.pipePoolSize = 10;
    this.spacingZ = 20; // Distance between pipe pairs in meters
    this.gapHeight = 3.9; // Vertical gap
    this.pipeRadius = 1.15; // Body radius
    this.lipRadius = 1.42; // Lip radius
    this.lipHeight = 0.6;

    // Rich cartoon materials matching the vibrant reference image
    this.pipeMat = new THREE.MeshStandardMaterial({
      color: 0x4cd137, // Bright Nintendo/Floppy green
      roughness: 0.28,
      metalness: 0.08
    });

    this.lipMat = new THREE.MeshStandardMaterial({
      color: 0x44bd32,
      roughness: 0.25,
      metalness: 0.1
    });

    this.lipTrimMat = new THREE.MeshStandardMaterial({
      color: 0x27ae60,
      roughness: 0.3
    });

    this.vineMat = new THREE.MeshStandardMaterial({
      color: 0x1b8a36,
      roughness: 0.5,
      metalness: 0.05
    });

    this.leafMat = new THREE.MeshStandardMaterial({
      color: 0x2ed573,
      roughness: 0.35,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    this.ringMat = new THREE.MeshStandardMaterial({
      color: 0xffa502,
      roughness: 0.18,
      metalness: 0.8,
      emissive: 0xffa502,
      emissiveIntensity: 0.4
    });

    this.starMat = new THREE.MeshStandardMaterial({
      color: 0xfff200,
      roughness: 0.15,
      metalness: 0.6,
      emissive: 0xfff200,
      emissiveIntensity: 0.6
    });

    this.initPool();
  }

  setTheme(theme = 'meadow') {
    if (theme === 'jungle') {
      // Exotic Jungle theme: ancient mossy jade stone pipes, creeping woody lianas, tropical broadleaves, and Aztec golden sun disks!
      this.pipeMat.color.setHex(0x166534); // Deep mossy jungle jade
      this.pipeMat.roughness = 0.42;
      this.pipeMat.metalness = 0.04;

      this.lipMat.color.setHex(0x14532d); // Dark rainforest rim
      this.lipMat.roughness = 0.38;

      this.lipTrimMat.color.setHex(0x052e16); // Deep shadowed interior

      this.vineMat.color.setHex(0x713f12); // Tropical woody liana vine
      this.vineMat.roughness = 0.7;

      this.leafMat.color.setHex(0x10ac84); // Lush broadleaf tropical green
      this.leafMat.roughness = 0.4;

      this.ringMat.color.setHex(0xf39c12); // Ancient Aztec golden relic
      this.ringMat.emissive.setHex(0xd35400);
      this.ringMat.emissiveIntensity = 0.5;

      this.starMat.color.setHex(0xf1c40f); // Bright golden sun jewel
      this.starMat.emissive.setHex(0xf39c12);
    } else {
      // Meadow (Level 1) classic Nintendo/Floppy style
      this.pipeMat.color.setHex(0x4cd137);
      this.pipeMat.roughness = 0.28;
      this.pipeMat.metalness = 0.08;

      this.lipMat.color.setHex(0x44bd32);
      this.lipMat.roughness = 0.25;

      this.lipTrimMat.color.setHex(0x27ae60);
      this.lipTrimMat.roughness = 0.3;

      this.vineMat.color.setHex(0x1b8a36);
      this.vineMat.roughness = 0.5;

      this.leafMat.color.setHex(0x2ed573);
      this.leafMat.roughness = 0.35;

      this.ringMat.color.setHex(0xffa502);
      this.ringMat.emissive.setHex(0xffa502);
      this.ringMat.emissiveIntensity = 0.4;

      this.starMat.color.setHex(0xfff200);
      this.starMat.emissive.setHex(0xfff200);
    }
  }

  createVines(isTop, totalHeight) {
    const vineGroup = new THREE.Group();

    // Spiral curve winding around cylinder surface
    const points = [];
    const turns = 2.8;
    const steps = 36;
    const r = this.pipeRadius + 0.035;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const angle = t * turns * Math.PI * 2;
      const y = isTop ? (t * 12 + 0.6) : (-t * 12 - 0.6);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeom = new THREE.TubeGeometry(curve, 32, 0.045, 6, false);
    const tubeMesh = new THREE.Mesh(tubeGeom, this.vineMat);
    tubeMesh.castShadow = true;
    vineGroup.add(tubeMesh);

    // Leaves branching along the vine spiral
    const leafGeom = new THREE.ConeGeometry(0.16, 0.42, 3);
    leafGeom.scale(1.4, 0.25, 1.0);

    for (let i = 2; i < points.length - 2; i += 3) {
      const pt = points[i];
      const leafMesh = new THREE.Mesh(leafGeom, this.leafMat);
      leafMesh.position.copy(pt);

      // Orient leaf pointing outwards and slightly tilted
      leafMesh.lookAt(pt.x * 2, pt.y + 0.15, pt.z * 2);
      leafMesh.rotation.z += (Math.random() - 0.5) * 0.8;
      leafMesh.castShadow = true;
      vineGroup.add(leafMesh);
    }

    return vineGroup;
  }

  createSinglePipe(isTop, totalHeight) {
    const group = new THREE.Group();

    // Main pipe body
    const bodyGeom = new THREE.CylinderGeometry(this.pipeRadius, this.pipeRadius, totalHeight, 28);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.pipeMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;

    // Pipe rim / lip
    const lipGeom = new THREE.CylinderGeometry(this.lipRadius, this.lipRadius, this.lipHeight, 28);
    const lipMesh = new THREE.Mesh(lipGeom, this.lipMat);
    lipMesh.castShadow = true;
    lipMesh.receiveShadow = true;

    // Darker inside rim cavity
    const innerLipGeom = new THREE.CylinderGeometry(this.pipeRadius * 0.96, this.pipeRadius * 0.96, 0.05, 24);
    const innerLipMesh = new THREE.Mesh(innerLipGeom, this.lipTrimMat);

    if (isTop) {
      bodyMesh.position.y = totalHeight / 2;
      lipMesh.position.y = this.lipHeight / 2;
      innerLipMesh.position.y = 0.02;
    } else {
      bodyMesh.position.y = -totalHeight / 2;
      lipMesh.position.y = -this.lipHeight / 2;
      innerLipMesh.position.y = -0.02;
    }

    group.add(bodyMesh);
    group.add(lipMesh);
    group.add(innerLipMesh);

    // Add wrapping ivy vines & leaves!
    const vines = this.createVines(isTop, totalHeight);
    group.add(vines);

    return group;
  }

  createRing() {
    const ringGroup = new THREE.Group();

    // Torus golden ring
    const ringGeom = new THREE.TorusGeometry(0.85, 0.09, 14, 32);
    const ringMesh = new THREE.Mesh(ringGeom, this.ringMat);
    ringMesh.castShadow = true;
    ringGroup.add(ringMesh);

    // Star in the center of the ring
    const starGroup = new THREE.Group();
    for (let s = 0; s < 2; s++) {
      const starGeom = new THREE.ConeGeometry(0.32, 0.65, 4);
      starGeom.scale(1, 1, 0.3);
      const cone1 = new THREE.Mesh(starGeom, this.starMat);
      const cone2 = new THREE.Mesh(starGeom, this.starMat);
      cone2.rotation.z = Math.PI;

      const starBlade = new THREE.Group();
      starBlade.add(cone1);
      starBlade.add(cone2);
      starBlade.rotation.z = (s * Math.PI) / 2;
      starGroup.add(starBlade);
    }
    ringGroup.add(starGroup);

    return ringGroup;
  }

  initPool() {
    for (let i = 0; i < this.pipePoolSize; i++) {
      const pairGroup = new THREE.Group();

      const topPipe = this.createSinglePipe(true, 25);
      const bottomPipe = this.createSinglePipe(false, 25);
      const ring = this.createRing();

      pairGroup.add(topPipe);
      pairGroup.add(bottomPipe);
      pairGroup.add(ring);

      this.scene.add(pairGroup);

      const pipeData = {
        group: pairGroup,
        topPipe: topPipe,
        bottomPipe: bottomPipe,
        ring: ring,
        gapY: 5.0,
        scored: false,
        ringCollected: false
      };

      this.pipes.push(pipeData);
    }
  }

  reset(startZ = -18) {
    let currentZ = startZ;
    for (let i = 0; i < this.pipes.length; i++) {
      const pipe = this.pipes[i];
      const gapY = 3.6 + Math.random() * 4.4;
      this.positionPipePair(pipe, currentZ, gapY);
      currentZ -= this.spacingZ;
    }
  }

  positionPipePair(pipe, z, gapY) {
    pipe.gapY = gapY;
    pipe.scored = false;
    pipe.ringCollected = false;
    pipe.group.position.set(0, 0, z);

    const bottomLipY = gapY - this.gapHeight / 2;
    pipe.bottomPipe.position.y = bottomLipY;

    const topLipY = gapY + this.gapHeight / 2;
    pipe.topPipe.position.y = topLipY;

    pipe.ring.position.set(0, gapY, 0);
    pipe.ring.visible = true;
    pipe.ring.scale.set(1, 1, 1);
  }

  update(delta, playerZ, onScore) {
    let minZ = 0;
    for (let i = 0; i < this.pipes.length; i++) {
      if (this.pipes[i].group.position.z < minZ) {
        minZ = this.pipes[i].group.position.z;
      }
    }

    for (let i = 0; i < this.pipes.length; i++) {
      const pipe = this.pipes[i];
      const pZ = pipe.group.position.z;

      // Spin golden ring and star
      if (pipe.ring.visible) {
        pipe.ring.rotation.y += delta * 2.8;
        pipe.ring.rotation.z += delta * 1.4;
      }

      if (!pipe.scored && playerZ <= pZ) {
        pipe.scored = true;
        pipe.ringCollected = true;
        pipe.ring.visible = false;
        if (onScore) onScore();
      }

      if (pZ > playerZ + 12) {
        const nextZ = minZ - this.spacingZ;
        const newGapY = 3.6 + Math.random() * 4.4;
        this.positionPipePair(pipe, nextZ, newGapY);
        minZ = nextZ;
      }
    }
  }

  checkCollision(playerPos, playerRadius = 0.38) {
    if (playerPos.y <= playerRadius + 0.1) {
      return { hit: true, cause: 'ground' };
    }

    if (playerPos.y >= 16.0) {
      return { hit: true, cause: 'ceiling' };
    }

    for (let i = 0; i < this.pipes.length; i++) {
      const pipe = this.pipes[i];
      const pipeZ = pipe.group.position.z;

      const distZ = Math.abs(playerPos.z - pipeZ);
      const hitRadius = this.pipeRadius + playerRadius;

      if (distZ < hitRadius) {
        const distX = Math.abs(playerPos.x);
        const horizontalDistSq = distX * distX + distZ * distZ;

        if (horizontalDistSq < hitRadius * hitRadius) {
          const bottomLipY = pipe.gapY - this.gapHeight / 2;
          const topLipY = pipe.gapY + this.gapHeight / 2;

          if (playerPos.y - playerRadius < bottomLipY) {
            return { hit: true, cause: 'pipe_bottom' };
          }
          if (playerPos.y + playerRadius > topLipY) {
            return { hit: true, cause: 'pipe_top' };
          }
        }
      }
    }

    return { hit: false };
  }
}
