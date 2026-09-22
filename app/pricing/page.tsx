export default function Pricing() {
  const primaryTiers = [
    { tier: "The Spark (Ad-Hoc / Exam Prep)", freq: "Per session", regular: "20,000 RWF", promo: "18,000 RWF" },
    { tier: "The Momentum (2x / week)", freq: "Per month", regular: "150,000 RWF", promo: "135,000 RWF" },
    { tier: "The Mastery (3x / week)", freq: "Per month", regular: "210,000 RWF", promo: "189,000 RWF" },
  ];

  const secondaryTiers = [
    { tier: "The Spark (Ad-Hoc / Exam Prep)", freq: "Per session", regular: "25,000 RWF", promo: "22,500 RWF" },
    { tier: "The Momentum (2x / week)", freq: "Per month", regular: "180,000 RWF", promo: "162,000 RWF" },
    { tier: "The Mastery (3x / week)", freq: "Per month", regular: "250,000 RWF", promo: "225,000 RWF" },
  ];

  return (
    <main>
      <section className="bg-navy text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">
            Pricing & Memberships
          </h1>
          <p className="text-gray-200">
            Lock in a 10% discount on all tuition rates when you enroll and pay
            or pre-pay before{" "}
            <span className="text-gold font-bold">October 15th, 2026</span>.
          </p>
        </div>
      </section>

      {/* Primary Level Table */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-2">
            Primary Level
          </h2>
          <p className="text-gray-500 text-sm mb-6">90-Minute Deep Focus Sessions</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-navy">
                <th className="py-3 text-navy">Tier</th>
                <th className="py-3 text-navy">Regular</th>
                <th className="py-3 text-navy">Promo Price</th>
              </tr>
            </thead>
            <tbody>
              {primaryTiers.map((row) => (
                <tr key={row.tier} className="border-b border-gray-200">
                  <td className="py-4 text-gray-700">
                    {row.tier}
                    <span className="block text-xs text-gray-400">{row.freq}</span>
                  </td>
                  <td className="py-4 text-gray-400 line-through">{row.regular}</td>
                  <td className="py-4 text-navy font-bold">{row.promo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-4">
            <strong className="italic">
              To support their transition, 1st-year secondary students benefit
              from the extended 2-hour format while maintaining primary level
              tuition rates.
            </strong>
            <span className="text-gold font-bold">*</span>
          </p>
        </div>
      </section>

      {/* Secondary Level Table */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-2">
            Secondary Level
          </h2>
          <p className="text-gray-500 text-sm mb-6">2-Hour Deep Focus Sessions</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-navy">
                <th className="py-3 text-navy">Tier</th>
                <th className="py-3 text-navy">Regular</th>
                <th className="py-3 text-navy">Promo Price</th>
              </tr>
            </thead>
            <tbody>
              {secondaryTiers.map((row) => (
                <tr key={row.tier} className="border-b border-gray-200">
                  <td className="py-4 text-gray-700">
                    {row.tier}
                    <span className="block text-xs text-gray-400">{row.freq}</span>
                  </td>
                  <td className="py-4 text-gray-400 line-through">{row.regular}</td>
                  <td className="py-4 text-navy font-bold">{row.promo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tier 3, now BEFORE Loyalty Programs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-navy mb-2">
            Tier 3: Group Activities
          </h3>
          <p className="text-gray-700">
            Summer Camps and Seasonal Workshops.
          </p>
        </div>
      </section>

      {/* Loyalty Programs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8">
            Loyalty Programs
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">
                The YAP Family Plan
              </h3>
              <p className="text-gray-700">
                10% discount on your 2nd child&apos;s tuition, 12% on your 3rd, and 15% on any subsequent children.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">
                The YAP Shared Mentorship Plan
              </h3>
              <p className="text-gray-700">
                For siblings in the same grade sharing a tutor: pay full tuition
                for the first child and receive 50% off for every additional
                child joining the exact same session.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">
                The Ambassador Reward
              </h3>
              <p className="text-gray-700">
                A one-time 10% discount on your monthly rate for every new student you refer who enrolls. Refer 10 students, and your child&apos;s tuition is free for a month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-16 px-4 text-center">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">
          Lock in your rate before October 15th, 2026.
        </h2>
        <a
          href="/admissions"
          className="inline-block bg-navy text-white font-semibold rounded-lg px-8 py-3 hover:opacity-90 transition"
        >
          Book a Free Assessment
        </a>
      </section>
    </main>
  );
}