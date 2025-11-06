import ContactForm from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <section className="py-16 max-w-2xl">
      <h1 className="text-3xl font-bold text-neutral-900">Contact</h1>
<p className="mt-4 text-neutral-600">Have a project in mind? Let’s talk.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
