import React, { useEffect, useState } from 'react';
import "../animations/animate.css";
import { motion } from "framer-motion";
import { imageAnimation } from "../animations/animations";
import GitHubCalendar from 'react-github-calendar';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Link from "next/link";
import AnimatedBody from "../animations/AnimatedBody";

export const Github = () => {
  const { theme } = useTheme();
  const [bgColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    // <motion.section className={clsx('mt-[50px] lg:mt-[0px] lg:pb-[150px] lg:h-fit lg:w-fit max-h-[200px] lg:p-[20px]',
    //   bgColor  
    // )}
    // >
    //     <p className='w-full max-w-[350px] lg:w-full lg:max-w-full'>
    //          <GitHubCalendar username="hvtienprotv84" />  
    //     </p>
    // </motion.section>

    <motion.section
      className={clsx("w-full flex justify-center items-center lg:pb-[50px]",
      bgColor  
    )}
      initial="initial"
      animate="animate"
    >
      <motion.div className="">
      
        <div className='w-full max-w-[350px] lg:w-full lg:max-w-full mt-[20px] pb-[20px]'>
            <GitHubCalendar username="hvtienprotv84" /> 
        </div>
        {/* <iframe className='w-full h-[300px] mt-[-50px] bg-current mb-[-50px] lg:mt-[0px] lg:mb-[0px] border-[1px]' src="https://github-readme-activity-graph.vercel.app/graph?username=hvtienprotv84&theme=react-dark" title="GitHub Activity Graph"></iframe> */}
        <iframe className='w-[360px] lg:w-full h-[128px] lg:h-[300px] mt-[20px] mb-[50px] lg:mt-[0px] lg:mb-[0px] border-[1px] bg-transparent' src="https://github-readme-activity-graph.vercel.app/graph?username=hvtienprotv84&theme=react-dark" title="GitHub Activity Graph"></iframe>
      </motion.div>
    </motion.section>
  );
}

export default Github;
