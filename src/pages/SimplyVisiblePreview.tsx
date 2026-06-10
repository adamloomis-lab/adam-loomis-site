/*
 * Simply Visible — Free Preview
 * Online reader for the Introduction + Chapter One
 * Design: "Editorial Authority" — long-read, serif body, drop caps, pull-quotes
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ASSETS } from "@/lib/constants";
import { ArrowRight, BookOpen } from "lucide-react";

const AMAZON_PAPERBACK = "https://www.amazon.com/dp/B0H4Q9PPPW";
const AMAZON_KINDLE =
  "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55";

/* ─── Content blocks ─── */
type Block =
  | { kind: "p"; text: string }
  | { kind: "p-first"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "divider" }
  | { kind: "byline"; name: string; subtitle: string };

const INTRO: Block[] = [
  {
    kind: "p-first",
    text:
      "Not for the marketing professionals. Not for the tech-savvy entrepreneur with a team behind them and a budget for experiments. Not for the person who already has this figured out. If that person picked up this book they probably did it by accident and they can put it back.",
  },
  {
    kind: "p",
    text:
      "This book is for the person who is really good at what they do and barely visible online. The plumber who gets most of his work from referrals but knows there has to be a better way. The restaurant owner who posts occasionally and wonders why nothing seems to stick. The landscaper who built her business through hard work and word of mouth and is now watching competitors she knows are not as good show up everywhere online while she stays invisible.",
  },
  { kind: "p", text: "This book is for you." },

  { kind: "h3", text: "Why I Wrote This" },
  {
    kind: "p",
    text:
      "I have spent years helping small and local businesses get found, get trusted, and get chosen without spending a dollar on advertising. Through that work, across hundreds of clients in dozens of industries, I have reached over 300 million people organically on behalf of businesses that most people in marketing would consider too small to matter. No ads. No tricks. No viral gimmicks. Just showing up the right way, consistently, for real people in real communities.",
  },
  {
    kind: "p",
    text:
      "They matter. The greenhouse that has been part of a community for seventeen years matters. The basement window company that shows up on time, does the job right, and treats people with respect matters. The restaurant where the owner knows your name and the food tastes like someone actually made it matters. These businesses are the fabric of the communities they operate in. They deserve to be found.",
  },
  {
    kind: "p",
    text:
      "I wrote my first book on Conversational Marketing to document the methodology I had been using with clients. The core of it was simple: stop advertising at people and start talking to them. Build trust before you ask for anything. Show up consistently and humanly and let the relationship do what relationships have always done.",
  },
  {
    kind: "p",
    text:
      "That methodology still works. In fact it works better now than it ever has. But the landscape it operates in has changed dramatically. AI search has rewritten how people find local businesses. New tools have made things possible for a one-person shop that used to require a full team. And the gap between businesses that understand this new environment and the ones that do not has never been wider.",
  },
  {
    kind: "p",
    text:
      "This book is the update. Everything I know right now, in 2026, about what actually works for a local business trying to build visibility, trust, and consistent leads without a big budget or a big team.",
  },
  {
    kind: "p",
    text:
      "Here is the central idea that everything in this book is built on. In the AI search era, showing up as a genuine, real, human presence in your community is no longer just good relationship building. It is the exact signal that Google and AI are now optimizing to find and reward. The most human businesses are becoming the most findable ones. And that means a local business owner who actually cares, who actually shows up, who actually talks to their community, has a structural advantage over any corporate competitor with a bigger budget and a colder brand. Say it this way: reputation is now the algorithm. This book is the roadmap for building that kind of reputation, deliberately and practically, starting this week.",
  },
  { kind: "p", text: "Here is the shift most people have not noticed yet." },
  {
    kind: "p",
    text:
      "The old model went like this: be visible first, then try to look trustworthy, then hope people choose you. Get the traffic. Close the deal. Earn the trust later if they stick around. That was the playbook for a long time and it worked because Google ranked whoever had the most keywords and the most links and the most money to spend on ads.",
  },
  {
    kind: "p",
    text:
      "The new model works in reverse. Build genuine trust in your community. Be real, be consistent, be excellent, do what you said you were going to do. And visibility follows automatically. Not because you gamed anything. Because trust is now the signal the algorithm is looking for. Be trustworthy first. Become visible as a result. Get chosen because there is no real competition when people already trust you.",
  },
  {
    kind: "p",
    text:
      "Everything in this book is built around that second model. And the good news is that the things that make a business genuinely trustworthy, doing excellent work, communicating honestly, showing up consistently, treating people like neighbors, are exactly the things good local business owners are already doing every day. You are not starting from zero. You are learning how to let the world see what you have already built.",
  },

  { kind: "h3", text: "How to Read This Book" },
  {
    kind: "p",
    text:
      "You can read it straight through. You can jump to the chapter that addresses your most urgent problem right now. You can read a chapter, go implement what it says, and come back for the next one. All of those approaches work.",
  },
  {
    kind: "p",
    text:
      "What does not work is reading it and doing nothing. I know that sounds obvious. You would be surprised. This is a practical book. The value is entirely in the doing. Every chapter ends somewhere you can take action, even a small one, before you move on. I would encourage you to take it.",
  },
  {
    kind: "p",
    text:
      "At the end of the book you will find a 30-Day Quick Start guide that sequences everything into a simple action plan for someone who is ready to move immediately. If that is you, flip there first and come back. The chapters will still be here.",
  },

  { kind: "h3", text: "A Quick Word About Who This Is Not For" },
  {
    kind: "p",
    text:
      "If you are looking for a book about paid advertising, this is not it. I do not run ads for clients and I have not needed to. Everything in these pages is built on organic reach, genuine relationships, and systems that compound over time rather than campaigns that stop the moment you stop paying for them. One clarification worth making upfront: when I say you do not need to spend on advertising, I mean advertising. I do think you should invest a small amount in the software tools that make all of this run efficiently. We are talking less than the cost of a dinner out each month for most of the platforms I will mention. That is not an ad budget. That is infrastructure. The difference matters.",
  },
  {
    kind: "p",
    text:
      "If you are looking for shortcuts, this is not that either. There are no shortcuts to trust. I wish there were. I would have found them by now. There are faster paths and smarter systems, and this book is full of both. But the foundation is still showing up, doing good work, and letting your community see it. That part has not changed and it never will.",
  },

  { kind: "h3", text: "Let's Get You Visible" },
  {
    kind: "p",
    text: "You built something worth finding. Let this book help people find it.",
  },
  { kind: "byline", name: "Adam Loomis", subtitle: "Founder, Adam Loomis Marketing" },
  { kind: "divider" },
];

