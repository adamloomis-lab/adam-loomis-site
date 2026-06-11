/*
 * Books — The Adam Loomis Bookshelf
 * Design: "Editorial Authority" — two books, one playbook
 *
 * Sequence:
 *   1. Masthead
 *   2. Hero: "Two books. One playbook." both covers
 *   3. Book 1: Simply Visible (the system)
 *   4. Synthesis: why you need both
 *   5. Book 2: Conversational Marketing (the method)
 *   6. Final CTA: get both books
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ASSETS, ENDORSEMENTS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TiltCard } from "@/components/motion";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const AMAZON_SV_PAPERBACK = "https://www.amazon.com/dp/B0H4Q9PPPW";
const AMAZON_SV_KINDLE =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";
const AMAZON_CM =
  "https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H";

export default function Books() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.05);
  const { ref: svRef, isVisible: svVisible } = useScrollAnimation(0.1);
  const { ref: synRef, isVisible: synVisible } = useScrollAnimation(0.1);
  const { ref: cmRef, isVisible: cmVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

  const [activeEndorsement, setActiveEndorsement] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActiveEndorsement((p) => (p + 1) % ENDORSEMENTS.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

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
          <span className="eyebrow-muted">The Bookshelf</span>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section ref={heroRef} className="py-20 lg:py-28">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <span className="eyebrow">The Books</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Read in order</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Stacked book covers */}
            <div
              className="lg:col-span-6 order-2 lg:order-1"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "scale(1)" : "scale(0.94)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
              }}
            >
              <div className="relative max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 gap-6 lg:gap-10 items-center">
                  <img
                    src={ASSETS.simplyVisibleCover}
                    alt="Simply Visible by Adam Loomis"
                    className="w-full rounded-md"
                    style={{
                      boxShadow:
                        "0 30px 60px -20px rgba(0,0,0,0.22), 0 12px 24px -12px rgba(0,0,0,0.14)",
                    }}
                  />
                  <img
                    src={ASSETS.bookPhoto}
                    alt="Conversational Marketing by Adam Loomis"
                    className="w-full rounded-md mt-12"
                    style={{
                      boxShadow:
                        "0 30px 60px -20px rgba(0,0,0,0.22), 0 12px 24px -12px rgba(0,0,0,0.14)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Headline + intro */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <h1 className="display-serif display-hero text-[#0A0A0A] mb-8">
                Two books. <span className="italic font-light text-[#6E6E6E]">One playbook.</span>
              </h1>
              <p className="text-[#0A0A0A]/85 text-xl leading-relaxed mb-6 max-w-xl">
                <span className="text-[#0A0A0A] font-semibold">Simply Visible</span>{" "}
                is the technical side &mdash; how to get found online in the AI
                era.{" "}
                <span className="text-[#0A0A0A] font-semibold">
                  Conversational Marketing
                </span>{" "}
                is the method &mdash; how to connect, build engagement, and get
                people to stop and listen.
              </p>
              <p className="text-[#0A0A0A]/75 text-lg leading-relaxed max-w-xl">
                Read both, in order, to understand exactly what to do to be
                effective online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Book 1: Simply Visible ─── */}
      <section
        ref={svRef}
        className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]"
      >
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <span className="eyebrow">Book One</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">The System</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div
              className="lg:col-span-5"
              style={{
                opacity: svVisible ? 1 : 0,
                transform: svVisible ? "scale(1)" : "scale(0.94)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
              }}
            >
              <TiltCard className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={ASSETS.simplyVisibleCover}
                  alt="Simply Visible: How Local Businesses Get Found, Trusted, and Chosen in the AI Era by Adam Loomis"
                  className="w-full rounded-md"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px rgba(0,0,0,0.2), 0 12px 24px -12px rgba(0,0,0,0.12)",
                  }}
                />
              </TiltCard>
            </div>

            <div
              className="lg:col-span-7"
              style={{
                opacity: svVisible ? 1 : 0,
                transform: svVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms",
              }}
            >
              <p className="eyebrow-muted mb-5">Now in paperback &amp; Kindle</p>
              <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6 leading-[1.05]">
                Simply <span className="italic font-light text-[#6E6E6E]">Visible.</span>
              </h2>
              <p className="text-[#0A0A0A] text-xl font-medium mb-6 max-w-xl">
                How Local Businesses Get Found, Trusted, and Chosen in the AI Era.
              </p>

              <p className="text-[#0A0A0A]/85 text-lg leading-relaxed mb-8 max-w-2xl">
                Most local businesses are doing great work that nobody can find.
                Simply Visible is the no-fluff guide to fixing that &mdash; how
                Google, AI platforms, and local search actually work today, and
                a step-by-step framework for getting found by the right
                customers at the right moment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={AMAZON_SV_PAPERBACK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Paperback on Amazon
                  <ArrowRight size={16} />
                </a>
                <a
                  href={AMAZON_SV_KINDLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Kindle on Amazon
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  href="/simply-visible/preview"
                  className="text-[#0A0A0A] text-[14px] font-medium underline decoration-[#FFC500] decoration-2 underline-offset-4 hover:decoration-[#0A0A0A] transition-colors"
                >
                  Read a free preview &rarr;
                </Link>
                <Link
                  href="/simply-visible"
                  className="eyebrow-muted hover:text-[#0A0A0A] transition-colors"
                >
                  More about the project &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Synthesis: Why both ─── */}
      <section
        ref={synRef}
        className="py-24 lg:py-32 bg-[#0A0A0A] text-white"
      >
        <div className="container">
          <div
            className="max-w-4xl mx-auto"
            style={{
              opacity: synVisible ? 1 : 0,
              transform: synVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="eyebrow text-white">The Marriage</span>
              <span className="h-px flex-1 bg-white/15" />
              <span className="eyebrow-muted text-white/50">Why both</span>
            </div>

            <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-white mb-10 leading-[1.05]">
              You have to <span className="italic font-light text-white/55">marry the two together.</span>
            </h2>

            <div className="space-y-7 text-white/85 text-lg lg:text-xl leading-[1.7]">
              <p>
                <span className="font-semibold text-white">
                  Conversational Marketing
                </span>{" "}
                is the method &mdash; how to connect to people, how to build
                engagement, how to get the hook so they stop and listen to what
                you say and connect and engage with it. Because that&apos;s the
                best chance you have to sell.
              </p>
              <p>
                <span className="font-semibold text-white">Simply Visible</span>{" "}
                is how you do it on the technical side. You have to marry the
                two together in order to be visible online and to be seen.
              </p>
              <p className="text-white font-heading text-2xl lg:text-3xl italic font-light">
                When you&rsquo;re seen and heard, that&rsquo;s the best chance
                we have.
              </p>
              <p className="text-white/70">
                They both go together so well. You need to read both in order
                to understand exactly what to do to be effective online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Book 2: Conversational Marketing ─── */}
      <section
        ref={cmRef}
        className="py-24 lg:py-32 bg-white"
      >
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <span className="eyebrow">Book Two</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">The Method</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div
              className="lg:col-span-7 order-2 lg:order-1"
              style={{
                opacity: cmVisible ? 1 : 0,
                transform: cmVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms",
              }}
            >
              <p className="eyebrow-muted mb-5">On Amazon</p>
              <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-6 leading-[1.05]">
                Conversational <span className="italic font-light text-[#6E6E6E]">Marketing.</span>
              </h2>
              <p className="text-[#0A0A0A] text-xl font-medium mb-6 max-w-xl">
                How to effectively engage customers and build trust on social
                media.
              </p>

              <p className="text-[#0A0A0A]/85 text-lg leading-relaxed mb-8 max-w-2xl">
                The method behind the strategies Adam uses to help brands reach
                millions through organic marketing and real human connection.
                How to connect, build engagement, and get the hook so people
                actually stop and listen.
              </p>

              <a
                href={AMAZON_CM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Buy on Amazon
                <ArrowRight size={16} />
              </a>

              {/* Endorsements */}
              <div className="mt-12 pt-10 border-t border-[#E5E5E5]">
                <p className="eyebrow mb-6">What People Are Saying</p>

                <div className="relative min-h-[220px]">
                  {ENDORSEMENTS.map((endorsement, i) => (
                    <div
                      key={endorsement.name}
                      className="absolute inset-0"
                      style={{
                        opacity: i === activeEndorsement ? 1 : 0,
                        transform:
                          i === activeEndorsement
                            ? "translateY(0)"
                            : "translateY(8px)",
                        transition: "all 600ms ease-out",
                        pointerEvents:
                          i === activeEndorsement ? "auto" : "none",
                      }}
                    >
                      <Quote size={26} className="text-[#FFC500] mb-4" />
                      <p className="font-heading text-[#0A0A0A] text-xl sm:text-2xl leading-snug italic mb-6">
                        &ldquo;{endorsement.quote}&rdquo;
                      </p>
                      <div>
                        <p className="text-[#0A0A0A] font-semibold text-sm">
                          {endorsement.name}
                        </p>
                        <p className="text-[#6E6E6E] text-sm">
                          {endorsement.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() =>
                      setActiveEndorsement(
                        (p) =>
                          (p - 1 + ENDORSEMENTS.length) % ENDORSEMENTS.length
                      )
                    }
                    className="text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors"
                    aria-label="Previous endorsement"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {ENDORSEMENTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveEndorsement(i)}
                        className="h-px transition-all duration-300"
                        style={{
                          width: i === activeEndorsement ? "32px" : "16px",
                          backgroundColor:
                            i === activeEndorsement ? "#0A0A0A" : "#E5E5E5",
                        }}
                        aria-label={`Go to endorsement ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setActiveEndorsement(
                        (p) => (p + 1) % ENDORSEMENTS.length
                      )
                    }
                    className="text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors"
                    aria-label="Next endorsement"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-5 order-1 lg:order-2"
              style={{
                opacity: cmVisible ? 1 : 0,
                transform: cmVisible ? "scale(1)" : "scale(0.94)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms",
              }}
            >
              <TiltCard className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={ASSETS.bookPhoto}
                  alt="Conversational Marketing by Adam Loomis - Book Cover"
                  className="w-full rounded-md"
                  style={{
                    boxShadow:
                      "0 30px 60px -20px rgba(0,0,0,0.2), 0 12px 24px -12px rgba(0,0,0,0.12)",
                  }}
                />
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section
        ref={ctaRef}
        className="py-24 lg:py-32 bg-[#FAFAFA] border-t border-[#E5E5E5]"
      >
        <div className="container">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <p className="eyebrow mb-8">Get Both Books</p>
            <h2 className="display-serif display-section text-[#0A0A0A] mb-6 leading-[1.05]">
              Be seen. <span className="italic font-light text-[#6E6E6E]">Be heard.</span>
            </h2>
            <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-10">
              Read Simply Visible first to fix the technical side. Then read
              Conversational Marketing to build the engagement engine that
              turns visibility into customers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href={AMAZON_SV_PAPERBACK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white border border-[#E5E5E5] rounded-md text-left hover:border-[#0A0A0A] transition-colors"
              >
                <p className="eyebrow-muted mb-2">Book One</p>
                <p className="font-heading text-xl text-[#0A0A0A] mb-2">
                  Simply Visible
                </p>
                <p className="text-[#6E6E6E] text-[14px] mb-4">
                  The technical side.
                </p>
                <span className="text-[#0A0A0A] text-[14px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Buy on Amazon
                  <ArrowRight size={14} />
                </span>
              </a>
              <a
                href={AMAZON_CM}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white border border-[#E5E5E5] rounded-md text-left hover:border-[#0A0A0A] transition-colors"
              >
                <p className="eyebrow-muted mb-2">Book Two</p>
                <p className="font-heading text-xl text-[#0A0A0A] mb-2">
                  Conversational Marketing
                </p>
                <p className="text-[#6E6E6E] text-[14px] mb-4">
                  The method side.
                </p>
                <span className="text-[#0A0A0A] text-[14px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Buy on Amazon
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights
            reserved
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
