import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  MessageSquareText,
  MapPin,
  Wrench,
} from 'lucide-react';

const providerTools = [
  {
    title: 'Build a service profile',
    description:
      'Add a description, service area or remote availability, hours, and examples of your work.',
    icon: Wrench,
  },
  {
    title: 'Set clear pricing',
    description:
      'Choose a fixed price, starting price, hourly rate, or custom-quote model for each service.',
    icon: MapPin,
  },
  {
    title: 'Respond to enquiries',
    description:
      'Manage incoming enquiries and prepare quotes from the provider workspace.',
    icon: MessageSquareText,
  },
];

export const ServicesPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Wrench className="h-3.5 w-3.5" />
            Service marketplace overview
          </span>
          <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-[#202124] sm:text-5xl">
            Explore how service listings and enquiries work.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The OmniMall app lets buyers review service details and send an enquiry to a provider.
            Listings can include price format, provider information, duration, and where the
            service is available. This page explains the features; it does not display live offers.
          </p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              For customers
            </span>
            <h2 className="mt-2 font-heading text-2xl font-black text-slate-900 sm:text-3xl">
              See the details before you reach out
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Service cards can show the provider, price or pricing model, location or remote
            availability, and duration. Select “Enquire” to send a message; you need to be signed
            in, and you can include a preferred date.
          </p>
          <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
            <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#FF5B00]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-slate-700">
              An enquiry is a starting point, not a confirmed booking. Agree on the scope, final
              price, timing, and how you will proceed with the provider.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
          {providerTools.map(({ title, description, icon: Icon }) => (
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
          <h2 className="font-heading text-xl font-black">Offer a service?</h2>
          <p className="mt-1 text-sm text-slate-300">
            Learn about service-provider setup and the review process.
          </p>
        </div>
        <Link
          to="/sell"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span>Seller onboarding</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);
