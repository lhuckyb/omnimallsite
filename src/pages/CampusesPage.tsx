import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Vote,
  Award,
  Send,
  Zap,
} from 'lucide-react';
import { CAMPUSES } from '../data/mockData';
import { ASSETS } from '../data/assets';

export const CampusesPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCampusId, setSelectedCampusId] = useState<string>('upsa');

  // Waitlist / Voting Form State
  const [voteUniversity, setVoteUniversity] = useState('Central University');
  const [voteEmail, setVoteEmail] = useState('');
  const [voteSuccess, setVoteSuccess] = useState(false);

  const activeCampus = CAMPUSES.find((c) => c.id === selectedCampusId) || CAMPUSES[0];

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVoteSuccess(true);
    setTimeout(() => {
      setVoteSuccess(false);
      setVoteEmail('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Campuses Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hyperlocal Campus Network</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight">
                Campuses connected. Peer commerce unleashed.
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Commerce feels completely different when your sellers and buyers live 5 minutes away. OmniMall starts with our flagship hub at UPSA and is expanding across Ghana's top tertiary institutions.
              </p>

              {/* Status Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5B00]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>UPSA Flagship Active</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>UG Legon & KNUST Waitlist</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white p-3">
                <img
                  src={ASSETS.campusCommunity}
                  alt="Vibrant campus community at UPSA"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl"
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00]">
                      Primary Launchpad
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                      UPSA Accra Campus
                    </div>
                    <div className="text-[11px] text-slate-500">20,000+ Undergraduates & Merchants</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    Live Hub
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Campus Selector Tabs */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CAMPUSES.map((camp) => {
              const isSelected = selectedCampusId === camp.id;
              return (
                <button
                  key={camp.id}
                  onClick={() => setSelectedCampusId(camp.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#FF5B00] text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90'
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#FF5B00]'}`} />
                  <span>{camp.shortCode}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {camp.id === 'upsa' ? 'Active' : 'Queue'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Campus Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-8">
          {/* Header of Active Campus */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {activeCampus.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-100 text-[#FF5B00]">
                  {activeCampus.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>{activeCampus.city}</span>
                <span>·</span>
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>{activeCampus.studentCountEstimate}</span>
              </p>
            </div>

            <Link
              to={`/marketplace?campus=${activeCampus.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5B00] text-white text-xs font-bold hover:bg-orange-600 transition-colors shadow-xs self-start md:self-auto shrink-0"
            >
              <span>Explore {activeCampus.shortCode} Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            {activeCampus.description}
          </p>

          {/* Designated Handover Points Grid */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF5B00]" />
              <span>Designated & Monitored Campus Meetup Zones</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeCampus.pickupSpots.map((spot, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-200 transition-colors flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5B00] shrink-0 font-bold text-xs mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                      {spot}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Recommended for daylight handovers, student card checks, and secure item inspection.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Expansion Vote & Waitlist Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-[#FF5B00]">
              <Vote className="w-3.5 h-3.5" />
              <span>University Waitlist & Expansion Poll</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Want OmniMall at your university next?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Vote for your campus! When 250 students from a university join the queue, we launch dedicated campus ambassadors and open verified merchant storefronts.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-800/90 p-5 sm:p-6 rounded-2xl border border-slate-700">
            {voteSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Vote Recorded!</h4>
                <p className="text-xs text-slate-300">
                  We'll notify you as soon as {voteUniversity} hits the activation threshold!
                </p>
              </div>
            ) : (
              <form onSubmit={handleVoteSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Select Your University</label>
                  <select
                    value={voteUniversity}
                    onChange={(e) => setVoteUniversity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5B00] cursor-pointer"
                  >
                    <option>University of Ghana, Legon</option>
                    <option>KNUST Kumasi</option>
                    <option>Accra Technical University (ATU)</option>
                    <option>University of Cape Coast (UCC)</option>
                    <option>Central University (Miotso)</option>
                    <option>Wisconsin International University</option>
                    <option>Ashesi University (Berekuso)</option>
                    <option>Ghana Institute of Journalism (UniMAC)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Your Student Email or Phone</label>
                  <input
                    type="text"
                    required
                    value={voteEmail}
                    onChange={(e) => setVoteEmail(e.target.value)}
                    placeholder="e.g. kwame@st.ug.edu.gh or 024xxxxxxx"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF5B00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Vote for My Campus</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Campus Ambassador Program Spotlight */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FF5B00]">
              <Award className="w-3.5 h-3.5" />
              <span>Campus Lead Program</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              Become an OmniMall Campus Ambassador
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Lead student commerce at your university, onboard student merchants, run campus pop-up stalls, and build valuable leadership experience while earning monthly rewards.
            </p>
          </div>
          <a
            href="mailto:ambassadors@omnimall.app?subject=Apply%20for%20Campus%20Ambassador"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            <span>Apply as Campus Lead</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
