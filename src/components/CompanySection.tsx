/*
 * Company Section — Adam Loomis Marketing
 * Design: "Editorial Authority" — light, restrained, the firm's listing
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function CompanySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="company" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="eyebrow">The Firm</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Logo */}
            <div
              className="lg:col-span-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={ASSETS.almMonogramDark}
                  alt="Adam Loomis Marketing"
                  className="w-full h-auto max-w-[560px]"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="lg:col-span-7"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
              }}
            >
              <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6 leading-[1.05]">
                Adam Loomis <span className="italic font-light text-[#6E6E6E]">Marketing.</span>
              </h2>
              <p className="text-[#0A0A0A] text-xl font-medium mb-8 max-w-xl">
                Strategic marketing systems for companies ready to scale.
              </p>

              <div className="space-y-5 text-[#0A0A0A]/80 text-[16px] leading-[1.75] mb-10 max-w-xl">
                <p>
                  Adam Loomis Marketing is a strategic marketing firm
                  spearheaded by Adam Loomis and supported by an exceptional
                  team of marketers, designers, developers, and media
                  professionals.
                </p>
                <p>
                  With more than 20 years of experience guiding brands and
                  helping companies reach millions of customers through
                  practical marketing strategy.
                </p>
              </div>

              <a
                href="https://www.adamloomismarketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Visit Adam Loomis Marketing
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
