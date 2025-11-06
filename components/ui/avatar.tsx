import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Avatar({
  src,
  alt,
  name,
  className,
  size = 40,
}: {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
  size?: number;
}) {
  const initials = name?.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className={cn('inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-neutral-700', className)}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt || name || 'Avatar'} width={size} height={size} />
      ) : (
        <span className="text-sm font-medium">{initials || 'NA'}</span>
      )}
    </div>
  );
}
