import "../animations/animate.css";
import { motion } from "framer-motion";
import { imageAnimation } from "../animations/animations";
import GitHubCalendar from 'react-github-calendar';
// import clsx from 'clsx';
// import { useTheme } from 'next-themes';

export const Github = () => {
  // const { theme } = useTheme();

  return (
    <motion.section className='mt-[50px] lg:mt-[0px] lg:pb-[150px] lg:h-fit lg:w-fit max-h-[200px] lg:p-[20px]'>
        <p className='w-full max-w-[350px] lg:w-full lg:max-w-full'>
             <GitHubCalendar username="hvtienprotv84" />  
        </p>
    </motion.section>
  );
}

export default Github;
