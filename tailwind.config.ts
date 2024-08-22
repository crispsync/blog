import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',  // Preserve your dark mode class strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Include Next.js pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // Include Next.js components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // Include Next.js app directory if used
    "./public/index.html",  // Retain your public HTML reference if needed
    "./src/**/*.{js,jsx,ts,tsx,md}",  // Maintain your existing paths
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Keep your font family
      },
      colors: {
        primaryBackground: '#f8f9fa',  // Light background
        primaryText: '#334155',  // Dark text for better contrast
        secondaryText: '#475569',  // Slightly darker for better contrast
        accent: '#2563eb',  // Darker blue for improved contrast
        accentHover: '#1e40af',  // Even darker for hover state
        darkBackground: '#002b36',  // Dark background
        darkPrimaryText: '#eee8d5',  // Light text for dark mode
        darkSecondaryText: '#93a1a1',  // Light text for dark mode
        darkAccent: '#b58900',  // Lighter accent color for dark mode
        darkAccentHover: '#cb4b16',  // Darker accent for hover in dark mode
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',  // Primary text color
            a: {
              color: '#2563eb',  // Accent color
              '&:hover': {
                color: '#1e40af',  // Darker accent on hover
              },
            },
            h1: {
              color: '#334155',  // Primary heading color
            },
            h2: {
              color: '#334155',  // Secondary heading color
            },
            blockquote: {
              color: '#475569',  // Secondary text color
              borderLeftColor: '#2563eb',  // Accent border
            },
            code: {
              color: '#e11d48',  // Code color
              backgroundColor: '#f1f5f9',  // Light background for code
            },
          },
        },
        dark: {
          css: {
            color: '#eee8d5',  // Primary text color for dark mode
            a: {
              color: '#b58900',  // Accent color for dark mode
              '&:hover': {
                color: '#cb4b16',  // Hover color for dark mode
              },
            },
            h1: {
              color: '#eee8d5',  // Heading color for dark mode
            },
            h2: {
              color: '#eee8d5',  // Heading color for dark mode
            },
            blockquote: {
              color: '#93a1a1',  // Secondary text color for dark mode
              borderLeftColor: '#b58900',  // Accent border for dark mode
            },
            code: {
              color: '#d33682',  // Code color for dark mode
              backgroundColor: '#073642',  // Dark background for code
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Keep your existing plugin
  ],
};

export default config;
