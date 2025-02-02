/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          dark: "var(--color-accent-dark)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: {
          DEFAULT: "var(--color-text)",
          light: "var(--color-text-light)",
        },
        border: "var(--color-border)",
      },
    },
  },
  plugins: [
    // Custom plugin to add opacity variants for our theme colors.
    function ({ addUtilities }) {
      const opacityUtilities = {};
      const colors = ["primary", "secondary", "accent", "text"];
      const opacities = {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      };

      colors.forEach((color) => {
        Object.entries(opacities).forEach(([key, value]) => {
          opacityUtilities[`.bg-${color}\\/${key}`] = {
            backgroundColor: `rgb(var(--color-${color}-rgb) / ${value})`,
          };
          opacityUtilities[`.text-${color}\\/${key}`] = {
            color: `rgb(var(--color-${color}-rgb) / ${value})`,
          };
          opacityUtilities[`.border-${color}\\/${key}`] = {
            borderColor: `rgb(var(--color-${color}-rgb) / ${value})`,
          };
          opacityUtilities[`.ring-${color}\\/${key}`] = {
            "--tw-ring-color": `rgb(var(--color-${color}-rgb) / ${value})`,
          };
          opacityUtilities[`.placeholder-${color}\\/${key}`] = {
            "::placeholder": {
              color: `rgb(var(--color-${color}-rgb) / ${value})`,
            },
          };
        });
      });

      addUtilities(opacityUtilities);
    },
  ],
};
