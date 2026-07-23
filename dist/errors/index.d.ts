/**
 * Standardized Error Definitions and Error Codes for Warborn OS.
 * @module @warborn/types/errors
 */
export declare enum ErrorSeverity {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    FATAL = "FATAL"
}
export declare enum ErrorCode {
    UNKNOWN_ERROR = "ERR_1000_UNKNOWN",
    NOT_IMPLEMENTED = "ERR_1001_NOT_IMPLEMENTED",
    SERVICE_UNAVAILABLE = "ERR_1002_SERVICE_UNAVAILABLE",
    TIMEOUT = "ERR_1003_TIMEOUT",
    UNAUTHORIZED = "ERR_2000_UNAUTHORIZED",
    FORBIDDEN = "ERR_2001_FORBIDDEN",
    INVALID_CREDENTIALS = "ERR_2002_INVALID_CREDENTIALS",
    TOKEN_EXPIRED = "ERR_2003_TOKEN_EXPIRED",
    AGENT_NOT_FOUND = "ERR_3000_AGENT_NOT_FOUND",
    MISSION_FAILED = "ERR_3001_MISSION_FAILED",
    WORKFLOW_EXECUTION_ERROR = "ERR_3002_WORKFLOW_EXECUTION_ERROR",
    CONTEXT_OVERFLOW = "ERR_3003_CONTEXT_OVERFLOW",
    PROVIDER_UNAVAILABLE = "ERR_4000_PROVIDER_UNAVAILABLE",
    MODEL_NOT_SUPPORTED = "ERR_4001_MODEL_NOT_SUPPORTED",
    RATE_LIMIT_EXCEEDED = "ERR_4002_RATE_LIMIT_EXCEEDED",
    TOOL_CALL_FAILED = "ERR_4003_TOOL_CALL_FAILED",
    FRAME_PROCESSING_ERROR = "ERR_5000_FRAME_PROCESSING_ERROR",
    AUDIO_STREAM_DISCONNECTED = "ERR_5001_AUDIO_STREAM_DISCONNECTED",
    TTS_SYNTHESIS_FAILED = "ERR_5002_TTS_SYNTHESIS_FAILED"
}
/** Standardized Warborn Error Payload */
export interface WarbornErrorPayload {
    readonly code: ErrorCode;
    readonly message: string;
    readonly severity: ErrorSeverity;
    readonly timestamp: string;
    readonly details?: Record<string, unknown>;
    readonly stack?: string;
}
//# sourceMappingURL=index.d.ts.map