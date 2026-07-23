/**
 * Authentication, Authorization, Role-Based Access Control (RBAC).
 * @module @warborn/types/auth
 */

import { BrandedId } from '../common';

export type UserId = BrandedId<'UserId'>;
export type OrganizationId = BrandedId<'OrganizationId'>;
export type WorkspaceId = BrandedId<'WorkspaceId'>;

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ORG_ADMIN = 'ORG_ADMIN',
  DEVELOPER = 'DEVELOPER',
  MEMBER = 'MEMBER',
  GUEST = 'GUEST',
}

export enum Permission {
  MANAGE_ORG = 'org:manage',
  MANAGE_AGENTS = 'agents:manage',
  EXECUTE_WORKFLOW = 'workflow:execute',
  READ_METRICS = 'metrics:read',
  WRITE_SETTINGS = 'settings:write',
  ACCESS_API = 'api:access',
}

export interface UserProfile {
  readonly id: UserId;
  readonly email: string;
  readonly fullName: string;
  readonly avatarUrl?: string;
  readonly role: UserRole;
  readonly organizationId: OrganizationId;
  readonly activeWorkspaceId: WorkspaceId;
  readonly permissions: readonly Permission[];
  readonly createdAt: string;
}

export interface AuthSession {
  readonly user: UserProfile;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresAt: number;
}
