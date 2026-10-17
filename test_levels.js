import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8094;
const DIST_DIR = path.join(__dirname, 'dist');
const ARTIFACT_DIR = 'C:\\Users\\buhre\\.gemini\\antigravity\\brain\\47c87d7b-c797-4540-9a3d-af5cae8dccc8';

function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.png': 'image/png'
  };

  const server = http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function runTest() {
  const server = await startServer();
  console.log(`Test server running on port ${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: [
      '--use-gl=angle',
      '--use-angle=d3d11',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--no-sandbox',
      '--autoplay-policy=no-user-gesture-required'
    ],
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('canvas');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Testing Level Cleared Screen...');
  const stateResult = await page.evaluate(() => {
    const game = window.gameInstance;
    // Simulate scoring 10 pipes to trigger Level 1 Clear
    game.startGame();
    for (let i = 0; i < 10; i++) {
      game.score++;
      game.levelPipesCleared++;
      game.ui.updateScore(game.score);
      if (game.levelPipesCleared >= game.pipesPerLevel) {
        game.handleLevelCleared();
      }
    }
    return {
      state: game.state,
      currentLevel: game.currentLevel,
      score: game.score,
      levelClearedMeshVisible: game.ui.levelClearedMesh ? game.ui.levelClearedMesh.visible : false
    };
  });

  console.log('Level Cleared State Result:', stateResult);

  // Allow canvas texture to render
  await new Promise(r => setTimeout(r, 600));

  const screenshotPath = path.join(ARTIFACT_DIR, 'level_cleared_screen.png');
  await page.screenshot({ path: screenshotPath });
  console.log(`Saved screenshot to ${screenshotPath}`);

  // Test button hit test logic
  const hitTestResult = await page.evaluate(() => {
    const game = window.gameInstance;
    // Test UV coords on Next Level button: center is (0.5, 0.38)
    const nextHit = game.ui.checkLevelClearedHit({ x: 0.5, y: 0.38 });
    // Test UV coords on Quit Game button: center is (0.5, 0.185)
    const quitHit = game.ui.checkLevelClearedHit({ x: 0.5, y: 0.185 });
    // Test outside
    const outsideHit = game.ui.checkLevelClearedHit({ x: 0.1, y: 0.9 });

    return { nextHit, quitHit, outsideHit };
  });

  console.log('Hit Test Result:', hitTestResult);

  // Test Next Level transition
  const nextLevelResult = await page.evaluate(() => {
    const game = window.gameInstance;
    game.nextLevel();
    return {
      state: game.state,
      currentLevel: game.currentLevel,
      levelPipesCleared: game.levelPipesCleared,
      score: game.score,
      levelClearedMeshVisible: game.ui.levelClearedMesh ? game.ui.levelClearedMesh.visible : false
    };
  });

  console.log('Next Level Result:', nextLevelResult);

  // Test Quit Game transition
  const quitResult = await page.evaluate(() => {
    const game = window.gameInstance;
    game.quitGame();
    return {
      state: game.state,
      currentLevel: game.currentLevel,
      levelPipesCleared: game.levelPipesCleared,
      score: game.score,
      readyMeshVisible: game.ui.readyMesh ? game.ui.readyMesh.visible : false
    };
  });

  console.log('Quit Game Result:', quitResult);

  await browser.close();
  server.close();
}

runTest().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
