/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Move this line outside the object
  trailingSlash: true,
  // other configurations...
  //assetPrefix: process.env.NODE_ENV === 'production' ? 'https://bradygomez.com/' : '',
};

// Export the configuration object
export default nextConfig;
