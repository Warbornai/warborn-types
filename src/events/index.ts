/**
 * Event Bus, Payloads, Broker, & Distributed Event Envelopes.
 * @module @warborn/types/events
 */

import { BrandedId, ISO8601Timestamp } from '../common';

export type EventId = BrandedId<'EventId'>;

export enum EventTopic {
  AGENT_STARTED = 'agent.started',
  AGENT_COMPLETED = 'agent.completed',
  AGENT_FAILED = 'agent.failed',
  WORKFLOW_STEP_EXECUTED = 'workflow.step_executed',
  FRAME_PROCESSED = 'vision.frame_processed',
  AUDIO_STREAM_STARTED = 'voice.stream_started',
  SYSTEM_METRIC = 'telemetry.metric',
}

export interface EventEnvelope<T = unknown> {
  readonly id: EventId;
  readonly topic: EventTopic | string;
  readonly source: string;
  readonly timestamp: ISO8601Timestamp;
  readonly payload: T;
  readonly correlationId?: string;
}

export enum EventCategory {
  SYSTEM = 'SYSTEM',
  MISSION = 'MISSION',
  AGENT = 'AGENT',
  TOOL = 'TOOL',
  MEMORY = 'MEMORY',
  CONTEXT = 'CONTEXT',
  REASONING = 'REASONING',
  TELEMETRY = 'TELEMETRY',
  SECURITY = 'SECURITY',
  PLUGIN = 'PLUGIN',
  WORKFLOW = 'WORKFLOW',
  USER = 'USER',
  CUSTOM = 'CUSTOM',
}

export enum EventPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface CortexEvent<T = Record<string, unknown>> {
  readonly eventId: EventId;
  readonly eventType: string;
  readonly category: EventCategory;
  readonly version: string;
  readonly source: string;
  readonly tenant: string;
  readonly workspace: string;
  readonly correlationId?: string;
  readonly causationId?: string;
  readonly timestamp: ISO8601Timestamp;
  readonly priority: EventPriority;
  readonly payload: T;
  readonly metadata: Record<string, unknown>;
}

export interface QueueMessage<T = any> {
  readonly messageId: string;
  readonly topic: string;
  readonly payload: T;
  readonly priority: EventPriority;
  readonly timestamp: ISO8601Timestamp;
  readonly retryCount: number;
  readonly maxRetries: number;
}

export interface IMessageBroker {
  readonly brokerName: string;
  publish<T = any>(topic: string, event: CortexEvent<T>): Promise<void>;
  subscribe<T = any>(topic: string, handler: (event: CortexEvent<T>) => Promise<void>): () => void;
  broadcast<T = any>(event: CortexEvent<T>): Promise<void>;
}
