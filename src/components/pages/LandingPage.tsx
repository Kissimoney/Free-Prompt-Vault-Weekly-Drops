import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { VaultPreview } from '../sections/VaultPreview';
import { WeeklyDrop } from '../sections/WeeklyDrop';
import { BestSellers } from '../sections/BestSellers';
import { Testimonials } from '../sections/Testimonials';
import { AutomationFlow } from '../sections/AutomationFlow';
import { RequestForm } from '../sections/RequestForm';
import { FAQ } from '../sections/FAQ';
import { Footer } from '../sections/Footer';
import { TasteTest } from '../sections/TasteTest';
import { PackShowcase } from '../sections/PackShowcase';
import { SEO } from '../SEO';
import { StickyCTA } from '../sections/StickyCTA';
import { LogoStrip } from '../sections/LogoStrip';
import { SocialProof } from '../sections/SocialProof';

export const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
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

            {/* Social Proof Section */}
            <SocialProof />

            {/* Footer Section */}
            <Footer scrollTo={scrollTo} />

            {/* Mobile Sticky CTA */}
            <StickyCTA scrollTo={scrollTo} />
        </div>
    );
};
