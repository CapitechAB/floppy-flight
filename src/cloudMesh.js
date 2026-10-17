import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Shared puff layouts, in metres, before the per-cloud scale. The same
// numbers are used by the Unity mesh builder so both versions match.
const VARIANTS = [
  [
    [0, 0.12, 0, 0.46],
    [-0.55, -0.02, 0.02, 0.34],
    [0.58, 0, -0.02, 0.36],
    [0.05, 0.42, 0.04, 0.3],
    [0.12, 0.08, 0.22, 0.28]
  ],
  [
    [0, 0.05, 0, 0.4],
    [0.08, 0.38, 0.04, 0.34],
    [-0.06, 0.68, 0, 0.26],
    [-0.46, 0.08, 0.02, 0.3],
    [0.48, 0.14, 0.02, 0.28]
  ],
  [
    [-0.2, 0.05, 0, 0.36],
    [0.32, 0.1, 0.04, 0.34],
    [0.02, 0.36, 0.08, 0.3],
    [-0.48, 0.16, 0.06, 0.26],
    [0.55, 0, -0.04, 0.28],
    [0.1, -0.02, 0.24, 0.24]
  ]
];

const TOP = new THREE.Color(0xffffff);
const BOTTOM = new THREE.Color(0xc5e8ff);

function solidIco(radius, x, y, z, color, detail) {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  geo.translate(x, y, z);
  const c = new THREE.Color(color);
  const count = geo.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

function bodyGradient(geometries) {
  const merged = mergeGeometries(geometries, false);
  const pos = merged.attributes.position;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const colors = new Float32Array(pos.count * 3);
  const tint = new THREE.Color();
  const span = Math.max(0.001, maxY - minY);
  for (let i = 0; i < pos.count; i++) {
    const t = Math.pow((pos.getY(i) - minY) / span, 0.7);
    tint.copy(BOTTOM).lerp(TOP, t);
    colors[i * 3] = tint.r;
    colors[i * 3 + 1] = tint.g;
    colors[i * 3 + 2] = tint.b;
  }
  merged.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return merged;
}

function faceParts(style) {
  const parts = [];
  const spread = style === 'happy' ? 0.22 : 0.18;
  const eyeY = 0.2;
  const eyeZ = 0.5;
  for (const side of [-1, 1]) {
    parts.push(solidIco(0.085, side * spread, eyeY, eyeZ, 0xffffff, 0));
    parts.push(solidIco(0.042, side * spread * 1.02, eyeY - 0.005, eyeZ + 0.055, 0x2a2438, 0));
  }
  parts.push(solidIco(0.055, -0.34, 0.06, 0.36, 0xffb7c8, 0));
  parts.push(solidIco(0.055, 0.34, 0.06, 0.36, 0xffb7c8, 0));

  const beads = style === 'happy' ? 5 : 3;
  const width = style === 'happy' ? 1.05 : 0.62;
  for (let i = 0; i < beads; i++) {
    const t = beads === 1 ? 0 : i / (beads - 1);
    const angle = (t - 0.5) * width;
    const x = Math.sin(angle) * 0.24;
    const y = -0.06 - (1 - Math.cos(angle)) * 0.16;
    parts.push(solidIco(style === 'happy' ? 0.034 : 0.03, x, y, 0.48, 0x3a2a34, 0));
  }
  return parts;
}

function buildVariant(puffs, style) {
  const body = puffs.map(([x, y, z, radius]) => new THREE.IcosahedronGeometry(radius, 1).translate(x, y, z));
  const merged = mergeGeometries([bodyGradient(body), ...faceParts(style)], false);
  merged.computeVertexNormals();
  return merged;
}

export function createCloudGeometries() {
  const geometries = [];
  for (let v = 0; v < VARIANTS.length; v++) {
    geometries.push(buildVariant(VARIANTS[v], 'happy'));
    geometries.push(buildVariant(VARIANTS[v], 'smile'));
  }
  return geometries;
}

export function createCloudMaterial() {
  return new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.82,
    metalness: 0,
    flatShading: false
  });
}
