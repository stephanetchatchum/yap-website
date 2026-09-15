"use client";

import { useState } from "react";

export default function Careers() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subjects: "",
    });
    const [cvFile, setCvFile] = useState<File | null>(null);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
        setCvFile(e.target.files[0]);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Careers form submitted:", formData, cvFile);
    }

    return (
        <main className="py-20 px-4">
        <div className="max-w-xl mx-auto">
            <h1 className="font-heading text-3xl font-bold text-navy text-center mb-2">
            Join Our Team
            </h1>
            <p className="text-gray-600 text-center mb-10">
            Submit your CV and we&apos;ll be in touch if there&apos;s a fit for your expertise.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Full Name
                </label>
                <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Email
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Phone / WhatsApp
                </label>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Subjects / Disciplines You Teach
                </label>
                <input
                type="text"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="e.g. Math, Piano, Chess"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                Upload CV (PDF)
                </label>
                <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-navy file:text-white file:font-semibold hover:file:opacity-90"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gold text-navy font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition"
            >
                Submit Application
            </button>
            </form>
        </div>
        </main>
    );
}