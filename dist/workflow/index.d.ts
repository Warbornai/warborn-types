/**
 * Mission Engine, Workflows, Reasoning, & Execution Plan Types.
 * @module @warborn/types/workflow
 */
import { BrandedId, ISO8601Timestamp } from '../common';
export type MissionId = BrandedId<'MissionId'>;
export type StepId = BrandedId<'StepId'>;
export type PlanId = BrandedId<'PlanId'>;
export type ArtifactId = BrandedId<'ArtifactId'>;
export type CheckpointId = BrandedId<'CheckpointId'>;
export declare enum ReasoningMode {
    DIRECT = "DIRECT",
    STEP_BY_STEP = "STEP_BY_STEP",
    TREE_OF_THOUGHT = "TREE_OF_THOUGHT",
    GRAPH_REASONING = "GRAPH_REASONING",
    REFLECTIVE = "REFLECTIVE",
    CONSENSUS = "CONSENSUS"
}
export declare enum MissionStatus {
    CREATED = "CREATED",
    PLANNING = "PLANNING",
    SCHEDULED = "SCHEDULED",
    RUNNING = "RUNNING",
    PAUSED = "PAUSED",
    CHECKPOINTED = "CHECKPOINTED",
    FAILED = "FAILED",
    RECOVERING = "RECOVERING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum MissionArtifactType {
    CODE = "CODE",
    DOCUMENT = "DOCUMENT",
    IMAGE = "IMAGE",
    REPORT = "REPORT",
    DATASET = "DATASET",
    LOG = "LOG"
}
export interface IntentAnalysisResult {
    readonly objective: string;
    readonly hiddenObjective?: string;
    readonly urgency: 'low' | 'medium' | 'high';
    readonly complexity: number;
    readonly requiredCapabilities: readonly string[];
    readonly confidence: number;
}
export interface GoalNode {
    readonly id: string;
    readonly title: string;
    readonly priority: number;
    readonly deadline?: string;
    readonly dependencies: readonly string[];
    readonly successCriteria: readonly string[];
    readonly subGoals: readonly GoalNode[];
}
export interface TaskDecompositionStep {
    readonly stepId: string;
    readonly description: string;
    readonly dependencies: readonly string[];
    readonly estimatedEffortMs: number;
    readonly criticalPath: boolean;
    readonly assignedAgentRole: string;
    readonly requiredTools: readonly string[];
}
export interface RiskAssessment {
    readonly failureProbability: number;
    readonly dependencyRisks: readonly string[];
    readonly resourceConflicts: readonly string[];
    readonly suggestedMitigations: readonly string[];
}
export interface ExecutionStage {
    readonly stageIndex: number;
    readonly steps: readonly TaskDecompositionStep[];
    readonly parallelExecution: boolean;
    readonly rollbackCheckpoint: boolean;
}
export interface ExecutionPlan {
    readonly planId: PlanId;
    readonly goal: string;
    readonly intent: IntentAnalysisResult;
    readonly reasoningMode: ReasoningMode;
    readonly rootGoal: GoalNode;
    readonly stages: readonly ExecutionStage[];
    readonly risk: RiskAssessment;
    readonly totalEstimatedMs: number;
    readonly createdAt: ISO8601Timestamp;
}
export interface WorkflowStep {
    readonly id: StepId;
    readonly name: string;
    readonly agentId: string;
    readonly inputPayload: Record<string, unknown>;
    readonly outputResult?: Record<string, unknown>;
    readonly status: MissionStatus;
}
export interface MissionArtifact {
    readonly id: ArtifactId;
    readonly missionId: MissionId;
    readonly name: string;
    readonly type: MissionArtifactType;
    readonly uri: string;
    readonly metadata: Record<string, unknown>;
    readonly createdAt: ISO8601Timestamp;
}
export interface MissionCheckpoint {
    readonly id: CheckpointId;
    readonly missionId: MissionId;
    readonly stageIndex: number;
    readonly stateSnapshot: Record<string, unknown>;
    readonly createdAt: ISO8601Timestamp;
}
export interface ApprovalRequest {
    readonly requestId: string;
    readonly missionId: MissionId;
    readonly requiredRole: string;
    readonly reason: string;
    readonly status: 'pending' | 'approved' | 'rejected';
    readonly requestedAt: ISO8601Timestamp;
}
export interface Mission {
    readonly id: MissionId;
    readonly title: string;
    readonly description: string;
    readonly goal: string;
    readonly priority: number;
    readonly owner: string;
    readonly organization: string;
    readonly workspace: string;
    readonly status: MissionStatus;
    readonly executionPlan?: ExecutionPlan;
    readonly steps: readonly WorkflowStep[];
    readonly artifacts: readonly MissionArtifact[];
    readonly checkpoints: readonly MissionCheckpoint[];
    readonly createdAt: ISO8601Timestamp;
    readonly updatedAt?: ISO8601Timestamp;
}
//# sourceMappingURL=index.d.ts.map