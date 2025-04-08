import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'bratto-booking-calendar'

const nextConfig: NextConfig = {
  output: 'export',  // 静的ファイルをエクスポート
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '/',
  // URLの末尾にスラッシュを追加
  trailingSlash: true,
  // GitHub Pagesのための画像最適化を無効化
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
