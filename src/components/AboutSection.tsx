/*
 * About Section — The Entrepreneur Behind the Work
 * Design: Text-heavy narrative section with subtle gold accents
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS } from "@/lib/constants";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div ref={ref} className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image column */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div className="sticky top-28">
                <img
                  src={ASSETS.aboutSelfie}
                  alt="Adam Loomis"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-2xl border border-white/10"
                />
                <div className="gold-line mt-6" />
              </div>
            </div>

            {/* Text column */}
            <div
              className="lg:col-span-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
              }}
            >
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                The Story
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
                The Entrepreneur
                <br />
                Behind the Work
              </h2>

              <div className="space-y-6 text-white/55 text-base leading-[1.8]">
                <p>
                  Adam Loomis started his marketing journey with a simple
                  question from a friend who owned a cigar shop: "Do you know
                  anything about social media?" That honest beginning — no
                  formal training, no playbook, just a willingness to figure it
                  out — set the foundation for everything that followed.
                </p>
                <p>
                  Over the past two decades, Adam has worked with hundreds of
                  businesses and entrepreneurs, from local restaurants to
                  national brands, helping them grow through organic marketing
                  strategies that prioritize real human connection over paid
                  advertising. His results speak for themselves — reaching over
                  300 million people on social media, all through authentic
                  engagement and conversational marketing.
                </p>
                <p>
                  What sets Adam apart is his belief that marketing should be
                  rooted in genuine conversation. He's not interested in hype or
                  shortcuts. His approach is practical, direct, and built on a
                  simple truth:{" "}
                  <span className="text-white font-medium">
                    people buy from people they like and trust.
                  </span>
                </p>
                <p>
                  Driven by faith, purpose, and a deep commitment to helping
                  others succeed, Adam continues to share his knowledge through
                  speaking, his podcast (where he sings, tells stories, and
                  encourages people to keep going), his book, and one-on-one
                  strategy sessions. His mission is straightforward — help
                  business owners and entrepreneurs build something meaningful
                  through marketing that actually works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
