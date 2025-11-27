import "./global.css";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot, Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import SchoolVolunteering from "./pages/SchoolVolunteering";
import HospitalInternships from "./pages/HospitalInternships";
import GetInvolved from "./pages/GetInvolved";
import Sponsor from "./pages/Sponsor";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Children from "./pages/Children";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route
            path="/programs/school-volunteering"
            element={<SchoolVolunteering />}
          />
          <Route
            path="/programs/hospital-internships"
            element={<HospitalInternships />}
          />
          <Route path="/programs/*" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/sponsor" element={<Sponsor />} />
          <Route path="/get-involved/donate" element={<Donate />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/children" element={<Children />} />
          <Route path="/get-involved/*" element={<GetInvolved />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/samu" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  const reactRoot = (rootElement as any)._reactRootContainer as Root | undefined;
  
  if (reactRoot) {
    // Root already exists, just render the new content
    reactRoot.render(<AppContent />);
  } else {
    // Create new root
    const root = createRoot(rootElement);
    root.render(<AppContent />);
  }
}

export default AppContent;
