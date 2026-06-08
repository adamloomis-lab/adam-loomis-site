/*
 * Expertise Section — Editorial pillars
 * Design: "Editorial Authority" — numbered grid, hairline cards, no shadows
 */
import { EXPERTISE_PILLARS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, MessageCircle, Crown, MapPin } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  MessageCircle,
  Crown,
  MapPin,
};

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div
          className="mb-16 lg:mb-20 max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">Areas of Expertise</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
          </div>
          <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A]">
            What Adam teaches.
          </h2>
        </div>

        {/* Pillars Grid — 4 columns, numbered, hairline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E5E5E5]">
          {EXPERTISE_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={pillar.title}
                className={`group relative p-8 lg:p-10 border-b border-[#E5E5E5] ${
                  i < 3 ? "lg:border-r" : ""
                } ${i % 2 === 0 ? "sm:border-r" : ""} sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0 transition-colors duration-300 hover:bg-[#FAFAFA]`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 100 + 150}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="eyebrow-muted">No. {num}</span>
                  {Icon && <Icon size={20} className="text-[#0A0A0A]" />}
                </div>
                <h3 className="font-heading text-[1.4rem] font-medium text-[#0A0A0A] mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
