import Container from '@/components/layout/container';

export default function AboutBrief() {
  return (
    <section className="py-16" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="about-title" className="text-2xl md:text-3xl font-semibold text-neutral-900">Who We Are</h2>
            <p className="mt-4 text-neutral-600">
              your number ne serrch engine optimization company in Africa. we have consistently delivered results and have worked with over 100 brands
            </p>
            <p className="mt-3 text-neutral-600">
              we audit website for seo to learn you current ranl, review your websites analytics and determine perfect keywords for you
            </p>
            <p className="mt-3 text-neutral-600">
              we search keywords associated with your business and find out how your website stacks up aganist your competition
            </p>
            <p className="mt-3 text-neutral-600">
              we guarantee results in 3 months only. we run a competitive analysis to compare your content and other seo factors.
            </p>
            <a href="/about" className="mt-6 inline-block text-primary-600 hover:underline">Learn More About Us →</a>
          </div>
          <div className="h-74 rounded-2xl border border-neutral-200 bg-neutral-100 overflow-hidden">
            <img src="/images/team/team-one.png" alt="Team" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}