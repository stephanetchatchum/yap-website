"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "./translations";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}