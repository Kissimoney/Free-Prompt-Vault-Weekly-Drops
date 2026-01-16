
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface StickyCTAProps {
    scrollTo: (id: string) => void;
}

export const StickyCTA = ({ scrollTo }: StickyCTAProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past the Hero section (approx 600px)
            const showThreshold = 600;
            setIsVisible(window.scrollY > showThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 md:hidden animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
                <div className="text-xs font-bold text-deepBlue">
                    <span className="block text-gray-500 font-medium">Don't miss out</span>
                    Free Prompt Pack
                </div>
                <Button
                    onClick={() => scrollTo('hero')}
                    className="flex-1 py-3 text-sm shadow-lg hover:shadow-xl"
                >
                    <Download size={16} className="mr-2" /> Get It Free
                </Button>
            </div>
        </div>
    );
};
