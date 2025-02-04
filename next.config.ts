import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["app", "pages", "components", "lib", "types"],
  },
  images: {
    localPatterns: [{ pathname: "/public/**/*", search: "" }],
    domains: ["pqrdckeuqfydcgbgrxcg.supabase.co"],
  },
};

export default nextConfig;
