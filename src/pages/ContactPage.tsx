import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-[#FF5B00]">
              <Mail className="h-3.5 w-3.5" />
              Contact OmniMall
            </span>
            <h1 className="font-heading text-3xl font-black tracking-tight text-[#202124] sm:text-5xl">
              How can we help?
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Get in touch about using OmniMall, managing a storefront, or a question about our
              policies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#FF5B00]">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">Email our team</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Send your question to{' '}
            <a
              href="mailto:omnimallinc@gmail.com"
              className="font-semibold text-[#FF5B00] underline underline-offset-2"
            >
              omnimallinc@gmail.com
            </a>
            . You can include relevant details in your email.
          </p>
          <a
            href="mailto:omnimallinc@gmail.com"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>Email OmniMall</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            This opens an email draft in your email app. This website does not send or store your
            message.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#FF5B00]">
            <Phone className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">Call or WhatsApp</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Call us or send a WhatsApp message at{' '}
            <a
              href="tel:0597204494"
              className="font-semibold text-[#FF5B00] underline underline-offset-2"
            >
              059 720 4494
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:0597204494"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FF5B00] px-5 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call us
            </a>
            <a
              href="https://wa.me/233597204494"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-heading text-xl font-black text-slate-900">
            Looking for an answer?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Visit the help page for information about product listings, service enquiries, seller
            accounts, and how the marketplace works.
          </p>
          <Link
            to="/help"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
          >
            <span>Visit Help & FAQs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
