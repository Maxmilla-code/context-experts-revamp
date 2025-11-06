import Button from '@/components/ui/button';
import Container from '@/components/layout/container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,#FDE68A_0%,transparent_40%),radial-gradient(50%_50%_at_90%_10%,#93C5FD_0%,transparent_40%)] opacity-50" />
      <Container noPadding className="relative py-2.5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
              Elevate Your Brand’s Digital Growth with <span className="text-[#004AAD]">Context Expert Agencies Limited</span>
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
                our professionals SEO services are tailored to give you perfect ranking over the internet and better access to clients both locally and international, we are the leading digital marketing company in kenya with clients locally and abroad
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/contact"><Button className="bg-[#004AAD] hover:bg-[#003a84]">Contact Us</Button></a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-80 md:w-96 rounded-4xl bg-neutral-300 overflow-hidden shadow-xl">
              <Image src="/images/hero/hero-image.jpg" alt="Happy client" fill className="object-cover" priority />
            </div>
            {/* Floating badges */}
            <div className="absolute -left-4 top-6 rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200 px-4 py-3 text-sm">
              <span className="inline-flex items-center gap-2 font-medium"><span className="text-[#F59E0B]">🏆</span> Best Agency</span>
              <div className="text-xs text-neutral-500">Awards</div>
            </div>
            <div className="absolute -right-4 bottom-8 rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200 px-4 py-3 text-sm">
              <span className="inline-flex items-center gap-2 font-medium"><span className="text-[#FF7A00]">⚡</span> Best </span>
              <div className="text-xs text-neutral-500">quality services</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
