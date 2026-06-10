import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import BookLaunchModal from "./components/BookLaunchModal";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Accessibility from "./pages/Accessibility";
import Books from "./pages/Books";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaybookThankYou from "./pages/PlaybookThankYou";
import Privacy from "./pages/Privacy";
import SimplyVisible from "./pages/SimplyVisible";
import SimplyVisiblePreview from "./pages/SimplyVisiblePreview";
import Terms from "./pages/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/playbook-thank-you" component={PlaybookThankYou} />
      <Route path="/simply-visible/preview" component={SimplyVisiblePreview} />
      <Route path="/simply-visible" component={SimplyVisible} />
      <Route path="/books" component={Books} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/accessibility" component={Accessibility} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Toaster theme="dark" />
        <Router />
        <CookieBanner />
        <BookLaunchModal />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
