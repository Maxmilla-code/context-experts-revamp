'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from '@/components/ui/card';
import Avatar from '@/components/ui/avatar';

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  photo?: string;
  // Either provide a single blurb or the full challenge/solution/result triplet
  blurb?: string;
  videoUrl?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  rating?: number;
};

export default function TestimonialsList({ items, carousel = true }: { items: TestimonialItem[]; carousel?: boolean }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  if (!carousel) {
    return (
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, idx) => (
          <Card key={idx} className="h-full border-l-4 border-[#004AAD]">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <Avatar src={t.photo} name={t.name} size={44} />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-neutral-500">{t.role}, {t.company}</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-neutral-700">
                {t.blurb ? (
                  <>
                    <p>{t.blurb}</p>
                    {t.videoUrl && (
                      <a href={t.videoUrl} target="_blank" rel="noreferrer" className="inline-block text-sm text-primary-600 hover:underline">Watch video →</a>
                    )}
                  </>
                ) : (
                  <>
                    <p><span className="font-medium text-[#1E1E1E]">Challenge:</span> {t.challenge}</p>
                    <p><span className="font-medium text-[#1E1E1E]">Solution:</span> {t.solution}</p>
                    <p><span className="font-medium text-[#1E1E1E]">Result:</span> {t.result}</p>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  const scrollByX = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: amount * dir, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-10">
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Client testimonials carousel"
      >
        {items.map((t, idx) => (
          <motion.div
            key={idx}
            className="snap-start shrink-0 min-w-[85%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[32%]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          >
            <Card className="h-full border-l-4 border-[#004AAD]">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar src={t.photo} name={t.name} size={44} />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-neutral-500">{t.role}, {t.company}</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-neutral-700">
                  {t.blurb ? (
                    <>
                      <p>{t.blurb}</p>
                      {t.videoUrl && (
                        <a href={t.videoUrl} target="_blank" rel="noreferrer" className="inline-block text-sm text-primary-600 hover:underline">Watch video →</a>
                      )}
                    </>
                  ) : (
                    <>
                      <p><span className="font-medium text-[#1E1E1E]">Challenge:</span> {t.challenge}</p>
                      <p><span className="font-medium text-[#1E1E1E]">Solution:</span> {t.solution}</p>
                      <p><span className="font-medium text-[#1E1E1E]">Result:</span> {t.result}</p>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between md:flex">
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByX(-1)}
            className="rounded-full bg-white/90 p-2 shadow ring-1 ring-neutral-200 hover:bg-white"
          >
            <FiChevronLeft size={20} />
          </button>
        </div>
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByX(1)}
            className="rounded-full bg-white/90 p-2 shadow ring-1 ring-neutral-200 hover:bg-white"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
