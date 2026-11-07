import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Wrench,
  Sparkles,
  Camera,
  Laptop,
  BookOpen,
  Palette,
  Scissors,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Eye,
  Check,
  Users,
  MessageSquare,
  HelpCircle,
  FileCheck,
  Zap,
} from 'lucide-react';
import { ASSETS } from '../data/assets';

interface ServiceDomainInfo {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  commonServices: string[];
  deliverablesAndStandards: string[];
  recommendedMeetup: string;
  turnaroundExpectation: string;
}

const SERVICE_DOMAINS: ServiceDomainInfo[] = [
  {
    id: 'media',
    name: 'Photography & Creative Media',
    icon: Camera,
    tagline: 'Campus portraits, graduation shoots, event coverage & creative direction',
    description:
      'Student photographers and videographers understand the campus aesthetics better than external studios. From executive headshots for your LinkedIn profile to SRC election campaign photography and hall week coverage, peer media creators deliver rapid, affordable results.',
    commonServices: [
      'Executive studio headshots for student resumes & LinkedIn',
      'Campus graduation & matriculation portrait sessions',
      'SRC election campaign posters & portrait photography',
      'Hall week events, dinners & sports tournament coverage',
      'Creative fashion lookbooks for campus clothing brands',
    ],
    deliverablesAndStandards: [
      'Raw capture with professional mirrorless/DSLR cameras',
      'Color-graded high-resolution JPEG delivery via cloud drive',
      'Turnaround typically within 24 to 48 hours for edited selects',
      'Clear rights for personal and commercial promotional use',
    ],
    recommendedMeetup: 'UPSA Library Quadrangle, Rawlings Block Lawns, or Student Centre',
    turnaroundExpectation: '24 – 48 Hours turnaround for finalized edits',
  },
  {
    id: 'tech',
    name: 'Tech Diagnostics & Device Repair',
    icon: Laptop,
    tagline: 'SSD cloning, OS optimization, screen repairs & thermal servicing',
    description:
      'Computer science and engineering students provide crucial on-campus hardware and software support. Rather than risking your laptop with unverified street technicians in central town, get peer-to-peer repairs handled right within your hostel or faculty study area.',
    commonServices: [
      'Solid-State Drive (SSD) upgrades and data migration / cloning',
      'Windows 11 / macOS clean installations and driver updates',
      'Thermal paste renewal & internal laptop cooling fan servicing',
      'Laptop screen replacements and battery swaps',
      'Virus, spyware & malware cleanup without data loss',
    ],
    deliverablesAndStandards: [
      'Full data backup confirmation before any internal work begins',
      'Genuine or high-grade OEM replacement parts disclosed upfront',
      'Post-service hardware benchmark and stress testing',
      'Direct diagnostic demonstration in front of the student owner',
    ],
    recommendedMeetup: 'Student Centre Tech Lounge or Faculty Study Cubicles',
    turnaroundExpectation: 'Same-day to 24-hour turnaround for diagnostics & servicing',
  },
  {
    id: 'academics',
    name: 'Academic Proofreading & Formatting',
    icon: BookOpen,
    tagline: 'Thesis formatting, APA 7th edition referencing & clarity editing',
    description:
      'High academic standards require immaculate referencing, formatting, and grammar. Senior undergraduates and postgraduates offer peer proofreading to help students polish their dissertations, project proposals, and term papers before submission.',
    commonServices: [
      'APA 7th edition, Harvard & Chicago referencing harmonization',
      'Dissertation formatting (table of contents, margins, pagination, figures)',
      'Syntax, grammar, coherence and academic vocabulary polishing',
      'Similarity report consultation and bibliography cross-checking',
    ],
    deliverablesAndStandards: [
      'Tracked changes document so students see every editorial adjustment',
      'Strict academic integrity: proofreading and formatting assistance only',
      'Absolute confidentiality of student research data and manuscripts',
      'Turnaround aligned with university faculty submission deadlines',
    ],
    recommendedMeetup: 'Library Quiet Study Zone or digital cloud document exchange',
    turnaroundExpectation: '24 – 72 Hours depending on manuscript page count',
  },
  {
    id: 'design',
    name: 'Graphic Design & Brand Identity',
    icon: Palette,
    tagline: 'SRC campaign flyers, department jerseys, event posters & brand logos',
    description:
      'Campus student organizations, clubs, and student businesses require sharp visual branding. Talented student graphic designers create modern flyers, custom department apparel graphics, and social media banners on short notice.',
    commonServices: [
      'SRC election posters, candidate manifestos & digital stickers',
      'Departmental & hall week celebration event flyers',
      'Custom sublimation prints for department & hall jerseys',
      'Brand logos, business cards & packaging labels for student merchants',
      'Instagram carousel templates and event presentation decks',
    ],
    deliverablesAndStandards: [
      'Print-ready high-resolution CMYK PDF files for printing presses',
      'Web-optimized RGB formats for WhatsApp, Instagram, and TikTok',
      'Transparent PNG logos and complete source vector files (AI / PSD)',
      'Agreed revision rounds included in initial scope',
    ],
    recommendedMeetup: 'Online digital brief with in-person design review if requested',
    turnaroundExpectation: '24 – 48 Hours for initial draft concepts',
  },
  {
    id: 'styling',
    name: 'Hair Styling, Braiding & Grooming',
    icon: Scissors,
    tagline: 'Hostel room braiding, dreadlock retwist, grooming & styling',
    description:
      'Balancing coursework and personal grooming is tough without reliable on-campus services. Skilled student stylists and barbers offer appointments directly in campus hostels, saving hours of transit to commercial salons.',
    commonServices: [
      'Knotless braids, cornrows, box braids & passion twists',
      'Dreadlock wash, retwist, interlocking & styling',
      'Barbering shape-ups, beard trims & fade haircuts',
      'Wig washing, revival, revamping & lace installation',
    ],
    deliverablesAndStandards: [
      'Clean, sanitary styling equipment and hair protection practices',
      'On-site convenience in hostel residential quarters',
      'Fixed transparent rates without unexpected salon add-on charges',
      'Flexible booking around evening revision and weekend lecture blocks',
    ],
    recommendedMeetup: 'Yaa Asantewaa, Oti Boateng, or student residential rooms',
    turnaroundExpectation: '2 – 3 Hours per appointment slot',
  },
];

