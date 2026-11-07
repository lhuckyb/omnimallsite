import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MessageCircle, PackageSearch, Store } from 'lucide-react';

const principles = [
  {
    icon: PackageSearch,
    title: 'Make discovery easier',
    description:
      'Search products, services, brands, and stores, then review the details available on each listing.',
  },
  {
    icon: Store,
    title: 'Give sellers useful tools',
    description:
      'Product sellers can manage storefronts and listings; service providers can describe their work and respond to enquiries.',
  },
  {
    icon: MessageCircle,
    title: 'Keep community in view',
    description:
      'The Explore feed gives people another way to share posts, discuss topics, and find products or stores.',
  },
];

export const AboutPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Compass className="h-3.5 w-3.5" />
            About OmniMall
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            A marketplace shaped around campus life.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            OmniMall brings product discovery, independent storefronts, service listings, and
            community posts into one place for campus communities.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            What OmniMall brings together
          </span>
          <h2 className="font-heading text-2xl font-black text-slate-900 sm:text-3xl">
            More ways to find and offer what people need
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Browse products and storefronts, explore services, and follow community posts. Sellers
            can choose to set up a product store or a service-provider profile, with their
            submissions reviewed before selling tools become available.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            OmniMall provides the platform. Product sellers and service providers manage their own
            offers, and listing details should be reviewed before buyers decide how to proceed.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
          {principles.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-heading text-xl font-black">Get to know the platform</h2>
          <p className="mt-1 text-sm text-slate-300">
            Read about the marketplace, seller features, and community feed.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/marketplace"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Marketplace</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-600 px-5 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Seller features</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);
