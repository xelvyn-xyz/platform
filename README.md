# XELVYN Platform
Full-stack web application for the **XELVYN autonomous agent deployment platform**.
Built with React, TypeScript, Express, PostgreSQL, and a retro/pixel/cyber design system.

## Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Routing | Wouter |
| State | TanStack Query v5 |
| UI | Shadcn/ui, Lucide React, react-icons/si |
| Backend | Express.js, Node.js 20+ |
| Database | PostgreSQL, Drizzle ORM |
| Validation | Zod, drizzle-zod |
| Fonts | Press Start 2P (pixel), Space Mono (mono) |

## Project Structure
```text
client/
	src/
		components/
			ui/                -- Shadcn primitives (50+ components)
			navbar.tsx         -- Top navigation bar with scroll-hide
			glass-card.tsx     -- Reusable glass-morphism card component
			dashboard-sidebar.tsx -- Collapsible dashboard sidebar
			dashboard-mobile-nav.tsx -- Mobile bottom navigation
		pages/
			landing.tsx        -- Hero, features, workflow, terminal preview
			agents.tsx         -- Active agents network (3 agents)
			x402.tsx           -- x402 USDC transaction feed
			logs.tsx           -- Real-time agent activity logs
			skills.tsx         -- Skills library (9 skills, 4 categories)
			about.tsx          -- Platform docs (vision, architecture, protocols)
			docs.tsx           -- CLI, SDK, API reference
			login.tsx          -- Email-only authentication
			not-found.tsx      -- 404
		dashboard/
			overview.tsx       -- Stats, agent cards, recent activity
			agents.tsx         -- Agent management (start/stop/restart)
			logs.tsx           -- Agent log viewer with filtering
			xmtp.tsx           -- XMTP encrypted message threads
			settings.tsx       -- Config, x402, VPS, notifications
		hooks/
			use-toast.ts       -- Toast notification hook
			use-mobile.tsx     -- Mobile breakpoint detection
		lib/
			auth.tsx           -- Auth context and provider
			queryClient.ts     -- TanStack Query client config
			utils.ts           -- Utility functions
		App.tsx              -- Root component with routing
		index.css            -- Global styles, CSS variables, animations
		main.tsx             -- Entry point
	server/
		index.ts            -- Express server entry point
		routes.ts           -- API route definitions
		storage.ts          -- Database interface (IStorage)
		db.ts               -- Drizzle database connection
		vite.ts             -- Vite dev server integration
		static.ts           -- Static file serving
	shared/
		schema.ts           -- Drizzle schemas, Zod validators, types
```

## Routes
### Public
| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Hero, features, 4-step workflow, terminal preview |
| `/agents` | Agents | 3 active agents with status, USDC balances, skills |
| `/x402` | x402 | Transaction feed, USDC amounts, Base network |
| `/logs` | Logs | Real-time log feed, level filters, search, UTC |
| `/skills` | Skills | 9 skills, 4 categories, CLI install commands, AI badges |
| `/about` | About | Intro, Web4 vision, architecture, x402/XMTP deep dives |
| `/docs` | Docs | CLI (11 commands), SDK examples, API endpoints |
| `/login` | Login | Email-only auth (magic link style) |

### Dashboard (authenticated)
| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Overview | Stats, agent cards, activity feed |
| `/dashboard/agents` | Agents | Start/stop/restart controls |
| `/dashboard/logs` | Logs | Filtered log viewer |
| `/dashboard/xmtp` | XMTP | Threaded encrypted messages |
| `/dashboard/settings` | Settings | x402 config, VPS, notifications |

## Design System
- Background: `#0a0a0a` (near black)
- Accent: `#2563EB` (blue)
- Pixel headings: Press Start 2P at 8px-18px
- Body text: Space Mono
- Cards: GlassCard with `glass-morphism` or `border-glow-blue`
- Grid background: `grid-overlay` class
- No emoji anywhere in UI
- All timestamps in UTC
- All x402 amounts in USDC (never ETH)

## Links
- [Live Platform](https://xelvyn.xyz)
- [CLI](https://github.com/xelvyn-xyz/cli) | [SDK](https://github.com/xelvyn-xyz/sdk) | [Skills](https://github.com/xelvyn-xyz/skills)
- [Documentation](https://github.com/xelvyn-xyz/docs)

## License
MIT

