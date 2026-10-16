import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { sound } from './audio.js';
import { BirdAvatar } from './bird.js';
import { PipeManager } from './pipes.js';
import { Environment } from './environment.js';
import { UIManager } from './ui.js';

class FloppyFlightGame {
  constructor() {
    this.state = 'READY'; // 'READY', 'PLAYING', 'GAMEOVER'
    this.score = 0;

    // Physics parameters
    this.forwardSpeed = 7.5;
    this.baseForwardSpeed = 7.5;
    this.gravity = -11.5;
    this.flapImpulse = 4.8;
    this.velocityY = 0;
    this.pitchAngle = 0;

    // Timing & Flap detection
    this.flapCooldown = 0;
    this.gameOverDelay = 0;
    this.clock = new THREE.Clock();

    // Controller tracking history for velocity
    this.prevControllerY = [0, 0];
    this.controllerVelocityY = [0, 0];

    this.initScene();
    this.initGameWorld();
    this.setupInputs();
    this.setupResize();

    // Start loop
    this.renderer.setAnimationLoop((time, frame) => this.renderLoop(time, frame));
  }

  initScene() {
    this.container = document.getElementById('app');

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 350);

    // 2. Player Rig
    this.playerRig = new THREE.Group();
    this.playerRig.position.set(0, 5.0, 0);
    this.playerRig.add(this.camera);
    this.scene.add(this.playerRig);

    // 3. Renderer with WebXR
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.xr.enabled = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 4. VR Button with Quest prompt
    const vrBtn = VRButton.createButton(this.renderer);
    vrBtn.id = 'vr-button';
    vrBtn.addEventListener('click', () => sound.init());
    document.body.appendChild(vrBtn);

    // WebXR controllers
    this.controller0 = this.renderer.xr.getController(0);
    this.controller1 = this.renderer.xr.getController(1);
    this.playerRig.add(this.controller0);
    this.playerRig.add(this.controller1);

