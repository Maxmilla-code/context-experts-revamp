import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full px-4 py-3 border-2 border-neutral-300 rounded-lg transition-all duration-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none',
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
