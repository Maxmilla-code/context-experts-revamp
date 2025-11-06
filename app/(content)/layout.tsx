import ScrollProgress from '@/components/shared/scroll-progress';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_18rem]">
      <ScrollProgress />
      <div>{children}</div>
      <aside className="hidden lg:block pt-16 text-sm text-neutral-600">{/* Table of contents placeholder */}</aside>
    </div>
  );
}
