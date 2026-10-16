import * as THREE from 'three';

export class BirdAvatar {
  constructor(camera, controller0, controller1) {
    this.camera = camera;
    this.controller0 = controller0;
    this.controller1 = controller1;

    this.beakMesh = null;
    this.leftWing = null;
    this.rightWing = null;

    this.leftFlapAnim = 0;
    this.rightFlapAnim = 0;

    this.createBeak();
    this.createWings();
  }

  createBeak() {
    // Beak group attached directly to camera
    const beakGroup = new THREE.Group();

    // Upper beak (orange pyramid)
    const upperGeom = new THREE.ConeGeometry(0.08, 0.28, 4);
    upperGeom.rotateX(Math.PI / 2);
    upperGeom.rotateY(Math.PI / 4);
    
    const beakMat = new THREE.MeshStandardMaterial({
      color: 0xff8c00,
      roughness: 0.35,
      metalness: 0.05
    });

    const upperBeak = new THREE.Mesh(upperGeom, beakMat);
    upperBeak.scale.set(1.1, 0.7, 1.2);
    upperBeak.castShadow = true;
    beakGroup.add(upperBeak);

    // Nostril markers
    const nostrilMat = new THREE.MeshBasicMaterial({ color: 0x4a2200 });
    const nostrilGeom = new THREE.SphereGeometry(0.008, 6, 6);
    
    const leftNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    leftNostril.position.set(-0.02, 0.025, -0.05);
    beakGroup.add(leftNostril);

    const rightNostril = new THREE.Mesh(nostrilGeom, nostrilMat);
    rightNostril.position.set(0.02, 0.025, -0.05);
    beakGroup.add(rightNostril);

    // Position in front of camera (just below eye level, tilted slightly down)
    beakGroup.position.set(0, -0.15, -0.32);
    beakGroup.rotation.x = THREE.MathUtils.degToRad(-10);

    this.camera.add(beakGroup);
    this.beakMesh = beakGroup;
  }

  createWingMesh(isLeft) {
    const wingGroup = new THREE.Group();

    const featherMatYellow = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.4,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    const featherMatOrange = new THREE.MeshStandardMaterial({
      color: 0xffa500,
      roughness: 0.4,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    const featherMatWhite = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    // Create 4 layered stylized feathers spanning outwards
    const featherCount = 4;
    for (let i = 0; i < featherCount; i++) {
      const length = 0.28 - i * 0.035;
      const width = 0.08 - i * 0.01;
      
      const featherGeom = new THREE.ConeGeometry(width, length, 3);
      featherGeom.rotateZ(isLeft ? Math.PI / 2 : -Math.PI / 2);

      const mat = (i === 0) ? featherMatWhite : (i === 1 ? featherMatOrange : featherMatYellow);
      const feather = new THREE.Mesh(featherGeom, mat);

      const angle = (isLeft ? 1 : -1) * (0.2 + i * 0.22);
      feather.position.set(
        (isLeft ? -1 : 1) * (0.08 + i * 0.06),
        -i * 0.03,
        -i * 0.035
      );
      feather.rotation.z = angle;
      feather.castShadow = true;
      wingGroup.add(feather);
    }

    // Wing shoulder / base
    const baseGeom = new THREE.SphereGeometry(0.055, 8, 8);
    baseGeom.scale(1.2, 0.8, 1.4);
    const baseMesh = new THREE.Mesh(baseGeom, featherMatYellow);
    wingGroup.add(baseMesh);

    return wingGroup;
  }

  createWings() {
    this.leftWing = this.createWingMesh(true);
    this.rightWing = this.createWingMesh(false);

    // Default positioning on controllers
    this.leftWing.position.set(0, 0, 0);
    this.rightWing.position.set(0, 0, 0);

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

  update(delta, birdPitchAngle) {
    // Beak subtle bob and pitch responsiveness
    if (this.beakMesh) {
      this.beakMesh.rotation.x = THREE.MathUtils.degToRad(-10) + (birdPitchAngle * 0.25);
    }

    // Animate wing flap bend / recovery
    if (this.leftWing && this.leftFlapAnim > 0) {
      this.leftFlapAnim = Math.max(0, this.leftFlapAnim - delta * 4.0);
      const bend = Math.sin(this.leftFlapAnim * Math.PI) * 0.45;
      this.leftWing.rotation.x = -bend;
      this.leftWing.rotation.z = -bend * 0.5;
    }

    if (this.rightWing && this.rightFlapAnim > 0) {
      this.rightFlapAnim = Math.max(0, this.rightFlapAnim - delta * 4.0);
      const bend = Math.sin(this.rightFlapAnim * Math.PI) * 0.45;
      this.rightWing.rotation.x = -bend;
      this.rightWing.rotation.z = bend * 0.5;
    }
  }
}
