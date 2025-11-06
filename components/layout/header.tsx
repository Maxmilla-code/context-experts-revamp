import Link from 'next/link';
import { mainNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import Container from './container';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-full bg-neutral-900 text-neutral-50">
        <Container className="h-8 flex items-center justify-between text-xs">
          <span>Professional Digital Marketing Services</span>
          <span>
            {siteConfig.contact.phones[0]} / {siteConfig.contact.phones[1]}
          </span>
        </Container>
      </div>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900">
          <img src="/icons/logo.svg" alt="Logo" className="h-6 w-6" />
<span>Context Expert Agencies Limited</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-neutral-600 hover:text-neutral-900 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}
