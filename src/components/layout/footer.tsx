
"use client";

import { Twitter, Github, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/hooks/use-language';
import { Logo } from '../logo';
import Link from 'next/link';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about-us', label: t('navAbout') },
    { href: '/services', label: t('navServices') },
    { href: '/faq', label: t('navFaq') },
    { href: '/contact', label: t('navContact') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Logo className="text-secondary" />
              <span className="text-xl font-bold font-headline">
                {language === 'ar' ? t('appName') : 'BAZ CONSULTING'}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t('footerDescription')}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-secondary">{t('footerQuickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-secondary">{t('footerContactUs')}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary mt-1" />
                <span className="text-primary-foreground/80">{t('footerAddress')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href={`mailto:${t('footerEmail')}`} className="text-primary-foreground/80 hover:text-secondary">{t('footerEmail')}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href={`tel:${t('footerPhone')}`} className="text-primary-foreground/80 hover:text-secondary">{t('footerPhone')}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-secondary">{t('footerBusinessHours')}</h3>
            <p className="mt-4 text-sm text-primary-foreground/80">{t('footerHours')}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} {language === 'ar' ? t('appName') : 'BAZ CONSULTING'}. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
}
