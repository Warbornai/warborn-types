/**
 * Shared primitive and utility types used across the Warborn Platform.
 * @module @warborn/types/common
 */

/** Nominal/Branded ID helper for strong type safety */
export type BrandedId<T extends string> = string & { readonly __brand: T };

/** ISO 8601 Timestamp string representation */
export type ISO8601Timestamp = string;

/** General execution status enum */
export enum ExecutionStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  PAUSED = 'PAUSED',
}

/** Generic Key-Value dictionary */
export type KeyValueMap<T = unknown> = Record<string, T>;

/** Nullable type helper */
export type Nullable<T> = T | null;

/** Optional type helper */
export type Optional<T> = T | undefined;

/** Asynchronous Result Result/Error union pattern */
export type AsyncResult<T, E = Error> =
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly error: E };
