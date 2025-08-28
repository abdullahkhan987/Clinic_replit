import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "./pages/home";
import AdvancedFacials from "./pages/advanced-facials";
import LaserTreatments from "./pages/laser-treatments";
import AestheticInjectables from "./pages/aesthetic-injectables";
import ChemicalPeels from "./pages/chemical-peels";
import SkinAnalysis from "./pages/skin-analysis";
import WellnessTherapy from "./pages/wellness-therapy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/advanced-facials" component={AdvancedFacials} />
      <Route path="/services/laser-treatments" component={LaserTreatments} />
      <Route path="/services/aesthetic-injectables" component={AestheticInjectables} />
      <Route path="/services/chemical-peels" component={ChemicalPeels} />
      <Route path="/services/skin-analysis" component={SkinAnalysis} />
      <Route path="/services/wellness-therapy" component={WellnessTherapy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
