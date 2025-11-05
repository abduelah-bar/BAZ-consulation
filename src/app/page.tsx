
"use client";

import Hero from '../components/sections/hero';
import About from '../components/sections/about-program';
import Services from '../components/sections/services';
import Benefits from '../components/sections/benefits';
import Contact from '../components/sections/contact';
import { PlaceHolderImages } from '../lib/placeholder-images';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/hooks/use-language';

export default function Home() {
  const { t } = useLanguage();
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-section');

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold font-headline text-secondary">
                {t('ctaTitle')}
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                {t('ctaSubtitle')}
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">{t('ctaBenefit1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">{t('ctaBenefit2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="font-semibold">{t('ctaBenefit3')}</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
               {ctaImage && (
                  <Image
                      src={ctaImage.imageUrl}
                      alt={ctaImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl"
                      data-ai-hint={ctaImage.imageHint}
                  />
                )}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
