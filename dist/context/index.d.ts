/**
 * Context Management, Memory, Vector Embeddings, & Cognitive Memory Types.
 * @module @warborn/types/context
 */
import { BrandedId, ISO8601Timestamp } from '../common';
export type ContextId = BrandedId<'ContextId'>;
export type MemoryId = BrandedId<'MemoryId'>;
export type NodeId = BrandedId<'NodeId'>;
export declare enum MemoryType {
    WORKING = "WORKING",
    EPISODIC = "EPISODIC",
    SEMANTIC = "SEMANTIC",
    PROCEDURAL = "PROCEDURAL",
    LONG_TERM = "LONG_TERM",
    SHORT_TERM = "SHORT_TERM"
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
    readonly importanceScore: number;
    readonly confidenceScore: number;
    readonly metadata: Record<string, unknown>;
    readonly createdAt: ISO8601Timestamp;
    readonly updatedAt?: ISO8601Timestamp;
    readonly ttlSeconds?: number;
}
export interface EpisodicMemoryRecord extends MemoryRecord {
    readonly type: MemoryType.EPISODIC;
    readonly participants: readonly string[];
    readonly summary: string;
    readonly outcome: 'success' | 'failure' | 'in_progress';
    readonly references: readonly string[];
}
export interface ProceduralMemoryRecord extends MemoryRecord {
    readonly type: MemoryType.PROCEDURAL;
    readonly workflowName: string;
    readonly executionPattern: readonly string[];
    readonly bestPractices: readonly string[];
    readonly successRate: number;
}
export interface GraphNode {
    readonly id: NodeId;
    readonly label: string;
    readonly type: 'User' | 'Project' | 'Agent' | 'Tool' | 'File' | 'Mission' | 'Knowledge';
    readonly properties: Record<string, unknown>;
}
export interface GraphEdge {
    readonly sourceId: NodeId;
    readonly targetId: NodeId;
    readonly relationship: string;
    readonly weight: number;
}
export interface VectorSearchResult {
    readonly record: MemoryRecord;
    readonly similarityScore: number;
}
export interface IVectorStore {
    readonly storeName: string;
    insert(record: MemoryRecord): Promise<void>;
    search(queryEmbedding: number[], limit?: number, minScore?: number): Promise<readonly VectorSearchResult[]>;
    delete(id: MemoryId): Promise<boolean>;
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