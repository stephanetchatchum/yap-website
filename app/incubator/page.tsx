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

        <section className="bg-white py-20 px-4">
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