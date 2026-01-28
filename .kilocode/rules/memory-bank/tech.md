# Technical Context: Next.js Starter Template

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16.x    | React framework with App Router |
| React        | 19.x    | UI library                      |
| TypeScript   | 5.9.x   | Type-safe JavaScript            |
| Tailwind CSS | 4.x     | Utility-first CSS               |
| npm          | Latest  | Package manager                 |

## Development Environment

### Prerequisites

- Node.js 20+ (required)

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## Project Configuration

### Next.js Config (`next.config.ts`)

- App Router enabled
- Default settings for flexibility

### TypeScript Config (`tsconfig.json`)

- Strict mode enabled
- Path alias: `@/*` → `src/*`
- Target: ESNext

### Tailwind CSS 4 (`postcss.config.mjs`)

- Uses `@tailwindcss/postcss` plugin
- CSS-first configuration (v4 style)

### ESLint (`eslint.config.mjs`)

- Uses `eslint-config-next`
- Flat config format

## Key Dependencies

### Production Dependencies

```json
{
  "next": "^16.1.3", // Framework
  "react": "^19.2.3", // UI library
  "react-dom": "^19.2.3" // React DOM
}
```

### Dev Dependencies

```json
{
  "typescript": "^5.9.3",
  "@types/node": "^24.10.2",
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@tailwindcss/postcss": "^4.1.17",
  "tailwindcss": "^4.1.17",
  "eslint": "^9.39.1",
  "eslint-config-next": "^16.0.0"
}
```

## File Structure

```
/
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── package-lock.json       # npm lockfile
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS (Tailwind) config
├── eslint.config.mjs       # ESLint configuration
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml          # GitHub Pages deployment
├── public/                 # Static assets
│   └── .gitkeep
└── src/                    # Source code
    └── app/                # Next.js App Router
        ├── layout.tsx      # Root layout
        ├── page.tsx        # Home page
        ├── globals.css     # Global styles
        └── favicon.ico     # Site icon
```

## Technical Constraints

### Starting Point

- Minimal structure - expand as needed
- No database by default (use recipe to add)
- No authentication by default (add when needed)

### Browser Support

- Modern browsers (ES2020+)
- No IE11 support

## Performance Considerations

### Image Optimization

- Use Next.js `Image` component for optimization
- Place images in `public/` directory

### Bundle Size

- Tree-shaking enabled by default
- Tailwind CSS purges unused styles

### Core Web Vitals

- Server Components reduce client JavaScript
- Streaming and Suspense for better UX

## Deployment

### GitHub Pages (Configured)

The app is configured for static export and automatic deployment to GitHub Pages:

1. **Next.js Config** ([`next.config.ts`](next.config.ts:1)):
   - `output: 'export'` - Enables static HTML export
   - `distDir: 'dist'` - Output directory for build
   - `images.unoptimized: true` - Required for static export

2. **GitHub Actions Workflow** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml:1)):
   - Automatically deploys on push to `main` branch
   - Can be manually triggered via `workflow_dispatch`

3. **Setup Instructions**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Push to main branch to trigger deployment

### Build Output

- Static HTML export to `dist/` directory
- Ready for GitHub Pages hosting

### Environment Variables

- None required for base template
- Add as needed for features
- Use `.env.local` for local development
