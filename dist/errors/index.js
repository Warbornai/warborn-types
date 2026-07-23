"use strict";
/**
 * Standardized Error Definitions and Error Codes for Warborn OS.
 * @module @warborn/types/errors
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.ErrorSeverity = void 0;
var ErrorSeverity;
(function (ErrorSeverity) {
    ErrorSeverity["INFO"] = "INFO";
    ErrorSeverity["WARNING"] = "WARNING";
    ErrorSeverity["ERROR"] = "ERROR";
    ErrorSeverity["FATAL"] = "FATAL";
})(ErrorSeverity || (exports.ErrorSeverity = ErrorSeverity = {}));
var ErrorCode;
(function (ErrorCode) {
    // System & Platform (1000-1999)
    ErrorCode["UNKNOWN_ERROR"] = "ERR_1000_UNKNOWN";
    ErrorCode["NOT_IMPLEMENTED"] = "ERR_1001_NOT_IMPLEMENTED";
    ErrorCode["SERVICE_UNAVAILABLE"] = "ERR_1002_SERVICE_UNAVAILABLE";
    ErrorCode["TIMEOUT"] = "ERR_1003_TIMEOUT";
    // Authentication & Security (2000-2999)
    ErrorCode["UNAUTHORIZED"] = "ERR_2000_UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "ERR_2001_FORBIDDEN";
    ErrorCode["INVALID_CREDENTIALS"] = "ERR_2002_INVALID_CREDENTIALS";
    ErrorCode["TOKEN_EXPIRED"] = "ERR_2003_TOKEN_EXPIRED";
    // Agent & Cortex Engine (3000-3999)
    ErrorCode["AGENT_NOT_FOUND"] = "ERR_3000_AGENT_NOT_FOUND";
    ErrorCode["MISSION_FAILED"] = "ERR_3001_MISSION_FAILED";
    ErrorCode["WORKFLOW_EXECUTION_ERROR"] = "ERR_3002_WORKFLOW_EXECUTION_ERROR";
    ErrorCode["CONTEXT_OVERFLOW"] = "ERR_3003_CONTEXT_OVERFLOW";
    // AI & Provider (4000-4999)
    ErrorCode["PROVIDER_UNAVAILABLE"] = "ERR_4000_PROVIDER_UNAVAILABLE";
    ErrorCode["MODEL_NOT_SUPPORTED"] = "ERR_4001_MODEL_NOT_SUPPORTED";
    ErrorCode["RATE_LIMIT_EXCEEDED"] = "ERR_4002_RATE_LIMIT_EXCEEDED";
    ErrorCode["TOOL_CALL_FAILED"] = "ERR_4003_TOOL_CALL_FAILED";
    // Vision & Voice (5000-5999)
    ErrorCode["FRAME_PROCESSING_ERROR"] = "ERR_5000_FRAME_PROCESSING_ERROR";
    ErrorCode["AUDIO_STREAM_DISCONNECTED"] = "ERR_5001_AUDIO_STREAM_DISCONNECTED";
    ErrorCode["TTS_SYNTHESIS_FAILED"] = "ERR_5002_TTS_SYNTHESIS_FAILED";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=index.js.map