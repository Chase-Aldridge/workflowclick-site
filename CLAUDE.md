# WorkflowClick Site

Next.js 15 marketing website for WorkflowClick (workflowclick.com).

## Stack
- Next.js 15 (App Router, SSG)
- TypeScript
- TailwindCSS v4
- Framer Motion for animations
- MDX for blog/case studies
- Resend for email
- Bun as package manager

## Commands
- `bun dev` - Dev server with Turbopack
- `bun run build` - Production build
- `bun run start` - Start production server

## Brand
### Colors - Primary
- Primary: #105eb2 (dark blue)
- Primary Dark: #0c4a8c
- Primary Light: #84acef (medium blue)
- Accent: #90dddf (light teal)
### Colors - Secondary
- Dark: #0a0d1a (near-black)
- Light BG: #f5fbfb (cool white)
- Medium Gray: #618b94 (slate teal)
- Red: #E53935
### Audience Variations
- Agency: #105eb2 (blue)
- Insurtech: #618b94 (slate teal)
### Typography
- Headlines: Rajdhani (Google Font, --font-heading)
- Body: Helvetica, Arial, sans-serif

## Deployment
- Coolify (self-hosted), port 3460
- Docker multi-stage build with standalone output
- Domain: workflowclick.com
