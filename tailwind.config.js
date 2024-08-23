/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Hoặc 'media' nếu bạn muốn chế độ tối tự động dựa trên cài đặt hệ thống của người dùng
  theme: {
    extend: {
      colors: {
        'dark-text': '#e53e3e', // Màu đỏ cho chế độ tối
        'light-text': '#48bb78', // Màu xanh lá cho chế độ sáng
        
        'dark-text': '#ffffff', // Màu đỏ cho chế độ tối
        'light-text': '#ff0000', // Màu xanh lá cho chế độ sáng
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
