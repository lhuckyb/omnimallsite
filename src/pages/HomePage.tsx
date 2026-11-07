import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  MapPin,
  MessageCircle,
  PackageSearch,
  SlidersHorizontal,
  Store,
  WalletCards,
  Wrench,
  X,
} from 'lucide-react';
import { DotField } from '../components/ui/dot-field';
import { MockTablet } from '../components/ui/MockTablet';

const highlights = [
  {
    icon: PackageSearch,
    title: 'Find products and stores',
    description:
      'Search products, services, brands, and stores. Listing pages show details and the next step available for that item.',
    href: '/marketplace',
    link: 'Explore marketplace features',
  },
  {
    icon: MessageCircle,
    title: 'Follow campus conversations',
    description:
      'Explore posts across For You, Campus, Trends, and Vendors. Like, comment, share, or save posts.',
    href: '/explore',
    link: 'See the Explore feed',
  },
  {
    icon: Wrench,
    title: 'Discover services',
    description:
      'Compare service details, provider, price format, and availability, then send an enquiry from a listing.',
    href: '/services',
    link: 'Learn about services',
  },
];

export const HomePage: React.FC = () => (
  <div className="min-h-screen overflow-x-clip bg-white text-[#202124] selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <DotField
      headline="Sell with ease, Buy with confidence."
      backgroundImage="/2.png"
      description="Explore products and storefronts, enquire about peer services, and follow campus conversations—all through OmniMall."
      className="border-b border-orange-100"
      actions={
        <>
          <Link
            to="/marketplace"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00] sm:w-auto"
          >
            <PackageSearch className="h-4 w-4" aria-hidden="true" />
            <span>Explore marketplace</span>
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00] sm:w-auto"
          >
            <Store className="h-4 w-4 text-[#FF5B00]" aria-hidden="true" />
            <span>Seller guide</span>
          </Link>
        </>
      }
    />

    <section className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#FFFCF9] via-white to-[#FFF3E9] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="min-w-0 space-y-5 lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            Campus marketplace
          </span>
          <h1 className="max-w-xl font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-4xl lg:text-[2.75rem]">
            Find products and services. Discover what’s happening on campus.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore product listings and storefronts, enquire about services, and follow community
            posts—all in the OmniMall app.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/marketplace"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              <PackageSearch className="h-4 w-4" aria-hidden="true" />
              <span>Explore marketplace</span>
            </Link>
            <Link
              to="/sell"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              <Store className="h-4 w-4" aria-hidden="true" />
              <span>Seller guide</span>
            </Link>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-6">
          <MockTablet />
          <p className="mt-3 text-center text-xs text-slate-500">
            Illustrative interface preview — not live listings or account data.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-[#FFF9F5] to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            One platform, different ways to connect
          </span>
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            More than a product listing
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            OmniMall brings marketplace discovery, seller tools, service enquiries, and community
            posts together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description, href, link }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
              <Link
                to={href}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#FF5B00] transition-colors hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
              >
                <span>{link}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200/70 bg-slate-50/70 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            For buyers
          </span>
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Explore, compare, and choose your next step
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Browse and search listings, open product or service details, and save items you want to
            revisit. Eligible products can be added to your bag; some vendor listings provide a
            direct phone contact instead. Checkout requires an account and creates an order for
            seller confirmation.
          </p>
          <Link
            to="/marketplace"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>How marketplace listings work</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            For sellers
          </span>
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Set up a storefront for products or services
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Create an account, choose what you offer, and submit your store for review. Once it is
            approved, seller tools include storefront and listing management, promotions, and order
            or service-request workspaces.
          </p>
          <Link
            to="/sell"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>Seller tools and onboarding</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            The campus reality
          </span>
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Give campus listings a place of their own.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Informal posts can be easy to miss in a busy conversation. OmniMall organizes product
            discovery, service offers, and community posts into dedicated app experiences.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-rose-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                  The challenge
                </span>
                <h3 className="mt-1 font-heading text-lg font-black text-slate-900 sm:text-xl">
                  Finding an offer in a busy feed
                </h3>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <X className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {[
                'Product and service posts can get mixed in with other conversation.',
                'It may take extra effort to compare different offers and their details.',
                'A post may not show the seller information or next step in one consistent place.',
                'Offers shared in separate channels can be harder to revisit later.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-orange-200 bg-gradient-to-br from-white to-orange-50/40 p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00]">
                  The OmniMall approach
                </span>
                <h3 className="mt-1 font-heading text-lg font-black text-slate-900 sm:text-xl">
                  Dedicated spaces for discovery
                </h3>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#FF5B00]">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {[
                'Search across products, services, brands, and stores.',
                'Use available sorting options such as price and rating.',
                'Review product details, seller or store information, and available actions.',
                'Explore posts, topics, and vendor content in a separate community feed.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-orange-100 pt-4 text-xs leading-relaxed text-slate-500">
              Listing visibility, seller activity, and availability depend on what is currently
              published in the app.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-[#0F172A] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B2B]">
            Seller tools
          </span>
          <h2 className="font-heading text-2xl font-black leading-tight tracking-tight sm:text-4xl">
            Manage your campus offers in one workspace.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Create a product storefront or a service-provider profile, organize what you offer,
            and manage the enquiries or orders shown in your seller workspace.
          </p>
          <Link
            to="/sell"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Store className="h-4 w-4" aria-hidden="true" />
            <span>Explore seller tools</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-5 shadow-2xl sm:p-7">
          <div className="flex items-center justify-between gap-3 border-b border-slate-700 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Seller workspace preview
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-white">
                Your offers, organized
              </h3>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-[#FF6B2B]">
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: PackageSearch,
                title: 'Product listings',
                copy: 'Details, photos, price, quantity, and draft or active status.',
              },
              {
                icon: SlidersHorizontal,
                title: 'Store promotions',
                copy: 'Create banners, discounts, and product offers.',
              },
              {
                icon: MessageCircle,
                title: 'Service enquiries',
                copy: 'Review enquiries and prepare quotes for services.',
              },
              {
                icon: WalletCards,
                title: 'Order workspace',
                copy: 'View order details and available order statuses.',
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-[#FF6B2B]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <h4 className="text-xs font-bold text-white">{title}</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3">
            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-slate-300">
              New stores are reviewed before selling tools unlock. Confirm current fees and payment
              arrangements with OmniMall; a fee or payout schedule is not confirmed here.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-[#FFF9F5] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl space-y-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            Campus discovery
          </span>
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Stay connected to campus conversations.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            The app includes a Campus feed alongside For You, Trends, and Vendors. Browse posts and
            follow product or store tags to discover more.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-5 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-black text-slate-900">
                Campus content in your feed
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                Switch between feed tabs and explore posts by topic. The app’s buyer flow does not
                establish a campus selector or guarantee activity at a specific university.
              </p>
            </div>
          </div>
          <Link
            to="/campuses"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>Campus information</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-[#0F172A] py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B2B]">
          Join the campus network
        </span>
        <h2 className="font-heading text-2xl font-black leading-tight tracking-tight sm:text-4xl">
          Explore OmniMall or learn how to offer something of your own.
        </h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          Browse the buyer and seller guides, or contact the team to ask about current app access
          and onboarding.
        </p>
        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <Link
            to="/marketplace"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Explore marketplace guide</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-600 px-5 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Seller guide</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="pt-1 text-xs text-slate-400">
          Current buyer and seller app production URLs have not been verified.
        </p>
      </div>
    </section>
  </div>
);
