import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Route, Switch, useLocation } from "wouter";
import BookConcierge from "./components/BookConcierge";
import BookLaunchModal from "./components/BookLaunchModal";
import CommandPalette from "./components/CommandPalette";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import { PageTransition } from "./components/motion";
import RouteMeta from "./components/RouteMeta";
import { ThemeProvider } from "./contexts/ThemeContext";
import Accessibility from "./pages/Accessibility";
import Books from "./pages/Books";
import FieldNotePost from "./pages/FieldNotePost";
import FieldNotes from "./pages/FieldNotes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaybookThankYou from "./pages/PlaybookThankYou";
import Privacy from "./pages/Privacy";
import SimplyVisible from "./pages/SimplyVisible";
import SimplyVisiblePreview from "./pages/SimplyVisiblePreview";
import Terms from "./pages/Terms";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change (hash anchors are handled by the browser)
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition locationKey={location}>
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/playbook-thank-you" component={PlaybookThankYou} />
          <Route path="/simply-visible/preview" component={SimplyVisiblePreview} />
          <Route path="/simply-visible" component={SimplyVisible} />
          <Route path="/books" component={Books} />
          <Route path="/field-notes/:slug" component={FieldNotePost} />
          <Route path="/field-notes" component={FieldNotes} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/accessibility" component={Accessibility} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Toaster theme="dark" />
        <RouteMeta />
        <Router />
        <CookieBanner />
        <BookLaunchModal />
        <CommandPalette />
        <BookConcierge />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
