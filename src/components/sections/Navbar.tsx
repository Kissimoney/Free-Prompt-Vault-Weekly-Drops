import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
    isScrolled: boolean;
    scrollTo: (id: string) => void;
}

export const Navbar = ({ isScrolled, scrollTo }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (id: string) => {
        scrollTo(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <button
                        className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 rounded-lg"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-9 h-9 bg-mint rounded-lg flex items-center justify-center text-white font-black text-base transition-transform group-hover:scale-110 shadow-lg shadow-mint/20">JK</div>
                        <span className="font-heading font-extrabold text-2xl tracking-tight text-deepBlue">JK Ai Hub</span>
                    </button>

                    <div className="hidden lg:flex items-center gap-10 font-bold text-[14px] text-gray-500">
                        <Button variant="ghost" onClick={() => handleScrollTo('vault')}>Vault</Button>
                        <Button variant="ghost" onClick={() => handleScrollTo('weekly')}>Weekly Drop</Button>
                        <Button variant="ghost" onClick={() => handleScrollTo('bestsellers')}>Best Sellers</Button>
                        <Button variant="ghost" onClick={() => handleScrollTo('request')}>Request</Button>
                        <Button variant="ghost" onClick={() => handleScrollTo('faq')}>FAQ</Button>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => handleScrollTo('hero-form')}
                            className="px-6 py-2.5 text-sm animate-pulse-cta"
                        >
                            Get Free Prompt Pack
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => handleScrollTo('bestsellers')}
                            className="px-8 py-2.5 text-sm"
                        >
                            Shop
                        </Button>
                    </div>

                    <button
                        className="lg:hidden p-2 text-deepBlue hover:bg-gray-100 hover:scale-110 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-mint"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white fixed inset-0 z-50 p-6 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
                    <button className="absolute top-6 right-6 p-2 hover:scale-125 transition-transform" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                    <div className="flex flex-col gap-6 text-center">
                        <button onClick={() => handleScrollTo('vault')} className="text-3xl font-black hover:text-mint transition-colors">Vault</button>
                        <button onClick={() => handleScrollTo('weekly')} className="text-3xl font-black hover:text-mint transition-colors">Weekly Drop</button>
                        <button onClick={() => handleScrollTo('bestsellers')} className="text-3xl font-black hover:text-mint transition-colors">Best Sellers</button>
                        <button onClick={() => handleScrollTo('request')} className="text-3xl font-black hover:text-mint transition-colors">Request</button>
                        <button onClick={() => handleScrollTo('faq')} className="text-3xl font-black hover:text-mint transition-colors">FAQ</button>
                    </div>
                    <div className="w-full max-w-xs flex flex-col gap-4">
                        <Button variant="outline" onClick={() => handleScrollTo('hero-form')} className="w-full py-4 text-lg animate-pulse-cta">Get Free Prompt Pack</Button>
                        <Button variant="primary" onClick={() => handleScrollTo('bestsellers')} className="w-full py-4 text-lg">Shop</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
