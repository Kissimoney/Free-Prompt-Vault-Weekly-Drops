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
                    <Link
                        to={`/pack/${item.id}`}
                        key={i}
                        className="group flex flex-col h-full bg-white border border-gray-100 rounded-[48px] overflow-hidden transition-all hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] hover:-translate-y-3 outline-none text-left"
                        onClick={() => trackIntent(item.name)}
                    >
                        <div className="h-64 bg-gray-100 relative overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                            {item.badge && (
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-deepBlue shadow-xl">
                                    {item.badge}
                                </div>
                            )}
                        </div>
                        <div className="p-10 flex-1 flex flex-col">
                            <h3 className="font-black text-2xl mb-5 leading-tight group-hover:text-mint transition-colors">{item.name}</h3>
                            <div className="space-y-3 mb-10 flex-1">
                                {item.bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-gray-500 text-sm font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0"></div>
                                        {bullet}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-50">
                                <div className="flex flex-col">
                                    {item.originalPrice && <span className="text-[11px] text-gray-400 line-through font-bold mb-1 uppercase tracking-widest">{item.originalPrice}</span>}
                                    <span className="text-3xl font-black text-deepBlue tracking-tighter">{item.price}</span>
                                </div>
                                <div className={`btn primary bg-mint text-white font-bold w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-mint/10`}>
                                    <ShoppingCart size={24} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
