import React from 'react';
import Container from '@/components/layout/container';
import AnimatedCounter from '@/components/shared/animated-counter';

export default function StatsSection() {
  const stats = [
    { label: 'Projects', value: 120 },
    { label: 'Clients', value: 45 },
    { label: 'Uptime', value: 99 },
  ];
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-neutral-900">
                <AnimatedCounter end={s.value} />{s.label === 'Uptime' ? '%' : '+'}
              </div>
              <div className="mt-2 text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
