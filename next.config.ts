import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["app", "pages", "components", "lib", "types"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pqrdckeuqfydcgbgrxcg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
