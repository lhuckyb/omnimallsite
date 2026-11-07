import React from 'react';
import {
  Search,
  ShoppingBag,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Tag,
  Store,
  BookOpen,
  Laptop,
  Headphones,
  Zap,
} from 'lucide-react';
import { Logo } from '../layout/Logo';

export const MockLaptop: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Type-C Fast Charger 65W',
      category: 'Tech & Audio',
      price: 'GH₵ 160',
      badge: 'UPSA Hostel A',
      seller: 'Kwame A.',
      icon: Zap,
      tint: 'bg-amber-50 text-amber-700',
    },
    {
      id: 2,
      title: 'Business Calculus & Stats Vol 2',
      category: 'Textbooks',
      price: 'GH₵ 110',
      badge: 'Library Quad',
      seller: 'Akua M.',
      icon: BookOpen,
      tint: 'bg-blue-50 text-blue-700',
    },
    {
      id: 3,
      title: 'Wireless ANC Earbuds (USB-C)',
      category: 'Audio',
      price: 'GH₵ 240',
      badge: 'Student Centre',
      seller: 'Emanuel O.',
      icon: Headphones,
      tint: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 4,
      title: 'Rechargeable Hostel Desk Fan',
      category: 'Hostel Gear',
      price: 'GH₵ 95',
      badge: 'Nelson Hostel',
      seller: 'Sandra K.',
      icon: Laptop,
      tint: 'bg-orange-50 text-orange-700',
    },
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Soft warm ambient shadow behind the laptop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-orange-400/15 via-amber-300/10 to-orange-400/15 rounded-3xl blur-2xl"
      />

      {/* ======================================================== */}
      {/* 1. LAPTOP DISPLAY LID (Clean White / Platinum Aluminum)    */}
      {/* ======================================================== */}
      <div className="relative w-full bg-gradient-to-b from-[#f8f9fa] to-[#eaecf0] rounded-t-xl sm:rounded-t-2xl p-2 sm:p-2.5 pb-0 border border-slate-300/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        {/* Slim Dark Bezel */}
        <div className="relative w-full bg-[#1e2229] rounded-t-lg sm:rounded-t-xl overflow-hidden border border-slate-800 shadow-inner">
          {/* Centered Laptop Webcam (No Mac notch, clean subtle PC laptop bezel) */}
          <div className="h-4 sm:h-5 bg-[#1e2229] flex items-center justify-center relative border-b border-black/40 px-3">
            {/* Small HD webcam camera dot */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-cyan-400/80" />
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/80" />
            </div>
            {/* Subtle brand mark on the top edge */}
            <span className="absolute right-3 text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              1080p
            </span>
          </div>

          {/* ======================================================== */}
          {/* 2. THE SCREEN: Crisp, Uncluttered OmniMall Interface      */}
          {/* ======================================================== */}
          <div className="relative w-full bg-[#fafbfd] text-[#202124] overflow-hidden aspect-[16/10.2]">
            {/* OmniMall Web App Header */}
            <div className="bg-white px-3 sm:px-4 py-2 border-b border-slate-200/80 flex items-center justify-between gap-2 shadow-2xs">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#FF5B00] text-white font-black text-[9px] flex items-center justify-center shadow-xs">
                  OM
                </div>
                <span className="font-heading font-black text-xs sm:text-sm text-slate-900 tracking-tight">
                  OMNI<span className="text-[#FF5B00]">MALL</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md ml-1">
                  <MapPin className="w-2.5 h-2.5 text-[#FF5B00]" />
                  UPSA Campus
                </span>
              </div>

              {/* Campus Search Bar */}
              <div className="flex-1 max-w-[200px] sm:max-w-[220px] bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Search className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">Search textbooks, tech, hostel...</span>
              </div>

              {/* Storefront Action */}
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-1 rounded-md bg-[#FF5B00] text-white text-[9px] sm:text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                  <Store className="w-2.5 h-2.5" />
                  <span className="hidden sm:inline">Open Store</span>
                </span>
              </div>
            </div>

            {/* Sub-header Filter Chips */}
            <div className="bg-[#FFF9F5] px-3 sm:px-4 py-1.5 border-b border-orange-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[9px] font-bold text-slate-600">
              <span className="px-2 py-0.5 rounded-full bg-[#FF5B00] text-white shadow-2xs">
                All Items
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white border border-orange-200 text-slate-700 hover:text-[#FF5B00]">
                Textbooks
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white border border-orange-200 text-slate-700 hover:text-[#FF5B00]">
                Tech & Gadgets
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white border border-orange-200 text-slate-700 hover:text-[#FF5B00]">
                Hostel Gear
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white border border-orange-200 text-slate-700 hover:text-[#FF5B00]">
                Peer Services
              </span>
            </div>

            {/* Main Product Grid (Clean, authentic student marketplace listings) */}
            <div className="p-2.5 sm:p-3.5 grid grid-cols-2 gap-2 sm:gap-2.5 overflow-hidden">
              {products.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:border-orange-300 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className={`p-1 rounded-md ${item.tint}`}>
                          <IconComponent className="w-3 h-3" />
                        </span>
                        <span className="text-[8px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <h5 className="font-heading font-extrabold text-[10px] sm:text-[11px] text-slate-900 line-clamp-1 leading-snug">
                        {item.title}
                      </h5>
                      <div className="flex items-center gap-1 text-[8px] sm:text-[9px] text-slate-400 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>{item.seller} · Verified</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-slate-100">
                      <span className="font-heading font-black text-[11px] sm:text-xs text-[#FF5B00]">
                        {item.price}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                        <MessageCircle className="w-2 h-2 text-emerald-600" />
                        <span>Meetup</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Screen Live Status Bar */}
            <div className="absolute inset-x-0 bottom-0 bg-white/95 px-3 py-1 border-t border-slate-200/70 flex items-center justify-between text-[8px] font-medium text-slate-500 backdrop-blur-xs">
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Campus Meetup Hub · Zero Commission
              </span>
              <span className="text-[#FF5B00] font-bold">UPSA Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FLUSH HINGE (Seamless White-Silver Laptop Hinge)       */}
      {/* ======================================================== */}
      <div className="relative w-full h-2 sm:h-2.5 bg-gradient-to-r from-[#d1d5db] via-[#e5e7eb] to-[#d1d5db] border-y border-slate-300 shadow-2xs z-20" />

      {/* ======================================================== */}
      {/* 4. LAPTOP KEYBOARD BASE DECK (Clean White / Silver HP style) */}
      {/* ======================================================== */}
      <div className="relative w-full bg-gradient-to-b from-[#f3f4f6] via-[#eaecf0] to-[#dfe2e6] rounded-b-xl sm:rounded-b-2xl px-3 sm:px-4 pt-1.5 pb-2.5 sm:pb-3 border border-slate-300 border-t-0 shadow-[0_14px_32px_rgba(0,0,0,0.12)] z-10">
        {/* Recessed Keyboard Well with Matching Width */}
        <div className="w-[94%] mx-auto bg-[#e5e7eb] rounded-lg p-1 sm:p-1.5 border border-slate-300 shadow-inner">
          <div className="space-y-[2px] sm:space-y-[2.5px]">
            {/* Row 1: Function Keys */}
            <div className="grid grid-cols-13 gap-[2px] sm:gap-[2.5px] text-[4.5px] sm:text-[6px] text-slate-600 font-sans font-medium">
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">Esc</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F1</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F2</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F3</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F4</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F5</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F6</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F7</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F8</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F9</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F10</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F11</span>
              <span className="h-2 sm:h-2.5 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs font-bold text-slate-700">⏻</span>
            </div>

            {/* Row 2: Numbers */}
            <div className="grid grid-cols-13 gap-[2px] sm:gap-[2.5px] text-[5px] sm:text-[6.5px] text-slate-700 font-sans font-medium">
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">`</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">1</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">2</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">3</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">4</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">5</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">6</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">7</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">8</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">9</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">0</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">-</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4.5px]">Backspace</span>
            </div>

            {/* Row 3: QWERTY */}
            <div className="grid grid-cols-13 gap-[2px] sm:gap-[2.5px] text-[5px] sm:text-[6.5px] text-slate-700 font-sans font-medium">
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4.5px]">Tab</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">Q</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">W</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">E</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">R</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">T</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">Y</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">U</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">I</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">O</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">P</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">[</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">]</span>
            </div>

            {/* Row 4: Home Row */}
            <div className="grid grid-cols-13 gap-[2px] sm:gap-[2.5px] text-[5px] sm:text-[6.5px] text-slate-700 font-sans font-medium">
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4px]">Caps</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">A</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">S</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">D</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">F</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">G</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">H</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">J</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">K</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">L</span>
              <span className="h-2.5 sm:h-3 rounded-[2px] bg-white flex items-center justify-center border border-slate-200 shadow-2xs">;</span>
              <span className="col-span-2 h-2.5 sm:h-3 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4.5px]">Enter</span>
            </div>

            {/* Row 5: Modifiers & Space Bar */}
            <div className="flex items-center gap-[2px] sm:gap-[2.5px] text-[4.5px] sm:text-[6px] text-slate-600 font-sans font-medium">
              <span className="h-2.5 sm:h-3 w-7 sm:w-9 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Shift</span>
              <span className="h-2.5 sm:h-3 w-4 sm:w-6 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Ctrl</span>
              <span className="h-2.5 sm:h-3 w-4 sm:w-6 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Fn</span>
              <span className="h-2.5 sm:h-3 w-4 sm:w-6 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Alt</span>
              {/* Clean White Spacebar */}
              <span className="h-2.5 sm:h-3 flex-1 rounded-[2px] bg-white border border-slate-200 shadow-2xs" />
              <span className="h-2.5 sm:h-3 w-4 sm:w-6 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Alt</span>
              <span className="h-2.5 sm:h-3 w-4 sm:w-6 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs">Ctrl</span>
              {/* Arrow Keys */}
              <div className="flex items-center gap-[1px]">
                <span className="h-2.5 sm:h-3 w-3.5 sm:w-4 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4px]">◀</span>
                <div className="flex flex-col gap-[1px]">
                  <span className="h-[4.5px] sm:h-[5.5px] w-3.5 sm:w-4 rounded-[1px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[3.5px]">▲</span>
                  <span className="h-[4.5px] sm:h-[5.5px] w-3.5 sm:w-4 rounded-[1px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[3.5px]">▼</span>
                </div>
                <span className="h-2.5 sm:h-3 w-3.5 sm:w-4 rounded-[2px] bg-slate-100 flex items-center justify-center border border-slate-200 shadow-2xs text-[4px]">▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Centered Touchpad */}
        <div className="w-[36%] h-7 sm:h-9 mx-auto mt-1.5 sm:mt-2 rounded-md bg-[#f0f2f5] border border-slate-300 shadow-inner" />

        {/* Subtle Front Beveled Lip with Notch */}
        <div className="w-10 sm:w-14 h-1 bg-slate-300 mx-auto rounded-b-md mt-1 border-t border-slate-400/40" />
      </div>

      {/* Realistic Soft Contact Shadow */}
      <div
        aria-hidden="true"
        className="h-4 sm:h-6 w-[88%] mx-auto bg-slate-800/15 blur-lg -mt-1.5 rounded-full pointer-events-none"
      />
    </div>
  );
};

export default MockLaptop;
