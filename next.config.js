// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  future: {
    webpack5: true,
  },
}

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  nextConfig
]);
