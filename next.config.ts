import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
};

// Font Awesome configuration
// This prevents Font Awesome from adding its CSS automatically
// so we can add it manually in _app.js or layout.tsx
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;

export default nextConfig;
