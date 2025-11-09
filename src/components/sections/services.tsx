"use client";

import { useLanguage } from '../../lib/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Briefcase, Landmark, PieChart, LineChart, Users, Home, ShieldCheck, Globe, Building2  } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'business-setup',
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t('serviceBusinessSetupTitle'),
      description: t('serviceBusinessSetupDesc'),
      href: '/services/business-setup',
    },
    {
      id: 'legal-advisory',
      icon: <Landmark className="h-8 w-8 text-primary" />,
      title: t('serviceLegalTitle'),
      description: t('serviceLegalDesc'),
      href: '/services/legal-advisory',
    },
    {
      id: 'market-analysis',
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: t('serviceMarketAnalysisTitle'),
      description: t('serviceMarketAnalysisDesc'),
      href: '/services/market-analysis',
    },
    {
      id: 'investment-opportunities',
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: t('serviceInvestmentOpportunitiesTitle'),
      description: t('serviceInvestmentOpportunitiesDesc'),
      href: '/services/investment-opportunities',
    },
  ];

  return (
    <section id="services" className="bg-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
            {t('servicesTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('servicesSubtitle')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              <Card className="h-full text-left bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <CardHeader className="!p-0">
                  <div className="p-4 bg-secondary rounded-lg w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="!p-0 mt-4 flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <div className="mt-6">
                    <Button asChild variant="link" className="p-0 font-bold">
                        <Link href={service.href}>
                            {t('learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
