# SUCESU SP AI Academy - Landing Page

## Overview

This is a marketing landing page for **SUCESU SP Academy**, an AI training program for IT executives and professionals in São Paulo, Brazil. The site promotes a 12-hour AI immersion course with sections covering course info, pricing, speaker details, FAQ, and a lead capture form.

The app is a full-stack TypeScript project with a React frontend and an Express backend. The backend's primary job is to capture leads (name + email) submitted through the contact form and store them in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React (with Vite as the build tool)
- **Routing**: `wouter` — a lightweight client-side router. Only two routes exist: `/` (Home) and a catch-all 404 page.
- **State/Data Fetching**: TanStack React Query (`@tanstack/react-query`) for server state management. The `queryClient` is configured with `staleTime: Infinity` and no auto-refetch.
- **UI Components**: shadcn/ui (New York style) built on top of Radix UI primitives. The full component library is included in `client/src/components/ui/`.
- **Styling**: Tailwind CSS with CSS custom properties for theming. Uses a blue/white tech color palette. Fonts: Outfit (display) and Plus Jakarta Sans (body), loaded from Google Fonts.
- **Animations**: Framer Motion for scroll-triggered entrance animations and page transitions.
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`.

### Page Structure

The single Home page (`client/src/pages/Home.tsx`) is composed of these sections in order:
1. `Navbar` — Fixed top nav with scroll detection and mobile hamburger menu
2. `Hero` — Main headline with CTA buttons
3. `CourseInfo` — Course modules and features
4. `Pricing` — Three pricing tiers (Diretoria, Associados, Externo) linking to Sympla for registration
5. `Speaker` — Instructor profile section
6. `About` — About SUCESU SP organization
7. `FAQ` — Expandable FAQ accordion
8. `LeadForm` — Lead capture form (name + email)
9. `Footer` — Links, social icons, contact info

### Backend Architecture

- **Framework**: Express 5 running on Node.js, served via `tsx` in development and compiled with `esbuild` for production.
- **Entry point**: `server/index.ts` creates an HTTP server, registers routes, and serves static assets.
- **API Routes**: Defined in `server/routes.ts`. Currently only one endpoint:
  - `POST /api/leads` — validates input with Zod and stores a lead in the database.
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface and a `DatabaseStorage` class. This abstraction makes it easy to swap storage implementations.
- **Shared Contract**: `shared/routes.ts` defines the API contract (path, method, input schema, response schemas) shared between frontend and backend. The frontend `useCreateLead` hook consumes this contract directly, keeping API calls type-safe without a separate client library.

### Data Storage

- **Database**: PostgreSQL via `drizzle-orm/node-postgres`
- **ORM**: Drizzle ORM with `drizzle-zod` for auto-generating Zod schemas from table definitions
- **Schema** (`shared/schema.ts`):
  - `leads` table: `id` (serial PK), `name` (text, not null), `email` (text, not null), `createdAt` (timestamp, default now)
- **Migrations**: Managed with `drizzle-kit`. Run `npm run db:push` to push schema changes.
- **Connection**: Requires `DATABASE_URL` environment variable. The pool is created in `server/db.ts`.

### Build & Dev Setup

- **Development**: Vite dev server runs in middleware mode inside Express (`server/vite.ts`), enabling HMR through the same HTTP server.
- **Production build**: `script/build.ts` runs Vite for the client (output to `dist/public`) and esbuild for the server (output to `dist/index.cjs`). A curated allowlist of packages is bundled with the server to reduce cold start times.
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`.

### Authentication

No authentication is implemented. The app is a public-facing landing page.

## External Dependencies

| Dependency | Purpose |
|---|---|
| **PostgreSQL** | Primary data store for leads. Requires `DATABASE_URL` env variable. |
| **Sympla** | External ticketing platform. Pricing CTAs link to `sympla.com.br` for course registration. No API integration — outbound links only. |
| **Google Fonts** | Outfit, Plus Jakarta Sans, DM Sans, Fira Code, Geist Mono loaded via `<link>` tags in `index.html`. |
| **Replit Vite plugins** | `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — only active in development on Replit. |

### Key NPM Packages

- `framer-motion` — animations
- `wouter` — client-side routing
- `react-hook-form` + `@hookform/resolvers` + `zod` — form validation
- `drizzle-orm` + `drizzle-zod` + `pg` — database ORM
- `@tanstack/react-query` — server state management
- `lucide-react` — icons
- All `@radix-ui/*` packages — headless UI primitives for shadcn/ui components