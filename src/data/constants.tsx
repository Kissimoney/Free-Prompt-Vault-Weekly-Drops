
import React from 'react';
import { Sparkles, Image, Video, Mail, Zap, Layout, Terminal, Quote, MessageSquare } from 'lucide-react';
import { PromptCategory, BestSeller, Testimonial, FAQItem } from '../types';


export const PROMPT_CATEGORIES: (PromptCategory & { linkId: string })[] = [
  { id: '1', label: 'NB', title: 'Nano Banana Images', benefit: 'High-res scene prompts with style consistency.', tag: 'Free', icon: 'Zap', linkId: 'bs1' },
  { id: '2', label: 'V3', title: 'Veo 3 Ad Scenes', benefit: '8-second cinematic sequences, no dialogue by default.', tag: 'Pro', icon: 'Video', linkId: 'bs2' },
  { id: '3', label: 'YT', title: 'YouTube Thumbnails', benefit: 'CTR-first thumbnail prompt packs and Canva codes.', tag: 'Free', icon: 'Image', linkId: 'bs7' },
  { id: '4', label: 'RR', title: 'Reels Captions', benefit: 'Hooks, CTAs, and viral caption patterns.', tag: 'Weekly', icon: 'MessageSquare', linkId: 'bs8' },
  { id: '5', label: 'GL', title: 'Gumroad Listings', benefit: 'Pain / Identity / Results angles and page templates.', tag: 'Free', icon: 'Layout', linkId: 'bs3' },
  { id: '6', label: 'EM', title: 'Email Sequences', benefit: 'Welcome flow + promo sequences that convert.', tag: 'Pro', icon: 'Mail', linkId: 'bs4' },
  { id: '7', label: 'BI', title: 'Brand Identity', benefit: 'Logo directions, palettes, and style guide prompts.', tag: 'Free', icon: 'Layout', linkId: 'bs9' },
  { id: '8', label: 'CC', title: 'Content Calendars', benefit: '30-day content plans with captions + hashtags.', tag: 'Weekly', icon: 'Terminal', linkId: 'bs10' },
];

export const PACK_URLS = {
  NanoBanana: "https://drive.google.com/file/d/1zk5hYseUKDJBZuj-LUMQjStjEAU9WD_Y/view?usp=sharing",
  Veo3Ads: "https://drive.google.com/file/d/1tOk4X3EPzeuzJgCydjrLe5aQxMqQZG4J/view?usp=sharing",
  Thumbnails: "https://drive.google.com/file/d/1vhUHVqiAn91QZECAt3XjBAiYNiA1SNHG/view?usp=sharing",
  EmailKit: "https://drive.google.com/file/d/158KeSfQ8nv3eferrQv3N_EmMV0X80J-R/view?usp=sharing",
  Default: "https://drive.google.com/file/d/1zk5hYseUKDJBZuj-LUMQjStjEAU9WD_Y/view?usp=sharing"
};


