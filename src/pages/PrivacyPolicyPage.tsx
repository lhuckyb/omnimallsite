import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Clock,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Mail,
  ChevronRight,
  ExternalLink,
  FileText,
  UserCheck,
  Share2,
} from 'lucide-react';

interface PrivacySection {
  id: string;
  title: string;
  summary: string;
  content: string[];
}

const SECTIONS: PrivacySection[] = [
  {
    id: 'scope',
    title: '1. Introduction & Campus Scope',
    summary: 'OmniMall is built specifically for university campus communities. We collect only what is strictly necessary to run a safe student marketplace.',
    content: [
      'OmniMall ("we", "our", or "the platform") operates a structured digital marketplace connecting student buyers, independent student storefronts, and skilled peer freelancers across university campuses in Ghana, beginning with our flagship campus at the University of Professional Studies, Accra (UPSA).',
      'This Privacy Policy applies to the official website (omnimall.app) and the OmniMall mobile/web applications. It explains in clear, transparent language what personal information we collect, how it is stored, how it is used to safeguard campus commerce, and your legal rights over your data.',
    ],
  },
  {
    id: 'collection',
    title: '2. Information We Collect',
    summary: 'We collect your name, institutional email, phone number, and student credentials solely to verify your campus identity.',
    content: [
      'Account Registration: When you register as a student buyer or merchant, we collect your full name, student institutional email address (e.g., student@upsamail.edu.gh), and an optional active phone number.',
      'Student Identity Verification: To grant the "Verified Student Merchant" badge, sellers submit a photograph or screenshot of their student ID card or active university portal dashboard. This document is reviewed by student moderators solely to verify active enrollment.',
      'Listing & Storefront Details: Information you voluntarily post—such as listing titles, descriptions, photos, prices in Ghanaian Cedis (GH₵), and designated campus meetup spots (e.g. UPSA Library Walkway)—is publicly visible to other campus users.',
      'Usage & Diagnostics: Standard, non-invasive diagnostic logs (browser type, device operating system, error logs) to maintain application uptime and performance.',
    ],
  },
  {
    id: 'use',
    title: '3. How We Use Your Information',
    summary: 'We use your data only to verify student accounts, enable direct peer communication, and prevent fraudulent listings.',
    content: [
      'Facilitating Campus Connections: Connecting student buyers with verified sellers and peer service providers on their campus.',
      'Maintaining Campus Safety & Trust: Ensuring every seller with a verified badge is an accountable student attending the university.',
      'Platform Notifications: Delivering transaction status updates, service enquiry alerts, and important security advisories.',
      'Zero Advertising Trackers: We never sell student data, contact lists, or shopping histories to third-party data brokers or marketing ad networks.',
    ],
  },
  {
    id: 'financial',
    title: '4. Financial Privacy & MoMo Safety',
    summary: 'OmniMall never asks for, processes, or stores your Mobile Money PIN, banking passwords, or card numbers.',
    content: [
      'Peer-to-Peer Direct Payments: Transactions on OmniMall are completed face-to-face on campus. Buyers inspect products in person and transfer money directly to the seller via MTN Mobile Money, Telecel Cash, AT Money, or physical cash.',
      'Zero Stored Financial Data: Because payments occur directly between peer wallets, OmniMall does not hold your funds, store bank credentials, or charge hidden payment gateway cuts.',
      'The Zero Advance Deposit Rule: We strictly forbid sellers from demanding advance deposits or booking fees. Never share financial PINs with anyone.',
    ],
  },
  {
    id: 'sharing',
    title: '5. Information Sharing & Third-Party Services',
    summary: 'Your information is only shared when required to provide the service (e.g., Firebase Authentication).',
    content: [
      'Other Campus Students: Your public store handle, public listings, and designated campus meetup spots are visible to students browsing the catalog.',
      'Cloud Infrastructure: We utilize Google Cloud / Firebase for secure user authentication, database operations, and encrypted media storage.',
      'Legal & University Authorities: In the rare event of verified criminal activity, identity theft, or severe fraud, we may cooperate with campus security and law enforcement in accordance with Ghanaian law.',
    ],
  },
  {
    id: 'rights',
    title: '6. Your Rights & Account Deletion',
    summary: 'You can access, modify, or permanently delete your account and listings at any time.',
    content: [
      'Access & Correction: You can update your display name, store description, listings, and contact details directly in your account settings.',
      'Right to Deletion: You may request complete deletion of your account, listings, and uploaded identification verification records by emailing privacy@omnimall.app.',
      'Retention Period: Upon account deletion, all personal data is permanently wiped from our active databases within 14 business days.',
    ],
  },
  {
    id: 'contact',
    title: '7. Contacting Our Campus Privacy Team',
    summary: 'Have questions or privacy concerns? Reach out directly to our campus data protection desk.',
    content: [
      'If you have questions regarding this Privacy Policy or wish to file a data inquiry, please contact our Data Protection Team at privacy@omnimall.app or visit the OmniMall Support Desk located on Floor 1 of the UPSA Student Centre in Accra.',
    ],
  },
];

export const PrivacyPolicyPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('scope');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Top Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-14 pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#FF5B00] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Marketplace</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#FF5B00] shadow-2xs transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Policy'}</span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FF5B00]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Campus Data Protection Charter</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading">
              Privacy Policy
            </h1>

            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              How OmniMall protects your personal information, student credentials, and marketplace privacy across university campuses.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>Last Updated: November 2026</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Advertising Trackers</span>
            </div>
            <span>·</span>
            <div>5 min read</div>
          </div>
        </div>
      </section>

      {/* Main Policy Content & Navigation Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table of Contents (Sticky on Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sticky top-24 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-[#FF5B00]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                Table of Contents
              </span>
            </div>

            <nav className="space-y-1">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeSection === sec.id
                      ? 'bg-orange-50 text-[#FF5B00] font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 space-y-2 text-xs">
              <span className="font-bold text-slate-800 block">Need Data Assistance?</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Contact our privacy compliance desk for account deletion or data access requests.
              </p>
              <a
                href="mailto:privacy@omnimall.app"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5B00] hover:underline"
              >
                <span>privacy@omnimall.app</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Sections */}
          <div className="lg:col-span-8 space-y-6">
            {/* Plain English Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-orange-500 to-[#FF5B00] text-white shadow-md space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-200" />
                <h2 className="text-sm sm:text-base font-bold font-heading">
                  Our Promise to University Students
                </h2>
              </div>
              <p className="text-xs text-orange-100 leading-relaxed">
                We believe students deserve complete respect for their personal data. We never sell student records, we never track you across the internet, and your student ID is used solely to keep the marketplace safe from anonymous scammers.
              </p>
            </div>

            {/* Rendered Policy Sections */}
            {SECTIONS.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4 scroll-mt-24"
              >
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    {sec.title}
                  </h3>
                </div>

                {/* Plain English Summary Callout */}
                <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-start gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">In Plain English: </span>
                    <span className="text-slate-700">{sec.summary}</span>
                  </div>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {sec.content.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </article>
            ))}

            {/* Related Terms & Help Callout */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Looking for our Terms & Conditions?
                </h4>
                <p className="text-xs text-slate-500">
                  Review the campus trading rules, buyer responsibilities, and seller standards.
                </p>
              </div>
              <Link
                to="/terms"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-50 hover:bg-[#FF5B00] text-[#FF5B00] hover:text-white text-xs font-bold transition-all shrink-0"
              >
                <span>Read Terms of Use</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

