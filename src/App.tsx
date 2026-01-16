import React, { useState, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { VaultPreview } from './components/sections/VaultPreview';
import { WeeklyDrop } from './components/sections/WeeklyDrop';
import { BestSellers } from './components/sections/BestSellers';
import { Testimonials } from './components/sections/Testimonials';
import { AutomationFlow } from './components/sections/AutomationFlow';
import { RequestForm } from './components/sections/RequestForm';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { TasteTest } from './components/sections/TasteTest';
import { PackShowcase } from './components/sections/PackShowcase';

import { SEO } from './components/SEO';
import { StickyCTA } from './components/sections/StickyCTA';
import { LogoStrip } from './components/sections/LogoStrip';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Small offset for fixed header if needed, but smooth scroll usually handles well.
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-deepBlue selection:bg-mint/30">
      <SEO />
      <Navbar isScrolled={isScrolled} scrollTo={scrollTo} />

      {/* Hero Section */}
      <Hero scrollTo={scrollTo} />

      {/* Trust Badges */}
      <LogoStrip />

      {/* Vault Preview Section */}
      <VaultPreview scrollTo={scrollTo} />

      {/* Taste Test Section */}
      <TasteTest />

      {/* Weekly Drop Banner */}
      <WeeklyDrop scrollTo={scrollTo} />

      {/* Pack Showcase Slider */}
      <PackShowcase />

      {/* Best Sellers Section */}
      <BestSellers scrollTo={scrollTo} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Automation Flow Section */}
      <AutomationFlow scrollTo={scrollTo} />

      {/* Request Form Section */}
      <RequestForm />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer scrollTo={scrollTo} />

      {/* Mobile Sticky CTA */}
      <StickyCTA scrollTo={scrollTo} />
    </div>
  );
}
