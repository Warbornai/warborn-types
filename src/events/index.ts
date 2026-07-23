/**
 * Event Bus, Payloads, and System Event Envelopes.
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
  readonly topic: EventTopic;
  readonly source: string;
  readonly timestamp: ISO8601Timestamp;
  readonly payload: T;
  readonly correlationId?: string;
}
