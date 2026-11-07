import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleAlert, ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: 'Information used in the apps',
    body: [
      'The buyer app signup flow asks for a name, email address, and password, and also offers Google sign-in. The seller app offers email-and-password or Google sign-up. Seller storefront setup can include a store name, public handle, category, description, phone number, and location.',
      'Product listings can include names and descriptions, photos, category, condition, price, quantity, and optional SKU details. Service profiles can include service descriptions, pricing, availability, service area, contact information, and sample images.',
      'The buyer app supports product orders and service enquiries. The admin interface displays order identifiers, values, statuses, dates, seller IDs, item details, buyer names and emails. Service enquiry forms can include a message and optional preferred date.',
      'Explore posts support likes, comments, sharing, and saving. The reviewed screens do not establish the full set of data recorded for these interactions or how long that information is retained.',
    ],
  },
  {
    title: 'Operational and moderation access',
    body: [
      'The reviewed admin tools can display shop-owner names, email addresses, phone numbers, and locations, as well as buyer and order information. Admin workflows include store approval, rejection, suspension, or restoration and product-status changes. Some moderation actions record a reason and an admin audit event.',
      'These screens establish that the information is available to the administration interface; they do not establish the complete list of people or service providers who may access information, the legal basis for access, or any retention period.',
    ],
  },
  {
    title: 'Visibility and contact',
    body: [
      'The seller app provides customer-facing storefronts and shareable shop links. Information a seller chooses to publish in a storefront or listing is intended to appear to people viewing that storefront or listing in the app. The exact visibility controls and audience boundaries require confirmation.',
      'For a privacy question, contact support@omnimall.app. This contact link opens an email draft; the official website does not send or store the message.',
    ],
  },
];

const reviewItems = [
  'Confirm the responsible legal entity, applicable jurisdictions, and purposes and lawful bases for each category of processing.',
  'Document service providers and other recipients, safeguards, and any international data transfers.',
  'Set retention and deletion periods, account/data request procedures, security disclosures, and a privacy contact.',
  'Confirm the public visibility of profile, listing, order, and feed information, and any controls available to users.',
  'Confirm what payment or financial information, if any, is collected by the apps or service providers.',
];

export const PrivacyPolicyPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-10 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#FF5B00]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to OmniMall
        </Link>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Privacy information
          </span>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A factual overview of data visible in the current OmniMall app workflows and
            administration screens.
          </p>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-5xl space-y-6 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div
        role="note"
        className="flex items-start gap-3 rounded-3xl border border-amber-300 bg-amber-50 p-5 text-amber-950 sm:p-6"
      >
        <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
        <div>
          <h2 className="font-heading text-sm font-black uppercase tracking-wide">
            Draft — pending legal review
          </h2>
          <p className="mt-1 text-sm leading-relaxed">
            Prepared from the current product screens. This is not a final policy. Qualified legal
            counsel and the responsible OmniMall team must confirm the marked gaps and approve the
            final notice before it is relied on.
          </p>
        </div>
      </div>

      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-heading text-xl font-black text-slate-900">{section.title}</h2>
          <div className="mt-4 space-y-3">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      ))}

      <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-black text-slate-900">
          Items requiring confirmation before publication
        </h2>
        <ul className="mt-4 space-y-3">
          {reviewItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {item}
            </li>
          ))}
        </ul>
      </article>

      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8">
        <h2 className="font-heading text-lg font-bold text-slate-900">Privacy questions</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Contact{' '}
          <a
            href="mailto:support@omnimall.app?subject=Privacy%20question"
            className="font-semibold text-[#FF5B00] underline underline-offset-2"
          >
            support@omnimall.app
          </a>
          . The link opens an email draft; this website does not send or store your message.
        </p>
        <Link
          to="/terms"
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#FF5B00] hover:text-orange-700"
        >
          <span>Read the Terms & Conditions draft</span>
          <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
        </Link>
      </div>
    </main>
  </div>
);
