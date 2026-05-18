/*
 * Visible Local Section — Homepage announcement card
 * Links to /visible-local-guide for the free guide download
 * Design: Matches "Midnight Forge" dark theme with gold accents
 */
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function VisibleLocalSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="visible-local" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      <div ref={ref} className="container">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.06]"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(15,17,23,0.95) 40%, rgba(15,17,23,0.98) 100%)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Subtle glow in corner */}
            <div
              className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, rgba(212,175,55,0.08), transparent 70%)",
              }}
            />

            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
                {/* Left — Content */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      <MapPin size={18} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                      New from Adam Loomis Marketing
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                    Introducing{" "}
                    <span className="text-[#D4AF37] italic">Visible Local</span>
                  </h2>

                  <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-3 max-w-xl">
                    Done-for-you local marketing for small businesses who want to
                    stop being invisible online and start being the obvious choice
                    in their market.
                  </p>

                  <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
                    Download the free guide:{" "}
                    <em className="text-white/50">
                      "Your Local Business Is Invisible to AI. Here's What to Do."
                    </em>{" "}
                    -- 7 shifts with a concrete first step for each.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/visible-local-guide"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#e8bf6a] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
                    >
                      <Sparkles size={16} />
                      Get the Free Guide
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                    <a
                      href="https://www.visiblelocal.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold border border-white/10 text-white/60 rounded transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-white/80 hover:bg-white/[0.03]"
                    >
                      Visit visiblelocal.co
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                {/* Right — Visual accent (large icon/badge) */}
                <div className="hidden lg:flex items-center justify-center">
                  <div
                    className="relative w-36 h-36 rounded-2xl border border-[#D4AF37]/15 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
                    }}
                  >
                    <MapPin size={48} className="text-[#D4AF37]/40" />
                    <div className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
