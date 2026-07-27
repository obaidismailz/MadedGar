"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage if available
  useEffect(() => {
    const stored = localStorage.getItem("madedgar_lang") as Language;
    if (stored === "en" || stored === "ur") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("madedgar_lang", lang);
    
    // Set HTML lang and dir attributes for correct browser rendering
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      html.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
