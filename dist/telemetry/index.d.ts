/**
 * Telemetry Metrics, Trace Spans, and Observability.
 * @module @warborn/types/telemetry
 */
export declare enum MetricType {
    COUNTER = "COUNTER",
    GAUGE = "GAUGE",
    HISTOGRAM = "HISTOGRAM"
}
export interface TelemetryMetric {
    readonly name: string;
    readonly type: MetricType;
    readonly value: number;
    readonly timestamp: string;
    readonly labels: Record<string, string>;
}
export interface TraceSpan {
    readonly traceId: string;
    readonly spanId: string;
    readonly parentSpanId?: string;
    readonly name: string;
    readonly durationMs: number;
    readonly tags: Record<string, string>;
}
//# sourceMappingURL=index.d.ts.map