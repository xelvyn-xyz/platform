# Changelog

All notable changes to this project are documented in this file.

## [0.1.0-beta.1] - 2026-02-28

### Added
- Frontend global CSS classes: `grid-overlay`, `glass-morphism`, `border-glow-blue`, `btn-primary-gradient`, `btn-secondary-glass`, `cyber-topbar`, `health-pulse` (client/src/index.css).
- `GlassCard` reusable component with glass-morphism and optional glow/hover (client/src/components/glass-card.tsx).
- `Navbar`, `DashboardSidebar`, `DashboardMobileNav`, `LayoutWrapper`, `PublicLayout`, `DashboardLayout` and many pages (landing, agents, x402, logs, skills, about, docs, login, not-found, dashboard/*).
- TanStack Query client and `apiRequest` helper (client/src/lib/queryClient.ts).
- Auth provider and client-side auth flow (client/src/lib/auth.tsx).
- Server auth routes: `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me` (server/routes.ts).
- Drizzle schema for `users` and exported Zod/TypeScript types (shared/schema.ts).
- Database storage implementation using Drizzle ORM: `getUser`, `getUserByEmail`, `createUser` (server/storage.ts).
- Type definitions for `connect-pg-simple` to satisfy TypeScript.

### Changed / Fixed
- Removed unused imports and fixed multiple TypeScript errors across the codebase.
- Ensured all interactive elements include `data-testid` attributes for testing.
- Updated server routing, session typing, and error handling in auth routes.
- Vite and build configuration fixes; production build verified (`vite build` succeeded).

### Notes
- Design: retro pixel cyber aesthetic, background `#0a0a0a`, accent `#2563EB`, Press Start 2P for headings, Space Mono for body text.
- x402 amounts are represented in USDC and timestamps use UTC across the UI.

---

For details about individual changes, see the corresponding files in the repository.
