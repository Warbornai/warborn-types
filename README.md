# ⚡ @warborn/types

> **Single Source of Truth for shared TypeScript type definitions across the Warborn OS platform.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 📦 Installation

```bash
npm install @warborn/types
# or
pnpm add @warborn/types
```

---

## 🏗️ Folder & Module Architecture

* **`@warborn/types/common`**: Branded IDs, timestamps, execution status, async result helpers.
* **`@warborn/types/agent`**: Agent configurations, roles, capability descriptors.
* **`@warborn/types/chat`**: Multi-provider message formats, tool calling DTOs, stream chunks.
* **`@warborn/types/context`**: Embeddings, context chunks, and memory record structures.
* **`@warborn/types/vision`**: Bounding boxes, object detection, OCR results, vision frame definitions.
* **`@warborn/types/voice`**: Audio frame encoding, speech synthesis requests, voice stream controls.
* **`@warborn/types/workflow`**: Mission engine DTOs, workflow steps, execution contexts.
* **`@warborn/types/errors`**: Standardized error codes and error payloads.

---

## 💡 Usage Example

```typescript
import { AgentConfig, AgentRole, ExecutionStatus, BrandedId } from '@warborn/types';

const agent: AgentConfig = {
  id: 'agent_123' as BrandedId<'AgentId'>,
  name: 'Cortex Orchestrator',
  role: AgentRole.ORCHESTRATOR,
  description: 'Primary AI system agent',
  systemPrompt: 'You are an intelligent assistant.',
  modelId: 'gpt-4o',
  providerId: 'OPENAI',
  temperature: 0.7,
  capabilities: {
    supportsStreaming: true,
    supportsVision: true,
    supportsVoice: true,
    supportsToolCalling: true,
    maxContextTokens: 128000,
    allowedTools: ['mcp_web_search', 'mcp_file_reader']
  }
};
```

---

## 📄 License

MIT © 2026 Warborn Technologies
