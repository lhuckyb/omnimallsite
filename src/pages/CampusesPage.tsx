import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MessageCircle, Store } from 'lucide-react';

const campusFeatures = [
  {
    icon: Compass,
    title: 'Explore community posts',
    description:
      'Use the Campus feed tab alongside For You, Trends, and Vendors to browse posts in the app.',
  },
  {
    icon: Store,
    title: 'Find product storefronts',
    description:
      'Search the marketplace for products, services, brands, and stores, then review each listing.',
  },
  {
    icon: MessageCircle,
    title: 'Connect through listings',
    description:
      'Depending on the listing, you can place an order, contact a seller, or send a service enquiry.',
  },
];

export const CampusesPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Compass className="h-3.5 w-3.5" />
            OmniMall on campus
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            Bring campus discovery and commerce together.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            OmniMall combines product listings, service offers, storefronts, and a campus community
            feed. For current access information about a particular institution, contact the
            OmniMall team.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {campusFeatures.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-8">
        <h2 className="font-heading text-xl font-black text-slate-900">
          Checking availability at your campus?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700">
          The public site does not maintain a verified campus launch or waitlist list. Email support
          to ask about access for your community.
        </p>
        <a
          href="mailto:support@omnimall.app?subject=Campus%20availability"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
        >
          <span>Ask about campus access</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          This opens an email draft to support@omnimall.app; this website does not send or store your
          message.
        </p>
      </div>

      <p className="mt-8 text-center text-sm text-slate-600">
        Want to understand the platform first?{' '}
        <Link to="/about" className="font-bold text-[#FF5B00] hover:text-orange-700">
          About OmniMall
        </Link>
        .
      </p>
    </section>
  </div>
);
