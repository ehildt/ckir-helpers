// src/is-buffer-or-serialized/is-buffer-or-serialized.ts
function getObjectClass(obj) {
  return Object.prototype.toString.call(obj);
}
function isActualArrayBuffer(obj) {
  if (obj instanceof ArrayBuffer) return true;
  if (getObjectClass(obj) === "[object ArrayBuffer]") {
    return typeof obj.slice === "function";
  }
  return false;
}
function isActualSharedArrayBuffer(obj) {
  if (obj instanceof SharedArrayBuffer) return true;
  if (getObjectClass(obj) === "[object SharedArrayBuffer]") {
    return typeof obj.slice === "function";
  }
  return false;
}
function isNodeBuffer(obj) {
  return typeof Buffer !== "undefined" && Buffer.isBuffer?.(obj);
}
function isSerializedBuffer(obj) {
  const record = obj;
  return record.type === "Buffer" && Array.isArray(record.data);
}
function isBufferOrSerialized(obj) {
  if (!obj || typeof obj !== "object") return false;
  if (isActualArrayBuffer(obj)) return true;
  if (isActualSharedArrayBuffer(obj)) return true;
  if (ArrayBuffer.isView(obj)) return true;
  if (isNodeBuffer(obj)) return true;
  if (isSerializedBuffer(obj)) return true;
  return false;
}

export { getObjectClass, isActualArrayBuffer, isActualSharedArrayBuffer, isBufferOrSerialized, isNodeBuffer, isSerializedBuffer };
