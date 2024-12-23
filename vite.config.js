module.exports = {
  root: true,
  base: './',
  plugins: [],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
};