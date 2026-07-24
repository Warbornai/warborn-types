/**
 * Provider Abstraction, Capabilities, and Health Metrics.
 * @module @warborn/types/provider
 */

export enum ProviderType {
  AMAZON_BEDROCK = 'AMAZON_BEDROCK',
  OPENAI = 'OPENAI',
  ANTHROPIC = 'ANTHROPIC',
  GOOGLE_GEMINI = 'GOOGLE_GEMINI',
  AZURE_OPENAI = 'AZURE_OPENAI',
  OLLAMA_LOCAL = 'OLLAMA_LOCAL',
  CUSTOM_REST = 'CUSTOM_REST',
}

export interface ProviderCapabilities {
  readonly textGeneration: boolean;
  readonly streaming: boolean;
  readonly functionCalling: boolean;
  readonly visionInput: boolean;
  readonly audioInput: boolean;
  readonly embeddings: boolean;
  readonly maxBatchSize: number;
}

export interface ProviderConfig {
  readonly providerId: string;
  readonly type: ProviderType;
  readonly baseUrl?: string;
  readonly region?: string;
  readonly modelId: string;
  readonly apiKey?: string;
  readonly isEnabled: boolean;
  readonly capabilities: ProviderCapabilities;
}

export interface ProviderHealth {
  readonly providerId: string;
  readonly status: 'healthy' | 'degraded' | 'unhealthy';
  readonly latencyMs: number;
  readonly activeModel: string;
  readonly timestamp: string;
  readonly error?: string;
}

export interface ProviderTelemetryPayload {
  readonly requestId: string;
  readonly providerId: string;
  readonly modelId: string;
  readonly latencyMs: number;
  readonly promptTokens: number;
  readonly completionTokens: number;
  readonly totalTokens: number;
  readonly estimatedCostUsd: number;
  readonly retryCount: number;
  readonly streamDurationMs?: number;
  readonly error?: string;
}

export interface ChatOptions {
  readonly modelId?: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly topP?: number;
  readonly stopSequences?: readonly string[];
  readonly signal?: AbortSignal;
}

export interface EmbeddingOptions {
  readonly modelId?: string;
  readonly dimensions?: number;
}

export interface IProvider {
  readonly providerId: string;
  readonly providerType: ProviderType;
  initialize(): Promise<void>;
  chat(messages: any[], options?: ChatOptions): Promise<any>;
  stream(messages: any[], options?: ChatOptions): AsyncIterable<string>;
  embeddings(text: string, options?: EmbeddingOptions): Promise<number[]>;
  health(): Promise<ProviderHealth>;
  listModels(): Promise<string[]>;
}
