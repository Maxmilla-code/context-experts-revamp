'use client';

import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { useState } from 'react';

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const plans: Array<{ name: string; price: { monthly: number; yearly: number }; features: string[]; cta: 'Start now' | 'Contact'; highlight?: boolean }> = [
    {
      name: 'Basic',
      price: { monthly: 9, yearly: 90 },
      features: ['Basic SEO Tools', 'Unlock Campaign features', 'Limited keywords', '25 Research', 'General Support'],
      cta: 'Start now',
    },
    {
      name: 'Professional',
      price: { monthly: 29, yearly: 290 },
      features: ['Advanced SEO Tools', 'Unlock Campaign features', 'Unlimited keywords', 'Advanced AI Research', 'Premium Support'],
      highlight: true,
      cta: 'Start now',
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      features: ['All SEO Tools', 'Unlock all features', 'Unlimited keywords', 'AI Research panel', 'Premium Support'],
      cta: 'Contact',
    },
  ] as const;

  return (
    <section className="py-16">
      <Container>
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Enjoy all our features by subscribing regularly!</h1>
          <p className="mt-2 text-neutral-600">Choose the plan that fits your business and propel your website to the top of search results.</p>
        </header>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button onClick={() => setBilling('monthly')} className={`px-4 py-2 rounded-full text-sm ${billing==='monthly' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'}`}>Monthly</button>
          <button onClick={() => setBilling('yearly')} className={`px-4 py-2 rounded-full text-sm ${billing==='yearly' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'}`}>Yearly</button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`${p.highlight ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'} rounded-2xl p-6 border ${p.highlight ? 'border-neutral-800 shadow-2xl' : 'border-neutral-200 shadow-lg'}`}>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="text-3xl font-extrabold">Ksh {billing==='monthly' ? p.price.monthly : p.price.yearly}</div>
                <div className={`${p.highlight ? 'text-neutral-300' : 'text-neutral-500'} text-sm`}>/ {billing}</div>
              </div>
              <ul className={`mt-6 space-y-2 text-sm ${p.highlight ? 'text-neutral-200' : 'text-neutral-600'}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">✔ <span>{f}</span></li>
                ))}
              </ul>
              <div className="mt-6">
                {p.cta === 'Contact' ? (
                  <a href="/contact"><Button className={`${p.highlight ? 'bg-white text-neutral-900 hover:bg-neutral-200' : ''} w-full`}>Contact</Button></a>
                ) : (
                  <Button className={`${p.highlight ? 'bg-[#FF7A00] hover:bg-[#e86f00]' : 'bg-yellow-500 hover:bg-yellow-600'} w-full`}>{p.cta}</Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Terms of Payment', text: '50% upfront, 50% on delivery for fixed-scope projects.' },
            { title: 'Contract Duration', text: 'Monthly retainers or project-based timelines.' },
            { title: 'Mode of Payment', text: 'M-Pesa, Bank Transfer, or Card.' },
          ].map((i) => (
            <div key={i.title} className="rounded-2xl border border-neutral-200 p-6 bg-white text-center">
              <div className="mx-auto h-16 w-16 rounded-xl bg-neutral-100" aria-hidden />
              <h4 className="mt-4 text-lg font-medium text-neutral-900">{i.title}</h4>
              <p className="mt-1 text-sm text-neutral-600">{i.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-neutral-900">Need a custom quote? Contact our team.</h3>
          <a href="/contact"><Button className="mt-4">Request Quote</Button></a>
        </div>
      </Container>
    </section>
  );
}
