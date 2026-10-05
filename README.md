This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Classy documentation

`/classy`, `/classy/docs`, `/classy/data` and `/classy/support` contain Classy-specific product documentation and support. `/privacy-policy` and `/delete-data` continue to describe the separate sports app.

`app/classy/_legal/ReviewMaterial.tsx` is non-routable review material, not an approved privacy policy or executed agreement. Do not expose privacy/terms/DPA routes until the actual Provider details and wording are approved.

The publication preparation updates Next within 15.x to `15.5.27` and overrides PostCSS with compatible `8.5.28`, resolving the observed production dependency advisories. Verify with `npm audit --package-lock-only --omit=dev`, `npm run build`, and a real browser check of Classy navigation, keyboard skip links, mobile layout and the unchanged sports-policy routes. The production audit and these build/browser checks passed on 2026-10-05; no broader security certification is claimed.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
