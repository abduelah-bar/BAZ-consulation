
"use client";

import ServicePage from "../../../components/service-page";
import Image from 'next/image';
import { PlaceHolderImages } from '../../../lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Landmark, ShieldCheck, FileSignature } from 'lucide-react';
import { useLanguage } from "../../../lib/hooks/use-language";

export default function LegalAdvisoryPage() {
  const { t } = useLanguage();
  const contentImage = PlaceHolderImages.find(p => p.id === 'service-legal');
  
  const advisoryAreas = [
    {
      icon: <Landmark className="h-8 w-8 text-primary" />,
      title: t("laArea1Title"),
      description: t("laArea1Desc")
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: t("laArea2Title"),
      description: t("laArea2Desc")
    },
    {
      icon: <FileSignature className="h-8 w-8 text-primary" />,
      title: t("laArea3Title"),
      description: t("laArea3Desc")
    },
  ];

  return (
    <ServicePage 
      heroImageId="service-page-hero"
      titleKey="serviceLegalTitle"
      subtitleKey="serviceLegalDesc"
    >
        <section id="service-details" className="bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold font-headline text-primary mb-4">
                    {t('laDetailTitle')}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {t('laDetailDesc')}
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

        <section id="advisory-areas" className="bg-muted">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-headline text-primary">{t('laAdvisoryTitle')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('laAdvisorySubtitle')}
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {advisoryAreas.map((area, index) => (
                        <div key={index}>
                            <Card className="h-full text-center bg-background rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                                <CardHeader className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-secondary rounded-full">
                                    {area.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-primary">
                                    {area.title}
                                </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground">{area.description}</p>
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
