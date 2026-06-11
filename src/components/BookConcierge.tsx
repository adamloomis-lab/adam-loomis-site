/*
 * Book Concierge — floating "Ask about the book" chat widget.
 * Shown on Simply Visible pages and /books. Talks to /api/book-concierge.
 * If the function is dormant (no API key configured), shows a friendly fallback.
 */
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { MessageCircle, Send, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SHOW_ON = ["/simply-visible", "/simply-visible/preview", "/books"];

export default function BookConcierge() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [dormant, setDormant] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, pending]);

  if (!SHOW_ON.includes(location)) return null;

  const send = async () => {
    const text = input.trim();
    if (!text || pending) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setPending(true);
    try {
      const res = await fetch("/api/book-concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (res.status === 503) {
        setDormant(true);
        return;
      }
      const data = await res.json();
      if (data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        throw new Error(data.error || "No reply");
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Hmm, something went wrong on my end. Try again in a moment, or use the contact form to reach Adam directly.",
        },
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ask about the book"
          className="fixed bottom-5 right-5 z-[58] inline-flex items-center gap-2 pl-4 pr-5 py-3 bg-[#0A0A0A] text-white text-[14px] font-semibold rounded-full shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)] hover:bg-[#222] transition-colors"
        >
          <MessageCircle size={16} className="text-[#FFC500]" />
          Ask about the book
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Book concierge chat"
          className="fixed bottom-5 right-5 left-5 sm:left-auto z-[58] w-auto sm:w-[380px] bg-white border border-[#0A0A0A] rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden"
          style={{ maxHeight: "min(560px, calc(100vh - 6rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={15} className="text-[#FFC500]" />
              <span className="text-[13px] font-semibold">Simply Visible concierge</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {dormant ? (
            <div className="p-6 text-center">
              <p className="font-heading text-lg text-[#0A0A0A] mb-2">
                The concierge is off duty.
              </p>
              <p className="text-[#6E6E6E] text-[14px] leading-relaxed mb-4">
                In the meantime, the free preview answers most questions about
                what&apos;s inside &mdash; or reach Adam directly.
              </p>
              <a href="/simply-visible/preview" className="btn-primary text-sm">
                Read the free preview
              </a>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
                {messages.length === 0 && (
                  <div className="text-[#6E6E6E] text-[13px] leading-relaxed bg-[#FAFAFA] border border-[#E5E5E5] rounded-md p-3">
                    Ask me anything about <em>Simply Visible</em> &mdash; what&apos;s
                    in it, who it&apos;s for, or whether it covers your situation.
                  </div>
                )}
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-md px-3 py-2 text-[14px] leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "ml-auto bg-[#FFC500]/25 text-[#0A0A0A]"
                        : "bg-[#FAFAFA] border border-[#E5E5E5] text-[#0A0A0A]"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
                {pending && (
                  <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-md px-3 py-2 text-[14px] text-[#6E6E6E] w-fit">
                    Thinking&hellip;
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-[#E5E5E5] p-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask about the book…"
                  className="flex-1 px-3 py-2 text-[14px] text-[#0A0A0A] bg-[#FAFAFA] border border-[#E5E5E5] rounded focus:border-[#0A0A0A] focus:outline-none"
                />
                <button
                  onClick={send}
                  disabled={pending || !input.trim()}
                  aria-label="Send"
                  className="px-3 py-2 bg-[#FFC500] text-[#0A0A0A] rounded disabled:opacity-40 hover:bg-[#FFD633] transition-colors"
                >
                  <Send size={15} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
