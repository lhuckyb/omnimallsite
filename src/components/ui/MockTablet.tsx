import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Store,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Heart,
  Share2,
  ArrowRight,
  Star,
  Wifi,
  Battery,
  Signal,
  Check,
} from 'lucide-react';
import { ASSETS } from '../../data/assets';

export const MockTablet: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [sharedToast, setSharedToast] = useState(false);

  const slides = [
    {
      id: 'marketplace',
      tabLabel: 'Marketplace',
      tabIcon: ShoppingBag,
      title: 'Active UPSA Marketplace',
      tagline: 'Textbooks, noise-canceling headphones, tech & hostel living gear',
      image: ASSETS.heroMarketplace,
      badge: '100% Student Verified',
      status: 'Trending on Campus',
      landmark: 'UPSA Library Quad',
      metric: '450+ Active Listings',
      ctaText: 'Browse Catalog',
      targetPath: '/marketplace',
      hotspots: [
        {
          label: 'Sony XM4 Headphones',
          price: 'GH₵ 1,450',
          position: 'top-10 left-6 sm:top-12 sm:left-10',
          tag: 'Verified Tech',
        },
        {
          label: 'Casio ClassWiz fx-991EX',
          price: 'GH₵ 240',
          position: 'bottom-24 right-6 sm:bottom-28 sm:right-10',
          tag: 'Exam Ready',
        },
      ],
      trustPoints: ['No advance online payment', 'Test & inspect before paying'],
    },
    {
      id: 'storefronts',
      tabLabel: 'Campus Stores',
      tabIcon: Store,
      title: 'Verified Student Storefronts',
      tagline: 'Student merchants run branded digital shops with GH₵ 0 listing fees',
      image: ASSETS.vendorStorefront,
      badge: 'Zero Commission',
      status: 'Top Merchant Hub',
      landmark: 'Hostel Walkways & Foyer',
      metric: '85+ Student Stores',
      ctaText: 'Open Free Store',
      targetPath: '/sell',
      hotspots: [
        {
          label: 'Kofi Audio Vault',
          price: 'Level 2 Merchant',
          position: 'top-10 left-6 sm:top-12 sm:left-10',
          tag: '★ 4.9 (38 Sales)',
        },
        {
          label: 'Instant WhatsApp Inquiries',
          price: '0% Platform Fee',
          position: 'bottom-24 right-6 sm:bottom-28 sm:right-10',
          tag: 'Instant Setup',
        },
      ],
      trustPoints: ['Keep 100% of profits', 'Direct customer contact'],
    },
    {
      id: 'services',
      tabLabel: 'Peer Services',
      tabIcon: Sparkles,
      title: 'Campus Skills & Freelancers',
      tagline: 'Connect directly with student portrait photographers, coders & tutors',
      image: ASSETS.servicesCreative,
      badge: 'Verified Peers',
      status: 'Creative Collective',
      landmark: 'Student Centre Media Lab',
      metric: '60+ Skilled Peers',
      ctaText: 'Hire Campus Peer',
      targetPath: '/services',
      hotspots: [
        {
          label: 'Graduation Photoshoots',
          price: 'From GH₵ 150',
          position: 'top-10 left-6 sm:top-12 sm:left-10',
          tag: 'Portfolio Ready',
        },
        {
          label: 'Coding & Accounting Tutors',
          price: 'GH₵ 40/hr',
          position: 'bottom-24 right-6 sm:bottom-28 sm:right-10',
          tag: 'Course Aligned',
        },
      ],
      trustPoints: ['Portfolio verification', 'Pay only after milestone handover'],
    },
    {
      id: 'community',
      tabLabel: 'Safe Zones',
      tabIcon: ShieldCheck,
      title: 'Designated Handover Hubs',
      tagline: 'Daylight physical inspection in active, monitored campus spots',
      image: ASSETS.campusCommunity,
      badge: 'Safe Meetups',
      status: 'Monitored Campus Hub',
      landmark: 'Student Centre Food Court',
      metric: '12 Monitored Spots',
      ctaText: 'View Meetup Map',
      targetPath: '/campuses',
      hotspots: [
        {
          label: 'UPSA Food Court Hub',
          price: 'High-Traffic Area',
          position: 'top-10 left-6 sm:top-12 sm:left-10',
          tag: 'Daylight 8am - 6pm',
        },
        {
          label: 'Handover Protection',
          price: 'Zero Scams',
          position: 'bottom-24 right-6 sm:bottom-28 sm:right-10',
          tag: 'In-Person Checks',
        },
      ],
      trustPoints: ['Security-lit walkways', 'Close to lecture halls & admin'],
    },
  ];

  // Auto-advance slides every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 40;
    if (info.offset.x < -threshold || info.velocity.x < -350) {
      handleNext();
    } else if (info.offset.x > threshold || info.velocity.x > 350) {
      handlePrev();
    }
  };

  const toggleLike = (index: number) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleShare = () => {
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2200);
  };

  const active = slides[currentSlide];

  return (
    <div
      className="relative w-full max-w-[560px] sm:max-w-[640px] md:max-w-[720px] mx-auto select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Warm Ambient Glow behind the Tablet Chassis */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-[#FF5B00]/20 via-amber-400/10 to-[#FF5B00]/15 rounded-[48px] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* ======================================================== */}
      {/* TABLET HARDWARE BODY (Aero-Grade Platinum Unibody Frame)  */}
      {/* ======================================================== */}
      <div className="relative w-full bg-gradient-to-b from-[#f2f4f8] via-[#e2e6ee] to-[#cbd2dc] rounded-[32px] sm:rounded-[40px] p-2.5 sm:p-3.5 border border-slate-300/90 shadow-[0_28px_70px_rgba(0,0,0,0.20),0_10px_25px_rgba(255,91,0,0.12)] transition-transform duration-500">
        
        {/* Physical Edge Details: Top Sleep/Wake Button & Side Volume Rocker */}
        <div className="absolute -top-1 right-14 sm:right-20 w-10 sm:w-12 h-1 bg-slate-300 rounded-t-sm shadow-xs" />
        <div className="absolute top-16 -right-1 sm:-right-1.5 w-1 sm:w-1.5 h-12 bg-slate-300 rounded-r-sm shadow-xs" />

        {/* Outer Dark Glass Bezel Housing */}
        <div className="relative w-full bg-[#0d0f14] rounded-[24px] sm:rounded-[32px] p-2 sm:p-2.5 border border-slate-800 shadow-inner">
          
          {/* Centered Front Camera Pinhole in Bezel (Strictly outside screen canvas) */}
          <div className="w-full flex items-center justify-center pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700/80 flex items-center justify-center shadow-xs">
                <span className="w-0.5 h-0.5 rounded-full bg-cyan-400/90" />
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-900 border border-slate-800" />
            </div>
          </div>

          {/* ======================================================== */}
          {/* TABLET SCREEN (Retina Display Canvas)                    */}
          {/* ======================================================== */}
          <div className="relative w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-slate-950 text-white shadow-2xs border border-white/10">
            
            {/* 1. iOS/Android-style System Status Bar */}
            <div className="bg-slate-950/95 backdrop-blur-md px-3 sm:px-4 py-1 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300 border-b border-white/5 z-30">
              <span className="font-semibold tracking-tight text-white flex items-center gap-1.5">
                <span>9:41</span>
                <span className="text-[8px] px-1 py-0.2 rounded bg-orange-500/20 text-orange-400 font-bold hidden sm:inline">
                  5G CAMPUS
                </span>
              </span>
              <div className="flex items-center gap-2 text-slate-400">
                <Signal className="w-2.5 h-2.5" />
                <Wifi className="w-2.5 h-2.5" />
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-mono">98%</span>
                  <Battery className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* 2. OmniMall App Brand & Campus Navigation Header */}
            <div className="bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-2 flex items-center justify-between gap-2 border-b border-white/10 z-30">
              {/* Brand Logo & Active Campus Pill */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#FF5B00] text-white font-black text-[9px] flex items-center justify-center shadow-sm">
                    OM
                  </span>
                  <span className="font-heading font-black tracking-tight text-white text-xs sm:text-sm">
                    OMNI<span className="text-[#FF5B00]">MALL</span>
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[9px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                  <MapPin className="w-2.5 h-2.5 text-[#FF5B00]" />
                  <span>UPSA Accra</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
                </div>
              </div>

              {/* Segmented Category Filter Navigation */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {slides.map((s, idx) => {
                  const Icon = s.tabIcon;
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#FF5B00] text-white shadow-[0_2px_8px_rgba(255,91,0,0.4)]'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
                      }`}
                    >
                      <Icon className="w-2.5 h-2.5" />
                      <span>{s.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Swipable Interactive App Viewport */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="relative w-full aspect-[16/11] sm:aspect-[16/10] cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full"
                >
                  {/* High-Resolution Campus Photography */}
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Soft Photorealistic Vignette & Contrast Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Pill: Active Status & Micro Controls */}
                  <div className="absolute top-2.5 sm:top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-orange-200 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-orange-500/30 shadow-md">
                      <Star className="w-3 h-3 text-[#FF5B00] fill-[#FF5B00]" />
                      <span>{active.status}</span>
                      <span className="text-white/40">·</span>
                      <span className="text-emerald-400 font-medium">{active.badge}</span>
                    </span>

                    <div className="flex items-center gap-1.5 pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare();
                        }}
                        className="p-1.5 rounded-full bg-slate-950/70 hover:bg-slate-950 backdrop-blur-md border border-white/20 text-slate-300 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
                        title="Share Campus Link"
                        aria-label="Share"
                      >
                        <Share2 className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(currentSlide);
                        }}
                        className="p-1.5 rounded-full bg-slate-950/70 hover:bg-slate-950 backdrop-blur-md border border-white/20 transition-all shadow-sm active:scale-95 cursor-pointer"
                        title="Add to Watchlist"
                        aria-label="Save to favorites"
                      >
                        <Heart
                          className={`w-3 h-3 transition-colors ${
                            liked[currentSlide]
                              ? 'text-rose-500 fill-rose-500 scale-110'
                              : 'text-slate-300 hover:text-rose-400'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Interactive Hotspot Pills on the Image */}
                  {active.hotspots.map((spot, hIdx) => (
                    <motion.div
                      key={hIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + hIdx * 0.1, duration: 0.3 }}
                      className={`hidden sm:flex absolute ${spot.position} z-15 pointer-events-none items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-lg text-[9px]`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-ping" />
                      <div>
                        <div className="font-bold text-white leading-tight">{spot.label}</div>
                        <div className="flex items-center gap-1 text-[8px] text-slate-400">
                          <span className="text-orange-400 font-semibold">{spot.price}</span>
                          <span>·</span>
                          <span className="text-slate-300">{spot.tag}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Bottom App Showcase Dock */}
                  <div className="absolute inset-x-2.5 sm:inset-x-3.5 bottom-2.5 sm:bottom-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 shadow-2xl z-20">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] font-bold text-orange-400 uppercase tracking-wider">
                        <MapPin className="w-2.5 h-2.5 text-[#FF5B00]" />
                        <span>{active.landmark}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {active.metric}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-extrabold text-white font-heading tracking-tight leading-snug line-clamp-1">
                      {active.title}
                    </h4>

                    <p className="text-[9px] sm:text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                      {active.tagline}
                    </p>

                    {/* Trust Chips & CTA Button */}
                    <div className="flex items-center justify-between gap-2 pt-2 mt-2 border-t border-white/10">
                      <div className="flex items-center gap-3 text-[8px] text-slate-300 overflow-hidden">
                        {active.trustPoints.map((tp, tpIdx) => (
                          <span key={tpIdx} className="inline-flex items-center gap-1 whitespace-nowrap">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                            <span>{tp}</span>
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(active.targetPath);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FF5B00] hover:bg-[#e04f00] text-white text-[9px] sm:text-[10px] font-bold shadow-xs active:scale-95 transition-all shrink-0 cursor-pointer"
                      >
                        <span>{active.ctaText}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Sleek Minimal Carousel Arrows */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950/70 hover:bg-[#FF5B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all active:scale-90 z-25 shadow-md cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950/70 hover:bg-[#FF5B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all active:scale-90 z-25 shadow-md cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Interactive Shared Toast Notice */}
              <AnimatePresence>
                {sharedToast && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-12 inset-x-0 mx-auto w-fit z-30 px-3 py-1 bg-slate-900/90 text-white text-[9px] font-medium rounded-full border border-orange-500/40 shadow-lg flex items-center gap-1.5 backdrop-blur-md"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Link ready for campus WhatsApp groups!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 4. Bottom Scrub Bar & Slide Counter */}
            <div className="bg-slate-950/95 backdrop-blur-md px-3 sm:px-4 py-1.5 flex items-center justify-between text-[8px] sm:text-[9px] font-medium text-slate-400 border-t border-white/10 z-30">
              <span className="hidden sm:inline">Drag or tap tabs to explore</span>
              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? 'w-6 bg-[#FF5B00] shadow-[0_0_8px_rgba(255,91,0,0.6)]'
                        : 'w-2 bg-white/25 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="font-mono text-slate-400">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Realistic Multi-Layer Bottom Tabletop Contact Shadow */}
      <div
        aria-hidden="true"
        className="h-5 sm:h-7 w-[88%] mx-auto bg-slate-900/30 blur-xl -mt-2 rounded-full pointer-events-none"
      />
    </div>
  );
};

export default MockTablet;
