/*
 * His Companies Section — Portfolio of Adam's ventures
 * Design: "Editorial Authority" — hairline tile grid, restrained logos
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

type CompanyKind = "logo" | "wordmark";

type Company = {
  name: string;
  href: string;
  description: string;
  logo?: string;
  kind: CompanyKind;
  /** Optional className override for the logo image (sizing tweaks per asset). */
  logoClass?: string;
};

const COMPANIES: Company[] = [
  {
    name: "Adam Loomis Marketing",
    href: "https://www.adamloomismarketing.com/",
    description: "Strategic marketing systems for companies ready to scale.",
    logo: "/images/companies/alm.webp",
    kind: "logo",
    logoClass: "h-24 lg:h-28",
  },
  {
    name: "Simply Visible",
    href: "https://simplyvisible.online/",
    description: "AI-era visibility and local SEO for small businesses.",
    logo: "/images/companies/simply-visible.svg",
    kind: "logo",
    logoClass: "h-20 lg:h-24",
  },
  {
    name: "GardenReady",
    href: "https://gardenready.co/",
    description: "Professional greenhouse installation and partnership network.",
    logo: "/images/companies/gardenready.webp",
    kind: "logo",
    logoClass: "h-14 lg:h-16",
  },
  {
    name: "YardReady",
    href: "https://yardready.co/",
    description: "On-demand lawn, leaf, and snow care across Northeast Ohio.",
    logo: "/images/companies/yardready.webp",
    kind: "logo",
    logoClass: "h-14 lg:h-16",
  },
  {
    name: "Benchmark Flooring",
    href: "https://benchfloor-xmb7rrxy.manus.space/",
    description: "Northeast Ohio's standard for flooring installation.",
    logo: "/images/companies/benchmark.webp",
    kind: "logo",
    logoClass: "h-16 lg:h-20",
  },
];

export default function HisCompaniesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div
          className="mb-16 max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">His Companies</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Portfolio</span>
          </div>
          <h2 className="display-serif display-section text-[#0A0A0A] mb-6">
            The ventures <span className="italic font-light text-[#6E6E6E]">Adam has built.</span>
          </h2>
          <p className="text-[#0A0A0A]/75 text-lg leading-relaxed max-w-2xl">
            A growing portfolio of brands solving real problems &mdash; from
            strategic marketing to on-demand services for Northeast Ohio.
          </p>
        </div>

        {/* Companies grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-[#E5E5E5]">
          {COMPANIES.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col p-8 lg:p-10 bg-white border-b border-[#E5E5E5] transition-colors duration-300 hover:bg-[#FAFAFA] ${
                i % 2 === 0 ? "sm:border-r" : ""
              } sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(4)]:border-r lg:[&:nth-child(5)]:border-r-0`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                  150 + i * 80
                }ms`,
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="eyebrow-muted">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[#6E6E6E] group-hover:text-[#0A0A0A] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              {/* Logo or wordmark */}
              <div className="flex-1 flex items-center justify-center min-h-[140px] lg:min-h-[160px] mb-8">
                {c.kind === "logo" && c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className={`w-auto object-contain ${c.logoClass ?? "h-16"}`}
                  />
                ) : (
                  <div className="text-center">
                    <p className="display-serif text-3xl lg:text-4xl text-[#0A0A0A] leading-none">
                      Benchmark
                    </p>
                    <p className="eyebrow mt-2">Flooring LLC</p>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#E5E5E5]">
                <h3 className="font-heading text-xl text-[#0A0A0A] mb-2 leading-snug">
                  {c.name}
                </h3>
                <p className="text-[#6E6E6E] text-[14px] leading-relaxed">
                  {c.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
