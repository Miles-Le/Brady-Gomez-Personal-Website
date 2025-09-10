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
};

// Export the configuration object
export default nextConfig;
