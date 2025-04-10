
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add environment variables that Next.js components expect
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_BASE_PATH: ''
  }
};

export default nextConfig;
