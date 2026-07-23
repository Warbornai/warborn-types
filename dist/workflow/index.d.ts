/**
 * Mission Engine, Workflows, and Execution Contexts.
 * @module @warborn/types/workflow
 */
import { BrandedId, ExecutionStatus, ISO8601Timestamp } from '../common';
export type MissionId = BrandedId<'MissionId'>;
export type StepId = BrandedId<'StepId'>;
export interface WorkflowStep {
    readonly id: StepId;
    readonly name: string;
    readonly agentId: string;
    readonly inputPayload: Record<string, unknown>;
    readonly outputResult?: Record<string, unknown>;
    readonly status: ExecutionStatus;
}
export interface Mission {
    readonly id: MissionId;
    readonly title: string;
    readonly description: string;
    readonly steps: readonly WorkflowStep[];
    readonly status: ExecutionStatus;
    readonly createdAt: ISO8601Timestamp;
    readonly completedAt?: ISO8601Timestamp;
}
//# sourceMappingURL=index.d.ts.map