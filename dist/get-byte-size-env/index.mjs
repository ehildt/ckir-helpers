// src/get-byte-size-env/get-byte-size-env.helper.ts
var BYTE_SIZE_REGEX = /^(\d*\.?\d+)(B|KB|MB|GB|TB)$/;
var BYTE_SIZE_MAP = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 };
function getByteSizeEnv(value, fallback) {
  if (value == null) return fallback ?? null;
  const [, num, unit] = String(value).trim().toUpperCase().match(BYTE_SIZE_REGEX) || [];
  const size = BYTE_SIZE_MAP[unit];
  if (!size) return fallback ?? null;
  return Math.round(parseFloat(num) * size);
}

export { getByteSizeEnv };
