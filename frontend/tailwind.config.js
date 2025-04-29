module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./server.ts",
    "./src/**/*.component.html"
  ],
  theme: {
    extend: {
      animation: {
        like_effect: 'like_effect 400ms ease',
      },
      keyframes: {
        like_effect: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // Opcional: ayuda a evitar conflictos con estilos base
  }
}