export const ServicesPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedDomain, setSelectedDomain] = useState<string>('media');

  const activeDomain =
    SERVICE_DOMAINS.find((d) => d.id === selectedDomain) || SERVICE_DOMAINS[0];
  const ActiveIcon = activeDomain.icon;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] via-[#FFFBF8] to-white border-b border-slate-200/80 pt-10 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and Overview */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-bold text-[#FF5B00]">
                <Wrench className="w-3.5 h-3.5" />
                <span>The Campus Skills & Freelance Economy</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#202124] tracking-tight font-heading leading-tight">
                How student services and peer freelance gigs work on campus.
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
                OmniMall connects university students with vetted peer professionals right on campus. Discover how skilled photographers, tech technicians, proofreaders, designers, and stylists offer their services with transparent Cedi pricing and zero middleman fees.
              </p>

              {/* Trust & Structure Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#FF5B00]" />
                  <span>Student ID Verified</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <DollarSign className="w-4 h-4 text-[#FF5B00]" />
                  <span>Transparent Upfront Rates</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#FF5B00]" />
                  <span>On-Campus Turnaround</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#domains"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Explore Service Domains</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/sell"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#FF5B00]" />
                  <span>Offer Your Skills</span>
                </Link>
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
                  src={ASSETS.servicesCreative}
                  alt="Student campus freelance and creative services"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl"
                />

                {/* Floating Info Banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00]">
                      Peer Skills Network
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      0% Commission
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    Direct Booking · Student-to-Student
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    No distant agency markups or travel fees. Connect with talented peers attending your university.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Campus Services */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            The Service Framework
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
            Why campus skills belong in a structured marketplace.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Freelancing on campus used to rely on phone numbers scrawled on hostel walls or lost in chat groups. OmniMall turns student talents into legitimate peer businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 01</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Transparent Starting Rates
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Service listings explicitly state their starting prices in Ghanaian Cedis (GH₵), included deliverables, and revision rules. Clients know what to expect before initiating contact.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 02</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Zero Transit & Rapid Turnaround
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Because provider and client live and study on the same campus, handovers, photoshoots, and laptop repairs happen right on site without costly cross-city dispatch riders.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pillar 03</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Verified Accountability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every student provider is verified with institutional credentials. Fellow peers uphold their reputation across departments, creating mutual trust and high-quality delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Domains Deep-Dive */}
      <section id="domains" className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Service Domains
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              Key student skills traded on campus.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any domain below to review what services are offered, delivery standards, and typical campus turnaround times.
            </p>
          </div>

          {/* Domain Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {SERVICE_DOMAINS.map((dom) => {
              const Icon = dom.icon;
              const isSelected = selectedDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#FF5B00] text-white shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{dom.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Information Card */}
          <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5B00] flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    {activeDomain.name}
                  </h3>
                  <p className="text-xs text-[#FF5B00] font-semibold">{activeDomain.tagline}</p>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-[#FF5B00]" />
                <span className="font-semibold text-slate-700">{activeDomain.turnaroundExpectation}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeDomain.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Common Offerings */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>Common Campus Requests</span>
                </h4>
                <ul className="space-y-2">
                  {activeDomain.commonServices.map((srv, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards & Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#FF5B00]" />
                  <span>Deliverables & Quality Standards</span>
                </h4>
                <ul className="space-y-2">
                  {activeDomain.deliverablesAndStandards.map((std, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70"
                    >
                      <span className="w-4 h-4 rounded-full bg-orange-100 text-[#FF5B00] text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Campus Meetup Spot */}
            <div className="p-4 rounded-2xl bg-orange-100/60 border border-orange-200/80 flex items-center justify-between text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5B00] shrink-0" />
                <span>
                  <strong>Typical On-Campus Workspace / Meetup:</strong> {activeDomain.recommendedMeetup}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Client-Freelancer Flow */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            The Booking Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
            Four simple steps to booking a peer service.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How clients and student providers connect, deliver work, and complete payments without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discover & Review',
              desc: 'Browse student listings to inspect previous portfolios, turnaround timelines, and starting rates.',
              icon: <Eye className="w-5 h-5 text-[#FF5B00]" />,
            },
            {
              step: '02',
              title: 'Direct Peer Enquiry',
              desc: 'Connect directly with the provider on WhatsApp or chat to align on scope, deliverables, and date.',
              icon: <MessageSquare className="w-5 h-5 text-[#FF5B00]" />,
            },
            {
              step: '03',
              title: 'Campus Delivery',
              desc: 'Meet on campus for your photoshoot, drop off your laptop, or host a styling session in residential halls.',
              icon: <MapPin className="w-5 h-5 text-[#FF5B00]" />,
            },
            {
              step: '04',
              title: 'Approve & MoMo',
              desc: 'Review the completed work, approve deliverables, and transfer Cedis directly to the provider with 0% fee.',
              icon: <DollarSign className="w-5 h-5 text-[#FF5B00]" />,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-slate-300 font-heading">
                  {item.step}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: OmniMall vs External Agencies vs Informal WhatsApp */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              Market Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#202124] tracking-tight font-heading">
              Why hire on campus instead of off-campus agencies?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              See the direct benefits of hiring fellow students right on your campus.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 border-b border-slate-200/80 text-slate-700 font-heading">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-[#FF5B00] font-black">OmniMall Peer Services</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-semibold">External Off-Campus Agencies</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-semibold">Random WhatsApp Contacts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Pricing & Rates</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Student-friendly fair Cedi rates</td>
                  <td className="p-4 sm:p-5 text-slate-500">Corporate overhead markups (3x - 5x)</td>
                  <td className="p-4 sm:p-5">Unpredictable; price increases after DM</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Location & Transit</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">On campus (Hostels, Library, Quad)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Must travel across town or pay dispatch</td>
                  <td className="p-4 sm:p-5">Unclear meeting locations</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Accountability</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">Verified student credentials & reviews</td>
                  <td className="p-4 sm:p-5 text-slate-500">Impersonal customer service tickets</td>
                  <td className="p-4 sm:p-5">Zero verification; high risk of ghosting</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Platform Cut</td>
                  <td className="p-4 sm:p-5 text-[#FF5B00] font-bold">GH₵ 0 Commission (Provider keeps 100%)</td>
                  <td className="p-4 sm:p-5 text-slate-500">20% - 30% agency retainer cut</td>
                  <td className="p-4 sm:p-5">0%, but zero discovery tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Freelancer Offer Skills Callout */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-[#FF5B00] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Are you a photographer, coder, tutor, or stylist?
            </h3>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
              Join dozens of student freelancers earning sustainable income on campus. Set your own rates, get a permanent shareable service link, and connect directly with campus clients.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/sell"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#FF5B00] hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              <span>List Your Student Skill</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/campuses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-700/60 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all shrink-0"
            >
              <span>View Active Campuses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
