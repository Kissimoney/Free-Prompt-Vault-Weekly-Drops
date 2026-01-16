import React from 'react';
import { Sparkles, Database, Layout, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

interface FooterProps {
    scrollTo: (id: string) => void;
}

export const Footer = ({ scrollTo }: FooterProps) => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-32 mb-40">
                    <div className="col-span-1 lg:col-span-1">
                        <button
                            className="flex items-center gap-3 mb-10 group outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 rounded-lg"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:scale-110 shadow-lg shadow-mint/20">JK</div>
                            <span className="font-heading font-extrabold text-3xl tracking-tight text-deepBlue">JK Ai Hub</span>
                        </button>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                            Clean templates, strong copy, and prompt systems built for high-performance creators.
                        </p>
                        <div className="flex gap-4">
                            {[Sparkles, Database, Layout, Mail].map((Icon, idx) => (
                                <button key={idx} className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-mint hover:bg-mint/5 hover:border-mint/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-mint">
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-deepBlue mb-10 opacity-40">Vault</h5>
                        <div className="flex flex-col items-start gap-4 text-gray-500 text-[15px] font-bold">
                            <Button variant="ghost" onClick={() => scrollTo('vault')} className="h-auto p-0 hover:bg-transparent">Categories</Button>
                            <Button variant="ghost" onClick={() => scrollTo('weekly')} className="h-auto p-0 hover:bg-transparent">Weekly Drop</Button>
                            <Button variant="ghost" onClick={() => scrollTo('hero-form')} className="h-auto p-0 hover:bg-transparent">Free Pack</Button>
                            <Button variant="ghost" onClick={() => scrollTo('vault')} className="h-auto p-0 hover:bg-transparent">Frameworks</Button>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-deepBlue mb-10 opacity-40">Shop</h5>
                        <div className="flex flex-col items-start gap-4 text-gray-500 text-[15px] font-bold">
                            <Button variant="ghost" onClick={() => scrollTo('bestsellers')} className="h-auto p-0 hover:bg-transparent">Best Sellers</Button>
                            <Button variant="ghost" onClick={() => scrollTo('weekly')} className="h-auto p-0 hover:bg-transparent">This Week</Button>
                            <Button variant="ghost" onClick={() => scrollTo('request')} className="h-auto p-0 hover:bg-transparent">Custom Prompt</Button>
                            <Button variant="ghost" onClick={() => scrollTo('bestsellers')} className="h-auto p-0 hover:bg-transparent">Product Hub</Button>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-deepBlue mb-10 opacity-40">Support</h5>
                        <div className="flex flex-col items-start gap-4 text-gray-500 text-[15px] font-bold">
                            <Button variant="ghost" onClick={() => scrollTo('faq')} className="h-auto p-0 hover:bg-transparent">FAQ</Button>
                            <Button variant="ghost" onClick={() => scrollTo('request')} className="h-auto p-0 hover:bg-transparent">Contact</Button>
                            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">Subscriber</Button>
                            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">Privacy Policy</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.25em]">© 2025 JK Ai Hub. Instant Delivery. No Spam.</p>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                        <a href="#" className="hover:text-mint transition-colors outline-none focus-visible:text-mint">Twitter</a>
                        <a href="#" className="hover:text-mint transition-colors outline-none focus-visible:text-mint">LinkedIn</a>
                        <a href="#" className="hover:text-mint transition-colors outline-none focus-visible:text-mint">Gumroad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
