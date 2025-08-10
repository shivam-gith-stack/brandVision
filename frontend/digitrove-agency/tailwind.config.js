/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind scans your components
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 5%, 84%)",
        input: "hsl(240, 5%, 96%)",
        ring: "hsl(240, 5%, 64%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 10%, 10%)",
        primary: "hsl(240, 100%, 60%)",
        "primary-foreground": "hsl(0, 0%, 100%)",
        muted: "hsl(240, 4%, 95%)",
        "muted-foreground": "hsl(240, 5%, 50%)",
      },
    },
  },
  plugins: [],
}
