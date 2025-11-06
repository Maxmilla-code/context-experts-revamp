import { cn } from '@/lib/utils';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
};

export default function Container({ className, children, noPadding }: ContainerProps) {
  return <div className={cn(noPadding ? '' : 'container-px', 'mx-auto w-full', className)}>{children}</div>;
}
