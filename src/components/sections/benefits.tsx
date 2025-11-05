"use client";

import { Users, Home, Briefcase, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { useLanguage } from '../../lib/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    { icon: <Users />, title: t('benefit1Title'), description: t('benefit1Desc') },
    { icon: <Home />, title: t('benefit2Title'), description: t('benefit2Desc') },
    { icon: <Briefcase />, title: t('benefit3Title'), description: t('benefit3Desc') },
    { icon: <ShieldCheck />, title: t('benefit4Title'), description: t('benefit4Desc') },
    { icon: <Globe />, title: t('benefit5Title'), description: t('benefit5Desc') },
    { icon: <Building2 />, title: t('benefit6Title'), description: t('benefit6Desc') },
  ];

  return (
    <section id="benefits" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
            {t('benefitsTitle')}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              <Card className="h-full text-left border-0 bg-muted rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 !p-0">
                  <div className="p-3 bg-secondary rounded-lg">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="!p-0 mt-4">
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
