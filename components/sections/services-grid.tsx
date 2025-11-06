import React from 'react';
import ServiceCard from '@/components/cards/service-card';
import Container from '@/components/layout/container';
import { FiSearch, FiVideo, FiFilm, FiStar, FiGlobe, FiShare2 } from 'react-icons/fi';

const serviceIds = {
  seo: 'seo-articles',
  customVideo: 'custom-videos',
  animatedVideo: 'animated-videos',
  reviews: 'product-reviews',
  web: 'web-dev',
  social: 'social-campaigns',
} as const;

export default function ServicesGrid() {
  const items = [
    { id: serviceIds.seo, title: 'Creation of SEO Optimized Articles', description: 'High-quality, keyword-focused posts that rank and convert.', icon: <FiSearch size={28} /> },
    { id: serviceIds.customVideo, title: 'Custom Videos', description: 'Tailored video content to promote your brand and offers.', icon: <FiVideo size={28} /> },
    { id: serviceIds.animatedVideo, title: 'Animated Video', description: 'Engaging motion graphics that simplify complex ideas.', icon: <FiFilm size={28} /> },
    { id: serviceIds.reviews, title: 'Product Reviews', description: 'Authentic, persuasive reviews in multiple lengths.', icon: <FiStar size={28} /> },
    { id: serviceIds.web, title: 'Website Development', description: 'Modern, responsive, and conversion-first websites.', icon: <FiGlobe size={28} /> },
    { id: serviceIds.social, title: 'Social Media Campaigns', description: 'Targeted campaigns for Facebook, TikTok, and Instagram.', icon: <FiShare2 size={28} /> },
  ];
  return (
    <section className="py-16" aria-labelledby="services-title">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 id="services-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">What We Do</h2>
          <a href="/services" className="text-sm text-primary-600 hover:underline">View All Services →</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <a key={s.id} href={`/services#${s.id}`} className="block">
              <ServiceCard title={s.title} description={s.description} icon={s.icon} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
