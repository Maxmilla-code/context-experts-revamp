import React from 'react';
import { cn } from '@/lib/utils';

export default function Radio({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="radio"
      className={cn(
        'h-4 w-4 border-neutral-300 text-primary-600 focus:ring-primary-500',
        className,
      )}
      {...props}
    />
  );
}
