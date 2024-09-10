"use client";
import { useState, useEffect } from "react";
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import vietnam from "../public/star-vietnam.png";
import mongo from "../public/logo-mongo.png";
import Image from "next/image";
import './globals.css';

export default function Home() {
  const [books, setBooks] = useState([]);
  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBackgroundColor] = useState('');

  // Fetch data from server on initial render
  useEffect(() => {
    fetch("/api/hello/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
    setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    <>
      {/* <h1 className="relative mt-3 ml-[45%] text-white text-3xl p-3 font-bold border inline-block">
        Books List
      </h1>
      <br /> */}
      <div className={clsx("lg:w-full pt-[20px] pb-[80px] lg:flex-wrap mt-0 flex flex-col shadow-md mx-auto my-5",
         bgColor
      )}
      >
        {books.length === 0 ? (
          <p className="font-sans font-bold flex justify-center items-center">Không có sự kiện nào gần đây!</p>
        ) : (
          books.map((book) => (
            <>
            <div className="flex justify-center items-center">
              <div
                key={book._id}
                className="bg-[#db261e] p-3 rounded-md shadow-md inline-block m-2 lg:max-w-[900px] lg:w-full"
              >
                <div className="flex flex-row items-center max-w-full w-full">
                  <div className="w-[20%] lg:w-[5%]">
                    {/* <img className="w-3 h-3" src={vietnam} alt=""/> */}
                    <Image
                        src={vietnam}
                        alt="hero"
                        className="lg:w-[50px] max-w-[100px] w-full"
                      />
                    </div>
                  <div className="flex flex-col lg:ml-[15px] ml-[20px] lg:w-[95%] w-[80%]">
                    <h1 className="text-[#ff0] font-bold font-sans w-full lg:text-[32px] text-[18px]">{`Sự kiện: ${book.title}`}</h1>
                    <p className="text-[#ffffff] font-bold font-sans w-full lg:text-[16px] text-[14px]">{`Ngày đăng: ${book.author}`}</p>
                  </div>
                </div>
              </div>
            </div>
            </>
          ))
        )}
        {/* <span className="font-sans font-bold flex justify-center items-center">(Dữ liệu được tạo và hiển thị bởi MongoDB)</span> */}
        <div className="flex flex-row justify-center item-center font-sans font-bold">
          <span className="">(Dữ liệu được tạo và hiển thị bởi </span>
          <Image
            src={mongo}
            alt="hero"
            className="lg:w-[10px] w-[10px] ml-[5px]"
          />
          <span className="ml-[5px]">MongoDB)</span>
        </div>
      </div>
    </>
  );
}
