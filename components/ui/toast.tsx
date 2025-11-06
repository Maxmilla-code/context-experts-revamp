import React from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Toasts() {
  const { toasts, remove } = useToast();
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className="rounded-lg bg-neutral-900/90 px-4 py-3 text-sm text-white shadow-lg">
          <div className="flex items-center gap-3">
            <span>{t.message}</span>
            <button onClick={() => remove(t.id)} className="ml-auto text-neutral-300 hover:text-white">×</button>
          </div>
        </div>
      ))}
    </div>
  );
}
