#!/usr/bin/env node
/**
 * copy-assets.js
 * Copies all image/media assets from the OPReborn repo into op-webapp/public/assets/
 * Run: node scripts/copy-assets.js
 */

const fs = require("fs");
const path = require("path");

const SOURCE_ROOT = path.join(__dirname, "..", "..", "OPReborn");
const SOURCE_IMAGES = path.join(SOURCE_ROOT, "images");
const SOURCE_LATEST = path.join(SOURCE_ROOT, "latest");
const DEST = path.join(__dirname, "..", "public", "assets");

const IMAGE_EXTS = new Set([
  ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg",
  ".ico", ".bmp", ".pdf", ".mp4", ".wmv", ".swf",
]);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFilesFromDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.log(`[skip] ${srcDir} not found`);
    return 0;
  }
  let count = 0;
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) continue;
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (!fs.existsSync(dest)) {
      try {
        fs.copyFileSync(src, dest);
        count++;
      } catch (e) {
        // Skip files with invalid Windows characters
      }
    }
  }
  return count;
}

ensureDir(DEST);

// Copy from root (images in root like zombies.jpg, orange-brain.gif etc)
let total = 0;
total += copyFilesFromDir(SOURCE_ROOT, DEST);

// Copy from images/ subfolder
total += copyFilesFromDir(SOURCE_IMAGES, DEST);

console.log(`✅ Copied ${total} assets to public/assets/`);
