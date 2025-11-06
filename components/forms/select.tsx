import React from 'react';
import { cn } from '@/lib/utils';

export default function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'w-full rounded-lg border-2 border-neutral-300 px-4 py-3 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
