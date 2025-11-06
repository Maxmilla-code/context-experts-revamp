'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ end, duration = 1200 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * end));
      if (p < 1) ref.current = requestAnimationFrame(tick);
    }
    ref.current = requestAnimationFrame(tick);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [end, duration]);

  return <span>{value}</span>;
}
