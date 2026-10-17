import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, rgbaBuffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
      }
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type);
    const body = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body), 0);
    return Buffer.concat([len, body, crc]);
  }

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdrChunk = chunk('IHDR', ihdrData);

  const scanlines = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const scanOffset = y * (width * 4 + 1);
    scanlines[scanOffset] = 0;
    rgbaBuffer.copy(scanlines, scanOffset + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(scanlines);
  const idatChunk = chunk('IDAT', compressed);
  const iendChunk = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

class PixelGrid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.buf = Buffer.alloc(w * h * 4, 0);
  }

  hexToRgba(hex, alpha = 255) {
    const clean = hex.replace('#', '');
    const num = parseInt(clean, 16);
    if (clean.length === 6) {
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255, alpha];
    } else if (clean.length === 8) {
      return [(num >> 24) & 255, (num >> 16) & 255, (num >> 8) & 255, num & 255];
    }
    return [0, 0, 0, 0];
  }

  setPixel(x, y, color) {
    if (x < 0 || x >= this.w || y < 0 || y >= this.h) return;
    const idx = (y * this.w + x) * 4;
    const [r, g, b, a] = Array.isArray(color) ? color : this.hexToRgba(color);
    this.buf[idx + 0] = r;
    this.buf[idx + 1] = g;
    this.buf[idx + 2] = b;
    this.buf[idx + 3] = a;
  }

  renderAscii(asciiMap, palette) {
    const lines = asciiMap.trim().split('\n').map(l => l.trimEnd());
    for (let y = 0; y < lines.length; y++) {
      const line = lines[y];
      for (let x = 0; x < line.length; x++) {
        const char = line[x];
        if (palette[char]) {
          this.setPixel(x, y, palette[char]);
        }
      }
    }
  }

  toPNG() {
    return createPNG(this.w, this.h, this.buf);
  }
}

// ----------------------------------------------------
// 1. Grass Tuft 1: Classic Triple Blade (32x24)
// Palette:
// . : transparent
// # : dark border (#164724)
// S : shadow grass (#2d6a4f)
// G : bright emerald grass (#40916c)
// L : light lime grass (#74c69d)
// H : sun highlight (#b7e4c7)
// ----------------------------------------------------
const palette1 = {
  '#': '#164724',
  'S': '#2d6a4f',
  'G': '#40916c',
  'L': '#74c69d',
  'H': '#b7e4c7'
};

const ascii1 = `
................................
................H...............
...............HL#..............
...............GL##.............
..............#GL##.............
..............#GLS#.............
........H.....#GLS#.............
.......HL#....#GLS#.......H.....
......#GL#....#GLS#......#LH....
......#GLS#...#GLS#.....#LLG#...
.....#GGLS#...#GLS#.....#GLS#...
.....#GGLL#...#GLS#....#GGLS#...
....#GGLSS#...#GLS#....#GGLS#...
....#GGLSS#..#GGLS#....#GLSS#...
...#GGGLSS#..#GGLS#...#GGLSS#...
...#GGGLSS#..#GGLSS#..#GGLSS#...
...#GGGLLSS##GGGLSS#.#GGGLSS#...
...#GGGLLSS##GGGLSS##GGGLSSS#...
....#GGGLLSSGGGGLLSSGGGLSSS#....
.....#GGGGLLGGGGLLSSGGGLSS#.....
......##GGGGGGGGLLSSGGSS##......
........##GGGGGGGGSSSS##........
..........############..........
................................
`;

// ----------------------------------------------------
// 2. Grass Tuft 2: Lush Multi-Blade Cluster (36x24)
// ----------------------------------------------------
const palette2 = {
  '#': '#133e20',
  'S': '#24593f',
  'G': '#388e3c',
  'L': '#66bb6a',
  'H': '#a5d6a7',
  'Y': '#dcedc8'
};

