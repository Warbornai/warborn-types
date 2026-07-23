/**
 * Multi-Provider LLM Messaging and Conversation Types.
 * @module @warborn/types/chat
 */

import { BrandedId, ISO8601Timestamp } from '../common';

export type MessageId = BrandedId<'MessageId'>;
export type SessionId = BrandedId<'SessionId'>;

export enum MessageRole {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
  TOOL = 'tool',
}

export interface ToolCall {
  readonly id: string;
  readonly name: string;
  readonly arguments: Record<string, unknown>;
}

export interface ToolResult {
  readonly toolCallId: string;
  readonly output: unknown;
  readonly isError?: boolean;
}

export interface ChatMessage {
  readonly id: MessageId;
  readonly role: MessageRole;
  readonly content: string;
  readonly timestamp: ISO8601Timestamp;
  readonly toolCalls?: readonly ToolCall[];
  readonly toolResults?: readonly ToolResult[];
}

export interface ChatRequest {
  readonly sessionId: SessionId;
  readonly modelId: string;
  readonly providerId: string;
  readonly messages: readonly ChatMessage[];
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly stream?: boolean;
}

export interface ChatResponse {
  readonly message: ChatMessage;
  readonly modelId: string;
  readonly providerId: string;
  readonly usageTokens: {
    readonly promptTokens: number;
    readonly completionTokens: number;
    readonly totalTokens: number;
  };
}

export interface StreamChunk {
  readonly chunkId: string;
  readonly deltaText: string;
  readonly isFinished: boolean;
  readonly finishReason?: string;
}
