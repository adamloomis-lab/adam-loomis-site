/*
 * Strategy Call Section — Editorial CTA strip
 * Design: "Editorial Authority" — paper bg, hairline, restrained CTA
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function StrategySection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative py-20 lg:py-28 bg-white border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        <div
          className="max-w-5xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow">Private Strategy Sessions</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6 leading-[1.05]">
                Work directly <span className="italic font-light text-[#6E6E6E]">with Adam.</span>
              </h2>
              <p className="text-[#0A0A0A]/80 text-lg leading-relaxed max-w-2xl">
                Adam offers private strategy sessions for business owners and
                entrepreneurs who want practical marketing direction and clear
                business strategy. Get personalized guidance to grow your brand and
                reach your goals.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href="#contact" className="btn-primary">
                Book a Strategy Call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
