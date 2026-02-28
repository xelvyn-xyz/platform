# @xelvyn/cli
Command-line interface for the XELVYN autonomous agent deployment platform.
[![npm](https://img.shields.io/npm/v/@xelvyn/cli)](https://www.npmjs.com/package/@xelvyn/cli)
[![license](https://img.shields.io/npm/l/@xelvyn/cli)](https://opensource.org/licenses/MIT)

## Install
```bash
npm install -g @xelvyn/cli
```

Quick Start

```bash
xelvyn login
xelvyn init my-agent --template yield --network base
xelvyn skill install yield-rebalancer --ai openai
xelvyn deploy --x402 --xmtp
xelvyn status my-agent --live
```

Commands

| Command | Description |
|--------:|-------------|
| xelvyn login | Authenticate with XELVYN |
| xelvyn init <name> | Initialize new agent project |
| xelvyn deploy | Deploy agent to isolated VPS |
| xelvyn status <name> | Check agent health and status |
| xelvyn logs <name> | View agent execution logs |
| xelvyn stop <name> | Stop a running agent |
| xelvyn restart <name> | Restart an agent |
| xelvyn x402 balance | Check x402 USDC balance |
| xelvyn x402 history | View x402 transaction history |
| xelvyn xmtp read | Read XMTP message history |
| xelvyn skill install <name> | Install a skill |
| xelvyn skill list | List installed skills |
| xelvyn skill remove <name> | Remove a skill |
| xelvyn config set <key> <val> | Set configuration |
| xelvyn config get <key> | Get configuration value |

Deploy Flags

| Flag | Description |
|------|-------------|
| --x402 | Enable x402 payment channel (USDC on Base) |
| --xmtp | Enable XMTP encrypted messaging |
| --dry-run | Simulate deployment without provisioning |

Links

- Platform
- SDK
- Skills

License

MIT
