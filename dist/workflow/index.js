"use strict";
/**
 * Mission Engine, Workflows, Reasoning, & Execution Plan Types.
 * @module @warborn/types/workflow
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionArtifactType = exports.MissionStatus = exports.ReasoningMode = void 0;
var ReasoningMode;
(function (ReasoningMode) {
    ReasoningMode["DIRECT"] = "DIRECT";
    ReasoningMode["STEP_BY_STEP"] = "STEP_BY_STEP";
    ReasoningMode["TREE_OF_THOUGHT"] = "TREE_OF_THOUGHT";
    ReasoningMode["GRAPH_REASONING"] = "GRAPH_REASONING";
    ReasoningMode["REFLECTIVE"] = "REFLECTIVE";
    ReasoningMode["CONSENSUS"] = "CONSENSUS";
})(ReasoningMode || (exports.ReasoningMode = ReasoningMode = {}));
var MissionStatus;
(function (MissionStatus) {
    MissionStatus["CREATED"] = "CREATED";
    MissionStatus["PLANNING"] = "PLANNING";
    MissionStatus["SCHEDULED"] = "SCHEDULED";
    MissionStatus["RUNNING"] = "RUNNING";
    MissionStatus["PAUSED"] = "PAUSED";
    MissionStatus["CHECKPOINTED"] = "CHECKPOINTED";
    MissionStatus["FAILED"] = "FAILED";
    MissionStatus["RECOVERING"] = "RECOVERING";
    MissionStatus["COMPLETED"] = "COMPLETED";
    MissionStatus["CANCELLED"] = "CANCELLED";
})(MissionStatus || (exports.MissionStatus = MissionStatus = {}));
var MissionArtifactType;
(function (MissionArtifactType) {
    MissionArtifactType["CODE"] = "CODE";
    MissionArtifactType["DOCUMENT"] = "DOCUMENT";
    MissionArtifactType["IMAGE"] = "IMAGE";
    MissionArtifactType["REPORT"] = "REPORT";
    MissionArtifactType["DATASET"] = "DATASET";
    MissionArtifactType["LOG"] = "LOG";
})(MissionArtifactType || (exports.MissionArtifactType = MissionArtifactType = {}));
//# sourceMappingURL=index.js.map