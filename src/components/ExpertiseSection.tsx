/*
 * Expertise Section — Four pillars of what Adam teaches
 * Design: Dark cards with gold border glow on hover, staggered reveal
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
    <section id="about" className="relative py-24 lg:py-32 bg-black">
      <div ref={ref} className="container">
        {/* Section Header */}
        <div
          className="text-center mb-16 lg:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Areas of Expertise
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Adam Teaches
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXPERTISE_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-lg bg-[#080808] border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(32px)",
                  transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 120 + 200}ms`,
                }}
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/3 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D4AF37]/8 mb-6 group-hover:bg-[#D4AF37]/15 transition-colors duration-300">
                    {Icon && <Icon size={24} className="text-[#D4AF37]" />}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-[#F5D76E] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
