/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'calculator-bg': '#F5F5F5',
        'calculator-panel': '#000000',
        'calculator-gray': '#8E8E93',
        'calculator-button': '#333333',
        'calculator-button-hover': '#404040',
        'calculator-button-ac': '#A6A6A6',
        'calculator-button-ac-hover': '#B8B8B8',
        'calculator-button-op': '#FF9500',
        'calculator-button-op-hover': '#FFB84D',
        'calculator-text': '#FFFFFF',
        'calculator-text-ac': '#000000',
        'calculator-sidebar': '#1C1C1E',
        'calculator-sidebar-dark': '#2C2C2E',
        'calculator-focus': '#007AFF',
      },
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'calculator': '0 6px 30px rgba(0, 0, 0, 0.15)',
        'calculator-button': '0 4px 12px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'calculator': '20px',
        'calculator-sm': '12px',
      },
      spacing: {
        'calculator-gap': '12px',
      }
    },
  },
  plugins: [],
}
