/** @type {import('tailwindcss').Config} */
module.exports = {
  // The 'content' array tells Tailwind where your component files are.
  // Tailwind will scan these files for utility classes and generate the
  // corresponding CSS. This path should point to all your React components.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
