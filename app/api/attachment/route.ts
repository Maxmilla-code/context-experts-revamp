import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const required = [
      'firstName','middleName','lastName','email','phone1','phone2','gender','school','admission','nationalId','nationality','program','year','languages',
      'attachmentLetter','schoolId','idCopy','kraPin'
    ];
    for (const key of required) {
      const v = form.get(key);
      if (!v) throw new Error(`Missing field: ${key}`);
      if (v instanceof File && !v.name) throw new Error(`Missing file: ${key}`);
    }

    const attrs = Object.fromEntries(form.entries());

    const files: { filename: string; content: Buffer; contentType?: string }[] = [];
    const fileKeys = ['attachmentLetter','schoolId','idCopy','kraPin'] as const;
    for (const k of fileKeys) {
      const f = form.get(k) as File;
      const arr = Buffer.from(await f.arrayBuffer());
      files.push({ filename: f.name, content: arr, contentType: f.type });
    }

    const subject = `Attachment Application: ${(attrs['firstName'] as string) || ''} ${(attrs['lastName'] as string) || ''}`;
    const text = Object.entries(attrs)
      .filter(([k, v]) => !(v instanceof File))
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join('\n');

    await sendEmail({
      to: 'maxmillanjahira@gmail.com',
      subject,
      text,
      attachments: files,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'Error' }, { status: 400 });
  }
}