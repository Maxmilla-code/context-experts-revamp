export async function GET() { return new Response('Removed', { status: 404 }); }

import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = newsletterSchema.parse(data);

    const subject = 'Newsletter Subscription';
    const text = `Email: ${parsed.email}`;

    await sendEmail({
      to: 'maxmillanjahira@gmail.com',
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.message || 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
