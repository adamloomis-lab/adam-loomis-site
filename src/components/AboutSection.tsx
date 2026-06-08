/*
 * About Section — Editorial profile
 * Design: "Editorial Authority" — long-read article column with byline
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS } from "@/lib/constants";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="eyebrow">The Profile</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Long Read</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Image + byline */}
            <aside
              className="lg:col-span-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div className="lg:sticky lg:top-28">
                <img
                  src={ASSETS.aboutSelfie}
                  alt="Adam Loomis"
                  className="w-full rounded-md mb-6"
                />
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="eyebrow-muted mb-2">Subject</p>
                  <p className="font-heading text-2xl text-[#0A0A0A] mb-3">Adam Loomis</p>
                  <p className="text-[#6E6E6E] text-[14px] leading-relaxed">
                    Marketing strategist, speaker, podcast host, and author based in Northeast Ohio.
                  </p>
                </div>
              </div>
            </aside>

            {/* Article column */}
            <article
              className="lg:col-span-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
              }}
            >
              <h2 className="display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] mb-10 leading-[1.05]">
                The entrepreneur <span className="italic font-light text-[#6E6E6E]">behind the work.</span>
              </h2>

              <div className="space-y-7 text-[#0A0A0A]/85 text-[17px] leading-[1.75]">
                <p className="first-letter:font-heading first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0A0A0A]">
                  Adam Loomis started his marketing journey with a simple
                  question from a friend who owned a cigar shop: &ldquo;Do you know
                  anything about social media?&rdquo; That honest beginning &mdash; no
                  formal training, no playbook, just a willingness to figure it
                  out &mdash; set the foundation for everything that followed.
                </p>
                <p>
                  Over the past two decades, Adam has worked with hundreds of
                  businesses and entrepreneurs, from local restaurants to
                  national brands, helping them grow through organic marketing
                  strategies that prioritize real human connection over paid
                  advertising. His results speak for themselves &mdash; reaching over
                  300 million people on social media, all through authentic
                  engagement and conversational marketing.
                </p>
                <p>
                  What sets Adam apart is his belief that marketing should be
                  rooted in genuine conversation. He&apos;s not interested in hype or
                  shortcuts. His approach is practical, direct, and built on a
                  simple truth:{" "}
                  <span className="text-[#0A0A0A] font-semibold underline decoration-[#FFC500] decoration-4 underline-offset-4">
                    people buy from people they like and trust.
                  </span>
                </p>
                <p>
                  Driven by faith, purpose, and a deep commitment to helping
                  others succeed, Adam continues to share his knowledge through
                  speaking, his podcast (where he sings, tells stories, and
                  encourages people to keep going), his book, and one-on-one
                  strategy sessions. His mission is straightforward &mdash; help
                  business owners and entrepreneurs build something meaningful
                  through marketing that actually works.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
