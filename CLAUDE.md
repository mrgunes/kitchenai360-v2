# KitchenAI360 Development Rules

## Product Reality
KitchenAI360 is an early-stage AI kitchen planning platform.
Do not present it as a mature enterprise platform.

Avoid:
- fake testimonials
- fake customer logos
- fake metrics
- claims of guaranteed compliance or certification

Use conservative, credible language.

## Technology Stack
Next.js App Router
React
TypeScript
Tailwind CSS
shadcn/ui
Framer Motion
Zustand only if shared client state is required
React Hook Form
Zod
Prisma
PostgreSQL
Resend
Vercel Analytics
Vercel Speed Insights

## Architecture Rules
Do not introduce:
- authentication
- dashboards
- websocket infrastructure
- background job queues
- realtime systems

This is a **marketing + lead generation website**.

## Code Quality
Components must be modular.
Avoid duplicated UI logic.
Prefer shared primitives.

Forms must include:
- client validation
- server validation
- accessible labels
- clear error states

## Design Direction
Modern architectural SaaS style.

Clean layout
Light background
Dark navy typography
Orange accent
Minimal motion

Avoid neon AI aesthetics.

## Implementation Method
Do not generate the full codebase at once.

Work in phases:
1. Architecture
2. Layout system
3. Homepage sections
4. Lead capture forms
5. Content engine
6. SEO infrastructure
7. Email + analytics plumbing


## Dependency Discipline

Do not introduce additional libraries unless clearly justified.

Avoid adding:
- state managers beyond Zustand
- CSS frameworks beyond Tailwind
- UI frameworks beyond shadcn/ui
- CMS platforms
- authentication systems
- background job systems

Prefer simple in-repo solutions first.

## Product Honesty

Do not present conceptual product UI, dashboards, or AI workflows as proven production functionality.
Any illustrative UI must be clearly treated as conceptual or placeholder where appropriate.