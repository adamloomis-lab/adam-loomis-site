/*
 * Playbook Thank You Page
 * Design: "Editorial Authority" — light, hairline, restrained
 */
import { useEffect, useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { ASSETS } from "@/lib/constants";
import {
  CheckCircle,
  FileDown,
  ArrowLeft,
  BookOpen,
  Headphones,
  MessageCircle,
} from "lucide-react";

const PLAYBOOK_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663307809653/iSGdkRyQsxV59hys4MR3Ky/organic_marketing_playbook_854a3b46.pdf";

export default function PlaybookThankYou() {
  const [showContent, setShowContent] = useState(false);
  const searchString = useSearch();
  const firstName = useMemo(() => {
    const params = new URLSearchParams(searchString);
    return params.get("name") || "";
  }, [searchString]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);

    const downloadTimer = setTimeout(() => {
      const link = document.createElement("a");
      link.href = PLAYBOOK_URL;
      link.download = "Organic_Marketing_Playbook.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(downloadTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col">
      <header className="py-6 border-b border-[#E5E5E5]">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <img src={ASSETS.logo} alt="Adam Loomis" className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 eyebrow-muted hover:text-[#0A0A0A] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20 lg:py-28">
        <div className="container">
          <div
            className="max-w-2xl mx-auto"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-3 mb-10">
              <CheckCircle size={20} className="text-[#FFC500]" />
              <span className="eyebrow">Confirmed</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
            </div>

            <h1 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] mb-6 leading-[1.05]">
              {firstName ? (
                <>
                  Thanks, {firstName}. <span className="italic font-light text-[#6E6E6E]">You&rsquo;re in.</span>
                </>
              ) : (
                <>
                  You&rsquo;re <span className="italic font-light text-[#6E6E6E]">in.</span>
                </>
              )}
            </h1>
            <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-10 max-w-xl">
              Your Organic Marketing Playbook download should start
              automatically. If it doesn&apos;t, use the button below.
            </p>

            <a
              href={PLAYBOOK_URL}
              download="Organic_Marketing_Playbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileDown size={18} />
              Download the Playbook
            </a>

            <div className="my-16 border-t border-[#E5E5E5]" />

            <p className="eyebrow mb-8">While You&rsquo;re Here</p>

            <div className="grid sm:grid-cols-3 border-t border-[#E5E5E5]">
              {[
                {
                  href: "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55",
                  Icon: BookOpen,
                  label: "Read Simply Visible",
                  desc: "The new book on Amazon",
                },
                {
                  href: "https://podcasts.apple.com/us/podcast/mondays-with-adam/id1737452204",
                  Icon: Headphones,
                  label: "Listen to the podcast",
                  desc: "Mondays with Adam",
                },
                {
                  href: "/#contact",
                  Icon: MessageCircle,
                  label: "Book a strategy call",
                  desc: "Talk to Adam directly",
                },
              ].map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group p-6 border-b border-[#E5E5E5] ${
                    i < 2 ? "sm:border-r" : ""
                  } hover:bg-[#FAFAFA] transition-colors`}
                >
                  <c.Icon size={20} className="text-[#0A0A0A] mb-5" />
                  <p className="font-heading text-lg text-[#0A0A0A] mb-1 group-hover:underline underline-offset-4">
                    {c.label}
                  </p>
                  <p className="text-[#6E6E6E] text-[13px]">{c.desc}</p>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 eyebrow-muted hover:text-[#0A0A0A] transition-colors"
              >
                <ArrowLeft size={14} />
                Back to adamloomis.online
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container text-center">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
