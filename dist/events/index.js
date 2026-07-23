"use strict";
/**
 * Event Bus, Payloads, and System Event Envelopes.
 * @module @warborn/types/events
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTopic = void 0;
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
//# sourceMappingURL=index.js.map