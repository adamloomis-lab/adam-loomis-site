/*
 * Simply Visible Book Section — Editorial book feature
 * Design: "Editorial Authority" — paper background, book cover hero, restrained
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const AMAZON_URL =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";

export default function SimplyVisibleSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div className="flex items-center gap-4 mb-12">
          <span className="eyebrow text-[#0A0A0A]">The Book</span>
          <span className="h-px flex-1 bg-[#E5E5E5]" />
          <span className="eyebrow-muted">Available Now</span>
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
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Simply Visible on Amazon"
              className="block"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: The Local Business Playbook for Getting Found, Trusted, and Chosen in the AI Era by Adam Loomis - Book Cover"
                  className="relative w-full rounded-md transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px rgba(0,0,0,0.18), 0 12px 24px -12px rgba(0,0,0,0.12)",
                  }}
                />
              </div>
            </a>
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
            <p className="eyebrow-muted mb-5">A New Book by Adam Loomis</p>

            <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6">
              The playbook local businesses
              <br />
              <span className="italic font-light text-[#6E6E6E]">have been waiting for.</span>
            </h2>

            <p className="text-[#0A0A0A]/85 text-lg leading-relaxed mb-8 max-w-2xl">
              Most local businesses are doing great work that nobody can find.
              This book changes that.{" "}
              <span className="italic text-[#0A0A0A]">
                Simply Visible: The Local Business Playbook for Getting Found,
                Trusted, and Chosen in the AI Era
              </span>{" "}
              is a practical, no-fluff guide for business owners who want to stop
              being invisible online and start being the obvious choice in their
              market. Whether you're just getting started or you've been at it
              for years, this book meets you where you are and shows you exactly
              what to do next.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy on Amazon
                <ArrowRight size={16} />
              </a>
              <Link href="/simply-visible" className="btn-ghost">
                Read more about the book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
