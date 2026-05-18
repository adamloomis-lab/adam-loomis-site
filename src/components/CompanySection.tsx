/*
 * Company Section — Adam Loomis Marketing
 * Design: Premium dark section showcasing the marketing firm
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function CompanySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="company" className="relative py-24 lg:py-32 bg-[#050505]">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div ref={ref} className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Logo & Visual */}
            <div
              className="flex flex-col items-center lg:items-start"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div className="relative w-full max-w-sm">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-2xl blur-3xl" />
                <div className="relative p-8 lg:p-12 rounded-2xl border border-white/6 bg-gradient-to-br from-white/[0.03] to-transparent">
                  <img
                    src={ASSETS.almLogo}
                    alt="Adam Loomis Marketing"
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>

            {/* Right — Content */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition:
                  "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
              }}
            >
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                The Firm
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Adam Loomis
                <br />
                Marketing
              </h2>
              <p className="text-[#D4AF37]/80 text-lg font-medium mb-6">
                Strategic marketing systems for companies ready to scale.
              </p>

              <div className="space-y-5 text-white/55 text-base leading-[1.8] mb-8">
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
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                Visit Adam Loomis Marketing
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
