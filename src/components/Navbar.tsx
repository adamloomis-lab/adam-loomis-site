/*
 * Navbar — Magazine masthead
 * Design: "Editorial Authority" — light background, hairline divider, restrained
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { NAV_LINKS, ASSETS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

function NavItem({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className: string;
  onClick?: () => void;
}) {
  // Route links (/...) use Wouter; hash anchors use plain <a> rooted at "/"
  // so they work from any page (clicking "About" on /books goes home + jumps).
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }
  return (
    <a href={`/${href}`} className={className} onClick={onClick}>
      {label}
    </a>
  );
}

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
        <Link href="/" className="flex items-center gap-3">
          <img
            src={ASSETS.almMonogramDark}
            alt=""
            aria-hidden="true"
            className="h-14 lg:h-16 w-14 lg:w-16 object-contain"
          />
          <img
            src={ASSETS.logo}
            alt="Adam Loomis"
            className="h-7 lg:h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              className="relative text-[16px] font-medium tracking-wide text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors duration-200"
            />
          ))}
          <NavItem
            href="#contact"
            label="Get In Touch"
            className="ml-2 inline-flex items-center px-5 py-2.5 text-[15px] font-semibold bg-[#FFC500] text-[#0A0A0A] rounded transition-all duration-200 hover:bg-[#FFD633]"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0A0A0A]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#E5E5E5] px-6 py-6 space-y-5">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              className="block text-lg font-medium text-[#0A0A0A] hover:text-[#6E6E6E] transition-colors"
              onClick={() => setMobileOpen(false)}
            />
          ))}
          <NavItem
            href="#contact"
            label="Get In Touch"
            className="block mt-4 px-5 py-3.5 text-center text-base font-semibold bg-[#FFC500] text-[#0A0A0A] rounded"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
