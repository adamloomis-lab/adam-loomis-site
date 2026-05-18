/*
 * Playbook Thank You Page — Shown after a user signs up for the Organic Marketing Playbook
 * Design: "Midnight Forge" — Centered layout with download CTA, social links, and next steps
 * Reads ?name= from URL to personalize the greeting
 */
import { useEffect, useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { ASSETS, SOCIAL_LINKS } from "@/lib/constants";
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
    // Trigger entrance animation
    const timer = setTimeout(() => setShowContent(true), 100);

    // Auto-trigger download
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Simple top bar with logo */}
      <header className="py-5 border-b border-white/5">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <img
              src={ASSETS.logo}
              alt="Adam Loomis"
              className="h-9 lg:h-11 w-auto brightness-0 invert cursor-pointer"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-16 lg:py-24">
        <div className="container">
          <div
            className="max-w-2xl mx-auto text-center"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Success icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-8">
              <CheckCircle size={36} className="text-[#D4AF37]" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {firstName ? `Thanks, ${firstName}! You're In!` : "You're In!"}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Your Organic Marketing Playbook download should start
              automatically. If it doesn't, click the button below.
            </p>

            {/* Download button */}
            <a
              href={PLAYBOOK_URL}
              download="Organic_Marketing_Playbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold bg-[#D4AF37] text-black rounded-lg transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:-translate-y-0.5"
            >
              <FileDown size={22} />
              Download the Playbook
            </a>

            {/* Divider */}
            <div className="gold-line my-12" />

            {/* What's next section */}
            <h2 className="font-heading text-xl sm:text-2xl font-bold mb-8 text-white/90">
              While You're Here...
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <a
                href="https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.03] transition-all duration-300"
              >
                <BookOpen
                  size={24}
                  className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors mb-4 mx-auto"
                />
                <h3 className="font-heading font-semibold text-sm text-white/80 group-hover:text-white transition-colors mb-2">
                  Read the Book
                </h3>
                <p className="text-white/35 text-xs leading-relaxed">
                  Dive deeper with Conversational Marketing on Amazon
                </p>
              </a>

              <a
                href="https://podcasts.apple.com/us/podcast/mondays-with-adam/id1737452204"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.03] transition-all duration-300"
              >
                <Headphones
                  size={24}
                  className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors mb-4 mx-auto"
                />
                <h3 className="font-heading font-semibold text-sm text-white/80 group-hover:text-white transition-colors mb-2">
                  Listen on Apple Podcasts
                </h3>
                <p className="text-white/35 text-xs leading-relaxed">
                  Stories, songs, encouragement, and fun every Monday
                </p>
              </a>

              <a
                href="/#contact"
                className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.03] transition-all duration-300"
              >
                <MessageCircle
                  size={24}
                  className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors mb-4 mx-auto"
                />
                <h3 className="font-heading font-semibold text-sm text-white/80 group-hover:text-white transition-colors mb-2">
                  Book a Strategy Call
                </h3>
                <p className="text-white/35 text-xs leading-relaxed">
                  Let's talk about growing your brand
                </p>
              </a>
            </div>

            {/* Back to home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft size={14} />
              Back to adamloomis.online
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-6 border-t border-white/5">
        <div className="container text-center">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Adam Loomis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
