import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { sound } from './audio.js';
import { BirdAvatar } from './bird.js';
import { PipeManager } from './pipes.js';
import { EnemyBirdManager } from './enemyBirds.js';
import { Environment } from './environment.js';
import { UIManager } from './ui.js';

class FloppyFlightGame {
  constructor() {
    this.state = 'READY'; // 'READY', 'PLAYING', 'LEVEL_CLEARED', 'PAUSED', 'GAMEOVER'
    this.previousState = null;
    this.score = 0;
    this.currentLevel = 1;
    this.levelPipesCleared = 0;
    this.pipesPerLevel = 10;
    this.levelClearedSavedY = 5.0;
    this.pauseSavedY = 5.0;
    this.menuButtonPrevPressed = false;

    // Raycasters for mouse & VR interaction with UI
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.controllerRaycaster = new THREE.Raycaster();

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

    const updateVrBtnLayout = () => {
      if (vrBtn.textContent && (vrBtn.textContent.includes('NOT SUPPORTED') || vrBtn.textContent.includes('NOT AVAILABLE') || vrBtn.textContent.includes('NOT ALLOWED'))) {
        vrBtn.classList.add('vr-unsupported');
      } else {
        vrBtn.classList.remove('vr-unsupported');
      }
      vrBtn.style.width = 'auto';
    };
    const vrObserver = new MutationObserver(updateVrBtnLayout);
    vrObserver.observe(vrBtn, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['style'] });
    updateVrBtnLayout();

    // WebXR controllers
    this.controller0 = this.renderer.xr.getController(0);
    this.controller1 = this.renderer.xr.getController(1);
    this.playerRig.add(this.controller0);
    this.playerRig.add(this.controller1);

    // Trigger/Grip events for accessibility
    const onSelect = (e) => {
      sound.init();
      if (this.state === 'PAUSED') {
        const action = this.checkPauseControllerHit(e.target);
        if (action === 'quit') {
          this.quitGame();
        } else {
          // Pointing at Continue or pulling trigger safely continues
          this.continueGame();
        }
        return;
      }
      if (this.state === 'LEVEL_CLEARED') {
        const action = this.checkControllerHit(e.target);
        if (action === 'quit') {
          this.quitGame();
        } else {
          // Pointing at Next Level or anywhere else in VR triggers Next Level safely
          this.nextLevel();
        }
        return;
      }
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
    this.enemyBirds = new EnemyBirdManager(this.scene);
    this.environment = new Environment(this.scene);
    this.ui = new UIManager(this.scene, this.camera);

    this.resetToReady();
  }

