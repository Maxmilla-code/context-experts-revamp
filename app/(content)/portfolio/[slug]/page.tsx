interface Props { params: { slug: string } }

export default function ProjectPage({ params }: Props) {
  return (
    <article className="py-16">
      <h1 className="text-3xl font-bold text-neutral-900 capitalize">Project: {params.slug.replace(/-/g, ' ')}</h1>
      <p className="mt-4 text-neutral-600">Project details will be showcased here.</p>
    </article>
  );
}
