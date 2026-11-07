import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const linkClass = 'text-xs text-slate-600 transition-colors hover:text-[#FF5B00]';

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200/80 bg-slate-50 text-[#202124]">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 sm:col-span-2">
          <Logo size="lg" showWordmark />
          <p className="max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
            A campus marketplace for discovering products, independent storefronts, services, and
            community posts.
          </p>
        </div>

        <nav aria-label="Marketplace links" className="space-y-3">
          <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
            Discover
          </h2>
          <ul className="space-y-2">
            <li><Link to="/marketplace" className={linkClass}>Product marketplace guide</Link></li>
            <li><Link to="/services" className={linkClass}>Service listings guide</Link></li>
            <li><Link to="/explore" className={linkClass}>Explore feed overview</Link></li>
          </ul>
        </nav>

        <nav aria-label="Selling links" className="space-y-3">
          <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
            For sellers
          </h2>
          <ul className="space-y-2">
            <li><Link to="/sell" className={linkClass}>Sell on OmniMall</Link></li>
            <li><Link to="/about" className={linkClass}>About OmniMall</Link></li>
            <li><Link to="/help" className={linkClass}>Help & FAQs</Link></li>
          </ul>
        </nav>

        <nav aria-label="Support and policies" className="space-y-3">
          <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
            Support
          </h2>
          <ul className="space-y-2">
            <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            <li><Link to="/privacy" className={linkClass}>Privacy policy</Link></li>
            <li><Link to="/terms" className={linkClass}>Terms & conditions</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
        <span>© {new Date().getFullYear()} OmniMall</span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 font-semibold text-[#FF5B00] transition-colors hover:text-orange-600"
        >
          <span>Get in touch</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  </footer>
);
