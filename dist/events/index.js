"use strict";
/**
 * Event Bus, Payloads, Broker, & Distributed Event Envelopes.
 * @module @warborn/types/events
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPriority = exports.EventCategory = exports.EventTopic = void 0;
var EventTopic;
(function (EventTopic) {
    EventTopic["AGENT_STARTED"] = "agent.started";
    EventTopic["AGENT_COMPLETED"] = "agent.completed";
    EventTopic["AGENT_FAILED"] = "agent.failed";
    EventTopic["WORKFLOW_STEP_EXECUTED"] = "workflow.step_executed";
    EventTopic["FRAME_PROCESSED"] = "vision.frame_processed";
    EventTopic["AUDIO_STREAM_STARTED"] = "voice.stream_started";
    EventTopic["SYSTEM_METRIC"] = "telemetry.metric";
})(EventTopic || (exports.EventTopic = EventTopic = {}));
var EventCategory;
(function (EventCategory) {
    EventCategory["SYSTEM"] = "SYSTEM";
    EventCategory["MISSION"] = "MISSION";
    EventCategory["AGENT"] = "AGENT";
    EventCategory["TOOL"] = "TOOL";
    EventCategory["MEMORY"] = "MEMORY";
    EventCategory["CONTEXT"] = "CONTEXT";
    EventCategory["REASONING"] = "REASONING";
    EventCategory["TELEMETRY"] = "TELEMETRY";
    EventCategory["SECURITY"] = "SECURITY";
    EventCategory["PLUGIN"] = "PLUGIN";
    EventCategory["WORKFLOW"] = "WORKFLOW";
    EventCategory["USER"] = "USER";
    EventCategory["CUSTOM"] = "CUSTOM";
})(EventCategory || (exports.EventCategory = EventCategory = {}));
var EventPriority;
(function (EventPriority) {
    EventPriority["LOW"] = "LOW";
    EventPriority["NORMAL"] = "NORMAL";
    EventPriority["HIGH"] = "HIGH";
    EventPriority["CRITICAL"] = "CRITICAL";
})(EventPriority || (exports.EventPriority = EventPriority = {}));
//# sourceMappingURL=index.js.map