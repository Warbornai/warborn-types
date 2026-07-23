/**
 * Agent Lifecycle, Configuration, and Registry Types.
 * @module @warborn/types/agent
 */

import { BrandedId, ExecutionStatus, ISO8601Timestamp } from '../common';

export type AgentId = BrandedId<'AgentId'>;

export enum AgentRole {
  ORCHESTRATOR = 'ORCHESTRATOR',
  RESEARCHER = 'RESEARCHER',
  CODER = 'CODER',
  DESIGNER = 'DESIGNER',
  VISION_ANALYST = 'VISION_ANALYST',
  VOICE_OPERATOR = 'VOICE_OPERATOR',
  SECURITY_AUDITOR = 'SECURITY_AUDITOR',
}

export interface AgentCapabilities {
  readonly supportsStreaming: boolean;
  readonly supportsVision: boolean;
  readonly supportsVoice: boolean;
  readonly supportsToolCalling: boolean;
  readonly maxContextTokens: number;
  readonly allowedTools: readonly string[];
}

export interface AgentConfig {
  readonly id: AgentId;
  readonly name: string;
  readonly role: AgentRole;
  readonly description: string;
  readonly systemPrompt: string;
  readonly modelId: string;
  readonly providerId: string;
  readonly temperature: number;
  readonly capabilities: AgentCapabilities;
  readonly metadata?: Record<string, unknown>;
}

export interface AgentInstance {
  readonly config: AgentConfig;
  readonly status: ExecutionStatus;
  readonly createdAt: ISO8601Timestamp;
  readonly lastActiveAt: ISO8601Timestamp;
}
