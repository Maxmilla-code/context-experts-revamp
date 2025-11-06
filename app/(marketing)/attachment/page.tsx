'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function AttachmentPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [emailMode, setEmailMode] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const requiredFields = [
      'firstName','middleName','lastName','email','phone1','phone2','gender','school','admission','nationalId','nationality','program','year','languages',
      'attachmentLetter','schoolId','idCopy','kraPin'
    ];
    for (const f of requiredFields) {
      const val = fd.get(f);
      if (!val || (val instanceof File && !val.name)) {
        setError('Please fill in all fields and attach all required documents.');
        return;
      }
    }

    try {
      setLoading(true);
      const res = await fetch('/api/attachment', { method: 'POST', body: fd });
      const json = await res.json();
      setLoading(false);
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed to submit');
      setSuccess('Submitted successfully. We will get back to you.');
      form.reset();
    } catch (err: any) {
      setError(err.message || 'Submission failed');
    }
  }

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-neutral-900">Attachment Application</h1>
        <p className="mt-2 text-neutral-600">Fill all fields and upload the required documents.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2" encType="multipart/form-data">
          <Input name="firstName" placeholder="First name" />
          <Input name="middleName" placeholder="Middle name" />
          <Input name="lastName" placeholder="Last name" />
          <Input type="email" name="email" placeholder="Email address" />
          <Input name="phone1" placeholder="Telephone number 1" />
          <Input name="phone2" placeholder="Telephone number 2" />
          <select name="gender" className="px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:ring-4 focus:ring-primary-100" required>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <Input name="school" placeholder="School/College" />
          <Input name="admission" placeholder="Admission number" />
          <Input name="nationalId" placeholder="National ID" />
          <Input name="nationality" placeholder="Nationality" />
          <Input name="program" placeholder="Program of study" />
          <Input name="year" placeholder="Year of study" />
          <Input name="languages" placeholder="Languages spoken" className="md:col-span-2" />

          <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
            <label className="block">School attachment letter<input type="file" name="attachmentLetter" className="mt-1" required /></label>
            <label className="block">Copy of school ID<input type="file" name="schoolId" className="mt-1" required /></label>
            <label className="block">Copy of national ID<input type="file" name="idCopy" className="mt-1" required /></label>
            <label className="block">KRA PIN<input type="file" name="kraPin" className="mt-1" required /></label>
          </div>

          <div className="md:col-span-2 flex items-center gap-4 mt-2">
            <Button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Application'}</Button>
            {error && <p className="text-sm text-error">{error}</p>}
            {success && <p className="text-sm text-success">{success}</p>}
          </div>
          <div className="md:col-span-2 mt-3">
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
      </Container>
    </section>
  );
}