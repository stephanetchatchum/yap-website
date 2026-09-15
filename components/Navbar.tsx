"use client";

import { useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-navy text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                
                {/* Logo */}
                <div className="font-bold text-lg">
                YAP
                </div>

                {/* Nav links, desktop only */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="/" className="hover:text-gold">Home</a>
                <a href="/academics" className="hover:text-gold">Academic Programs</a>
                <a href="/incubator" className="hover:text-gold">Talent Incubator</a>
                <a href="/pricing" className="hover:text-gold">Pricing & Memberships</a>
                <a href="/about" className="hover:text-gold">About Us</a>
                </nav>

                {/* Right side: language toggle + CTA, desktop only */}
                <div className="hidden md:flex items-center gap-4">
                <button className="text-sm border border-white rounded px-2 py-1">
                    EN / FR
                </button>
                <a
                    href="/admissions"
                    className="bg-gold text-navy font-semibold rounded-lg px-4 py-2 text-sm hover:opacity-90"
                >
                    Book Assessment
                </a>
                </div>

                {/* Hamburger button, mobile only */}
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
                >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                </button>

            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-4 pb-6 text-sm">
                <a href="/" className="hover:text-gold" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/academics" className="hover:text-gold" onClick={() => setMenuOpen(false)}>Academic Programs</a>
                <a href="/incubator" className="hover:text-gold" onClick={() => setMenuOpen(false)}>Talent Incubator</a>
                <a href="/pricing" className="hover:text-gold" onClick={() => setMenuOpen(false)}>Pricing & Memberships</a>
                <a href="/about" className="hover:text-gold" onClick={() => setMenuOpen(false)}>About Us</a>
                <button className="text-sm border border-white rounded px-2 py-1 w-fit">
                    EN / FR
                </button>
                <a
                    href="/admissions"
                    className="bg-gold text-navy font-semibold rounded-lg px-4 py-2 text-sm hover:opacity-90 w-fit"
                    onClick={() => setMenuOpen(false)}
                >
                    Book Assessment
                </a>
                </nav>
            )}
        </header>
    );
}