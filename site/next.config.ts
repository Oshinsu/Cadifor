import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
