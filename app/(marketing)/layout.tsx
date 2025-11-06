import NewsletterForm from '@/components/forms/newsletter-form';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl">
      {children}
      <section className="mt-16 bg-neutral-100">
      </section>
    </div>
  );
}
