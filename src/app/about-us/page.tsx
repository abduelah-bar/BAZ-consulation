
"use client";

import Image from 'next/image';
import { useLanguage } from '../../lib/hooks/use-language';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Building, Goal } from 'lucide-react';

export default function AboutUsPage() {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');
  const companyImage = PlaceHolderImages.find(p => p.id === 'our-company');
  const visionImage = PlaceHolderImages.find(p => p.id === 'our-vision');

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
              {t('aboutUsTitle')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
              {t('aboutUsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section id="our-company" className="bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold font-headline text-primary">
                    {t('ourCompanyTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('ourCompanyDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
             <div className="animate-fade-in-up animation-delay-200">
                {companyImage && (
                  <Image
                      src={companyImage.imageUrl}
                      alt={companyImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl"
                      data-ai-hint={companyImage.imageHint}
                  />
                )}
            </div>
          </div>
        </div>
      </section>
      
      <section id="our-vision" className="bg-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="animate-fade-in-up order-last md:order-first">
                {visionImage && (
                  <Image
                      src={visionImage.imageUrl}
                      alt={visionImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl"
                      data-ai-hint={visionImage.imageHint}
                  />
                )}
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader>
                  <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                    <Goal className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold font-headline text-primary">
                    {t('ourVisionTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('ourVisionDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
