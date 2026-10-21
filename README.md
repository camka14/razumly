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

`/classy`, `/classy/docs`, `/classy/data` and `/classy/support` contain Classy-specific product documentation and support. `/classy/privacy` contains the Classy privacy notice, including the shared technical data-handling sections. `/classy/dpa/v1` contains Version 1.0 of the Classy Customer Agreement, including its Customer Terms and DPA Details. `/privacy-policy` and `/delete-data` continue to describe the separate sports app.

The owner approved publication of the agreement and matching Classy privacy, export-documentation and support updates on 20 October 2026. `app/classy/privacy/page.tsx` reuses `DataHandling` rather than maintaining a second retention/deletion policy. The documented administrator-assisted export includes other owners' stored private Classy records and requires current Jira-administrator authorization.

The public agreement incorporates the unchanged Bonterms Standard End User Agreement v1.0 and Bonterms DPA v2.0 Attachment Version, including Exhibits A/B and the service-specific Details. Its 30-day subprocessor-notice promise is unchanged. Publication is not customer acceptance or proof of supplier safeguards; the Details require actual customer information before affected processing. The historical `_legal/ReviewMaterial.tsx` remains non-routable and is not the public agreement.

This website release does not submit or release the Marketplace app or change its pricing. Verify the public document, navigation, desktop/mobile layout, support commitments and unchanged sports-policy routes after deployment.

The sports privacy policy retains its already-published `10/5/2026` revision date instead of advancing it on every website build. Change that date only when that policy is actually revised; Classy publication leaves its wording and the sports deletion page unchanged.

The 20 October publication also updates the existing `source-map-js` dependency from 1.2.1 to 1.2.2 for [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q). The production dependency audit reports zero vulnerabilities after that patch; the production build, included lint/types, approved agreement text, desktop/mobile document layout and unchanged sports-policy checks pass.

The publication preparation updates Next within 15.x to `15.5.27` and overrides PostCSS with compatible `8.5.28`, resolving the observed production dependency advisories. Verify with `npm audit --package-lock-only --omit=dev`, `npm run build`, and a real browser check of Classy navigation, keyboard skip links, mobile layout and the unchanged sports-policy routes. The production audit and these build/browser checks passed on 2026-10-05; no broader security certification is claimed.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
