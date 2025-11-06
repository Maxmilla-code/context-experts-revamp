'use client';

import { useState } from 'react';
import Container from '@/components/layout/container';
import Skeleton from '@/components/ui/skeleton';
import ContactForm from '@/components/forms/contact-form';
import { siteConfig } from '@/config/site';

export default function ContactMapSection() {
  const [loaded, setLoaded] = useState(false);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`;
  return (
    <section className="py-16" aria-labelledby="contact-title">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">Get in Touch</h2>
            <p className="mt-2 text-neutral-600">Finance House Building, 2nd Floor, Room 10, Nairobi.</p>
            <div className="mt-4 flex flex-col gap-2 text-neutral-700">
              {siteConfig.contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s+/g,'')}`} className="text-primary-600 hover:underline">{p}</a>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
              {!loaded && <Skeleton className="h-64 w-full" />}
              <iframe
                title="Google Map"
                src={mapSrc}
                loading="lazy"
                className={`h-64 w-full ${loaded ? 'block' : 'hidden'}`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-xl font-semibold text-neutral-900">Contact Form</h3>
              <p className="mt-1 text-neutral-600">Name, email, phone, and message.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}