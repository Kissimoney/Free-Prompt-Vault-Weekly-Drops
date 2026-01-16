/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mint: '#00B140',
                deepBlue: '#0A2540',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-cta': 'pulse-cta 3s ease-in-out infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shiver': 'shiver 0.5s linear infinite',
                'blink': 'blink 1s step-end infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                'dash': 'dash 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-cta': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 rgba(0, 177, 64, 0.4)'
                    },
                    '50%': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 0 12px rgba(0, 177, 64, 0)'
                    },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shiver: {
                    '0%, 100%': { transform: 'translate(0,0)' },
                    '25%': { transform: 'translate(1px, -1px)' },
                    '50%': { transform: 'translate(-1px, 1px)' },
                    '75%': { transform: 'translate(1px, 1px)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                dash: {
                    to: { 'stroke-dashoffset': '-20' }
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        }
    },
    plugins: [],
}
