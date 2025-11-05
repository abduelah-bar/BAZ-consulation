
"use client";

import { useLanguage } from '../../lib/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { CheckCircle } from 'lucide-react';

export default function ResidencyTypes() {
  const { t } = useLanguage();

  const types = [
    { title: 'SP1 Residency', description: 'One-year renewable residency.', cost: 'SAR 100,000' },
    { title: 'SP2 Residency', description: 'Permanent residency after meeting conditions.', cost: 'SAR 800,000' }
  ];

  return (
    <section id="residency-types" className="bg-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
            Types of Premium Residency
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Choose the residency plan that best suits your long-term goals in Saudi Arabia.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {types.map((type, index) => (
             <div key={type.title} className="animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              <Card className="h-full text-left bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-4xl font-bold text-primary mb-4">{type.cost}<span className="text-lg font-normal text-muted-foreground">/per year</span></p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Live and work in KSA</li>
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Own property</li>
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Sponsor family</li>
                    </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
