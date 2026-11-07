import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CircleHelp,
  Compass,
  FileText,
  Headset,
  Home,
  Info,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Store,
  Wrench,
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
    { label: 'Home', path: '/', icon: Home },
    { label: 'Marketplace', path: '/marketplace', icon: ShoppingBag },
    { label: 'Sell on Omnimall', path: '/sell', icon: Store },
    { label: 'Services', path: '/services', icon: Wrench },
    { label: 'Campuses', path: '/campuses', icon: MapPin },
    { label: 'Explore', path: '/explore', icon: Compass },
  ];

  const mobileMenuLinks = [
    ...navLinks.slice(0, -1),
    { label: 'About Us', path: '/about', icon: Info },
    { label: 'Support', path: '/contact', icon: Headset },
    { label: 'Help & FAQ', path: '/help', icon: CircleHelp },
    { label: 'Privacy Policy', path: '/privacy', icon: ShieldCheck },
    { label: 'Terms & Conditions', path: '/terms', icon: FileText },
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
          {/* Mobile bar: hamburger menu and centered logo */}
          <div className="flex lg:hidden items-center justify-between h-[62px] relative">
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
            <Link
              to="/explore"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-orange-200 bg-white/90 px-3 text-xs font-bold text-slate-800 transition-colors hover:border-orange-300 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              <Compass className="h-3.5 w-3.5 text-[#FF5B00]" aria-hidden="true" />
              <span>Explore</span>
            </Link>
          </div>

          {/* Desktop Bar Layout: Logo + Wordmark on Left, Nav in Middle, CTA on Right */}
          <div className="hidden lg:flex items-center justify-between gap-6 h-20">
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
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white border border-orange-200/90 hover:border-orange-300 text-xs font-bold text-slate-800 hover:text-[#FF5B00] shadow-2xs hover:shadow-xs transition-all duration-150 group"
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
                <span>Seller Guide</span>
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
              className="relative mr-auto w-[84%] max-w-[320px] bg-white h-full shadow-2xl flex flex-col z-10 border-r border-orange-100 overflow-hidden"
            >
              <img
                src="/1.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[76px] bottom-0 h-[calc(100%-76px)] w-full object-cover object-[center_30%] blur-[1px] opacity-55"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[76px] bottom-0 bg-white/55"
              />

              {/* Drawer Header */}
              <div className="relative z-10 flex h-[76px] shrink-0 items-center justify-center px-5 border-b border-orange-700/30 bg-[#FF5B00] shadow-md shadow-orange-950/10">
                <div className="flex items-center justify-center gap-2.5">
                  <Logo size="sm" />
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-black tracking-tight text-white">OMNIMALL</span>
                    <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white/80">
                      Campus Marketplace
                    </span>
                  </div>
                </div>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pt-2 pb-4"
              >
                <div className="space-y-1">
                  {mobileMenuLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + idx * 0.035,
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) =>
                          `flex min-h-11 items-center gap-3 border-b border-dashed border-orange-500/80 px-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF5B00] ${
                            isActive ? 'text-[#D94E00]' : 'text-slate-800 hover:bg-white/45 hover:text-[#D94E00]'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <span className="flex items-center gap-3">
                            <link.icon
                              aria-hidden="true"
                              className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#D94E00]' : 'text-slate-700'}`}
                            />
                            <span>{link.label}</span>
                          </span>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <div className="rounded-2xl border border-white/90 bg-white/85 p-3 shadow-lg shadow-slate-900/10 backdrop-blur-md">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-[#FF5B00]">
                        <Info aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <h2 className="text-[13px] font-bold text-slate-900">Get to know our story</h2>
                    </div>
                    <p className="mb-1.5 text-[11px] leading-snug text-slate-600">
                      Discover how OmniMall connects campus communities.
                    </p>
                    <Link
                      to="/about"
                      className="inline-flex min-h-10 items-center gap-1.5 text-xs font-bold text-[#D94E00] hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B00] focus-visible:ring-offset-2"
                    >
                      Read our story
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="relative z-10 border-t border-slate-200/80 bg-white/90 px-5 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-center backdrop-blur-md">
                <p className="text-xs font-semibold tracking-wide text-slate-800">
                  OMNIMALL INC. <span className="font-normal text-slate-500">© 2026</span>
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  Connecting campus communities through commerce.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
