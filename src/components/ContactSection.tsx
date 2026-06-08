/*
 * Contact Section — Editorial inquiry form
 * Design: "Editorial Authority" — light, hairline inputs, restrained
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send } from "lucide-react";
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

  const submitMutation = useNetlifyForm<{
    name: string;
    email: string;
    inquiryType: string;
    message: string;
  }>("contact", {
    onSuccess: () => {
      const firstName = formData.name.split(" ")[0];
      toast.success(
        `Thanks, ${firstName}! Your message has been sent. Adam will get back to you soon.`
      );
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

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#0A0A0A] focus:outline-none transition-colors text-[15px]";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="container">
        <div className="max-w-4xl mx-auto">
          <div
            className="mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="eyebrow">Get In Touch</span>
              <span className="h-px flex-1 bg-[#E5E5E5]" />
            </div>
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] mb-6 leading-[1.05]">
              Let&apos;s build something <span className="italic font-light text-[#6E6E6E]">meaningful.</span>
            </h2>
            <p className="text-[#0A0A0A]/70 text-lg max-w-2xl">
              Have a question or want to work together? Fill out the form and Adam will respond personally.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms",
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="eyebrow-muted block mb-1">
                  01 &middot; Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow-muted block mb-1">
                  02 &middot; Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="eyebrow-muted block mb-1">
                03 &middot; Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className={`${inputClass} appearance-none`}
              >
                <option value="">Select an option</option>
                <option value="Speaking Engagement">Speaking Engagement</option>
                <option value="Strategy Call">Strategy Call</option>
                <option value="Marketing Consultation">Marketing Consultation</option>
                <option value="Podcast Collaboration">Podcast Collaboration</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="eyebrow-muted block mb-1">
                04 &middot; Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell Adam about your project or question..."
              />
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="eyebrow-muted">
                Replies usually within 48 hours
              </p>
              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="btn-primary disabled:opacity-50"
              >
                {submitMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
