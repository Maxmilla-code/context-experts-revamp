import Container from './container';
import { socialLinks } from '@/config/socials';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <Container className="py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Context Experts. All rights reserved.</p>
        <ul className="flex items-center gap-4 text-sm">
          {socialLinks.map((s) => (
            <li key={s.name}><a href={s.href} className="text-neutral-600 hover:text-neutral-900">{s.name}</a></li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
