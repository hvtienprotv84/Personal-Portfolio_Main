import React, { useEffect, useState } from 'react';
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import clsx from 'clsx';
import { useTheme } from 'next-themes';
const About = () => {
  const { theme } = useTheme(); 
  const [bgColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setBackgroundColor(theme === 'dark' ? 'border-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    <section
      className={clsx("relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:mt-[-100px] lg:pb-56",
        bgColor  
      )}
      id="skills"
    >
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-0">
          <SongCarousel />
        </div>
    </section>
  );
};

export default About;
