
"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { useLanguage } from '../../lib/hooks/use-language';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { LanguageSwitcher } from '../language-switcher';
import { Logo } from '../logo';

export function Header() {
  const { t, language } = useLanguage();

  const navItems = [
    { href: '/', label: t('navHome') },
    { href: '/about-us', label: t('navAbout') },
    { href: '/services', label: t('navServices') },
    { href: '/faq', label: t('navFaq') },
    { href: '/contact', label: t('navContact') },
  ];

  return (
    <header id="home" className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold sm:inline-block font-headline text-lg text-primary">
              {language === 'ar' ? t('appName') : 'BAZ CONSULTING'}
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm ml-6">
          {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-bold text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                     <Logo />
                     <span className="font-bold font-headline text-lg text-primary">{language === 'ar' ? t('appName') : 'BAZ CONSULTING'}</span>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 text-left">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                        <Link
                            href={item.href}
                            className="text-lg font-bold text-foreground/80 transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
