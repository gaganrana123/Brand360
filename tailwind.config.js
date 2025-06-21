module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#155c94',
        'backgroundColor': "#f8fafc",
        
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        custom: ["'Fontspring Bold Italic'", "sans-serif"],
        Qasira: ["Qasira", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
  
  ],
};
