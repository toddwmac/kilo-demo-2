# Private Fairway Troubleshooting Guide

An interactive web application that helps golf simulator users troubleshoot common TrackMan issues at Private Fairway facilities.

## Overview

This Next.js application provides a step-by-step troubleshooting guide for resolving technical issues with TrackMan golf simulators. Users can browse common problems, follow guided solutions with interactive checklists, and track their progress through each fix.

## Features

### Problem Categories

The app covers 7 common simulator issues:

1. **Frozen Screen / Wrong Monitor** - Resolves display configuration problems
2. **Simulator Won't Connect** - Fixes TrackMan unit connectivity issues
3. **Can't Find Tournament** - Helps users access Private Fairway member tournaments
4. **Courses Locked / Subscription Error** - Resolves licensing and connection problems
5. **Handicap Required** - Guides users through handicap assignment
6. **Cameras Won't Activate** - Troubleshoots swing camera issues
7. **Blank Projector Screen** - Fixes projector power/display issues

### Interactive Elements

- **Expandable Problem Cards** - Click to reveal detailed solutions
- **Progress Tracking** - Checkboxes for each troubleshooting step with visual progress indicators
- **Quick Navigation** - Jump directly to any problem from the header
- **Related Issue Links** - Navigate between connected problems
- **Visual Feedback** - Completed steps are strikethrough and faded

## Architecture

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.9.x | Type-safe development |
| Tailwind CSS | 4.x | Utility-first styling |

### Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main troubleshooting guide (single-page app)
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Tailwind imports + global styles
│   └── favicon.ico       # Site icon
```

### Component Architecture

The application is built as a single-page React component with:

- **State Management**: React `useState` for active problem and completed steps
- **Data Structure**: Typed `Problem` interface with nested `subSolutions` support
- **Client-Side Interactivity**: Marked with `"use client"` for checkbox state and smooth scrolling

### Data Model

```typescript
interface Problem {
  id: string;                    // Unique identifier
  title: string;                 // Display title
  icon: string;                  // Emoji icon
  description: string;           // Problem explanation
  warning?: string;              // Optional critical warning
  steps: string[];               // Main solution steps
  subSolutions?: {               // Alternative solutions
    title: string;
    steps: string[];
  }[];
  note?: string;                 // Additional helpful info
  nextSection?: string;          // Related problem ID
}
```

### Styling Approach

- **Tailwind CSS 4** with utility-first classes
- **Dark theme** with slate/emerald color palette
- **Responsive design** with mobile-first breakpoints
- **Glass morphism effects** using backdrop blur and transparency
- **Smooth transitions** for interactive elements

## Development

### Prerequisites

- Node.js 20+
- npm

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # Run ESLint
npm run typecheck  # TypeScript checking
```

### Deployment

Configured for static export and GitHub Pages deployment:

1. Push to `main` branch triggers automatic deployment
2. Static files output to `dist/` directory
3. GitHub Actions workflow handles build and deploy

## Design Decisions

1. **Single-Page Application** - All content on one page for easy scrolling and quick access
2. **No Database** - Static content suitable for a troubleshooting guide
3. **Client Component** - Required for interactive checkboxes and smooth scroll behavior
4. **Progress Persistence** - Track completion within session (no storage needed for this use case)
5. **Emoji Icons** - Quick visual identification without external icon dependencies
