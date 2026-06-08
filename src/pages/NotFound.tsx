/*
 * Not Found — 404
 * Design: "Editorial Authority" — light, hairline, restrained
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col">
      <header className="py-6 border-b border-[#E5E5E5]">
        <div className="container">
          <Link href="/">
            <img src={ASSETS.logo} alt="Adam Loomis" className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow-muted mb-6">Error 404</p>
            <h1 className="display-serif text-6xl sm:text-7xl lg:text-[8rem] text-[#0A0A0A] mb-6 leading-none">
              Page <span className="italic font-light text-[#6E6E6E]">not found.</span>
            </h1>
            <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-10 max-w-md mx-auto">
              The page you are looking for does not exist. It may have been moved or deleted.
            </p>
            <Link href="/" className="btn-primary inline-flex">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container text-center">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
