import Container from '@/components/layout/container';

export default function AboutBrief() {
  return (
    <section className="py-16" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="about-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">Who We Are</h2>
            <p className="mt-4 text-neutral-600">
              Content Experts Agencies Limited is a results-driven digital marketing agency helping
              Kenyan and global brands grow through SEO, web design, paid advertising, and creative content.
            </p>
            <p className="mt-3 text-neutral-600">
              With years of experience and a measurable approach, we focus on strategies that align with your
              business goals and deliver real ROI.
            </p>
            <a href="/about" className="mt-6 inline-block text-primary-600 hover:underline">Learn More About Us →</a>
          </div>
          <div className="h-64 rounded-2xl border border-neutral-200 bg-neutral-100" aria-hidden />
        </div>
      </Container>
    </section>
  );
}