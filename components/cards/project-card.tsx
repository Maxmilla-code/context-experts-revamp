import React from 'react';
import Card from '@/components/ui/card';

export default function ProjectCard({ title, category, result }: { title: string; category: string; result?: string }) {
  return (
    <Card className="group overflow-hidden">
      <div className="h-40 w-full bg-neutral-200" />
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-neutral-500">{category}</div>
        <h3 className="mt-1 font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{title}</h3>
        {result && <p className="mt-1 text-sm text-neutral-600">{result}</p>}
      </div>
    </Card>
  );
}
