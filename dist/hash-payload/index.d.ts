import { BinaryToTextEncoding } from 'crypto';

type HashPayloadSupportedAlgorithm = "sha256" | "sha384" | "sha512";
declare function hashPayload(payload: string | Record<any, any> | Buffer | Uint8Array, algorithm?: HashPayloadSupportedAlgorithm, encoder?: BinaryToTextEncoding): string;

export { type HashPayloadSupportedAlgorithm, hashPayload };
