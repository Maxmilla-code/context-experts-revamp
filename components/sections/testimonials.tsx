import React from 'react';
import Container from '@/components/layout/container';
import TestimonialsList from '@/components/sections/testimonials-list';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const subset = testimonials.slice(0, 6);
  return (
    <section className="py-16" aria-labelledby="home-testimonials-title">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 id="home-testimonials-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">What Our Clients Say</h2>
          <a href="/testimonials" className="text-sm text-primary-600 hover:underline">View All Testimonials →</a>
        </div>
        <TestimonialsList items={subset} carousel />
      </Container>
    </section>
  );
}
