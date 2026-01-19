import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ModulesSection from "./components/ModulesSection";
import PricingSection from "./components/PricingSection";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header onOpenForm={openForm} />
      <main>
        <HeroSection onOpenForm={openForm} />
        <ModulesSection />
        <PricingSection onOpenForm={openForm} />
        <BenefitsSection />
        <FAQSection />
        <CTASection onOpenForm={openForm} />
      </main>
      <Footer />
      <ApplicationForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
