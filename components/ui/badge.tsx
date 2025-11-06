import React from 'react';
import { cn } from '@/lib/utils';

type Variants = 'default' | 'success' | 'warning' | 'error';

export default function Badge({
  children,
  variant = 'default',
  className,
}: { children: React.ReactNode; variant?: Variants; className?: string }) {
  const styles: Record<Variants, string> = {
    default: 'bg-neutral-100 text-neutral-700',
    success: 'bg-success-light text-success',
    warning: 'bg-warning-light text-warning',
    error: 'bg-error-light text-error',
  };
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium', styles[variant], className)}>
      {children}
    </span>
  );
}
