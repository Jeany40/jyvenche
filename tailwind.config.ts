/**
 * Tailwind CSS Configuration
 * 
 * Design System: Dark luxury minimalist aesthetic
 * - Near-black backgrounds with subtle warmth
 * - Warm off-white/ivory text
 * - Muted gold/bronze accents
 * - Strong typography with generous spacing
 */

import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Custom color palette for dark luxury aesthetic
            colors: {
                // Primary backgrounds - near-black with subtle warmth
                background: {
                    DEFAULT: '#050505', // Slightly darker for higher contrast
                    secondary: '#0F0F0F',
                    tertiary: '#1a1a1a',
                },
                // Text colors - warm ivory tones
                foreground: {
                    DEFAULT: '#FFFFFF', // Pure white for primary
                    secondary: '#D4D4D8', // Zinc-300 for secondary (much lighter than A1A1AA)
                    muted: '#A1A1AA', // Zinc-400 for muted (lighter than 525252)
                },
                // Accent colors - muted gold/bronze
                accent: {
                    DEFAULT: '#D4AF37', // Classic Gold
                    hover: '#E5C158',
                    muted: '#8B7355',
                },
                // Border colors
                border: {
                    DEFAULT: 'rgba(255, 255, 255, 0.08)',
                    hover: 'rgba(255, 255, 255, 0.15)',
                },
            },
            // Custom shadows
            boxShadow: {
                'glow': '0 0 20px rgba(201, 169, 98, 0.4)',
                'glass': '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
            // Typography system
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['DM Serif Display', 'Georgia', 'serif'],
            },
            // Generous spacing for luxury feel
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            // Max content width for readability
            maxWidth: {
                'content': '1200px',
            },
            // Custom letter spacing
            letterSpacing: {
                'tight': '-0.02em',
                'tighter': '-0.04em',
                'wide': '0.05em',
                'wider': '0.1em',
                'widest': '0.2em',
            },
            // Custom fade animations
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'blob': 'blob 20s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}

export default config
