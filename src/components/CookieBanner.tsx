/*
 * Cookie Banner — Editorial Authority
 * Bottom-right dismissible toast. Witty copy. localStorage flag.
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

const STORAGE_KEY = "al-cookies-acked-v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const acked = localStorage.getItem(STORAGE_KEY);
      if (!acked) {
        // Slight delay so it doesn't slam the page on first paint
        const t = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage blocked — silently skip
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-[60] bg-white border border-[#0A0A0A] rounded-md shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] p-5"
      style={{ animation: "fadeIn 400ms ease-out" }}
    >
      <button
        onClick={dismiss}
        aria-label="Close cookie notice"
        className="absolute top-3 right-3 text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors"
      >
        <X size={18} />
      </button>
      <p className="eyebrow mb-3">A note on cookies</p>
      <p className="text-[#0A0A0A] text-[15px] leading-relaxed mb-2">
        We use a couple of essential cookies &mdash; the kind that make forms
        work, not the kind that follow you around the internet sniffing your
        receipts.
      </p>
      <p className="text-[#6E6E6E] text-[13px] leading-relaxed mb-5">
        One of them remembers you&apos;ve already read this notice, so it
        stops bothering you. You&apos;re welcome.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={dismiss}
          className="px-5 py-2 text-[13px] font-semibold bg-[#FFC500] text-[#0A0A0A] rounded hover:bg-[#FFD633] transition-colors"
        >
          Got it
        </button>
        <Link
          href="/privacy"
          className="text-[13px] font-medium text-[#6E6E6E] hover:text-[#0A0A0A] underline underline-offset-4 transition-colors"
          onClick={dismiss}
        >
          Read the policy
        </Link>
      </div>
    </div>
  );
}
