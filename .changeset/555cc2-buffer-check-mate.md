---
"@ehildt/ckir-helpers": minor
---

Add is-buffer-or-serialized module with cross-platform buffer detection

- Added `isBufferOrSerialized()` - universal buffer detection for Node.js and browsers
- Added helper functions: `isActualArrayBuffer()`, `isActualSharedArrayBuffer()`, `isNodeBuffer()`, `isSerializedBuffer()`, `getObjectClass()`
- Added types: `BufferLike`, `SerializedBuffer`
- Cross-realm safe checks (works across iframes and workers)
- Spoof protection against Symbol.toStringTag manipulation
- Supports: Buffer, ArrayBuffer, SharedArrayBuffer, TypedArray, DataView, and serialized buffer format
- Browser and Node.js compatible
