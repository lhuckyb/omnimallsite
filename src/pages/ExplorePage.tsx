import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  BadgePercent,
  Building2,
  CalendarDays,
  Compass,
  Heart,
  MessageCircle,
  Newspaper,
  Share2,
  Sparkles,
  Store,
  TrendingUp,
  UsersRound,
} from 'lucide-react';

const exploreTopics = [
  {
    icon: TrendingUp,
    title: 'Campus Trends & Buzz',
    description:
      'Stay close to campus conversations, student activities, trending topics, events, and moments everyone is talking about.',
    tone: 'bg-orange-50 text-[#FF5B00]',
  },
  {
    icon: Newspaper,
    title: 'News & Updates',
    description:
      'Catch interesting developments, important announcements, local happenings, and stories that matter to the community.',
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    icon: Sparkles,
    title: 'Entertainment & Lifestyle',
    description:
      'Find entertaining content, lifestyle trends, popular conversations, interesting personalities, and things worth sharing.',
    tone: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Store,
    title: 'Business & Marketplace Discoveries',
    description:
      'Meet emerging businesses, discover standout vendors, explore interesting products, and see what is new across Omnimall.',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: UsersRound,
    title: 'Community Spotlight',
    description:
      'Celebrate people, businesses, achievements, events, and initiatives making a difference in their communities.',
    tone: 'bg-rose-50 text-rose-700',
  },
  {
    icon: BadgePercent,
    title: 'Promotions & Special Features',
    description:
      'Keep up with selected offers, campaigns, sponsored features, and special announcements from businesses on Omnimall.',
    tone: 'bg-amber-50 text-amber-700',
  },
];

const feedFeatures = [
  {
    icon: Heart,
    title: 'React to what you see',
    description: 'Like posts that catch your attention and show creators what resonates.',
  },
  {
    icon: MessageCircle,
    title: 'Join the conversation',
    description: 'Comments make it easy to share a thought or respond to the community.',
  },
  {
    icon: Share2,
    title: 'Pass it along',
    description: 'Share interesting posts and help useful discoveries travel further.',
  },
];

export const ExplorePage: React.FC = () => (
  <div className="min-h-screen bg-white pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="overflow-hidden border-b border-orange-100 bg-[#fffaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold text-[#FF5B00] shadow-sm">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Meet Omnimall Explore
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            There&apos;s always
            <span className="block text-[#FF5B00]">something happening.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-800">
            Welcome to Omnimall Explore.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            The world doesn&apos;t stop at shopping, and neither should your marketplace
            experience. Explore brings together the things people are talking about, stories worth
            knowing, trends shaping communities, and discoveries you don&apos;t want to miss.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            From campus buzz and local updates to entertainment, emerging businesses, and
            interesting products, stay informed, connected, and inspired.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#explore-topics"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              See what&apos;s in Explore
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/marketplace"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Browse marketplace
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-7 border-l-2 border-[#FF5B00] pl-3 font-heading text-sm font-bold text-slate-800">
            One feed. Different perspectives. Endless discoveries.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-orange-100 shadow-2xl shadow-slate-900/10">
            <img
              src="/feed1.jpg"
              alt="Omnimall app shopping feed preview showing products and marketplace posts"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  More than shopping
                </p>
                <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                  A feed full of possibility.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <UsersRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">Your community</p>
              <p className="text-sm font-bold text-slate-900">Your conversations</p>
            </div>
          </div>
          <div className="absolute -right-2 top-5 hidden items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#FF5B00]" />
            Campus · Culture · Community
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="max-w-xl lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Commerce meets culture
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            More than a shopping experience.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Explore is where commerce meets culture, information meets entertainment, and
              communities find a place to connect.
            </p>
            <p>
              It brings different kinds of content into one experience, giving people more reasons
              to visit Omnimall beyond their shopping needs.
            </p>
          </div>
          <div className="mt-7 flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#FF5B00]">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold leading-6 text-slate-700">
              From campus conversations to local discoveries, there&apos;s more to the marketplace.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70" />
          <img
            src="/feed2.jpg"
            alt="Students reading news together in a campus community"
            loading="lazy"
            className="relative aspect-[16/10] w-full rounded-[1.7rem] object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <Newspaper className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Stay in the know</p>
              <p className="text-sm font-bold text-slate-900">Stories that bring us together</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="explore-topics" className="scroll-mt-24 bg-[#f8f8f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            A little of everything
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Different things to discover.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Explore the topics, stories, and people that make a community feel alive.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploreTopics.map(({ icon: Icon, title, description, tone }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="max-w-xl lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Stories bring us together
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            There&apos;s a story behind every trend.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Some stories inform us. Others entertain us. Some introduce us to people and
              businesses we never knew existed.
            </p>
            <p>
              A marketplace can be more than a destination for transactions. It can also be a place
              where communities stay connected, ideas spread, and interesting things get noticed.
            </p>
            <p>That&apos;s what we&apos;re building with Explore.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {feedFeatures.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#fffaf6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <img
            src="/feed2.jpg"
            alt="A campus community sharing ideas and staying informed"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div className="order-1 max-w-xl lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Keep the connection going
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Your community. Your conversations. Your discoveries.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Whether it&apos;s a campus trend, an interesting story, a new business, or something
            happening across your community, don&apos;t miss out on the things worth knowing.
          </p>
          <p className="mt-5 font-heading text-lg font-black text-[#FF5B00]">
            There&apos;s always something happening.
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-700">
            There&apos;s always more to discover.
          </p>
        </div>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-3xl font-black tracking-tight sm:text-4xl">
          Welcome to Omnimall Explore.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Find something new, follow a conversation, or see what&apos;s happening around you.
          There&apos;s always more to discover.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/marketplace"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Discover the marketplace
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-700 px-6 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Share your business
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-8 font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
          Omnimall
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-400">
          Sell with ease. Buy with confidence.
        </p>
      </div>
    </section>
  </div>
);
