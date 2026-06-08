/*
 * Simply Visible — Dedicated Book Landing Page
 * Distraction-free layout: logo only, no nav, no footer nav
 * 5 sections: Hero, Book Intro, Takeaways, About Author, Final CTA
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Search,
  Route,
  Shield,
  Zap,
} from "lucide-react";

const AMAZON_URL =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";

/* ─── Buy on Amazon CTA ─── */
function BuyOnAmazon({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className={`space-y-3 ${align === "center" ? "flex flex-col items-center" : ""}`}>
      <a
        href={AMAZON_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded-lg transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
      >
        Buy on Amazon
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
      <p className="text-white/30 text-sm">
        Available now in Kindle and paperback.
      </p>
    </div>
  );
}

/* ─── Takeaway Card ─── */
const TAKEAWAYS = [
  {
    icon: Search,
    text: "A clear understanding of how Google, AI platforms, and local search actually work in 2025 and beyond.",
  },
  {
    icon: Route,
    text: "A step-by-step framework for getting found by the right customers at the right moment.",
  },
  {
    icon: Shield,
    text: "Practical strategies to build trust before a customer ever picks up the phone.",
  },
  {
    icon: Zap,
    text: "The confidence to stop guessing and start executing.",
  },
];

/* ─── Main Page ─── */
export default function SimplyVisible() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.1);
  const { ref: takeawayRef, isVisible: takeawayVisible } = useScrollAnimation(0.1);
  const { ref: authorRef, isVisible: authorVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ─── Header: Logo only ─── */}
      <header className="py-5 border-b border-white/5">
        <div className="container">
          <Link href="/">
            <img
              src={ASSETS.logo}
              alt="Adam Loomis"
              className="h-9 lg:h-11 w-auto brightness-0 invert cursor-pointer"
            />
          </Link>
        </div>
      </header>

      {/* ─── Section 1: Hero ─── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book Cover */}
            <div className="flex justify-center order-1">
              <div className="relative max-w-md w-full">
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.3), transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: The Local Business Playbook for Getting Found, Trusted, and Chosen in the AI Era by Adam Loomis"
                  className="relative w-full rounded-xl"
                  style={{
                    boxShadow:
                      "0 25px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(212,175,55,0.08)",
                  }}
                />
              </div>
            </div>

            {/* Headline + Form */}
            <div className="order-2">
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                Available Now
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Your customers are searching.{" "}
                <span className="text-[#D4AF37]">Are they finding you?</span>
              </h1>
              <p className="text-white/55 text-xl leading-relaxed mb-10">
                The playbook for local business owners who are tired of being
                invisible online is here.
              </p>
              <BuyOnAmazon />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Book Intro ─── */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div ref={introRef} className="container">
          <div
            className="max-w-3xl mx-auto"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="gold-line mb-10" />
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-8">
              Most local businesses are doing great work that nobody can find.
              Your competitors are ranking higher. Your phone should be ringing
              more. You know your work is better, but online, nobody knows you
              exist.
            </p>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed">
              <span className="text-white/80 italic">
                Simply Visible: The Local Business Playbook for Getting Found,
                Trusted, and Chosen in the AI Era
              </span>{" "}
              is the book that changes that. Written by Adam Loomis, founder of
              Adam Loomis Marketing, this is a practical,
              no-fluff guide built specifically for local business owners
              navigating today's digital landscape. Whether you are brand new to
              online visibility or you have been at it for years and want to firm
              up what you know, this book meets you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 3: What You Will Walk Away With ─── */}
      <section className="py-20 lg:py-28 bg-black">
        <div ref={takeawayRef} className="container">
          <div
            className="text-center mb-14"
            style={{
              opacity: takeawayVisible ? 1 : 0,
              transform: takeawayVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              What you will walk away with.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {TAKEAWAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.02] transition-all duration-300"
                  style={{
                    opacity: takeawayVisible ? 1 : 0,
                    transform: takeawayVisible
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `all 0.7s ease-out ${0.1 + i * 0.1}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/15 mb-5">
                    <Icon size={22} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 4: About the Author ─── */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div ref={authorRef} className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Author Photo */}
            <div
              className="flex justify-center"
              style={{
                opacity: authorVisible ? 1 : 0,
                transform: authorVisible ? "scale(1)" : "scale(0.92)",
                transition:
                  "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
              }}
            >
              <div className="relative max-w-sm w-full">
                <div
                  className="absolute inset-0 rounded-2xl opacity-15"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.25), transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />
                <img
                  src={ASSETS.headshot}
                  alt="Adam Loomis, author of Simply Visible"
                  className="relative w-full rounded-2xl border border-white/10"
                  style={{
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
            </div>

            {/* Author Bio */}
            <div
              style={{
                opacity: authorVisible ? 1 : 0,
                transform: authorVisible ? "translateY(0)" : "translateY(32px)",
                transition:
                  "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
              }}
            >
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                About the Author
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Adam Loomis
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Adam Loomis has spent years helping local and small businesses
                across Northeast Ohio get found online without spending a dollar
                on ads. His conversational marketing methodology has driven
                organic reach across hundreds of client accounts. Simply
                Visible is the book he wished existed when he started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Final CTA ─── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Gold-tinted background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(0,0,0,0.95) 50%, rgba(212,175,55,0.05) 100%)",
          }}
        />
        <div className="absolute inset-0 border-t border-b border-[#D4AF37]/15" />

        <div ref={ctaRef} className="container relative">
          <div
            className="max-w-2xl mx-auto text-center"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get the book today.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Simply Visible is available now on Amazon in Kindle and paperback.
              Grab your copy and start showing up where your customers are
              looking.
            </p>
            <BuyOnAmazon align="center" />
          </div>
        </div>
      </section>

      {/* ─── Minimal Footer ─── */}
      <footer className="py-6 border-t border-white/5">
        <div className="container text-center">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Adam Loomis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
