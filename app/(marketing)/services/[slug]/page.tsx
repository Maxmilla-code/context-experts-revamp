interface Props { params: { slug: string } }

export default function ServiceDetailPage({ params }: Props) {
  return (
    <article className="py-9">
      <h1 className="text-3xl font-bold text-neutral-900 capitalize">Service: {params.slug.replace(/-/g, ' ')}</h1>
      <p className="mt-4 text-neutral-600">Detailed description coming soon.</p>
    </article>
  );
}
