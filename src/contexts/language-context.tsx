
"use client";

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations } from '../lib/i18n';

type Language = 'en' | 'tr' | 'ar';
type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'tr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };
  
  const t = useCallback((key: TranslationKey): string => {
    return translations[key]?.[language] ?? translations[key]['en'];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
