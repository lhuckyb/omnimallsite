import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Store,
  MapPin,
  CheckCircle2,
  Search,
  Sparkles,
  Smartphone,
  Layers,
  Zap,
  Users,
  Check,
  Lock,
  BadgeCheck,
  Wrench,
  Clock,
  ChevronRight,
  Laptop,
  Camera,
  BookOpen,
  Tag,
} from 'lucide-react';
import { ASSETS } from '../data/assets';
import { CAMPUSES } from '../data/mockData';
import { DotField } from '../components/ui/dot-field';
import { MockTablet } from '../components/ui/MockTablet';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCampusTab, setActiveCampusTab] = useState<string>('upsa');

  // Interactive Fee Calculator State
  const [sellingPrice, setSellingPrice] = useState<number>(250);

  // Respect user preference for reduced motion
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        delay: shouldReduceMotion ? 0 : custom * 0.06,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/marketplace');
    }
  };

  const selectedCampusData = CAMPUSES.find((c) => c.id === activeCampusTab) || CAMPUSES[0];

  return (
    <div className="min-h-screen bg-white text-[#202124] overflow-x-hidden selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Interactive DotField Hero for "Sell with ease, buy with confidence." */}
      <DotField
        headline="Sell with ease, buy with confidence."
        color="#FF5B00"
        fontFamily="Manrope, sans-serif"
        fontWeight={800}
        description="The structured digital marketplace built specifically for university campuses. Connecting student buyers, verified student storefronts, and skilled peer service providers."
        actions={
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              to="/marketplace"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-xs sm:text-sm font-bold text-white bg-[#FF5B00] hover:bg-orange-600 transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(255,91,0,0.3)] active:scale-[.97] w-full sm:w-auto"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Marketplace</span>
            </Link>
            <Link
              to="/sell"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 active:scale-[.97] transition-all shadow-2xs w-full sm:w-auto"
            >
              <Store className="w-4 h-4 text-[#FF5B00]" />
              <span>Open Student Storefront</span>
            </Link>
          </div>
        }
      />

      {/* Campus Quick Search & Discovery Spotlight */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-white to-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Search & Proof Points */}
            <motion.div
              className="lg:col-span-6 space-y-5 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00] block">
                  Instant Campus Lookup
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] tracking-tight font-heading">
                  Find verified items and services on campus today.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Search across student listings near your hostel or lecture hall with direct transparent prices in Ghanaian Cedis (GH₵).
                </p>
              </div>

              {/* Mobile-Optimized Search Bar */}
              <motion.div variants={fadeInVariants} custom={1} className="max-w-xl">
                <form
                  onSubmit={handleHeroSearch}
                  className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm focus-within:border-[#FF5B00] focus-within:ring-2 focus-within:ring-[#FF5B00]/15 transition-all"
                >
                  <Search className="w-4 h-4 text-slate-400 ml-2.5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search electronics, textbooks, services, hosteller fits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs sm:text-sm text-[#202124] bg-transparent focus:outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 active:scale-98 rounded-xl transition-all shrink-0 flex items-center gap-1"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Popular Keywords */}
                <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 shrink-0">Popular:</span>
                  {['Textbooks & Coursepacks', 'Tech & Audio', 'Hostel Essentials', 'Campus Photography', 'Graphic Design'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSearchQuery(tag);
                        navigate(`/marketplace?search=${encodeURIComponent(tag)}`);
                      }}
                      className="shrink-0 px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-[#FF5B00] transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Proof Points */}
              <motion.div
                variants={fadeInVariants}
                custom={2}
                className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-4 text-left"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-lg sm:text-xl font-black text-[#202124] font-heading">
                    UPSA
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Flagship Launch</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-lg sm:text-xl font-black text-[#202124] font-heading">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Student Verified</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-lg sm:text-xl font-black text-[#FF5B00] font-heading">
                    GH₵ 0
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Listing Commission</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual Stage with Interactive Swipable Tablet */}
            <motion.div
              className="lg:col-span-6 flex items-center justify-center pt-2 sm:pt-4"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <MockTablet />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY OMNIMALL? (COMPARISON MATRIX) */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto space-y-2 mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              The Campus Reality
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              Why WhatsApp status commerce fails students.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every semester, thousands of cedis are lost to vanishing status updates, unindexed group spam, and risky meetup arrangements. Here is how OmniMall solves it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* The Old Way: WhatsApp Statuses & Groups */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200/80 shadow-xs space-y-5"
            >
              <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block">
                    The Problem
                  </span>
                  <h3 className="text-lg font-black text-slate-900 font-heading">
                    WhatsApp Statuses & Class Groups
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 font-bold text-xs">
                  ✕
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Listings vanish in 24 hours:</strong> If you miss a classmate's post, the opportunity is gone forever.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Zero searchability:</strong> No way to filter by price, faculty, condition, or course code without endless scrolling.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Spam in academic groups:</strong> Class group chats get flooded with ads, burying important announcements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Scam & counterfeit risks:</strong> Unverified sellers disappear immediately after taking advance mobile money.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Overseas delivery platforms:</strong> Weeks of waiting, high international shipping, and customs delays that make no sense for campus living.</span>
                </li>
              </ul>
            </motion.div>

            {/* The OmniMall Way */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50/60 via-white to-orange-50/30 border border-orange-200 shadow-sm space-y-5"
            >
              <div className="flex items-center justify-between border-b border-orange-200/70 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00] block">
                    The Solution
                  </span>
                  <h3 className="text-lg font-black text-slate-900 font-heading">
                    OmniMall Campus Marketplace
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5B00] font-bold text-xs">
                  ✓
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Permanent searchable catalog:</strong> Search textbooks, calculators, tech, and services 24/7.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Verified student badges:</strong> Student identity checks ensure you are dealing with genuine peers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Monitored campus handover spots:</strong> Safe physical exchange locations at UPSA Library, Student Centre, and Hostels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Inspect before paying:</strong> Confirm condition in person at the meetup before releasing payment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>GH₵ 0 commission:</strong> 100% of the sale stays in the student entrepreneur's pocket.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (SAFE 3-STEP CAMPUS FLOW) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto space-y-2 mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Simple & Safe Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              How OmniMall works in 3 steps.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From discovering a course textbook to meeting up between lectures in Accra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3.5 relative hover:border-orange-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] font-black flex items-center justify-center text-sm font-heading">
                01
              </div>
              <h3 className="text-base font-extrabold text-slate-900 font-heading">
                Browse or List on Campus
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Buyers search available listings or services near their hostel or lecture hall. Student sellers snap clear photos and list with Genkit AI-assisted descriptions in under a minute.
              </p>
              <span className="text-[11px] font-semibold text-[#FF5B00] block pt-1">
                Zero listing fees · 100% free
              </span>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3.5 relative hover:border-orange-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] font-black flex items-center justify-center text-sm font-heading">
                02
              </div>
              <h3 className="text-base font-extrabold text-slate-900 font-heading">
                Connect Directly via WhatsApp
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clicking inquiry pre-fills a structured WhatsApp message with the exact item title, agreed price, and requested pickup spot so there is zero confusion or haggling.
              </p>
              <span className="text-[11px] font-semibold text-[#FF5B00] block pt-1">
                Direct peer-to-peer connection
              </span>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3.5 relative hover:border-orange-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] font-black flex items-center justify-center text-sm font-heading">
                03
              </div>
              <h3 className="text-base font-extrabold text-slate-900 font-heading">
                Public Handover & Payment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet during daylight at a designated campus landmark (like the UPSA Library or Food Court). Inspect the item physically, test functionality, and complete payment directly.
              </p>
              <span className="text-[11px] font-semibold text-emerald-600 block pt-1">
                Safe · Daylight · Physical verification
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE STUDENT FEE CALCULATOR */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-4"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00] block">
                Empowering Student Income
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-heading">
                Keep 100% of every cedi you earn on campus.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Commercial e-commerce platforms deduct 15% to 25% on every transaction. OmniMall believes university student entrepreneurs should retain every cedi to cover tuition, hostel rent, and supplies.
              </p>
              <div className="pt-2">
                <Link
                  to="/sell"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF5B00] hover:bg-orange-600 text-white text-xs font-bold transition-colors"
                >
                  <Store className="w-4 h-4" />
                  <span>Start Selling on Campus for Free</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-300">Set Your Listing Price:</span>
                  <span className="text-xl font-black text-orange-400 font-heading">GH₵ {sellingPrice}</span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-[#FF5B00] cursor-pointer"
                />

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[11px] text-slate-400 block">OmniMall Commission:</span>
                    <strong className="text-emerald-400 font-black text-lg font-heading">GH₵ 0.00 (0%)</strong>
                    <span className="text-[10px] text-slate-400 block">No hidden fees</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                    <span className="text-[11px] text-orange-300 block">You Receive In Full:</span>
                    <strong className="text-white font-black text-lg font-heading">GH₵ {sellingPrice}.00</strong>
                    <span className="text-[10px] text-orange-200 block">Direct MoMo / Cash</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAMPUS EXPANSION ROADMAP */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-xl mx-auto space-y-2 mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Campus Rollout
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202124] tracking-tight font-heading">
              Active at UPSA. Rolling out across Ghana.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a campus to explore active hubs and designated pickup landmarks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-1.5 overflow-x-auto pb-3 no-scrollbar"
          >
            {CAMPUSES.map((campus) => (
              <button
                key={campus.id}
                onClick={() => setActiveCampusTab(campus.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCampusTab === campus.id
                    ? 'bg-[#FF5B00] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
                }`}
              >
                {campus.shortCode}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#202124] font-heading">
                  {selectedCampusData.name}
                </h3>
                <span className="text-xs text-slate-500">{selectedCampusData.city} · {selectedCampusData.studentCountEstimate}</span>
              </div>
              <span className="self-start sm:self-center text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#FF5B00] border border-orange-200">
                {selectedCampusData.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedCampusData.description}
            </p>

            {selectedCampusData.pickupSpots && (
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Designated Campus Handover Landmarks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCampusData.pickupSpots.map((spot, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-slate-50 text-slate-700 rounded-lg border border-slate-200/70 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#FF5B00]" />
                      <span>{spot}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto px-4 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00] block">
            Join the Campus Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-heading">
            Experience structured campus commerce today.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Whether you are buying course materials, upgrading study equipment, or launching a student business at UPSA, OmniMall is built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              to="/marketplace"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 active:scale-95 rounded-xl transition-all shadow-xs"
            >
              Explore Campus Marketplace
            </Link>
            <Link
              to="/sell"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 rounded-xl transition-all"
            >
              Open Free Student Storefront
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
