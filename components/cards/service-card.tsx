import React from 'react';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

export default function ServiceCard({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-6">
        {icon && <div className="mb-4 text-primary-600">{icon}</div>}
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
        <div className="mt-4">
          <Button variant="ghost">view our packages →</Button>
        </div>
      </div>
    </Card>
  );
}
