import { useEffect } from 'react';

export function useIntersectionObserver(
  el: React.RefObject<Element>,
  onIntersect: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    if (!el.current) return;
    const observer = new IntersectionObserver(([entry]) => onIntersect(entry), options);
    observer.observe(el.current);
    return () => observer.disconnect();
  }, [el, onIntersect, options]);
}
