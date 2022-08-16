const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  compiler: {
    styledComponents: true | {
      ssr: true,
    },
  },
  images: {
    domains: [ 'valorant-api.com', 'media.valorant-api.com'],
  },
})
