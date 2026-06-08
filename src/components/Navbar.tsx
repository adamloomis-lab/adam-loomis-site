/*
 * Navbar — Magazine masthead
 * Design: "Editorial Authority" — light background, hairline divider, restrained
 */
import { useState, useEffect } from "react";
import { NAV_LINKS, ASSETS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo / Masthead */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={ASSETS.almMonogramDark}
            alt=""
            aria-hidden="true"
            className="h-12 lg:h-14 w-12 lg:w-14 object-contain"
          />
          <img
            src={ASSETS.logo}
            alt="Adam Loomis"
            className="h-7 lg:h-8 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium tracking-wide text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center px-4 py-2 text-[13px] font-semibold bg-[#FFC500] text-[#0A0A0A] rounded transition-all duration-200 hover:bg-[#FFD633]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0A0A0A]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#E5E5E5] px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-[#0A0A0A] hover:text-[#6E6E6E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-5 py-3 text-center text-sm font-semibold bg-[#FFC500] text-[#0A0A0A] rounded"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
