/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nippon-kaigo-dojo',
  assetPrefix: '/nippon-kaigo-dojo',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
