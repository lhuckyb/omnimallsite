import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ImagePlus,
  LayoutDashboard,
  Megaphone,
  Package,
  Store,
  UsersRound,
  Wrench,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

const sellerFeatures = [
  {
    icon: Store,
    title: 'Create your storefront',
    description:
      'Establish your presence on Omnimall and give your business a dedicated space customers can discover.',
  },
  {
    icon: Package,
    title: 'Showcase your products',
    description:
      'Add product images, descriptions, prices, and the details customers need to understand what you offer.',
  },
  {
    icon: ImagePlus,
    title: 'Make your store yours',
    description:
      'Give your storefront its own identity and personality. Build a space that reflects your business.',
  },
  {
    icon: Megaphone,
    title: 'Reach more potential customers',
    description:
      'Become part of a marketplace where people come to discover products, explore stores, and find what they need.',
  },
];

const sellerBenefits = [
  'Your own storefront within the marketplace',
  'A wider marketplace for independent sellers and service providers',
  'Organized product displays that are easier to browse',
  'An online business presence to build recognition',
  'A simpler starting point than building a marketplace yourself',
];

export const SellPage: React.FC = () => (
  <div className="min-h-screen bg-white pb-20 text-[#202124] selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="overflow-hidden border-b border-orange-100 bg-[#fffaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold text-[#FF5B00] shadow-sm">
            <Store className="h-3.5 w-3.5" aria-hidden="true" />
            Selling on Omnimall
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Your business deserves
            <span className="block text-[#FF5B00]">a bigger space.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-800">Sell on Omnimall.</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            You have something worth selling. We believe finding the right customers shouldn&apos;t
            be the hardest part of running your business.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Omnimall gives you a place to showcase your products, establish your own digital
            storefront, and connect with customers within a growing marketplace.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Whether you&apos;re an established business, a small business owner, a student
            entrepreneur, or turning an idea into a source of income, there&apos;s room for you
            here.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:omnimallinc@gmail.com?subject=Become%20a%20seller"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Become a seller
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/marketplace"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Explore the marketplace
            </Link>
          </div>
          <p className="mt-7 border-l-2 border-[#FF5B00] pl-3 font-heading text-sm font-bold text-slate-800">
            Your products. Your store. Your opportunity.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-slate-900/10">
            <img
              src={ASSETS.vendorStorefront}
              alt="A seller presenting products in a welcoming storefront"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  Your business, your space
                </p>
                <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                  Make it yours.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <Store className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">A place to get discovered</p>
              <p className="text-sm font-bold text-slate-900">Built around your business</p>
            </div>
          </div>
          <div className="absolute -right-2 top-5 hidden items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#FF5B00]" />
            Products · Services · Stores
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Your space in the mall
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Your own store.
            <span className="block text-[#FF5B00]">Inside a bigger marketplace.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Why settle for simply posting products when you can have your own storefront? On
            Omnimall, sellers get a dedicated space in the marketplace to showcase products,
            organize their offerings, and give customers a more structured way to explore.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Your store is yours to shape. Your products are yours to manage. And your business gets
            to be part of something bigger.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Your space', 'A dedicated storefront customers can discover.'],
            ['Your products', 'Organized listings with the details that matter.'],
            ['Your identity', 'A place that reflects your business and brand.'],
            ['Your opportunity', 'Part of a marketplace built for discovery.'],
          ].map(([title, description], index) => (
            <article
              key={title}
              className={`rounded-3xl p-6 ${index === 0 || index === 3 ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-950'}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${index === 0 || index === 3 ? 'bg-white/10 text-orange-300' : 'bg-orange-50 text-[#FF5B00]'}`}
              >
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-black">{title}</h3>
              <p className={`mt-2 text-sm leading-6 ${index === 0 || index === 3 ? 'text-slate-300' : 'text-slate-600'}`}>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#f8f8f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Your business, step by step
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Everything starts with your store.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Build a presence that helps customers understand what you offer and who you are.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sellerFeatures.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute right-5 top-5 font-heading text-sm font-black text-orange-200">
                0{index + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-black text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70" />
          <img
            src={ASSETS.servicesCreative}
            alt="A creative professional working on services they can offer customers"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover shadow-lg"
          />
          <span className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs text-slate-500">Skills deserve a space, too</span>
              <span className="block text-sm font-bold text-slate-900">Welcome, service providers</span>
            </span>
          </span>
        </div>
        <div className="order-1 max-w-xl lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Services have a place here, too
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            You don&apos;t have to sell products to belong here.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Not every business has something you can put on a shelf. Are you a graphic designer,
            photographer, web developer, cleaner, videographer, or do you offer other professional
            or everyday services?
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Omnimall also welcomes service providers. Create your presence, showcase the services
            you offer, and make it easier for potential customers to discover and connect with you.
          </p>
          <p className="mt-5 font-heading text-base font-black text-[#FF5B00]">
            Whatever you offer, there&apos;s room to grow.
          </p>
          <Link
            to="/services"
            className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-slate-900 transition-colors hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5B00]"
          >
            Learn about service listings
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-[#fffaf6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="max-w-xl lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Start where you are
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Built for businesses of every size.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            You don&apos;t need a large company, an expensive website, or an established brand to
            get started. Whether you&apos;re running a small business, selling from your hostel,
            building a side hustle, or managing an established shop, Omnimall is designed to give
            you an accessible starting point.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We believe good businesses shouldn&apos;t go unnoticed simply because they don&apos;t
            have the biggest marketing budgets.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {[
            ['Small businesses', 'Give your growing business a clear online home.'],
            ['Student entrepreneurs', 'Showcase a side hustle or a new idea.'],
            ['Established shops', 'Bring your business into a connected marketplace.'],
            ['Service providers', 'Help more people discover the work you do.'],
          ].map(([title, description]) => (
            <article key={title} className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
                <UsersRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Why Omnimall
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            A bigger space for what you offer.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Give your business an accessible place to show up, connect, and grow alongside a
            community of independent sellers and service providers.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {sellerBenefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF5B00]">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-6 text-slate-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">Getting started</h2>
          <ol className="mt-5 space-y-4">
            {[
              ['Create an account', 'Sign up with email and password or Google.'],
              ['Choose what you offer', 'Select Products or Services and provide your profile information.'],
              ['Submit your store for review', 'New stores enter an approval queue; selling tools unlock after approval.'],
              ['Set up your listings', 'Add product details and photos, or describe your services, pricing, and availability.'],
            ].map(([title, description], index) => (
              <li key={title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-[#FF5B00]">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-heading text-sm font-bold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{description}</span>
                </span>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#FF5B00]">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">Fees and payments</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            The seller materials do not confirm a current fee schedule or a platform-managed
            payment and payout flow. Ask OmniMall to confirm charges and payment arrangements
            before you start selling.
          </p>
          <a
            href="mailto:omnimallinc@gmail.com?subject=Seller%20onboarding%20and%20fees"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            Ask about seller onboarding
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            This opens an email draft to omnimallinc@gmail.com; this website does not send or store
            your message.
          </p>
        </article>
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
          <Store className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-3xl font-black tracking-tight sm:text-4xl">
          Your next customer could be one discovery away.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          You&apos;ve got something to offer. We&apos;ve got a place to help you showcase it. Take
          the next step, set up your store, and become part of the Omnimall marketplace.
        </p>
        <p className="mt-5 font-heading text-base font-bold text-orange-300">
          Start selling. Start growing. Start with Omnimall.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:omnimallinc@gmail.com?subject=Become%20a%20seller"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Become a seller
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            to="/marketplace"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-700 px-6 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore the marketplace
          </Link>
        </div>
        <p className="mt-8 text-sm font-semibold text-slate-400">
          Sell with ease. Buy with confidence.
        </p>
      </div>
    </section>
  </div>
);
