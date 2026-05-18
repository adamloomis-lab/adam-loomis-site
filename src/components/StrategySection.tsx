/*
 * Strategy Call Section — Work directly with Adam
 * Design: Centered text with dramatic CTA bg
 */
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap } from "lucide-react";

export default function StrategySection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.ctaBg}
          alt="Strategy session with Adam Loomis background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div ref={ref} className="container relative z-10">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 mb-6">
            <Zap size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              Private Strategy Sessions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Work Directly with Adam
          </h2>

          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Adam offers private strategy sessions for business owners and
            entrepreneurs who want practical marketing direction and clear
            business strategy. Get personalized guidance to grow your brand and
            reach your goals.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
