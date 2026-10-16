import * as THREE from 'three';

export class PipeManager {
  constructor(scene) {
    this.scene = scene;
    this.pipes = [];
    this.pipePoolSize = 10;
    this.spacingZ = 20; // Distance between pipe pairs in meters
    this.gapHeight = 3.8; // Vertical gap between top and bottom pipe
    this.pipeRadius = 1.1; // Body radius
    this.lipRadius = 1.35; // Lip radius
    this.lipHeight = 0.55;

    // Materials
    this.pipeMat = new THREE.MeshStandardMaterial({
      color: 0x44bd32,
      roughness: 0.35,
      metalness: 0.1
    });

    this.lipMat = new THREE.MeshStandardMaterial({
      color: 0x319a22,
      roughness: 0.35,
      metalness: 0.1
    });

    this.ringMat = new THREE.MeshStandardMaterial({
      color: 0xfbc531,
      roughness: 0.2,
      metalness: 0.7,
      emissive: 0xe1b12c,
      emissiveIntensity: 0.35
    });

    this.initPool();
  }

  createSinglePipe(isTop, totalHeight) {
    const group = new THREE.Group();

    // Main pipe body
    const bodyGeom = new THREE.CylinderGeometry(this.pipeRadius, this.pipeRadius, totalHeight, 24);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.pipeMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;

    // Pipe rim / lip
    const lipGeom = new THREE.CylinderGeometry(this.lipRadius, this.lipRadius, this.lipHeight, 24);
    const lipMesh = new THREE.Mesh(lipGeom, this.lipMat);
    lipMesh.castShadow = true;
    lipMesh.receiveShadow = true;

    if (isTop) {
      // Body extends upwards, lip is at the bottom end
      bodyMesh.position.y = totalHeight / 2;
      lipMesh.position.y = this.lipHeight / 2;
    } else {
      // Body extends downwards, lip is at the top end
      bodyMesh.position.y = -totalHeight / 2;
      lipMesh.position.y = -this.lipHeight / 2;
    }

    group.add(bodyMesh);
    group.add(lipMesh);
    return group;
  }

  createRing() {
    const ringGeom = new THREE.TorusGeometry(0.85, 0.08, 12, 28);
    const ringMesh = new THREE.Mesh(ringGeom, this.ringMat);
    ringMesh.castShadow = true;
    return ringMesh;
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
      // Random gap center between 3.6m and 8.0m
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

    // Bottom pipe lip rests at gapY - gapHeight / 2
    const bottomLipY = gapY - this.gapHeight / 2;
    pipe.bottomPipe.position.y = bottomLipY;

    // Top pipe lip rests at gapY + gapHeight / 2
    const topLipY = gapY + this.gapHeight / 2;
    pipe.topPipe.position.y = topLipY;

    // Golden ring centered in gap
    pipe.ring.position.set(0, gapY, 0);
    pipe.ring.visible = true;
    pipe.ring.scale.set(1, 1, 1);
  }

  update(delta, playerZ, onScore) {
    // Find the furthest pipe along -Z
    let minZ = 0;
    for (let i = 0; i < this.pipes.length; i++) {
      if (this.pipes[i].group.position.z < minZ) {
        minZ = this.pipes[i].group.position.z;
      }
    }

    // Animate rings & recycle pipes that passed behind player
    for (let i = 0; i < this.pipes.length; i++) {
      const pipe = this.pipes[i];
      const pZ = pipe.group.position.z;

      // Spin golden ring
      if (pipe.ring.visible) {
        pipe.ring.rotation.y += delta * 2.5;
        pipe.ring.rotation.z += delta * 1.2;
      }

      // Check scoring trigger when player crosses pipe plane
      if (!pipe.scored && playerZ <= pZ) {
        pipe.scored = true;
        pipe.ringCollected = true;
        pipe.ring.visible = false;
        if (onScore) onScore();
      }

      // Recycle pipe when 12 meters behind player
      if (pZ > playerZ + 12) {
        const nextZ = minZ - this.spacingZ;
        const newGapY = 3.6 + Math.random() * 4.4;
        this.positionPipePair(pipe, nextZ, newGapY);
        minZ = nextZ;
      }
    }
  }

  checkCollision(playerPos, playerRadius = 0.38) {
    // Ground collision
    if (playerPos.y <= playerRadius + 0.1) {
      return { hit: true, cause: 'ground' };
    }

    // Sky ceiling collision
    if (playerPos.y >= 16.0) {
      return { hit: true, cause: 'ceiling' };
    }

    // Check collision against each pipe pair
    for (let i = 0; i < this.pipes.length; i++) {
      const pipe = this.pipes[i];
      const pipeZ = pipe.group.position.z;

      // Quick bounding test in Z
      const distZ = Math.abs(playerPos.z - pipeZ);
      const hitRadius = this.pipeRadius + playerRadius;

      if (distZ < hitRadius) {
        // Player is horizontally within the pipe cylinder footprint
        const distX = Math.abs(playerPos.x); // Pipes are centered at X = 0
        const horizontalDistSq = distX * distX + distZ * distZ;

        if (horizontalDistSq < hitRadius * hitRadius) {
          // Check vertical clearance
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
