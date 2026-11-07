import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  PackageSearch,
  Phone,
  ShoppingBag,
  Store,
} from 'lucide-react';

const listingDetails = [
  'Product photos, price, condition, and availability',
  'Seller or storefront information and reviews',
  'Actions available for that specific listing',
];

export const MarketplacePage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <ShoppingBag className="h-3.5 w-3.5" />
            Buyer app overview
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            How product discovery works on OmniMall.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            In the OmniMall app, search across products, services, brands, and stores. Compare
            listing details, then use the contact or order option shown on a listing. This page
            explains those features; it is not a live product catalog.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <PackageSearch className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">Search and sort</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Search listings alongside services, brands, and stores. Available sort choices include
            price and rating, so you can narrow down what to look at.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <Store className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">Review each listing</h2>
          <ul className="mt-3 space-y-2">
            {listingDetails.map((detail) => (
              <li key={detail} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5B00]" />
                {detail}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">Choose the next step</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Some products can be added to your bag or ordered after signing in. Some vendor listings
            offer a phone contact instead. The available action depends on the listing.
          </p>
        </article>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[#FF5B00]">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-heading text-lg font-bold text-slate-900">Orders</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            For eligible items, signing in at checkout places an order that is shown as awaiting
            seller confirmation. The current checkout screens do not show payment-method or delivery
            selection, so agree on those details with the seller before completing a transaction.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-[#FF5B00]">
            <Phone className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-heading text-lg font-bold text-slate-900">Direct contact</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Where a listing provides a seller phone number, you can contact that seller directly.
            Review the listing details and clarify availability and arrangements with the seller.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-heading text-xl font-black">Browse campus conversations, too</h2>
          <p className="mt-1 text-sm text-slate-300">
            Explore posts, topics, and vendor updates in the community feed.
          </p>
        </div>
        <Link
          to="/explore"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span>Explore feed features</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);
