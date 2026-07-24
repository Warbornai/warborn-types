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
export interface ContextProviderResult {
    readonly sourceName: string;
    readonly priority: number;
    readonly confidence: number;
    readonly tokens: number;
    readonly metadata: Record<string, unknown>;
    readonly context: string;
}
export interface IContextProvider {
    readonly sourceName: string;
    retrieveContext(query: string, options?: Record<string, unknown>): Promise<ContextProviderResult>;
}
export interface ContextRankedItem {
    readonly sourceName: string;
    readonly context: string;
    readonly relevanceScore: number;
    readonly recencyScore: number;
    readonly importanceScore: number;
    readonly missionScore: number;
    readonly workspaceScore: number;
    readonly finalScore: number;
    readonly tokens: number;
}
export interface ContextMetrics {
    readonly retrievalMs: number;
    readonly rankingMs: number;
    readonly compressionRatio: number;
    readonly totalTokens: number;
    readonly cacheHit: boolean;
}
export interface ContextBundle {
    readonly id: ContextId;
    readonly query: string;
    readonly rankedItems: readonly ContextRankedItem[];
    readonly totalTokens: number;
    readonly compressedContent: string;
    readonly prompt: string;
    readonly createdAt: ISO8601Timestamp;
    readonly metrics: ContextMetrics;
}
//# sourceMappingURL=index.d.ts.map