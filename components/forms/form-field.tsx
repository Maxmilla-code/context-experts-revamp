import React from 'react';
import { cn } from '@/lib/utils';

export default function FormField({
  label,
  error,
  hint,
  children,
  className,
}: {
  label?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full', className)}>
      {label && <label className="mb-1 block text-sm font-medium text-neutral-700">{label}</label>}
      {children}
      {error ? (
        <p className="mt-1 text-sm text-error">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-sm text-neutral-500">{hint}</p>
      ) : null}
    </div>
  );
}
