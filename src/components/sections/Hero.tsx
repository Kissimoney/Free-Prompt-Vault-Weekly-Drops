import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { LeadFormState } from '../../types';
import { PACK_URLS } from '../../data/constants';

interface HeroProps {
    scrollTo: (id: string) => void;
}

export const Hero = ({ scrollTo }: HeroProps) => {
    const [leadForm, setLeadForm] = useState<LeadFormState>({ name: '', email: '', interest: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMsg('');

        // Select correct URL based on interest, fallback to Default
        const selectedUrl = PACK_URLS[leadForm.interest as keyof typeof PACK_URLS] || PACK_URLS.Default;

        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    ...leadForm,
                    download_url: selectedUrl
                })
            });

            const data = await response.json();

            if (data.ok) {
                setSuccessMsg('Success! Check your email for your pack.');
                setLeadForm({ name: '', email: '', interest: '' });
            } else {
                console.error('Submission failed', data.error);
                setSuccessMsg('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error', error);
            setSuccessMsg('Error connecting to server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-40 lg:pt-52 pb-24 px-4 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="inline-flex items-center gap-2 border border-mint/20 bg-mint/5 px-5 py-2 rounded-full text-mint font-bold text-[11px] mb-10 tracking-[0.05em] uppercase shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-mint animate-pulse"></div>
                        GET FREE PROMPTS TODAY, UNLOCK PREMIUM BUNDLES TOMORROW.
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-heading font-black leading-[0.9] mb-10 tracking-tighter text-deepBlue">
                        Free Prompt <br />
                        Vault + <br />
                        <span className="text-mint">Weekly Drops</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                        Grab the free starter pack (instant delivery), then browse weekly drops and best-sellers for Nano Banana, Veo 3, thumbnails, listings, and launch copy — built with the JK Ai Hub system.
                    </p>

                    {/* Hero CTAs */}
                    <div className="flex flex-wrap gap-4 mb-14">
                        <Button
                            onClick={() => scrollTo('hero-form')}
                            className="px-10 py-5 rounded-2xl shadow-xl shadow-mint/20"
                        >
                            Get Free Prompt Pack
                        </Button>
                        <a
                            href="#free"
                            onClick={(e) => { e.preventDefault(); scrollTo('vault'); }}
                            className="btn outline border-2 border-gray-100 font-bold transition-all duration-300 hover:border-mint/30 hover:bg-gray-50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70 px-10 py-5 rounded-2xl animate-pulse-cta flex items-center gap-2 text-deepBlue"
                        >
                            Explore Free Vault <ArrowRight size={20} />
                        </a>
                    </div>

                    <form
                        id="hero-form"
                        onSubmit={handleLeadSubmit}
                        className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-3xl border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.06)] max-w-3xl group transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] scroll-mt-32"
                    >
                        <div className="flex-1 flex flex-col gap-1 px-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-3 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-sm"
                                value={leadForm.name}
                                onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1 px-2 border-l border-gray-100 hidden sm:flex">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-3 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@email.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-sm"
                                value={leadForm.email}
                                onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1 px-2 border-l border-gray-100 hidden sm:flex">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-3 mb-1">Pick Pack</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-sm appearance-none cursor-pointer"
                                value={leadForm.interest}
                                onChange={e => setLeadForm({ ...leadForm, interest: e.target.value as any })}
                                required
                            >
                                <option value="">Choose one...</option>
                                <option value="NanoBanana">Nano Banana Starter</option>
                                <option value="Veo3Ads">Veo 3 Ads</option>
                                <option value="Thumbnails">Stop the Scroll Thumbnails</option>
                                <option value="EmailKit">Funnel Copy & Email</option>
                            </select>
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-10 py-5 rounded-2xl animate-pulse-cta whitespace-nowrap mt-4 sm:mt-0"
                        >
                            {isSubmitting ? 'Sending...' : 'Get Free Prompt Pack'}
                        </Button>
                    </form>
                    {successMsg && <p className="mt-6 text-mint font-black text-base animate-in fade-in slide-in-from-top-2 flex items-center gap-2"><CheckCircle2 size={20} /> {successMsg}</p>}
                    <p className="mt-8 text-[11px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                        <Sparkles size={12} className="text-mint" /> Instant Delivery. No spam. Unsubscribe anytime.
                    </p>
                </div>

                <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-8 duration-1000 hidden lg:block">
                    <div className="absolute inset-0 bg-mint/10 blur-[150px] -z-10 rounded-full animate-pulse-slow"></div>
                    <div className="bg-white border border-gray-100 rounded-[60px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] relative group transition-all hover:shadow-[0_80px_160px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                        <div className="h-[400px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200"
                                alt="Free Starter Pack Library"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                            />
                        </div>
                        <div className="p-12">
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h3 className="text-4xl font-black mb-4 tracking-tight text-deepBlue">Free Starter Pack</h3>
                                    <p className="text-gray-500 text-lg leading-relaxed max-w-[340px] font-medium">25 prompts + a simple structure you can reuse weekly.</p>
                                </div>
                                <div className="text-6xl font-black text-mint tracking-tighter">$0</div>
                            </div>
                            <Button
                                variant="secondary"
                                onClick={() => scrollTo('vault')}
                                className="w-full py-6 rounded-[28px] text-lg flex items-center justify-center gap-3 group"
                            >
                                Preview Vault <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
