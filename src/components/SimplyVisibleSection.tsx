/*
 * Simply Visible Book Announcement Section (Homepage)
 * Two-column layout: book cover left, text + CTA link to landing page right
 * Matches existing "Midnight Forge" design language
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, ArrowRight } from "lucide-react";

const AMAZON_URL =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";

export default function SimplyVisibleSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div ref={ref} className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book Cover — Left Column */}
          <div
            className="flex justify-center lg:justify-center order-1 lg:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.92)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
            }}
          >
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Simply Visible on Amazon"
            >
              <div className="relative max-w-sm w-full cursor-pointer">
                {/* Glow behind cover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.3), transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: The Local Business Playbook for Getting Found, Trusted, and Chosen in the AI Era by Adam Loomis - Book Cover"
                  className="relative w-full rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(212,175,55,0.08)",
                  }}
                />
              </div>
            </a>
          </div>

          {/* Text + CTA — Right Column */}
          <div
            className="order-2 lg:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={18} className="text-[#D4AF37]" />
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
                Available Now
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-3">
              The playbook local businesses have been waiting for.
            </h2>

            {/* Subheadline */}
            <p className="text-[#D4AF37] text-xl font-semibold mb-6">
              My new book is now available on Amazon.
            </p>

            {/* Body */}
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Most local businesses are doing great work that nobody can find.
              This book changes that.{" "}
              <span className="text-white/70 italic">
                Simply Visible: The Local Business Playbook for Getting Found,
                Trusted, and Chosen in the AI Era
              </span>{" "}
              is a practical, no-fluff guide for business owners who want to stop
              being invisible online and start being the obvious choice in their
              market. Whether you're just getting started or you've been at it
              for years, this book meets you where you are and shows you exactly
              what to do next.
            </p>

            {/* CTAs: Buy on Amazon + Learn More */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded-lg transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                Buy on Amazon
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/simply-visible"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/15 rounded-lg transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Learn more about the book
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
