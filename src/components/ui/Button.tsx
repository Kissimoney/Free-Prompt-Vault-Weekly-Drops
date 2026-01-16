import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70";

        const variants = {
            primary: "bg-mint text-white hover:bg-mint/90 hover:scale-[1.02] hover:shadow-xl hover:shadow-mint/20 focus:ring-mint shadow-lg shadow-mint/10 rounded-xl",
            secondary: "bg-deepBlue text-white hover:bg-deepBlue/90 hover:scale-[1.02] hover:shadow-xl hover:shadow-deepBlue/20 focus:ring-deepBlue shadow-lg shadow-deepBlue/10 rounded-[28px]", // Note: Secondary usage often had larger rounded radius in original code, normalizing to xl or keeping specific? Original App.tsx had btnSecondary on one button with specifically rounded-[28px] and another with default. I'll stick to classes passed in className for shape if needed, or default to rounded-xl. I'll make it rounded-xl by default and let className override.
            outline: "border-2 border-gray-100 hover:border-mint/30 hover:bg-gray-50 hover:scale-[1.02] focus:ring-mint rounded-2xl",
            ghost: "hover:text-mint hover:scale-[1.05] focus:text-mint focus:ring-mint/20 rounded-lg active:scale-95 text-gray-500",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
