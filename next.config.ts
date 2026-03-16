import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep tracing scoped to this project to avoid parent lockfile auto-detection.
  outputFileTracingRoot: path.resolve(__dirname),
  reactCompiler: true,
};

export default nextConfig;
