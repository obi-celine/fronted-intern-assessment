# Tobams Group Landing Page

A responsive Next.js App Router implementation of the Tobams Group frontend assessment design.

## Live URL

Add the deployed Vercel URL here after publishing: `https://your-project.vercel.app`

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS v4
- `next/font`-ready project structure
- Vercel Analytics in production
- shadcn/ui

## Page sections

The landing page is composed of the following sections, in order:

1. Header and responsive navigation
2. Hero introduction with primary call to action
3. Learning Management System overview
4. Corporate training programs
5. Individual training programs
6. Management development content
7. Transformation hub feature section
8. Training the consultant section
9. Testimonials carousel
10. Final call-to-action banner
11. Footer with navigation, registered offices, contact details, and legal links

## Design decisions

- The desktop composition follows the supplied reference screenshot, including the testimonial carousel, CTA banner, and footer layout.
- Responsive layout rules adapt the navigation, hero, content sections, cards, carousel, CTA, footer columns, office panel, and legal links for mobile, tablet, and desktop screens.
- The supplied Tobams Group logo is used locally from `public/logo-bg.png` rather than an external runtime URL.
- The CTA uses the specified primary button color: `#571244`.
- Components are kept in `app/components/` and the page composition is assembled in `app/page.tsx`.

## Technical assumptions

- The supplied static copy and testimonial content are representative content for the assessment page.
- Anchor links are used for static navigation until destination pages are added.
- The live URL and public GitHub repository link should be filled in after deployment and repository setup.

## Reference

Figma design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

Claude and v0 were used to assist in the development, design implementation, and code review of the UI, alongside shadcn/ui components for key interactive sections like the carousel.

## Known issues

The navigation destinations are static anchor targets because the assessment scope is a single-page implementation. Content imagery is represented by the available local assets where the original source assets were not included in the project archive.