const CHAPTER_ONE: Block[] = [
  { kind: "p-first", text: "Let me start with a confession." },
  {
    kind: "p",
    text:
      "When I wrote my first book on Conversational Marketing, I thought I was writing about the future. Turns out I was writing about the beginning. Because what has happened in just the last twelve to eighteen months has made everything we thought we knew about local marketing look like a rough draft.",
  },
  {
    kind: "p",
    text:
      "If you own a small business and you have been doing the same things online that you were doing two years ago, this chapter is for you. Not because you are behind. Not because you messed up. But because the game changed underneath your feet and nobody sent you a memo.",
  },
  { kind: "p", text: "This book is your memo." },

  { kind: "h3", text: "The Biggest Shift Nobody Talked About at the Chamber Meeting" },
  {
    kind: "p",
    text:
      "Here is what happened. Quietly, quickly, and without asking anybody's permission, the way people find local businesses changed.",
  },
  {
    kind: "p",
    text:
      "It used to go like this. Someone needed a plumber. They typed “plumber near me” into Google. They scrolled through the results, clicked a few links, maybe checked some reviews, and called whoever looked trustworthy. That was the game. Show up in the search results, have decent reviews, and you had a real shot.",
  },
  { kind: "p", text: "That game still exists. But there is a new layer on top of it now." },
  {
    kind: "p",
    text:
      "People are asking AI. They are typing full questions into ChatGPT, into Google's AI overview, into Gemini, into whatever assistant lives on their phone. And they are not getting a list of ten links anymore. They are getting one answer. Sometimes two. And whoever that answer points to wins the call.",
  },
  {
    kind: "p",
    text:
      "Think about that for a second. The entire first page of Google used to have ten spots. Now there is often one AI-generated recommendation sitting at the very top before anyone even sees those ten links. One answer. One business mentioned by name. One phone call that goes to them and not you.",
  },
  { kind: "p", text: "That is not a small update. That is a fundamental shift in how visibility works." },
  {
    kind: "quote",
    text:
      "The question is no longer just ‘can people find me?’ The question is ‘does AI recommend me?’",
  },

  { kind: "h3", text: "E-E-A-T and Why Being Real Now Wins Algorithmically" },
  {
    kind: "p",
    text:
      "There is a concept baked into how Google evaluates content that most small business owners have never heard of. It is called E-E-A-T. Experience, Expertise, Authoritativeness, and Trust.",
  },
  {
    kind: "p",
    text:
      "Google and the AI tools built on top of its index are actively trying to determine whether the content they surface comes from real people with real experience or from sources manufacturing the appearance of credibility. They want to recommend businesses and people who have actually done the thing, who have a track record, who are trusted by their community.",
  },
  {
    kind: "p",
    text:
      "What that means practically is that showing up as a genuine human being online, sharing real work, real stories, real customer outcomes, is not just good for building relationships with people. It is now algorithmically rewarded. The mechanic who posts a video explaining what he actually found under the hood is signaling experience. The contractor who documents a real project from start to finish is signaling expertise. The restaurant owner who responds personally to every review is signaling trust.",
  },
  {
    kind: "p",
    text:
      "The most human businesses are now the most findable ones. That has never been true before. It is true now.",
  },

  { kind: "h3", text: "Why Small Businesses Have a Real Advantage Here" },
  { kind: "p", text: "Here is the part that surprised me, and honestly it should excite you." },
  {
    kind: "p",
    text:
      "Big brands are slow. They have committees and approval processes and brand guidelines written by people who have never talked to a real customer. You do not have any of that. You can show up online today, say something real, and build trust faster than a national chain ever could.",
  },
  {
    kind: "p",
    text:
      "AI does not just look at websites to decide who to recommend. It reads everything. Reviews. Social media. Google Business Profile posts. The questions you answer online. The content you put out consistently. The way your community talks about you. All of it feeds into whether AI sees you as a credible, trusted, relevant answer to someone's question.",
  },
  {
    kind: "p",
    text:
      "That is Conversational Marketing. That is what this book is built on. And the reason it works so well in 2026 is that it is literally what the AI era is optimizing for. Genuine. Human. Consistent. Trusted.",
  },
  {
    kind: "p",
    text:
      "The plumber who shows up on Google Business Profile every week with a short video, who answers customer questions publicly, who has real reviews from real people in the community, who sounds like an actual person and not a corporate press release… that plumber is the one AI is going to recommend. Every time.",
  },

  { kind: "h3", text: "The Other Thing That Changed: The Tools" },
  {
    kind: "p",
    text:
      "Okay so the search landscape changed. But something else changed too, and this one is even more exciting if you are a small business owner running things mostly on your own.",
  },
  { kind: "p", text: "The tools got really, really good." },
  {
    kind: "p",
    text:
      "A few years ago if you wanted a professional website, you needed a developer. If you wanted consistent social content, you needed a marketing team. If you wanted an automated system that took a photo you uploaded on Monday and turned it into a ready-to-post caption on Facebook and Instagram and your Google Business Profile by Tuesday morning, you needed someone technical to build that for you.",
  },
  { kind: "p", text: "Not anymore." },
  {
    kind: "p",
    text:
      "Right now, you can build a professional website that ranks in local search in a weekend. You can set up a content automation system for under a hundred dollars a month that runs your social media with minimal effort from you. You can have AI help you write posts, answer reviews, plan content, and build the digital presence that used to require an agency budget.",
  },
  {
    kind: "p",
    text:
      "The playing field is not completely level. But it is closer than it has ever been. And the small businesses who figure this out first are going to build an unfair advantage over every competitor in their market who is still doing things the old way.",
  },
  {
    kind: "quote",
    text:
      "This is the first time in the history of marketing where a one-person shop in a small town can genuinely out-market a company ten times its size. The window is open. Walk through it.",
  },

  { kind: "h3", text: "What This Book Is Going to Do for You" },
  {
    kind: "p",
    text:
      "This is not a theory book. I am not going to give you a bunch of marketing philosophy and send you home to figure it out yourself.",
  },
  {
    kind: "p",
    text:
      "Every chapter in this book is a practical playbook. We are going to cover your website. Your content. Your Google Business Profile. Your automation. Your social presence. Your voice. Your community. And we are going to cover all of it in a way that a real business owner with real responsibilities and a very limited amount of free time can actually implement.",
  },
  {
    kind: "p",
    text:
      "I am going to tell you what works, what I have seen work for real businesses in real towns, and what the current state of the tools and platforms makes possible right now. Not two years ago. Not in some hypothetical future. Right now, in 2026, with the technology that exists today.",
  },
  {
    kind: "p",
    text:
      "Some of this will feel familiar. Some of it will challenge how you have been thinking about your online presence. All of it is designed to help you show up better, get found more often, and build the kind of trust online that used to only come from years of word-of-mouth referrals.",
  },
  {
    kind: "p",
    text:
      "You have been in business long enough to know that nothing replaces doing the work. But you also know that working smarter matters. This book is the smarter part.",
  },

  { kind: "h3", text: "One Thing Before We Go Any Further" },
  { kind: "p", text: "I want to say something that most marketing books skip right over." },
  {
    kind: "p",
    text:
      "Building a visible local brand online is not just a business strategy. It is an act of service to your community.",
  },
  {
    kind: "p",
    text:
      "When you show up consistently, honestly, and helpfully online, you make it easier for your neighbors to find the help they need. You make it easier for a new family in town to know who to call. You make it easier for a small business to compete with the giant corporation that does not know anybody's name and does not care about your street.",
  },
  {
    kind: "p",
    text:
      "That matters. Your presence online is not just marketing. It is representation. It is proof that your town has good people doing good work and that they are easy to find.",
  },
  { kind: "p", text: "So let's make you easy to find." },
  { kind: "p", text: "Let's get started." },
  { kind: "divider" },
];

