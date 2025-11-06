type EmailAttachment = { filename: string; content: Buffer; contentType?: string };

export async function sendEmail(options: {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: EmailAttachment[];
}) {
  const { to, subject, text, html, attachments } = options;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || 'no-reply@localhost';

  if (!host || !user || !pass) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[email] SMTP not configured. Logging email instead. Set SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM to enable sending.');
      const attachmentNames = (attachments || []).map(a => a.filename);
      console.info('[email:dev]', { from, to, subject, text, htmlPreview: html?.slice(0, 200), attachments: attachmentNames });
      return;
    }
    throw new Error('Email transport not configured: set SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM');
  }

  const nodemailer = require('nodemailer');
  const secure = port === 465; // use TLS for port 465
  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, html, attachments });
}
