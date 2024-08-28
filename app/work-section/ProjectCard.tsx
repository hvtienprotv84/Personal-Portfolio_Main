import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from 'next-themes';

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {

  const { theme } = useTheme();
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-white' : 'text-green-600')
    setBackgroundColor(theme === 'dark' ? 'border-[#0E1016]' : 'bg-[#ffb800]');
  }, [theme]);

  return (
    
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="trues"
              />
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute text-white  ${
          !(id % 2 === 0)
            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
        } mb-10  md:mb-16 lg:mb-14 `}
      >
        <AnimatedTitle
          text={name}
          // className={
          //   "max-w-[90%] text-[28px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[45px] lg:leading-none"
          className={clsx(
            'max-w-[90%] text-[28px] lg:mt-[-20px] leading-none md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[45px] lg:leading-none',
            textColor
          )}
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
          }
        />
        <div className="mt-9 flex flex-wrap gap-4 lg:w-[450px]">
        {technologies.map((tech, id) => {
          // Xác định các lớp CSS cho các công nghệ khác nhau
          let bgColorClass;
          if (tech === "JavaScript") {
            bgColorClass = "bg-[#f9dc43]"; // Màu nền vàng
          } else if (tech === "ReactJS") {
            bgColorClass = "bg-[#61dafb]"; // Màu nền xanh nước biển
          } else if (tech === "Tailwind CSS") {
            bgColorClass = "bg-[#16becb]"; // Màu nền xanh lá cây
          }else if (tech === "Vite") {
            bgColorClass = "bg-[#aa55ff]"; // Màu nền xanh lá cây
          }else if (tech === "VueJS") {
            bgColorClass = "bg-[#47ba87]"; // Màu nền xanh lá cây
          }else if (tech === "Angular") {
            bgColorClass = "bg-[#c50836]"; // Màu nền xanh lá cây
          }else if (tech === "TypeScript") {
            bgColorClass = "bg-[#377cc8]"; // Màu nền xanh lá cây
          }else if (tech === "CSS") {
            bgColorClass = "bg-[#306af1]"; // Màu nền xanh lá cây
          }else if (tech === "NextJS") {
            bgColorClass = "bg-[#000000] border-[1px] border-white"; // Màu nền xanh lá cây
          }else if (tech === "NuxtJS") {
            bgColorClass = "bg-[#00dc82]"; // Màu nền xanh lá cây
          }

          // Tạo phần tử cho mỗi công nghệ
          const displayContent = (
            <div className="flex items-center">
              {bgColorClass && (
                <div className={`${bgColorClass} w-[12px] h-[12px] rounded-full mr-[5px]`}></div>
              )}
              <span className="text-[10px] font-bold md:text-[16px] lg:text-[18px]">
                {tech}
              </span>
            </div>
          );

            return (
              <div
                  key={id}
                  className="mr-[0.25em]">
                  {displayContent}
              </div>
            );
            })}
            </div>

            {/* BẢN GỐC ĐÃ THÊM ĐIỀU KIỆN */}
            {/* <div className="mt-9 flex gap-4">
              {technologies.map((tech, id) => {
                // Kiểm tra nếu tên công nghệ là "JavaScript"
                const displayText = tech === "JavaScript" ? `A${tech}` : tech;

                return (
                  <AnimatedTitle
                    text={displayText}
                    wordSpace={"mr-[0.25em]"}
                    charSpace={"mr-[0.01em]"}
                    key={id}
                    className={
                      "text-[10px] font-bold md:text-[16px] lg:text-[18px] "
                    }
                  />
                );
              })}
            </div> */}

        {/* BẢN GỐC */}
        {/* <div className="mt-9 flex gap-4">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[10px] font-bold md:text-[16px] lg:text-[18px] "
              }
            />
          ))}
        </div> */}

      </div>
    </motion.div>
  );
};

export default ProjectCard;
