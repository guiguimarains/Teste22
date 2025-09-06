// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  }
};
export default nextConfig;
