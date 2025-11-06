import React from 'react';
import Container from '@/components/layout/container';
import ProjectCard from '@/components/cards/project-card';

export default function PortfolioGrid() {
  const items = [
    { title: 'E-commerce SEO Scale-Up', category: 'SEO', result: 'Increased organic traffic by 70% in 3 months.' },
    { title: 'Hospitality Website Revamp', category: 'Web Design', result: 'Bounce rate reduced by 35% and +48% bookings.' },
    { title: 'Fintech Lead Gen Campaign', category: 'Paid Ads', result: '3.2x ROAS and 220% more qualified leads.' },
    { title: 'Retail Social Growth', category: 'Social Media', result: 'Grew Instagram to 25k with 6% engagement.' },
    { title: 'SaaS Landing Optimization', category: 'CRO', result: 'Signup conversion up from 2.1% to 5.4%.' },
    { title: 'Brand Identity Refresh', category: 'Design', result: 'Unified brand assets across 5 markets.' },
  ];
  return (
    <section id="portfolio" className="py-16" aria-labelledby="portfolio-title">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 id="portfolio-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">Our Work in Action</h2>
          <a href="/portfolio" className="text-sm text-primary-600 hover:underline">See Full Portfolio →</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} title={p.title} category={p.category} result={p.result} />
          ))}
        </div>
      </Container>
    </section>
  );
}
