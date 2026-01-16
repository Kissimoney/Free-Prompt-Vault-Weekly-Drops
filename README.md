
# Free Prompt Vault + Weekly Drops

A production-ready landing page for JK Ai Hub. Built with React, Tailwind CSS, and Supabase.

## 🚀 Setup Instructions

### 1. Supabase Setup
1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Paste the contents of `supabase/schema.sql` and run the script.
4. Go to **Project Settings > API** to get your `URL` and `Anon Key`.

### 2. Zapier Setup
1. **Lead Automation**: 
   - Trigger: "Catch Hook" (Copy the URL provided by Zapier).
   - Action: Add subscriber to your Email Platform (Mailchimp, Beehiiv, etc.).
   - Action: Send an automated email with the "Free Prompt Pack" link.
   - Action: Start a nurture/upsell sequence.
2. **Request Automation**:
   - Trigger: "Catch Hook" (Copy the URL).
   - Action: Send a notification to Slack/Discord/Email with the prompt request details.

### 3. Environment Variables
Add these to your Vercel project settings or `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ZAPIER_LEAD_WEBHOOK_URL=your_zapier_hook_1
ZAPIER_REQUEST_WEBHOOK_URL=your_zapier_hook_2
NEXT_PUBLIC_PROMPT_PACK_FALLBACK_URL=https://your-notion-vault-link.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Deployment
1. Push this code to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect the Next.js setup (ensure you are using the App Router structure if migrating).

## 🛠 Features
- **Hero Modal**: High-conversion lead capture.
- **Vault Grid**: Showcases categories with tags (Free/Pro/Weekly).
- **Weekly Drop Banner**: Static countdown feel to drive urgency.
- **Responsive Design**: Mobile-first architecture using Tailwind.
- **SEO Optimized**: OpenGraph meta tags ready for social sharing.

## 📦 Tech Stack
- React 18
- Tailwind CSS (Theming: `#00B140` Mint, `#0A2540` Deep Blue)
- Lucide React (Icons)
- Supabase (Backend/DB)
- Zapier (Workflow Automation)
