/*
 * Hero Section — Full-viewport cinematic hero
 * Design: Full-width background with crossfading speaking photos
 * Brighter images with smooth fade-to-black at the bottom
 */
import { useState, useEffect } from "react";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const HERO_IMAGES = [ASSETS.speaking1, ASSETS.speaking2];
const CROSSFADE_INTERVAL = 6000;

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, CROSSFADE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Crossfading background images — brighter with less overlay */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          <img
            src={src}
            alt="Adam Loomis speaking on stage"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(1.1)" }}
          />
        </div>
      ))}

      {/* Lighter gradient overlay — just enough for text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Smooth fade-to-black at the bottom — seamless transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Subtle top fade for navbar blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "15%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      />

      <div ref={ref} className="container relative z-10 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="flex items-center min-h-[85vh]">
          {/* Text Content — left aligned, max width for readability */}
          <div className="max-w-2xl">
            <p
              className="text-[#D4AF37] text-sm font-semibold tracking-[0.25em] uppercase mb-5 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
              }}
            >
              Marketing Strategist &bull; Speaker &bull; Author
            </p>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
              }}
            >
              Practical Marketing
              <br />
              <span className="gold-gradient-text">That Actually Works</span>
            </h1>

            <p
              className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s",
              }}
            >
              Adam Loomis is a marketing strategist, speaker, and entrepreneur
              helping businesses grow through organic attention, trust, and real
              connection. His strategies have helped brands reach{" "}
              <span className="text-white font-semibold">
                hundreds of millions of people online.
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s",
              }}
            >
              <a
                href="#speaking"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                Book Adam to Speak
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border border-white/20 text-white rounded transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:-translate-y-0.5"
              >
                Book a Strategy Call
              </a>
            </div>

            <a
              href="#podcast"
              className="inline-flex items-center gap-2 mt-6 text-sm text-white/40 hover:text-[#D4AF37] transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.65s",
              }}
            >
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              Listen to the Podcast
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/20" size={28} />
      </div>
    </section>
  );
}
