import Button from '@/components/ui/button';
import Container from '@/components/layout/container';

export default function CTASection() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center rounded-2xl bg-primary-50 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Ready to Elevate Your Online Presence?</h2>
        <p className="mt-2 text-neutral-600">Let’s build a strategy that drives measurable growth.</p>
        <Button className="mt-6">Get Started Today</Button>
      </Container>
    </section>
  );
}
