
export interface PromptCategory {
  id: string;
  label: string; // e.g., 'NE', 'V3'
  title: string;
  benefit: string;
  tag: 'Free' | 'Pro' | 'Weekly';
  icon: string;
}

export interface BestSeller {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string; // e.g., 'Best Value', '10% Off', 'New'
  bullets: string[];
  ctaLink: string;
  image: string;
  description?: string;
  features?: string[];
  whatIncluded?: string[];
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Interest = 'Creator' | 'Business' | 'Designer' | 'Agency';
export type Urgency = 'Low' | 'Medium' | 'High' | 'Immediate';
export type BudgetRange = '< $100' | '$100 - $500' | '$500 - $2k' | '$2k+';

export interface LeadFormState {
  name: string;
  email: string;
  interest: Interest | '';
}

export interface RequestFormState {
  name: string;
  email: string;
  prompt_type: string;
  deadline: string;
  details: string;
}
