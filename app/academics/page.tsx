import Image from "next/image";

export default function Academics() {
  const curricula = [
    "Cambridge International",
    "International Baccalaureate (IB)",
    "Rwandan National Curriculum",
    "France Education International",
  ];

  const primarySubjects = [
    "Comprehensive Academic Support across all subjects",
    "Building unbreakable study habits and reading comprehension",
    "Establishing a genuine love for learning during critical developmental years",
  ];

  const secondarySubjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "General Sciences",
    "Computer Science & Programming",
  ];

  return (
    <main>
      <section className="bg-navy text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">
            Academic Excellence Programs
          </h1>
          <p className="text-gray-200">
            Deep-focus mentoring tailored to global standards.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy text-center mb-8">
            Curricula We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-navy/20">
            {curricula.map((item) => (
              <div
                key={item}
                className="border-r border-b border-navy/20 p-6 text-center text-navy font-semibold text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">
            Primary Foundation Level
          </h2>
          <ul className="space-y-3">
            {primarySubjects.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-3">
            Secondary Mastery Level
          </h2>
          <p className="text-gray-600 mb-6">
            Select up to three (3) core disciplines for deep-focus mentoring.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {secondarySubjects.map((subject) => (
              <span
                key={subject}
                className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-sm"
              >
                {subject}
              </span>
            ))}
          </div>

          <div className="bg-gray-50 border border-navy/10 rounded-lg p-6">
            <h3 className="font-heading font-bold text-navy mb-2">
              Bilingual Excellence
            </h3>
            <p className="text-gray-700 text-sm">
              Specialized language acquisition and literature analysis in both
              French and English, from Beginner to Advanced levels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gold py-16 px-4 text-center">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">
          Ready to find the right fit for your child?
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