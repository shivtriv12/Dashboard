import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  },
  images: {
    domains: ['www.google.com'], 
  },
};
 
export default nextConfig;