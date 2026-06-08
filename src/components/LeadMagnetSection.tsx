/*
 * Lead Magnet Section — Email capture for Organic Marketing Playbook
 * Design: "Editorial Authority" — paper bg, editorial card, hairline form
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Loader2 } from "lucide-react";
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
    <section className="relative py-20 lg:py-28 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div ref={ref} className="container">
        <div
          className="max-w-5xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="eyebrow">Free Download</span>
            <span className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="eyebrow-muted">PDF &middot; Instant</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2 className="display-serif text-4xl sm:text-5xl text-[#0A0A0A] mb-4 leading-[1.05]">
                The Organic <span className="italic font-light text-[#6E6E6E]">Marketing</span> Playbook.
              </h2>
              <p className="text-[#0A0A0A]/80 text-lg leading-relaxed max-w-xl">
                Learn the simple strategies Adam uses to help brands grow through
                organic marketing and real conversations online.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form
                name="playbook"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white border border-[#E5E5E5] rounded-md p-6"
              >
                <input type="hidden" name="form-name" value="playbook" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div className="space-y-3 mb-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    disabled={subscribeMutation.isPending}
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#0A0A0A] focus:outline-none transition-all disabled:opacity-50 text-[15px]"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    disabled={subscribeMutation.isPending}
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#0A0A0A] focus:outline-none transition-all disabled:opacity-50 text-[15px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {subscribeMutation.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending&hellip;
                    </>
                  ) : (
                    <>
                      Get the Playbook
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="eyebrow-muted text-[10px] mt-4 text-center">
                  No spam &middot; Instant download
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
