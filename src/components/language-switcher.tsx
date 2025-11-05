"use client";

import { Languages } from 'lucide-react';
import { useLanguage } from '../lib/hooks/use-language';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const { setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('tr')}>
          Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ar')}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
