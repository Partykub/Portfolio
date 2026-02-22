"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '@/lib/i18n/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language from localStorage on mount (client-side only)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'th')) {
      setLanguageState(saved);
    }
  }, []);

  // Save language to localStorage whenever it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
