import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Home } from 'lucide-react';

const suggestedPages = [
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Explore feed', path: '/explore' },
  { label: 'Services', path: '/services' },
  { label: 'Seller guide', path: '/sell' },
];

export const NotFoundPage: React.FC = () => (
  <div className="flex min-h-[75vh] items-center justify-center bg-gradient-to-b from-[#FFF7F0] via-white to-slate-50 px-4 py-16 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00] sm:px-6">
    <div className="w-full max-w-2xl space-y-7 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-200 bg-white text-[#FF5B00] shadow-sm">
        <Compass className="h-10 w-10" aria-hidden="true" />
      </div>
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-bold text-[#FF5B00]">
          Page not found
        </span>
        <h1 className="font-heading text-3xl font-black tracking-tight text-[#202124] sm:text-5xl">
          We couldn’t find that page.
        </h1>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
          The address may be outdated or the page may have moved. Choose a section to continue.
        </p>
      </div>

      <nav aria-label="Suggested pages" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {suggestedPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="flex min-h-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-3 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            {page.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
        <span>Return home</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  </div>
);
