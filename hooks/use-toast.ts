'use client';
import { useState, useCallback } from 'react';

type Toast = { id: number; message: string };

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const add = useCallback((message: string) => setToasts((t) => [...t, { id: Date.now(), message }]), []);
  const remove = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);
  return { toasts, add, remove };
}