/* ─── Renderer ─── */
function renderBlock(block: Block, key: number) {
  switch (block.kind) {
    case "p-first":
      return (
        <p
          key={key}
          className="font-heading text-[18px] sm:text-[19px] leading-[1.78] text-[#0A0A0A] mb-6 first-letter:font-heading first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0A0A0A]"
        >
          {block.text}
        </p>
      );
    case "p":
      return (
        <p
          key={key}
          className="font-heading text-[18px] sm:text-[19px] leading-[1.78] text-[#0A0A0A] mb-6"
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="font-heading text-[1.5rem] sm:text-[1.6rem] font-semibold text-[#0A0A0A] mt-12 mb-5 leading-tight"
        >
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote
          key={key}
          className="border-l-4 border-[#FFC500] pl-6 py-2 my-12 font-heading italic text-[1.45rem] sm:text-[1.6rem] text-[#0A0A0A]/85 leading-snug"
        >
          {block.text}
        </blockquote>
      );
    case "divider":
      return (
        <div
          key={key}
          aria-hidden="true"
          className="text-center text-[#9CA3AF] tracking-[0.5em] my-14 select-none"
        >
          * * *
        </div>
      );
    case "byline":
      return (
        <div key={key} className="mt-10 mb-2">
          <p className="font-heading text-[18px] text-[#0A0A0A] mb-1">{block.name}</p>
          <p className="font-heading italic text-[#6E6E6E] text-[15px]">{block.subtitle}</p>
        </div>
      );
  }
}

