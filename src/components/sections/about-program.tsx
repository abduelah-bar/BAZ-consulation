"use client";
import Image from "next/image";
import { useLanguage } from "../../lib/hooks/use-language";
import { PlaceHolderImages } from "../../lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AboutProgram() {
  const { t } = useLanguage();
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-program');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold font-headline text-primary">
                  {t('aboutProgramTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('aboutProgramDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
