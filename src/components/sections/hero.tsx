"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../lib/hooks/use-language';
import { Button } from '../ui/button';
import { PlaceHolderImages } from '../../lib/placeholder-images';

export default function Hero() {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[700px] w-full flex items-center justify-center text-center text-white p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
           <h2 className="text-lg font-semibold text-secondary sm:text-xl tracking-widest uppercase">
            {t('heroPreTitle')}
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            {t('heroTitle')}
          </h1>
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/90 md:text-xl">
            {t('heroSubtitle')}
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              {t('heroCta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link href="/about-us">
              {t('learnMore')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
