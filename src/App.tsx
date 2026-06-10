import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Books from "./pages/Books";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaybookThankYou from "./pages/PlaybookThankYou";
import SimplyVisible from "./pages/SimplyVisible";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/playbook-thank-you" component={PlaybookThankYou} />
      <Route path="/simply-visible" component={SimplyVisible} />
      <Route path="/books" component={Books} />
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
