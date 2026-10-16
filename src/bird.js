import * as THREE from 'three';

export class BirdAvatar {
  constructor(camera, controller0, controller1) {
    this.camera = camera;
    this.controller0 = controller0;
    this.controller1 = controller1;

    this.beakMesh = null;
    this.leftWing = null;
    this.rightWing = null;
    this.leftTrail = null;
    this.rightTrail = null;

    this.leftFlapAnim = 0;
    this.rightFlapAnim = 0;

    this.createBeak();
    this.createWings();
  }

  createBeak() {
    const beakGroup = new THREE.Group();

    // Upper beak - glossy golden orange
    const upperGeom = new THREE.ConeGeometry(0.08, 0.28, 4);
    upperGeom.rotateX(Math.PI / 2);
    upperGeom.rotateY(Math.PI / 4);

    const beakMat = new THREE.MeshStandardMaterial({
      color: 0xff793f,
      roughness: 0.25,
      metalness: 0.1
    });

    const upperBeak = new THREE.Mesh(upperGeom, beakMat);
    upperBeak.scale.set(1.1, 0.72, 1.25);
    upperBeak.castShadow = true;
    beakGroup.add(upperBeak);

    // Beak edge / nostril details
    const nostrilMat = new THREE.MeshBasicMaterial({ color: 0xcd6133 });
    const nostrilGeom = new THREE.SphereGeometry(0.007, 6, 6);

    const leftNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    leftNostril.position.set(-0.02, 0.024, -0.05);
    beakGroup.add(leftNostril);

    const rightNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    rightNostril.position.set(0.02, 0.024, -0.05);
    beakGroup.add(rightNostril);

    beakGroup.position.set(0, -0.15, -0.32);
    beakGroup.rotation.x = THREE.MathUtils.degToRad(-10);

    this.camera.add(beakGroup);
    this.beakMesh = beakGroup;
  }

