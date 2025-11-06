'use client';
import Link from 'next/link';
import { useState } from 'react';
import { mainNav } from '@/config/navigation';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="p-2 rounded hover:bg-neutral-100">☰</button>
      {open && (
        <div className="absolute left-0 right-0 mt-2 border border-neutral-200 bg-white shadow-md">
          <nav className="flex flex-col p-2">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 rounded hover:bg-neutral-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
