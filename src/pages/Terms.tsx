/*
 * Terms of Service
 * Design: "Editorial Authority" — long-read article
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";

const LAST_UPDATED = "June 10, 2026";

export default function Terms() {
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
          <span className="eyebrow-muted">Terms of Service</span>
        </div>
      </header>

      <main className="py-20 lg:py-28">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="eyebrow">Terms of Service</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
              <span className="eyebrow-muted">Updated {LAST_UPDATED}</span>
            </div>

            <h1 className="display-serif text-5xl sm:text-6xl text-[#0A0A0A] mb-10 leading-[1.05]">
              The fine print, <span className="italic font-light text-[#6E6E6E]">in plain English.</span>
            </h1>

            <p className="text-[#0A0A0A]/80 text-lg leading-[1.75] mb-12">
              Welcome. By using this website (adamloomis.online), you agree to
              these terms. If you don&apos;t agree, please don&apos;t use the
              site.
            </p>

            <div className="space-y-12 text-[#0A0A0A]/85 text-[16px] leading-[1.75]">
              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Who we are</h2>
                <p>
                  This site is operated by Adam Loomis, based in Northeast Ohio,
                  USA.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">What this site is for</h2>
                <p className="mb-4">This site exists to:</p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>Share Adam&apos;s writing, speaking, and podcasts.</li>
                  <li>Promote his books, which are sold on Amazon.</li>
                  <li>
                    Let you sign up for the lead magnet and contact Adam
                    directly.
                  </li>
                </ul>
                <p className="mt-4">
                  You may read, share, and link to the content here. Please
                  don&apos;t copy and republish it as your own.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">What we don&apos;t promise</h2>
                <p className="mb-4">
                  The site is provided as-is. We do our best, but:
                </p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>
                    The content is not legal, financial, medical, or business
                    advice for your specific situation. Marketing strategy is
                    not a one-size-fits-all guarantee.
                  </li>
                  <li>
                    We can&apos;t guarantee the site will always be online,
                    accurate, or error-free.
                  </li>
                  <li>
                    External links go to third-party sites. What happens on
                    those sites is governed by their own terms.
                  </li>
                </ul>
                <p className="mt-4">
                  If you act on something you read here, you do so at your own
                  risk. To the fullest extent permitted by law, Adam Loomis is
                  not liable for damages arising from your use of this site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Our content</h2>
                <p>
                  All content on this site &mdash; the writing, the design, the
                  photography, the audio and video &mdash; is owned by Adam
                  Loomis unless otherwise noted. You may link to it, quote
                  short passages with attribution, and share what fits your
                  audience. Please don&apos;t lift whole pieces or claim them
                  as your own.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Books and external products</h2>
                <p>
                  Books mentioned here (Simply Visible, Conversational
                  Marketing) are sold on Amazon. Once you click through to
                  Amazon, Amazon&apos;s terms and policies apply &mdash; not
                  ours.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Governing law</h2>
                <p>
                  These terms are governed by the laws of the State of Ohio,
                  USA. Any dispute related to this site will be resolved in the
                  courts of Ohio.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Changes to these terms</h2>
                <p>
                  We may update these terms from time to time. The current
                  version always lives at /terms with the &ldquo;Last
                  updated&rdquo; date above.
                </p>
              </section>

              <section className="pt-8 border-t border-[#E5E5E5]">
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Questions?</h2>
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
