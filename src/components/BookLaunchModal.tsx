/*
 * Book Launch Modal — Simply Visible (paperback)
 * Center modal, first-visit only via localStorage, homepage only.
 * Closes on overlay click, ESC, or any button.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ASSETS } from "@/lib/constants";
import { ArrowRight, X } from "lucide-react";

const STORAGE_KEY = "al-sv-launch-modal-v1";
const SHOW_AFTER_MS = 3500;

const AMAZON_PAPERBACK = "https://www.amazon.com/dp/B0H4Q9PPPW";

export default function BookLaunchModal() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location !== "/") return; // homepage only

    try {
      if (localStorage.getItem(STORAGE_KEY)) return; // already shown
    } catch {
      /* localStorage blocked: still show once per session */
    }

    const t = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-launch-title"
      className="fixed inset-0 z-[70] flex items-center justify-center px-4"
      style={{ animation: "fadeIn 250ms ease-out" }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close announcement"
        onClick={close}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden"
        style={{ animation: "fadeIn 350ms ease-out" }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          className="absolute top-4 right-4 z-10 w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/90 text-[#6E6E6E] hover:text-[#0A0A0A] hover:bg-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid sm:grid-cols-12">
          {/* Cover */}
          <div className="sm:col-span-5 bg-[#FAFAFA] border-b sm:border-b-0 sm:border-r border-[#E5E5E5] p-8 flex items-center justify-center">
            <a
              href={AMAZON_PAPERBACK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Simply Visible on Amazon"
              className="block w-full max-w-[200px]"
            >
              <img
                src={ASSETS.simplyVisibleCover}
                alt="Simply Visible paperback by Adam Loomis"
                className="w-full rounded-sm transition-transform duration-300 hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 20px 40px -16px rgba(0,0,0,0.25), 0 8px 16px -8px rgba(0,0,0,0.15)",
                }}
              />
            </a>
          </div>

          {/* Copy */}
          <div className="sm:col-span-7 p-8 lg:p-10">
            <p className="eyebrow text-[#0A0A0A] mb-4">Just Released</p>
            <h2
              id="book-launch-title"
              className="display-serif text-3xl sm:text-4xl text-[#0A0A0A] mb-3 leading-[1.05]"
            >
              The book <span className="italic font-light text-[#6E6E6E]">is here.</span>
            </h2>
            <p className="text-[#0A0A0A]/80 text-[15px] leading-relaxed mb-8">
              Simply Visible &mdash; the playbook for local businesses who want
              to be found, trusted, and chosen in the AI era &mdash; is now
              available on Amazon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href={AMAZON_PAPERBACK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-primary"
              >
                Buy on Amazon
                <ArrowRight size={16} />
              </a>
              <Link
                href="/simply-visible"
                onClick={close}
                className="btn-ghost"
              >
                Read more
              </Link>
            </div>

            <button
              type="button"
              onClick={close}
              className="text-[#6E6E6E] hover:text-[#0A0A0A] text-[13px] underline underline-offset-4 transition-colors"
            >
              No thanks, just looking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
