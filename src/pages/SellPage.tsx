import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardCheck,
  ImagePlus,
  Megaphone,
  Package,
  Store,
  Wrench,
} from 'lucide-react';

const sellerFeatures = [
  {
    icon: Store,
    title: 'Manage your storefront',
    description:
      'Set up a public profile with a name, link handle, category, description, contact details, and location. Preview and share your storefront.',
  },
  {
    icon: Package,
    title: 'Organize product listings',
    description:
      'Add product details, category, condition, price, quantity, and up to three photos. Save listings as drafts or make them active.',
  },
  {
    icon: Megaphone,
    title: 'Promote your products',
    description:
      'Create storefront banners, discounts, and product offers such as bundles or buy-one-get-one promotions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Keep track of store activity',
    description:
      'Review order details and available order statuses, alongside product and low-stock information in the seller workspace.',
  },
];

export const SellPage: React.FC = () => (
  <div className="min-h-screen bg-white text-[#202124] selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Store className="h-3.5 w-3.5" />
            Selling on OmniMall
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            Build a storefront for the products or services you offer.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The seller app supports product stores and service-provider profiles, with tools for
            listings, promotions, orders, and service enquiries.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            Getting started
          </span>
          <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
            What to expect
          </h2>
          <ol className="mt-6 space-y-5">
            {[
              ['Create an account', 'Sign up with email and password or Google.'],
              ['Choose what you offer', 'Select Products or Services and provide the requested profile information.'],
              ['Submit your store for review', 'New stores enter an approval queue; selling tools unlock after approval.'],
              ['Set up your listings', 'Add product details and photos, or describe services, pricing, availability, and samples.'],
            ].map(([title, description], index) => (
              <li key={title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-[#FF5B00]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {sellerFeatures.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200/70 bg-slate-50/70 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <ImagePlus className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">
            For service providers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Build a profile, add services with fixed, starting, hourly, or custom-quote pricing, and
            manage enquiries and quotes in the provider workspace. Service availability and
            arrangements should be confirmed with the customer.
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#FF5B00] hover:text-orange-700"
          >
            <span>How service enquiries work</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>

        <article className="rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#FF5B00]">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">
            Fees and payments
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            The seller materials do not confirm a current fee schedule or a platform-managed
            payment and payout flow. Ask OmniMall to confirm charges and payment arrangements
            before you start selling.
          </p>
          <a
            href="mailto:support@omnimall.app?subject=Seller%20onboarding%20and%20fees"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>Ask about seller onboarding</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            This link opens an email draft to support@omnimall.app; this website does not send or
            store your message.
          </p>
        </article>
      </div>
    </section>
  </div>
);
