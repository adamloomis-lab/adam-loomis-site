/*
 * Stats Section — Animated counters that count up on scroll
 * Design: Full-width dark band with large gold numbers
 * Counters: 20+ years, 100s clients, 300M+ reach
 */
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

function StatItem({
  end,
  suffix,
  label,
  isVisible,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(end, 2200, isVisible);

  return (
    <div
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      <div className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold gold-gradient-text mb-3 tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-white/40 text-sm sm:text-base tracking-[0.15em] uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.statsBg}
          alt="Marketing strategy results background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 gold-line" />
      <div className="absolute bottom-0 left-0 right-0 gold-line" />

      <div ref={ref} className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <StatItem
            end={20}
            suffix="+"
            label="Years of Experience"
            isVisible={isVisible}
            delay={0}
          />
          <StatItem
            end={100}
            suffix="s"
            label="Clients Served"
            isVisible={isVisible}
            delay={150}
          />
          <StatItem
            end={300}
            suffix="M+"
            label="Social Media Reach"
            isVisible={isVisible}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
