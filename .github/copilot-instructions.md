# Copilot Instructions for vite-react

## Project Overview
- **Framework:** React (with TypeScript) using [Vite](https://vitejs.dev/) for fast development and HMR.
- **Structure:**
  - `src/` contains all source code, including `App.tsx` (main component), `main.tsx` (entry point), and assets.
  - `public/` for static assets.
  - Config files: `vite.config.ts`, `tsconfig.json`, `eslint.config.js`.

## Key Workflows
- **Development:**
  - Start dev server: `npm run dev`
  - Hot Module Replacement (HMR) is enabled by default.
- **Build:**
  - Production build: `npm run build`
- **Preview:**
  - Preview production build: `npm run preview`
- **Linting:**
  - Run ESLint: `npm run lint` (if defined in `package.json`)
- **Deployment:**
  - Deploy to Vercel: `vercel` (see README)

## Patterns & Conventions
- **Component Structure:**
  - Main app logic in `src/App.tsx`.
  - Entry point is `src/main.tsx`.
  - Use TypeScript for all components.
- **Styling:**
  - Use `App.css` and `index.css` for global and component styles.
- **Assets:**
  - Place images and static files in `src/assets/` or `public/`.
- **Configuration:**
  - Vite config in `vite.config.ts`.
  - TypeScript config in `tsconfig.json` and related files.

## Integration Points
- **External Services:**
  - Example deployment integration with Vercel (see README).
- **No custom backend or API integration is present by default.**

## Examples
- To add a new component, create a `.tsx` file in `src/` and import it in `App.tsx`.
- To add global styles, edit `src/index.css`.

## References
- See `README.md` for deployment and project info.
- See `vite.config.ts` for build and dev server customization.

---

**For AI agents:**
- Follow the above conventions for file placement and code structure.
- Use TypeScript and React best practices.
- Reference this file and `README.md` for project-specific workflows.
