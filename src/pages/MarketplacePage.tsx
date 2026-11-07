import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShoppingBag,
  Sparkles,
  Store,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Laptop,
  BookOpen,
  Shirt,
  Home,
  Scissors,
  Wrench,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Search,
  Check,
  Eye,
  Layers,
  Clock,
  Zap,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

interface CategoryInfo {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  whatIsTraded: string[];
  inspectionTips: string[];
  typicalMeetup: string;
  activeCampuses: string;
}

const CATEGORY_DETAILS: CategoryInfo[] = [
  {
    id: 'tech',
    name: 'Tech & Electronics',
    icon: Laptop,
    tagline: 'Laptops, scientific calculators, audio gear & power banks',
    description:
      'Electronics represent the highest volume of value exchanged on campus. OmniMall provides strict guidelines for tech listings so buyers know exact battery health, screen condition, and included accessories.',
    whatIsTraded: [
      'Laptops & MacBooks for coursework and coding',
      'Casio ClassWiz scientific calculators for accounting & stats',
      'Active noise-canceling headphones for quiet study halls',
      'High-capacity power banks for study marathons',
      'Original USB-C chargers, hubs, and iPad styluses',
    ],
    inspectionTips: [
      'Boot up laptops and check battery cycle count and health',
      'Test all keyboard keys, trackpad, and screen backlight uniformity',
      'Plug into a power bank to ensure charging ports are intact',
      'Test audio jacks and Bluetooth wireless connectivity',
    ],
    typicalMeetup: 'UPSA Library Walkway or Student Centre (High daylight visibility & security)',
    activeCampuses: 'UPSA Accra, UG Legon, KNUST Kumasi',
  },
  {
    id: 'academics',
    name: 'Books & Coursepacks',
    icon: BookOpen,
    tagline: 'Prescribed textbooks, revision packs & course literature',
    description:
      'Academic texts are essential every semester. Instead of paying exorbitant bookstore prices, seniors pass down curriculum-approved texts to incoming levels at fair student rates.',
    whatIsTraded: [
      'Business Law, Accounting & Economics textbooks',
      'Faculty coursepacks and lecture compilations',
      'Past examination questions & solution manuals',
      'Professional certification guides (ICAG, ACCA, CIM)',
    ],
    inspectionTips: [
      'Verify edition number against your current semester syllabus',
      'Check for missing pages, broken bindings, or heavy highlighting',
      'Ensure supplementary digital access codes (if needed) are disclosed',
    ],
    typicalMeetup: 'Main Administration Pavilion or Faculty Block foyers',
    activeCampuses: 'UPSA Accra (All Faculties), UG Legon Balme Library',
  },
  {
    id: 'fashion',
    name: 'Campus Fashion & Fits',
    icon: Shirt,
    tagline: 'Student apparel brands, streetwear, vintage hoodies & sneakers',
    description:
      'University campuses are epicenters of youth fashion and creative design. Student apparel makers and vintage curators showcase their drops directly to peers.',
    whatIsTraded: [
      'Limited-run campus hoodies and heavy cotton tees',
      'Curated sneakers and footwear in verified sizes',
      'University canvas tote bags and backpacks',
      'Student-crafted accessories, rings, and eyewear',
    ],
    inspectionTips: [
      'Inspect stitching, zippers, and fabric condition',
      'Verify size tags against standard fit measurements',
      'For footwear, inspect outsoles, heel counter, and midsole cleanliness',
    ],
    typicalMeetup: 'Student Centre Food Court or Hostel Gate Security Checkpoint',
    activeCampuses: 'UPSA Accra, UG Legon Pentagon, KNUST Commercial Area',
  },
  {
    id: 'hostel',
    name: 'Hostel & Dorm Living',
    icon: Home,
    tagline: 'Compact fridges, study tables, desk lamps & room gear',
    description:
      'Moving into residential hostels can be stressful. Students buy and sell bulky appliances and room furniture directly within campus residential compounds without expensive haulage.',
    whatIsTraded: [
      '50L energy-efficient mini refrigerators with iceboxes',
      'Foldable bedside laptop desks with cup holders',
      'Rechargeable study desk lamps and cooling fans',
      'Mattress toppers, shoe racks, and wardrobe organizers',
    ],
    inspectionTips: [
      'For fridges: plug in for 10 minutes to verify compressor cooling',
      'Check desk legs and locking hinges for structural stability',
      'Test fan motors across all speed settings for quiet operation',
    ],
    typicalMeetup: 'Yaa Asantewaa or Oti Boateng Hostel Forecourts',
    activeCampuses: 'UPSA Residential Hostels, UG Evandy & Pentagon',
  },
  {
    id: 'services',
    name: 'Student Skills & Gigs',
    icon: Wrench,
    tagline: 'Campus photography, laptop repairs, braiding & design',
    description:
      'Students possess exceptional professional skills. OmniMall allows student freelancers to publish structured service offerings with transparent turnaround times and starting rates.',
    whatIsTraded: [
      'Executive headshots & campus event photography',
      'Laptop SSD upgrades, Windows cloning & thermal paste servicing',
      'Hostel room braiding, dreadlock maintenance & styling',
      'SRC posters, flyer design & department branding',
      'Thesis formatting and APA 7th academic proofreading',
    ],
    inspectionTips: [
      'Review previous client work samples or portfolio before booking',
      'Confirm agreed turnaround time and delivery format upfront',
      'Clarify scope of revisions included in the starting price',
    ],
    typicalMeetup: 'Student Centre Media Lab or agreed on-campus workspace',
    activeCampuses: 'UPSA Accra, UG Legon, KNUST',
  },
];

