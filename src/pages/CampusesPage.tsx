import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Compass,
  GraduationCap,
  MapPin,
  Store,
  UsersRound,
} from 'lucide-react';

const campuses = [
  {
    name: 'University of Professional Studies, Accra',
    shortName: 'UPSA',
    image: '/upsacampus.jpg',
    alt: 'Campus buildings and fountain at the University of Professional Studies, Accra',
    description:
      "Where our campus journey began. UPSA represents an important part of Omnimall's foundation and our commitment to making campus commerce more accessible.",
    label: 'Where it began',
  },
  {
    name: 'Valley View University',
    shortName: 'VVU',
    image: '/vvucampus.jpg',
    alt: 'The entrance gate of Valley View University',
    description:
      'Expanding our presence and bringing the Omnimall experience to another university community.',
    label: 'Growing together',
  },
  {
    name: 'University of Ghana',
    shortName: 'UG',
    image: '/legoncampus.jpg',
    alt: 'Aerial view of the University of Ghana campus',
    description:
      "Connecting with one of Ghana's largest university communities and creating more opportunities for students, entrepreneurs, and businesses.",
    label: 'Building connections',
  },
];

const communityBenefits = [
  {
    icon: Store,
    title: 'Discover local businesses',
    description:
      'Find products, stores, and services offered by people and businesses within participating university communities.',
  },
  {
    icon: UsersRound,
    title: 'Support student entrepreneurs',
    description:
      'Give student-owned businesses another opportunity to showcase their products and connect with potential customers.',
  },
  {
    icon: GraduationCap,
    title: 'Explore campus services',
    description:
      'Discover talented individuals offering everything from graphic design and photography to technology and professional services.',
  },
  {
    icon: Compass,
    title: 'Stay connected',
    description:
      'Explore campus trends, interesting stories, community updates, and happenings across the Omnimall network.',
  },
];

export const CampusesPage: React.FC = () => (
  <div className="min-h-screen bg-white pb-20 selection:bg-[#FF5B00]/15 selection:text-[#FF5B00]">
    <section className="overflow-hidden border-b border-orange-100 bg-[#fffaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold text-[#FF5B00] shadow-sm">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            Omnimall across campuses
          </span>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            One marketplace.
            <span className="block text-[#FF5B00]">Many campuses.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-800">
            Bringing university communities closer.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Every university has its own community, entrepreneurs, businesses, and unique culture.
            But great opportunities shouldn&apos;t be limited by campus boundaries.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Omnimall is building a connected marketplace that brings students, businesses, sellers,
            and service providers together across university communities in Ghana. From discovering
            products and services to supporting student-owned businesses, we&apos;re creating more
            ways for campus communities to connect, trade, and grow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/marketplace"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Explore Omnimall
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/sell"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-colors hover:border-orange-200 hover:text-[#FF5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B00]"
            >
              Join as a seller
            </Link>
          </div>
          <p className="mt-7 border-l-2 border-[#FF5B00] pl-3 font-heading text-sm font-bold text-slate-800">
            Different campuses. Shared opportunities. One Omnimall.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute -bottom-6 -left-5 h-36 w-36 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
            <div className="relative col-span-3 row-span-2 min-h-72 overflow-hidden rounded-[1.75rem] border-4 border-white shadow-xl sm:min-h-96">
              <img
                src="/upsacampus.jpg"
                alt="University of Professional Studies, Accra campus"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
                  Where our story began
                </p>
                <p className="mt-1 font-heading text-xl font-black sm:text-2xl">UPSA</p>
              </div>
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-lg">
              <img
                src="/vvucampus.jpg"
                alt="Valley View University entrance"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 font-heading text-lg font-black text-white sm:bottom-4 sm:left-4 sm:text-xl">
                VVU
              </p>
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-lg">
              <img
                src="/legoncampus.jpg"
                alt="University of Ghana campus from above"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 font-heading text-lg font-black text-white sm:bottom-4 sm:left-4 sm:text-xl">
                UG
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl sm:right-6 sm:p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">A growing campus network</p>
              <p className="text-sm font-bold text-slate-900">Rooted in Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="campus-network" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Our campus network
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A journey across university communities.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Our campus journey has begun. We&apos;re building our presence and creating opportunities
            for students and businesses to take part in one connected marketplace.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {campuses.map(({ name, shortName, image, alt, description, label }) => (
            <article
              key={shortName}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  {label}
                </span>
                <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-heading text-sm font-black text-[#FF5B00] shadow-lg">
                  {shortName}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-black leading-snug text-slate-900">
                  {name}
                  {shortName === 'UPSA' && <span className="block">(UPSA)</span>}
                  {shortName === 'UG' && <span className="block">(UG)</span>}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#f8f8f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="max-w-xl lg:col-span-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Why campuses?
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            A community full of possibility.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Universities are more than places of learning. They&apos;re communities filled with
              creativity, ambition, talent, and entrepreneurial potential.
            </p>
            <p>
              Students run businesses, offer professional services, create products, and build
              ideas that deserve visibility. Yet finding customers, discovering services, and
              accessing opportunities can be unnecessarily difficult.
            </p>
            <p>
              Omnimall brings these activities into one organized digital environment, helping
              university communities discover what&apos;s available around them.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {communityBenefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5B00]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-black text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70" />
          <img
            src="/legoncampus.jpg"
            alt="Expansive university grounds with academic buildings and green spaces"
            loading="lazy"
            className="relative aspect-[16/10] w-full rounded-[1.7rem] object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#FF5B00]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-slate-500">One campus at a time</p>
              <p className="text-sm font-bold text-slate-900">A vision for all of Ghana</p>
            </div>
          </div>
        </div>
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5B00]">
            Our vision
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Our vision goes beyond three campuses.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              UPSA, Valley View University, and the University of Ghana are important milestones in
              our journey. But our ambitions extend much further.
            </p>
            <p>
              We envision an Omnimall that connects university communities across Ghana, creating a
              wider network where students, businesses, and entrepreneurs can discover opportunities
              beyond their immediate campuses.
            </p>
            <p>
              From Accra to Kumasi, Cape Coast to Tamale, and every university community in between,
              we want Omnimall to become a familiar part of campus life.
            </p>
          </div>
          <p className="mt-5 font-heading text-base font-black text-[#FF5B00]">
            We&apos;re taking it one campus at a time.
          </p>
        </div>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
          <GraduationCap className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-heading text-3xl font-black tracking-tight sm:text-4xl">
          The next campus could be yours.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          We&apos;re working towards a future where more universities can become part of the Omnimall
          network. Whether you&apos;re a student, entrepreneur, business owner, or someone who
          believes in what we&apos;re building, there&apos;s a place for you in this journey.
        </p>
        <p className="mt-5 font-heading text-base font-bold text-orange-300">
          Your campus. Your community. Your Omnimall.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/marketplace"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF5B00] px-6 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore the marketplace
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/sell"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-700 px-6 text-sm font-bold text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Become a seller
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-8 font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
          Omnimall
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-400">
          Sell with ease. Buy with confidence.
        </p>
      </div>
    </section>
  </div>
);
