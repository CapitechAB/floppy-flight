import * as THREE from 'three';

export class BirdAvatar {
  constructor(camera, controller0, controller1) {
    this.camera = camera;
    this.controller0 = controller0;
    this.controller1 = controller1;

    this.beakMesh = null;
    this.leftWing = null;
    this.rightWing = null;
    this.camWingLeft = null;
    this.camWingRight = null;

    this.leftFlapAnim = 0;
    this.rightFlapAnim = 0;
    this.leftFlex = 0;
    this.rightFlex = 0;

    this.createBeak();
    this.createWings();
  }

  createBeak() {
    const beakGroup = new THREE.Group();

    // 4-sided pyramid cone with flat faceted shading matching the user screenshot exactly
    const beakGeom = new THREE.ConeGeometry(0.12, 0.44, 4);
    beakGeom.rotateX(-Math.PI / 2);

    const beakMat = new THREE.MeshStandardMaterial({
      color: 0xf39c12, // Rich golden cartoon yellow
      roughness: 0.28,
      metalness: 0.05,
      flatShading: true, // Crisp polygon facets: lit face on left, amber shadow face on right
      side: THREE.DoubleSide
    });

    const beakMesh = new THREE.Mesh(beakGeom, beakMat);
    beakMesh.scale.set(1.2, 0.8, 1.3);
    beakMesh.castShadow = true;
    beakGroup.add(beakMesh);

    // Subtle nostril dots on the upper dorsal ridge
    const nostrilMat = new THREE.MeshBasicMaterial({ color: 0x8e2c00 });
    const nostrilGeom = new THREE.SphereGeometry(0.007, 6, 6);
    nostrilGeom.scale(0.8, 1.4, 1.6);

    const leftNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    leftNostril.position.set(-0.024, 0.032, 0.04);
    beakGroup.add(leftNostril);

    const rightNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    rightNostril.position.set(0.024, 0.032, 0.04);
    beakGroup.add(rightNostril);

    // Positioned in lower view pointing forward/up toward the horizon, anchored firmly to bottom
    beakGroup.position.set(0, -1.5, -0.30);
    beakGroup.rotation.x = THREE.MathUtils.degToRad(-8);
    beakGroup.rotation.y = 0;

    this.camera.add(beakGroup);
    this.beakMesh = beakGroup;
  }

