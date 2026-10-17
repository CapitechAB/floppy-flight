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
    }, 384, 160);

    this.scoreCanvas = canvas;
    this.scoreCtx = ctx;
    this.scoreTexture = texture;

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false
    });

    const geom = new THREE.PlaneGeometry(1.4, 0.6);
    this.scoreMesh = new THREE.Mesh(geom, mat);
    this.scoreMesh.renderOrder = 999;
    this.scoreMesh.position.set(0, 1.35, -3.2);

    this.camera.add(this.scoreMesh);
  }

  drawScoreCanvas(ctx, w, h, score) {
    ctx.clearRect(0, 0, w, h);

    // Rounded glowing arcade score badge matching reference art
    ctx.fillStyle = 'rgba(10, 15, 30, 0.65)';
    ctx.beginPath();
    ctx.roundRect(16, 16, w - 32, h - 32, 28);
    ctx.fill();

    // Golden-orange border
    ctx.strokeStyle = '#ffa502';
    ctx.lineWidth = 5;
    ctx.stroke();

    // SCORE: label tag
    const tagW = 135;
    const tagH = 46;
    const tagX = 32;
    const tagY = (h - tagH) / 2;

    ctx.fillStyle = '#0984e3';
    ctx.beginPath();
    ctx.roundRect(tagX, tagY, tagW, tagH, 12);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.font = 'bold 22px "Arial Black", Impact, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCORE: ', tagX + tagW / 2, tagY + tagH / 2 + 1);

    // Retro Arcade Score Counter (formatted like '00', '05', etc.)
    const scoreStr = score < 10 ? `0${score}` : `${score}`;
    ctx.font = 'bold 68px "Arial Black", Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const numX = w / 2 + 75;
    const numY = h / 2;

    // Dark drop shadow
    ctx.fillStyle = '#2d3436';
    ctx.fillText(scoreStr, numX, numY + 4);

    // Warm orange-yellow gradient fill
    const grad = ctx.createLinearGradient(0, 20, 0, h - 20);
    grad.addColorStop(0, '#ffeaa7');
    grad.addColorStop(0.5, '#fbc531');
    grad.addColorStop(1, '#e17055');
    ctx.fillStyle = grad;
    ctx.fillText(scoreStr, numX, numY + 1);

    // Crisp white outline
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.strokeText(scoreStr, numX, numY + 1);
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
      this.drawReadyCanvas(c, w, h);
    }, 768, 480);

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });

    const geom = new THREE.PlaneGeometry(3.6, 2.25);
    this.readyMesh = new THREE.Mesh(geom, mat);
    this.readyMesh.position.set(0, 5.0, -3.8);
    this.scene.add(this.readyMesh);
  }

  drawReadyCanvas(c, w, h) {
    c.clearRect(0, 0, w, h);

    // Soft sky cloud banner background
    c.fillStyle = 'rgba(255, 255, 255, 0.92)';
    c.beginPath();
    c.roundRect(24, 20, w - 48, h - 40, 40);
    c.fill();

    // Vibrant sunset orange outer border
    c.strokeStyle = '#ff793f';
    c.lineWidth = 7;
    c.stroke();

    // Inner bright cyan border
    c.strokeStyle = '#00d2d3';
    c.lineWidth = 3;
    c.strokeRect(34, 30, w - 68, h - 60);

    // 1. Top VR Badge
    c.fillStyle = '#0984e3';
    c.beginPath();
    c.roundRect(w / 2 - 45, 38, 90, 42, 14);
    c.fill();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 3;
    c.stroke();

    c.font = 'bold 26px "Arial Black", Impact, sans-serif';
    c.fillStyle = '#ffffff';
    c.textAlign = 'center';
    c.fillText('VR', w / 2, 68);

    // 2. Subheader "GET READY TO FLAP!"
    c.font = 'bold 28px "Arial Black", Impact, sans-serif';
    c.fillStyle = '#2f3542';
    c.fillText('GET READY TO FLAP!', w / 2, 118);

    // 3. Main Bubbly 3D Logo: "Floppy flight" matching reference image!
    // "Floppy" in cyan-blue gradient with thick outline
    const drawBubblyText = (text, x, y, size, topColor, bottomColor) => {
      c.font = `bold ${size}px "Arial Black", Impact, sans-serif`;
      c.textAlign = 'center';

      // Thick dark drop shadow
      c.strokeStyle = '#1e3799';
      c.lineWidth = 14;
      c.lineJoin = 'round';
      c.strokeText(text, x, y + 6);

      // White outline
      c.strokeStyle = '#ffffff';
      c.lineWidth = 9;
      c.strokeText(text, x, y);

      // Gradient Fill
      const grad = c.createLinearGradient(0, y - size, 0, y + 10);
      grad.addColorStop(0, topColor);
      grad.addColorStop(1, bottomColor);
      c.fillStyle = grad;
      c.fillText(text, x, y);
    };

    drawBubblyText('Floppy', w / 2, 215, 105, '#48dbfb', '#0984e3');

    // Wings on "flight"
    // Left Wing
    c.fillStyle = '#70a1ff';
    c.beginPath();
    c.ellipse(w / 2 - 165, 290, 38, 16, -0.3, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 3;
    c.stroke();

    // Right Wing
    c.beginPath();
    c.ellipse(w / 2 + 165, 290, 38, 16, 0.3, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 3;
    c.stroke();

    // "flight" in golden-orange gradient
    drawBubblyText('flight', w / 2, 310, 95, '#fed330', '#eb3b5a');

    // 4. Instructions Pill Button
    c.fillStyle = '#2ed573';
    c.beginPath();
    c.roundRect(w / 2 - 240, 365, 480, 54, 27);
    c.fill();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 4;
    c.stroke();

    c.font = 'bold 24px Arial, sans-serif';
    c.fillStyle = '#ffffff';
    c.fillText('FLAP CONTROLLERS DOWN TO FLY!', w / 2, 400);

    c.font = '16px Arial, sans-serif';
    c.fillStyle = '#57606f';
    c.fillText('(or pull triggers / press Space)', w / 2, 442);
  }

  createGameOverDisplay() {
    const { texture, canvas, ctx } = this.createCanvasTexture((c, w, h) => {
      this.drawGameOverCanvas(c, w, h, 0, 0);
    }, 640, 380);

    this.gameOverCanvas = canvas;
    this.gameOverCtx = ctx;
    this.gameOverTexture = texture;

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });

    const geom = new THREE.PlaneGeometry(3.0, 1.78);
    this.gameOverMesh = new THREE.Mesh(geom, mat);
    this.gameOverMesh.visible = false;
    this.scene.add(this.gameOverMesh);
  }

  drawGameOverCanvas(c, w, h, score, best) {
    c.clearRect(0, 0, w, h);

    // Warm rounded sunset card
    c.fillStyle = 'rgba(255, 255, 255, 0.95)';
    c.beginPath();
    c.roundRect(20, 20, w - 40, h - 40, 36);
    c.fill();

    // Red-orange border
    c.strokeStyle = '#eb4d4b';
    c.lineWidth = 8;
    c.stroke();

    // Splat Title with 3D drop shadow
    c.font = 'bold 64px "Arial Black", Impact, sans-serif';
    c.textAlign = 'center';
    c.strokeStyle = '#b71540';
    c.lineWidth = 10;
    c.strokeText('💥 SPLAT! 💥', w / 2, 100);

    c.fillStyle = '#ff793f';
    c.fillText('💥 SPLAT! 💥', w / 2, 98);

    // Score breakdown badge
    c.fillStyle = 'rgba(47, 53, 66, 0.08)';
    c.beginPath();
    c.roundRect(40, 130, w - 80, 110, 20);
    c.fill();

    c.font = 'bold 36px "Arial Black", sans-serif';
    c.fillStyle = '#2f3542';
    c.fillText(`SCORE: ${score}`, w / 2, 175);

    c.font = 'bold 28px Arial, sans-serif';
    c.fillStyle = '#ff9f43';
    c.fillText(`BEST SCORE: ${best}`, w / 2, 220);

    // Flap to Retry button
    c.fillStyle = '#0984e3';
    c.beginPath();
    c.roundRect(w / 2 - 180, 265, 360, 56, 28);
    c.fill();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 4;
    c.stroke();

    c.font = 'bold 26px "Arial Black", Impact, sans-serif';
    c.fillStyle = '#ffffff';
    c.fillText('FLAP TO RETRY', w / 2, 302);
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
