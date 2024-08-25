/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Để tạo ra các đường dẫn với dấu gạch chéo cuối
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com", "cdn.dribbble.com"],
  },
  webpack: (config, { dev, isServer }) => {
    // Thực hiện thay đổi cấu hình Webpack ở đây nếu cần
    return config;
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
