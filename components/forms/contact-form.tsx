'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import FormField from './form-field';
import { contactSchema } from '@/lib/validations';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [emailMode, setEmailMode] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setSent(false);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setLoading(false);
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Failed to send message');
      }
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setErrors({ form: error.message || 'Failed to send' });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField label="Name" error={errors.name}>
        <Input name="name" placeholder="Your name" />
      </FormField>
      <FormField label="Email" error={errors.email}>
        <Input type="email" name="email" placeholder="you@example.com" />
      </FormField>
      <FormField label="Message" error={errors.message}>
        <textarea name="message" className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100" rows={5} placeholder="Tell us about your project" />
      </FormField>
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Message'}</Button>
        {errors.form && <p className="text-sm text-error">{errors.form}</p>}
        {sent && <p className="text-sm text-success">Message sent!</p>}
      </div>
      <div className="mt-3">
        <Button 
          variant="ghost" 
          type="button" 
          className="text-sm"
          onClick={() => setEmailMode(!emailMode)}
        >
          Email form data to maxmillanjahira@gmail.com {emailMode ? '↑' : '↓'}
        </Button>
        {emailMode && (
          <div className="mt-2 p-3 bg-neutral-50 rounded border">
            <p className="text-sm text-neutral-600">Current form data will be sent to maxmillanjahira@gmail.com when you submit.</p>
          </div>
        )}
      </div>
    </form>
  );
}
