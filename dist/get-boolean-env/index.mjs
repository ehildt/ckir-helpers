// src/get-boolean-env/get-boolean-env.helper.ts
function getBooleanEnv(value, fallback) {
  if (value == null) return fallback ?? null;
  return value.toLowerCase().startsWith("true");
}

export { getBooleanEnv };
