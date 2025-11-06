import Container from '@/components/layout/container';
import Card from '@/components/ui/card';

export default function PortfolioPage() {
  const projects = [
    { title: 'E-commerce SEO Scale-Up', category: 'SEO', result: 'Organic traffic +70% in 3 months' },
    { title: 'Hospitality Website Revamp', category: 'Web Design', result: 'Bookings +48%, bounce −35%' },
    { title: 'Fintech Lead Gen Campaign', category: 'Paid Ads', result: '3.2x ROAS, +220% qualified leads' },
    { title: 'Retail Social Growth', category: 'Social Media', result: '25k followers, 6% engagement' },
    { title: 'SaaS Landing Optimization', category: 'CRO', result: '2.1% → 5.4% signup rate' },
    { title: 'Brand Identity Refresh', category: 'Design', result: 'Unified assets across 5 markets' },
    { title: 'Local Services SEO', category: 'SEO', result: 'Top-3 map pack for 12 keywords' },
    { title: 'Education PPC Scale', category: 'Paid Ads', result: 'CPL −31%, inquiries +56%' },
    { title: 'Healthcare Content Engine', category: 'Content', result: '+80 articles, 0→10k/mo visits' },
  ];
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-neutral-900">Portfolio</h1>
        <p className="mt-2 text-neutral-600">Explore more of our client work and outcomes.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group overflow-hidden">
              <div className="h-40 w-full bg-neutral-200" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500">{p.category}</div>
                <h3 className="mt-1 font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
