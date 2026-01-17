import React from 'react';
import { Youtube, Twitter, Instagram, Linkedin, MessageCircle, Globe } from 'lucide-react';

const PLATFORMS = [
    {
        name: 'YouTube',
        icon: Youtube,
        url: 'https://youtube.com',
        color: 'hover:text-red-500',
        bgColor: 'hover:bg-red-50',
        borderColor: 'hover:border-red-200'
    },
    {
        name: 'Twitter',
        icon: Twitter,
        url: 'https://twitter.com',
        color: 'hover:text-blue-400',
        bgColor: 'hover:bg-blue-50',
        borderColor: 'hover:border-blue-200'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        url: 'https://instagram.com',
        color: 'hover:text-pink-500',
        bgColor: 'hover:bg-pink-50',
        borderColor: 'hover:border-pink-200'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://linkedin.com',
        color: 'hover:text-blue-600',
        bgColor: 'hover:bg-blue-50',
        borderColor: 'hover:border-blue-200'
    },
    {
        name: 'Discord',
        icon: MessageCircle,
        url: 'https://discord.com',
        color: 'hover:text-indigo-500',
        bgColor: 'hover:bg-indigo-50',
        borderColor: 'hover:border-indigo-200'
    },
    {
        name: 'Website',
        icon: Globe,
        url: 'https://example.com',
        color: 'hover:text-mint',
        bgColor: 'hover:bg-mint/5',
        borderColor: 'hover:border-mint/20'
    },
];

export const SocialProof = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-mint/20 bg-mint/5 px-4 py-1.5 rounded-full text-mint font-bold text-[11px] mb-6 tracking-widest uppercase">
                        Connect With Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-deepBlue mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                        Follow us across platforms for daily prompts, tutorials, and exclusive drops.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {PLATFORMS.map((platform, idx) => (
                        <a
                            key={idx}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex flex-col items-center justify-center p-8 bg-white border-2 border-gray-100 rounded-[28px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 ${platform.borderColor}`}
                        >
                            <div className={`w-16 h-16 rounded-[20px] bg-gray-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${platform.bgColor}`}>
                                <platform.icon
                                    size={28}
                                    strokeWidth={2}
                                    className={`text-gray-400 transition-colors duration-300 ${platform.color}`}
                                />
                            </div>
                            <span className="font-bold text-sm text-gray-600 group-hover:text-deepBlue transition-colors">
                                {platform.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
