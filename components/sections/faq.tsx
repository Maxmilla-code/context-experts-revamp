'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/container';

export default function FAQ() {
  const items = [
    { q: 'How long does a project take?', a: 'Typical timelines range from 2-8 weeks depending on scope.' },
    { q: 'Do you offer support?', a: 'Yes, we provide flexible maintenance and support plans.' },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-semibold text-neutral-900">FAQ</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
          {items.map((item, idx) => (
            <div key={idx}>
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-neutral-50"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium text-neutral-900">{item.q}</span>
                <span className="text-neutral-400">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && <div className="px-6 pb-4 text-neutral-600">{item.a}</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
