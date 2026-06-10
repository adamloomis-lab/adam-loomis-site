/*
 * Accessibility Statement
 * Design: "Editorial Authority" — long-read article
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";

const LAST_UPDATED = "June 10, 2026";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
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
          <span className="eyebrow-muted">Accessibility</span>
        </div>
      </header>

      <main className="py-20 lg:py-28">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="eyebrow">Accessibility</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
              <span className="eyebrow-muted">Updated {LAST_UPDATED}</span>
            </div>

            <h1 className="display-serif text-5xl sm:text-6xl text-[#0A0A0A] mb-10 leading-[1.05]">
              Built to work <span className="italic font-light text-[#6E6E6E]">for everyone.</span>
            </h1>

            <p className="text-[#0A0A0A]/80 text-lg leading-[1.75] mb-12">
              We want this site to work for everyone &mdash; including people
              who use screen readers, keyboard navigation, or other assistive
              technology.
            </p>

            <div className="space-y-12 text-[#0A0A0A]/85 text-[16px] leading-[1.75]">
              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Our standard</h2>
                <p className="mb-4">
                  We aim to meet{" "}
                  <strong>WCAG 2.1 Level AA</strong> &mdash; the
                  practical baseline for accessible web content. That means:
                </p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>Clear text with generous contrast against backgrounds.</li>
                  <li>Headings in logical order so screen readers can navigate.</li>
                  <li>Alt text on images that carry meaning.</li>
                  <li>Forms with labels and clear focus states.</li>
                  <li>Pages that work using only the keyboard.</li>
                  <li>
                    No motion-only signals &mdash; anything important is also
                    communicated with text.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Where we&apos;re not perfect</h2>
                <p>
                  We&apos;re a small operation and we&apos;re improving
                  continually. Some embedded third-party content (Apple
                  Podcasts player, Amazon book listings, YouTube videos) is
                  controlled by those providers and may not meet our
                  accessibility standard.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Tell us if something breaks</h2>
                <p className="mb-4">
                  If you hit a barrier &mdash; something doesn&apos;t read
                  right, you can&apos;t reach a section by keyboard, or a form
                  doesn&apos;t behave well with your screen reader &mdash;
                  please tell us. Email{" "}
                  <a
                    href="mailto:adam@adamloomis.online"
                    className="text-[#0A0A0A] underline decoration-[#FFC500] decoration-2 underline-offset-4"
                  >
                    adam@adamloomis.online
                  </a>{" "}
                  with:
                </p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>The page (the URL helps).</li>
                  <li>What you were trying to do.</li>
                  <li>What happened instead.</li>
                  <li>
                    The assistive technology you were using (if relevant).
                  </li>
                </ul>
                <p className="mt-4">
                  We&apos;ll respond within a few business days and fix what we
                  can as quickly as possible.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Third-party content</h2>
                <p>
                  Pages here link to Amazon, Apple Podcasts, Spotify, YouTube,
                  and other services. Those services control their own
                  accessibility &mdash; please contact them directly if you
                  encounter issues there.
                </p>
              </section>

              <section className="pt-8 border-t border-[#E5E5E5]">
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Contact</h2>
                <p>Adam Loomis</p>
                <p>
                  <a
                    href="mailto:adam@adamloomis.online"
                    className="text-[#0A0A0A] underline decoration-[#FFC500] decoration-2 underline-offset-4"
                  >
                    adam@adamloomis.online
                  </a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights reserved
          </p>
          <Link href="/" className="eyebrow-muted hover:text-[#0A0A0A] transition-colors">
            &larr; Back to adamloomis.online
          </Link>
        </div>
      </footer>
    </div>
  );
}
