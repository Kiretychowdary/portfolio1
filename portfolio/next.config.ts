import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export for GitHub Pages
  basePath: "/portfolio1", // Must match your GitHub repository name
  images: {
    unoptimized: true,     // Required for static export (no image optimization server)
  },
};

export default nextConfig;
