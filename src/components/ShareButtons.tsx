/*
 * ShareButtons — social sharing for a post.
 * Native share where available, plus X / Facebook / LinkedIn / copy-link.
 */
import { useState } from "react";
import { toast } from "sonner";
import { Check, Link2, Share2 } from "lucide-react";

const SITE = "https://adamloomis.online";

function iconBtn(extra = "") {
  return `inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E5E5] text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white ${extra}`;
}

export default function ShareButtons({
  path,
  title,
}: {
  path: string; // e.g. /my-thoughts/confront-the-fear-wall
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  // Prefer the live canonical URL; fall back to the known site base for SSR.
  const url =
    typeof window !== "undefined" ? window.location.href : `${SITE}${path}`;
  const enc = encodeURIComponent;

  const shareTargets = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const openShare = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=520");
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link");
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="eyebrow-muted mr-1">Share</span>

      {shareTargets.map((t) => (
        <button
          key={t.label}
          type="button"
          onClick={() => openShare(t.href)}
          aria-label={t.label}
          title={t.label}
          className={iconBtn()}
        >
          {t.svg}
        </button>
      ))}

      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        title="Copy link"
        className={iconBtn()}
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>

      {/* Native share — most useful on mobile; harmless elsewhere */}
      <button
        type="button"
        onClick={nativeShare}
        aria-label="Share"
        title="Share"
        className={`${iconBtn()} sm:hidden`}
      >
        <Share2 size={16} />
      </button>
    </div>
  );
}
