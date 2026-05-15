import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import KismatKonnect from "./pages/KismatKonnect";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "./components/BackgroundLines";
<<<<<<< HEAD
=======
import ScrollToTop from "./components/ScrollToTop";
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function GlobalBackground() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {!isHome && <BackgroundLines />}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-background-deep pointer-events-none"></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
<<<<<<< HEAD
=======
      <ScrollToTop />
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
      <div className="min-h-screen bg-background-deep text-white selection:bg-brand-primary/30 selection:text-brand-primary/20 relative">
        <GlobalBackground />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
              <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
              <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
              <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
              <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/kismat-konnect" element={<PageWrapper><KismatKonnect /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
