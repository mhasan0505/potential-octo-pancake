/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },

    fontSize: {
      // Product prices, small text, footer links
      xs: ["12px", "18px"],
      // Base body text, product descriptions
      sm: ["14px", "20px"],
      // Product titles, section subheadings
      base: ["16px", "24px"],
      // Navigation, buttons, important elements
      md: ["18px", "28px"],
      // Section headings, featured product titles
      lg: ["24px", "36px"],
      // Main headlines, hero section
      xl: ["32px", "48px"],
      // Large hero headlines, special promotions
      "2xl": ["40px", "48px"],
      // Extra large display text (sparingly used)
      "3xl": ["48px", "72px"],
      "4xl": ["56px", "84px"],
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ACC1',  // Main brand color (aqua)
          light: '#4DD0E1',    // Lighter shade for hover states
          dark: '#0097A7',     // Darker shade for active states
        },
        secondary: {
          DEFAULT: '#FF7043',  // Coral accent color
          light: '#FF8A65',    // Lighter coral for hover
          dark: '#F4511E',     // Darker coral for active
        },
        neutral: {
          50: '#F8FAFC',       // Lightest background
          100: '#F1F5F9',      // Light background
          200: '#E2E8F0',      // Borders
          300: '#CBD5E1',      // Disabled states
          400: '#94A3B8',      // Muted text
          500: '#64748B',      // Secondary text
          600: '#475569',      // Primary text
          700: '#334155',      // Headings
          800: '#1E293B',      // Dark text
          900: '#0F172A',      // Darkest text
        },
        success: '#4CAF50',    // Success states
        warning: '#FFC107',    // Warning states
        error: '#FF5252',      // Error states
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
