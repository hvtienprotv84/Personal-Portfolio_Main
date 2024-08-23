import "../animations/animate.css";
import { motion } from "framer-motion";
import { imageAnimation } from "../animations/animations";
import GitHubCalendar from 'react-github-calendar';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export const Github = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      className={clsx(
        'mt-[50px] lg:mt-[0px] lg:pb-[100px]',
        theme === 'dark' ? 'bg-white' : 'bg-black'
      )}
    >
      <p className={clsx('w-full max-w-[350px] lg:w-full lg:max-w-full', theme === 'dark' ? 'bg-white' : 'bg-black' )}>
        <GitHubCalendar username="hvtienprotv84" />  
      </p>
    </motion.section>
  );
}

export default Github;
