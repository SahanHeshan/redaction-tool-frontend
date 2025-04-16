//next.config.ts
import type { NextConfig } from "next";
const { withNextVideo } = require("next-video/process");

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withNextVideo(nextConfig);
