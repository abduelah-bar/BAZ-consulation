
"use client";

import ServicePage from "../../../components/service-page";
import Image from 'next/image';
import { PlaceHolderImages } from '../../../lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Building, FileText, Briefcase } from 'lucide-react';
import { useLanguage } from "../../../lib/hooks/use-language";

export default function BusinessSetupPage() {
  const { t } = useLanguage();
  const contentImage = PlaceHolderImages.find(p => p.id === 'service-business-setup');
  
  const processSteps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t("bsStep1Title"),
      description: t("bsStep1Desc")
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t("bsStep2Title"),
      description: t("bsStep2Desc")
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t("bsStep3Title"),
      description: t("bsStep3Desc")
    },
  ];

  return (
    <ServicePage 
      heroImageId="service-page-hero"
      titleKey="serviceBusinessSetupTitle"
      subtitleKey="serviceBusinessSetupDesc"
    >
        <section id="service-details" className="bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold font-headline text-primary mb-4">
                    {t('bsDetailTitle')}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {t('bsDetailDesc')}
                  </p>
              </div>
              <div>
                {contentImage && (
                    <Image
                        src={contentImage.imageUrl}
                        alt={contentImage.description}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint={contentImage.imageHint}
                    />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-muted">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-headline text-primary">{t('bsProcessTitle')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('bsProcessSubtitle')}
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {processSteps.map((step, index) => (
                        <div key={index}>
                            <Card className="h-full text-center bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                                <CardHeader className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-secondary rounded-full">
                                    {step.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-primary">
                                    {step.title}
                                </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </ServicePage>
  );
}
