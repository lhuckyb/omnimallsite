import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Compass,
  PackageSearch,
  ShoppingBag,
  Store,
  UsersRound,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

const discoveryCategories = [
  {
    icon: PackageSearch,
    title: 'Products',
    description:
      'From fashion and electronics to everyday essentials and lifestyle finds, discover items from different sellers and find what suits you.',
    image: ASSETS.heroMarketplace,
    imageAlt: 'A customer exploring products in the OmniMall marketplace',
    imageClass: 'object-center',
  },
  {
    icon: Compass,
    title: 'Services',
    description:
      'Not everything you need comes in a package. Find creative, professional, and everyday services from providers in the OmniMall ecosystem.',
    image: ASSETS.servicesCreative,
    imageAlt: 'A creative professional working on a service project',
    imageClass: 'object-center',
  },
  {
    icon: Store,
    title: 'Independent stores',
    description:
      'Get to know different vendors, browse their collections, and discover what makes each digital storefront unique.',
    image: ASSETS.vendorStorefront,
    imageAlt: 'An independent seller presenting products in a storefront',
    imageClass: 'object-center',
  },
];

export const MarketplacePage: React.FC = () => (
  <div className="min-h-screen bg-white pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="overflow-hidden border-b border-orange-100 bg-[#fffaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold text-[#FF5B00] shadow-sm">
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            The OmniMall marketplace
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Discover more.
            <span className="block text-[#FF5B00]">Shop without limits.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-semibold text-slate-800">
            Welcome to the Omnimall Marketplace
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            A world of products, services, and independent businesses, all brought together in one
            place. Explore stores, find useful services, and connect with the people behind them.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Whether you know exactly what you&apos;re looking for or simply want to explore,
            there&apos;s always something waiting to be discovered.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#discover"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Explore the marketplace
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/sell"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Become a seller
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-7 border-l-2 border-[#FF5B00] pl-3 font-heading text-sm font-bold text-slate-800">
            One marketplace. Countless possibilities.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-slate-900/10">
            <img
              src={ASSETS.heroMarketplace}
              alt="A welcoming marketplace scene representing product discovery on OmniMall"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  Find your next favorite
                </p>
                <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                  All kinds of good things.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <Store className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">A place for every seller</p>
              <p className="text-sm font-bold text-slate-900">Your own storefront</p>
            </div>
          </div>
          <div className="absolute -right-2 top-5 hidden items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#FF5B00]" />
            Products · Services · Stores
          </div>
        </div>
      </div>
    </section>

    <section id="discover" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            More ways to explore
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Explore different worlds
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            From the things you use every day to new services and independent businesses, start
            exploring in one connected marketplace.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {discoveryCategories.map(({ icon: Icon, title, description, image, imageAlt, imageClass }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imageClass}`}
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#FF5B00] shadow-md">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-black text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#f8f8f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            A better way to connect
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Not just listings.
            <span className="block text-[#FF5B00]">Real stores.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            We believe every seller deserves more than a product listing. That&apos;s why Omnimall
            is designed around individual digital storefronts. Each seller gets a space to showcase
            products, organize collections, express a brand identity, and build a recognizable
            presence in the marketplace.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Think of it as visiting different shops in one mall, except you can explore them from
            wherever you are.
          </p>
          <Link
            to="/sell"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-[#FF5B00] transition-colors hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5B00]"
          >
            Discover seller features
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70" />
          <img
            src={ASSETS.vendorStorefront}
            alt="A vendor's organized digital storefront"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <Store className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-slate-500">A space to make it yours</p>
              <p className="text-sm font-bold text-slate-900">Built for every business</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
              A marketplace for both sides
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Built for buyers.
              <span className="block">Designed for sellers.</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-black text-slate-900">For buyers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover more options, explore different stores, compare products, and connect
                with sellers. Shopping should give you choices, not complications.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <UsersRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-black text-slate-900">For sellers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Create a digital storefront, showcase your products, manage your offerings, and
                reach potential customers without building a website from scratch.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
            More than shopping
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight sm:text-4xl">
            It&apos;s discovery.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            The best discoveries aren&apos;t always the things you planned to find. Omnimall creates
            room for exploration, helping customers discover new businesses, interesting products,
            and services they might otherwise have missed.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            And for sellers, every discovery is an opportunity to connect with a potential
            customer.
          </p>
          <Link
            to="/explore"
            className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-950 transition-colors hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore the community
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <img
          src={ASSETS.campusCommunity}
          alt="Members of a campus community connecting"
          loading="lazy"
          className="h-full min-h-64 w-full object-cover lg:min-h-[25rem]"
        />
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-100 bg-[#fffaf6] px-6 py-12 text-center sm:px-12 sm:py-16">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FF5B00] shadow-sm">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Your next discovery starts here.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Whether you&apos;re here to find something, sell something, or explore what&apos;s out
          there, there&apos;s a place for you at Omnimall.
        </p>
        <p className="mt-5 font-heading text-lg font-black text-[#FF5B00]">
          Sell with ease. Buy with confidence.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/explore"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            Explore OmniMall
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            Start selling
          </Link>
        </div>
      </div>
    </section>
  </div>
);
