"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from "./CertificateCard";
import { blogDetails } from "./CertificateDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from "next/link";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import Navbar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Blog = () => {
  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
    setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    <div className="flex flex-col">
    <section className={clsx("z-10 flex w-full mt-[-100px] lg:mt-[-100px] flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32",
      bgColor  
      )}
      >
      <div id="certificate" className="mb-[60px]"></div>
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"certificate"}
          style={clsx(`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`,
            textColor  
          )}
        />
        {/* <AnimatedBody
          text="I write articles to reinforce my knowledge and help out others who might be building something similar."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        /> */}
      </div>
      <div className="lg:w- [850px] grid w-[90%] max-w-[1400px] grid-cols-1 grid-rows-4 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-1">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
      <div className='pb-[50px]'></div>
    </section>
       <Footer/>
    </div>
  );
};

export default Blog;
