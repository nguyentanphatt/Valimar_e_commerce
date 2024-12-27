import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['valimar-image.s3.amazonaws.com', 'valimar-image.s3.ap-southeast-2.amazonaws.com']
  }
};

export default nextConfig;
