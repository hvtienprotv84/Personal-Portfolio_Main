"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container font-sans flex flex-col lg:flex-row items-center justify-center gap-[5px] overflow-hidden text-[20px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Tôi là Huỳnh Vĩnh Tiến,</span>
        <span>Software Engineer,</span>
        <span className="hidden lg:block">Front-End Developer,</span>
        <span className="hidden lg:block">Designer UI/UX.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
