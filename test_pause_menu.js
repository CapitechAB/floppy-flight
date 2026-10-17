import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8095;
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

  // 1. Start game, press Escape to Pause
  console.log('Testing Pause Menu via Escape key...');
  const pauseResult = await page.evaluate(() => {
    const game = window.gameInstance;
    game.startGame();
    // Dispatch Escape key
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    return {
      state: game.state,
      pauseVisible: game.ui.pauseMesh ? game.ui.pauseMesh.visible : false
    };
  });
  console.log('Pause result:', pauseResult);

  // Take screenshot of Pause Menu
  await new Promise(r => setTimeout(r, 400));
  const screenshotPath = path.join(ARTIFACT_DIR, 'pause_menu_screenshot.png');
  await page.screenshot({ path: screenshotPath });
  console.log(`Saved screenshot to ${screenshotPath}`);

  // 2. Test Hit Detection on Pause Menu
  const hitTestResult = await page.evaluate(() => {
    const game = window.gameInstance;
    // Continue button UV center is ~(0.5, 0.42)
    const continueHit = game.ui.checkPauseMenuHit({ x: 0.5, y: 0.42 });
    // Quit Game button UV center is ~(0.5, 0.22)
    const quitHit = game.ui.checkPauseMenuHit({ x: 0.5, y: 0.22 });
    // Outside UV
    const outsideHit = game.ui.checkPauseMenuHit({ x: 0.1, y: 0.9 });
    return { continueHit, quitHit, outsideHit };
  });
  console.log('Pause Hit Test Result:', hitTestResult);

  // 3. Test Continue Game via Escape key
  console.log('Testing Continue via Escape key...');
  const continueResult = await page.evaluate(() => {
    const game = window.gameInstance;
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    return {
      state: game.state,
      pauseVisible: game.ui.pauseMesh ? game.ui.pauseMesh.visible : false
    };
  });
  console.log('Continue result:', continueResult);

  // 4. Test KeyQ does NOT quit the game
  console.log('Testing KeyQ does NOT quit game...');
  const keyQResult = await page.evaluate(() => {
    const game = window.gameInstance;
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyQ' }));
    return {
      state: game.state
    };
  });
  console.log('KeyQ result (should remain PLAYING):', keyQResult);

  // 5. Test Pause -> Quit Game button
  console.log('Testing Pause Menu Quit Game button...');
  const quitResult = await page.evaluate(() => {
    const game = window.gameInstance;
    game.pauseGame();
    game.quitGame();
    return {
      state: game.state,
      readyVisible: game.ui.readyMesh ? game.ui.readyMesh.visible : false,
      pauseVisible: game.ui.pauseMesh ? game.ui.pauseMesh.visible : false
    };
  });
  console.log('Quit result:', quitResult);

  // 6. Test Level Cleared does NOT quit on Escape or KeyQ
  console.log('Testing Level Cleared does NOT quit on KeyQ/Escape...');
  const levelClearEscapeResult = await page.evaluate(() => {
    const game = window.gameInstance;
    game.startGame();
    game.score = 10;
    game.levelPipesCleared = 10;
    game.handleLevelCleared();

    // Press KeyQ (should do nothing)
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyQ' }));
    const afterQ = game.state;

    // Press Escape (should toggle pause, not quit!)
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    const afterEsc = game.state;

    // Press Escape again (should return to LEVEL_CLEARED!)
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    const afterSecondEsc = game.state;

    return { afterQ, afterEsc, afterSecondEsc };
  });
  console.log('Level Cleared Escape Test:', levelClearEscapeResult);

  await browser.close();
  server.close();
}

runTest().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
