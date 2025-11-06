import type { Metadata } from 'next';
import Hero from '@/components/sections/hero';
import CTASection from '@/components/sections/cta-section';
import ServicesGrid from '@/components/sections/services-grid';
import Testimonials from '@/components/sections/testimonials';
import PortfolioGrid from '@/components/sections/portfolio-grid';
import AboutBrief from '@/components/sections/about-brief';
import ContactMapSection from '@/components/sections/contact-map';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Context Expert Agencies Limited | Kenya’s Top Digital Marketing Company",
  description: "We help businesses grow through professional SEO, Web Design, and Digital Marketing services in Kenya.",
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: siteConfig.ogImage,
        sameAs: Object.values(siteConfig.links),
      },
      {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phones,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressCountry: 'KE',
        },
      },
    ],
  } as const;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ServicesGrid />
      <AboutBrief />
      <Testimonials />
      <PortfolioGrid />
      <CTASection />
      <ContactMapSection />
    </>
  );
}
