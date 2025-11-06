import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
      <ol className="flex items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-neutral-800">{item.label}</Link>
            ) : (
              <span className="text-neutral-700">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="text-neutral-300">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
