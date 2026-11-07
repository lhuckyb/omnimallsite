import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What can I find on OmniMall?',
    answer:
      'The app brings together product listings, storefronts, service listings, and an Explore feed. Marketplace search can include products, services, brands, and stores.',
  },
  {
    question: 'How does ordering a product work?',
    answer:
      'Eligible products can be added to your bag or ordered from their listing. Checkout requires you to sign in and creates an order that is awaiting seller confirmation. The current checkout does not show payment-method or delivery selection, so confirm those arrangements with the seller.',
  },
  {
    question: 'Why does a listing show a phone contact instead of an order button?',
    answer:
      'Available actions vary by listing. Some vendor listings provide a phone contact, while other eligible products can be added to the bag or ordered.',
  },
  {
    question: 'How do service enquiries work?',
    answer:
      'Select Enquire on a service listing to send a message; you must be signed in and can include a preferred date. Providers can manage incoming enquiries and quotes. An enquiry is not itself a confirmed booking.',
  },
  {
    question: 'What can I do in the Explore feed?',
    answer:
      'Browse For You, Campus, Trends, and Vendors feeds. Post cards support likes, comments, sharing, and saving; some interactions require sign-in.',
  },
  {
    question: 'How do I start selling?',
    answer:
      'Create an account, choose Products or Services, and submit your store setup for review. New stores enter an approval queue; selling tools unlock after approval.',
  },
  {
    question: 'Can service providers choose how to price their work?',
    answer:
      'Yes. The service workspace supports fixed, starting, hourly, and custom-quote pricing. Providers can also add service details, availability, service area, and samples.',
  },
  {
    question: 'What fees or payouts should sellers expect?',
    answer:
      'The current public seller information does not confirm a fee schedule or a platform-managed payment and payout flow. Ask OmniMall to confirm charges and payment arrangements before selling.',
  },
  {
    question: 'Does OmniMall verify that every user is a student?',
    answer:
      'The buyer signup screens reviewed do not require student credentials, so we cannot claim that every account is student-verified. Seller stores are reviewed before selling tools unlock.',
  },
];

export const HelpPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
          <HelpCircle className="h-3.5 w-3.5" />
          Help & FAQs
        </span>
        <h1 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
          Clear answers about using OmniMall.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Learn about product listings, orders, service enquiries, seller accounts, and the Explore
          feed.
        </p>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:px-8">
      <div className="space-y-3 lg:col-span-8">
        {faqs.map(({ question, answer }, index) => (
          <details
            key={question}
            className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm open:border-orange-200 sm:p-6"
            open={index === 0}
          >
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-slate-900 marker:hidden sm:text-base">
              <span>{question}</span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg leading-none text-[#FF5B00] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
          </details>
        ))}
      </div>

      <aside className="h-fit rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-4">
        <h2 className="font-heading text-lg font-black text-slate-900">Still need help?</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Contact OmniMall support with questions about access, seller onboarding, or current
          marketplace arrangements.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
        >
          <span>Contact support</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="text-xs leading-relaxed text-slate-500">
            For information about personal data or platform use, read the{' '}
            <Link to="/privacy" className="font-semibold text-[#FF5B00] hover:text-orange-700">
              privacy policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="font-semibold text-[#FF5B00] hover:text-orange-700">
              terms
            </Link>
            .
          </p>
        </div>
      </aside>
    </section>
  </div>
);