  setupInputs() {
    // Desktop keyboard
    window.addEventListener('keydown', (e) => {
      // Escape toggles pause menu
      if (e.code === 'Escape') {
        e.preventDefault();
        this.togglePause();
        return;
      }

      if (this.state === 'PAUSED') {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          this.continueGame();
          return;
        }
        return;
      }

      if (this.state === 'LEVEL_CLEARED') {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          this.nextLevel();
          return;
        }
        return;
      }

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

      if (this.state === 'PAUSED') {
        const action = this.checkPausePointerHit(e.clientX, e.clientY);
        if (action === 'continue') {
          this.continueGame();
          return;
        } else if (action === 'quit') {
          this.quitGame();
          return;
        }
        return;
      }

      if (this.state === 'LEVEL_CLEARED') {
        const action = this.checkPointerHit(e.clientX, e.clientY);
        if (action === 'next') {
          this.nextLevel();
          return;
        } else if (action === 'quit') {
          this.quitGame();
          return;
        }
        // Deliberate click protection: clicking outside the buttons is ignored
        return;
      }

      this.handleFlapInput('both');
    });

    // Pointer hover cursor feedback
    window.addEventListener('pointermove', (e) => {
      if (this.state === 'PAUSED') {
        const action = this.checkPausePointerHit(e.clientX, e.clientY);
        document.body.style.cursor = action ? 'pointer' : 'default';
      } else if (this.state === 'LEVEL_CLEARED') {
        const action = this.checkPointerHit(e.clientX, e.clientY);
        document.body.style.cursor = action ? 'pointer' : 'default';
      } else {
        document.body.style.cursor = 'default';
      }
    });
  }

  checkPointerHit(clientX, clientY) {
    if (!this.ui.levelClearedMesh || !this.ui.levelClearedMesh.visible) return null;
    this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.ui.levelClearedMesh);
    if (intersects.length > 0 && intersects[0].uv) {
      return this.ui.checkLevelClearedHit(intersects[0].uv);
    }
    return null;
  }

  checkControllerHit(controller) {
    if (!controller || !this.ui.levelClearedMesh || !this.ui.levelClearedMesh.visible) return null;
    const tempMatrix = new THREE.Matrix4();
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    this.controllerRaycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    this.controllerRaycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
    const intersects = this.controllerRaycaster.intersectObject(this.ui.levelClearedMesh);
    if (intersects.length > 0 && intersects[0].uv) {
      return this.ui.checkLevelClearedHit(intersects[0].uv);
    }
    return null;
  }

  checkPausePointerHit(clientX, clientY) {
    if (!this.ui.pauseMesh || !this.ui.pauseMesh.visible) return null;
    this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.ui.pauseMesh);
    if (intersects.length > 0 && intersects[0].uv) {
      return this.ui.checkPauseMenuHit(intersects[0].uv);
    }
    return null;
  }

  checkPauseControllerHit(controller) {
    if (!controller || !this.ui.pauseMesh || !this.ui.pauseMesh.visible) return null;
    const tempMatrix = new THREE.Matrix4();
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    this.controllerRaycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    this.controllerRaycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
    const intersects = this.controllerRaycaster.intersectObject(this.ui.pauseMesh);
    if (intersects.length > 0 && intersects[0].uv) {
      return this.ui.checkPauseMenuHit(intersects[0].uv);
    }
    return null;
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
    this.previousState = null;
    sound.isGameOver = false;
    this.score = 0;
    this.currentLevel = 1;
    this.levelPipesCleared = 0;
    this.velocityY = 0;
    this.pitchAngle = 0;
    this.baseForwardSpeed = 7.5;
    this.forwardSpeed = this.baseForwardSpeed;
    this.flapCooldown = 0;
    sound.setBGMVolume(0.38);
    document.body.style.cursor = 'default';

    this.playerRig.position.set(0, 5.0, 0);
    this.pipeManager.reset(-18);
    this.enemyBirds.reset();
    this.ui.updateScore(0);
    this.ui.showReady(this.playerRig.position);
    this.ui.hideGameOver();
    this.ui.hideLevelCleared();
    this.ui.hidePauseMenu();
  }

  startGame() {
    this.state = 'PLAYING';
    this.previousState = null;
    sound.isGameOver = false;
    sound.startBGM();
    this.ui.hideReady();
    this.ui.hideLevelCleared();
    this.ui.hidePauseMenu();
  }

  pauseGame() {
    if (this.state !== 'PLAYING' && this.state !== 'LEVEL_CLEARED') return;
    this.previousState = this.state;
    this.state = 'PAUSED';
    this.pauseSavedY = this.playerRig.position.y;
    sound.setBGMVolume(0.12);
    this.ui.showPauseMenu(this.playerRig.position);
  }

  continueGame() {
    if (this.state !== 'PAUSED') return;
    this.ui.hidePauseMenu();
    document.body.style.cursor = 'default';
    sound.setBGMVolume(0.38);
    this.state = this.previousState || 'PLAYING';
    this.previousState = null;
  }

  togglePause() {
    if (this.state === 'PAUSED') {
      this.continueGame();
    } else if (this.state === 'PLAYING' || this.state === 'LEVEL_CLEARED') {
      this.pauseGame();
    }
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

    if (this.state === 'PAUSED') {
      // Flapping while paused does not trigger motion
      return;
    }

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

    if (this.state === 'LEVEL_CLEARED') {
      // Physical flap while on level cleared screen triggers Next Level
      this.nextLevel();
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

  handleLevelCleared() {
    this.state = 'LEVEL_CLEARED';
    this.levelClearedSavedY = this.playerRig.position.y;
    this.velocityY = 0;

    sound.playFanfare();
    this.triggerHaptic(0.85, 160);
    this.ui.showLevelCleared(this.playerRig.position, this.currentLevel, this.score);
  }

  nextLevel() {
    sound.init();
    this.currentLevel++;
    this.levelPipesCleared = 0;
    document.body.style.cursor = 'default';

    // Reposition pipe pool and enemies forward from current player Z
    this.pipeManager.reset(this.playerRig.position.z - 18);
    this.enemyBirds.reset();

    this.ui.hideLevelCleared();
    this.ui.hidePauseMenu();

    // Scale forward speed slightly with each level
    this.baseForwardSpeed = 7.5 + Math.min((this.currentLevel - 1) * 0.4, 3.5);
    this.forwardSpeed = this.baseForwardSpeed;

    // Upward flap impulse to resume flight seamlessly
    this.velocityY = this.flapImpulse * 0.8;
    sound.playFlap();
    sound.resumeBGM();
    this.triggerHaptic(0.65, 80);

    this.state = 'PLAYING';
  }

  quitGame() {
    sound.init();
    document.body.style.cursor = 'default';
    this.currentLevel = 1;
    this.levelPipesCleared = 0;
    this.previousState = null;
    this.ui.hideLevelCleared();
    this.ui.hidePauseMenu();
    this.resetToReady();
  }

  handleGameOver() {
    this.state = 'GAMEOVER';
    this.gameOverDelay = 0.8; // Brief pause before allowing restart flap

    sound.playBonk();
    setTimeout(() => {
      sound.playGameOver();
    }, 240);

    this.triggerHaptic(1.0, 250);
    this.ui.showGameOver(this.playerRig.position);
  }

  detectControllerInputs(delta) {
    if (!this.renderer.xr.isPresenting) return;
    const session = this.renderer.xr.getSession();
    if (!session) return;

    let menuPressedNow = false;
    for (const source of session.inputSources) {
      if (source.gamepad && source.gamepad.buttons) {
        const btns = source.gamepad.buttons;
        // Check Menu button (button 5 or 4 on left/any controller)
        if (source.handedness === 'left' || !source.handedness || source.handedness === 'none') {
          if (btns[5]?.pressed || (btns.length > 4 && btns[4]?.pressed && btns.length <= 5)) {
            menuPressedNow = true;
          }
        }
        if (btns[5]?.pressed) {
          menuPressedNow = true;
        }
      }
    }

    if (menuPressedNow && !this.menuButtonPrevPressed) {
      this.togglePause();
    }
    this.menuButtonPrevPressed = menuPressedNow;
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

    // VR controller motion tracking & button inputs
    this.detectControllerFlaps(delta);
    this.detectControllerInputs(delta);

    // State updates
    if (this.state === 'READY') {
      // Gentle idle hover bobbing
      const hoverY = 5.0 + Math.sin(time * 0.003) * 0.2;
      this.playerRig.position.y = hoverY;
      this.pitchAngle = 0;
    } else if (this.state === 'PAUSED') {
      // Freeze position & hover stationary
      this.playerRig.position.y = this.pauseSavedY;
      this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, 0, delta * 5.0);
    } else if (this.state === 'LEVEL_CLEARED') {
      // Gentle hover bobbing while viewing victory screen
      const hoverY = this.levelClearedSavedY + Math.sin(time * 0.003) * 0.12;
      this.playerRig.position.y = hoverY;
      this.pitchAngle = THREE.MathUtils.lerp(this.pitchAngle, 0, delta * 5.0);
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
        this.levelPipesCleared++;
        this.forwardSpeed = this.baseForwardSpeed + Math.min(this.score * 0.1, 4.0);
        sound.playScore();
        this.triggerHaptic(0.4, 60);
        this.ui.updateScore(this.score);

        if (this.levelPipesCleared >= this.pipesPerLevel) {
          this.handleLevelCleared();
        }
      });

      this.enemyBirds.update(
        delta,
        this.playerRig.position.z,
        this.forwardSpeed,
        this.pipeManager
      );

      // Collision check. A bird uses the same game-over path as a pipe.
      const collision = this.pipeManager.checkCollision(this.playerRig.position);
      const birdHit = collision.hit
        ? collision
        : this.enemyBirds.checkCollision(this.playerRig.position);
      if (birdHit.hit) {
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

    // Environment scrolling & cloud face tracking
    this.environment.update(delta, this.playerRig.position.z, this.playerRig.position.y);

    // Render
    this.renderer.render(this.scene, this.camera);
  }
}

// Start game on page load
window.addEventListener('DOMContentLoaded', () => {
  window.gameInstance = new FloppyFlightGame();
});
