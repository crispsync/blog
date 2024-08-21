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
        primaryBackground: '#f8f9fa',    
        primaryText: '#334155',         
        secondaryText: '#64748b',        
        accent: '#38bdf8',               
        darkBackground: '#002b36',       
        darkPrimaryText: '#eee8d5',      
        darkSecondaryText: '#93a1a1',    
        darkAccent: '#cb4b16',           
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#0ea5e9',
              },
            },
            h1: {
              color: '#334155',
            },
            h2: {
              color: '#334155',
            },
            blockquote: {
              color: '#64748b',
              borderLeftColor: '#38bdf8',
            },
            code: {
              color: '#e11d48',
              backgroundColor: '#f1f5f9',
            },
          },
        },
        dark: {
          css: {
            color: '#eee8d5',
            a: {
              color: '#cb4b16',
              '&:hover': {
                color: '#b58900',
              },
            },
            h1: {
              color: '#eee8d5',
            },
            h2: {
              color: '#eee8d5',
            },
            blockquote: {
              color: '#93a1a1',
              borderLeftColor: '#b58900',
            },
            code: {
              color: '#d33682',
              backgroundColor: '#073642',
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

