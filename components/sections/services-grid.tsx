import React from 'react';
import ServiceCard from '@/components/cards/service-card';
import Container from '@/components/layout/container';
import { FiSearch, FiGlobe, FiShare2, FiImage } from 'react-icons/fi';

export default function ServicesGrid() {
  const items = [
    { title: 'SEO Optimization', description: 'Rank higher and get seen by your ideal customers.', icon: <FiSearch size={28} /> },
    { title: 'Web Development', description: 'Fast, responsive, and conversion-driven websites.', icon: <FiGlobe size={28} /> },
    { title: 'Social Media Marketing', description: 'Build community and drive engagement.', icon: <FiShare2 size={28} /> },
    { title: 'Graphic Design', description: 'Creative visuals that match your brand identity.', icon: <FiImage size={28} /> },
  ];
  return (
    <section className="py-16" aria-labelledby="services-title">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 id="services-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">What We Do</h2>
          <a href="/services" className="text-sm text-primary-600 hover:underline">View All Services →</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} icon={s.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
