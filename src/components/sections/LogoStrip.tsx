
import React from 'react';

// Simple text-based logos with brand colors for reliability
const TOOLS = [
    { name: 'Midjourney', color: 'hover:text-[#fff]' },
    { name: 'ChatGPT', color: 'hover:text-[#74aa9c]' },
    { name: 'Claude', color: 'hover:text-[#d97757]' },
    { name: 'Runway', color: 'hover:text-[#fff]' },
    { name: 'Stable Diffusion', color: 'hover:text-[#fff]' },
    { name: 'Jasper', color: 'hover:text-[#fff]' },
    { name: 'Leonardo.ai', color: 'hover:text-[#fff]' },
    { name: 'Sora', color: 'hover:text-[#fff]' },
];

export const LogoStrip = () => {
    return (
        <section className="py-10 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Compatible with top AI Models
                </p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>

                {/* inner slider (duplicated for seamless loop) */}
                <div className="animate-marquee whitespace-nowrap flex gap-16 px-8 items-center">
                    {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, i) => (
                        <span
                            key={i}
                            className={`text-2xl md:text-3xl font-heading font-black text-gray-300 transition-colors duration-300 cursor-default ${tool.color}`}
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
