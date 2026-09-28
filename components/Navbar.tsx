"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const pathname = usePathname();

    function linkClass(path: string) {
        return pathname === path
        ? "text-gold font-semibold"
        : "hover:text-gold";
    }

    return (
        <header className="sticky top-0 z-50 bg-navy text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                
                {/* Logo */}
                <a href="/" className="flex items-center gap-1">
                    <Image
                        src="/images/logo-icon-white.png"
                        alt="Yigil Academy of Potentials"
                        width={40}
                        height={30}
                        className="h-8 w-auto"
                        priority
                    />
                    <span className="font-heading font-bold text-2xl text-white">AP</span>
                </a>

                {/* Nav links, desktop only */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="/" className={linkClass("/")}>{t.nav.home}</a>
                    <a href="/academics" className={linkClass("/academics")}>{t.nav.academics}</a>
                    <a href="/incubator" className={linkClass("/incubator")}>{t.nav.incubator}</a>
                    <a href="/pricing" className={linkClass("/pricing")}>{t.nav.pricing}</a>
                    <a href="/about" className={linkClass("/about")}>{t.nav.about}</a>
                </nav>

                {/* Right side: language toggle + CTA, desktop only */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-sm border border-white rounded px-2 py-1"
                    >
                        {language === "en" ? "FR" : "EN"}
                    </button>
                    <a
                        href="/admissions"
                        className="bg-gold text-navy font-semibold rounded-lg px-4 py-2 text-sm hover:opacity-90"
                    >
                        {t.nav.bookAssessment}
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
                    <a href="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>{t.nav.home}</a>
                    <a href="/academics" className={linkClass("/academics")} onClick={() => setMenuOpen(false)}>{t.nav.academics}</a>
                    <a href="/incubator" className={linkClass("/incubator")} onClick={() => setMenuOpen(false)}>{t.nav.incubator}</a>
                    <a href="/pricing" className={linkClass("/pricing")} onClick={() => setMenuOpen(false)}>{t.nav.pricing}</a>
                    <a href="/about" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
                    <button
                        onClick={toggleLanguage}
                        className="text-sm border border-white rounded px-2 py-1 w-fit"
                    >
                        {language === "en" ? "FR" : "EN"}
                    </button>
                <a
                    href="/admissions"
                    className="bg-gold text-navy font-semibold rounded-lg px-4 py-2 text-sm hover:opacity-90 w-fit"
                    onClick={() => setMenuOpen(false)}
                >
                    {t.nav.bookAssessment}
                </a>
                </nav>
            )}
        </header>
    );
}