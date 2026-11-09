import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleAlert, ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: 'Information in our apps',
    body: [
      'When you create a buyer account, the app asks for your name, email address, and password. You can also sign in with Google. Sellers can create an account with an email address and password or with Google. When setting up a storefront, sellers can provide a store name, public handle, category, description, phone number, and location.',
      'Product listings can include a name, description, photos, category, condition, price, quantity, and optional SKU details. Service profiles can include service descriptions, pricing, availability, service area, contact information, and sample images.',
      'Buyers can place product orders and send service enquiries. The administration interface displays order identifiers, values, statuses, dates, seller IDs, item details, and buyer names and email addresses. A service enquiry can include a message and an optional preferred date.',
      'Explore posts support likes, comments, sharing, and saving. We are still confirming exactly what information these interactions record and how long it is kept.',
    ],
  },
  {
    title: 'Operational and moderation access',
    body: [
      'The administration interface displays shop-owner names, email addresses, phone numbers, and locations, as well as buyer and order information. Administrators can approve, reject, suspend, or restore stores and change product statuses. Some moderation actions record a reason and an audit event.',
      'We are formalizing who may access personal information, the purposes for that access, and how long different types of information are kept.',
    ],
  },
  {
    title: 'Visibility and contact',
    body: [
      'The seller app provides customer-facing storefronts and shareable shop links. Information a seller publishes in a storefront or listing is intended to be visible to people viewing it in the app. We are still confirming the exact visibility controls and audience for each type of information.',
      'For privacy questions, contact support@omnimall.app. The link opens an email draft; this website does not send or store your message.',
    ],
  },
];

const reviewItems = [
  'Which legal entity operates OmniMall, which privacy laws apply, and the purposes and legal grounds for using each type of information.',
  'Which service providers receive information, what safeguards apply, and whether information is transferred internationally.',
  'How long we keep information, how deletion and data requests work, and what security details we can share.',
  'Who can see profile, listing, order, and feed information, and what visibility controls are available.',
  'Whether our apps or service providers collect payment or other financial information.',
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
            OmniMall's current policy
          </span>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            How OmniMall currently handles personal information in its apps and administration tools.
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
            Our current rules — not yet legally finalized
          </h2>
          <p className="mt-1 text-sm leading-relaxed">
            This page describes OmniMall's current privacy rules and practices. We intend to follow
            them while we complete a formal legal review and finalize the policy for the laws that
            apply. The remaining step is formal legal review and approval.
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
          Details we are still formalizing
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Some details are not yet fully established. We are working to define them clearly rather
          than present unconfirmed practices as settled rules.
        </p>
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
