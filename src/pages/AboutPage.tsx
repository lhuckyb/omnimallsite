import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  UsersRound,
  Heart,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Store,
  Layers3,
  Award,
  Zap,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

export const AboutPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* About Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]">
                <Heart className="w-3.5 h-3.5 fill-[#FF5B00]" />
                <span>Our Story & Mission</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight">
                Built by students, for students. Re-imagining campus trade.
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                OmniMall started right here at UPSA out of a simple frustration: university students shouldn't have to rely on vanishing 24-hour WhatsApp statuses, unindexed group spam, and risky off-campus arrangements to buy a textbook or sell a laptop.
              </p>

              {/* Stats Bar */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-100 max-w-lg">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-[#FF5B00] font-heading">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">Student Verified</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    GH₵ 0
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">Commission Cuts</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    4+
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">Campus Hubs</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-3">
                <img
                  src={ASSETS.campusCommunity}
                  alt="Student campus community"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 font-heading">
                    <Sparkles className="w-4 h-4 text-[#FF5B00]" />
                    <span>The OmniMall Manifesto</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Local commerce is safer, faster, and more affordable when built around real university community ties.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              The Problem We Solved
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading leading-snug">
              Why WhatsApp status commerce was broken from day one.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Every semester at UPSA, Legon, and KNUST, thousands of students scramble for study materials, gadgets, hostel appliances, and services. Until now, this commerce lived across dozens of chaotic WhatsApp groups and fleeting 24-hour status stories.
              </p>
              <p>
                The problems were painfully obvious: good listings vanished overnight, search was non-existent, scam artists hid behind fake numbers demanding advance MoMo deposits, and buyers had no reliable way to verify who they were dealing with.
              </p>
              <p>
                OmniMall was created to fix that once and for all: a structured, permanent, and secure campus marketplace where student sellers get legitimate storefronts, items are indexed by category, and handovers happen at verified campus locations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Identity Verification</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every merchant is verified with student credentials, creating mutual accountability.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Designated Zones</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Safe handovers at daylight campus hotspots like library walkways and student centres.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">0% Extortion Fees</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Zero listing fees, zero percentage cuts. Student entrepreneurs keep 100% of their earnings.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Gigs & Skills Included</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                From photography to device repair, campus talents finally have a dedicated showcase.
              </p>
            </div>
          </div>
        </div>

        {/* Our 4 Core Pillars */}
        <div className="mt-20 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              What we stand for every single day
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF5B00]">
                <UsersRound className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-heading">Community Over Corporate Greed</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We will never charge students predatory percentage fees on transactions. Our platform exists to empower students to pay tuition, acquire work gear, and achieve independence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF5B00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-heading">Radical Campus Safety</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We believe in daylight peer inspections. You touch the item, check its functionality, and only transfer funds when you're smiling. No advance deposits, ever.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF5B00]">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-heading">Frictionless Experience</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                List an item in 60 seconds from your phone. Search instantly by hostel or department. Trade within walking distance of your next lecture.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-orange-600 to-[#FF5B00] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Ready to experience campus commerce done right?
            </h3>
            <p className="text-xs sm:text-sm text-orange-100">
              Join thousands of students finding gear and growing their ventures on OmniMall.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#FF5B00] hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              <span>Explore Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sell"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-700/60 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all shrink-0"
            >
              <span>Open Storefront</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
