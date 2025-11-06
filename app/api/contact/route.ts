import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = contactSchema.parse(data);

    const subject = `New contact message from ${parsed.name}`;
    const text = `Name: ${parsed.name}\nEmail: ${parsed.email}\n\n${parsed.message}`;

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