/* ─── Mid-page CTA ─── */
function MidCTA() {
  return (
    <div className="my-16 p-8 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md text-center">
      <p className="eyebrow-muted mb-3">A note from Adam</p>
      <p className="font-heading text-xl text-[#0A0A0A] mb-5 leading-snug">
        That was the introduction. Chapter One starts below &mdash; or you can
        skip the rest and grab the full book now.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={AMAZON_PAPERBACK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Get the book
          <ArrowRight size={16} />
        </a>
        <a href="#chapter-one" className="btn-ghost">
          Read Chapter One
        </a>
      </div>
    </div>
  );
}

/* ─── Reading progress bar ─── */
function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      setPct(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[55] bg-transparent"
    >
      <div
        className="h-full bg-[#FFC500] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function SimplyVisiblePreview() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <ReadingProgress />

      {/* ─── Masthead ─── */}
      <header className="py-6 border-b border-[#E5E5E5]">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={ASSETS.almMonogramDark}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <img src={ASSETS.logo} alt="Adam Loomis" className="h-7 w-auto" />
          </Link>
          <span className="eyebrow-muted">Simply Visible &middot; Free Preview</span>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFC500]/15 border border-[#FFC500]/40 rounded-full mb-8">
              <BookOpen size={14} className="text-[#0A0A0A]" />
              <span className="eyebrow text-[#0A0A0A]">Free Preview</span>
            </div>
            <h1 className="display-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-[#0A0A0A] mb-6 leading-[1.05]">
              Simply <span className="italic font-light text-[#6E6E6E]">Visible.</span>
            </h1>
            <p className="text-[#0A0A0A]/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Read the Introduction and Chapter One online &mdash; right here,
              right now. About a fifteen-minute read.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#introduction" className="btn-primary">
                Start reading
                <ArrowRight size={16} />
              </a>
              <a href="#chapter-one" className="btn-ghost">
                Jump to Chapter One
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reader ─── */}
      <main className="py-20 lg:py-28">
        <div className="container">
          <article className="max-w-[640px] mx-auto">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <div className="text-center mb-10">
                <p className="eyebrow text-[#6E6E6E] mb-3">Introduction</p>
                <h2 className="display-serif text-3xl sm:text-4xl text-[#0A0A0A] leading-tight">
                  This Book Is for You
                </h2>
              </div>
              {INTRO.map(renderBlock)}
            </section>

            <MidCTA />

            {/* Chapter One */}
            <section id="chapter-one" className="scroll-mt-24">
              <div className="text-center mb-10">
                <p className="eyebrow text-[#6E6E6E] mb-3">Chapter One</p>
                <h2 className="display-serif text-3xl sm:text-4xl text-[#0A0A0A] leading-tight">
                  The World Changed. Did Your Business Notice?
                </h2>
              </div>
              {CHAPTER_ONE.map(renderBlock)}
            </section>
          </article>
        </div>
      </main>

      {/* ─── End-of-preview CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-white mb-8">End of Preview</p>
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
              Want the rest? <span className="italic font-light text-white/55">Thirteen more chapters.</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              You just read the Introduction and Chapter One. The book covers
              your website, Google Business Profile, content, automation, AI
              tools, reviews, trust at scale, and a 30-day quick start to put
              it all into motion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={AMAZON_PAPERBACK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Paperback on Amazon
                <ArrowRight size={16} />
              </a>
              <a
                href={AMAZON_KINDLE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white border border-white/30 rounded transition-colors hover:bg-white hover:text-[#0A0A0A]"
              >
                Kindle on Amazon
                <ArrowRight size={16} />
              </a>
            </div>
            <p className="text-white/50 text-[13px]">
              Or learn more about the{" "}
              <Link href="/simply-visible" className="underline underline-offset-4 hover:text-white">
                Simply Visible project
              </Link>{" "}
              &middot;{" "}
              <Link href="/books" className="underline underline-offset-4 hover:text-white">
                See both books
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[#E5E5E5]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="eyebrow-muted">
            &copy; {new Date().getFullYear()} Adam Loomis &middot; All rights reserved
          </p>
          <Link href="/" className="eyebrow-muted hover:text-[#0A0A0A] transition-colors">
            &larr; Back to adamloomis.online
          </Link>
        </div>
      </footer>
    </div>
  );
}
