import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/atrism' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/atrism/' : '',
  // 静的エクスポート用の設定
  distDir: 'out',
};

export default nextConfig;
