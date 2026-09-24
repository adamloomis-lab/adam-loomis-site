import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// The ALM merch store, run on the Rylon platform. Every dollar of profit goes
// to the two foundations below (Adam, 2026-09-24). Photos are the store's own
// product shots; none is reused elsewhere on this site.
const STORE_URL = "https://almmerch.rylonprinting.com/";
const FOUNDATIONS = [
  { name: "The North Foundation", url: "https://thenorthnonprofit.com", logo: "/images/merch/north-foundation.png" },
  { name: "Guns Garin Memorial Foundation", url: "https://www.gunsgarin.com", logo: "/images/merch/guns-garin.png" },
] as const;
const PHOTOS = [
  { src: "/images/merch/hoodie-graphite.webp", alt: "Graphite fleece hoodie with the AL mark" },
  { src: "/images/merch/long-sleeve-pepper.webp", alt: "Pepper long sleeve tee with the AL mark" },
  { src: "/images/merch/watch-cap-black.webp", alt: "Black Carhartt watch cap with the AL mark" },
] as const;

export default function MerchSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const ease = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  return (
    <section id="merch" className="relative py-24 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden">
      <div ref={ref} className="container">
        <div className="flex items-center gap-4 mb-16">
          <span className="eyebrow bg-[#FFC500] text-[#0A0A0A]">Merch</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className="lg:col-span-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: `all 1s ${ease}` }}
          >
            <h2 className="display-section text-white">The merch is here.</h2>
            <p className="mt-6 max-w-xl text-lg lg:text-xl leading-relaxed text-white/75">
              Hoodies, tees, caps, and tumblers with the AL mark, decorated to order by Rylon Printing in Rittman, Ohio.
            </p>
            <p className="mt-4 max-w-xl text-lg lg:text-xl leading-relaxed text-white">
              Every dollar of profit goes to two foundations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              {FOUNDATIONS.map((f) => (
                <a key={f.name} href={f.url} target="_blank" rel="noopener noreferrer" aria-label={f.name} className="transition-opacity hover:opacity-80">
                  <img src={f.logo} alt={f.name} className="h-14 w-auto lg:h-16" loading="lazy" />
                </a>
              ))}
            </div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 bg-[#FFC500] px-8 py-4 text-[15px] font-semibold text-[#0A0A0A] transition-transform hover:-translate-y-0.5"
            >
              Shop the store
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-3 gap-4 items-end">
            {PHOTOS.map((ph, i) => (
              <a
                key={ph.src}
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block overflow-hidden bg-white/5 ring-1 ring-white/10 transition-transform hover:-translate-y-1 ${i === 1 ? "mb-8" : ""}`}
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)", transition: `all 1s ${ease} ${150 + i * 90}ms` }}
              >
                <img src={ph.src} alt={ph.alt} className="aspect-square w-full object-cover" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
