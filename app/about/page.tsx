export default function About() {
  const reasons = [
    "Institutional Accountability: strict quality control, with seamless tutor replacement if the fit isn't right.",
    "Ultimate Flexibility: flexible scheduling, makeup sessions, and adaptable timetables.",
    "Vetted Experts: every tutor undergoes rigorous academic vetting and background checks.",
    "Progress Transparency: monthly performance updates and termly academic strategy reviews.",
  ];

  return (
    <main>
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

      {/* The Meaning of Yigil, moved here from Home */}
      <section
        className="bg-white py-20 px-4 bg-repeat"
        style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: "300px" }}
        >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-navy">
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
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">
            Why Choose Yigil Academy?
          </h2>
          <p className="text-gray-700 mb-8">
            When you enroll your child, you are not hiring an individual tutor; you are partnering with an institution.
          </p>
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