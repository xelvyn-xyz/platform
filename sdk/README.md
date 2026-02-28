# @xelvyn/sdk
TypeScript SDK for the XELVYN autonomous agent deployment platform.
[![npm](https://img.shields.io/npm/v/@xelvyn/sdk)](https://www.npmjs.com/package/@xelvyn/sdk)
[![license](https://img.shields.io/npm/l/@xelvyn/sdk)](https://opensource.org/licenses/MIT)

## Install
```bash
npm install @xelvyn/sdk
```

Usage

```ts
import { XelvynClient } from '@xelvyn/sdk';
const client = new XelvynClient({ apiKey: 'your-api-key' });
// Deploy agent
const deployment = await client.agents.deploy({
  name: 'my-agent',
  template: 'yield',
  network: 'base',
  x402: true,
  xmtp: true
});
// Check x402 balance
const balance = await client.x402.balance('agent-alpha-7x');
// Read XMTP messages
const messages = await client.xmtp.list({ agentId: 'agent-alpha-7x' });
// Install skill
await client.skills.install('agent-alpha-7x', {
  name: 'yield-rebalancer',
  ai: 'openai'
});
```

Links

- Platform
- Documentation
- CLI
- Skills

License

MIT
