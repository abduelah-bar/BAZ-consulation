
"use client";

import { useLanguage } from '../../lib/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText, ShieldCheck, Banknote, Calendar } from 'lucide-react';

export default function Eligibility() {
  const { t } = useLanguage();

  const criteria = [
    { icon: <FileText className="h-8 w-8 text-primary" />, title: "Valid Passport", description: "A passport with at least six months of validity." },
    { icon: <Calendar className="h-8 w-8 text-primary" />, title: "Age Requirement", description: "Applicant must be at least 21 years old." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Clean Criminal Record", description: "No history of criminal convictions." },
    { icon: <Banknote className="h-8 w-8 text-primary" />, title: "Financial Solvency", description: "Proof of sufficient financial resources." },
  ];

  return (
    <section id="eligibility" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
            Eligibility Criteria
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Ensure you meet the necessary requirements before starting your application.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item, index) => (
            <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              <Card className="h-full text-center bg-muted rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-secondary rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
