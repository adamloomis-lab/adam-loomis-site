/*
 * Contact Section — Simple inquiry form
 * Design: Dark form with gold accents, saves to database via tRPC
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail } from "lucide-react";
import { toast } from "sonner";
import { useNetlifyForm } from "@/lib/netlifyForm";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const submitMutation = useNetlifyForm<{ name: string; email: string; inquiryType: string; message: string }>("contact", {
    onSuccess: () => {
      const firstName = formData.name.split(" ")[0];
      toast.success(`Thanks, ${firstName}! Your message has been sent. Adam will get back to you soon.`);
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      inquiryType: formData.inquiryType,
      message: formData.message,
    });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#030303]">
      <div ref={ref} className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail size={18} className="text-[#D4AF37]" />
              <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
                Get In Touch
              </p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Build Something
              <br />
              <span className="gold-gradient-text">Meaningful</span>
            </h2>
            <p className="text-white/45 text-lg">
              Have a question or want to work together? Fill out the form below.
            </p>
          </div>

          {/* Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease-out 0.2s",
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/45 mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-[#080808] border border-white/8 rounded text-white placeholder:text-white/18 focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/45 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-[#080808] border border-white/8 rounded text-white placeholder:text-white/18 focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm text-white/45 mb-2 font-medium"
              >
                What Are You Inquiring About?
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={(e) =>
                  setFormData({ ...formData, inquiryType: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-[#080808] border border-white/8 rounded text-white focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all appearance-none"
              >
                <option value="" className="text-white/30">
                  Select an option
                </option>
                <option value="Speaking Engagement">
                  Speaking Engagement
                </option>
                <option value="Strategy Call">Strategy Call</option>
                <option value="Marketing Consultation">
                  Marketing Consultation
                </option>
                <option value="Podcast Collaboration">
                  Podcast Collaboration
                </option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/45 mb-2 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-[#080808] border border-white/8 rounded text-white placeholder:text-white/18 focus:border-[#D4AF37]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-all resize-none"
                placeholder="Tell Adam about your project or question..."
              />
            </div>

            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[#D4AF37] text-black rounded transition-all duration-300 hover:bg-[#F5D76E] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-50 hover:-translate-y-0.5"
            >
              {submitMutation.isPending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
