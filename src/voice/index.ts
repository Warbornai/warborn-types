/**
 * Real-Time Voice Synthesis, Audio Frames, and Streaming.
 * @module @warborn/types/voice
 */

import { ISO8601Timestamp } from '../common';

export enum AudioEncoding {
  PCM_16BIT = 'PCM_16BIT',
  OPUS = 'OPUS',
  MP3 = 'MP3',
  WAV = 'WAV',
}

export interface AudioFrame {
  readonly sequenceNumber: number;
  readonly sampleRate: number;
  readonly channels: number;
  readonly encoding: AudioEncoding;
  readonly payloadBase64: string;
  readonly timestamp: ISO8601Timestamp;
}

export interface VoiceSynthesisRequest {
  readonly text: string;
  readonly voiceId: string;
  readonly speed?: number;
  readonly pitch?: number;
  readonly encoding?: AudioEncoding;
}
