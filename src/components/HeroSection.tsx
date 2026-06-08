/*
 * Hero Section — Editorial manifesto
 * Design: "Editorial Authority" — light canvas, serif display, asymmetric grid
 */
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      id="hero"
      className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <div ref={ref} className="container">
        {/* Masthead bar */}
        <div
          className="flex items-center gap-4 mb-12 lg:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="eyebrow">Issue 01</span>
          <span className="h-px flex-1 bg-[#E5E5E5]" />
          <span className="eyebrow-muted">Marketing &middot; Speaking &middot; The Book</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Headline — left, 7 columns */}
          <div className="lg:col-span-7">
            <h1
              className="display-serif text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#0A0A0A] mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
              }}
            >
              Practical marketing
              <br />
              <span className="italic font-light text-[#6E6E6E]">that actually</span> works.
            </h1>

            <p
              className="text-[#0A0A0A]/80 text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms",
              }}
            >
              Adam Loomis is a marketing strategist, speaker, and entrepreneur
              helping businesses grow through organic attention, trust, and real
              connection. His strategies have helped brands reach{" "}
              <span className="text-[#0A0A0A] font-semibold underline decoration-[#FFC500] decoration-4 underline-offset-4">
                hundreds of millions of people online.
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 400ms",
              }}
            >
              <a href="#speaking" className="btn-primary">
                Book Adam to Speak
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Book a Strategy Call
              </a>
            </div>
          </div>

          {/* Portrait — right, 5 columns */}
          <div
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.96)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 350ms",
            }}
          >
            <div className="relative">
              <img
                src={ASSETS.speaking1}
                alt="Adam Loomis speaking on stage"
                className="w-full h-[480px] lg:h-[600px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#FFC500] px-4 py-2">
                <span className="eyebrow text-[#0A0A0A]">On Stage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rail */}
        <div
          className="mt-16 lg:mt-24 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 550ms",
          }}
        >
          <p className="eyebrow-muted">
            Featured in this issue
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#0A0A0A]">
            <a href="#book" className="hover:underline underline-offset-4">The new book &mdash; Simply Visible</a>
            <a href="#podcast" className="hover:underline underline-offset-4">Mondays with Adam podcast</a>
            <a href="#speaking" className="hover:underline underline-offset-4">2026 speaking schedule</a>
          </div>
        </div>
      </div>
    </section>
  );
}
