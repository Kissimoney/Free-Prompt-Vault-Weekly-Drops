
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart, Shield, Zap } from 'lucide-react';
import { BEST_SELLERS } from '../../data/constants';
import { Button } from '../ui/Button';
import { SEO } from '../SEO';

export const ProductDetail = () => {
    const { id } = useParams();
    const product = BEST_SELLERS.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h1 className="text-4xl font-heading font-black mb-4">Product Not Found</h1>
                <Link to="/" className="text-mint underline font-bold">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-deepBlue">
            <SEO
                title={`${product.name} | Premium Prompt Pack`}
                description={product.description?.substring(0, 160)}
                image={product.image}
            />

            <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-40">
                <Link to="/" className="flex items-center gap-2 font-bold text-gray-500 hover:text-deepBlue transition-colors">
                    <ArrowLeft size={20} /> Back to Vault
                </Link>
                <div className="font-heading font-black text-xl tracking-tight hidden md:block">
                    {product.name}
                </div>
                <Button className="py-2 px-4 h-auto text-sm">
                    Buy Now {product.price}
                </Button>
            </nav>

            <main className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row gap-16">

                {/* Visual Side */}
                <div className="lg:w-1/2">
                    <div className="sticky top-32">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 aspect-square relative group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {product.badge && (
                                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                                    {product.badge}
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                            {/* Mock thumbnails if we had them, mostly decoration for now */}
                            <div className="w-24 h-24 rounded-2xl bg-gray-100 shrink-0 overflow-hidden border border-gray-200">
                                <img src={product.image} className="w-full h-full object-cover opacity-50" />
                            </div>
                            <div className="w-24 h-24 rounded-2xl bg-gray-50 shrink-0 flex items-center justify-center border border-gray-200">
                                <Zap size={24} className="text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 flex flex-col">
                    <div className="mb-2 text-mint font-bold uppercase tracking-widest text-sm">
                        Premium Asset
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tight leading-none">
                        {product.name}
                    </h1>

                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-5xl font-black">{product.price}</span>
                        {product.originalPrice && (
                            <span className="text-2xl text-gray-400 font-medium line-through">{product.originalPrice}</span>
                        )}
                    </div>

                    <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                        {product.description}
                    </p>

                    <div className="space-y-12 mb-12">
                        {/* Features Block */}
                        {product.features && (
                            <div>
                                <h3 className="text-xl font-heading font-black mb-6 flex items-center gap-3">
                                    <Zap className="text-mint" /> Key Features
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {product.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 shrink-0"></div>
                                            <span className="font-semibold text-deepBlue">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* What's Included Block */}
                        {product.whatIncluded && (
                            <div>
                                <h3 className="text-xl font-heading font-black mb-6 flex items-center gap-3">
                                    <Shield className="text-mint" /> What's Included
                                </h3>
                                <ul className="space-y-3">
                                    {product.whatIncluded.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                            <Check size={18} className="text-mint" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-auto bg-gray-50 border border-gray-100 p-8 rounded-[32px]">
                        <div className="flex flex-col gap-4">
                            <Button className="w-full py-5 text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                                <ShoppingCart size={24} /> Buy Now - {product.price}
                            </Button>
                            <p className="text-center text-xs text-gray-400 font-medium">
                                Instant Digital Download • Secure Checkout via Stripe
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
