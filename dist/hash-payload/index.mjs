import { createHash } from 'crypto';

// src/hash-payload/hash-payload.helper.ts
function hashPayload(payload, algorithm = "sha256", encoder = "hex") {
  const hash = createHash(algorithm);
  if (Buffer.isBuffer(payload) || payload instanceof Uint8Array) {
    hash.update(payload);
  } else if (typeof payload === "string") {
    hash.update(payload, "utf8");
  } else {
    hash.update(JSON.stringify(payload));
  }
  return hash.digest(encoder);
}

export { hashPayload };
