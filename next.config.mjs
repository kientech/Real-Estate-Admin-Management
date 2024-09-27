/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com", // Thay đổi hostname cho đúng với hình ảnh bạn đang sử dụng
      },
    ],
  },
};

export default nextConfig;
