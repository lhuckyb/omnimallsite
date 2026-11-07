import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Heart,
  MessageCircle,
  Share2,
  Store,
} from 'lucide-react';

const feedTabs = [
  {
    name: 'For You',
    detail: 'A feed for discovering posts across OmniMall.',
  },
  {
    name: 'Campus',
    detail: 'Posts grouped around campus community content.',
  },
  {
    name: 'Trends',
    detail: 'A place to explore popular topics and posts.',
  },
  {
    name: 'Vendors',
    detail: 'Updates and posts associated with storefronts.',
  },
];

export const ExplorePage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Compass className="h-3.5 w-3.5" />
            Explore feed overview
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            What you can discover in Explore.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The OmniMall app’s Explore feed brings community posts, topics, and vendor content
            together. Find a post that interests you, join the conversation, or follow its links to
            a product or store. This page describes the feed; it does not display live posts.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Explore by feed
            </span>
            <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
              Choose what you want to see
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {feedTabs.map((tab, index) => (
              <article
                key={tab.name}
                className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="text-xs font-black text-[#FF5B00]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">{tab.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{tab.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <Heart className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">
            Take part in the conversation
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Post cards support likes, comments, sharing, and saving. Some interactions prompt you
            to sign in. Product or store tags can take you directly to the related listing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[Heart, MessageCircle, Share2, Store].map((Icon, index) => (
              <span
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-heading text-xl font-black">Find something to explore</h2>
          <p className="mt-1 text-sm text-slate-300">
            Browse product listings or learn how service enquiries work.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/marketplace"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Products</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-600 px-5 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);
