/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.hellofresh.com',
        port: '',
        pathname: '/q_auto/recipes/image/*'
      },
    ]
  }
}

module.exports = nextConfig;
