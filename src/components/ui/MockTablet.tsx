import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  Heart,
  MessageCircle,
  Share2,
  ShoppingBag,
  Store,
  Wrench,
} from 'lucide-react';
import { ASSETS } from '../../data/assets';

const screens = [
  {
    id: 'marketplace',
    label: 'Marketplace',
    icon: ShoppingBag,
    title: 'Product marketplace',
    description: 'Browse product listings, brands, and stores.',
    image: ASSETS.heroMarketplace,
    tags: ['Products', 'Brands', 'Stores'],
  },
  {
    id: 'stores',
    label: 'Campus Stores',
    icon: Store,
    title: 'Independent storefronts',
    description: 'Explore seller profiles and the products they offer.',
    image: ASSETS.vendorStorefront,
    tags: ['Store profiles', 'Product listings'],
  },
  {
    id: 'services',
    label: 'Peer Services',
    icon: Wrench,
    title: 'Services and enquiries',
    description: 'Review service details and enquire with a provider.',
    image: ASSETS.servicesCreative,
    tags: ['Service details', 'Enquiries'],
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Compass,
    title: 'Community feed',
    description: 'Browse posts, join conversations, and find tagged listings.',
    image: ASSETS.campusCommunity,
    tags: ['For You', 'Campus', 'Trends', 'Vendors'],
  },
] as const;

export const MockTablet: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<(typeof screens)[number]['id']>('marketplace');
  const shouldReduceMotion = useReducedMotion();
  const currentScreen = screens.find((screen) => screen.id === activeScreen) ?? screens[0];
  const CurrentIcon = currentScreen.icon;

  return (
    <div className="mx-auto w-full max-w-[650px]">
      <div className="rounded-[2.4rem] border border-slate-300 bg-slate-200 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:rounded-[2.8rem] sm:p-3">
        <div className="rounded-[2rem] bg-[#090D16] p-2 sm:rounded-[2.35rem] sm:p-3">
          <div className="overflow-hidden rounded-[1.55rem] bg-[#080D1C] sm:rounded-[1.9rem]">
            <div className="flex h-7 items-center justify-between border-b border-white/10 bg-[#0A0D16] px-4 text-[8px] font-semibold text-slate-200 sm:h-8 sm:px-5 sm:text-[9px]">
              <span>OMNIMALL</span>
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                <span className="h-1 w-1 rounded-full bg-slate-500" />
              </span>
            </div>

            <div className="flex min-h-11 items-center gap-2 border-b border-white/10 bg-[#101729] px-3 py-1.5 sm:min-h-14 sm:px-4 sm:py-2">
              <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5B00] text-[8px] font-black text-white">
                  O
                </span>
                <span className="text-[10px] font-black tracking-tight text-white">
                  OMNI<span className="text-[#FF5B00]">MALL</span>
                </span>
              </div>

              <div className="grid min-w-0 flex-1 grid-cols-4 gap-1">
                {screens.map((screen) => {
                  const Icon = screen.icon;
                  const isActive = activeScreen === screen.id;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveScreen(screen.id)}
                      className={`inline-flex min-h-9 min-w-0 items-center justify-center gap-1 rounded-full px-1 text-[7px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-orange-300 sm:min-h-9 sm:gap-1.5 sm:px-2 sm:text-[9px] ${
                        isActive
                          ? 'bg-[#FF5B00] text-white'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span className="truncate">{screen.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={currentScreen.id}
              initial={shouldReduceMotion ? false : { opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
              className="relative aspect-[1.3] min-h-[310px] overflow-hidden sm:min-h-[380px]"
            >
              <img
                src={currentScreen.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C] via-[#080D1C]/10 to-[#080D1C]/15" />

              <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 sm:left-4 sm:right-4 sm:top-4">
                <span className="rounded-full border border-white/20 bg-[#080D1C]/80 px-2.5 py-1 text-[8px] font-bold text-white backdrop-blur-sm sm:px-3 sm:text-[9px]">
                  {currentScreen.label}
                </span>
                <span className="rounded-full border border-white/20 bg-[#080D1C]/80 px-2.5 py-1 text-[8px] font-semibold text-slate-100 backdrop-blur-sm sm:px-3 sm:text-[9px]">
                  Feature preview
                </span>
              </div>

              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-[#080D1C]/90 p-3 text-white shadow-2xl backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:rounded-3xl sm:p-4">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5B00] sm:h-8 sm:w-8">
                    <CurrentIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-sm font-black leading-snug sm:text-base">
                      {currentScreen.title}
                    </h3>
                    <p className="mt-1 text-[9px] leading-relaxed text-slate-300 sm:text-[10px]">
                      {currentScreen.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate-300"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2.5 sm:gap-2 sm:pt-3">
                  {currentScreen.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2 py-1 text-[8px] font-semibold text-slate-100 sm:px-2.5 sm:text-[9px]"
                    >
                      {tag}
                    </span>
                  ))}
                  {activeScreen === 'explore' && (
                    <span className="ml-auto flex items-center gap-2 text-slate-300" aria-hidden="true">
                      <Heart className="h-3 w-3" />
                      <MessageCircle className="h-3 w-3" />
                      <Share2 className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="flex h-7 items-center justify-between bg-[#080D1C] px-4 text-[8px] font-semibold text-slate-400 sm:h-8 sm:px-5 sm:text-[9px]">
              <span>Tap a tab to explore</span>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {screens.map((screen) => (
                  <span
                    key={screen.id}
                    className={`h-1.5 rounded-full transition-all ${
                      activeScreen === screen.id ? 'w-5 bg-[#FF5B00]' : 'w-1.5 bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span>OmniMall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTablet;
