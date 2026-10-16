import * as THREE from 'three';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.clouds = [];
    this.windParticles = null;
    this.particlePositions = null;
    this.particleCount = 70;

    this.createSky();
    this.createGround();
    this.createClouds();
    this.createSpeedParticles();
  }

  createSky() {
    this.scene.background = new THREE.Color(0x4dc1f9); // Classic Flappy blue
    this.scene.fog = new THREE.FogExp2(0x4dc1f9, 0.012);

    // Sun & Ambient lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x55a840, 0.7);
    this.scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(15, 25, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    this.scene.add(sunLight);
  }

  createGround() {
    // Ground platform that stays anchored beneath the player
    const groundGroup = new THREE.Group();

    // Grass surface with procedural canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Cheerful striped pattern
    ctx.fillStyle = '#70c042';
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#5aa432';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillRect(64, 64, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 120);

    const groundGeom = new THREE.PlaneGeometry(36, 360);
    groundGeom.rotateX(-Math.PI / 2);

    const groundMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
      metalness: 0.05
    });

    this.groundMesh = new THREE.Mesh(groundGeom, groundMat);
    this.groundMesh.position.set(0, 0, -100);
    this.groundMesh.receiveShadow = true;
    groundGroup.add(this.groundMesh);

    // Brown soil underlayer
    const soilGeom = new THREE.BoxGeometry(36, 10, 360);
    const soilMat = new THREE.MeshStandardMaterial({ color: 0xdeb887, roughness: 0.9 });
    const soilMesh = new THREE.Mesh(soilGeom, soilMat);
    soilMesh.position.set(0, -5, -100);
    groundGroup.add(soilMesh);

    this.scene.add(groundGroup);
    this.groundGroup = groundGroup;
  }

  createCloudMesh() {
    const cloud = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.0
    });

    const puffGeom = new THREE.SphereGeometry(1, 8, 8);
    puffGeom.scale(1.4, 0.8, 1);

    const puffCount = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < puffCount; i++) {
      const puff = new THREE.Mesh(puffGeom, cloudMat);
      puff.position.set(
        (i - puffCount / 2) * 1.5 + (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.8
      );
      const scale = 1.0 + Math.random() * 0.9;
      puff.scale.set(scale * 1.4, scale * 0.8, scale);
      cloud.add(puff);
    }
    return cloud;
  }

  createClouds() {
    for (let i = 0; i < 18; i++) {
      const cloud = this.createCloudMesh();
      const x = (Math.random() - 0.5) * 60;
      const y = 9.0 + Math.random() * 12.0;
      const z = -Math.random() * 200;
      cloud.position.set(x, y, z);
      cloud.userData = { speed: 0.8 + Math.random() * 1.2 };
      this.scene.add(cloud);
      this.clouds.push(cloud);
    }
  }

  createSpeedParticles() {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);

    for (let i = 0; i < this.particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = 1 + Math.random() * 14;
      positions[i * 3 + 2] = -Math.random() * 40;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.65
    });

    this.windParticles = new THREE.Points(geom, mat);
    this.particlePositions = positions;
    this.scene.add(this.windParticles);
  }

  update(delta, playerZ) {
    // Scroll ground seamlessly with player
    if (this.groundGroup) {
      this.groundGroup.position.z = Math.floor(playerZ / 10) * 10;
    }

    // Drift clouds & wrap around
    for (let i = 0; i < this.clouds.length; i++) {
      const cloud = this.clouds[i];
      cloud.position.z += cloud.userData.speed * delta;
      if (cloud.position.z > playerZ + 20) {
        cloud.position.z = playerZ - 180 - Math.random() * 40;
        cloud.position.x = (Math.random() - 0.5) * 60;
      }
    }

    // Speed particles moving towards player
    if (this.windParticles) {
      const positions = this.windParticles.geometry.attributes.position.array;
      for (let i = 0; i < this.particleCount; i++) {
        const idx = i * 3;
        // Keep particles in a window around the player
        if (positions[idx + 2] > playerZ + 5) {
          positions[idx + 0] = (Math.random() - 0.5) * 16;
          positions[idx + 1] = 1 + Math.random() * 14;
          positions[idx + 2] = playerZ - 35 - Math.random() * 15;
        }
      }
      this.windParticles.geometry.attributes.position.needsUpdate = true;
    }
  }
}
