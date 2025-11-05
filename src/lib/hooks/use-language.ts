"use client";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/language-context';
import { translations } from '../i18n';

export type TranslationKey = keyof typeof translations;

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
