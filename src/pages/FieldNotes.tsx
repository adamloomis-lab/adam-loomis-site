/*
 * My Thoughts — index of Adam's writing.
 * Design: "Editorial Authority" — magazine contents list, hairline rows.
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { POSTS } from "@/lib/thoughts";
import { ArrowRight } from "lucide-react";

export default function FieldNotes() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
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
          <span className="eyebrow-muted">My Thoughts</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">My Thoughts</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
            </div>
            <h1 className="display-serif display-hero text-[#0A0A0A] mb-6">
              Thoughts, <span className="italic font-light text-[#6E6E6E]">written down.</span>
            </h1>
            <p className="text-[#0A0A0A]/80 text-lg lg:text-xl leading-relaxed">
              Notes on marketing, faith, and building a life worth living.
              Honest words meant to encourage you and move you toward what God
              has called you to do.
            </p>
          </div>
        </div>
      </section>

      {/* Contents list */}
      <main className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow-muted mb-8">
              {POSTS.length} {POSTS.length === 1 ? "entry" : "entries"}
            </p>

            <div className="border-t border-[#0A0A0A]">
              {POSTS.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/my-thoughts/${post.slug}`}
                  className="group block py-10 border-b border-[#E5E5E5] transition-colors hover:bg-[#FAFAFA]"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                    <div className="lg:col-span-2">
                      <span className="eyebrow-muted tabular-nums">
                        No. {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="lg:col-span-10">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                        <span className="eyebrow text-[#0A0A0A]">
                          {post.category}
                        </span>
                        <span className="eyebrow-muted">{post.date}</span>
                        <span className="eyebrow-muted">
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className="font-heading text-3xl sm:text-4xl text-[#0A0A0A] mb-3 leading-tight group-hover:underline underline-offset-[6px] decoration-1">
                        {post.title}
                      </h2>
                      <p className="text-[#6E6E6E] text-lg leading-relaxed max-w-2xl mb-5">
                        {post.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A0A0A]">
                        Read it
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

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