  createWingMesh(isLeft) {
    // Root group follows controller 6DoF position and rotation 1:1
    const wingRoot = new THREE.Group();

    // Internal pivot for aerodynamic flex and flap bends without hijacking controller rotation
    const wingPivot = new THREE.Group();
    wingRoot.add(wingPivot);

    // Ethereal white and cyan feathers matching concept art
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
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide
    });

    // 5 stylized layered feathers fanning out from the hand
    const featherCount = 5;
    for (let i = 0; i < featherCount; i++) {
      const length = 0.36 - i * 0.04;
      const width = 0.09 - i * 0.008;

      const featherGeom = new THREE.ConeGeometry(width, length, 12);
      featherGeom.rotateZ(isLeft ? Math.PI / 2 : -Math.PI / 2);
      featherGeom.scale(1.2, 0.28, 1.0);

      const mat = (i === 0) ? featherCyanMat : (i === 1 ? featherWhiteMat : (i === 2 ? featherGlowMat : featherWhiteMat));
      const feather = new THREE.Mesh(featherGeom, mat);

      const spreadAngle = (isLeft ? 1 : -1) * (0.12 + i * 0.24);
      feather.position.set(
        (isLeft ? -1 : 1) * (0.10 + i * 0.07),
        -i * 0.024,
        -i * 0.038
      );
      feather.rotation.z = spreadAngle;
      feather.rotation.y = (isLeft ? -1 : 1) * 0.15;
      feather.castShadow = true;
      wingPivot.add(feather);
    }

    // Wing wrist anchor hub
    const baseGeom = new THREE.SphereGeometry(0.055, 10, 10);
    baseGeom.scale(1.3, 0.85, 1.4);
    const baseMesh = new THREE.Mesh(baseGeom, featherWhiteMat);
    wingPivot.add(baseMesh);

    // Dynamic wind swoosh streak ribbon
    const trailGeom = new THREE.TorusGeometry(0.26, 0.028, 8, 24, Math.PI * 0.95);
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
    trailMesh.position.set(isLeft ? -0.16 : 0.16, -0.05, 0.05);
    wingPivot.add(trailMesh);

    wingRoot.userData = { wingPivot, trailMesh };
    return wingRoot;
  }

  createWings() {
    this.leftWing = this.createWingMesh(true);
    this.rightWing = this.createWingMesh(false);

    // Natural grip offset on VR Touch Plus controllers
    this.leftWing.position.set(-0.06, 0.02, 0.04);
    this.rightWing.position.set(0.06, 0.02, 0.04);

    if (this.controller0) this.controller0.add(this.leftWing);
    if (this.controller1) this.controller1.add(this.rightWing);

    // Desktop camera preview wings
    this.camWingLeft = this.createWingMesh(true);
    this.camWingRight = this.createWingMesh(false);
    this.camWingLeft.position.set(-0.40, -0.05, -0.46);
    this.camWingLeft.scale.set(1.25, 1.25, 1.25);
    this.camWingRight.position.set(0.40, -0.05, -0.46);
    this.camWingRight.scale.set(1.25, 1.25, 1.25);

    this.camera.add(this.camWingLeft);
    this.camera.add(this.camWingRight);
  }

  triggerFlapVisual(side) {
    if (side === 'left' || side === 'both') {
      this.leftFlapAnim = 1.0;
    }
    if (side === 'right' || side === 'both') {
      this.rightFlapAnim = 1.0;
    }
  }

  update(delta, birdPitchAngle, isPresenting = false, controllerVelocities = [0, 0]) {
    if (this.camWingLeft) this.camWingLeft.visible = !isPresenting;
    if (this.camWingRight) this.camWingRight.visible = !isPresenting;

    // Beak pitch response with head bobbing
    if (this.beakMesh) {
      this.beakMesh.rotation.x = THREE.MathUtils.degToRad(-8) + (birdPitchAngle * 0.22);
      this.beakMesh.rotation.y = 0;
    }

    // Aerodynamic flex responding dynamically to controller velocity
    const targetLeftFlex = THREE.MathUtils.clamp(-controllerVelocities[0] * 0.22, -0.45, 0.55);
    const targetRightFlex = THREE.MathUtils.clamp(-controllerVelocities[1] * 0.22, -0.45, 0.55);

    this.leftFlex = THREE.MathUtils.lerp(this.leftFlex, targetLeftFlex, delta * 12.0);
    this.rightFlex = THREE.MathUtils.lerp(this.rightFlex, targetRightFlex, delta * 12.0);

    if (this.leftFlapAnim > 0) {
      this.leftFlapAnim = Math.max(0, this.leftFlapAnim - delta * 4.2);
    }
    if (this.rightFlapAnim > 0) {
      this.rightFlapAnim = Math.max(0, this.rightFlapAnim - delta * 4.2);
    }

    const leftFlapStroke = Math.sin(this.leftFlapAnim * Math.PI) * 0.55;
    const rightFlapStroke = Math.sin(this.rightFlapAnim * Math.PI) * 0.55;

    // Apply ONLY to internal wingPivot so controller's 6DoF rotation remains 100% free
    if (this.leftWing && this.leftWing.userData.wingPivot) {
      const pivot = this.leftWing.userData.wingPivot;
      pivot.rotation.z = (this.leftFlex + leftFlapStroke) * 0.6;
      pivot.rotation.x = -(this.leftFlex + leftFlapStroke) * 0.4;

      if (this.leftWing.userData.trailMesh) {
        this.leftWing.userData.trailMesh.material.opacity = Math.max(0.2, Math.sin(this.leftFlapAnim * Math.PI) * 0.9);
      }
    }

    if (this.rightWing && this.rightWing.userData.wingPivot) {
      const pivot = this.rightWing.userData.wingPivot;
      pivot.rotation.z = -(this.rightFlex + rightFlapStroke) * 0.6;
      pivot.rotation.x = -(this.rightFlex + rightFlapStroke) * 0.4;

      if (this.rightWing.userData.trailMesh) {
        this.rightWing.userData.trailMesh.material.opacity = Math.max(0.2, Math.sin(this.rightFlapAnim * Math.PI) * 0.9);
      }
    }

    // Desktop wings animation
    if (this.camWingLeft && this.camWingLeft.userData.wingPivot) {
      const pivot = this.camWingLeft.userData.wingPivot;
      pivot.rotation.z = leftFlapStroke * 0.75;
      pivot.rotation.x = -leftFlapStroke * 0.5;
    }

    if (this.camWingRight && this.camWingRight.userData.wingPivot) {
      const pivot = this.camWingRight.userData.wingPivot;
      pivot.rotation.z = -rightFlapStroke * 0.75;
      pivot.rotation.x = -rightFlapStroke * 0.5;
    }
  }
}
