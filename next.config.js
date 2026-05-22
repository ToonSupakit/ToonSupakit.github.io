/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/Portfolio',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
