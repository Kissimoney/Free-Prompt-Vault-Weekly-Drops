import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/constants';

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-gray-50/50 px-4 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-5xl lg:text-7xl font-heading font-black mb-6 tracking-tight text-deepBlue">Verified Results</h2>
                    <p className="text-gray-500 text-xl font-medium">Creators love the clean structure, fast output, and consistent scale.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-white p-12 rounded-[56px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-mint/10 transition-colors"></div>
                            <div className="flex gap-2 text-mint mb-10">
                                {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" strokeWidth={0} />)}
                            </div>
                            <p className="text-gray-600 mb-12 text-xl font-medium leading-relaxed italic">"{t.quote}"</p>
                            <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                                <div className="w-16 h-16 rounded-[22px] bg-mint/10 text-mint flex items-center justify-center font-black text-2xl shadow-inner uppercase group-hover:scale-110 group-hover:rotate-6 transition-all">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl text-deepBlue">{t.name}</h4>
                                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.25em]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
