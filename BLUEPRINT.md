# RoadLens Project Blueprint

## Project Overview
RoadLens is a Next.js application built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── news/
│   ├── projects/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── AnimatedSection.tsx
│   ├── ContactForm.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── NewsPreview.tsx
│   ├── ProjectsPreview.tsx
│   ├── ServicesPreview.tsx
│   └── Stats.tsx
public/

```

## Key Technologies
- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12.34.3** - Animations
- **Lucide React 0.575.0** - Icons

## Getting Started

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Development Notes

- All components are client components (marked with `'use client'`)
- Tailwind CSS is configured with PostCSS
- ESLint is configured with Next.js best practices
- Framer Motion is available for animations

---

Start building! 🚀
