/**
 * Context Management, Memory, and Vector Embeddings Types.
 * @module @warborn/types/context
 */
import { BrandedId, ISO8601Timestamp } from '../common';
export type ContextId = BrandedId<'ContextId'>;
export type MemoryId = BrandedId<'MemoryId'>;
export declare enum MemoryType {
    SHORT_TERM = "SHORT_TERM",
    LONG_TERM = "LONG_TERM",
    EPISODIC = "EPISODIC",
    SEMANTIC = "SEMANTIC"
}
export interface EmbeddingVector {
    readonly values: readonly number[];
    readonly dimension: number;
}
export interface MemoryRecord {
    readonly id: MemoryId;
    readonly type: MemoryType;
    readonly content: string;
    readonly embedding?: EmbeddingVector;
    readonly metadata: Record<string, unknown>;
    readonly createdAt: ISO8601Timestamp;
    readonly ttlSeconds?: number;
}
export interface ContextChunk {
    readonly id: ContextId;
    readonly text: string;
    readonly score: number;
    readonly source: string;
}
//# sourceMappingURL=index.d.ts.map