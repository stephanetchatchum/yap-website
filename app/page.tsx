import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative text-white py-32 px-4 text-center overflow-hidden">
        
        {/* Background image */}
        <Image
          src="/images/hero-students.jpg"
          alt="Students studying together"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy/50"></div>

        {/* Content, sits above the image and overlay */}
        <div className="relative max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            More Than Just Tutoring.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            A premium development ecosystem tailored perfectly to your child&apos;s unique potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-gold text-navy font-semibold rounded-lg px-6 py-3 hover:opacity-90"
            >
              Book a Diagnostic Session
            </a>
            <a
              href="/academics"
              className="border border-white text-white rounded-lg px-6 py-3 hover:bg-white hover:text-navy transition"
            >
              Explore Our Programs
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
            RDB Registered
          </span>
          <span>TIN: 156850598</span>
          <span>100% Vetted Mentors</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white pt-24 pb-56 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* Text takes 3 of 5 columns */}
          <div className="md:col-span-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-navy">
              The Meaning of Yigil
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In the Bassa language, &quot;Yigil&quot; means Learning. At Yigil Academy
              of Potentials, we believe that true learning extends far beyond
              memorization. It is about intellectual curiosity, holistic skill
              development, and character building.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold text-navy">
              We don&apos;t just tutor students; we mentor future Leaders.
            </p>
          </div>

          {/* Quote card, slightly rotated, oversized quotation mark behind it */}
          <div className="md:col-span-2 relative pt-6">
            <span className="font-heading absolute -top-8 -left-12 text-[160px] text-gold/25 select-none leading-none z-0">
              &ldquo;
            </span>

            <div className="relative z-10 bg-navy text-white rounded-xl p-8 shadow-lg -rotate-2">
              <p className="font-heading text-xl leading-snug">
                Education is the most powerful weapon which you can use to
                change the world.
              </p>
              <p className="mt-4 text-sm text-gold uppercase tracking-wide">
                Nelson Mandela
              </p>
            </div>

            <span className="font-heading absolute -bottom-30 -right-12 text-[160px] text-gold/25 select-none leading-none z-0">
              &rdquo;
            </span>
          </div>

        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Academic Excellence Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              Academic Excellence
            </h3>
            <p className="text-gray-700 mb-6">
              Deep-focus mentoring tailored to global standards: Cambridge
              International, IB, Rwandan National Curriculum, and Francophone
              systems. From Primary Foundation to Secondary Mastery.
            </p>
            <a
              href="/academics"
              className="inline-block bg-navy text-white font-semibold rounded-lg px-5 py-2 hover:opacity-90"
            >
              Explore Academic Programs
            </a>
          </div>

          {/* Talent Incubator Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              YAP Talent Incubator
            </h3>
            <p className="text-gray-700 mb-6">
              Because true potential isn&apos;t measured by grades alone. Music,
              visual arts, public speaking, martial arts, chess, and more, all
              under one roof.
            </p>
            <a
              href="/incubator"
              className="inline-block bg-gold text-navy font-semibold rounded-lg px-5 py-2 hover:opacity-90"
            >
              Explore Talent Incubator
            </a>
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
                Highly flexible scheduling and adaptable timetables that fit around your family&apos;s life, not the other way around.
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