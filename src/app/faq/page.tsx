
"use client";

import Image from 'next/image';
import { useLanguage } from '../../lib/hooks/use-language';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

export default function FaqPage() {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'faq-hero');

  const faqItems = {
    general: [
      { q: 'faqQ1', a: 'faqA1' },
      { q: 'faqQ2', a: 'faqA2' },
    ],
    eligibility: [
      { q: 'faqQ3', a: 'faqA3' },
      { q: 'faqQ4', a: 'faqA4' },
    ],
    benefits: [
      { q: 'faqQ5', a: 'faqA5' },
      { q: 'faqQ6', a: 'faqA6' },
      { q: 'faqQ7', a: 'faqA7' },
    ],
    business: [
      { q: 'faqQ8', a: 'faqA8' },
    ]
  }

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
              {t('faqPageTitle')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
              {t('faqPageSubtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-background">
        <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
                <div>
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">{t('faqCategory1')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.general.map(item => (
                            <AccordionItem value={item.q} key={item.q}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{t(item.q as any)}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                {t(item.a as any)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div>
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">{t('faqCategory2')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.eligibility.map(item => (
                            <AccordionItem value={item.q} key={item.q}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{t(item.q as any)}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                {t(item.a as any)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div>
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">{t('faqCategory3')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.benefits.map(item => (
                            <AccordionItem value={item.q} key={item.q}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{t(item.q as any)}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                {t(item.a as any)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                 <div>
                    <h2 className="text-3xl font-bold font-headline text-primary mb-6">{t('faqCategory4')}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.business.map(item => (
                            <AccordionItem value={item.q} key={item.q}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{t(item.q as any)}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                {t(item.a as any)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
