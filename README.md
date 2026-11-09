# Razumly

The company website at [razumly.com](https://www.razumly.com/), built with plain HTML, CSS and JavaScript. Vite handles local development and static asset bundling; the deployed website has no React or Next.js runtime.

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The development server listens at `http://127.0.0.1:5173`.

```sh
npm run build
npm start
```

The production output is `dist/`; the preview server listens at `http://127.0.0.1:4173`.

## Website

- `index.html`: company homepage, products, founders, services and contact links.
- `styles.css`: responsive layouts, light/dark themes and reduced-motion styles.
- `script.js`: copyright year. Content and navigation also work without JavaScript.
- `public/icon.svg` and `public/primary-logo.svg`: Razumly branding.
- `public/images/`: responsive project screenshots and the social preview image.
- `public/fonts/`: self-hosted Archivo and Manrope with their OFL licenses.
- `design/`: the initial concept and desktop/mobile implementation images; these are not deployed.

BracketIQ is the featured product. DC Redesign and Brixivo link to their live websites; Rolemesh is marked work in progress with an inquiry link, and Classy is available on the Atlassian Marketplace. Founder profiles link to their LinkedIn pages. Project screenshots were reused from the [founder's portfolio](https://github.com/camka14/portfolio).

### Business automation and integrations

The homepage presents workflow-first services alongside the portfolio: inquiry follow-up, field/office handoffs, draft quotes/orders, and reporting or exception queues. These are prospective examples, not delivered-project claims. Existing tools come before custom software; AI is optional.

Workflow calls to action use the existing `support@razumly.com` mailbox with an editable email prompt and direct-email fallback. No form backend was added. DC Redesign describes verified website capabilities and labels the screenshot as a redesign preview, not evidence of the currently deployed design. No outcomes or client endorsements are claimed.

Footer links explicitly distinguish Sports MVP privacy/deletion policies and Classy's privacy notice. A corporate-site privacy notice requires confirmed hosting/logging, analytics/cookies, inquiry/email processing, retention/deletion practices, responsible entity/contact, and applicable jurisdictions; none have been invented.

Verification: production build passed; browser overflow checks passed at 320, 390, 768, and 1440 pixels. Desktop light/mobile dark layouts, section anchors, mailto contents, and policy destinations were checked. Policy routes returned HTTP 200 and fit the mobile viewport. No automated test or lint script is configured. Email delivery was not tested and no messages were sent.

### Classy Marketplace launch

The homepage, `/classy` overview and `/classy/docs` setup instructions link to [Classy's public Marketplace listing](https://marketplace.atlassian.com/apps/760754966/classy) for installation, trials and current pricing. Existing customer terms, privacy disclosures and input restrictions are unchanged.

`/classy#demo` hosts the approved, privacy-masked demonstration at `public/classy/classy-demo.mp4`. The 139.2-second, 1920×1080 H.264 video is silent and unchanged from the approved final export. Its SHA-256 is `9d24b1c589001d2571052c3f9dfefcac4a319ee30ad81897c1f9aa9effdf88a1`. `classy-demo-poster.jpg` is a frame extracted at 60 seconds from that same final video, not from an unmasked recording.

The native player has controls, no autoplay and `preload="none"`. The page includes a downloadable MP4 and an expandable text description. No third-party video embed, tracking or additional JavaScript was added.

Launch verification on 9 November 2026, against baseline `c16cf86`: the visitor-to-trial scenario first failed because the homepage had no Marketplace link, then passed through the actual Marketplace listing, published agreement and setup installation link. The demo scenario first failed because no player existed, then passed keyboard-started playback and seeking to 122 seconds followed by resumed playback beyond 123 seconds, with decoded frames and no media error. Desktop and 390px mobile layouts were inspected in light/dark themes without horizontal overflow; the idle page made no MP4 request. The production build and final media-contract checks passed.

## Existing public documents

The static migration preserves the published document wording, metadata, navigation and meaningful fragment anchors:

- `/classy`
- `/classy/docs`
- `/classy/data`
- `/classy/privacy`
- `/classy/support`
- `/classy/dpa/v1`
- `/privacy-policy`
- `/delete-data`

The HTML lives in `public/<route>/index.html`, with shared styles in `public/classy/classy.css`. Keep the shared data-handling sections consistent when making an approved policy revision. The sports privacy policy retains its published `10/5/2026` revision date; change it only when that policy is revised.

The Classy agreement remains the previously published Version 1.0. This website release does not change contractual terms, constitute customer acceptance, submit or release the Marketplace app, or change its pricing. Historical review source under `app/` is not a website route or build input.

The existing Android and Apple association files remain at `/.well-known/assetlinks.json` and `/.well-known/apple-app-site-association`.

## Deployment

The existing Vercel project deploys the GitHub `master` branch. `vercel.json` selects a framework-independent static build using `npm run build` and `dist/`, preserves clean document URLs, and serves both association files as JSON.

Only `dist/` is published. `vite.config.js` serves the document directory indexes during development and preview, returns 404 for unknown pages instead of an SPA fallback, and denies access to historical `app/` source during development.

Before publishing, run the production build and exercise the homepage, product links and document routes in a browser. After deployment, verify `https://www.razumly.com/`, the eight document routes, association-file content types and inaccessible private paths.
