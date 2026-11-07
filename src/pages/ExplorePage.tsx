import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Compass,
  Sparkles,
  ShoppingBag,
  Store,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Smartphone,
  Laptop,
  Layers,
  Zap,
} from 'lucide-react';
import { MockTablet } from '../components/ui/MockTablet';
import { MockLaptop } from '../components/ui/MockLaptop';
import { ASSETS } from '../data/assets';

const CAMPUS_SPOTS = [
  {
    id: 'spot-1',
    name: 'Library Walkway & Rawlings Block',
    badge: 'High Security · Monitored',
    desc: 'The best spot for laptops, smartphones, and high-value electronics. Ample daytime foot traffic and campus security presence.',
    hours: '8:00 AM – 7:30 PM',
    safetyRating: '5.0 / 5.0 Safety Score',
    recommendedItems: 'Laptops, Cameras, Textbooks, Tech Gadgets',
  },
  {
    id: 'spot-2',
    name: 'Student Centre Food Court Foyer',
    badge: 'Central Hub · Vibrant',
    desc: 'The social heartbeat of UPSA. Ideal for quick midday handovers between lectures while grabbing lunch.',
    hours: '9:00 AM – 8:00 PM',
    safetyRating: '4.9 / 5.0 Safety Score',
    recommendedItems: 'Fashion, Sneakers, Tote Bags, Accessories',
  },
  {
    id: 'spot-3',
    name: 'Main Administration Pavilion',
    badge: 'Perimeter Checkpoint',
    desc: 'Located right next to the security barrier. Perfect if meeting a verified seller who lives just off campus.',
    hours: '8:00 AM – 6:00 PM',
    safetyRating: '5.0 / 5.0 Safety Score',
    recommendedItems: 'Appliances, Bulk Notes, Packaged Orders',
  },
  {
    id: 'spot-4',
    name: 'Yaa Asantewaa / Oti Boateng Forecourts',
    badge: 'Hostel District',
    desc: 'Well-lit forecourt gates for residential students. Great for mini-fridges, study lamps, and room essentials.',
    hours: '8:00 AM – 9:00 PM',
    safetyRating: '4.8 / 5.0 Safety Score',
    recommendedItems: 'Hostel Fridges, Bedding, Desk Lamps, Fans',
  },
];

export const ExplorePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activePersona, setActivePersona] = useState<'buyer' | 'seller' | 'safety'>('buyer');
  const [selectedSpot, setSelectedSpot] = useState(CAMPUS_SPOTS[0]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Campus Ecosystem Tour</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight"
            >
              See how OmniMall powers commerce right on your campus.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              Explore our verified marketplace, peer storefront tools, and designated safe meetup spots designed to make buying and selling effortless for students.
            </motion.p>

            {/* Interactive Persona Tabs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'buyer', label: 'For Student Buyers', icon: ShoppingBag },
                { id: 'seller', label: 'For Student Sellers', icon: Store },
                { id: 'safety', label: 'Campus Safety Blueprint', icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activePersona === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePersona(tab.id as any)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-[#FF5B00] text-white shadow-md'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Active Persona Showcase Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 mb-16">
          {activePersona === 'buyer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                  The Buyer Experience
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Find what you need between lectures with complete confidence.
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Hyperlocal Proximity',
                      desc: 'Items are filtered by your university and hostel zone. Walk 3 minutes across campus rather than waiting 3 days for dispatch.',
                    },
                    {
                      title: 'Inspect Before You Pay',
                      desc: 'Meet in daylight, check the laptop screen or test headphones, and only send MoMo when you are 100% satisfied.',
                    },
                    {
                      title: 'Transparent Pricing',
                      desc: 'Exact Ghanaian Cedi prices without mystery "DM for price" games. Know the cost upfront.',
                    },
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#FF5B00] shrink-0 font-bold text-xs mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{p.title}</div>
                        <div className="text-[11px] text-slate-600 leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/marketplace"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5B00] text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-xs"
                >
                  <span>Start Browsing Marketplace</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center">
                <MockTablet />
              </div>
            </div>
          )}

          {activePersona === 'seller' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                  The Seller Experience
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Your official student storefront with zero commission.
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Shareable Store Link',
                      desc: 'Give buyers a clean link (omnimall.app/@yourstore) with all your inventory in one indexed place.',
                    },
                    {
                      title: 'Keep 100% of Payouts',
                      desc: 'No listing fees, no platform commission cuts. The money goes directly to your MoMo.',
                    },
                    {
                      title: 'Verified Student Shield',
                      desc: 'Build a trustworthy brand that stands out from anonymous scammers in spam groups.',
                    },
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#FF5B00] shrink-0 font-bold text-xs mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{p.title}</div>
                        <div className="text-[11px] text-slate-600 leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/sell"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5B00] text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-xs"
                >
                  <span>Open Your Storefront</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center">
                <MockLaptop />
              </div>
            </div>
          )}

          {activePersona === 'safety' && (
            <div className="space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                  Safety Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Campus-verified, peer-protected, zero ghosting.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every layer of OmniMall is designed around verified university ID identity and public campus handover points.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5B00]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    Student ID Moderation
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sellers submit student ID cards or university portal profiles, tying every listing to an accountable individual.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5B00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    Designated Handover Spots
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transactions only happen at well-lit, CCTV-monitored university public walkways, food courts, and security gates.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5B00]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    No Advance Booking Fees
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We prohibit advance deposits. You inspect the product in person with your hands before any cedi changes hands.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Campus Handover Spot Explorer */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                UPSA Flagship Hub
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Designated Safe Campus Meetup Zones
              </h3>
              <p className="text-xs text-slate-400">
                Click any zone below to preview safety scores, open hours, and recommended trade categories.
              </p>
            </div>
            <Link
              to="/campuses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5B00] hover:text-orange-400 transition-colors"
            >
              <span>View All Campuses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Spots Selector Buttons */}
            <div className="md:col-span-5 space-y-2">
              {CAMPUS_SPOTS.map((spot) => {
                const isSelected = selectedSpot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedSpot(spot)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-[#FF5B00] shadow-md'
                        : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-white font-heading">
                        {spot.name}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#FF5B00] font-semibold">{spot.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Spot Detail Preview Box */}
            <div className="md:col-span-7 bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="space-y-0.5">
                  <h4 className="text-base font-bold text-white font-heading">
                    {selectedSpot.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{selectedSpot.safetyRating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900 px-3 py-1 rounded-xl border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>{selectedSpot.hours}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedSpot.desc}
              </p>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Most Traded Here:
                </span>
                <span className="text-xs font-semibold text-white">
                  {selectedSpot.recommendedItems}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Student Journey Timeline */}
        <div className="mt-16 text-center space-y-10">
          <div className="max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Everyday Flow
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              A day in the life of an OmniMall student trade
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                time: '10:15 AM',
                title: 'Search in Lecture',
                desc: 'Quickly find a scientific calculator or textbook near your hall.',
              },
              {
                time: '12:30 PM',
                title: 'Chat & Coordinate',
                desc: 'Agree on a meeting spot at the library walkway after class.',
              },
              {
                time: '02:00 PM',
                title: 'Inspect In Person',
                desc: 'Check the calculator display, buttons, and solar cell.',
              },
              {
                time: '02:05 PM',
                title: 'MoMo & Review',
                desc: 'Transfer Cedis directly to seller and leave a 5-star rating.',
              },
            ].map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                <div className="text-xs font-black text-[#FF5B00] font-heading">{step.time}</div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
