import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/constants';

export const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 px-4 max-w-5xl mx-auto scroll-mt-20">
            <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-7xl font-heading font-black mb-8 tracking-tight text-deepBlue">FAQ</h2>
                <p className="text-gray-500 text-xl font-medium">Quick answers before you join the hub.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[56px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)]">
                {FAQS.map((faq, i) => (
                    <div key={i} className={`border-b border-gray-50 last:border-0 transition-all duration-300 ${activeFaq === i ? 'bg-mint/[0.03]' : ''}`}>
                        <button
                            className="w-full flex items-center justify-between p-10 lg:p-12 text-left group outline-none focus:bg-gray-50"
                            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        >
                            <span className={`font-black text-2xl lg:text-3xl tracking-tight transition-colors duration-300 ${activeFaq === i ? 'text-mint' : 'text-deepBlue group-hover:text-mint/70'}`}>{faq.question}</span>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeFaq === i ? 'bg-mint text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:scale-110'}`}>
                                {activeFaq === i ? <ChevronDown size={24} /> : <span className="font-black text-2xl leading-none">+</span>}
                            </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-12 pb-12 text-gray-500 text-xl leading-relaxed font-medium animate-in fade-in slide-in-from-top-4 duration-500">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
