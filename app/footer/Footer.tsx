import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[100%] flex-col lg:flex-row items-center justify-between text-center text-[14px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
      
      <motion.div className="flex flex-row justify-center items-center">
        <AnimatedBody text={`©️ All Rights Reserved ${year}`} className={"m-0 p-0"} />
        <img className="w-[100px] ml-[5px]" src="https://visits.chhatreshkhatri.com/unique ID?label=Lượt truy cập   &LSHW=000000&CSHW=000000&SHWO=30&swap=0&LBGC=484848&CBGC=1CA2F1&LTC=FFFFFF&CTC=FFFFFF" alt=""/>
      </motion.div>
      
        <div className="flex flex-row lg:flex-row sm:flex-row sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Được xây dựng bởi"}
            className={"m-0 p-0"}
          />
          <Link
            href="/"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Huỳnh Vĩnh Tiến"} className={"m-0 p-0 ml-[5px] lg:ml-[-5px]"} />
            </span>{" "}
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
