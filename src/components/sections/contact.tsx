"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';

import { useLanguage } from '../../lib/hooks/use-language';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useToast } from '../../hooks/use-toast';
import { submitContactForm } from '../../app/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string()
      .regex(/^\+?[0-9]+$/, { message: "Only numbers are allowed (you can start with +)." })
      .min(8, { message: "Phone number must be at least 8 digits." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: t('formSuccess'),
          description: t('formSuccessDesc'),
        });
        form.reset();
      } else {
        toast({
          title: t('formError'),
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <section id="contact" className="bg-muted">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold font-headline text-primary animate-fade-in-up">
              {t('contactTitle')}
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
              {t('contactSubtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in-up animation-delay-400">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('formName')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('formEmail')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('formMessage')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('messagePlaceholder')}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} size="lg" className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {t('formSubmit')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}