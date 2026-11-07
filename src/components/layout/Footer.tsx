import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-[#202124]">
      {/* Top Banner Notice */}
      <div className="border-b border-slate-200/60 bg-white py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] shrink-0" />
            <span>
              <strong>Active Pilot Hub:</strong> University of Professional Studies, Accra (UPSA).
            </span>
          </div>
          <Link
            to="/campuses"
            className="text-[#FF5B00] hover:text-orange-600 font-bold inline-flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>Campus Rollout Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand info column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block">
              <Logo size="lg" showWordmark={true} />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Omnimall is the structured digital marketplace connecting university campus students, verified student storefronts, and skilled peer service providers.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Stay Updated on Campus Launches
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3.5 py-2.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>You are registered for campus announcement updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@upsamail.edu.gh"
                    required
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-white text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#FF5B00]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 1: Marketplace */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/marketplace" className="hover:text-[#FF5B00] transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=tech-gadgets" className="hover:text-[#FF5B00] transition-colors">
                  Tech & Gadgets
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=fashion-thrift" className="hover:text-[#FF5B00] transition-colors">
                  Campus Fashion
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=books-stationery" className="hover:text-[#FF5B00] transition-colors">
                  Textbooks & Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services & Sellers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Sellers & Talent
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/sell" className="hover:text-[#FF5B00] transition-colors">
                  Open Storefront
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF5B00] transition-colors">
                  Campus Services
                </Link>
              </li>
              <li>
                <Link to="/sell#criteria" className="hover:text-[#FF5B00] transition-colors">
                  Student Verification
                </Link>
              </li>
              <li>
                <Link to="/campuses" className="hover:text-[#FF5B00] transition-colors">
                  Campus Ambassadors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Trust & Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/help" className="hover:text-[#FF5B00] transition-colors">
                  Safety Protocol
                </Link>
              </li>
              <li>
                <Link to="/campuses" className="hover:text-[#FF5B00] transition-colors">
                  Pickup Landmarks
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF5B00] transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#FF5B00] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#FF5B00] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Omnimall Ghana. Built for university campus commerce.
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link to="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-slate-800 transition-colors">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
