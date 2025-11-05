
import Image from 'next/image';
import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-9 h-9", className)}>
      <Image
        src="/images/logo.png"
        alt="BAZ CONSULTING Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
