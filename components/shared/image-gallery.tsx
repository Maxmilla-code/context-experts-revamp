'use client';

import React, { useState } from 'react';
import Modal from '@/components/ui/modal';

export default function ImageGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" className="h-24 w-full cursor-pointer rounded object-cover" onClick={() => { setActive(i); setOpen(true); }} />
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} className="max-w-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[active]} alt="" className="h-auto w-full rounded" />
      </Modal>
    </div>
  );
}
