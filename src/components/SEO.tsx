import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title = "Free Prompt Vault & Weekly Drops | JK Ai Hub",
    description = "Get 25+ free high-quality AI prompts for Midjourney, Veo, and more. Join thousands of creators getting weekly drops of curated prompts.",
    image = "/og-image.jpg", // We should create/upload this
    url = "https://free-prompt-vault-weekly-drops.vercel.app/"
}: SEOProps) => {
    const fullTitle = title.includes("|") ? title : `${title} | JK Ai Hub`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};
