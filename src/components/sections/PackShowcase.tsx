
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';
import { BEST_SELLERS } from '../../data/constants';
import { Button } from '../ui/Button';

export const PackShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % BEST_SELLERS.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + BEST_SELLERS.length) % BEST_SELLERS.length);
    };

    const activePack = BEST_SELLERS[activeIndex];

    return (
        <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-heading font-black text-deepBlue mb-6 tracking-tight">
                        Pack Deep Dives
                    </h2>
                    <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
                        A closer look at our most popular weekly drops. Each pack is a complete system.
                    </p>
                </div>

                <div className="bg-white rounded-[40px] shadow-xl overflow-hidden relative min-h-[600px] flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden group">
                        <div className="absolute inset-0 bg-deepBlue/10 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            src={activePack.image}
                            alt={activePack.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 z-20">
                            <span className="bg-white/90 backdrop-blur text-deepBlue font-black px-4 py-2 rounded-lg text-sm uppercase tracking-wider shadow-lg">
                                {activePack.badge || 'Featured'}
                            </span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                        {/* Navigation Buttons (Desktop: Top Right, Mobile: Absolute) */}
                        <div className="absolute top-8 right-8 flex gap-3 z-20">
                            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-deepBlue transition-colors group">
                                <ChevronLeft size={20} className="text-gray-400 group-hover:text-deepBlue" />
                            </button>
                            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-deepBlue transition-colors group">
                                <ChevronRight size={20} className="text-gray-400 group-hover:text-deepBlue" />
                            </button>
                        </div>

                        <div className="mb-2 text-mint font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            <Star size={14} fill="currentColor" /> Premium Pack #{activeIndex + 1}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-heading font-black text-deepBlue mb-6 leading-tight">
                            {activePack.name}
                        </h3>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-4xl font-black text-deepBlue">{activePack.price}</span>
                            {activePack.originalPrice && (
                                <span className="text-xl text-gray-400 font-medium line-through">{activePack.originalPrice}</span>
                            )}
                        </div>

                        <div className="space-y-4 mb-10">
                            {activePack.bullets.map((bullet, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-mint/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={14} className="text-mint stroke-[3px]" />
                                    </div>
                                    <span className="text-gray-600 font-medium text-lg">{bullet}</span>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                            Get This Pack
                        </Button>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-8">
                    {BEST_SELLERS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-deepBlue w-8' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
