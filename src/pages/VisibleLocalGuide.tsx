/*
 * Visible Local — Free Guide Landing Page
 * "Your Local Business Is Invisible to AI. Here's What to Do."
 * Sections: Hero + Download, What's Inside (7 insight cards), CTA (Book a Call), Book Teaser, Footer
 * Design: Dark theme with gold accents, matching Adam Loomis brand
 */
import { useState } from "react";
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNetlifyForm } from "@/lib/netlifyForm";
import {
  Mail,
  User,
  CheckCircle,
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";

/* ─── Signup Form (captures name + email, then shows personalized confirmation) ─── */
function GuideSignupForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const signupMutation = useNetlifyForm<{ firstName: string; email: string }>("visible-local-guide", {
    onSuccess: () => {
      setSubmittedName(firstName);
      setSubmitted(true);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    signupMutation.mutate({ firstName: firstName.trim(), email: email.trim() });
  };

  if (submitted) {
    return (
      <div className="space-y-6" style={{ animation: "fadeIn 0.5s ease-out" }}>
        {/* Confirmation banner */}
        <div className="flex items-center justify-center gap-3 bg-[#D4AF37] py-3 px-6 rounded-lg">
          <CheckCircle size={18} className="text-black shrink-0" />
          <span className="text-sm font-semibold text-black tracking-wide">
            You're confirmed, {submittedName}! Your free guide is ready to download.
          </span>
        </div>

        {/* Download card */}
        <div className="bg-[#161920] border border-[#D4AF37]/25 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 mb-4">
            <FileText size={24} className="text-[#D4AF37]" />
          </div>
          <h3 className="font-heading text-lg font-bold text-white mb-2">
            Simply Visible -- Free Guide
          </h3>
          <p className="text-white/45 text-sm leading-relaxed mb-6">
            7 shifts. 7 first steps. Everything you need to start showing up where your customers are looking.
          </p>
          <a
            href="https://d2xsxph8kpxj0f.cloudfront.net/310519663307809653/iSGdkRyQsxV59hys4MR3Ky/simply-visible-free-guide-v2(2)_c34825f0.pdf"
            download="Simply-Visible-Free-Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:bg-[#e8bf6a] hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download the PDF
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      name="visible-local-guide"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="visible-local-guide" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full pl-11 pr-4 py-4 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37]/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300"
          />
        </div>
        <div className="relative flex-1">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-11 pr-4 py-4 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37]/40 focus:bg-white/[0.06] focus:outline-none transition-all duration-300"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={signupMutation.isPending}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold bg-[#D4AF37] text-black rounded-lg transition-all duration-300 hover:bg-[#e8bf6a] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {signupMutation.isPending ? (
          "Sending..."
        ) : (
          <>
            Get the Free Guide
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>
      {signupMutation.isError && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="text-white/30 text-sm">
        No spam. Just your free guide and a heads up when the full book drops.
      </p>
    </form>
  );
}

/* ─── Insight Card Data ─── */
const INSIGHTS = [
  {
    num: "01",
    title: "AI Is Replacing the First Page of Google",
    body: 'People used to get ten results. Now they get <strong>one AI answer.</strong> One business. One call. The question isn\'t "can people find me?" It\'s "does AI recommend me?"',
    tip: "Search for what you do in your city right now and see who AI surfaces at the top.",
  },
  {
    num: "02",
    title: "Being Human Is Now an Algorithm Signal",
    body: "Google is actively trying to surface <strong>real people with real track records.</strong> The most human businesses are becoming the most findable ones. That's never been true before.",
    tip: "Post one 60-second video this week explaining something you wish every customer knew.",
  },
  {
    num: "03",
    title: "Your Google Business Profile Is Your Most Underused Asset",
    body: "Most businesses set it up once and never touch it again. <strong>The ones getting recommended are posting weekly and responding to every review.</strong>",
    tip: "Open your profile today. Fill in every blank field. Post one job photo this week.",
  },
  {
    num: "04",
    title: "Reviews Are Infrastructure, Not a Vanity Metric",
    body: "Reviews affect your Google ranking, whether AI recommends you, and whether strangers call you. <strong>The gap between 5 reviews and 150 is whether someone asked.</strong>",
    tip: "Text three happy customers today with a direct link to your Google review page.",
  },
  {
    num: "05",
    title: "Your Homepage Has Four Seconds to Answer Six Questions",
    body: "Who are you? What problem do you solve? Who for? How? What do others say? How do I get started? <strong>Answer all six and you're ahead of 90% of competitors.</strong>",
    tip: "Open your homepage on your phone. Can a stranger hire you in under 10 seconds?",
  },
  {
    num: "06",
    title: "Own One Platform Before You Touch a Second",
    body: "Scattered effort across six platforms produces nothing. <strong>Facebook and Google Business Profile -- consistent for 12 months -- beats everything else combined.</strong>",
    tip: "Pick your one platform. Commit to twice a week for 90 days. Nothing else.",
  },
  {
    num: "07",
    title: "The Businesses That Win Are the Ones That Show Up Anyway",
    body: "The confidence you're waiting for doesn't come before you start. <strong>It comes from starting.</strong> Every week you show up when your competitors don't, you pull further ahead. The slow consistent build is the competitive moat most businesses never build because they're waiting to feel ready.",
    tip: 'Block 20 minutes on your calendar this week labeled "Visibility Work." Do one thing inside it. Then block it again next week.',
    fullWidth: true,
  },
];

/* ─── Main Page ─── */
export default function VisibleLocalGuide() {
  const { ref: insightsRef, isVisible: insightsVisible } = useScrollAnimation(0.05);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);
  const { ref: bookRef, isVisible: bookVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ─── Hero Section ─── */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Subtle gold radial glow */}
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Your Free Guide
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Your Local Business Is<br />
              <span className="text-[#D4AF37] italic">Invisible to AI.</span><br />
              Here's What to Do.
            </h1>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed max-w-lg mx-auto mb-10">
              7 shifts every local business owner needs to make right now --{" "}
              <strong className="text-white/80">each one with a concrete first step you can take this week.</strong>
            </p>

            <GuideSignupForm />
          </div>
        </div>
      </section>

      {/* ─── What's Inside: 7 Insight Cards ─── */}
      <section className="py-20 lg:py-24 bg-[#faf9f6]">
        <div ref={insightsRef} className="container">
          <div className="max-w-3xl mx-auto">
            <span className="block text-center text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              What's Inside
            </span>
            <h2 className="text-center text-[#1a1d27] text-2xl lg:text-3xl font-bold leading-tight mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              7 Things That Change Everything
            </h2>
            <p className="text-center text-[#6b7280] text-base leading-relaxed max-w-lg mx-auto mb-14">
              Each insight comes with a concrete first step you can take this week -- no agency, no ad budget, no tech team required.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {INSIGHTS.map((item, i) => (
                <div
                  key={item.num}
                  className={`bg-white border border-[#e5e1d8] rounded-md p-6 transition-all duration-500 hover:shadow-lg hover:border-[#D4AF37] ${
                    item.fullWidth ? "sm:col-span-2" : ""
                  }`}
                  style={{
                    opacity: insightsVisible ? 1 : 0,
                    transform: insightsVisible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, box-shadow 0.2s, border-color 0.2s`,
                  }}
                >
                  <span className="text-[#D4AF37] text-xs font-bold tracking-wider mb-2 block" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    {item.num}
                  </span>
                  <h3 className="text-[#1a1d27] text-base font-bold leading-snug mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    {item.title}
                  </h3>
                  <p
                    className="text-[#6b7280] text-sm leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                  <div className="bg-[#f4f0e8] border-l-[3px] border-[#D4AF37] rounded-r-sm py-2.5 px-3">
                    <p className="text-[#1a1d27] text-xs leading-relaxed">
                      <strong className="text-[#D4AF37] font-bold">First step:</strong>{" "}
                      {item.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA: Book a Call ─── */}
      <section className="relative py-20 lg:py-24 bg-[#0f1117] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.09) 0%, transparent 60%)",
          }}
        />

        <div ref={ctaRef} className="container relative">
          <div
            className="max-w-xl mx-auto text-center"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <span className="block text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Visible Local
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Want Us to Do<br />
              <span className="text-[#D4AF37] italic">This With You?</span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-4 max-w-md mx-auto">
              Visible Local is the done-for-you local marketing division of Adam Loomis Marketing.
              We handle the website, the Google presence, the content, and the review system --{" "}
              <strong className="text-white/80">so you can stay focused on running your business.</strong>
            </p>

            <ul className="inline-flex flex-col gap-2 text-left mb-9">
              {[
                "We audit your current visibility and tell you exactly where you're losing customers",
                "We build or fix your website, Google Business Profile, and content system",
                "We keep it running so you don't have to think about it",
                "No ad spend required -- ever",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <span className="text-[#D4AF37] font-bold shrink-0 mt-px">&#8594;</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://www.adamloomis.online/#contact"
              className="inline-block bg-[#D4AF37] text-[#0f1117] font-bold text-base tracking-wide px-12 py-5 rounded transition-all duration-200 hover:bg-[#e8bf6a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,168,67,0.3)]"
              style={{ boxShadow: "0 4px 24px rgba(212,168,67,0.2)" }}
            >
              Book a Call With Us
            </a>
            <p className="text-white/25 text-xs mt-4">
              30 minutes. No pressure. No pitch deck. Just honest answers about your visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Book Teaser Band ─── */}
      <div
        ref={bookRef}
        className="bg-[#161920] border-t border-white/[0.06] py-11 text-center"
        style={{
          opacity: bookVisible ? 1 : 0,
          transform: bookVisible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s ease-out",
        }}
      >
        <span className="block text-white/30 text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3">
          Coming Soon
        </span>
        <h3 className="text-white text-xl italic mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
          Simply Visible
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">
          The full book -- 14 chapters, every system, every tool.<br />
          <span className="text-[#D4AF37] font-semibold not-italic">Launching on Amazon soon.</span>{" "}
          This guide is a preview.
        </p>
      </div>

      {/* ─── Footer ─── */}
      <footer className="py-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Adam Loomis Marketing &amp;{" "}
          <a
            href="https://www.visiblelocal.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#D4AF37] transition-colors"
          >
            Visible Local
          </a>
          {" "} | {" "}
          <Link href="/" className="text-white/30 hover:text-[#D4AF37] transition-colors">
            adamloomis.online
          </Link>
        </p>
      </footer>
    </div>
  );
}
