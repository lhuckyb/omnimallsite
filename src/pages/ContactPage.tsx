import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MessageSquareText,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  ShieldCheck,
  AlertOctagon,
  ArrowRight,
  X,
  PhoneCall,
  User,
} from 'lucide-react';

const ROLES = [
  { id: 'buyer', label: 'Student Buyer' },
  { id: 'seller', label: 'Student Seller' },
  { id: 'ambassador', label: 'Campus Ambassador' },
  { id: 'partnership', label: 'University Partner' },
];

export const ContactPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedRole, setSelectedRole] = useState('buyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('UPSA Accra');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = 'OMNI-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);

    // Also prepare mailto fallback if user wants to open their email app
    const fullBody = `Ticket: ${generatedTicket}\nRole: ${selectedRole}\nCampus: ${campus}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:support@omnimall.app?subject=${encodeURIComponent(
      `[${generatedTicket}] ${subject}`
    )}&body=${encodeURIComponent(fullBody)}`;

    // Optional mailto popup trigger
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Campus Contact & Support Portal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight"
            >
              We're right on campus. Talk to us.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto"
            >
              Have a question about your storefront, need help verifying student credentials, or want to report an issue? Our campus support team is here to assist.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Physical Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* Physical Helpdesk Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    UPSA Campus Support Desk
                  </h3>
                  <p className="text-xs text-slate-500">Student Centre Floor 1 · Walk-in Support</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our campus ambassadors during lecture days for hands-on assistance with storefront setup, student ID card verification, and item listings.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-[#FF5B00]" />
                <span>Monday – Friday: 9:00 AM – 5:00 PM</span>
              </div>
            </div>

            {/* Email & Digital Support */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Channels
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:support@omnimall.app"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#FF5B00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-heading">
                      General & Support Inquiries
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">support@omnimall.app</div>
                  </div>
                </a>

                <a
                  href="mailto:merchants@omnimall.app"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#FF5B00]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-heading">
                      Storefront & Merchant Desk
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">merchants@omnimall.app</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Fraud & Safety Urgent Desk */}
            <div className="p-5 rounded-3xl bg-rose-50 border border-rose-200 text-rose-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs text-rose-700">
                <AlertOctagon className="w-4 h-4" />
                <span>Urgent Safety & Scam Report</span>
              </div>
              <p className="text-[11px] text-rose-800 leading-relaxed">
                If you suspect a scammer, an unsafe off-campus handover request, or an advance deposit demand, notify campus moderators immediately.
              </p>
              <a
                href="mailto:safety@omnimall.app?subject=URGENT%20Safety%20or%20Fraud%20Report"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900 underline underline-offset-2 pt-1"
              >
                <span>Report to Safety Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                Send a Message
              </h2>
              <p className="text-xs text-slate-500">
                Fill out the details below and an official campus representative will follow up.
              </p>
            </div>

            {/* Role Pills */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Who are you?</label>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#FF5B00] text-white shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {role.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                    Ticket Reference: {ticketId}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">
                    Message Drafted & Logged!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Opening your email client to send your message directly to our campus team. If your app did not open automatically, contact us at <strong>support@omnimall.app</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ama Darko"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF5B00] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Student Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ama.darko@upsamail.edu.gh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF5B00] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Campus</label>
                    <select
                      value={campus}
                      onChange={(e) => setCampus(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF5B00] transition-colors bg-white cursor-pointer"
                    >
                      <option>UPSA Accra (Main Campus)</option>
                      <option>University of Ghana, Legon</option>
                      <option>KNUST Kumasi</option>
                      <option>Accra Technical University (ATU)</option>
                      <option>Other Campus / Institution</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Inquiry Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF5B00] transition-colors bg-white cursor-pointer"
                    >
                      <option>General Question</option>
                      <option>Opening a Student Storefront</option>
                      <option>Listing or Verification Issue</option>
                      <option>Campus Ambassador Application</option>
                      <option>Report Fraud or Safety Concern</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>Your Message</span>
                    <span className="text-[10px] text-slate-400">{message.length} / 500</span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details so our team can resolve your inquiry quickly..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF5B00] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#FF5B00] hover:bg-orange-600 active:scale-98 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Campus Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
