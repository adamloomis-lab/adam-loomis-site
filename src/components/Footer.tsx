/*
 * Footer — Editorial masthead colophon
 * Design: "Editorial Authority" — light, hairline, restrained
 */
import { ASSETS, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#E5E5E5]">
      <div className="container py-20">
        {/* Big masthead headline */}
        <div className="mb-16 pb-12 border-b border-[#E5E5E5]">
          <p className="eyebrow-muted mb-6">Colophon</p>
          <p className="display-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] max-w-3xl leading-[1.1]">
            Practical marketing, real conversations, and a podcast that makes Mondays better.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Logo + Tagline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={ASSETS.almMonogramDark}
                alt=""
                aria-hidden="true"
                className="h-24 w-24 object-contain"
              />
              <img src={ASSETS.logo} alt="Adam Loomis" className="h-9 w-auto" />
            </div>
            <p className="text-[#6E6E6E] text-[15px] leading-relaxed max-w-sm">
              Marketing strategist, speaker, and entrepreneur helping businesses
              grow through practical organic marketing strategies.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Sections</p>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[#0A0A0A] text-[14px] hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Connect</p>
            <div className="space-y-2">
              {[
                { href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { href: SOCIAL_LINKS.tiktok, label: "TikTok" },
                { href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { href: SOCIAL_LINKS.youtube, label: "YouTube" },
                { href: SOCIAL_LINKS.spotify, label: "Spotify (Podcast)" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-[#0A0A0A] text-[14px]"
                >
                  <span className="group-hover:underline underline-offset-4">{s.label}</span>
                  <span className="eyebrow-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    Open &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="eyebrow-muted">
            &copy; {currentYear} Adam Loomis &middot; All rights reserved
          </p>
          <p className="eyebrow-muted">
            Website by{" "}
            <a
              href="https://www.adamloomismarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A0A] hover:underline underline-offset-4"
            >
              adamloomismarketing.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
