import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FileText,
  Clock,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Scale,
  ShieldCheck,
  MapPin,
  DollarSign,
  ChevronRight,
  Share2,
} from 'lucide-react';

interface TermSection {
  id: string;
  title: string;
  summary: string;
  content: string[];
}

const SECTIONS: TermSection[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms & Eligibility',
    summary: 'By using OmniMall, you agree to these campus commerce rules. You must be an enrolled student or university community member.',
    content: [
      'Welcome to OmniMall. By creating an account, browsing listings, listing items, or utilizing peer services on omnimall.app or our mobile applications, you enter into a binding agreement to adhere to these Terms & Conditions ("Terms").',
      'Eligibility: OmniMall is designed for university campus communities. To qualify for a verified student merchant badge or place peer orders, you must be a currently enrolled student, faculty member, or staff member at an accredited tertiary institution in Ghana.',
      'If you do not agree with any part of these Terms, you must discontinue using the platform.',
    ],
  },
  {
    id: 'role',
    title: '2. The Platform’s Role as a Venue',
    summary: 'OmniMall provides the venue and verification tools. The contract of sale is directly between buyer and seller.',
    content: [
      'Peer-to-Peer Marketplace: OmniMall operates as a discovery platform and catalog index connecting independent student buyers and sellers. OmniMall is not an online store, retailer, broker, or employer.',
      'Independent Merchants: All products, services, and storefronts are owned and operated solely by independent student entrepreneurs. OmniMall does not own, store, inspect, or manufacture the items listed in the catalog.',
      'Direct Peer Contract: When you purchase an item or book a student skill, the agreement and transaction are strictly between you and the respective student peer.',
    ],
  },
  {
    id: 'listings',
    title: '3. Seller Standards & Prohibited Items',
    summary: 'Sellers must describe items truthfully with fixed Cedi prices. Counterfeits, stolen goods, and exam leaks are strictly forbidden.',
    content: [
      'Accurate Disclosures: Sellers must provide honest, up-to-date descriptions of item condition (Brand New, Like New, Good) including any battery degradation, scratches, or missing accessories.',
      'Fixed Ghanaian Cedi Pricing: Prices must be clearly stated in Ghanaian Cedis (GH₵). Artificially inflating prices after an inquiry or engaging in deceptive bidding games is prohibited.',
      'Strictly Prohibited Items: You may not list or offer: (a) Counterfeit or pirated goods; (b) Stolen university or personal property; (c) Prohibited or prescription pharmaceuticals; (d) Examination papers, leaked test materials, or academic impersonation; (e) Hazardous, flammable, or unlawful goods.',
      'Violation Consequences: Any user attempting to list prohibited goods will face immediate account termination and reporting to university campus security.',
    ],
  },
  {
    id: 'inspection',
    title: '4. The In-Person Inspection & Zero Advance Deposit Rule',
    summary: 'Never pay or demand advance deposits. Buyers must inspect products physically in daylight before transferring funds.',
    content: [
      'Zero Advance Booking Deposits: Sellers on OmniMall are strictly prohibited from demanding upfront Mobile Money deposits, reservation fees, or delivery advance payments.',
      'In-Person Verification: Buyers have the unconditional right to test and inspect any physical item (turn on electronics, check screen pixels, inspect textbook bindings, try on fits) prior to finalizing the deal.',
      'Payment at Point of Handover: Funds should only be transferred via Mobile Money or cash when the buyer is physically holding the product and satisfied with its condition.',
    ],
  },
  {
    id: 'meetups',
    title: '5. Designated Campus Handover Locations',
    summary: 'All transactions must occur in well-lit, public campus areas during daylight hours.',
    content: [
      'Approved Meetup Zones: To ensure peer safety, handovers must be scheduled at designated campus landmarks—such as the UPSA Library Walkway, Student Centre Food Court, Rawlings Block, or Hostel Forecourt Security Gates.',
      'Daylight Hours: Handovers should be conducted between 8:00 AM and 6:30 PM. We strongly discourage meetings in secluded, unlit, or off-campus private quarters.',
      'Notify a Peer: We advise students to inform a roommate or friend whenever completing a high-value electronics transaction.',
    ],
  },
  {
    id: 'services',
    title: '6. Student Services & Freelance Gigs',
    summary: 'Service providers set their own scope and rates. Clients must communicate scope clearly before booking.',
    content: [
      'Scope of Work: Freelancers offering campus photography, tech repairs, braiding, or graphic design must clarify starting rates, turnaround times, and revision policies in their service listings.',
      'Fair Fulfillment: Providers agree to deliver agreed work within the stated timeframe. Clients agree to pay the agreed rate upon satisfactory delivery or completion of the milestone.',
      'Disputes: In the event of an unfulfilled service or defective tech repair, the parties agree to engage in good-faith resolution mediated by the OmniMall Campus Lead.',
    ],
  },
  {
    id: 'suspensions',
    title: '7. Account Termination & Violations',
    summary: 'We maintain zero tolerance for fraud, harassment, impersonation, or ghosting.',
    content: [
      'Grounds for Suspension: OmniMall reserves the right to immediately suspend or permanently ban any account that engages in: (a) Attempting to defraud peers; (b) Impersonating students or staff; (c) Repeated no-shows or ghosting agreed handovers; (d) Harassment or threatening behavior.',
      'Appeals: Users wishing to appeal an account action may submit an inquiry to safety@omnimall.app within 7 days of notice.',
    ],
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability & Dispute Resolution',
    summary: 'OmniMall is not liable for peer disputes, but our student team provides active mediation assistance.',
    content: [
      'As is Platform: The platform is provided on an "as is" and "as available" basis. While we verify student credentials, we do not warrant the commercial quality or longevity of peer items.',
      'Limitation: To the maximum extent permitted under Ghanaian law, OmniMall and its operators shall not be liable for any indirect, incidental, or consequential damages resulting from peer-to-peer exchanges.',
      'Mediation Desk: We provide a dedicated Student Dispute Resolution Desk at the UPSA Student Centre to help resolve peer issues quickly and amicably.',
    ],
  },
];

