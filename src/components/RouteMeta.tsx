/*
 * RouteMeta — keeps document.title in sync during client-side navigation.
 * (Initial loads get full per-route head metadata from the prerendered HTML;
 * this covers SPA transitions after hydration.)
 */
import { useEffect } from "react";
import { useLocation } from "wouter";

const TITLES: Record<string, string> = {
  "/": "Adam Loomis — Marketing Strategist, Speaker & Author",
  "/books": "Books by Adam Loomis — Simply Visible & Conversational Marketing",
  "/simply-visible": "Simply Visible — Book, Podcast & System | Adam Loomis",
  "/simply-visible/preview": "Read a Free Preview — Simply Visible | Adam Loomis",
  "/privacy": "Privacy Policy | Adam Loomis",
  "/terms": "Terms of Service | Adam Loomis",
  "/accessibility": "Accessibility | Adam Loomis",
  "/playbook-thank-you": "Your Playbook Is Ready | Adam Loomis",
};

export default function RouteMeta() {
  const [location] = useLocation();

  useEffect(() => {
    document.title = TITLES[location] ?? "Adam Loomis";
  }, [location]);

  return null;
}
