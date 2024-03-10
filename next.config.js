/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com', 'google.com', 'source.unsplash.com']
  }
}

module.exports = nextConfig
