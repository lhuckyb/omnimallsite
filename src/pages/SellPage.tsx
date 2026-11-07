import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Store,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Smartphone,
  MapPin,
  Clock,
  HelpCircle,
  ChevronDown,
  Users,
  Award,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

export const SellPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Interactive Fee & Earnings Calculator
  const [itemPrice, setItemPrice] = useState<number>(350);
  const [salesPerMonth, setSalesPerMonth] = useState<number>(8);

  // Store handle simulator
  const [handleInput, setHandleInput] = useState<string>('kofi-tech');
  const [submittedWaitlist, setSubmittedWaitlist] = useState<boolean>(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const monthlyGross = itemPrice * salesPerMonth;
  const otherPlatformCut = Math.round(monthlyGross * 0.15); // typical 15% marketplace commission
  const omnimallEarnings = monthlyGross; // 0% fee
  const savedCedis = otherPlatformCut;

  const faqs = [
    {
      q: 'Do I need to pay to create a student storefront?',
      a: 'No! Setting up your store profile and listing your first items on OmniMall is 100% free. We believe students should keep 100% of their hard-earned money.',
    },
    {
      q: 'How does buyer payment work?',
      a: 'Buyers meet you in person at designated campus spots (like the UPSA Library Walkway or Student Centre). They inspect the item and transfer money directly to your MTN Mobile Money, Telecel Cash, or pay cash upon satisfaction.',
    },
    {
      q: 'Can I sell both physical products and student services?',
      a: 'Absolutely. A single storefront can list physical goods (like tech, clothes, room accessories) as well as peer services (like photography, hair styling, typing, tutoring).',
    },
    {
      q: 'How do I get the "Verified Student Merchant" badge?',
      a: 'Once you sign up, simply upload a quick snapshot of your student ID card. Our student moderation team approves verified accounts within 2 to 4 hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#202124] selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commission · 100% Student Merchant Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight">
                Turn your campus hustle into a verified student store.
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Stop losing sales in chaotic WhatsApp groups. Get your own shareable store link, catalog your products, and connect directly with thousands of buyers across UPSA and Accra campuses.
              </p>

              {/* Store Handle Simulator Pill */}
              <div className="pt-2 max-w-lg">
                <div className="p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2 focus-within:border-[#FF5B00] focus-within:ring-2 focus-within:ring-[#FF5B00]/15 transition-all">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 pl-3 select-none">
                    omnimall.app/@
                  </span>
                  <input
                    type="text"
                    value={handleInput}
                    onChange={(e) => setHandleInput(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                    placeholder="yourstore"
                    className="flex-1 py-2 text-xs sm:text-sm font-bold text-[#202124] bg-transparent focus:outline-none"
                  />
                  <a
                    href={`mailto:merchants@omnimall.app?subject=Claim%20Storefront%20Handle%20@${encodeURIComponent(handleInput)}`}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 active:scale-95 rounded-xl transition-all shrink-0 flex items-center gap-1"
                  >
                    <span>Claim Handle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2 pl-2 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>omnimall.app/@{handleInput || 'yourstore'} is available for registration!</span>
                </div>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>GH₵ 0 Listing Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>Instant MoMo Payouts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>UPSA Verified Badge</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Merchant Card Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-3">
                <img
                  src={ASSETS.vendorStorefront}
                  alt="Student campus merchant storefront"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl"
                />

                {/* Floating Store Card Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5B00] font-black text-sm">
                        NY
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-xs sm:text-sm text-slate-900">Nana Yaa Tech</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-[#FF5B00]" />
                        </div>
                        <span className="text-[10px] text-slate-500">UPSA Level 300 · 116 Verified Sales</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Active Merchant
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 italic">
                    "OmniMall gave my store a clean URL I could put in my bio. Handover at the food court takes 3 minutes."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Fee & Profit Calculator */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Interactive Fee Simulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202124] tracking-tight font-heading">
              Calculate how much you keep on OmniMall.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Other commercial platforms take 15% to 20% commission on every sale. OmniMall is built for students, keeping your profits 100% intact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Inputs Column */}
            <div className="space-y-6">
              {/* Average Item Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Average Item Price</span>
                  <span className="text-[#FF5B00] text-sm font-black">GH₵ {itemPrice}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="3000"
                  step="10"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>GH₵ 20 (books, accessories)</span>
                  <span>GH₵ 3,000 (laptops, phones)</span>
                </div>
              </div>

              {/* Monthly Sales Count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Estimated Deals / Month</span>
                  <span className="text-[#FF5B00] text-sm font-black">{salesPerMonth} orders</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={salesPerMonth}
                  onChange={(e) => setSalesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5B00]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 deal</span>
                  <span>50 deals</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 space-y-1">
                <div className="text-xs font-bold text-[#FF5B00] flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimated Monthly Volume</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                  GH₵ {monthlyGross.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Results Comparison Column */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Side-by-Side Payout
              </span>

              {/* OmniMall Card */}
              <div className="p-4 rounded-xl bg-white border-2 border-[#FF5B00] shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider">On OmniMall</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-[#FF5B00]">0% Fee</span>
                </div>
                <div className="text-2xl font-black text-slate-900 font-heading">
                  GH₵ {omnimallEarnings.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-500">You keep 100% of the money via direct MoMo.</p>
              </div>

              {/* Traditional Platforms Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Other Marketplaces (15% cut)</span>
                  <span className="text-rose-500 font-bold">- GH₵ {otherPlatformCut.toLocaleString()}</span>
                </div>
                <div className="text-lg font-bold text-slate-600 font-heading">
                  GH₵ {(monthlyGross - otherPlatformCut).toLocaleString()}
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="pt-2 text-center">
                <span className="text-xs text-slate-500">Extra money staying in your pocket:</span>
                <div className="text-lg font-black text-emerald-600 font-heading">
                  + GH₵ {savedCedis.toLocaleString()} / month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works: 4-Step Onboarding */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Fast Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202124] tracking-tight font-heading">
              Four steps from dorm room to verified vendor.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              No complicated corporate registration. Built specifically for students on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Verify Student ID',
                desc: 'Upload a snap of your student ID card or portal screenshot to get the trusted campus badge.',
                icon: <ShieldCheck className="w-5 h-5 text-[#FF5B00]" />,
              },
              {
                step: '02',
                title: 'Create Your Store',
                desc: 'Pick your store name, customize your banner, and get your dedicated link (omnimall.app/@yourname).',
                icon: <Store className="w-5 h-5 text-[#FF5B00]" />,
              },
              {
                step: '03',
                title: 'List Products in 60s',
                desc: 'Take clean photos, set fair Ghanaian Cedi prices, and select your preferred campus meetup spots.',
                icon: <Zap className="w-5 h-5 text-[#FF5B00]" />,
              },
              {
                step: '04',
                title: 'Meet & Cash Out',
                desc: 'Meet buyers safely at designated spots like the UPSA Library and receive MoMo on the spot.',
                icon: <DollarSign className="w-5 h-5 text-[#FF5B00]" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-300 font-heading">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Merchant Testimonials */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Merchant Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202124] tracking-tight font-heading">
              Trusted by top student entrepreneurs.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              See how peers are funding their fees, upgrading gear, and building legitimate brands on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'Before OmniMall, I had to repost 15 laptop photos every 24 hours on WhatsApp status. Now I just drop my store link and buyers inspect on campus before paying.',
                name: 'Kofi Audio Vault',
                school: 'UPSA Level 400 · Audio & Gadgets',
                sales: '84 Completed Deals',
              },
              {
                quote:
                  'Our limited edition hoodie drops sold out in 4 days. Being verified gave freshmen the confidence to buy without fear of being scammed.',
                name: 'AfroCampus Threads',
                school: 'UPSA Level 300 · Fashion & Custom Fits',
                sales: '92 Completed Deals',
              },
              {
                quote:
                  'I repair MacBooks and upgrade SSDs. Listing my service on OmniMall brought me customers from UG Legon and Wisconsin university as well.',
                name: 'Emmanuel Tech Clinic',
                school: 'UPSA Level 200 · Tech Support',
                sales: '5.0 Star Rating (60+ Reviews)',
              },
            ].map((merchant, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{merchant.quote}"
                </p>
                <div className="pt-3 border-t border-slate-100 space-y-0.5">
                  <div className="text-xs font-bold text-slate-900 font-heading">
                    {merchant.name}
                  </div>
                  <div className="text-[11px] text-slate-500">{merchant.school}</div>
                  <div className="text-[10px] font-bold text-[#FF5B00]">{merchant.sales}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller FAQs */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202124] tracking-tight font-heading">
              Frequently asked merchant questions.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#FF5B00]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-12 bg-gradient-to-r from-orange-600 to-[#FF5B00] rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-xl">
            <div className="max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Ready to open your campus storefront?
              </h3>
              <p className="text-xs sm:text-sm text-orange-100">
                Join over 200 student merchants setting up shop across UPSA and surrounding university hubs today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:merchants@omnimall.app?subject=Apply%20for%20Student%20Storefront"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#FF5B00] hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Apply for Storefront</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/marketplace"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-700/60 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Browse Existing Stores</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
