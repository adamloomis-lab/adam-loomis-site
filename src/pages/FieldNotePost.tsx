/*
 * Field Note — single post.
 * Design: "Editorial Authority" — long-read reader with progress bar.
 */
import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { ASSETS } from "@/lib/constants";
import { getPost, POSTS } from "@/lib/thoughts";
import PostBody from "@/components/PostBody";
import NotFound from "@/pages/NotFound";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setPct(total > 0 ? Math.min(100, (doc.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 h-[3px] z-[55]">
      <div
        className="h-full bg-[#FFC500] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function FieldNotePost() {
  const [, params] = useRoute("/field-notes/:slug");
  const post = params ? getPost(params.slug) : undefined;

  if (!post) return <NotFound />;

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <ReadingProgress />

      {/* Masthead */}
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
          <Link
            href="/field-notes"
            className="flex items-center gap-2 eyebrow-muted hover:text-[#0A0A0A] transition-colors"
          >
            <ArrowLeft size={14} />
            Field Notes
          </Link>
        </div>
      </header>

      {/* Article header */}
      <section className="pt-16 lg:pt-24 pb-10 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="max-w-[680px] mx-auto">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-8">
              <span className="eyebrow text-[#0A0A0A]">{post.category}</span>
              <span className="eyebrow-muted">{post.date}</span>
              <span className="eyebrow-muted">{post.readingTime}</span>
            </div>
            <h1 className="display-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-[#0A0A0A] mb-6 leading-[1.04]">
              {post.title}
            </h1>
            <p className="font-heading italic text-xl lg:text-2xl text-[#6E6E6E] leading-snug">
              {post.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <img
                src={ASSETS.aboutSelfie}
                alt="Adam Loomis"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-[#0A0A0A] leading-none mb-1">
                  Adam Loomis
                </p>
                <p className="eyebrow-muted">Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <main className="py-16 lg:py-20">
        <div className="container">
          <article className="max-w-[680px] mx-auto">
            <PostBody blocks={post.blocks} />
          </article>
        </div>
      </main>

      {/* More to read */}
      {others.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <span className="eyebrow">More Field Notes</span>
                <span className="h-px flex-1 bg-[#E5E5E5]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/field-notes/${p.slug}`}
                    className="group block p-6 bg-white border border-[#E5E5E5] rounded-md hover:border-[#0A0A0A] transition-colors"
                  >
                    <p className="eyebrow-muted mb-3">
                      {p.category} &middot; {p.readingTime}
                    </p>
                    <h3 className="font-heading text-xl text-[#0A0A0A] mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#6E6E6E] text-[14px] leading-relaxed">
                      {p.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back CTA */}
      <section className="py-16 border-t border-[#E5E5E5]">
        <div className="container text-center">
          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 btn-ghost"
          >
            All Field Notes
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
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
