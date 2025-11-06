'use client';

import { useEffect, useMemo, useState } from 'react';
import Container from '@/components/layout/container';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

type Pack = { label: string };

type Service = {
  id: string;
  title: string;
  desc: string;
  packs: Pack[];
};

const services: Service[] = [
  {
    id: 'seo-articles',
    title: 'Creation of SEO Optimized Articles',
    desc: 'Keyword-focused content written for ranking and conversions.',
    packs: [
      { label: '10 Posts – Per day/4x Days/Month – 9500/=' },
      { label: '15 Posts – Per day/4x Days/Month – 13000/=' },
      { label: '20 Posts – Per day/4x Days/Month – 18000/=' },
      { label: '25 Posts – Per day/4x Days/Month – 23000/=' },
      { label: '30 Posts – Per day/4x Days/Month – 28000/=' },
      { label: '40 Posts – Per day/4x Days/Month – 36000/=' },
      { label: '50 Posts – Per day/4x Days/Month – 45000/=' },
    ],
  },
  {
    id: 'custom-videos',
    title: 'Custom Videos',
    desc: 'Tailored promotional videos, edited and branded for you.',
    packs: [
      { label: '3 Videos – Per day/4x Days/Month – 7500/=' },
      { label: '5 Videos – Per day/4x Days/Month – 12500/=' },
      { label: '7 Videos – Per day/4x Days/Month – 17500/=' },
      { label: '10 Videos – Per day/4x Days/Month – 25000/=' },
    ],
  },
  {
    id: 'animated-videos',
    title: 'Animated Video',
    desc: 'Explainers and motion graphics that engage audiences.',
    packs: [
      { label: '2 Videos – Per day/4x Days/Month – 7500/=' },
      { label: '4 Videos – Per day/4x Days/Month – 12500/=' },
      { label: '6 Videos – Per day/4x Days/Month – 17500/=' },
      { label: '8 Videos – Per day/4x Days/Month – 22500/=' },
      { label: '10 Videos – Per day/4x Days/Month – 27500/=' },
    ],
  },
  {
    id: 'product-reviews',
    title: 'Product Reviews',
    desc: 'Authentic reviews in multiple lengths and quantities.',
    packs: [
      { label: '10 Reviews (50 Words) – Per day/4x Days/Month – 5500/=' },
      { label: '15 Reviews (50 Words) – Per day/4x Days/Month – 7500/=' },
      { label: '20 Reviews (50 Words) – Per day/4x Days/Month – 9500/=' },
      { label: '25 Reviews (50 Words) – Per day/4x Days/Month – 11500/=' },
      { label: '30 Reviews (50 Words) – Per day/4x Days/Month – 13500/=' },
      { label: '10 Reviews (100 Words) – Per day/4x Days/Month – 6500/=' },
      { label: '15 Reviews (100 Words) – Per day/4x Days/Month – 8500/=' },
      { label: '20 Reviews (100 Words) – Per day/4x Days/Month – 10500/=' },
      { label: '25 Reviews (100 Words) – Per day/4x Days/Month – 12500/=' },
      { label: '30 Reviews (100 Words) – Per day/4x Days/Month – 14500/=' },
      { label: '10 Reviews (150 Words) – Per day/4x Days/Month – 7500/=' },
      { label: '15 Reviews (150 Words) – Per day/4x Days/Month – 9500/=' },
      { label: '20 Reviews (150 Words) – Per day/4x Days/Month – 11500/=' },
      { label: '25 Reviews (150 Words) – Per day/4x Days/Month – 13500/=' },
      { label: '30 Reviews (150 Words) – Per day/4x Days/Month – 15500/=' },
      { label: '10 Reviews (200 Words) – Per day/4x Days/Month – 8500/=' },
      { label: '15 Reviews (200 Words) – Per day/4x Days/Month – 10500/=' },
      { label: '20 Reviews (200 Words) – Per day/4x Days/Month – 12500/=' },
      { label: '25 Reviews (200 Words) – Per day/4x Days/Month – 14500/=' },
      { label: '30 Reviews (200 Words) – Per day/4x Days/Month – 16500/=' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    desc: 'From simple sites to full database-driven applications.',
    packs: [
      { label: 'Simple Interactive (No Database) – Negotiable – 30000/=' },
      { label: 'Complete Interactive (With Database) – Negotiable – 150000/=' },
    ],
  },
  {
    id: 'social-campaigns',
    title: 'Social Media Campaigns',
    desc: 'Platform-focused packages per month.',
    packs: [
      { label: 'Facebook – Per Month – 10000/=' },
      { label: 'TikTok – Per Month – 10000/=' },
      { label: 'Instagram – Per Month – 10000/=' },
    ],
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const applyFromHash = () => setActiveId(window.location.hash.replace('#', '') || null);
    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, []);

  const list = useMemo(() => {
    const score = (s: Service) => s.desc.length + s.title.length + s.packs.reduce((acc, p) => acc + p.label.length, 0);
    return [...services].sort((a, b) => score(a) - score(b));
  }, []);

  return (
    <section className="py-1.5">
      <Container noPadding>
        <h1 className="text-3xl font-bold text-neutral-900 px-4 sm:px-6 lg:px-8">Services & Packages</h1>
        <p className="mt-2 text-neutral-600 px-4 sm:px-6 lg:px-8"> Our services and their prices in KES.</p>

        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {list.map((s) => {
            const active = s.id === activeId;
            return (
              <div id={s.id} key={s.id}>
                <Card className={`${active ? 'bg-[#004AAD] text-white border-[#003a84]' : 'bg-white'} transition-colors` }>
                  <div className="p-6">
                    <div className="flex items-start justify-start gap-4">
                      <div>
                        <h2 className={`text-xl font-semibold ${active ? 'text-white' : 'text-neutral-900'}`}>{s.title}</h2>
                        <p className={`mt-1 text-sm ${active ? 'text-neutral-200' : 'text-neutral-600'}`}>{s.desc}</p>
                      </div>
                    </div>
                    <ul className={`mt-4 grid gap-2 ${active ? 'text-neutral-100' : 'text-neutral-700'}`}>
                      {s.packs.map((p) => (
                        <li key={p.label} className="rounded-lg border border-neutral-200/60 px-3 py-2 bg-white/60 backdrop-blur-sm text-sm text-neutral-800">
                          {p.label}
                        </li>
                      ))}
                    </ul>
                    {!active && (
                      <div className="mt-4">
                        <a href="/contact"><Button className="">Request Quote</Button></a>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
