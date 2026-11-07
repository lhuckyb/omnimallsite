import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Search,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  MessageCircle,
  ArrowRight,
  AlertTriangle,
  MapPin,
  X,
} from 'lucide-react';
import { FAQS } from '../data/mockData';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'buying', label: 'Buying & Inspection' },
  { id: 'selling', label: 'Selling & Storefronts' },
  { id: 'meetups', label: 'Handover & Meetups' },
  { id: 'safety', label: 'Safety & Anti-Scam' },
];

export const HelpPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Checklist state
  const [checklist, setChecklist] = useState({
    daylight: true,
    publicSpot: true,
    inspectFirst: true,
    noAdvance: true,
    friendAlert: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQ = faq.question.toLowerCase().includes(q);
        const matchesA = faq.answer.toLowerCase().includes(q);
        if (!matchesQ && !matchesA) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Help Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Campus Support & Knowledgebase</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight"
            >
              How can we help your campus trade today?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
            >
              Clear answers on student storefronts, designated campus meetup spots, scam prevention, and direct mobile money payouts.
            </motion.p>

            {/* Live Search Input */}
            <div className="pt-3 max-w-lg mx-auto">
              <div className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-xs focus-within:border-[#FF5B00] focus-within:ring-2 focus-within:ring-[#FF5B00]/15 transition-all">
                <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. fees, meetup spots, payments, scams)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm text-[#202124] bg-transparent focus:outline-none placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1 mr-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
              {FAQ_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#FF5B00] text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Help Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Handover Safety Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5B00]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    Safe Handover Checklist
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Review before meeting a student buyer or seller
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    key: 'daylight',
                    title: 'Meet in Daylight',
                    desc: 'Handover between 8am and 6pm for clear visibility.',
                  },
                  {
                    key: 'publicSpot',
                    title: 'Designated Public Spot',
                    desc: 'Meet at Library Walkway, Food Court, or Administration Gate.',
                  },
                  {
                    key: 'inspectFirst',
                    title: 'Inspect Before Payment',
                    desc: 'Turn on laptops/phones and test cameras and batteries.',
                  },
                  {
                    key: 'noAdvance',
                    title: 'Zero Advance Deposits',
                    desc: 'Never send advance MoMo for peer marketplace items.',
                  },
                  {
                    key: 'friendAlert',
                    title: 'Notify a Roommate',
                    desc: 'Let a friend know where and who you are meeting on campus.',
                  },
                ].map((item) => {
                  const isChecked = checklist[item.key as keyof typeof checklist];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleCheck(item.key as any)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-orange-50/60 border-orange-200 text-slate-900'
                          : 'bg-slate-50 border-slate-200/80 text-slate-500'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs mt-0.5 shrink-0 transition-colors ${
                          isChecked ? 'bg-[#FF5B00] text-white' : 'border border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold font-heading">{item.title}</div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>If a user urges you to meet off-campus or send money ahead, report them immediately.</span>
              </div>
            </div>

            {/* Direct Channels Cards */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Campus Support Channels
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:support@omnimall.app"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#FF5B00]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-heading">
                      Email Helpdesk
                    </div>
                    <div className="text-[11px] text-slate-500">support@omnimall.app (2-4 hr reply)</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF5B00]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-heading">
                      UPSA Campus Desk
                    </div>
                    <div className="text-[11px] text-slate-500">Student Centre Floor 1 · Mon-Fri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion FAQs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                Questions ({filteredFaqs.length})
              </h2>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-[#FF5B00] hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-2">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-sm font-bold text-slate-800">No matching answers found</h3>
                <p className="text-xs text-slate-500">Try searching with a different keyword or contact our support team directly.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF5B00]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Need More Assistance Banner */}
            <div className="mt-8 bg-gradient-to-r from-orange-600 to-[#FF5B00] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                  Still have questions?
                </h4>
                <p className="text-xs text-orange-100">
                  Talk to an official OmniMall student support representative.
                </p>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-white text-[#FF5B00] hover:bg-orange-50 text-xs font-bold shadow-xs transition-colors shrink-0"
              >
                Send Us a Note
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
