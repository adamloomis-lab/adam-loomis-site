/*
 * My Thoughts Section (Homepage) — highlights Adam's writing.
 * Design: "Editorial Authority" — paper background, featured latest post.
 * Pulls from POSTS so the newest entry always leads.
 */
import { Link } from "wouter";
import { POSTS } from "@/lib/thoughts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function MyThoughtsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const [featured, ...rest] = POSTS;
  if (!featured) return null;
  const more = rest.slice(0, 2);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div
          className="mb-14 max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">My Thoughts</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Writing</span>
          </div>
          <h2 className="display-serif display-section text-[#0A0A0A] mb-6">
            Words meant to <span className="italic font-light text-[#6E6E6E]">encourage you.</span>
          </h2>
          <p className="text-[#0A0A0A]/75 text-lg leading-relaxed">
            Notes on marketing, faith, and building a life worth living. Honest
            words when you need them.
          </p>
        </div>

        {/* Featured latest post */}
        <Link
          href={`/my-thoughts/${featured.slug}`}
          className="group block border-t border-[#0A0A0A] py-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms",
          }}
        >
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
            <div className="lg:col-span-3">
              <span className="eyebrow-muted">Latest</span>
            </div>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                <span className="eyebrow text-[#0A0A0A]">{featured.category}</span>
                <span className="eyebrow-muted">{featured.date}</span>
                <span className="eyebrow-muted">{featured.readingTime}</span>
              </div>
              <h3 className="display-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#0A0A0A] mb-4 leading-[1.08] group-hover:underline underline-offset-[6px] decoration-1">
                {featured.title}
              </h3>
              <p className="text-[#6E6E6E] text-lg leading-relaxed max-w-2xl mb-6">
                {featured.subtitle}
              </p>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0A0A0A]">
                Read it
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </Link>

        {/* Additional posts (only once there are more) */}
        {more.length > 0 && (
          <div className="border-t border-[#E5E5E5]">
            {more.map((post) => (
              <Link
                key={post.slug}
                href={`/my-thoughts/${post.slug}`}
                className="group flex items-baseline gap-6 py-6 border-b border-[#E5E5E5] transition-colors hover:bg-white"
              >
                <span className="eyebrow-muted shrink-0 hidden sm:block w-[68px]">
                  {post.date}
                </span>
                <span className="font-heading text-xl text-[#0A0A0A] flex-1 group-hover:underline underline-offset-4">
                  {post.title}
                </span>
                <ArrowRight
                  size={16}
                  className="text-[#6E6E6E] shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        )}

        {/* All thoughts CTA */}
        <div
          className="mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 800ms ease 400ms",
          }}
        >
          <Link href="/my-thoughts" className="btn-ghost">
            Read all my thoughts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
