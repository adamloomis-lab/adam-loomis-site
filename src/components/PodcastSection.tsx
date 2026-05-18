/*
 * Podcast Section — Mondays with Adam
 * Design: YouTube featured episode + Spotify embed, podcast artwork, social links
 */
import { ASSETS, SOCIAL_LINKS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Headphones, Play } from "lucide-react";

export default function PodcastSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="podcast" className="relative py-24 lg:py-32 bg-black">
      <div ref={ref} className="container">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Headphones size={18} className="text-[#D4AF37]" />
            <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
              Podcast
            </p>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mondays with Adam
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            More than a marketing show — Adam sings, tells stories, shares
            encouragement, and brings the kind of energy that makes your Monday
            better. Expect real conversations, inspiration, and a whole lot of
            fun.
          </p>
        </div>

        {/* Featured YouTube Episode */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Play size={14} className="text-[#D4AF37]" />
            <p className="text-[#D4AF37]/70 text-xs font-semibold tracking-[0.15em] uppercase">
              Featured Episode
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/8 bg-[#080808]">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/nb9i55siZaY"
                title="Mondays with Adam - Episode 78"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Spotify + Artwork Row */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Podcast Artwork */}
          <div
            className="lg:col-span-2 flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition:
                "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
            }}
          >
            <div className="relative w-64 sm:w-80 lg:w-full max-w-sm">
              <img
                src={ASSETS.podcastImg}
                alt="Mondays with Adam Podcast"
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              {/* Apple Podcasts badge */}
              <a
                href="https://podcasts.apple.com/us/podcast/mondays-with-adam/id1737452204"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4 0 2.807-1.38 5.29-3.496 6.81-.146-.98-.396-2.2-.6-2.83-.204-.63-.612-1.26-.612-1.26s.708-.84.708-2.12c0-1.86-1.2-3.6-1.2-3.6s-.6 1.2-.6 2.4c0 .84.36 1.44.36 1.44s-1.32.12-2.16.12c-.84 0-2.16-.12-2.16-.12s.36-.6.36-1.44c0-1.2-.6-2.4-.6-2.4s-1.2 1.74-1.2 3.6c0 1.28.708 2.12.708 2.12s-.408.63-.612 1.26c-.204.63-.454 1.85-.6 2.83C4.98 17.29 3.6 14.807 3.6 12c0-4.636 3.764-8.4 8.4-8.4z" />
                </svg>
                Listen on Apple Podcasts
              </a>
            </div>
          </div>

          {/* Apple Music Embed + Links */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition:
                "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s",
            }}
          >
            <div className="rounded-xl overflow-hidden border border-white/8 bg-[#080808]">
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="175"
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.podcasts.apple.com/us/podcast/mondays-with-adam-episode-78/id1737452204?i=1000760288909"
                title="Mondays with Adam Podcast on Apple Podcasts"
                loading="lazy"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/8 text-white/60 text-sm hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/8 text-white/60 text-sm hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
