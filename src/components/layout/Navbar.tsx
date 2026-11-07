import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Store,
  Compass,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Marketplace', path: '/marketplace' },
    { label: 'Sell on Omnimall', path: '/sell' },
    { label: 'Services', path: '/services' },
    { label: 'Explore', path: '/explore' },
    { label: 'Campuses', path: '/campuses' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 relative ${
          scrolled
            ? 'bg-[#FFF7F0]/95 backdrop-blur-md border-b border-orange-200/80 shadow-[0_2px_14px_rgba(255,91,0,0.08)]'
            : 'bg-gradient-to-r from-[#FFF5ED]/95 via-[#FFF9F5]/98 to-[#FFF5ED]/95 backdrop-blur-md border-b border-orange-200/70 shadow-[0_2px_10px_rgba(255,91,0,0.04)]'
        }`}
      >
        {/* Subtle luminous bottom accent rim */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Bar: Modern Asymmetric Dash Hamburger (Left), Centered Logo Card, Explore Button (Right) */}
          <div className="flex md:hidden items-center justify-between h-[62px] relative">
            {/* Modern Hamburger Button with Animated Dashes */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative p-2 -ml-1 text-slate-700 hover:text-[#FF5B00] rounded-xl hover:bg-orange-100/60 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B00] group"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-start gap-[5px] overflow-hidden">
                {/* Top Dash */}
                <span
                  className={`h-[2px] rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? 'w-5 translate-y-[7px] rotate-45 bg-[#FF5B00]'
                      : 'w-5 bg-slate-800 group-hover:bg-[#FF5B00]'
                  }`}
                />
                {/* Middle Dash (Asymmetric brand accent dash) */}
                <span
                  className={`h-[2px] rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'w-0 opacity-0 -translate-x-3'
                      : 'w-3.5 bg-[#FF5B00] opacity-100'
                  }`}
                />
                {/* Bottom Dash */}
                <span
                  className={`h-[2px] rounded-full transition-all duration-300 origin-center ${
                    mobileMenuOpen
                      ? 'w-5 -translate-y-[7px] -rotate-45 bg-[#FF5B00]'
                      : 'w-5 bg-slate-800 group-hover:bg-[#FF5B00]'
                  }`}
                />
              </div>
            </button>

            {/* Center-aligned logo + OMNIMALL text lockup on mobile */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
              <Logo size="sm" center={true} showWordmark={true} />
            </div>

            {/* Right: Modern Explore Pill Button (Replaced Search Icon) */}
            <Link
              to="/explore"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-xs font-bold text-slate-800 hover:text-[#FF5B00] border border-orange-200/90 shadow-2xs hover:shadow-xs active:scale-95 transition-all"
              aria-label="Explore campus marketplace"
            >
              <Compass className="w-3.5 h-3.5 text-[#FF5B00] group-hover:rotate-45 transition-transform duration-300" />
              <span className="tracking-tight">Explore</span>
            </Link>
          </div>

          {/* Desktop Bar Layout: Logo + Wordmark on Left, Nav in Middle, CTA on Right */}
          <div className="hidden md:flex items-center justify-between gap-6 h-20">
            <div className="flex items-center shrink-0">
              <Logo size="md" showWordmark={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="flex items-center gap-1 lg:gap-1.5 text-xs font-semibold text-slate-700"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#FF5B00] font-bold shadow-xs shadow-orange-500/20'
                        : 'hover:text-[#FF5B00] hover:bg-orange-100/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Zone: About Us Card Pill & Primary Storefront Action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* About Us UI Card Button */}
              <Link
                to="/about"
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white border border-orange-200/90 hover:border-orange-300 text-xs font-bold text-slate-800 hover:text-[#FF5B00] shadow-2xs hover:shadow-xs transition-all duration-150 group"
                aria-label="About OmniMall"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] group-hover:scale-125 transition-transform" />
                <span>About Us</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#FF5B00] transition-all" />
              </Link>

              {/* Primary Call To Action */}
              <Link
                to="/sell"
                className="group inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 active:scale-98 rounded-xl shadow-xs hover:shadow-[0_4px_14px_rgba(255,91,0,0.25)] transition-all duration-150 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#FF5B00]"
              >
                <Store className="w-3.5 h-3.5 text-white/90" />
                <span>Open Storefront</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer: Silky Spring Transition from the LEFT */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer container: slides in with smooth spring from the left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative mr-auto w-[84%] max-w-[320px] bg-white h-full shadow-2xl flex flex-col z-10 border-r border-orange-100"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-orange-100 bg-[#FFF9F5]">
                <Logo size="sm" showWordmark={true} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-600 hover:text-[#FF5B00] rounded-xl hover:bg-orange-100/60 active:scale-95 transition-all focus:outline-none"
                  aria-label="Close menu"
                >
                  {/* Matching modern active dash cross */}
                  <div className="w-5 h-5 flex flex-col justify-center items-center relative">
                    <span className="w-4 h-[2px] bg-slate-700 rounded-full rotate-45 absolute" />
                    <span className="w-4 h-[2px] bg-[#FF5B00] rounded-full -rotate-45 absolute" />
                  </div>
                </button>
              </div>

              {/* Drawer Links with staggered cascading reveals */}
              <div className="p-5 flex-1 overflow-y-auto space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-2">
                    Navigation
                  </span>
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + idx * 0.035,
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? 'text-white bg-[#FF5B00] font-bold shadow-xs'
                              : 'text-slate-700 hover:bg-orange-50 hover:text-[#FF5B00]'
                          }`
                        }
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-70" />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* About Us UI Card in Mobile Drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/about"
                    className="block p-4 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-50/50 border border-orange-200/90 shadow-2xs space-y-2 text-xs group hover:border-[#FF5B00]/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#FF5B00]">
                        About OmniMall
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#FF5B00] transition-all" />
                    </div>
                    <strong className="text-slate-900 font-bold block text-sm font-heading">
                      The Campus Commerce Network
                    </strong>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Connecting verified student buyers, campus storefronts, and skilled peer freelancers starting at UPSA in Accra.
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FF5B00] pt-0.5">
                      <span>Learn Our Story & Mission</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>

                {/* Quick Action */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Link
                    to="/sell"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
                  >
                    <Store className="w-4 h-4" />
                    <span>Open Student Storefront</span>
                  </Link>
                </motion.div>

                {/* Legal & Campus Policies in Hamburger Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-4 border-t border-slate-100 space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
                    Policies & Terms
                  </span>
                  <NavLink
                    to="/privacy"
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'text-white bg-[#FF5B00] font-bold shadow-xs'
                          : 'text-slate-600 hover:bg-orange-50 hover:text-[#FF5B00]'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#FF5B00]" />
                      <span>Privacy Policy</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </NavLink>
                  <NavLink
                    to="/terms"
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'text-white bg-[#FF5B00] font-bold shadow-xs'
                          : 'text-slate-600 hover:bg-orange-50 hover:text-[#FF5B00]'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#FF5B00]" />
                      <span>Terms & Conditions (T&C)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
