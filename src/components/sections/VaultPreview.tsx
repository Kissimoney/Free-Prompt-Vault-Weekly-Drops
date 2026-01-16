import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROMPT_CATEGORIES } from '../../data/constants';
import { Button } from '../ui/Button';

interface VaultPreviewProps {
    scrollTo: (id: string) => void;
}

export const VaultPreview = ({ scrollTo }: VaultPreviewProps) => {
    return (
        <section id="vault" className="py-32 px-4 max-w-7xl mx-auto scroll-mt-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                <div>
                    <h2 className="text-5xl lg:text-7xl font-heading font-black mb-6 tracking-tight text-deepBlue">Vault Preview</h2>
                    <p className="text-gray-500 text-xl max-w-2xl font-medium">Browse categories. Each vault tile has free previews + premium upgrades for rapid scale.</p>
                </div>
                <Button
                    variant="outline"
                    onClick={() => scrollTo('request')}
                    className="px-10 py-4 rounded-2xl flex items-center gap-3"
                >
                    Request a Custom Prompt <ChevronDown size={20} />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {PROMPT_CATEGORIES.map((cat, i) => (
                    <button
                        key={i}
                        className="bg-white border border-gray-100 p-10 rounded-[40px] transition-[transform,shadow] duration-300 ease-out group hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] hover:-translate-y-1.5 relative text-left outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2"
                    >
                        <div className="w-14 h-14 bg-gray-50 text-deepBlue rounded-[22px] flex items-center justify-center font-black text-base mb-8 group-hover:bg-mint group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all uppercase shadow-inner">
                            {cat.label}
                        </div>
                        <h3 className="font-black text-2xl mb-4 tracking-tight group-hover:text-mint transition-colors">{cat.title}</h3>
                        <p className="text-gray-500 text-base mb-10 leading-relaxed font-medium">{cat.benefit}</p>
                        <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${cat.tag === 'Free' ? 'bg-mint/10 text-mint' : cat.tag === 'Pro' ? 'bg-deepBlue text-white' : 'bg-orange-100 text-orange-600'}`}>
                                {cat.tag}
                            </span>
                            <div className="text-deepBlue/40 group-hover:text-mint group-hover:scale-125 transition-all">
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Inside the Vault Preview */}
            <div className="relative mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-mint/20 bg-mint/5 px-4 py-1.5 rounded-full text-mint font-bold text-[11px] mb-6 tracking-widest uppercase">
                        Inside the Vault
                    </div>
                    <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-deepBlue mb-6">
                        See what you actually get.
                    </h3>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                        No fluff. Just a clean, organized Notion database with tags, copy-paste prompts, and example images.
                    </p>
                </div>

                {/* Laptop Frame */}
                <div className="relative mx-auto">
                    {/* Shadow/Glow */}
                    <div className="absolute inset-0 bg-mint/20 blur-[100px] -z-10 rounded-full opacity-50"></div>

                    <div className="relative bg-[#1a1a1a] rounded-[24px] p-[4%] pt-[2.5%] shadow-2xl ring-1 ring-white/10">
                        {/* Camera Dot */}
                        <div className="absolute top-[1.2%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#333] rounded-full"></div>

                        {/* Screen Content */}
                        <div className="bg-[#191919] rounded-[8px] overflow-hidden border border-[#333] aspect-[16/10] relative group">
                            <img
                                src="https://images.unsplash.com/photo-1667372393119-c85c02088947?auto=format&fit=crop&w=1600&q=80"
                                alt="Vault Interface Preview"
                                className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110 group-hover:translate-y-[-10%]"
                            />

                            {/* Play Button Overlay (Optional Suggestion of Interactivity) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Keyboard Base Reflection suggestion */}
                        <div className="absolute bottom-[-10px] left-4 right-4 h-[10px] bg-[#222] rounded-b-[20px] opacity-50 blur-sm -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