  createWingMesh(isLeft) {
    const wingGroup = new THREE.Group();

    // Ethereal white and soft cyan materials matching the artwork
    const featherWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.1,
      emissive: 0xdff9fb,
      emissiveIntensity: 0.25,
      side: THREE.DoubleSide
    });

    const featherCyanMat = new THREE.MeshStandardMaterial({
      color: 0x7ed6df,
      roughness: 0.3,
      metalness: 0.15,
      emissive: 0x22a6b3,
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide
    });

    const featherGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      emissive: 0xfffa65,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide
    });

    // 5 stylized fanning feathers
    const featherCount = 5;
    for (let i = 0; i < featherCount; i++) {
      const length = 0.32 - i * 0.035;
      const width = 0.085 - i * 0.008;

      const featherGeom = new THREE.ConeGeometry(width, length, 4);
      featherGeom.rotateZ(isLeft ? Math.PI / 2 : -Math.PI / 2);
      featherGeom.scale(1.2, 0.3, 1.0);

      const mat = (i === 0) ? featherCyanMat : (i === 1 ? featherWhiteMat : (i === 2 ? featherGlowMat : featherWhiteMat));
      const feather = new THREE.Mesh(featherGeom, mat);

      const spreadAngle = (isLeft ? 1 : -1) * (0.15 + i * 0.22);
      feather.position.set(
        (isLeft ? -1 : 1) * (0.09 + i * 0.065),
        -i * 0.028,
        -i * 0.032
      );
      feather.rotation.z = spreadAngle;
      feather.castShadow = true;
      wingGroup.add(feather);
    }

    // Wing shoulder hub (touch controller attachment)
    const baseGeom = new THREE.SphereGeometry(0.055, 10, 10);
    baseGeom.scale(1.3, 0.85, 1.4);
    const baseMesh = new THREE.Mesh(baseGeom, featherWhiteMat);
    wingGroup.add(baseMesh);

    // Wind swoosh streak trail (curved speed arc matching artwork)
    const trailGeom = new THREE.TorusGeometry(0.24, 0.025, 8, 24, Math.PI * 0.95);
    const trailMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const trailMesh = new THREE.Mesh(trailGeom, trailMat);
    trailMesh.rotation.x = Math.PI / 2;
    trailMesh.rotation.y = isLeft ? 0.3 : -0.3;
    trailMesh.position.set(isLeft ? -0.15 : 0.15, -0.05, 0.05);
    wingGroup.add(trailMesh);
    wingGroup.userData = { trailMesh };

    return wingGroup;
  }

  createWings() {
    this.leftWing = this.createWingMesh(true);
    this.rightWing = this.createWingMesh(false);

    // Desktop view camera wings
    this.camWingLeft = this.createWingMesh(true);
    this.camWingRight = this.createWingMesh(false);
    this.camWingLeft.position.set(-0.36, -0.16, -0.48);
    this.camWingLeft.scale.set(1.35, 1.35, 1.35);
    this.camWingRight.position.set(0.36, -0.16, -0.48);
    this.camWingRight.scale.set(1.35, 1.35, 1.35);

    this.camera.add(this.camWingLeft);
    this.camera.add(this.camWingRight);

    if (this.controller0) this.controller0.add(this.leftWing);
    if (this.controller1) this.controller1.add(this.rightWing);
  }

  triggerFlapVisual(side) {
    if (side === 'left' || side === 'both') {
      this.leftFlapAnim = 1.0;
    }
    if (side === 'right' || side === 'both') {
      this.rightFlapAnim = 1.0;
    }
  }

  update(delta, birdPitchAngle, isPresenting = false) {
    if (this.camWingLeft) this.camWingLeft.visible = !isPresenting;
    if (this.camWingRight) this.camWingRight.visible = !isPresenting;

    if (this.beakMesh) {
      this.beakMesh.rotation.x = THREE.MathUtils.degToRad(-10) + (birdPitchAngle * 0.25);
    }

    // Left flap bend and wind trail glow
    if (this.leftFlapAnim > 0) {
      this.leftFlapAnim = Math.max(0, this.leftFlapAnim - delta * 4.2);
      const bend = Math.sin(this.leftFlapAnim * Math.PI) * 0.52;
      const glowOpacity = Math.sin(this.leftFlapAnim * Math.PI) * 0.85;

      if (this.leftWing) {
        this.leftWing.rotation.x = -bend;
        this.leftWing.rotation.z = -bend * 0.5;
        if (this.leftWing.userData.trailMesh) {
          this.leftWing.userData.trailMesh.material.opacity = glowOpacity;
        }
      }
      if (this.camWingLeft) {
        this.camWingLeft.rotation.x = -bend;
        this.camWingLeft.rotation.z = -bend * 0.5;
        if (this.camWingLeft.userData.trailMesh) {
          this.camWingLeft.userData.trailMesh.material.opacity = glowOpacity;
        }
      }
    }

    // Right flap bend and wind trail glow
    if (this.rightFlapAnim > 0) {
      this.rightFlapAnim = Math.max(0, this.rightFlapAnim - delta * 4.2);
      const bend = Math.sin(this.rightFlapAnim * Math.PI) * 0.52;
      const glowOpacity = Math.sin(this.rightFlapAnim * Math.PI) * 0.85;

      if (this.rightWing) {
        this.rightWing.rotation.x = -bend;
        this.rightWing.rotation.z = bend * 0.5;
        if (this.rightWing.userData.trailMesh) {
          this.rightWing.userData.trailMesh.material.opacity = glowOpacity;
        }
      }
      if (this.camWingRight) {
        this.camWingRight.rotation.x = -bend;
        this.camWingRight.rotation.z = bend * 0.5;
        if (this.camWingRight.userData.trailMesh) {
          this.camWingRight.userData.trailMesh.material.opacity = glowOpacity;
        }
      }
    }
  }
}