export const BEST_SELLERS: BestSeller[] = [
  {
    id: 'bs1',
    name: 'Nano Banana Prompt Pack',
    price: '$17',
    badge: 'Best Value',
    bullets: ['50+ Pro Prompts', 'Style Reference Guide', 'Infinite Variations'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
    description: "Stop wasting hours guessing keywords. The Nano Banana Prompt Pack is our flagship collection of 50+ high-fidelity scene prompts designed for Midjourney V6. Whether you're creating for Instagram, web design, or client pitch decks, this pack guarantees consistent, stunning results.",
    features: [
      "50+ Copy-Paste Prompts for Photorealistic Scenes",
      "Parameter usage guide (--stylize, --weird, --chaos)",
      "10 Style Presets (Cinematic, Macro, Studio Lighting)",
    ],
    whatIncluded: [
      "Notion Database with Tagged Prompts",
      "PDF Style Guide",
      "Lifetime Updates for V6.1+"
    ]
  },
  {
    id: 'bs2',
    name: 'Veo 3 Ad Scenes Bundle',
    price: '$29',
    badge: '10% Off',
    originalPrice: '$32',
    bullets: ['8-second Master Scenes', 'Product Reveal Hooks', 'Color Grading Metadata'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400',
    description: "Video is king. This bundle gives you the exact prompts used to generate 8-second cinematic ad loops using Google Veo and Runway Gen-3. Perfect for B-roll, background textures, and high-end product showcases without the film crew.",
    features: [
      "Optimized for Gen-3 & Veo",
      "Camera Movement Syntax (Pan, Zoom, Dolly)",
      "Lighting & Mood Modifiers"
    ],
    whatIncluded: [
      "25 Video Prompt Scripts",
      "Camera Motion Cheat Sheet",
      "After Effects Color Grading Presets"
    ]
  },
  {
    id: 'bs3',
    name: 'Gumroad Listing Wizard',
    price: '$29',
    bullets: ['Sales Copy Framework', 'Social Proof Prompts', 'Pricing Psychology'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    description: "Don't let bad copy kill your product launch. This GPT-4 optimized system helps you write high-converting Gumroad landing pages in minutes. It covers everything from the hook to the guarantee.",
    features: [
      "Fill-in-the-blank Sales Letter Templates",
      "Objection Handling Prompts",
      "FAQ Generator"
    ],
    whatIncluded: [
      "Notion Template Workspace",
      "5 Proven Sales Page Structures",
      "Email Nurture Sequence Bonus"
    ]
  },
  {
    id: 'bs4',
    name: 'Welcome Email Sequence Pack',
    price: '$19',
    badge: 'New',
    bullets: ['5-Day Indoctrination Flow', 'Subject Line Generator', 'Click-through Mastery'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400',
    description: "The money is in the list—but only if they open your emails. This pack gives you a battle-tested 5-day welcome sequence that builds trust, delivers value, and softly sells your premium offer.",
    features: [
      "Open-Loop Subject Lines",
      "Storytelling Frameworks",
      "Soft-Sell Transition Scripts"
    ],
    whatIncluded: [
      "5-Day Email Scrips (Google Doc)",
      "ConvertKit / Mailchimp Setup Guide",
      "40+ Subject Line Swipes"
    ]
  },
  {
    id: 'bs5',
    name: 'AI Agency Starter Kit',
    price: '$97',
    badge: 'Premium',
    bullets: ['Client Contracts', 'Service Pricing Calculator', 'Outreach Scripts'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400',
    description: "Ready to sell AI services? This is your business-in-a-box. Stop reinventing the wheel and use the exact contracts, proposal templates, and pricing calculators used by 6-figure AI agencies.",
    features: [
      "White-label Service Agreements",
      "ROI Calculator for Clients",
      "Cold DM & Email Outreach Standard Operating Procedures (SOPs)"
    ],
    whatIncluded: [
      "Notion Client Portal Template",
      "Legal Contract Templates (docx)",
      "Service Menu Design Files"
    ]
  },
  {
    id: 'bs6',
    name: 'Midjourney Stylization Bible',
    price: '$49',
    originalPrice: '$69',
    bullets: ['500+ Artist Styles', 'Lighting Library', 'Texture Reference'],
    ctaLink: '#',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=400',
    description: "The ultimate reference guide for Midjourney. Stop guessing artist names. Access a visual database of over 500 art styles, lighting setups, and texture modifiers to take total control of your generation.",
    features: [
      "Visual Style Glossary",
      "Lighting & Camera Angle Cheatsheet",
      "Texture & Material Library"
    ],
    whatIncluded: [
      "Interactive Notion Database",
      "PDF Reference Guide",
      "Monthly Style Updates"
    ]
  }
  },
{
  id: 'bs7',
    name: 'Viral YouTube Thumbnails',
      price: '$12',
        bullets: ['CTR-Optimized Layouts', 'Expression Reference', 'Text Overlay styles'],
          ctaLink: '#',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400',
              description: "The first thing they see is the thumbnail. If they don't click, they don't watch. This pack includes reliable midjourney prompts for generating high-contrast, click-baity (in a good way) thumbnail backgrounds and character expressions.",
                features: ["Face Retouching Prompts", "Background Blurs", "Text Placement Guides"],
                  whatIncluded: ["50 Thumbnail Concepts", "Canva Templates", "CTR Checklist"]
},
{
  id: 'bs8',
    name: 'IG Reels Caption Hooks',
      price: '$9',
        tag: 'Weekly',
          bullets: ['Viral Hooks Database', 'Call-to-Action Scripts', 'Hashtag Sets'],
            ctaLink: '#',
              image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=400',
                description: "Stop staring at a blank caption box. This database gives you 100+ proven hooks to stop the scroll, plus engagement-driving questions and calls to action for every niche.",
                  features: ["Psychological Hooks", "Storytelling Structures", "Sales CTAs"],
                    whatIncluded: ["Notion Caption Builder", "Top 50 Hooks PDF", "Emoji Combinations"]
},
{
  id: 'bs9',
    name: 'Brand Identity Gen',
      price: '$39',
        bullets: ['Logo Concept Generator', 'Color Palette Extractor', 'Brand Voice Guide'],
          ctaLink: '#',
            image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=400',
              description: "Build a cohesive brand visual system in minutes. Prompts for generating logo concepts, consistent color palettes across different media, and defining your brand's visual voice.",
                features: ["Logo Iteration Workflow", "Typography Pairing", "Mockup Generation"],
                  whatIncluded: ["Brand Style Guidelines Template", "Logo Prompt Library", "Color Theory Guide"]
},
{
  id: 'bs10',
    name: '30-Day Content Calendar',
      price: '$24',
        tag: 'Weekly',
          bullets: ['30 Days of Ideas', 'Platform Specific Plans', 'Trend Jacking'],
            ctaLink: '#',
              image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400',
                description: "Never run out of ideas again. A full 30-day content plan adaptable to any niche. Includes prompt chains to generate the actual content for each day's topic.",
                  features: ["Cross-Platform Strategy", "Content Pillars Definer", "Batch Creation Prompts"],
                    whatIncluded: ["Notion Calendar Template", "30 Day Prompt Chain", "Analytics Tracker"]
}
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Annie K.',
    role: 'Creator',
    stars: 5,
    quote: 'I used the free pack and instantly bought the bundle. Clean prompts, real results.',
    avatar: 'https://i.pravatar.cc/150?u=annie'
  },
  {
    id: 't2',
    name: 'J. Casper',
    role: 'Digital Products',
    stars: 5,
    quote: 'Weekly drops keep me consistent. I don\'t waste time thinking — I just post.',
    avatar: 'https://i.pravatar.cc/150?u=casper'
  },
  {
    id: 't3',
    name: 'Mary W.',
    role: 'Small Business',
    stars: 5,
    quote: 'The structure is the secret. Everything feels premium and ready-to-use.',
    avatar: 'https://i.pravatar.cc/150?u=mary'
  }
];

export const FAQS: FAQItem[] = [
  { question: "How do I receive the free pack?", answer: "Immediate delivery! After signing up, we'll email you a link to the Notion vault containing your 25+ starter prompts." },
  { question: "How do weekly drops work?", answer: "Every Tuesday, we release a new specialized prompt bundle. Free subscribers get a preview, Pro members get full access." },
  { question: "Is Stripe checkout active?", answer: "Yes, all transactions are secured by Stripe. You'll receive your digital downloads instantly after payment." },
  { question: "Can I request custom prompts?", answer: "Yes! Use the request form below. We specialize in building tailored workflows for creators and agencies." },
  { question: "Can I log everything to Google Sheets?", answer: "Our Pro bundles include automation templates (Zapier/Make) to push AI outputs directly to your favorite CRM or sheets." },
  { question: "Will this work on mobile?", answer: "Absolutely. Our prompts and Notion-based vault are optimized for mobile, desktop, and tablet use." }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Zap': return <Zap size={20} />;
    case 'Video': return <Video size={20} />;
    case 'Image': return <Image size={20} />;
    case 'MessageSquare': return <MessageSquare size={20} />;
    case 'Layout': return <Layout size={20} />;
    case 'Mail': return <Mail size={20} />;
    case 'Terminal': return <Terminal size={20} />;
    default: return <Sparkles size={20} />;
  }
};
