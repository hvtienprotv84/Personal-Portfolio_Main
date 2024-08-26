import React, { useEffect, useState } from 'react';
import { reviewProps } from "./reviewDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import profile from "../../public/samuel.avif";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const BlogCard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  title_name,
  year_exp,
  index,
} : reviewProps) => {
  const abbreviateName = (name: string): string => {
    const [firstName, middleName, lastName] = name.split(" ");
    return `${firstName} ${middleName} ${lastName}`;
  };

  // const abbreviateName = (name: string): string => {
  //   const [firstName, lastName] = name.split(" ");
  //   return ${firstName} ${lastName[0]}.;
  // };

  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');
  const [textColorRoleCompany, setTextColorRoleCompany] = useState('');
  const [textColorMyName, setTextColorMyName] = useState('');
  
  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-black')
    setTextColorRoleCompany(theme === 'dark' ? 'text-[#95979D]' : 'text-black')
    setTextColorMyName(theme === 'dark' ? 'text-[#95979D]' : 'text-black')
  }, [theme]);  

  return (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1 * index,
        ease: [0.44, 0, 0.22, 0.99],
      },
    }}
    viewport={{
      amount: "some",
      once: true,
    }}
      className="relative flex h-[320px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-center sm:justify-start lg:h-[393px] lg:max-w-[438px] "
    >
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      <p className={clsx("text-[15px] mt-[30px] lg:mt-[15px] lg:text-[18px] flex w-full items-center justify-center font-bold font-sans leading-relaxed tracking-wide",
       textColor  
      )}
      >
        {title_name}
      </p>

      <p className="whitespace-pre-wrap text-[14px] h-fit mb-[200px] lg:text-[18px] font-[500] leading-relaxed tracking-wide">
        {testimonial}
      </p>

      <div className="flex gap-3 sm:absolute mt-[-160px] lg:mt-[0px] sm:bottom-[28px] sm:left-[28px]">
        <Image
          src={profileImg}
          alt={"title"}
          width={1600}
          height={840}
          data-blobity-tooltip="Tôi là Huỳnh Vĩnh Tiến"
          className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover grayscale hover:grayscale-0"
        />
        <div className="flex flex-col gap-1 pr-7 w-full max-w-full">
          <h3 className={clsx("w-full max-w-full text-[23px] font-sans font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]",
          textColorMyName
          )}
          data-blobity-tooltip="Đây là tên của tôi!"
          >
            {abbreviateName(name)}
          </h3>
          <p className={clsx("text-[12px] lg:text-xl font-[500] leading-[16px]",
           textColorRoleCompany  
          )}
          >
            {role}: {company}
          </p>
          <h5>
            {year_exp}
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
