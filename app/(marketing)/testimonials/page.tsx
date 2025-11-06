import type { Metadata } from 'next';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import TestimonialsList from '@/components/sections/testimonials-list';
import { testimonials as items } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Context Expert Agencies Limited',
  description:
    'Client reviews of Context Expert Agencies Limited — trusted by businesses across Kenya for SEO, web design, and digital marketing results.',
};

export default function TestimonialsPage() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: siteConfig.ogImage,
        sameAs: Object.values(siteConfig.links),
      },
      ...items.map((t) => ({
        '@type': 'Review',
        itemReviewed: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
        reviewBody: `Challenge: ${t.challenge} | Solution: ${t.solution} | Result: ${t.result}`,
        reviewRating: { '@type': 'Rating', ratingValue: String(t.rating ?? 5), bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: t.name },
        publisher: { '@type': 'Organization', name: siteConfig.name },
      })),
    ],
  } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <section className="py-16 bg-[#F8F9FA] text-[#1E1E1E]" aria-labelledby="testimonials-title">
        <Container>
          <header className="mx-auto max-w-3xl text-center">
            <h1 id="testimonials-title" className="text-3xl md:text-4xl font-extrabold">See What Our Clients Say About Working With Context Expert Agencies Limited.</h1>
            <p className="mt-3 text-neutral-600">Our clients and partners share their success stories after working with our team of digital experts.</p>
          </header>

          <TestimonialsList items={items} carousel={false} />

          <div className="mt-12 text-center">
            <h2 className="text-xl md:text-2xl font-semibold">Join hundreds of satisfied clients. Let us build your success story.</h2>
            <a href="/contact"><Button className="mt-5 bg-[#FF7A00] hover:bg-[#e86f00] focus:ring-orange-200">Get Started</Button></a>
          </div>
        </Container>
      </section>
    </>
  );
}
