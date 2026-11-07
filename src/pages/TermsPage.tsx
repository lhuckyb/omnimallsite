import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleAlert, FileText } from 'lucide-react';

const sections = [
  {
    title: 'What OmniMall provides',
    body:
      'The apps provide product listings, storefronts, service listings, an Explore feed, and tools for users who choose to sell or provide services. The current screens do not settle the legal relationship between OmniMall, buyers, sellers, and service providers; this must be defined in the final terms.',
  },
  {
    title: 'Accounts and store review',
    body:
      'Buyers can browse as guests; account creation offers Google or email sign-up. The reviewed buyer signup does not ask for student credentials, so student-only eligibility should not be assumed. New seller stores enter a review queue, and seller tools unlock after approval. The reviewed admin workflow can approve, reject, suspend, or restore stores, but a complete user-facing decision, notice, and appeal policy is not established.',
  },
  {
    title: 'Listings and promotions',
    body:
      'Seller tools support product listings with descriptions, category, condition, price, quantity, and photos, as well as storefront promotions and product offers. Service providers can describe their services and choose fixed, starting, hourly, or custom-quote pricing. Specific seller obligations, prohibited content, intellectual-property rules, and enforcement procedures require approval.',
  },
  {
    title: 'Product orders',
    body:
      'For eligible product listings, buyers can add items to a bag or start an order. Checkout requires sign-in and creates an order shown as awaiting seller confirmation. The seller workspace supports order statuses including confirmed, processing, shipped, completed, and cancelled. The reviewed buyer checkout does not show a payment-method or delivery-selection flow.',
  },
  {
    title: 'Service enquiries',
    body:
      'A buyer can send a message about a service listing and optionally include a preferred date. Providers can manage enquiries and quotes in their workspace. The reviewed buyer flow does not establish a complete quote-acceptance, booking, payment, or request-status process.',
  },
  {
    title: 'Fees, payments, cancellations, and refunds',
    body:
      'The reviewed seller materials do not confirm a current fee schedule or a platform-managed payment and payout flow. The apps and project documents do not establish complete payment, cancellation, refund, or delivery terms. No fee or refund promise is made by this draft.',
  },
  {
    title: 'Content moderation and user conduct',
    body:
      'Admin tools can change store and product statuses and manage Explore posts. The reviewed screens do not define complete acceptable-use rules, prohibited items, moderation notice, appeal rights, or dispute handling. These rules must be approved and documented before final terms are published.',
  },
];

const openQuestions = [
  'Confirm the contracting entity, user eligibility and minimum age, applicable law, and when terms are accepted or changed.',
  'Define buyer, seller, and provider responsibilities; listing standards; prohibited content; and enforcement and appeal procedures.',
  'Confirm fees, taxes, payment methods, delivery or fulfilment, order cancellation, refunds, and dispute resolution.',
  'Approve warranties, liability limits, intellectual-property and content permissions, account termination, and notice procedures.',
];

export const TermsPage: React.FC = () => (
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
            <FileText className="h-3.5 w-3.5" />
            Platform terms
          </span>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A factual outline of the current app workflows, with unresolved business and legal
            rules called out for review.
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
            This draft reflects features visible in the current apps; it is not a complete or
            approved legal agreement. Qualified legal counsel and the responsible OmniMall team
            must review and approve the missing terms before publication or reliance.
          </p>
        </div>
      </div>

      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-heading text-xl font-black text-slate-900">{section.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
        </article>
      ))}

      <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-black text-slate-900">
          Items requiring confirmation before publication
        </h2>
        <ul className="mt-4 space-y-3">
          {openQuestions.map((question) => (
            <li key={question} className="flex gap-3 text-sm leading-relaxed text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {question}
            </li>
          ))}
        </ul>
      </article>

      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8">
        <h2 className="font-heading text-lg font-bold text-slate-900">Related information</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Read the{' '}
          <Link to="/privacy" className="font-semibold text-[#FF5B00] hover:text-orange-700">
            Privacy Policy draft
          </Link>{' '}
          or contact{' '}
          <a
            href="mailto:support@omnimall.app?subject=Terms%20question"
            className="font-semibold text-[#FF5B00] underline underline-offset-2"
          >
            support@omnimall.app
          </a>
          . The email link opens a draft; this website does not send or store your message.
        </p>
      </div>
    </main>
  </div>
);
