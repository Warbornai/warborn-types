/**
 * Computer Vision Pipelines, Frames, Detection, and OCR.
 * @module @warborn/types/vision
 */

import { BrandedId, ISO8601Timestamp } from '../common';

export type FrameId = BrandedId<'FrameId'>;

export interface BoundingBox {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface DetectedObject {
  readonly label: string;
  readonly confidence: number;
  readonly box: BoundingBox;
}

export interface OCRResult {
  readonly text: string;
  readonly confidence: number;
  readonly boundingBox?: BoundingBox;
}

export interface VisionFrame {
  readonly id: FrameId;
  readonly width: number;
  readonly height: number;
  readonly timestamp: ISO8601Timestamp;
  readonly objects: readonly DetectedObject[];
  readonly ocrResults: readonly OCRResult[];
}
