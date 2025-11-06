import { cn } from '@/lib/utils';

export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('container-px mx-auto w-full', className)}>{children}</div>;
}
