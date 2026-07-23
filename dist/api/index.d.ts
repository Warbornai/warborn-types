/**
 * Standard API Request and Response Data Transfer Objects.
 * @module @warborn/types/api
 */
import { WarbornErrorPayload } from '../errors';
/** Standardized API response wrapper */
export interface ApiResponse<T> {
    readonly success: boolean;
    readonly data?: T;
    readonly error?: WarbornErrorPayload;
    readonly meta?: ApiMeta;
}
/** API Metadata for pagination and telemetry */
export interface ApiMeta {
    readonly requestId: string;
    readonly timestamp: string;
    readonly executionTimeMs: number;
    readonly pagination?: PaginationMeta;
}
/** Pagination query parameters */
export interface PaginationParams {
    readonly page: number;
    readonly limit: number;
    readonly sortBy?: string;
    readonly sortOrder?: 'asc' | 'desc';
}
/** Pagination response metadata */
export interface PaginationMeta {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly totalItems: number;
    readonly itemsPerPage: number;
    readonly hasNextPage: boolean;
    readonly hasPrevPage: boolean;
}
//# sourceMappingURL=index.d.ts.map