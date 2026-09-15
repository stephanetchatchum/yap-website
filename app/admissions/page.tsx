"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Admissions() {
    const [formData, setFormData] = useState({
        parentName: "",
        whatsapp: "",
        gradeLevel: "",
        subjects: "",
    });

    const router = useRouter();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        router.push("/thank-you");
    }

    return (
        <main className="py-20 px-4">
        <div className="max-w-xl mx-auto">
            <h1 className="font-heading text-3xl font-bold text-navy text-center mb-2">
            Book an Assessment
            </h1>
            <p className="text-gray-600 text-center mb-10">
            Tell us about your child, and our Admissions Director will reach out shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Parent Name
                </label>
                <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                WhatsApp Number
                </label>
                <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Student Age / Grade Level
                </label>
                <input
                type="text"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Subjects Needed
                </label>
                <input
                type="text"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="e.g. Math, French, Piano, Chess"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gold text-navy font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition"
            >
                Submit
            </button>
            </form>
        </div>
        </main>
    );
}