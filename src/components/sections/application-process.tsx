
"use client";

import { useLanguage } from '../../lib/hooks/use-language';
import { FilePlus, Search, CircleCheck, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function ApplicationProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      step: 1,
      icon: <FilePlus className="h-10 w-10 text-primary" />,
      title: "Document Submission",
      description: "Gather and submit all required personal and financial documents through the official portal."
    },
    {
      step: 2,
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Application Review",
      description: "Authorities will review your application and documents for compliance and eligibility."
    },
    {
      step: 3,
      icon: <CircleCheck className="h-10 w-10 text-primary" />,
      title: "Approval & Payment",
      description: "Once approved, you will be notified to pay the required residency fees."
    },
    {
      step: 4,
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Residency Issuance",
      description: "Your Premium Residency ID (Iqama) is issued, granting you and your family rights."
    }
  ];

  return (
    <section id="application-process" className="bg-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
            Application Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A streamlined process to your new life in Saudi Arabia.
          </p>
        </div>
        <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"></div>
            <div className="grid gap-12 md:grid-cols-1">
                {steps.map((step, index) => (
                    <div key={step.step} className="md:grid md:grid-cols-2 items-center gap-8 relative">
                        <div className={`md:flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-2'}`}>
                            <Card className="max-w-md shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center font-bold text-2xl text-primary">{step.step}</div>
                                        <div>
                                            <CardTitle className="font-headline text-2xl text-primary">{step.title}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>

                         <div className={`flex items-center justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                            <div className="hidden md:flex items-center justify-center w-24 h-24 bg-background rounded-full border-4 border-primary shadow-lg z-10">
                                {step.icon}
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
