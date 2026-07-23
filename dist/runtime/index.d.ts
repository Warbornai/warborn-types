/**
 * Core Runtime Scheduler, Queue, and Worker Types.
 * @module @warborn/types/runtime
 */
import { BrandedId, ExecutionStatus } from '../common';
export type JobId = BrandedId<'JobId'>;
export interface TaskJob<T = unknown> {
    readonly id: JobId;
    readonly name: string;
    readonly payload: T;
    readonly priority: number;
    readonly retryCount: number;
    readonly maxRetries: number;
    readonly status: ExecutionStatus;
}
export interface WorkerStatus {
    readonly workerId: string;
    readonly isBusy: boolean;
    readonly currentJobId?: JobId;
    readonly totalJobsCompleted: number;
    readonly uptimeSeconds: number;
}
//# sourceMappingURL=index.d.ts.map