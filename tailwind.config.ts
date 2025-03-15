// tailwind.config.ts or tailwind.config.js
import animate from "tailwindcss-animate";

export default {
  content: [
    // your paths
  ],
  theme: {
    extend: {
      dark: {
        background: '#121212',
        surface: '#1A1A1A',
        card: '#222222',
        border: '#2C2C2C',
        text: '#F5F5F5',
        secondaryText: '#C0C0C0',
        accent: '#6366F1',
      }
    },
  },
  plugins: [animate],
};
