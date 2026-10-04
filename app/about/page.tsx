export default function About() {
  const domains = [
    { title: "Academics", body: "Mathematics, Sciences, Coding, advanced problem-solving, and more." },
    { title: "The Arts", body: "Music, Acting, Painting, Dance, Public Speaking, and creative expression." },
    { title: "Sports", body: "Track & Field, Martial Arts, and more." },
  ];

  const assessmentSteps = [
    {
      title: "The Discovery Conversation",
      body: "Every assessment begins with a welcoming consultation involving both the parent and the student. We listen to your academic concerns, past school history, and your long-term goals for your child, identifying their specific strengths and pain points.",
    },
    {
      title: "The Behavioral & Cognitive Evaluation",
      body: "The student engages in a carefully designed, stress-free set of exercises. We evaluate their communication style, gauge their attitude toward learning, and how they process information, identifying whether they are a visual, auditory, or kinesthetic learner, how they approach complex problems, and where they might lose focus.",
    },
    {
      title: "The Precision Match & Roadmap",
      body: "Once the assessment is complete, we analyze the data to build a customized, highly targeted learning roadmap. Most importantly, we use these insights to perform our Precision-Match, pairing your child with the exact Elite Academic Mentor whose personality, background, and teaching style perfectly align with your child's unique profile.",
    },
  ];

  const reasons = [
    "Institutional Accountability: strict quality control, with seamless tutor replacement if the fit isn't right.",
    "Ultimate Flexibility: flexible scheduling, makeup sessions, and adaptable timetables.",
    "Vetted Experts: every tutor undergoes rigorous academic vetting and background checks.",
    "Progress Transparency: monthly performance updates and termly academic strategy reviews.",
  ];

  return (
    <main>
      {/* Intro */}
      <section className="bg-navy text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">
            About Yigil Academy of Potentials
          </h1>
          <p className="text-gray-200">
            Empowering Minds, Cultivating Skills, Building Leaders.
          </p>
        </div>
      </section>

      {/* Meaning of Yigil + Mandela quote (offset card, same treatment as Home's Philosophy section) */}
      <section
        className="bg-white pt-24 pb-32 px-4 bg-repeat"
        style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: "300px" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-navy">
              The Meaning of Yigil
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In the Bassa language, &quot;Yigil&quot; means <strong>Learning</strong>. At Yigil
              Academy of Potentials, we believe that true learning extends far
              beyond memorization. It is about intellectual curiosity, holistic
              skill development, and character building.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold text-navy">
              We don&apos;t just tutor students; we mentor future Leaders.
            </p>
          </div>

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
            <span className="font-heading absolute -bottom-24 -right-8 text-[160px] text-gold/25 select-none leading-none z-0">
              &rdquo;
            </span>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 px-4 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/vision-mission-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/vision-mission.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/75"></div>

        <div className="relative max-w-3xl mx-auto text-white">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Our Vision & Mission: Cultivating Kigali&apos;s Next Virtuosos
          </h2>
          <p className="leading-relaxed mb-4 text-gray-100">
            Our vision is to build Kigali&apos;s premier community of excellence:{" "}
            <strong className="text-gold">
              a vibrant ecosystem where students grow together, forge
              unshakeable character, and experience the pure joy of
              discovering what they are truly meant to do.
            </strong>
          </p>
          <p className="leading-relaxed mb-10 text-gray-100">
            We believe that early exposure is the ultimate key to lifelong
            fulfillment. That is why Yigil Academy operates as a
            multidimensional launchpad, immersing children in three core
            domains, helping them pinpoint their innate gifts and develop into
            a virtuoso in their chosen discipline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {domains.map((d) => (
              <div key={d.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-t-4 border-gold">
                <h3 className="font-heading font-bold text-white mb-2">{d.title}</h3>
                <p className="text-gray-200 text-sm">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Assessment */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            The Diagnostic Assessment
          </h2>
          <p className="font-bold text-gold mb-2">
            What is the Diagnostic Assessment?
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Before any tutoring begins, we must first understand exactly how
            your child learns. The Diagnostic Assessment is not a
            traditional pass-or-fail test. It is a comprehensive,
            low-pressure evaluation designed to uncover your child&apos;s
            current academic baseline, learning habits, and unique cognitive
            style. We don&apos;t just find out what your child needs to
            know; we find out exactly what they need to succeed.
          </p>

          <p className="font-bold text-gold mb-6">How Do We Conduct It?</p>
          <div className="space-y-6 mb-10">
            {assessmentSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-heading font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
            <p className="text-navy text-sm">
              <strong>The Result:</strong> A highly efficient, stress-free
              tutoring experience where every single session is optimized
              for your child&apos;s actual potential.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Leadership & Our Elite Mentors
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-navy">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-navy mb-1">
                Bryan Aurel Bakongo Bwemou, Founder & Managing Director
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The architecture of Yigil Academy reflects the
                interdisciplinary background of its founder. Bridging the gap
                between structured systems, human behavior, and artistic
                expression, Bryan holds a Bachelor of Science (Hons) in
                Software Engineering from the African Leadership University,
                supported by foundational university studies in Psychology
                at the University of Douala. With extensive hands-on
                experience tutoring primary, secondary and university
                students, he understands exactly how young minds process
                information. Furthermore, as a musician, multi-instrumentalist,
                and choir director, Bryan deeply understands the discipline,
                focus, and character that the arts instill in a student,
                making him uniquely equipped to lead this holistic
                educational ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection & Matching Process */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            The Selection & Matching Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not simply hire standard tutors; we recruit Elite Academic
            Mentors. Our team is curated from exceptional university students
            and graduates across diverse academic disciplines who possess
            proven tutoring experience. Every candidate undergoes rigorous
            training in pedagogical best practices and comprehensive
            personality evaluations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Once your child completes their initial Diagnostic Assessment, we
            analyze the results to perform a precision-match, pairing your
            child with a mentor who aligns perfectly not only with their
            academic needs, but with their specific background, personality
            type, and skill set.
          </p>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            The Parent Partnership
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Unlocking a child&apos;s full potential is a collaborative effort.
            At Yigil Academy, parents are our most vital partners in this
            journey of early discovery. We work closely with you to track
            your child&apos;s evolving interests and milestones, providing
            transparent insights into their unique strengths. Together, we
            ensure your child is equipped with the self-awareness,
            discipline, and confidence needed to make bold, informed choices
            about their future.
          </p>
        </div>
      </section>

      {/* Why Choose Yigil Academy */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">
            Why Choose Yigil Academy?
          </h2>
          <ul className="space-y-4">
            {reasons.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}