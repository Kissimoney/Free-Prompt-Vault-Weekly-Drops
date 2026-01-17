import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROMPT_CATEGORIES, getIcon } from '../../data/constants';
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                {PROMPT_CATEGORIES.map((cat, i) => (
                    <Link
                        to={`/pack/${cat.linkId}`}
                        key={i}
                        className="bg-white border-2 border-gray-100 p-8 rounded-[32px] transition-all duration-300 ease-out group hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)] hover:-translate-y-2 hover:border-mint/30 relative text-left outline-none block"
                    >
                        {/* Icon Container */}
                        <div className="w-16 h-16 bg-gradient-to-br from-mint/10 to-mint/5 rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-mint group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-mint/20">
                            <div className="text-mint group-hover:text-white transition-colors">
                                {getIcon(cat.icon)}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-black text-xl mb-3 tracking-tight group-hover:text-mint transition-colors leading-tight">
                            {cat.title}
                        </h3>

                        {/* Benefit */}
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium min-h-[3rem]">
                            {cat.benefit}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${cat.tag === 'Free'
                                    ? 'bg-mint/10 text-mint'
                                    : cat.tag === 'Pro'
                                        ? 'bg-deepBlue/10 text-deepBlue'
                                        : 'bg-orange-50 text-orange-600'
                                }`}>
                                {cat.tag}
                            </span>
                            <div className="text-gray-300 group-hover:text-mint group-hover:scale-125 transition-all">
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </div>
                        </div>
                    </Link>
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
                            <video
                                className="w-full h-full object-cover transform transition-transform duration-[20s] hover:scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="https://images.unsplash.com/photo-1667372393119-c85c02088947?auto=format&fit=crop&w=1600&q=80"
                            >
                                <source src="/vault-preview.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay Gradient for consistency */}
                            <div className="absolute inset-0 bg-deepBlue/10 pointer-events-none"></div>
                        </div>

                        {/* Keyboard Base Reflection suggestion */}
                        <div className="absolute bottom-[-10px] left-4 right-4 h-[10px] bg-[#222] rounded-b-[20px] opacity-50 blur-sm -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
