// src/get-boolean-env/get-boolean-env.helper.ts
function getBooleanEnv(value, fallback) {
  if (value === void 0 || value === null) return fallback ?? null;
  return value.startsWith("true");
}

export { getBooleanEnv };
