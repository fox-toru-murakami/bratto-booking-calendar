import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 静的ファイルをエクスポート
  basePath: process.env.NODE_ENV === 'production' ? '/bratto-booking-calendar' : '',
  images: {
    unoptimized: true,  // GitHub Pagesで必要
  },
  trailingSlash: true,  // URL末尾にスラッシュを追加（GitHub Pages用）
};

export default nextConfig;