const ascii2 = `
....................................
..................Y.................
.................YL#................
.................GL##...............
................#GLS#...............
........H.......#GLS#........H......
.......HL#......#GLS#.......HL#.....
......#GLS#.....#GLS#......#GLS#....
.....#GGLS#.....#GLS#......#GLS#....
.H...#GGLS#....#GGLSS#.....#GGLS#...
HL#..#GGLSS#...#GGLSS#....#GGGLS#..H
GL##.#GGGLSS#..#GGLSS#....#GGGLS#.#LH
GLS##GGGLSSS#.#GGGLSS#...#GGGLSS##GL#
GLS##GGGLSSS##GGGGLLSS#..#GGGLSS##GLS
GLSS#GGGGLLSS#GGGGLLSS#.#GGGGLLSSGLS#
GLSS#GGGGLLSSGGGGGLLSS##GGGGLLSSGLSS#
#GLSSGGGGGLLGGGGGGLLSSGGGGGGLLSSGLS#
.##GGGGGGGGGGGGGGGLLSSGGGGGGLLSS##..
...##GGGGGGGGGGGGGLLSSGGGGGGSS##....
.....##GGGGGGGGGGGGGGGGGGGGG##......
.......###GGGGGGGGGGGGGGG###........
..........################..........
....................................
....................................
`;

// ----------------------------------------------------
// 3. Grass Tuft 3: Grass Tuft with Cute Daisy Flower (32x24)
// Flower palette:
// W : white petal (#ffffff)
// C : shadow petal (#dcdde1)
// F : daisy center gold (#fbc531)
// D : daisy center dark (#e1b12c)
// ----------------------------------------------------
const palette3 = {
  '#': '#164724',
  'S': '#2d6a4f',
  'G': '#40916c',
  'L': '#74c69d',
  'H': '#b7e4c7',
  'W': '#ffffff',
  'C': '#dcdde1',
  'F': '#fbc531',
  'D': '#e1b12c'
};

const ascii3 = `
................................
................H...............
...............HL#..............
...............GL##.............
..............#GLS#.............
.......H......#GLS#.............
......HL#.....#GLS#.......H.....
.....#GLS#....#GLS#......HL#....
....#GGLS#....#GLS#.....#GLS#...
....#GGLS#...##...##....#GLS#...
...#GGLSS#..#WW###WW#..#GGLS#...
...#GGLSS#.#WWCCCCWW#.#GGLSS#...
...#GGGLSS##WCFDFDCW##GGGLSS#...
...#GGGLSS##WFFDDFCW##GGGLSS#...
...#GGGLLSS#WCFDFDCW#GGGLSSS#...
....#GGGLLSS#WWCCCCWGGGGLLSS#...
.....#GGGGLL##WW#WW##GGGLSS#....
......##GGGGGG##S##GGGGSS##.....
........##GGGGGGGGGGGG##........
..........############..........
................................
................................
................................
................................
`;

function generateSprites() {
  const g1 = new PixelGrid(32, 24);
  g1.renderAscii(ascii1, palette1);
  const png1 = g1.toPNG();

  const g2 = new PixelGrid(36, 24);
  g2.renderAscii(ascii2, palette2);
  const png2 = g2.toPNG();

  const g3 = new PixelGrid(32, 24);
  g3.renderAscii(ascii3, palette3);
  const png3 = g3.toPNG();

  const outDir = path.join(process.cwd(), 'src', 'assets');
  const unityDir = path.join(process.cwd(), 'unity', 'Assets', 'Textures');

  fs.writeFileSync(path.join(outDir, 'grass_tuft_1.png'), png1);
  fs.writeFileSync(path.join(outDir, 'grass_tuft_2.png'), png2);
  fs.writeFileSync(path.join(outDir, 'grass_tuft_flower.png'), png3);

  fs.writeFileSync(path.join(unityDir, 'grass_tuft_1.png'), png1);
  fs.writeFileSync(path.join(unityDir, 'grass_tuft_2.png'), png2);
  fs.writeFileSync(path.join(unityDir, 'grass_tuft_flower.png'), png3);

  console.log('Successfully generated:');
  console.log('- grass_tuft_1.png (32x24)');
  console.log('- grass_tuft_2.png (36x24)');
  console.log('- grass_tuft_flower.png (32x24)');
}

generateSprites();
