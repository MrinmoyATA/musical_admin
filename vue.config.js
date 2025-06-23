module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts', // Changed from main.js to main.ts
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: config => {
    config.resolve.symlinks(false) // Helps with dependency conflicts
  }
}