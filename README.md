# Jyvenche | Digital Product Studio

A premium, dark-luxury portfolio and project inquiry platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Dark Luxury Aesthetic**: High-contrast minimalist design with glassmorphism and smooth animations.
- **Dynamic Case Studies**: Data-driven project showcase with deep-dive technical details.
- **Robust Inquiry System**: Multi-step project onboarding with field-level validation and anti-spam protection.
- **Production Infrastructure**:
  - Global `loading.tsx` and `error.tsx` states.
  - Dynamic `sitemap.ts` and `robots.ts` for SEO.
  - Mobile-first accessibility (ARIA, focus management).
  - Optimized images and metadata (Favicon, OG images).

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Heroicons](https://heroicons.com/)

## Local Development Tips

- **Form Testing**: The inquiry form uses `/api/inquiry`. Ensure `RESEND_API_KEY` is set in `.env.local` to receive actual emails, or check the console logs in development.
- **Styling**: Custom styles are defined in `app/globals.css`. We use a custom `gold` accent color (`#D4AF37`) for highlights.
- **Content**: Most text content is centralized in `content/` as JSON files for easy editing without deep code changes.

## Documentation

Comprehensive guides are available in the `docs/` directory:
- [Launch Checklist](file:///Users/yvenelchevalier/.gemini/antigravity/scratch/jyvenche/docs/LAUNCH_CHECKLIST.md)
- [Client Workflow](file:///Users/yvenelchevalier/.gemini/antigravity/scratch/jyvenche/docs/CLIENT_WORKFLOW.md)
- [Notion Naming Convention](file:///Users/yvenelchevalier/.gemini/antigravity/scratch/jyvenche/docs/NOTION_NAMING_CONVENTION.md)
- [Client Portal Setup](file:///Users/yvenelchevalier/.gemini/antigravity/scratch/jyvenche/docs/NOTION_CLIENT_PORTAL.md)

## Getting Started

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Copy `.env.local.example` to `.env.local` and fill in your credentials.
   ```bash
   cp .env.local.example .env.local
   ```

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Build**:
   ```bash
   npm run build
   ```

## Project Structure

- `app/`: Routing and page components.
- `components/`: Reusable UI elements (cards, forms, layout, sections).
- `content/`: JSON-based data for pages and case studies.
- `lib/`: Utility functions, constants, and data fetching logic.
- `public/`: Static assets (fonts, images, icons).
- `types/`: Centralized TypeScript definitions.

## License

Private / Confidential. © 2026 Jyvenche.
