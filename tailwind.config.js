/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          primary: "#0A2540",      // Deep Sapphire Navy
          dark: "#061526",         // Dark Navy
          burgundy: "#1B365D",     // Rich Royal Blue
          gold: "#D4AF37",         // Luxury Champagne Gold
          goldLight: "#F3E5AB",
          goldDark: "#AA820A",
          cream: "#F4F7FC",        // Soft Ice-Blue Off-White
          creamDark: "#E2E8F0",
          text: "#1E293B",         // Deep Slate Text
          muted: "#64748B",        // Muted Slate
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(10, 37, 64, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'card-hover': '0 25px 50px -12px rgba(10, 37, 64, 0.25)',
      },
    },
  },
  plugins: [],
};
