import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon3.png";
import clsx from "clsx";
import { useTheme } from "next-themes";
// import './ConnectSection.css'; // Import CSS module
import Square from "./Square";

const EmailContact = () => {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === "dark" ? "border-[#000000]" : "border-[#ff0000]");
    // setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
    setBackgroundColor(theme === "dark" ? "bg-[#ff0000]" : "bg-[#ff0000]");
  }, [theme]);

  // const handleCopy = () => {
  //   const input = document.getElementById('copyInput');
  //   input.select();
  //   input.setSelectionRange(0, 99999); // Đối với các thiết bị di động
  //   document.execCommand('copy');

  //   // Tùy chọn: Thông báo cho người dùng đã sao chép
  //   alert('Đã sao chép: ' + input.value);
  // };

  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopy = () => {
    // Lấy đối tượng input
    const copyInput = document.getElementById('copyInput') as HTMLInputElement | null;

    // Kiểm tra nếu đối tượng input không phải là null
    if (copyInput) {
      // Chọn nội dung của input
      copyInput.select();
      copyInput.setSelectionRange(0, 99999); // Đối với thiết bị di động

      // Sao chép nội dung vào clipboard
      navigator.clipboard.writeText(copyInput.value)
        .then(() => {
          // Cập nhật trạng thái để hiển thị thông báo sao chép thành công
          setCopySuccess('Nội dung đã được sao chép!');
          // Xóa thông báo sau 3 giây
          setTimeout(() => setCopySuccess(null), 3000);
        })
        .catch((err) => {
          // Xử lý lỗi nếu cần
          console.error('Lỗi sao chép nội dung: ', err);
          setCopySuccess('Lỗi sao chép nội dung.');
          setTimeout(() => setCopySuccess(null), 3000);
        });
    } else {
      // Xử lý trường hợp không tìm thấy đối tượng input
      console.error('Không tìm thấy đối tượng input.');
    }
  };

  return (
    <motion.section
      className="connect"
      id="connect"
      initial="initial"
      animate="animate"
    >
        <div className="flex justify-start mt-3 items-center rounded-l-lg">
        <p className="font-bold pr-1">Email: </p>
        <input
        id="copyInput"
        defaultValue="huynhvinhtien.84@gmail.com"
        readOnly
        className="py-1 indent-2 rounded-l-lg text-base font-bold h-[40px] w-[280px] lg:w-[280px] focus:outline-none bg-white text-black"
        name="text"
        type="text"
      />
      <button
        onClick={handleCopy}
        className="py-1 rounded-r-lg text-white bg-green-300 flex justify-center items-center w-10 h-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none"
        >
          <rect width="24" height="24"></rect>
          <rect
            x="4"
            y="8"
            width="12"
            height="12"
            rx="1"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></rect>
          <path
            d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          ></path>
        </svg>
      </button>
      </div>
      {/* Hiển thị thông báo sao chép dưới dạng thẻ p */}
      {copySuccess && (
        <p className="mt-1 text-green-500 font-semibold ml-[65px]">
          {copySuccess}
        </p>
      )} 
    </motion.section>
  );
};

export default EmailContact;
