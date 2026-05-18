/*
 * Speaking Section — Asymmetric layout with crossfading speaking photos
 * Design: Single image frame on left that fades between two photos, content on right with gold accents
 */
import { useState, useEffect } from "react";
import { ASSETS, SPEAKING_TOPICS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mic, CheckCircle } from "lucide-react";

export default function SpeakingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeImage, setActiveImage] = useState(0);

  const speakingImages = [ASSETS.speaking1, ASSETS.speaking2];

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % speakingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible, speakingImages.length]);

  return (
    <section id="speaking" className="relative py-24 lg:py-32 bg-[#040404]">
      <div ref={ref} className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Crossfading Image */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              {speakingImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Adam Loomis speaking at an event ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: activeImage === i ? 1 : 0 }}
                />
              ))}
              {/* Gold accent corner */}
              <div className="absolute -top-0 -left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-lg z-10" />
              {/* Subtle bottom gradient for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {speakingImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeImage === i
                      ? "bg-[#D4AF37] w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View speaking photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Mic size={18} className="text-[#D4AF37]" />
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
                Speaking
              </p>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Book Adam Loomis for
              <br />
              <span className="gold-gradient-text">Your Next Event</span>
            </h2>

            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Adam speaks to entrepreneurs, leaders, and organizations about
              practical marketing strategies that build real attention and trust.
            </p>

            <div className="space-y-4 mb-10">
              {SPEAKING_TOPICS.map((topic, i) => (
                <div
                  key={topic}
                  className="flex items-start gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `all 0.6s ease-out ${0.4 + i * 0.1}s`,
                  }}
                >
                  <CheckCircle
                    size={18}
                    className="text-[#D4AF37] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/65">{topic}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              Book Adam to Speak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
