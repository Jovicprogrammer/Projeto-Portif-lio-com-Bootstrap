// tailwind.config.js

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ajuste esses caminhos pro seu projeto!
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      fontFamily: {
        goodold: ['var(--font-goodold)'],
        creato: ['var(--font-creato)'],
      },
    },
  },
  plugins: [],
};

export default config;
