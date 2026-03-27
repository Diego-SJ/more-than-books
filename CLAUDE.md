# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

More Than Books is a Spanish-language content/marketing website for a Mexican organization. Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS. Content is managed via a headless Strapi CMS at `cms.mtbooks.com.mx`.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Cloudflare build:** `pnpm pages:build`

There is no test suite configured in this project.

## Architecture

### Data Flow — Strapi (Blog, Events, Contact)

Strapi CMS → Axios client (`src/lib/strapi.ts`) → data-fetching functions (`src/lib/events.ts`, `src/lib/posts.ts`, `src/lib/contact.ts`) → React Server Components

The Strapi client uses Bearer token auth via `NEXT_PUBLIC_STRAPI_API_TOKEN`. API responses are normalized through transform functions (`transformEventsArray`, `transformPost`) before reaching components. All data-fetching functions are wrapped with React's `cache()` for request deduplication.

### Data Flow — Supabase (Forum)

Supabase client (`src/lib/supabase.ts`) → forum data functions (`src/lib/forum.ts`) → React Query hooks (`src/lib/forum-queries.ts`) → Client Components under `src/app/foro/`

The forum uses Supabase for both auth and data (Postgres tables: `questions`, `answers`, `reactions`, `profiles`, `hashtags`, `question_hashtags`). There are two Supabase clients: `createClient()` in `src/lib/supabase.ts` for client components, and `createServerClient()` in `src/lib/supabase-server.ts` for server components (uses cookies). Auth is password-based (`signInWithPassword`/`signUp`) managed by `AuthProvider` in `src/components/forum/auth-provider.tsx`. Auth session is refreshed via middleware (`src/middleware.ts`) on all `/foro/*` routes. The forum layout (`src/app/foro/layout.tsx`) wraps children with `QueryProvider` (outer) then `AuthProvider` (inner) — order matters.

Forum data fetching uses TanStack React Query (stale time: 30s, 1 retry) with organized query keys (`forumKeys` in `forum-queries.ts`). Mutations auto-invalidate related queries on success. Answers support threading via `parent_answer_id` with `nestAnswers()` transforming flat arrays into trees.

The forum rich text editor uses Tiptap (`src/components/forum/rich-text-editor.tsx`) with link and placeholder extensions, configured with `immediatelyRender: false` to prevent hydration mismatch. User profiles have a `role` field (`'teacher' | 'user'`) exposed as `isTeacher` in the auth context.

### Strapi Field Naming

Strapi fields use a mix of Spanish and English names. Blog post fields are mostly Spanish (`Titulo`, `Descripcion`, `Contenido`, `Autor`, `Categoria`). Event fields are mostly English (`name`, `slug`, `content`, `event_data`, `event_time`). Transform functions in `src/lib/` normalize these to consistent English TypeScript interfaces (`BlogPost`, `Event`).

### Key Directories

- `src/app/` — Next.js App Router pages (routes: `/`, `/blog`, `/eventos`, `/contacto`, `/nosotros`, `/aviso-de-privacidad`, `/foro`)
- `src/components/ui/` — Shadcn/ui base components (configured via `components.json`)
- `src/components/` — Page-level and feature components
- `src/components/forum/` — Forum-specific components (auth, questions, answers, reactions)
- `src/lib/` — Strapi client, Supabase client, data fetching, utilities
- `src/types/` — TypeScript interfaces for `Event`, `BlogPost`, and forum types (`Question`, `Answer`, `Profile`, `Reaction`)

### Routing

Dynamic routes use slug-based params: `[blog_id]`, `[event_id]`, and `[question_id]`. Blog supports category filtering and search. Events split into upcoming/past using `dayjs` date comparisons (`filterIncomingEvents`/`filterPrevoiusEvents` in `src/lib/events.ts`). Forum routes under `/foro` include `/nueva-pregunta`, `/mi-panel`, `/iniciar-sesion`, `/registro`, and `[question_id]`.

### Styling

- Tailwind CSS with HSL CSS variables for theming (defined in `globals.css`)
- Custom fonts: Didact Gothic (primary), Roboto (secondary)
- AOS library for scroll-triggered animations
- `cn()` utility from `src/lib/utils.ts` for class merging (clsx + tailwind-merge)

### Content Rendering

Markdown content from Strapi is rendered using `next-mdx-remote` with remark-gfm, rehype-highlight, and rehype-slug plugins. Custom MDX components in `src/mdx-components.tsx` apply Tailwind classes and use `font-roboto` consistently.

### Conventions

- **Language**: All UI text is in Spanish. HTML locale is `es_ES`.
- **Search**: Uses accent-insensitive matching via `normalizeText()` and `includes()` in `src/lib/utils.ts` — important when filtering Spanish content.
- **Error handling**: Data-fetching functions return empty arrays/objects on error and log to console; they don't throw.
- **Forms**: Use `react-hook-form` for input handling (login, signup, contact forms).

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Deployment

The site targets Cloudflare Pages via `@cloudflare/next-on-pages` (`pnpm pages:build`). Image remote patterns are configured in `next.config.mjs` for `cms.mtbooks.com.mx` (Strapi), `api.dicebear.com` (avatars), and `source.unsplash.com`.

### Local Supabase

A local Supabase config exists at `supabase/config.toml` (PostgreSQL 17, REST on port 54321, Studio on 54323). No migrations are tracked in the repo.

## Environment Variables

- `NEXT_PUBLIC_STRAPI_API_URL` — Strapi CMS base URL
- `NEXT_PUBLIC_STRAPI_API_TOKEN` — Strapi API Bearer token
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL (forum)
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` — Supabase anon/public key (forum)
