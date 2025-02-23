import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore: experimental.appDirが型定義にないため無視します
    appDir: true,
  },
};

export default nextConfig;
