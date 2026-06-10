/*
 * Simply Visible Section (Homepage) — Gateway to the project hub
 * Design: "Editorial Authority" — paper background, book cover hero, restrained
 * All CTAs route to /simply-visible (the hub covering book + podcast + system).
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function SimplyVisibleSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div className="flex items-center gap-4 mb-12">
          <span className="eyebrow text-[#0A0A0A]">Simply Visible</span>
          <span className="h-px flex-1 bg-[#E5E5E5]" />
          <span className="eyebrow-muted">Book &middot; Podcast &middot; System</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Book Cover */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.94)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
            }}
          >
            <Link
              href="/simply-visible"
              aria-label="Explore Simply Visible"
              className="block"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: How Local Businesses Get Found, Trusted, and Chosen in the AI Era by Adam Loomis - Book Cover"
                  className="relative w-full rounded-md transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px rgba(0,0,0,0.18), 0 12px 24px -12px rgba(0,0,0,0.12)",
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Text + CTA */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms",
            }}
          >
            <p className="eyebrow-muted mb-5">A New Project by Adam Loomis</p>

            <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6">
              The playbook local businesses
              <br />
              <span className="italic font-light text-[#6E6E6E]">have been waiting for.</span>
            </h2>

            <p className="text-[#0A0A0A]/85 text-lg leading-relaxed mb-8 max-w-2xl">
              Most local businesses are doing great work that nobody can find.
              Simply Visible changes that &mdash; a book, a podcast, and a
              system for getting found, trusted, and chosen in the AI era. The
              paperback is now available on Amazon, and the podcast launches
              soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/simply-visible" className="btn-primary">
                Explore Simply Visible
                <ArrowRight size={16} />
              </Link>
              <Link href="/simply-visible/preview" className="btn-ghost">
                Read a free preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
