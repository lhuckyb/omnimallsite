# OmniMall official website

The OmniMall marketing website is a Vite + React + TypeScript single-page app.
It explains buyer marketplace and Explore features, seller storefront and
service-provider tools, and how product orders and service enquiries currently
work. Do not present sample products, placeholder testimonials, invented
statistics, or unconfirmed campus availability as real.

The Privacy Policy and Terms pages are factual drafts based on the current buyer,
seller, and admin app workflows. They are visibly marked as pending legal
review and must not be presented as approved policies until the identified
business and legal details have been confirmed.

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
does not claim to send or store a message. No production URL for the buyer or
seller app was verified from the sibling app sources, so website CTAs must not
imply a deployed account portal.
