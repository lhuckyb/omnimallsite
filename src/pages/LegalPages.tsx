import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Mail } from 'lucide-react';

export const CookiesPage: React.FC = () => (
  <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-10 sm:py-14">
      <div className="mx-auto max-w-4xl space-y-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#FF5B00]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to OmniMall
        </Link>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
            <Cookie className="h-3.5 w-3.5" />
            Website information
          </span>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Cookies and browser storage
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            This notice describes the official website, not the OmniMall buyer or seller apps.
          </p>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-4xl space-y-5 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-heading text-lg font-bold text-slate-900">
          What this website does
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          The official website provides information about OmniMall and links to contact support.
          It does not provide sign-in or checkout. The website code reviewed does not set cookies
          or use browser storage for login, cart, or saved preferences.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Selecting an email link opens a draft in your email app. This website does not send or
          store the contents of that draft.
        </p>
      </article>

      <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-heading text-lg font-bold text-slate-900">
          The OmniMall apps
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          The buyer and seller apps have separate account and marketplace features. This website
          notice does not describe the apps’ storage or privacy practices; see the{' '}
          <Link to="/privacy" className="font-semibold text-[#FF5B00] hover:text-orange-700">
            privacy information
          </Link>{' '}
          for the current details and review status.
        </p>
      </article>

      <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-8">
        <h2 className="font-heading text-lg font-bold text-slate-900">Questions?</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Contact{' '}
          <a
            href="mailto:support@omnimall.app"
            className="font-semibold text-[#FF5B00] underline underline-offset-2"
          >
            support@omnimall.app
          </a>
          .
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate-600">
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          Email links open a draft and do not send a message from this website.
        </p>
      </div>
    </main>
  </div>
);
