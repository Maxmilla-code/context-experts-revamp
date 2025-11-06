import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Please provide more details'),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email'),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
