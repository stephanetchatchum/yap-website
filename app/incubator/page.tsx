export default function Incubator() {
  const arenas = [
    {
      title: "The Artistic Arena",
      subtitle: "Creative Expression & Emotional Intelligence",
      items: [
        {
          label: "Music Conservatory",
          body: "Music Theory, Vocal Training, Piano, Guitar, Violin, Flute, Recorder, Trumpet, and Drums.",
        },
        { label: "Visual Arts", body: "Drawing and Painting." },
        { label: "Spoken Word", body: "Public Speaking, Theatre, and Debate." },
      ],
    },
    {
      title: "The Strategic & Applied Arena",
      subtitle: "Critical Thinking & Logic",
      items: [
        {
          label: "",
          body: "Coding & Robotics, Chess, Rubik's Cube, and advanced strategic board games to build spatial awareness and analytical mastery.",
        },
      ],
    },
    {
      title: "The Physical Arena",
      subtitle: "Resilience & Health",
      items: [
        {
          label: "",
          body: "Athletics, Judo, Karate, Taekwondo, and Dance to foster physical discipline, focus, and grit.",
        },
      ],
    },
  ];

  const summerCategories = [
    { label: "Category 1", body: "Piano, Guitar, Recorder, or Drums." },
    { label: "Category 2", body: "Drawing/Painting, Public Speaking, DIY, or Coding/Robotics." },
    { label: "Category 3", body: "Dance, Theatre/Play, or Martial Arts." },
  ];

  const pathway = [
    {
      title: "Immersion & Exposure",
      body: "Giving the child the opportunity to safely try a wide variety of disciplines without the pressure of immediate perfection.",
    },
    {
      title: "Identification",
      body: "Our mentors closely observe where the child naturally excels, learns fastest, and shows genuine joy.",
    },
    {
      title: "Virtuoso Development",
      body: "We narrow the focus to nurture their specific talent, providing the advanced 1-on-1 mentorship required to achieve mastery.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">
            Talent Incubator Programs
          </h1>
          <p className="text-gray-200">
            Because true potential is{" "}
            <strong className="text-gold">not only measured by academic grades...</strong>
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
            Unearth Your Child&apos;s Innate Genius
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Traditional education often forces children into a single lane too
            late in life, leading to academic distress or career burnout. The
            YAP Talent Incubator is a proactive solution: we immerse students
            in strategic, physical, and artistic disciplines early on, ensuring
            they discover who they are before they are forced to make
            high-stakes career choices.
          </p>
        </div>
      </section>

      {/* 1. The Three Arenas */}
      <section
        className="bg-white py-20 px-4 bg-repeat"
        style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: "300px" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4 text-center">
            The Three Arenas of Discovery
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Our activities are not a random list of hobbies. They form a
            comprehensive curriculum designed to develop the whole child across
            three core domains:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {arenas.map((arena) => (
              <div
                key={arena.title}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gold"
              >
                <h3 className="font-heading text-xl font-bold text-navy">{arena.title}</h3>
                <p className="text-sm text-gold font-semibold mb-4">{arena.subtitle}</p>
                <ul className="space-y-3">
                  {arena.items.map((item) => (
                    <li key={item.body} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-gold flex-shrink-0"></span>
                      <span>
                        {item.label && <strong className="text-navy">{item.label}: </strong>}
                        {item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Program Formats */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4 text-center">
            Program Formats: How We Deliver
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            The Talent Incubator is delivered in two distinct formats to suit
            your child&apos;s current stage of development, whether they are
            just exploring new interests or ready to master a specific craft.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option A */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <span className="text-gold text-xs font-semibold uppercase tracking-wide">
                Option A
              </span>
              <h3 className="font-heading text-xl font-bold text-navy mt-1 mb-4">
                The Virtuoso Track (1-on-1 At-Home Mentorship)
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Designed for deep focus and mastery, this format mirrors our
                premium academic tutoring.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong className="text-navy">How it works:</strong> Delivered
                  directly at your home. You and your child select 1 to 3
                  specific disciplines from our Arenas.
                </li>
                <li>
                  <strong className="text-navy">The Focus:</strong> Advanced,
                  personalized mentorship dedicated to refining a recognized
                  talent and building sustainable, long-term mastery.
                </li>
              </ul>
            </div>

            {/* Option B */}
            <div className="bg-navy text-white rounded-lg shadow-md p-8">
              <span className="text-gold text-xs font-semibold uppercase tracking-wide">
                Option B
              </span>
              <h3 className="font-heading text-xl font-bold mt-1 mb-4">
                The Immersion Track (Holiday Group Camps)
              </h3>
              <p className="text-gray-200 text-sm mb-4">
                Hosted at designated partner schools, our holiday camps are
                high-energy environments where children socialize, build
                confidence, and safely try a wide variety of disciplines.
              </p>
              <ul className="space-y-3 text-sm text-gray-200">
                <li>
                  <strong className="text-gold">Tuition:</strong> 35,000 RWF per
                  week for active YAP Students (enrolled in any current YAP
                  academic or incubator program) | 45,000 RWF per week for
                  Non-YAP Students.
                </li>
                <li>
                  <strong className="text-gold">Schedule:</strong> Monday to
                  Thursday, 9:00 AM – 2:00 PM.
                </li>
              </ul>
            </div>
          </div>

          {/* Camps detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="font-heading text-lg font-bold text-navy mb-1">
                Winter & Spring Camps
              </h3>
              <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-4">
                2 Weeks · Christmas & Easter
              </p>
              <p className="text-gray-700 text-sm mb-4">
                A dynamic, game-based curriculum to keep children active and
                engaged during short academic breaks.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong className="text-navy">Morning Sessions (Calm & Focused):</strong>{" "}
                  Singing, drawing, painting, and strategic board games (Chess,
                  Monopoly).
                </li>
                <li>
                  <strong className="text-navy">Afternoon Sessions (High-Energy):</strong>{" "}
                  Theatre, dance, public speaking, sports, spelling bees, DIY
                  projects, scavenger hunts, sack races, and other fun
                  activities and games.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="font-heading text-lg font-bold text-navy mb-1">
                The Summer Incubator
              </h3>
              <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-4">
                6 Weeks · Flagship Program
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Our flagship holistic summer program. Students are grouped by age
                (5–10 years and 11–17 years) and follow a structured daily
                rotation. Every child participates in Vocal Training, plus they
                build their own custom schedule by selecting one discipline from
                each of the following categories (3 disciplines in total):
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                {summerCategories.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-gold flex-shrink-0"></span>
                    <span>
                      <strong className="text-navy">{c.label}:</strong> {c.body}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic">
                Note: Age groups rotate between Categories 1 and 2 in the
                mornings, and unite for Category 3 activities in the afternoons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Incubation Pathway */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
            The Incubation Pathway
          </h2>
          <p className="text-gray-700 mb-10">
            For every child in our ecosystem, we follow a strict pedagogical
            pathway to ensure structured growth:
          </p>
          <div className="space-y-6">
            {pathway.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-heading font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-1">
                    Phase {i + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Community Showcase */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            The YAP Community Showcase
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Excellence deserves an audience. The Talent Incubator features
            dedicated showcase events, including music recitals, tech project
            exhibitions, martial arts demonstrations, and academic bowls. For
            our 6-week Summer Camp, the program culminates in a grand finale
            spectacle where every child presents the skills they have acquired
            in front of their parents and peers, building lifelong confidence
            and a deep sense of belonging.
          </p>
        </div>
      </section>

      {/* 5. The Ultimate Goal */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            The Ultimate Goal: Future-Proofing Your Child
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We connect childhood exploration directly to adult success. The
            ultimate goal of the YAP Talent Incubator is to provide you with the
            data and insights needed to confidently advise your child&apos;s
            future academic pathways (secondary school and university) and
            career choices. We are building the foundation for a sustainable,
            lucrative, and fulfilling life where your child does exactly what
            they are naturally gifted at.
          </p>
        </div>
      </section>

      {/* CTA (every page needs a route to /admissions) */}
      <section className="bg-gold py-16 px-4 text-center">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">
          Ready to discover your child&apos;s talent?
        </h2>
        <a
          href="/admissions"
          className="inline-block bg-navy text-white font-semibold rounded-lg px-8 py-3 hover:opacity-90 transition"
        >
          Book a Free Diagnostic Session
        </a>
      </section>
    </main>
  );
}
