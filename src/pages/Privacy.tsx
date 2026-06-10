/*
 * Privacy Policy
 * Design: "Editorial Authority" — long-read article
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";

const LAST_UPDATED = "June 10, 2026";

export default function Privacy() {
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
          <span className="eyebrow-muted">Privacy Policy</span>
        </div>
      </header>

      <main className="py-20 lg:py-28">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="eyebrow">Privacy Policy</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
              <span className="eyebrow-muted">Updated {LAST_UPDATED}</span>
            </div>

            <h1 className="display-serif text-5xl sm:text-6xl text-[#0A0A0A] mb-10 leading-[1.05]">
              How we handle <span className="italic font-light text-[#6E6E6E]">your information.</span>
            </h1>

            <p className="text-[#0A0A0A]/80 text-lg leading-[1.75] mb-12">
              This site (adamloomis.online) is operated by Adam Loomis in
              Northeast Ohio, USA. This page explains what we collect, how we
              use it, and how to get in touch about your data.
            </p>

            <div className="space-y-12 text-[#0A0A0A]/85 text-[16px] leading-[1.75]">
              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">What we collect</h2>
                <p className="mb-4">We only collect what you choose to give us:</p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>
                    <strong>Contact form:</strong> name, email, inquiry type,
                    and the message you send. Submitted through Netlify Forms.
                  </li>
                  <li>
                    <strong>Organic Marketing Playbook signup:</strong> first
                    name and email when you download the playbook.
                  </li>
                </ul>
                <p className="mt-4">
                  Our hosting provider (Netlify) automatically logs basic
                  connection data when your browser loads the site &mdash; things
                  like IP, browser type, and which page you requested. That
                  data is held by Netlify under their privacy policy. We do not
                  run advertising trackers, fingerprinting, or third-party
                  analytics on this site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">How we use it</h2>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>To reply to your message.</li>
                  <li>To send you the playbook you signed up for.</li>
                  <li>
                    To occasionally email you about Adam&apos;s work &mdash;
                    book releases, podcast episodes, speaking news &mdash; only
                    if you signed up for the playbook. You can unsubscribe at
                    any time.
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your information with anyone.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Service providers</h2>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>
                    <strong>Netlify</strong> &mdash; hosts the site and stores
                    form submissions.
                  </li>
                  <li>
                    <strong>Adam&apos;s email</strong> &mdash; we read every
                    form submission directly.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Your rights</h2>
                <p className="mb-4">You can ask us at any time to:</p>
                <ul className="space-y-3 border-l border-[#E5E5E5] pl-5">
                  <li>Tell you what data we have about you.</li>
                  <li>Delete your data from our systems.</li>
                  <li>Stop emailing you (just reply to any email or write us).</li>
                </ul>
                <p className="mt-4">
                  Email{" "}
                  <a
                    href="mailto:adam@adamloomis.online"
                    className="text-[#0A0A0A] underline decoration-[#FFC500] decoration-2 underline-offset-4"
                  >
                    adam@adamloomis.online
                  </a>{" "}
                  and we&apos;ll take care of it within a reasonable time.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Cookies</h2>
                <p>
                  We use a small number of essential cookies for things like
                  remembering that you&apos;ve dismissed a banner. We do not
                  use advertising or cross-site tracking cookies. If your
                  browser blocks cookies entirely, most of the site will still
                  work fine.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Children</h2>
                <p>
                  This site is not directed at children under 13. We do not
                  knowingly collect data from children.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-[#0A0A0A] mb-4">Changes to this policy</h2>
                <p>
                  If we change this policy, we will update the &ldquo;Last
                  updated&rdquo; date at the top. Significant changes will be
                  flagged on the homepage.
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
