"use strict";
/**
 * Shared primitive and utility types used across the Warborn Platform.
 * @module @warborn/types/common
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionStatus = void 0;
/** General execution status enum */
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["IDLE"] = "IDLE";
    ExecutionStatus["PENDING"] = "PENDING";
    ExecutionStatus["RUNNING"] = "RUNNING";
    ExecutionStatus["COMPLETED"] = "COMPLETED";
    ExecutionStatus["FAILED"] = "FAILED";
    ExecutionStatus["CANCELLED"] = "CANCELLED";
    ExecutionStatus["PAUSED"] = "PAUSED";
})(ExecutionStatus || (exports.ExecutionStatus = ExecutionStatus = {}));
//# sourceMappingURL=index.js.map