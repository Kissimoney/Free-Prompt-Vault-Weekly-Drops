import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { BEST_SELLERS } from '../../data/constants';
import { Button } from '../ui/Button';

interface BestSellersProps {
    scrollTo: (id: string) => void;
}

export const BestSellers = ({ scrollTo }: BestSellersProps) => {
    const trackIntent = async (itemName: string) => {
        try {
            await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ product_id: itemName, source: 'bestsellers_section' })
            });
        } catch (err) {
            console.warn('Tracking failed', err);
        }
    };

    return (
        <section id="bestsellers" className="py-32 px-4 max-w-7xl mx-auto scroll-mt-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                <div>
                    <h2 className="text-5xl lg:text-7xl font-heading font-black mb-6 tracking-tight text-deepBlue">Best Sellers</h2>
                    <p className="text-gray-500 text-xl max-w-2xl font-medium">Premium bundles built for speed: copy-paste prompts, templates, and launch assets.</p>
                </div>
                <Button
                    variant="outline"
                    onClick={() => scrollTo('request')}
                    className="px-10 py-4 rounded-2xl flex items-center gap-3"
                >
                    Custom workflow? <ArrowRight size={20} />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {BEST_SELLERS.map((item, i) => (
                    <div
                        key={i}
                        className="group flex flex-col h-full bg-white border border-gray-100 rounded-[40px] overflow-hidden transition-all hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] hover:-translate-y-2 relative text-left"
                    >
                        <Link to={`/pack/${item.id}`} className="h-64 bg-gray-100 relative overflow-hidden block" onClick={() => trackIntent(item.name)}>
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                            {item.badge && (
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-deepBlue shadow-xl">
                                    {item.badge}
                                </div>
                            )}
                        </Link>
                        <div className="p-8 flex-1 flex flex-col">
                            <Link to={`/pack/${item.id}`} className="block group-hover:text-mint transition-colors" onClick={() => trackIntent(item.name)}>
                                <h3 className="font-black text-2xl mb-5 leading-tight">{item.name}</h3>
                            </Link>

                            <div className="space-y-3 mb-8 flex-1">
                                {item.bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-500 text-sm font-bold leading-snug">
                                        <div className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0 mt-1.5"></div>
                                        {bullet}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-50">
                                <div className="flex items-baseline justify-between mb-6">
                                    <div className="flex flex-col">
                                        {item.originalPrice && <span className="text-[10px] text-gray-400 line-through font-bold mb-0.5 uppercase tracking-widest">{item.originalPrice}</span>}
                                        <span className="text-3xl font-black text-deepBlue tracking-tighter">{item.price}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        to={`/pack/${item.id}`}
                                        className="flex items-center justify-center px-4 py-3 rounded-xl border-2 border-gray-100 text-deepBlue font-bold text-sm hover:border-deepBlue hover:bg-deepBlue hover:text-white transition-all uppercase tracking-wider"
                                    >
                                        View
                                    </Link>
                                    <button
                                        onClick={() => {
                                            trackIntent(item.name);
                                            alert("Added to cart! (Demo)");
                                        }}
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-mint text-white font-bold text-sm hover:bg-mint/90 transition-all uppercase tracking-wider shadow-lg shadow-mint/20"
                                    >
                                        Add <ShoppingCart size={16} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
