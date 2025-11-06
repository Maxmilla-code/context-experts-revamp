import dynamic from 'next/dynamic';
import Container from '@/components/layout/container';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Skeleton from '@/components/ui/skeleton';

const ContactForm = dynamic(() => import('@/components/forms/contact-form'), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />,
});

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-16 animate-slide-down">
      {/* Soft brand gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(60%_60%_at_20%_10%,#93C5FD_0%,transparent_40%),radial-gradient(50%_50%_at_90%_10%,#06B6D4_0%,transparent_40%)]" />

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-medium text-[#004AAD]">
              <FiArrowRight /> Start a conversation
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900">
              Let’s build something great together
            </h1>
            <p className="mt-2 text-neutral-600">
              We usually respond within a few hours.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
            {/* Contact Info */}
            <div className="space-y-4">
              <InfoCard
                icon={<FiPhone className="h-5 w-5" />}
                title="Call us"
                content={[
                  <a key="p1" href="tel:+254" className="text-[#004AAD] hover:underline">+254 757 562 345</a>,
                ]}
              />
              <InfoCard
                icon={<FiMail className="h-5 w-5" />}
                title="Email"
                content={[<a key="e" href="mailto:info@contextexperts.co.ke" className="text-[#004AAD] hover:underline">info@contextexperts.co.ke</a>]}
              />
              <InfoCard
                icon={<FiMapPin className="h-5 w-5" />}
                title="Address"
                content={[<span key="a" className="text-neutral-700">Finance House Building, 2nd Floor, Room 10, Ruiru</span>]}
              />
            </div>

            {/* Form */}
            <div className="relative">
              <div className="rounded-2xl border border-neutral-200/80 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-neutral-900">Send us a message</h2>
                <p className="mt-1 text-sm text-neutral-600">Tell us a bit about your project and goals.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode[] }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#004AAD]/10 text-[#004AAD] transition-colors group-hover:bg-[#004AAD] group-hover:text-white">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">{title}</div>
          <div className="mt-1 flex flex-col gap-1 text-sm">{content}</div>
        </div>
      </div>
    </div>
  );
}
