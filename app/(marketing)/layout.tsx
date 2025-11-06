import NewsletterForm from '@/components/forms/newsletter-form';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl">
      {children}
      <section className="mt-16 bg-neutral-100">
        <div className="container-px mx-auto flex max-w-3xl flex-col items-center gap-3 py-12 text-center">
          <h3 className="text-xl font-semibold text-neutral-900">Stay in the loop</h3>
          <p className="text-neutral-600">Get product updates and resources straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
