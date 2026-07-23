/**
 * Provider Abstraction, Capabilities, and Health Metrics.
 * @module @warborn/types/provider
 */

export enum ProviderType {
  OPENAI = 'OPENAI',
  ANTHROPIC = 'ANTHROPIC',
  GOOGLE_GEMINI = 'GOOGLE_GEMINI',
  OLLAMA_LOCAL = 'OLLAMA_LOCAL',
  CUSTOM_REST = 'CUSTOM_REST',
}

export interface ProviderCapabilities {
  readonly textGeneration: boolean;
  readonly streaming: boolean;
  readonly functionCalling: boolean;
  readonly visionInput: boolean;
  readonly audioInput: boolean;
  readonly maxBatchSize: number;
}

export interface ProviderConfig {
  readonly providerId: string;
  readonly type: ProviderType;
  readonly baseUrl: string;
  readonly apiKey?: string;
  readonly isEnabled: boolean;
  readonly capabilities: ProviderCapabilities;
}
