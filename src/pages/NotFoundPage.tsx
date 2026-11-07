import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  Search,
  ShoppingBag,
  Laptop,
  BookOpen,
  Wrench,
  MapPin,
  Home,
  Sparkles,
} from 'lucide-react';
import { Logo } from '../components/layout/Logo';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/marketplace');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-b from-[#FFF7F0] via-white to-slate-50 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Compass graphic */}
        <div className="relative mx-auto w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-orange-100/60 animate-ping opacity-30" />
          <div className="relative w-24 h-24 rounded-3xl bg-white border border-orange-200 shadow-xl flex items-center justify-center text-[#FF5B00]">
            <Compass className="w-12 h-12 animate-spin-slow" />
          </div>
        </div>

        {/* 404 Heading & Context */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#FF5B00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Off-Campus Route · 404 Error</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading">
            Looks like you've wandered off campus!
          </h1>

          <p className="text-xs sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The listing, store, or page you were looking for may have moved or graduated. Let's get you back to the active campus marketplace.
          </p>
        </div>

        {/* Quick Search on 404 */}
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm focus-within:border-[#FF5B00] focus-within:ring-2 focus-within:ring-[#FF5B00]/15 transition-all"
          >
            <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Search products, textbooks, services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm text-[#202124] bg-transparent focus:outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold text-white bg-[#FF5B00] hover:bg-orange-600 rounded-xl transition-colors shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Quick Link Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {[
            { label: 'Marketplace', icon: ShoppingBag, path: '/marketplace' },
            { label: 'Campus Services', icon: Wrench, path: '/services' },
            { label: 'Meetup Spots', icon: MapPin, path: '/campuses' },
            { label: 'Open a Store', icon: Laptop, path: '/sell' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-orange-200 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF5B00] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-700 font-heading">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Back to Home Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
