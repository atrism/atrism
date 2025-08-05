import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 静的エクスポート用の設定
  distDir: 'out',
};

export default nextConfig;
