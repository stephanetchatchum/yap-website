"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5f2rlpyGe6hI3Yb1jeOcnQ6kdgQ2iIk30f1_vjf-nyQxS_3kyUw6_ct1iFvNQvDbf/exec";

export default function Admissions() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    parentName: "",
    whatsapp: "",
    gradeLevel: "",
    subjects: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ formType: "admissions", ...formData }),
      });
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again, or contact us directly on WhatsApp.");
      setSubmitting(false);
    }
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
            <label className="block text-sm font-semibold text-navy mb-1">Parent Name</label>
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
            <label className="block text-sm font-semibold text-navy mb-1">WhatsApp Number</label>
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
            <label className="block text-sm font-semibold text-navy mb-1">Student Age / Grade Level</label>
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
            <label className="block text-sm font-semibold text-navy mb-1">Subjects Needed</label>
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

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-navy font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}