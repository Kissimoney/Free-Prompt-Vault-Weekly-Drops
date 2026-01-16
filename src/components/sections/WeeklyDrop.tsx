import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface WeeklyDropProps {
    scrollTo: (id: string) => void;
}

export const WeeklyDrop = ({ scrollTo }: WeeklyDropProps) => {
    return (
        <section id="weekly" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
            <div className="bg-[#f0fcf4] border-2 border-mint/5 rounded-[64px] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative shadow-inner">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mint/10 blur-[150px] -z-10 rounded-full animate-pulse-slow"></div>
                <div className="flex-1 relative z-10 text-center lg:text-left">
                    <div className="inline-block bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full text-mint font-black text-[10px] mb-8 tracking-widest uppercase shadow-sm">
                        Current Spotlight
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-heading font-black mb-8 tracking-tighter leading-[0.95] text-deepBlue">This Week's Drop: <br /> <span className="text-mint">"Cinematic Product Ads"</span></h2>
                    <p className="text-gray-600 text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                        Get 12 plug-and-play Veo 3 scene prompts + 12 Nano Banana keyframes built for product reveals, hero shots, and clean CTA endings.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start">
                        <Button
                            variant="secondary"
                            onClick={() => scrollTo('bestsellers')}
                            className="px-12 py-6 rounded-3xl text-lg"
                        >
                            Unlock This Drop
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => scrollTo('hero-form')}
                            className="bg-white/50 backdrop-blur-md px-12 py-6 rounded-3xl text-lg"
                        >
                            Get Free Pack
                        </Button>
                    </div>
                </div>
                <div className="flex gap-10 lg:gap-12 relative z-10 scale-90 lg:scale-100">
                    <Link to="/pack/bs2" className="block w-48 h-64 rounded-[40px] bg-gray-200 overflow-hidden shadow-2xl transition-all hover:scale-110 hover:rotate-3 duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" />
                    </Link>
                    <Link to="/pack/bs2" className="block w-48 h-64 rounded-[40px] bg-gray-200 overflow-hidden shadow-2xl mt-20 transition-all hover:scale-110 hover:-rotate-3 duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
