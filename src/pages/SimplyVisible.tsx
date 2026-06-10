/*
 * Simply Visible — Project Hub
 * Design: "Editorial Authority" — magazine feature covering the book + podcast + system
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Route,
  Shield,
  Zap,
  Headphones,
  Globe,
} from "lucide-react";

const AMAZON_PAPERBACK =
  "https://www.amazon.com/dp/B0H4Q9PPPW";
const AMAZON_KINDLE =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";
const SIMPLY_VISIBLE_SITE = "https://simplyvisible.online";

function BuyButtons({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className={`space-y-3 ${align === "center" ? "flex flex-col items-center" : ""}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={AMAZON_PAPERBACK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Paperback on Amazon
          <ArrowRight size={16} />
        </a>
        <a
          href={AMAZON_KINDLE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Kindle on Amazon
          <ArrowRight size={16} />
        </a>
      </div>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <Link
          href="/simply-visible/preview"
          className="text-[#0A0A0A] text-[14px] font-medium underline decoration-[#FFC500] decoration-2 underline-offset-4 hover:decoration-[#0A0A0A] transition-colors"
        >
          Read a free preview &rarr;
        </Link>
        <span className="eyebrow-muted">15-min read</span>
      </div>
    </div>
  );
}

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

export default function SimplyVisible() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.1);
  const { ref: takeawayRef, isVisible: takeawayVisible } = useScrollAnimation(0.1);
  const { ref: podcastRef, isVisible: podcastVisible } = useScrollAnimation(0.1);
  const { ref: systemRef, isVisible: systemVisible } = useScrollAnimation(0.1);
  const { ref: authorRef, isVisible: authorVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      {/* ─── Masthead ─── */}
      <header className="py-6 border-b border-[#E5E5E5]">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={ASSETS.almMonogramDark}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <img src={ASSETS.logo} alt="Adam Loomis" className="h-7 w-auto" />
          </Link>
          <span className="eyebrow-muted">A Feature on Simply Visible</span>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <span className="eyebrow">Paperback Now Available</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Book &middot; Podcast &middot; System</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: How Local Businesses Get Found, Trusted, and Chosen in the AI Era by Adam Loomis"
                  className="relative w-full rounded-md"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px rgba(0,0,0,0.2), 0 12px 24px -12px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <h1 className="display-serif text-[2.5rem] sm:text-5xl lg:text-[4.5rem] text-[#0A0A0A] mb-6">
                Your customers <span className="italic font-light text-[#6E6E6E]">are searching.</span>
                <br />
                Are they finding you?
              </h1>
              <p className="text-[#0A0A0A]/80 text-xl leading-relaxed mb-10 max-w-xl">
                The playbook for local business owners who are tired of being
                invisible online &mdash; now available in paperback.
              </p>
              <BuyButtons />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Book Intro ─── */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
        <div ref={introRef} className="container">
          <div
            className="max-w-3xl mx-auto"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <p className="eyebrow-muted mb-8">From the Author</p>
            <p className="text-[#0A0A0A] text-xl lg:text-2xl leading-relaxed mb-8 font-heading font-light italic">
              Most local businesses are doing great work that nobody can find.
              Your competitors are ranking higher. Your phone should be ringing
              more. You know your work is better, but online, nobody knows you
              exist.
            </p>
            <p className="text-[#0A0A0A]/80 text-lg leading-[1.75]">
              <span className="italic">
                Simply Visible: How Local Businesses Get Found, Trusted, and
                Chosen in the AI Era
              </span>{" "}
              is the book that changes that. Written by Adam Loomis, founder of
              Adam Loomis Marketing, this is a practical, no-fluff guide built
              specifically for local business owners navigating today&apos;s
              digital landscape. Whether you are brand new to online visibility
              or you have been at it for years and want to firm up what you
              know, this book meets you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Takeaways ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div ref={takeawayRef} className="container">
          <div
            className="mb-16 max-w-3xl"
            style={{
              opacity: takeawayVisible ? 1 : 0,
              transform: takeawayVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 700ms ease-out",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">Inside the Book</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
            </div>
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A]">
              What you will <span className="italic font-light text-[#6E6E6E]">walk away with.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 border-t border-[#E5E5E5]">
            {TAKEAWAYS.map((item, i) => {
              const Icon = item.icon;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={i}
                  className={`p-8 lg:p-10 border-b border-[#E5E5E5] ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  }`}
                  style={{
                    opacity: takeawayVisible ? 1 : 0,
                    transform: takeawayVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 700ms ease-out ${100 + i * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="eyebrow-muted">Chapter {num}</span>
                    <Icon size={20} className="text-[#0A0A0A]" />
                  </div>
                  <p className="text-[#0A0A0A] text-[17px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── The Simply Visible Podcast ─── */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
        <div ref={podcastRef} className="container">
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: podcastVisible ? 1 : 0,
              transform: podcastVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="eyebrow">The Podcast</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
              <span className="eyebrow-muted">Launching Soon</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-square bg-white border border-[#E5E5E5] rounded-md flex items-center justify-center p-12">
                  <Headphones
                    size={120}
                    strokeWidth={1}
                    className="text-[#0A0A0A]/15"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <h2 className="display-serif text-4xl sm:text-5xl text-[#0A0A0A] mb-6 leading-[1.05]">
                  The Simply Visible <span className="italic font-light text-[#6E6E6E]">podcast.</span>
                </h2>
                <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-6">
                  Going deeper than the book. Real conversations about getting
                  found, building trust, and being chosen in the AI era &mdash;
                  with the local business owners actually doing it.
                </p>
                <p className="text-[#0A0A0A]/70 text-base leading-relaxed mb-8">
                  Episode 01 is in the studio. Once it&apos;s live you&apos;ll
                  be able to listen here on Apple Podcasts, Spotify, and YouTube.
                </p>
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="eyebrow-muted">Status</p>
                  <p className="font-heading text-[#0A0A0A] text-xl mt-2">
                    Coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Simply Visible System ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div ref={systemRef} className="container">
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: systemVisible ? 1 : 0,
              transform: systemVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="eyebrow">The System</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
              <span className="eyebrow-muted">simplyvisible.online</span>
            </div>

            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] mb-8 leading-[1.05] max-w-4xl">
              The methodology <span className="italic font-light text-[#6E6E6E]">behind the book.</span>
            </h2>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <p className="text-[#0A0A0A]/80 text-lg leading-[1.75] mb-6">
                  Simply Visible is the system Adam built to help locally-owned
                  businesses become more discoverable and trustworthy in
                  AI-powered search. It pairs a comprehensive visibility audit
                  with a real-time competitive score, then turns the gaps it
                  finds into a clear plan of action.
                </p>
                <p className="text-[#0A0A0A]/80 text-lg leading-[1.75] mb-10">
                  The book lays out the philosophy. The system puts it to work
                  for your business.
                </p>
                <a
                  href={SIMPLY_VISIBLE_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit simplyvisible.online
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <ul className="lg:col-span-5 border-t border-[#E5E5E5]">
                {[
                  "AI-era visibility audits for local businesses",
                  "Real-time competitive visibility scoring",
                  "Done-for-you site builds and visibility systems",
                  "Built specifically for service-based local businesses",
                ].map((line, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 py-5 border-b border-[#E5E5E5]"
                  >
                    <span className="eyebrow-muted text-[10px] tabular-nums mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#0A0A0A] text-[15px] leading-snug flex-1">
                      {line}
                    </span>
                    <Globe size={14} className="text-[#6E6E6E] mt-1" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About the Author ─── */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
        <div ref={authorRef} className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            <div
              className="lg:col-span-5"
              style={{
                opacity: authorVisible ? 1 : 0,
                transform: authorVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <img
                src={ASSETS.headshot}
                alt="Adam Loomis, author of Simply Visible"
                className="w-full rounded-md"
              />
            </div>

            <div
              className="lg:col-span-7"
              style={{
                opacity: authorVisible ? 1 : 0,
                transform: authorVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
              }}
            >
              <p className="eyebrow-muted mb-4">About the Author</p>
              <h2 className="display-serif text-4xl sm:text-5xl text-[#0A0A0A] mb-8">
                Adam <span className="italic font-light text-[#6E6E6E]">Loomis.</span>
              </h2>
              <p className="text-[#0A0A0A]/80 text-lg leading-[1.75]">
                Adam Loomis has spent years helping local and small businesses
                across Northeast Ohio get found online without spending a dollar
                on ads. His conversational marketing methodology has driven
                organic reach across hundreds of client accounts. Simply Visible
                is the book he wished existed when he started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div ref={ctaRef} className="container">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <p className="eyebrow mb-8">Get the Book</p>
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] mb-6 leading-[1.05]">
              Stop being invisible. <span className="italic font-light text-[#6E6E6E]">Start being chosen.</span>
            </h2>
            <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-10">
              Simply Visible is available now on Amazon in paperback and Kindle.
              Grab your copy and start showing up where your customers are
              looking.
            </p>
            <BuyButtons align="center" />
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights reserved
          </p>
          <Link
            href="/"
            className="eyebrow-muted hover:text-[#0A0A0A] transition-colors"
          >
            &larr; Back to adamloomis.online
          </Link>
        </div>
      </footer>
    </div>
  );
}
