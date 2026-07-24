"use strict";
/**
 * Provider Abstraction, Capabilities, and Health Metrics.
 * @module @warborn/types/provider
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderType = void 0;
var ProviderType;
(function (ProviderType) {
    ProviderType["AMAZON_BEDROCK"] = "AMAZON_BEDROCK";
    ProviderType["OPENAI"] = "OPENAI";
    ProviderType["ANTHROPIC"] = "ANTHROPIC";
    ProviderType["GOOGLE_GEMINI"] = "GOOGLE_GEMINI";
    ProviderType["AZURE_OPENAI"] = "AZURE_OPENAI";
    ProviderType["OLLAMA_LOCAL"] = "OLLAMA_LOCAL";
    ProviderType["CUSTOM_REST"] = "CUSTOM_REST";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
//# sourceMappingURL=index.js.map