import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
