export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-4xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-4 text-neutral-600">The page you are looking for doesn’t exist or has been moved.</p>
      <a href="/" className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition">Go Home</a>
    </section>
  );
}
