import React from 'react';
import { User, ListChecks, ClipboardCheck, Mail, Zap, ArrowDown } from 'lucide-react';

interface AutomationFlowProps {
    scrollTo: (id: string) => void;
}

export const AutomationFlow = ({ scrollTo }: AutomationFlowProps) => {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto">
            <div className="bg-deepBlue rounded-[64px] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl shadow-deepBlue/40">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mint/40 blur-[200px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[200px] rounded-full"></div>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl lg:text-7xl font-heading font-black mb-8 tracking-tight">Automation Flow</h2>
                        <p className="text-blue-200 text-xl max-w-2xl mx-auto font-medium opacity-80">Simple 4-step process to get your free AI assets delivered instantly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 border-t-2 border-dashed border-white/20 -z-10"></div>

                        {[
                            { step: 1, title: 'Enter Details', desc: 'Input your name & email in the hero form above.', icon: <User size={32} /> },
                            { step: 2, title: 'Pick Product', desc: 'Select your preferred AI starter pack from the list.', icon: <ListChecks size={32} /> },
                            { step: 3, title: 'Submit Form', desc: 'Securely submit to trigger our Zapier automation.', icon: <ClipboardCheck size={32} /> },
                            { step: 4, title: 'Check Email', desc: 'Receive your free product link instantly in your inbox.', icon: <Mail size={32} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-[32px] bg-mint text-white flex items-center justify-center mb-8 shadow-2xl shadow-mint/30 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                                    {item.icon}
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-6 py-1 rounded-full text-[12px] font-black uppercase tracking-widest mb-4 border border-white/10 group-hover:bg-white/20 transition-all">Step 0{item.step}</div>
                                <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-mint transition-colors">{item.title}</h4>
                                <p className="text-blue-100/60 text-base leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-mint">
                                <Zap size={28} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl font-black tracking-tight">Zero Friction System</h4>
                                <p className="text-blue-100/40 text-xs font-bold uppercase tracking-widest mt-1">Built with Supabase + Zapier + MailerLite</p>
                            </div>
                        </div>
                        <button
                            onClick={() => scrollTo('hero-form')}
                            className="bg-white text-deepBlue px-12 py-6 rounded-3xl font-black text-lg transition-all duration-300 hover:bg-mint hover:text-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-mint/40 active:scale-[0.97] group focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2"
                        >
                            Start Automation <ArrowDown size={24} className="inline ml-2 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
