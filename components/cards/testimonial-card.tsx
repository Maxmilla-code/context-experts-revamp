import React from 'react';
import Card from '@/components/ui/card';
import Avatar from '@/components/ui/avatar';
import { AiFillStar } from 'react-icons/ai';

export default function TestimonialCard({ quote, author, role, rating = 5 }: { quote: string; author: string; role: string; rating?: number }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-1 text-amber-500" aria-label={`${rating} star rating`}>
        {Array.from({ length: rating }).map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <p className="mt-3 text-neutral-800">“{quote}”</p>
      <div className="mt-6 flex items-center gap-5">
        <Avatar name={author} size={40} />
        <div>
          <div className="font-medium text-neutral-900">{author}</div>
          <div className="text-sm text-neutral-500">{role}</div>
        </div>
      </div>
    </Card>
  );
}
