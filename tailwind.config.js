/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(204, 70%, 53%)',
        accent: 'hsl(35, 90%, 50%)',
        bg: 'hsl(220, 15%, 12%)',
        surface: 'hsl(220, 15%, 18%)',
        'text-primary': 'hsl(0, 0%, 95%)',
        'text-secondary': 'hsl(0, 0%, 70%)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      spacing: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(0, 0%, 0%, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(135deg, hsl(240, 70%, 60%) 0%, hsl(220, 80%, 50%) 50%, hsl(200, 90%, 45%) 100%)',
      },
    },
  },
  plugins: [],
}
