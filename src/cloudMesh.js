import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Cartoon cumulus: a flat-bottomed belly plus a few round domes.
// The same numbers are used by the Unity mesh builder.
const VARIANTS = [
  [
    { x: 0, y: 0.02, z: 0, r: 0.58, sx: 1.28, sy: 0.78, sz: 0.92, flat: true },
    { x: -0.4, y: 0.3, z: 0.02, r: 0.36, sx: 1, sy: 1, sz: 1, flat: false },
    { x: 0.42, y: 0.26, z: 0, r: 0.34, sx: 1, sy: 1, sz: 1, flat: false },
    { x: 0.02, y: 0.48, z: 0.04, r: 0.3, sx: 1, sy: 0.95, sz: 1, flat: false }
  ],
  [
    { x: 0, y: 0, z: 0, r: 0.5, sx: 1.15, sy: 0.7, sz: 0.9, flat: true },
    { x: 0.02, y: 0.32, z: 0.02, r: 0.36, sx: 1, sy: 1, sz: 1, flat: false },
    { x: -0.06, y: 0.62, z: 0, r: 0.28, sx: 1, sy: 1, sz: 1, flat: false }
  ],
  [
    { x: 0.02, y: 0, z: 0, r: 0.54, sx: 1.22, sy: 0.72, sz: 0.88, flat: true },
    { x: -0.34, y: 0.28, z: 0.04, r: 0.34, sx: 1, sy: 1, sz: 1, flat: false },
    { x: 0.36, y: 0.22, z: -0.02, r: 0.32, sx: 1, sy: 1, sz: 1, flat: false },
    { x: 0.08, y: 0.46, z: 0.06, r: 0.28, sx: 1, sy: 1, sz: 1, flat: false }
  ]
];

const TOP = new THREE.Color(0xffffff);
const BOTTOM = new THREE.Color(0xd7efff);
const BODY_DETAIL = 3;

function paint(geo, color) {
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

function puffGeometry(puff) {
  const geo = new THREE.IcosahedronGeometry(puff.r, BODY_DETAIL);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let y = pos.getY(i);
    if (puff.flat && y < 0) y *= 0.32;
    pos.setXYZ(i, pos.getX(i) * puff.sx + puff.x, y * puff.sy + puff.y, pos.getZ(i) * puff.sz + puff.z);
  }
  pos.needsUpdate = true;
  return geo;
}

function bodyGradient(puffs) {
  const parts = puffs.map(puffGeometry);
  const merged = mergeGeometries(parts, false);
  parts.forEach((geo) => geo.dispose());

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
    const t = (pos.getY(i) - minY) / span;
    // Only the belly fades to pale blue. The rest stays white.
    const u = Math.min(1, Math.max(0, t / 0.2));
    const fade = u * u * (3 - 2 * u);
    tint.copy(BOTTOM).lerp(TOP, fade);
    colors[i * 3] = tint.r;
    colors[i * 3 + 1] = tint.g;
    colors[i * 3 + 2] = tint.b;
  }
  merged.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  merged.computeBoundingBox();
  return merged;
}

function faceParts(style, box) {
  const width = box.max.x - box.min.x;
  const height = box.max.y - box.min.y;
  const front = box.max.z;
  const midY = box.min.y + height * 0.56;
  const happy = style === 'happy';
  const spread = width * (happy ? 0.2 : 0.16);
  const eyeR = height * (happy ? 0.2 : 0.17);
  const parts = [];

  for (const side of [-1, 1]) {
    const ex = side * spread;
    const ez = front + eyeR * 0.05;
    const eye = new THREE.IcosahedronGeometry(eyeR, 3);
    eye.scale(0.78, 1.2, 0.4);
    eye.translate(ex, midY, ez);
    parts.push(paint(eye, 0x16161a));

    const dot = new THREE.IcosahedronGeometry(eyeR * 0.26, 2);
    dot.translate(ex - eyeR * 0.2, midY + eyeR * 0.38, ez + eyeR * 0.36);
    parts.push(paint(dot, 0xffffff));
  }

  for (const side of [-1, 1]) {
    const blush = new THREE.IcosahedronGeometry(eyeR * 0.62, 2);
    blush.scale(1.3, 0.68, 0.38);
    blush.translate(side * spread * 1.72, midY - eyeR * 0.85, front + eyeR * 0.02);
    parts.push(paint(blush, 0xff8fab));
  }

  const ring = spread * (happy ? 0.95 : 0.72);
  const tube = eyeR * 0.16;
  const smile = new THREE.TorusGeometry(ring, tube, 8, 16, Math.PI);
  smile.rotateZ(Math.PI);
  smile.translate(0, midY - eyeR * 1.15, front + tube);
  const flatSmile = smile.toNonIndexed();
  smile.dispose();
  parts.push(paint(flatSmile, 0x241820));
  return parts;
}

function buildVariant(puffs, style) {
  const body = bodyGradient(puffs);
  const face = faceParts(style, body.boundingBox);
  const merged = mergeGeometries([body, ...face], false);
  body.dispose();
  face.forEach((geo) => geo.dispose());
  merged.computeVertexNormals();
  merged.computeBoundingSphere();
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
  // Unlit and fog-free so the sunset haze and green bounce light cannot tint the clouds.
  return new THREE.MeshBasicMaterial({
    vertexColors: true,
    fog: false,
    toneMapped: false
  });
}
