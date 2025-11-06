import React from 'react';
import Card from '@/components/ui/card';

export default function BlogCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-600">{excerpt}</p>
      <div className="mt-4 text-primary-600">Read more →</div>
    </Card>
  );
}
