export function generatePageMetadata({ title, description, path }: { title: string; description?: string; path?: string }) {
  const base = {
    title,
    description: description || 'Context Experts page',
    openGraph: {
      title,
      description: description || 'Context Experts page',
      url: path ? `https://example.com${path}` : 'https://example.com',
    },
  } as const;
  return base;
}
