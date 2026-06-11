/*
 * Command Palette — Cmd+K / Ctrl+K
 * Editorial-styled quick navigation for pages, anchors, and external links.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Headphones,
  Home,
  Mail,
  Mic,
  ScrollText,
  Search,
  User,
} from "lucide-react";

type Item = {
  label: string;
  hint?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: { type: "route"; to: string } | { type: "external"; href: string };
  keywords?: string;
};

const ITEMS: { group: string; items: Item[] }[] = [
  {
    group: "Pages",
    items: [
      { label: "Home", icon: Home, action: { type: "route", to: "/" } },
      { label: "Books", hint: "Simply Visible + Conversational Marketing", icon: BookOpen, action: { type: "route", to: "/books" } },
      { label: "Simply Visible", hint: "Book · Podcast · System", icon: Search, action: { type: "route", to: "/simply-visible" }, keywords: "book podcast system" },
      { label: "Read the free preview", hint: "Intro + Chapter One", icon: ScrollText, action: { type: "route", to: "/simply-visible/preview" }, keywords: "read sample chapter" },
    ],
  },
  {
    group: "On the homepage",
    items: [
      { label: "About Adam", icon: User, action: { type: "external", href: "/#about" } },
      { label: "Speaking", icon: Mic, action: { type: "external", href: "/#speaking" }, keywords: "book adam event keynote" },
      { label: "Mondays with Adam", hint: "The podcast", icon: Headphones, action: { type: "external", href: "/#podcast" } },
      { label: "Contact", icon: Mail, action: { type: "external", href: "/#contact" }, keywords: "get in touch email form" },
    ],
  },
  {
    group: "Get the books",
    items: [
      { label: "Simply Visible — paperback", icon: ArrowUpRight, action: { type: "external", href: "https://www.amazon.com/dp/B0H4Q9PPPW" }, keywords: "buy amazon" },
      { label: "Simply Visible — Kindle", icon: ArrowUpRight, action: { type: "external", href: "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55" }, keywords: "buy amazon ebook" },
      { label: "Conversational Marketing", icon: ArrowUpRight, action: { type: "external", href: "https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H" }, keywords: "buy amazon first book" },
    ],
  },
  {
    group: "Legal",
    items: [
      { label: "Privacy Policy", icon: FileText, action: { type: "route", to: "/privacy" } },
      { label: "Terms of Service", icon: FileText, action: { type: "route", to: "/terms" } },
      { label: "Accessibility", icon: FileText, action: { type: "route", to: "/accessibility" } },
    ],
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (item: Item) => {
    setOpen(false);
    if (item.action.type === "route") {
      navigate(item.action.to);
    } else if (item.action.href.startsWith("/#")) {
      window.location.href = item.action.href;
    } else {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Site navigation"
      className="fixed inset-0 z-[80]"
    >
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-white border border-[#0A0A0A] rounded-lg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
        <Command.Input
          placeholder="Where to? Type to search…"
          className="w-full px-5 py-4 text-[16px] text-[#0A0A0A] placeholder:text-[#9CA3AF] border-b border-[#E5E5E5] focus:outline-none font-medium"
        />
        <Command.List className="max-h-[420px] overflow-y-auto p-2">
          <Command.Empty className="px-4 py-8 text-center text-[#6E6E6E] text-[14px]">
            Nothing matches. Try &ldquo;books&rdquo; or &ldquo;podcast&rdquo;.
          </Command.Empty>
          {ITEMS.map(({ group, items }) => (
            <Command.Group
              key={group}
              heading={group}
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#6E6E6E]"
            >
              {items.map((item) => (
                <Command.Item
                  key={item.label}
                  value={`${item.label} ${item.keywords ?? ""}`}
                  onSelect={() => run(item)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded text-[14px] text-[#0A0A0A] cursor-pointer data-[selected=true]:bg-[#FFC500]/20"
                >
                  <item.icon size={16} className="text-[#6E6E6E] shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.hint && (
                    <span className="text-[#9CA3AF] text-[12px]">{item.hint}</span>
                  )}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
        <div className="px-4 py-2.5 border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="text-[#9CA3AF] text-[11px]">
            &uarr;&darr; navigate &middot; &crarr; select &middot; esc close
          </span>
          <span className="text-[#9CA3AF] text-[11px] font-semibold tracking-wider">
            &#8984;K
          </span>
        </div>
      </div>
    </Command.Dialog>
  );
}