    // Trigger/Grip events for accessibility
    const onSelect = () => {
      sound.init();
      this.handleFlapInput('both');
    };
    this.controller0.addEventListener('selectstart', onSelect);
    this.controller1.addEventListener('selectstart', onSelect);
    this.controller0.addEventListener('squeezestart', onSelect);
    this.controller1.addEventListener('squeezestart', onSelect);
  }

  initGameWorld() {
    this.avatar = new BirdAvatar(this.camera, this.controller0, this.controller1);
    this.pipeManager = new PipeManager(this.scene);
    this.environment = new Environment(this.scene);
    this.ui = new UIManager(this.scene, this.camera);

    this.resetToReady();
  }

  setupInputs() {
    // Desktop keyboard
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'ArrowUp') {
        e.preventDefault();
        sound.init();
        this.handleFlapInput('both');
      }
    });

    // Desktop mouse / touch
    window.addEventListener('pointerdown', (e) => {
      sound.init();
      // Don't trigger if clicking VR button
      if (e.target && e.target.id === 'vr-button') return;
      this.handleFlapInput('both');
    });
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  resetToReady() {
    this.state = 'READY';
    this.score = 0;
    this.velocityY = 0;
    this.pitchAngle = 0;
    this.forwardSpeed = this.baseForwardSpeed;
    this.flapCooldown = 0;
    sound.setBGMVolume(0.42);

    this.playerRig.position.set(0, 5.0, 0);
    this.pipeManager.reset(-18);
    this.ui.updateScore(0);
    this.ui.showReady(this.playerRig.position);
    this.ui.hideGameOver();
  }

  startGame() {
    this.state = 'PLAYING';
    sound.startBGM();
    this.ui.hideReady();
  }

  triggerHaptic(strength = 0.6, durationMs = 80) {
    const session = this.renderer.xr.getSession();
    if (!session) return;

    for (const source of session.inputSources) {
      if (source.gamepad && source.gamepad.hapticActuators && source.gamepad.hapticActuators[0]) {
        source.gamepad.hapticActuators[0].pulse(strength, durationMs);
      }
    }
  }

  handleFlapInput(side = 'both') {
    sound.init();

    if (this.state === 'READY') {
      sound.playFlap();
      this.triggerHaptic(0.65, 80);
      this.avatar.triggerFlapVisual(side);
      this.velocityY = this.flapImpulse;
      this.startGame();
      return;
    }

    if (this.state === 'PLAYING') {
      if (this.flapCooldown > 0) return;
      this.flapCooldown = 0.18; // Minimum seconds between flaps

      sound.playFlap();
      this.triggerHaptic(0.7, 85);
      this.avatar.triggerFlapVisual(side);

      // Flap impulse: gives snappy lift
      this.velocityY = Math.max(this.velocityY * 0.25, 0) + this.flapImpulse;
      return;
    }

    if (this.state === 'GAMEOVER') {
      if (this.gameOverDelay <= 0) {
        sound.playFlap();
        this.triggerHaptic(0.6, 70);
        this.resetToReady();
      }
    }
  }

  handleGameOver() {
    this.state = 'GAMEOVER';
    this.gameOverDelay = 0.8; // Brief pause before allowing restart flap

    sound.playCrash();
    sound.setBGMVolume(0.22); // Duck music volume slightly on Game Over
    this.triggerHaptic(1.0, 250);

    this.ui.showGameOver(this.playerRig.position);
  }

  detectControllerFlaps(delta) {
    if (!this.renderer.xr.isPresenting) return;

    const controllers = [this.controller0, this.controller1];

    let leftFlapped = false;
    let rightFlapped = false;

    // Detect fast downward stroke on each controller
    for (let i = 0; i < 2; i++) {
      const c = controllers[i];
      if (!c.visible) continue;

      const currentY = c.position.y;
      const vy = (currentY - this.prevControllerY[i]) / Math.max(delta, 0.001);
      this.controllerVelocityY[i] = vy;
      this.prevControllerY[i] = currentY;

      // Downward velocity threshold: -1.2 m/s constitutes a deliberate wing flap
      if (vy < -1.2 && this.flapCooldown <= 0) {
        if (i === 0) leftFlapped = true;
        if (i === 1) rightFlapped = true;
      }
    }

    if (leftFlapped && rightFlapped) {
      this.handleFlapInput('both');
    } else if (leftFlapped) {
      this.handleFlapInput('left');
    } else if (rightFlapped) {
      this.handleFlapInput('right');
    }
  }

  renderLoop(time, frame) {
    const delta = Math.min(this.clock.getDelta(), 0.1);

    if (this.flapCooldown > 0) {
      this.flapCooldown -= delta;
    }
    if (this.gameOverDelay > 0) {
      this.gameOverDelay -= delta;
    }

    // VR controller motion tracking
    this.detectControllerFlaps(delta);

    // State updates
    if (this.state === 'READY') {
      // Gentle idle hover bobbing
      const hoverY = 5.0 + Math.sin(time * 0.003) * 0.2;
      this.playerRig.position.y = hoverY;
      this.pitchAngle = 0;
    } else if (this.state === 'PLAYING') {
      // Forward motion along -Z
      this.playerRig.position.z -= this.forwardSpeed * delta;

      // Vertical gravity & velocity
      this.playerRig.position.y += this.velocityY * delta + 0.5 * this.gravity * delta * delta;
      this.velocityY += this.gravity * delta;
      this.velocityY = Math.max(this.velocityY, -9.5); // Terminal fall velocity

      // Pitch angle (beak & flight feeling)
      const targetPitch = THREE.MathUtils.clamp(this.velocityY * 0.08, -0.65, 0.45);
      this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, targetPitch, delta * 8.0);

      // Pipes update & score
      this.pipeManager.update(delta, this.playerRig.position.z, () => {
        this.score++;
        this.forwardSpeed = this.baseForwardSpeed + Math.min(this.score * 0.1, 4.0);
        sound.playScore();
        sound.playAnnouncer(this.score);
        this.triggerHaptic(0.4, 60);
        this.ui.updateScore(this.score);
      });

      // Collision check
      const collision = this.pipeManager.checkCollision(this.playerRig.position);
      if (collision.hit) {
        this.handleGameOver();
      }
    } else if (this.state === 'GAMEOVER') {
      // In game over, gentle fall to ground if above ground
      if (this.playerRig.position.y > 0.45) {
        this.playerRig.position.y = Math.max(0.45, this.playerRig.position.y - delta * 4.0);
      }
    }

    // Avatar wing/beak animation
    this.avatar.update(delta, this.pitchAngle, this.renderer.xr.isPresenting, this.controllerVelocityY);

    // Environment scrolling
    this.environment.update(delta, this.playerRig.position.z);

    // Render
    this.renderer.render(this.scene, this.camera);
  }
}

// Start game on page load
window.addEventListener('DOMContentLoaded', () => {
  window.gameInstance = new FloppyFlightGame();
});
