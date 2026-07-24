/**
 * Universal Tool Contract, Capabilities, & Execution Types.
 * @module @warborn/types/tools
 */

import { BrandedId, ISO8601Timestamp } from '../common';

export type ToolId = BrandedId<'ToolId'>;

export enum ToolCategory {
  SYSTEM = 'SYSTEM',
  FILESYSTEM = 'FILESYSTEM',
  NETWORK = 'NETWORK',
  CLOUD = 'CLOUD',
  DATABASE = 'DATABASE',
  REPOSITORY = 'REPOSITORY',
  AI_AGENT = 'AI_AGENT',
  CUSTOM = 'CUSTOM',
}

export type ToolPermission =
  | 'file.read'
  | 'file.write'
  | 'network.access'
  | 'shell.execute'
  | 'memory.read'
  | 'memory.write'
  | 'cloud.manage'
  | 'policy.override';

export interface ToolHealth {
  readonly toolId: string;
  readonly status: 'healthy' | 'degraded' | 'unhealthy';
  readonly latencyMs: number;
  readonly timestamp: ISO8601Timestamp;
  readonly error?: string;
}

export interface ToolExecutionResult {
  readonly toolId: string;
  readonly status: 'success' | 'failure' | 'cancelled';
  readonly output: Record<string, unknown>;
  readonly error?: string;
  readonly latencyMs: number;
  readonly costUsd: number;
  readonly timestamp: ISO8601Timestamp;
}

export interface ITool {
  readonly id: ToolId;
  readonly name: string;
  readonly description: string;
  readonly category: ToolCategory;
  readonly version: string;
  readonly capabilities: readonly string[];
  readonly permissions: readonly ToolPermission[];
  readonly inputSchema: Record<string, unknown>;
  readonly outputSchema: Record<string, unknown>;
  execute(input: Record<string, unknown>, context?: any): Promise<ToolExecutionResult>;
  validate(input: Record<string, unknown>): Promise<boolean>;
  health(): Promise<ToolHealth>;
  estimateCost(input: Record<string, unknown>): number;
  estimateDuration(input: Record<string, unknown>): number;
}

export interface ISandboxHost {
  readonly sandboxName: string;
  executeInSandbox(tool: ITool, input: Record<string, unknown>): Promise<ToolExecutionResult>;
}
