/*
 * Podcast Section — Mondays with Adam
 * Design: "Editorial Authority" — paper alt background, episode tile + artwork
 */
import { ASSETS, SOCIAL_LINKS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PodcastSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="podcast" className="relative py-24 lg:py-32 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        {/* Section masthead */}
        <div
          className="mb-16 max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">The Podcast</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">Weekly &middot; Mondays</span>
          </div>
          <h2 className="display-serif display-section text-[#0A0A0A] mb-6">
            Mondays with Adam.
          </h2>
          <p className="text-[#0A0A0A]/75 text-lg leading-relaxed">
            More than a marketing show &mdash; Adam sings, tells stories, shares
            encouragement, and brings the kind of energy that makes your Monday
            better. Expect real conversations, inspiration, and a whole lot of
            fun.
          </p>
        </div>

        {/* Artwork + Apple embed + listen-on row */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Podcast artwork tile */}
          <div
            className="lg:col-span-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
            }}
          >
            <div className="bg-[#64D5FF]/15 border border-[#E5E5E5] rounded-md p-6">
              <img
                src={ASSETS.podcastImg}
                alt="Mondays with Adam Podcast cover art"
                className="w-full rounded-sm mb-5"
              />
              <p className="eyebrow-muted mb-2">Tile</p>
              <h3 className="font-heading text-xl text-[#0A0A0A] leading-snug">
                Mondays with Adam &mdash; the weekly show
              </h3>
            </div>
          </div>

          {/* Apple embed + listen options */}
          <div
            className="lg:col-span-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms",
            }}
          >
            <div className="rounded-md overflow-hidden border border-[#E5E5E5] bg-white p-1">
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="175"
                style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.podcasts.apple.com/us/podcast/mondays-with-adam-episode-78/id1737452204?i=1000760288909"
                title="Mondays with Adam Podcast on Apple Podcasts"
                loading="lazy"
              />
            </div>

            <div className="mt-8 grid sm:grid-cols-3 border-t border-[#E5E5E5]">
              {[
                { href: "https://podcasts.apple.com/us/podcast/mondays-with-adam/id1737452204", label: "Apple Podcasts" },
                { href: SOCIAL_LINKS.spotify, label: "Spotify" },
                { href: SOCIAL_LINKS.youtube, label: "YouTube" },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-1 py-5 border-b sm:border-r last:border-r-0 border-[#E5E5E5] hover:bg-white transition-colors"
                >
                  <span className="text-[#0A0A0A] font-medium text-[15px]">{p.label}</span>
                  <span className="eyebrow-muted group-hover:text-[#0A0A0A] transition-colors">
                    Listen &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
