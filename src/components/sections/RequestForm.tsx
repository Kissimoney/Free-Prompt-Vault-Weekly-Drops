import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { RequestFormState } from '../../types';

export const RequestForm = () => {
    const [requestForm, setRequestForm] = useState<RequestFormState>({
        name: '', email: '', prompt_type: '', deadline: '', details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const handleRequestSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMsg('');

        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify(requestForm)
            });

            const data = await response.json();

            if (data.ok) {
                setSuccessMsg('Request sent! We will reply shortly.');
                setRequestForm({ name: '', email: '', prompt_type: '', deadline: '', details: '' });
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
        <section id="request" className="py-32 px-4 max-w-7xl mx-auto scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                    <h2 className="text-5xl lg:text-7xl font-heading font-black mb-10 tracking-tighter leading-none text-deepBlue">Request a <br className="hidden md:block" /> Custom Prompt</h2>
                    <p className="text-gray-500 text-xl mb-16 leading-relaxed font-medium max-w-xl">Tell us what you're building. We'll reply with a tailored prompt + the best matching bundle recommendations to get you moving fast.</p>

                    <div className="space-y-12">
                        {[
                            { title: 'Rapid Response', desc: 'Our team replies within 12-24 hours with a production-ready workflow.' },
                            { title: 'Deep Metadata', desc: 'Every custom prompt includes negative prompts and style parameters.' },
                            { title: 'Bundle Credits', desc: 'Get 50% off any premium bundle related to your custom request.' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <div className="w-14 h-14 rounded-2xl bg-mint/10 text-mint flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                    <Check size={28} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black mb-2 tracking-tight text-deepBlue group-hover:text-mint transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-base leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-50 p-12 lg:p-16 rounded-[64px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-right-8 duration-700">
                    <form onSubmit={handleRequestSubmit} className="space-y-10">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="w-full bg-gray-50 border border-transparent rounded-3xl p-5 focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-base"
                                    value={requestForm.name}
                                    onChange={e => setRequestForm({ ...requestForm, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    required
                                    className="w-full bg-gray-50 border border-transparent rounded-3xl p-5 focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-base"
                                    value={requestForm.email}
                                    onChange={e => setRequestForm({ ...requestForm, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Prompt Type</label>
                                <select
                                    className="w-full bg-gray-50 border border-transparent rounded-3xl p-5 focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-base appearance-none cursor-pointer"
                                    value={requestForm.prompt_type}
                                    onChange={e => setRequestForm({ ...requestForm, prompt_type: e.target.value })}
                                    required
                                >
                                    <option value="">Select one...</option>
                                    <option value="Nano Banana">Nano Banana</option>
                                    <option value="Veo 3">Veo 3</option>
                                    <option value="Copywriting">Copywriting</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Deadline</label>
                                <select
                                    className="w-full bg-gray-50 border border-transparent rounded-3xl p-5 focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all font-bold text-base appearance-none cursor-pointer"
                                    value={requestForm.deadline}
                                    onChange={e => setRequestForm({ ...requestForm, deadline: e.target.value })}
                                    required
                                >
                                    <option value="">Select one...</option>
                                    <option value="Immediate">Immediate</option>
                                    <option value="1-2 Days">1-2 Days</option>
                                    <option value="Next Week">Next Week</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-2">Details</label>
                            <textarea
                                placeholder="What are you creating? Include product type, niche, vibe, and desired output..."
                                required
                                className="w-full bg-gray-50 border border-transparent rounded-3xl p-6 focus:bg-white focus:border-mint/30 focus:outline-none focus:ring-1 focus:ring-mint/20 transition-all h-44 font-bold text-base resize-none"
                                value={requestForm.details}
                                onChange={e => setRequestForm({ ...requestForm, details: e.target.value })}
                            ></textarea>
                        </div>
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-6 rounded-[32px] text-xl flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Sending...</> : 'Send Request'}
                        </Button>
                        {successMsg && <p className="mt-4 text-mint font-bold text-center">{successMsg}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};
