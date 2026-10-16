import * as THREE from 'three';

export class UIManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;

    this.scoreBillboard = null;
    this.readyBillboard = null;
    this.gameOverBillboard = null;

    this.currentScore = 0;
    this.bestScore = 0;

    this.createScoreDisplay();
    this.createReadyDisplay();
    this.createGameOverDisplay();
  }

  createCanvasTexture(drawFn, width = 512, height = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    drawFn(ctx, width, height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return { texture, canvas, ctx };
  }

  createScoreDisplay() {
    const { texture, canvas, ctx } = this.createCanvasTexture((c, w, h) => {
      this.drawScoreCanvas(c, w, h, 0);
    }, 256, 128);

    this.scoreCanvas = canvas;
    this.scoreCtx = ctx;
    this.scoreTexture = texture;

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false
    });

    const geom = new THREE.PlaneGeometry(1.2, 0.6);
    this.scoreMesh = new THREE.Mesh(geom, mat);
    this.scoreMesh.renderOrder = 999;
    this.scoreMesh.position.set(0, 1.3, -3.2);

    // Attached to camera so it stays in upper peripheral view
    this.camera.add(this.scoreMesh);
  }

  drawScoreCanvas(ctx, w, h, score) {
    ctx.clearRect(0, 0, w, h);

    // Pill background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.roundRect(20, 20, w - 40, h - 40, 24);
    ctx.fill();

    // White border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Score text with drop shadow
    ctx.font = 'bold 54px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fbc531';
    ctx.fillText(`${score}`, w / 2, h / 2);
  }

  updateScore(score) {
    this.currentScore = score;
    if (score > this.bestScore) {
      this.bestScore = score;
    }
    this.drawScoreCanvas(this.scoreCtx, this.scoreCanvas.width, this.scoreCanvas.height, score);
    this.scoreTexture.needsUpdate = true;
  }

  createReadyDisplay() {
    const { texture, canvas, ctx } = this.createCanvasTexture((c, w, h) => {
      c.clearRect(0, 0, w, h);

      // Card background
      c.fillStyle = 'rgba(0, 0, 0, 0.72)';
      c.beginPath();
      c.roundRect(16, 16, w - 32, h - 32, 28);
      c.fill();
      c.strokeStyle = '#fbc531';
      c.lineWidth = 6;
      c.stroke();

      // Title
      c.font = 'bold 56px Arial, sans-serif';
      c.fillStyle = '#fbc531';
      c.textAlign = 'center';
      c.fillText('FLOPPY FLIGHT', w / 2, 85);

      // Subtitle
      c.font = '26px Arial, sans-serif';
      c.fillStyle = '#ffffff';
      c.fillText('Flap your wings down to fly!', w / 2, 145);

      c.font = '22px Arial, sans-serif';
      c.fillStyle = '#4cd137';
      c.fillText('(Or pull controller triggers)', w / 2, 185);

      // Prompt
      c.font = 'bold 28px Arial, sans-serif';
      c.fillStyle = '#00d2d3';
      c.fillText('[ FLAP TO START ]', w / 2, 235);
    }, 512, 280);

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });

    const geom = new THREE.PlaneGeometry(2.6, 1.4);
    this.readyMesh = new THREE.Mesh(geom, mat);
    this.readyMesh.position.set(0, 5.0, -3.8);
    this.scene.add(this.readyMesh);
  }

  createGameOverDisplay() {
    const { texture, canvas, ctx } = this.createCanvasTexture((c, w, h) => {
      this.drawGameOverCanvas(c, w, h, 0, 0);
    }, 512, 300);

    this.gameOverCanvas = canvas;
    this.gameOverCtx = ctx;
    this.gameOverTexture = texture;

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });

    const geom = new THREE.PlaneGeometry(2.6, 1.5);
    this.gameOverMesh = new THREE.Mesh(geom, mat);
    this.gameOverMesh.visible = false;
    this.scene.add(this.gameOverMesh);
  }

  drawGameOverCanvas(c, w, h, score, best) {
    c.clearRect(0, 0, w, h);

    // Dark red accented card
    c.fillStyle = 'rgba(20, 10, 10, 0.85)';
    c.beginPath();
    c.roundRect(16, 16, w - 32, h - 32, 28);
    c.fill();
    c.strokeStyle = '#e84118';
    c.lineWidth = 6;
    c.stroke();

    // Splat Title
    c.font = 'bold 56px Arial, sans-serif';
    c.fillStyle = '#e84118';
    c.textAlign = 'center';
    c.fillText('💥 SPLAT! 💥', w / 2, 80);

    // Score breakdown
    c.font = '32px Arial, sans-serif';
    c.fillStyle = '#ffffff';
    c.fillText(`Score: ${score}   |   Best: ${best}`, w / 2, 150);

    // Action button prompt
    c.font = 'bold 30px Arial, sans-serif';
    c.fillStyle = '#fbc531';
    c.fillText('[ FLAP TO RETRY ]', w / 2, 225);
  }

  showReady(playerPos) {
    this.readyMesh.visible = true;
    this.readyMesh.position.set(playerPos.x, playerPos.y, playerPos.z - 3.8);
    this.gameOverMesh.visible = false;
  }

  hideReady() {
    this.readyMesh.visible = false;
  }

  showGameOver(playerPos) {
    this.drawGameOverCanvas(
      this.gameOverCtx,
      this.gameOverCanvas.width,
      this.gameOverCanvas.height,
      this.currentScore,
      this.bestScore
    );
    this.gameOverTexture.needsUpdate = true;

    this.gameOverMesh.position.set(playerPos.x, playerPos.y, playerPos.z - 3.2);
    this.gameOverMesh.visible = true;
  }

  hideGameOver() {
    this.gameOverMesh.visible = false;
  }
}
