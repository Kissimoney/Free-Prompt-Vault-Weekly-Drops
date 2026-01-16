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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </section>
    );
};
