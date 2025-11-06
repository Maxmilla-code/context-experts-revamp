import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = 'relative overflow-hidden transition-all duration-200 ease-out px-4 py-2 rounded-lg focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants: Record<Variant, string> = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-200',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-200',
    outline: 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-200',
    ghost: 'text-neutral-700 hover:bg-neutral-100',
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
