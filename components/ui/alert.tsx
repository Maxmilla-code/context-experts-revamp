import React from 'react';
import { cn } from '@/lib/utils';

export default function Alert({
  title,
  children,
  variant = 'info',
  className,
}: {
  title?: string;
  children?: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}) {
  const map = {
    info: 'bg-info-light border-info',
    success: 'bg-success-light border-success',
    warning: 'bg-warning-light border-warning',
    error: 'bg-error-light border-error',
  } as const;

  return (
    <div className={cn('rounded-lg border-l-4 p-4 text-sm', map[variant], className)}>
      {title && <div className="font-medium text-neutral-900">{title}</div>}
      {children && <div className="mt-1 text-neutral-700">{children}</div>}
    </div>
  );
}