export const MarketplacePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('tech');

  const activeCategory =
    CATEGORY_DETAILS.find((c) => c.id === selectedCategory) || CATEGORY_DETAILS[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and Overview */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>The Campus Marketplace Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight">
                How buying and selling works across university campus hubs.
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                OmniMall replaces chaotic WhatsApp status links and unindexed group chats with a structured campus catalog. Learn how listings are organized, how student verification operates, and how our safe handover protocol protects every peer transaction.
              </p>

              {/* Core Feature Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#FF5B00]" />
                  <span>Student ID Verified</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <DollarSign className="w-4 h-4 text-[#FF5B00]" />
                  <span>GH₵ 0 Listing Fees</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#FF5B00]" />
                  <span>Campus Daylight Meetups</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#categories"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Explore Trade Categories</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/sell"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all"
                >
                  <Store className="w-4 h-4 text-[#FF5B00]" />
                  <span>Open a Storefront</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-3">
                <img
                  src={ASSETS.heroMarketplace}
                  alt="OmniMall campus marketplace overview"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl"
                />

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00]">
                      Peer-to-Peer Protocol
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      Zero Commission
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    Inspect on Campus. Pay via Direct MoMo.
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    Buyers test electronics and examine items in person at verified campus landmarks before transferring Cedis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars of the Marketplace */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            Marketplace Structure
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
            Three pillars that make campus trade reliable.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Unlike anonymous social media groups, OmniMall brings structure and verification to everyday university exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 01</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Structured Item Listings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every listing includes explicit condition grades (Brand New, Like New, Good), verified photos, fixed Ghanaian Cedi prices, and exact campus meetup points. No vague "DM for price" games.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <Store className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 02</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Permanent Student Storefronts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Campus merchants receive their own clean, shareable URL (omnimall.app/@store). Products remain permanently discoverable and searchable instead of disappearing after 24 hours on a status.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 03</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Integrated Student Gigs & Skills
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creative and technical services exist right alongside physical inventory. Students can hire peer photographers, thesis formatters, laptop technicians, and hair stylists with transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Information Deep-Dive */}
      <section id="categories" className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Category Guide
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              What students trade across the campus network.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any category below to understand its standards, what items are commonly listed, and how to inspect them safely.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {CATEGORY_DETAILS.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#FF5B00] text-white shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Information Card */}
          <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    {activeCategory.name}
                  </h3>
                  <p className="text-xs text-[#FF5B00] font-semibold">{activeCategory.tagline}</p>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
                <MapPin className="w-4 h-4 text-[#FF5B00]" />
                <span>{activeCategory.activeCampuses}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeCategory.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Commonly Traded Items */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>Typical Items & Inventory</span>
                </h4>
                <ul className="space-y-2">
                  {activeCategory.whatIsTraded.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inspection & Safety Tips */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#FF5B00]" />
                  <span>Inspection Guidelines Before Paying</span>
                </h4>
                <ul className="space-y-2">
                  {activeCategory.inspectionTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70"
                    >
                      <span className="w-4 h-4 rounded-full bg-orange-100 text-[#FF5B00] text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Meetup Spot Callout */}
            <div className="p-4 rounded-2xl bg-orange-100/60 border border-orange-200/80 flex items-center justify-between text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5B00] shrink-0" />
                <span>
                  <strong>Recommended Handover Spot:</strong> {activeCategory.typicalMeetup}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Anatomy of a Verified Listing */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Listing Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
              The anatomy of a trusted campus listing.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every item posted on the OmniMall marketplace is designed to provide full clarity upfront so buyers never have to guess or deal with hidden surprises.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: 'Student ID Verification Badge',
                  desc: 'Confirms the seller is an actively enrolled undergraduate or postgraduate at the campus.',
                },
                {
                  title: 'Standardized Condition Grading',
                  desc: 'Classified strictly as Brand New (sealed), Like New (mint), or Good Condition (light wear disclosed).',
                },
                {
                  title: 'Transparent Ghanaian Cedi Pricing',
                  desc: 'Fixed transparent prices with no surprise fees or post-inquiry price inflation.',
                },
                {
                  title: 'Designated Handover Location',
                  desc: 'Sellers specify exact campus spots (e.g. UPSA Library Walkway, Food Court) for daylight collection.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 text-[#FF5B00] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-heading">{item.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Interactive Listing Breakdown Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Sample Verified Listing Layout
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100">
                Live Verification Model
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Listing Title</div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    Casio fx-991EX ClassWiz Advanced Scientific Calculator
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold">Fair Price</div>
                  <div className="text-base sm:text-lg font-black text-[#FF5B00] font-heading">
                    GH₵ 240
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Condition</span>
                  <span className="font-bold text-slate-800">Like New / Mint</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Handover Location</span>
                  <span className="font-bold text-slate-800">UPSA Library Walkway</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Seller Identity</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <span>Campus Bookmart Hub</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF5B00]" />
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Payment Method</span>
                  <span className="font-bold text-slate-800">MoMo upon Handover</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-100 text-[11px] text-slate-700 leading-relaxed">
                <strong>Inspection Guarantee:</strong> Buyer tests the solar cell, button responses, and screen contrast in person before transferring money. Zero advance deposit required.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: OmniMall vs WhatsApp vs Generic Classifieds */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Market Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              How OmniMall compares to traditional channels.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              See why university students are shifting their commerce from chaotic status updates to OmniMall.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 border-b border-slate-200/80 text-slate-700 font-heading">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-[#FF5B00] font-black">OmniMall Marketplace</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-semibold">WhatsApp Statuses & Groups</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-semibold">Generic Online Classifieds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Searchability</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Instant keyword & category index</td>
                  <td className="p-4 sm:p-5 text-slate-400">Zero search; buried in chat spam</td>
                  <td className="p-4 sm:p-5">Basic search; nationwide noise</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Listing Lifespan</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Permanent until sold</td>
                  <td className="p-4 sm:p-5 text-slate-400">Vanishes in 24 hours</td>
                  <td className="p-4 sm:p-5">30-60 days with ad renewal fees</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Seller Verification</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Verified University Student ID</td>
                  <td className="p-4 sm:p-5 text-slate-400">Anonymous numbers; high scam rate</td>
                  <td className="p-4 sm:p-5">Generic email or phone; unverified</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Proximity & Meetup</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Designated daylight campus spots</td>
                  <td className="p-4 sm:p-5 text-slate-400">Uncoordinated & risky</td>
                  <td className="p-4 sm:p-5">Expensive dispatch riders across cities</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Commissions</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">GH₵ 0 Listing Fees (Keep 100%)</td>
                  <td className="p-4 sm:p-5 text-slate-400">Free, but zero discovery</td>
                  <td className="p-4 sm:p-5">15% - 20% platform cut + delays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Handover & Scam Prevention Charter Callout */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Anti-Scam Charter
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              The Zero Advance Deposit Rule
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We strictly prohibit sellers from demanding advance Mobile Money deposits or booking fees before an in-person meeting. Every transaction on OmniMall is conducted face-to-face on campus: you inspect the product, confirm its working state, and transfer Cedis directly on the spot.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/campuses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <span>View Designated Meetup Spots</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all w-full sm:w-auto justify-center"
            >
              <HelpCircle className="w-4 h-4 text-[#FF5B00]" />
              <span>Read Safety FAQ</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
