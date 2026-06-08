/*
 * Speaking Section — Editorial portfolio
 * Design: "Editorial Authority" — crossfading photo with caption, editorial topic list
 */
import { useState, useEffect } from "react";
import { ASSETS, SPEAKING_TOPICS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function SpeakingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeImage, setActiveImage] = useState(0);

  const speakingImages = [ASSETS.speaking1, ASSETS.speaking2];

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % speakingImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isVisible, speakingImages.length]);

  return (
    <section id="speaking" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="container">
        <div className="flex items-center gap-4 mb-16">
          <span className="eyebrow">Speaking</span>
          <span className="h-px flex-1 bg-[#E5E5E5]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo column */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="relative overflow-hidden rounded-md aspect-[4/3] bg-[#FAFAFA]">
              {speakingImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Adam Loomis speaking at an event ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: activeImage === i ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="eyebrow-muted">
                {String(activeImage + 1).padStart(2, "0")} / {String(speakingImages.length).padStart(2, "0")} &middot; On Stage
              </p>
              <div className="flex gap-2">
                {speakingImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-px transition-all duration-300 ${
                      activeImage === i ? "bg-[#0A0A0A] w-12" : "bg-[#E5E5E5] w-6 hover:bg-[#6E6E6E]"
                    }`}
                    aria-label={`View speaking photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
            }}
          >
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3rem] text-[#0A0A0A] mb-6">
              Book Adam for your <span className="italic font-light text-[#6E6E6E]">next event.</span>
            </h2>

            <p className="text-[#0A0A0A]/75 text-lg leading-relaxed mb-10">
              Adam speaks to entrepreneurs, leaders, and organizations about
              practical marketing strategies that build real attention and trust.
            </p>

            <ul className="space-y-0 border-t border-[#E5E5E5] mb-10">
              {SPEAKING_TOPICS.map((topic, i) => (
                <li
                  key={topic}
                  className="flex items-baseline gap-4 py-4 border-b border-[#E5E5E5]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(12px)",
                    transition: `all 600ms ease-out ${350 + i * 80}ms`,
                  }}
                >
                  <span className="eyebrow-muted text-[10px] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#0A0A0A] text-[15px] leading-snug flex-1">{topic}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Book Adam to Speak
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
