type SerializedBuffer = {
    type: "Buffer";
    data: number[];
};
type BufferLike = ArrayBuffer | SharedArrayBuffer | ReturnType<typeof ArrayBuffer.isView> | SerializedBuffer;
declare function getObjectClass(obj: object): string;
declare function isActualArrayBuffer(obj: object): obj is ArrayBuffer;
declare function isActualSharedArrayBuffer(obj: object): obj is SharedArrayBuffer;
declare function isNodeBuffer(obj: object): obj is Buffer;
declare function isSerializedBuffer(obj: object): obj is SerializedBuffer;
declare function isBufferOrSerialized(obj: unknown): obj is BufferLike;

export { type BufferLike, type SerializedBuffer, getObjectClass, isActualArrayBuffer, isActualSharedArrayBuffer, isBufferOrSerialized, isNodeBuffer, isSerializedBuffer };
