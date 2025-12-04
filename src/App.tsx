import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TermsOfService from "./pages/TermsOfService";
import LandingPage from "./pages/LandingPage";
import AutoDisplayPage from "./pages/AutoDisplayPage";
import RipuiTodaatiPage from "./pages/RipuiTodaatiPage";
import ShitatShloshetHamimadimPage from "./pages/ShitatShloshetHamimadimPage";
import RipuiYeladimPage from "./pages/RipuiYeladimPage";
import HaradotPage from "./pages/HaradotPage";
import NotFound from "./pages/NotFound";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/auto-display" element={<AutoDisplayPage />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/ripui-todaati" element={<RipuiTodaatiPage />} />
            <Route path="/shitat-shloshet-hamimadim" element={<ShitatShloshetHamimadimPage />} />
            <Route path="/ripui-yeladim" element={<RipuiYeladimPage />} />
            <Route path="/haradot" element={<HaradotPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
