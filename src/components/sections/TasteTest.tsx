import React, { useState } from 'react';
import { Copy, Check, Sparkles, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

export const TasteTest = () => {
    const [copied, setCopied] = useState(false);

    const SAMPLE_PROMPT = "Cinema4D render, 8k resolution --ar 16:9 --v 6.0 --style raw --s 250 :: A futuristic street food vendor serving glowing neon noodles in a cyberpunk alleyway, rain falling, vibrant pink and teal lighting, highly detailed textures, volumetric fog, octane render";

    const handleCopy = () => {
        navigator.clipboard.writeText(SAMPLE_PROMPT);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="bg-deepBlue text-white rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 border border-mint/20 bg-mint/10 px-4 py-1.5 rounded-full text-mint font-bold text-[11px] mb-8 tracking-widest uppercase">
                            <Sparkles size={12} /> Taste Test
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">
                            Try this prompt <br />
                            <span className="text-mint">right now.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md font-medium leading-relaxed">
                            Don't believe the hype? Copy this raw prompt, paste it into Midjourney, and see the magic yourself.
                        </p>

                        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 group transition-all hover:bg-black/50 hover:border-mint/30">
                            <div className="flex items-start gap-4">
                                <Terminal size={20} className="text-mint mt-1 shrink-0" />
                                <code className="font-mono text-sm md:text-base text-gray-300 leading-relaxed">
                                    {SAMPLE_PROMPT}
                                </code>
                            </div>
                        </div>

                        <Button
                            onClick={handleCopy}
                            className={`w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${copied
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-white text-deepBlue hover:bg-gray-100'
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check size={20} /> Copied to Clipboard!
                                </>
                            ) : (
                                <>
                                    <Copy size={20} /> Copy Prompt
                                </>
                            )}
                        </Button>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-mint rounded-[32px] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-[500px] shadow-2xl">
                            <img
                                src="/cyberpunk-noodles.png"
                                alt="AI Generated Result"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="text-xs font-bold uppercase tracking-widest text-mint">
                                    Resulting Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
