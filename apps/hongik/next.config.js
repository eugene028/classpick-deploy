/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hc/ui', '@hc/utils'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true
  }, 
}

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error);
});

module.exports = nextConfig