export const TermsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('acceptance');
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
              <span>{copiedLink ? 'Link Copied!' : 'Share Terms'}</span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FF5B00]">
              <Scale className="w-3.5 h-3.5" />
              <span>Campus Commerce Code of Conduct</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading">
              Terms & Conditions
            </h1>

            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              The fundamental rules, standards, and safety expectations governing buying, selling, and offering services on OmniMall.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>Last Updated: November 2026</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Advance Deposit Policy</span>
            </div>
            <span>·</span>
            <div>6 min read</div>
          </div>
        </div>
      </section>

      {/* Main Content & Table of Contents */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sticky top-24 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-[#FF5B00]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                Sections
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

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 space-y-2 text-xs">
              <span className="font-bold text-slate-800 block">Report a Violation</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Notice an advance deposit demand or counterfeit listing? Notify moderators immediately.
              </p>
              <a
                href="mailto:safety@omnimall.app"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5B00] hover:underline"
              >
                <span>safety@omnimall.app</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Terms Sections */}
          <div className="lg:col-span-8 space-y-6">
            {/* Plain English Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-orange-500 to-[#FF5B00] text-white shadow-md space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-200" />
                <h2 className="text-sm sm:text-base font-bold font-heading">
                  The Golden Campus Trade Rule
                </h2>
              </div>
              <p className="text-xs text-orange-100 leading-relaxed">
                OmniMall is built on trust and daylight inspection. Never send money before you hold and test the item in person. Meet at designated campus landmarks, test your gear, and transfer MoMo directly to your fellow student on the spot.
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

            {/* Related Privacy Callout */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Want to review our Privacy Policy?
                </h4>
                <p className="text-xs text-slate-500">
                  Read how we safeguard student credentials, phone numbers, and marketplace data.
                </p>
              </div>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-50 hover:bg-[#FF5B00] text-[#FF5B00] hover:text-white text-xs font-bold transition-all shrink-0"
              >
                <span>Read Privacy Policy</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

