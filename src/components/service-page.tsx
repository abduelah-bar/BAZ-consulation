"use client";

import Image from 'next/image';
import { useLanguage, type TranslationKey } from '../lib/hooks/use-language';
import { PlaceHolderImages } from '../lib/placeholder-images';
import Contact from './sections/contact';
import { ReactNode } from 'react';

interface ServicePageProps {
    heroImageId: string;
    titleKey: TranslationKey;
    subtitleKey: TranslationKey;
    children: ReactNode;
}

export default function ServicePage({ heroImageId, titleKey, subtitleKey, children }: ServicePageProps) {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === heroImageId);

  return (
    <>
      <section className="relative h-[400px] w-full flex items-center justify-center text-center text-white p-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl">
              {t(titleKey)}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
              {t(subtitleKey)}
            </p>
          </div>
        </div>
      </section>
      
      <main>
        {children}
      </main>

      <Contact />
    </>
  );
}
