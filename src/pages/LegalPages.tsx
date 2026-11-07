import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Cookie,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
} from 'lucide-react';

interface PolicySection {
  heading: string;
  summary: string;
  body: string;
}

const PRIVACY_SECTIONS: PolicySection[] = [
  {
    heading: 'Information Collected on Campus',
    summary: 'In Plain English: We collect only what is needed to verify your student status and connect you with campus peers.',
    body: 'When you create an account on OmniMall, we collect basic details such as your student institutional email, display name, and optional phone number. For verified student sellers, we review student ID credentials or university portal snapshots solely to verify your enrollment.',
  },
  {
    heading: 'Catalog Listings & Handover Data',
    summary: 'In Plain English: Listings and designated campus pickup points are public so fellow students can find your gear.',
    body: 'Product and service descriptions, photos, prices in Ghanaian Cedis, and preferred campus meetup points (e.g., UPSA Library Walkway) are displayed publicly within the campus marketplace catalog. Personal contact details are only shared when you agree to engage with an interested peer.',
  },
  {
    heading: 'Payment and Financial Security',
    summary: 'In Plain English: OmniMall never stores your MoMo PIN, bank password, or credit card numbers.',
    body: 'Transactions on OmniMall are peer-to-peer at public campus locations. Buyers inspect items physically and transfer funds directly to the seller via Mobile Money (MTN MoMo, Telecel Cash, AT Money) or cash. We do not intermediate funds or take deposit cuts.',
  },
  {
    heading: 'Data Sharing & Zero Advertising Trackers',
    summary: 'In Plain English: We do not sell your personal data to third-party ad brokers.',
    body: 'Your data is strictly used to run the OmniMall platform. We do not sell student contact lists to external marketing agencies or deploy tracking scripts that follow you across the internet.',
  },
  {
    heading: 'Your Rights & Account Deletion',
    summary: 'In Plain English: You can delete your listings or entire account whenever you want.',
    body: 'You retain full control over your marketplace profile. To permanently remove your listings or request full profile deletion, email privacy@omnimall.app and our team will process the request within 48 hours.',
  },
];

const TERMS_SECTIONS: PolicySection[] = [
  {
    heading: 'Campus Marketplace Purpose',
    summary: 'In Plain English: OmniMall provides the platform to connect student buyers and sellers.',
    body: 'OmniMall operates as a structured venue connecting independent campus sellers, buyers, and student service providers. OmniMall is not the manufacturer, retailer, or employer of the independent sellers and providers on the platform.',
  },
  {
    heading: 'Seller Responsibilities & Accurate Listings',
    summary: 'In Plain English: Describe items honestly and never list prohibited or counterfeit goods.',
    body: 'Sellers are solely responsible for the authenticity, condition, and accuracy of every listing they publish. Listing counterfeit goods, stolen campus property, prohibited substances, or examination hall leaks is strictly prohibited and results in immediate account bans and university referral.',
  },
  {
    heading: 'In-Person Inspection & Zero Advance Deposit Rule',
    summary: 'In Plain English: Buyers must inspect items in person. Sellers must never demand advance deposits.',
    body: 'To protect students from fraud, transactions must be conducted at designated public campus meetup points during daylight hours. Buyers have the right to test electronics and inspect products before transferring payment. Never send advance deposits for peer trades.',
  },
  {
    heading: 'Community Conduct & Account Termination',
    summary: 'In Plain English: Treat peers with respect and uphold campus standards.',
    body: 'OmniMall reserves the right to suspend or terminate accounts that engage in harassment, fraud, ghosting agreed transactions, or violating university campus codes of conduct.',
  },
];

const COOKIES_SECTIONS: PolicySection[] = [
  {
    heading: 'Essential Browser Storage',
    summary: 'In Plain English: We use local storage so you stay signed in and your cart stays saved.',
    body: 'OmniMall uses essential local storage and session tokens to preserve your login session, saved campus preferences, and marketplace cart items. These are functional cookies necessary for the platform to operate.',
  },
  {
    heading: 'Zero Third-Party Advertising Cookies',
    summary: 'In Plain English: No invasive tracking pixels or commercial ad networks.',
    body: 'Our public website does not install third-party tracking pixels or behavioral ad trackers. We respect student privacy and data boundaries.',
  },
  {
    heading: 'Managing Your Browser Storage',
    summary: 'In Plain English: You can clear site storage at any time via your browser settings.',
    body: 'You can clear cookies or local storage through your browser settings. Note that clearing storage may sign you out of active student sessions and reset your preferred campus selection.',
  },
];

export const LegalHubPage: React.FC<{ initialTab: 'privacy' | 'terms' | 'cookies' }> = ({
  initialTab,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>(initialTab);

  const activeData =
    activeTab === 'privacy'
      ? {
          title: 'Privacy Policy',
          icon: Lock,
          badge: 'Student Data Protection',
          readTime: '4 min read',
          sections: PRIVACY_SECTIONS,
        }
      : activeTab === 'terms'
      ? {
          title: 'Terms of Use',
          icon: FileText,
          badge: 'Campus Peer Rules',
          readTime: '5 min read',
          sections: TERMS_SECTIONS,
        }
      : {
          title: 'Cookies & Browser Storage',
          icon: Cookie,
          badge: 'Browser Transparency',
          readTime: '3 min read',
          sections: COOKIES_SECTIONS,
        };

  const Icon = activeData.icon;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-8 sm:pt-12 pb-8 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#FF5B00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Marketplace</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FF5B00]">
                <Icon className="w-3.5 h-3.5" />
                <span>{activeData.badge}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
                {activeData.title}
              </h1>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeData.readTime}</span>
              </span>
              <span>·</span>
              <span>Updated Nov 2026</span>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="pt-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'privacy', label: 'Privacy Policy', path: '/privacy' },
              { id: 'terms', label: 'Terms of Use', path: '/terms' },
              { id: 'cookies', label: 'Cookies & Storage', path: '/cookies' },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#FF5B00] text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Articles */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-6">
          {activeData.sections.map((section, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                  {idx + 1}. {section.heading}
                </h2>
                <span className="text-xs font-black text-slate-300 font-heading">
                  0{idx + 1}
                </span>
              </div>

              {/* In Plain English Box */}
              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-100 flex items-start gap-2.5 text-xs text-slate-800">
                <Sparkles className="w-4 h-4 text-[#FF5B00] shrink-0 mt-0.5" />
                <span className="font-medium leading-relaxed">{section.summary}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        {/* Legal Contact Footer */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/80 text-center space-y-2">
          <h3 className="text-sm font-bold text-slate-900 font-heading">
            Questions regarding our policies?
          </h3>
          <p className="text-xs text-slate-500">
            Reach out to our campus legal and privacy team at{' '}
            <a href="mailto:privacy@omnimall.app" className="text-[#FF5B00] font-bold hover:underline">
              privacy@omnimall.app
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => <LegalHubPage initialTab="privacy" />;
export const TermsPage: React.FC = () => <LegalHubPage initialTab="terms" />;
export const CookiesPage: React.FC = () => <LegalHubPage initialTab="cookies" />;
