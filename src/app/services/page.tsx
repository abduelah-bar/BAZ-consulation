
"use client";

import Image from 'next/image';
import { useLanguage } from '../../lib/hooks/use-language';
import { PlaceHolderImages } from '../../lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Briefcase, Landmark, PieChart, LineChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function ServicesPage() {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'services-hero');

  const services = [
    {
      id: 'business-setup',
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: t('serviceBusinessSetupTitle'),
      description: t('serviceBusinessSetupDesc'),
      image: PlaceHolderImages.find(p => p.id === 'service-business-setup'),
      href: '/services/business-setup',
    },
    {
      id: 'legal-advisory',
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: t('serviceLegalTitle'),
      description: t('serviceLegalDesc'),
      image: PlaceHolderImages.find(p => p.id === 'service-legal'),
      href: '/services/legal-advisory',
    },
    {
      id: 'market-analysis',
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: t('serviceMarketAnalysisTitle'),
      description: t('serviceMarketAnalysisDesc'),
      image: PlaceHolderImages.find(p => p.id === 'service-market-analysis'),
      href: '/services/market-analysis',
    },
    {
      id: 'investment-opportunities',
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: t('serviceInvestmentOpportunitiesTitle'),
      description: t('serviceInvestmentOpportunitiesDesc'),
      image: PlaceHolderImages.find(p => p.id === 'service-investment-opportunities'),
      href: '/services/investment-opportunities',
    },
  ];

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
              {t('servicesPageTitle')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
              {t('servicesPageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`animate-fade-in-up ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-3xl font-bold font-headline text-primary">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button asChild>
                        <Link href={service.href}>
                          {t('learnMore')}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={`animate-fade-in-up animation-delay-200 ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                    {service.image && (
                      <Image
                          src={service.image.imageUrl}
                          alt={service.image.description}
                          width={800}
                          height={600}
                          className="rounded-lg shadow-xl"
                          data-ai-hint={service.image.imageHint}
                      />
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
