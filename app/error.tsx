'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <section className="container-px py-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Something went wrong</h2>
          <p className="mt-2 text-neutral-600">{error.message}</p>
          <button onClick={reset} className="mt-6 px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700">Try again</button>
        </section>
      </body>
    </html>
  );
}
