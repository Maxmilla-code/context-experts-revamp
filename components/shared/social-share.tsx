import React from 'react';

export default function SocialShare({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  function share(n: 'twitter' | 'linkedin') {
    const href =
      n === 'twitter'
        ? `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    window.open(href, '_blank');
  }

  async function nativeShare() {
    if ((navigator as any).share) {
      try { await (navigator as any).share({ title, url }); } catch {}
    } else {
      share('twitter');
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button onClick={() => share('twitter')} className="text-sm text-neutral-600 hover:text-primary-600">Twitter</button>
      <button onClick={() => share('linkedin')} className="text-sm text-neutral-600 hover:text-primary-600">LinkedIn</button>
      <button onClick={nativeShare} className="text-sm text-neutral-600 hover:text-primary-600">Share</button>
    </div>
  );
}
