# @xelvyn/skills
Pre-built agent capabilities for the XELVYN autonomous agent platform.
[![npm](https://img.shields.io/npm/v/@xelvyn/skills)](https://www.npmjs.com/package/@xelvyn/skills)
[![license](https://img.shields.io/npm/l/@xelvyn/skills)](https://opensource.org/licenses/MIT)

## Install via CLI
```bash
xelvyn skill install yield-rebalancer
xelvyn skill install yield-rebalancer --ai openai
xelvyn skill install wallet-guard --ai claude
```

Available Skills

DeFi

| Skill | Description | AI |
|------:|-------------|----|
| yield-rebalancer | Auto-rebalance DeFi positions for optimal yield | OpenAI, Claude |
| liquidity-manager | Manage liquidity pool positions and IL mitigation | OpenAI, Claude |
| defi-arbitrage | Cross-protocol arbitrage detection and execution | OpenAI |

Security

| Skill | Description | AI |
|------:|-------------|----|
| wallet-guard | Monitor wallets for suspicious activity | Claude |
| risk-monitor | Track portfolio risk metrics and exposure | OpenAI, Claude |
| contract-auditor | Analyze smart contract interactions for risks | Claude |

Infrastructure

| Skill | Description | AI |
|------:|-------------|----|
| gas-optimizer | Predict and optimize gas costs | OpenAI |
| health-checker | Monitor agent and VPS health metrics | -- |

Data

| Skill | Description | AI |
|------:|-------------|----|
| price-oracle | Aggregate price data from multiple on-chain sources | OpenAI |

Programmatic Usage

```ts
import { listSkills, getSkill, getSkillsByCategory } from '@xelvyn/skills';
const all = listSkills();
const defi = getSkillsByCategory('defi');
const skill = getSkill('yield-rebalancer');
```

Links

- Platform
- Skills Library
- CLI
- SDK

License

MIT
