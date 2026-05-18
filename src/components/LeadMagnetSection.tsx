/*
 * Lead Magnet Section — Email capture for Organic Marketing Playbook
 * Design: Subtle dark section with gold border card
 * Submits email to DB, notifies Adam, and redirects to thank-you page with instant download
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Download, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNetlifyForm } from "@/lib/netlifyForm";

export default function LeadMagnetSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [, navigate] = useLocation();

  const subscribeMutation = useNetlifyForm<{ name: string; email: string }>("playbook", {
    onSuccess: () => {
      const firstName = name.trim().split(" ")[0];
      setName("");
      setEmail("");
      navigate(`/playbook-thank-you?name=${encodeURIComponent(firstName)}`);
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    subscribeMutation.mutate({ name: name.trim(), email: email.trim() });
  };

  return (
    <section className="relative py-20 lg:py-24 bg-black">
      <div ref={ref} className="container">
        <div
          className="max-w-3xl mx-auto text-center p-8 lg:p-12 rounded-xl border border-[#D4AF37]/12 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/8 mb-6">
            <Download size={24} className="text-[#D4AF37]" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            The Organic Marketing Playbook
          </h3>
          <p className="text-white/45 text-base mb-8 max-w-lg mx-auto">
            Learn the simple strategies Adam uses to help brands grow through
            organic marketing and real conversations online.
          </p>

          <form
            name="playbook"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input type="hidden" name="form-name" value="playbook" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              disabled={subscribeMutation.isPending}
              className="sm:w-36 px-4 py-3 bg-[#080808] border border-white/8 rounded text-white placeholder:text-white/18 focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              disabled={subscribeMutation.isPending}
              className="flex-1 px-4 py-3 bg-[#080808] border border-white/8 rounded text-white placeholder:text-white/18 focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={subscribeMutation.isPending}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {subscribeMutation.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Get It Free
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
