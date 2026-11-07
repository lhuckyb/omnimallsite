# OmniMall official website

The OmniMall marketing website is a Vite + React + TypeScript single-page app.
It explains the marketplace, seller storefronts, service listings and campus
community without displaying sample products or placeholder testimonials.

## Run locally

```powershell
npm install
npm run dev
```

The development server runs on port 3000. Validate changes with:

```powershell
npm run lint
npm run build
```

The header and footer use the official artwork at `public/om.png`. The logo
component crops the supplied artwork to fit the site navigation; do not replace
it with a text-only wordmark.

Contact links open an email draft to `support@omnimall.app`; the public website
does not claim to send or store a message.
