/*
 * Book Section — Conversational Marketing book showcase + endorsements + video
 * Design: Book photo on left, description + endorsements carousel on right, video below
 */
import { useState, useEffect } from "react";
import { ASSETS, ENDORSEMENTS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";

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
    <section id="book" className="relative py-24 lg:py-32 bg-[#030303]">
      <div ref={ref} className="container">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={18} className="text-[#D4AF37]" />
            <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
              The Book
            </p>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Conversational Marketing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book Image */}
          <div
            className="flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.9)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
            }}
          >
            <div className="relative max-w-sm">
              <div
                className="absolute inset-0 rounded-2xl opacity-25"
                style={{
                  backgroundImage: `url(${ASSETS.bookBg})`,
                  backgroundSize: "cover",
                  filter: "blur(40px)",
                }}
              />
              <img
                src={ASSETS.bookPhoto}
                alt="Conversational Marketing by Adam Loomis - Book Cover"
                className="relative w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Content + Endorsements */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
            }}
          >
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              A practical guide to building trust, attention, and authentic
              conversations in modern marketing. Learn the strategies Adam uses
              to help brands reach millions through organic marketing and real
              human connection.
            </p>

            <a
              href="https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 mb-12"
            >
              Get the Book
            </a>

            {/* Endorsements */}
            <div className="relative">
              <div className="gold-line mb-8" />
              <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                What People Are Saying
              </p>

              <div className="relative min-h-[220px]">
                {ENDORSEMENTS.map((endorsement, i) => (
                  <div
                    key={endorsement.name}
                    className="absolute inset-0"
                    style={{
                      opacity: i === activeEndorsement ? 1 : 0,
                      transform: i === activeEndorsement ? "translateY(0)" : "translateY(8px)",
                      transition: "all 0.6s ease-out",
                      pointerEvents: i === activeEndorsement ? "auto" : "none",
                    }}
                  >
                    <Quote
                      size={24}
                      className="text-[#D4AF37]/25 mb-4"
                    />
                    <p className="text-white/65 text-base leading-relaxed italic mb-6">
                      "{endorsement.quote}"
                    </p>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {endorsement.name}
                      </p>
                      <p className="text-white/35 text-sm">
                        {endorsement.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() =>
                    setActiveEndorsement(
                      (prev) =>
                        (prev - 1 + ENDORSEMENTS.length) % ENDORSEMENTS.length
                    )
                  }
                  className="text-white/25 hover:text-[#D4AF37] transition-colors"
                  aria-label="Previous endorsement"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {ENDORSEMENTS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveEndorsement(i)}
                      className="h-2 rounded-full transition-all duration-400"
                      style={{
                        width: i === activeEndorsement ? "24px" : "8px",
                        backgroundColor: i === activeEndorsement ? "#D4AF37" : "rgba(255,255,255,0.15)",
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
                  className="text-white/25 hover:text-[#D4AF37] transition-colors"
                  aria-label="Next endorsement"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video Embed */}
        <div
          ref={videoRef}
          className="mt-20 lg:mt-28"
          style={{
            opacity: videoVisible ? 1 : 0,
            transform: videoVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play size={18} className="text-[#D4AF37]" />
              <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">
                Watch the Interview
              </p>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Watch Adam Discuss the Strategies Behind{" "}
              <span className="text-[#D4AF37]">Conversational Marketing</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_40px_rgba(212,175,55,0.08)]"
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
