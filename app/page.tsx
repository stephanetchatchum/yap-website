"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const welcomeKit = [
    { label: "Official Membership Card", image: "/images/kit/membership-card.jpg" },
    { label: "Custom Yigil Polo Shirt", image: "/images/kit/polo-shirt.jpeg" },
    { label: "Branded Pen", image: "/images/kit/branded-pen.jpeg" },
    { label: "Academic Goal-Tracker Book", image: "/images/kit/goal-tracker-book.jpeg" },
    { label: "Premium Branded Water Bottle", image: "/images/kit/water-bottle.jpeg" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative text-white py-32 px-4 text-center overflow-hidden md:min-h-[85vh] md:flex md:items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/65"></div>

        <div className="relative max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t.home.heroHeadline}
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            {t.home.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-gold text-navy font-semibold rounded-lg px-6 py-3 hover:opacity-90"
            >
              {t.home.bookDiagnostic}
            </a>
            <a
              href="/academics"
              className="border border-white text-white rounded-lg px-6 py-3 hover:bg-white hover:text-navy transition"
            >
              {t.home.explorePrograms}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-navy font-semibold text-sm text-center">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            {t.home.trustRdb}
          </span>
          <span>TIN: 156850598</span>
          <span>{t.home.trustVetted}</span>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            {t.home.pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-heading text-2xl font-bold mb-2 text-navy">
                Academic Excellence
              </h3>
              <p className="text-gray-700 mb-6">
                Deep-focus mentoring tailored to global standards: Cambridge
                International, IB, Rwandan National Curriculum, and France
                Education International. From Primary Foundation to Secondary Mastery.
              </p>
              <a
                href="/academics"
                className="inline-block bg-navy text-white font-semibold rounded-lg px-5 py-2 hover:opacity-90"
              >
                Explore Academic Programs
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-heading text-2xl font-bold mb-2 text-navy">
                YAP Talent Incubator
              </h3>
              <p className="text-gray-700 mb-6">
                Because true potential is not only measured by academic grades.
                Music, visual arts, public speaking, martial arts, chess, and more,
                all under one roof.
              </p>
              <a
                href="/incubator"
                className="inline-block bg-gold text-navy font-semibold rounded-lg px-5 py-2 hover:opacity-90"
              >
                Explore Talent Incubator
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* YAP Advantage */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            The YAP Advantage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Precision Matching</h3>
              <p className="text-gray-600 text-sm">
                Our diagnostic assessment pairs your child with a tutor whose strengths and style perfectly complement their personality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-navy">
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Ultimate Flexibility</h3>
              <p className="text-gray-600 text-sm">
                Highly flexible scheduling and adaptable timetables that fit around your family&apos;s life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Vetted Experts</h3>
              <p className="text-gray-600 text-sm">
                Every tutor undergoes rigorous academic vetting, safeguarding training, and background checks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Progress Transparency</h3>
              <p className="text-gray-600 text-sm">
                Bi-weekly performance updates and termly academic strategy reviews, so you always know where your child stands.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* YAP Membership — NEW section, before Promo CTA */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Loyalty is Rewarded
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
            The Exclusive YAP Membership
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-12">
            After three (3) consecutive months of enrollment, students are
            officially inaugurated as YAP Members, unlocking the full Welcome Kit
            and exclusive community privileges.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {welcomeKit.map((item) => (
              <div
                key={item.label}
                className="bg-white/10 rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square rounded-md overflow-hidden mb-3 bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="font-heading font-bold text-gold mb-1">Birthday Recognition</h3>
              <p className="text-sm text-gray-300">
                A dedicated, personalized birthday gift from the academy.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-gold mb-1">Community Privileges</h3>
              <p className="text-sm text-gray-300">
                Access to termly gatherings, internal competitions, restricted workshops, and exclusive discounts with Kigali partner institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo CTA Banner */}
      <section className="bg-gold px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-navy text-white text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-1 mb-4">
            Limited Time
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Back-to-School Promotion
          </h2>
          <p className="text-navy text-lg mb-8">
            Lock in a <span className="font-bold">10% discount</span> on ALL tuition rates when you enroll and pay or pre-pay before October 15th, 2026.
          </p>
          <a
            href="/admissions"
            className="inline-block bg-navy text-white font-semibold rounded-lg px-8 py-4 hover:opacity-90 transition"
          >
            Contact Admissions
          </a>
        </div>
      </section>
    </main>
  );
}