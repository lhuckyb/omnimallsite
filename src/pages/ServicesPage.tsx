import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Brush,
  Camera,
  CalendarDays,
  GraduationCap,
  Laptop,
  MapPin,
  MessageSquareText,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

const serviceCategories = [
  {
    icon: Brush,
    title: 'Creative & Design',
    description:
      'Graphic design, branding, flyer design, illustration, video editing, and other creative solutions.',
    tone: 'bg-orange-50 text-[#FF5B00]',
  },
  {
    icon: Camera,
    title: 'Photography & Media',
    description:
      'Photography, videography, event coverage, content creation, and media production.',
    tone: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Laptop,
    title: 'Technology & Digital',
    description:
      'Website development, software solutions, technical support, digital marketing, and more.',
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business & Professional',
    description:
      'Business support, consulting, writing, accounting assistance, and other professional services.',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Wrench,
    title: 'Home & Everyday Services',
    description:
      'Cleaning, maintenance, personal assistance, and other services that make everyday life easier.',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    icon: GraduationCap,
    title: 'Education & Learning',
    description:
      'Tutoring, academic support, lessons, training, and skill development.',
    tone: 'bg-rose-50 text-rose-700',
  },
];

const providerTools = [
  {
    title: 'Build your presence',
    description:
      'Create a profile with a description, service area or remote availability, hours, and examples of your work.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Showcase what you do',
    description:
      'Present your services with descriptions, images, pricing, duration, and other relevant details.',
    icon: Sparkles,
  },
  {
    title: 'Connect with customers',
    description:
      'Manage incoming enquiries and prepare quotes from the provider workspace.',
    icon: MessageSquareText,
  },
];

export const ServicesPage: React.FC = () => (
  <div className="min-h-screen bg-white pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="overflow-hidden border-b border-orange-100 bg-[#fffaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold text-[#FF5B00] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            The Omnimall service marketplace
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Not everything worth selling
            <span className="block text-[#FF5B00]">comes in a box.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-800">
            Discover services. Find the right people.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            From creative professionals and skilled freelancers to everyday service providers,
            Omnimall brings services into one accessible marketplace.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Find someone to design your next flyer, capture an important event, build your website,
            or help with an everyday task. And if you&apos;re the one with the skills, Omnimall
            gives you a place to showcase them.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#service-types"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Explore services
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/sell"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Become a service provider
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-7 border-l-2 border-[#FF5B00] pl-3 font-heading text-sm font-bold text-slate-800">
            Skills deserve visibility. Services deserve a marketplace.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-slate-900/10">
            <img
              src={ASSETS.servicesCreative}
              alt="A creative professional working on a service project"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  Your skills have a place here
                </p>
                <p className="mt-1 font-heading text-xl font-black sm:text-2xl">
                  Make your work discoverable.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <MessageSquareText className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">Find the right connection</p>
              <p className="text-sm font-bold text-slate-900">People-powered services</p>
            </div>
          </div>
          <div className="absolute -right-2 top-5 hidden items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#FF5B00]" />
            Creative · Digital · Everyday
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            More than products
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            A marketplace for what you can do.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Some people sell products. Others sell their time, creativity, knowledge, and
              expertise. We believe both deserve a place in the marketplace.
            </p>
            <p>
              Omnimall makes room for service providers to establish their presence, showcase what
              they offer, and connect with people looking for their skills.
            </p>
            <p>
              From individual freelancers to established service businesses, there&apos;s room for
              different talents and professions.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70" />
          <img
            src={ASSETS.campusCommunity}
            alt="Members of a community sharing their skills and expertise"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Talent is everywhere</p>
              <p className="text-sm font-bold text-slate-900">Discovery starts here</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="service-types" className="scroll-mt-24 bg-[#f8f8f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Find what you need
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Find the service you&apos;re looking for.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Explore a range of skills, services, and professionals in one connected marketplace.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map(({ icon: Icon, title, description, tone }) => (
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
        <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
          Service categories and availability depend on participating providers.
        </p>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="max-w-xl lg:col-span-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            For service providers
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Have a skill? There&apos;s a place for it.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            You don&apos;t need to own a shop or sell physical products to become part of Omnimall.
            If you have a skill, provide a service, or run a service-based business, you can create
            a dedicated presence within the marketplace.
          </p>
          <Link
            to="/sell"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            Become a service provider
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
          {providerTools.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="text-xs font-black text-orange-300">0{index + 1}</span>
              <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
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
            src={ASSETS.servicesCreative}
            alt="A professional preparing creative work for a client"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div className="order-1 max-w-xl lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Make good work easier to find
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Talent is everywhere. Discovery should be easier.
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              A talented graphic designer shouldn&apos;t have to depend entirely on social media
              posts to find clients.
            </p>
            <p>A photographer shouldn&apos;t have to wait for someone to stumble across their work.</p>
            <p>A skilled freelancer shouldn&apos;t have to struggle to make their services visible.</p>
            <p>
              People with valuable skills deserve opportunities to showcase them. That&apos;s one
              of the reasons services have a place on Omnimall.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">
            For customers
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Service cards can show the provider, price or pricing model, location or remote
            availability, and duration. Select “Enquire” to send a message; you need to be signed
            in, and you can include a preferred date.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5B00]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-slate-700">
              An enquiry is a starting point, not a confirmed booking. Agree on the scope, final
              price, timing, and how you will proceed with the provider.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
            <MessageSquareText className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-black text-slate-900">
            For providers
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Set a fixed price, starting price, hourly rate, or custom-quote model for each service.
            Manage enquiries and prepare quotes from the provider workspace. Confirm availability
            and arrangements directly with the customer.
          </p>
          <Link
            to="/sell"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#FF5B00] transition-colors hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5B00]"
          >
            Learn about provider setup
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
          <Sparkles className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-3xl font-black tracking-tight sm:text-4xl">
          Looking for a service or ready to offer one?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Whatever side of the marketplace you&apos;re on, your next opportunity could start here.
        </p>
        <p className="mt-5 font-heading text-base font-bold text-orange-300">
          Find the people. Discover the skills. Make the connection.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#service-types"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore services
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            to="/sell"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-700 px-6 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join as a service provider
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
