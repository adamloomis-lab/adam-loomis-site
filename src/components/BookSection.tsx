/*
 * Book Section — Conversational Marketing (prior book)
 * Design: "Editorial Authority" — dark feature for visual punctuation
 */
import { useState, useEffect } from "react";
import { ASSETS, ENDORSEMENTS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function BookSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation(0.15);
  const [activeEndorsement, setActiveEndorsement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEndorsement((prev) => (prev + 1) % ENDORSEMENTS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="book" className="relative py-24 lg:py-32 bg-[#0A0A0A]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow text-white">Also from Adam</span>
            <span className="h-px flex-1 bg-white/15" />
            <span className="eyebrow-muted text-white/50">First Book</span>
          </div>
          <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl">
            <span className="italic font-light text-white/60">Conversational</span> Marketing.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Book Image */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.94)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
            }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src={ASSETS.bookPhoto}
                alt="Conversational Marketing by Adam Loomis - Book Cover"
                className="relative w-full rounded-md"
                style={{
                  boxShadow:
                    "0 30px 60px -20px rgba(0,0,0,0.7), 0 12px 24px -12px rgba(0,0,0,0.5)",
                }}
              />
            </div>
          </div>

          {/* Content + Endorsements */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms",
            }}
          >
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
              A practical guide to building trust, attention, and authentic
              conversations in modern marketing. Learn the strategies Adam uses
              to help brands reach millions through organic marketing and real
              human connection.
            </p>

            <a
              href="https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-12"
            >
              Get the Book
            </a>

            {/* Endorsements */}
            <div className="pt-10 border-t border-white/15">
              <p className="eyebrow text-white/70 mb-6">What People Are Saying</p>

              <div className="relative min-h-[220px]">
                {ENDORSEMENTS.map((endorsement, i) => (
                  <div
                    key={endorsement.name}
                    className="absolute inset-0"
                    style={{
                      opacity: i === activeEndorsement ? 1 : 0,
                      transform: i === activeEndorsement ? "translateY(0)" : "translateY(8px)",
                      transition: "all 600ms ease-out",
                      pointerEvents: i === activeEndorsement ? "auto" : "none",
                    }}
                  >
                    <Quote size={28} className="text-[#FFC500] mb-4" />
                    <p className="font-heading text-white text-xl sm:text-2xl leading-snug italic mb-6">
                      &ldquo;{endorsement.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {endorsement.name}
                      </p>
                      <p className="text-white/50 text-sm">{endorsement.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() =>
                    setActiveEndorsement(
                      (prev) =>
                        (prev - 1 + ENDORSEMENTS.length) % ENDORSEMENTS.length
                    )
                  }
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Previous endorsement"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {ENDORSEMENTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveEndorsement(i)}
                      className="h-px transition-all duration-300"
                      style={{
                        width: i === activeEndorsement ? "32px" : "16px",
                        backgroundColor:
                          i === activeEndorsement ? "#FFC500" : "rgba(255,255,255,0.25)",
                      }}
                      aria-label={`Go to endorsement ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActiveEndorsement(
                      (prev) => (prev + 1) % ENDORSEMENTS.length
                    )
                  }
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Next endorsement"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div
          ref={videoRef}
          className="mt-20 lg:mt-28"
          style={{
            opacity: videoVisible ? 1 : 0,
            transform: videoVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow text-white">Watch the Interview</span>
            <span className="h-px flex-1 bg-white/15" />
          </div>
          <div className="max-w-5xl">
            <div
              className="relative rounded-md overflow-hidden border border-white/15"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/etR40KhPsV8?start=321&rel=0&modestbranding=1"
                title="Conversational Marketing with Adam Loomis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
