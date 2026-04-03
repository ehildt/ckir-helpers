// src/get-number-env/get-number-env.helper.ts
function getNumberEnv(value, fallback) {
  if (value == null) return fallback ?? null;
  const normalized = value.trim().replace(",", ".");
  const floatRegex = /^-?\d+(\.\d+)?$/;
  if (!floatRegex.test(normalized)) return fallback ?? null;
  if (normalized.includes(".")) {
    return parseFloat(normalized);
  }
  const intVal = BigInt(normalized);
  if (intVal <= BigInt(Number.MAX_SAFE_INTEGER) && intVal >= BigInt(Number.MIN_SAFE_INTEGER)) {
    return Number(intVal);
  }
  return intVal;
}

export { getNumberEnv };
