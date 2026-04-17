import fs from 'fs';
import path from 'path';

// src/find-up/find-up.helper.ts
function findUp(filename, startDir = process.cwd()) {
  let dir = startDir;
  while (true) {
    const candidate = path.join(dir, filename);
    if (fs.existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

export { findUp };
