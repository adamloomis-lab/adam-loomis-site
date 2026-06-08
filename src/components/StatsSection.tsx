/*
 * Stats Section — Editorial stat ledger
 * Design: "Editorial Authority" — black band feature, oversized serif numerals
 */
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

function StatItem({
  end,
  suffix,
  label,
  isVisible,
  delay,
  divider,
}: {
  end: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
  divider?: boolean;
}) {
  const count = useCountUp(end, 2200, isVisible);

  return (
    <div
      className={`relative px-4 lg:px-8 py-2 ${divider ? "lg:border-l lg:border-white/15" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      <div className="display-serif text-6xl sm:text-7xl lg:text-[7rem] text-white mb-3 tabular-nums leading-none">
        {count}
        <span className="text-[#FFC500]">{suffix}</span>
      </div>
      <div className="eyebrow text-white/50">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
      <div ref={ref} className="container relative">
        <div className="mb-12 flex items-center gap-4">
          <span className="eyebrow text-white">By the Numbers</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
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
            divider
          />
          <StatItem
            end={300}
            suffix="M+"
            label="Social Media Reach"
            isVisible={isVisible}
            delay={300}
            divider
          />
        </div>
      </div>
    </section>
  );
}
