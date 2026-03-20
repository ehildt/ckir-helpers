// src/get-number-env/get-number-env.helper.ts
function getNumberEnv(value, fallback) {
  if (value == null) return fallback ?? null;
  const normalized = value.trim().replace(",", ".");
  const floatRegex = /^-?\d+(\.\d+)?$/;
  if (!floatRegex.test(normalized)) return fallback ?? null;
  let parsed;
  if (normalized.includes(".")) {
    parsed = parseFloat(normalized);
  } else {
    const intVal = BigInt(normalized);
    parsed = intVal <= BigInt(Number.MAX_SAFE_INTEGER) && intVal >= BigInt(Number.MIN_SAFE_INTEGER) ? Number(intVal) : intVal;
  }
  return typeof parsed === "bigint" || !Number.isNaN(parsed) ? parsed : fallback ?? null;
}

export { getNumberEnv };
