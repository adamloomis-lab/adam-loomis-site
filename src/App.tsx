import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaybookThankYou from "./pages/PlaybookThankYou";
import SimplyVisible from "./pages/SimplyVisible";
import VisibleLocalGuide from "./pages/VisibleLocalGuide";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/playbook-thank-you" component={PlaybookThankYou} />
      <Route path="/simply-visible" component={SimplyVisible} />
      <Route path="/visible-local-guide" component={VisibleLocalGuide} />
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
      </ThemeProvider>
    </ErrorBoundary>
  );
}
