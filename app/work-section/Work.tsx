import React, { useEffect, useState } from 'react';
import ProjectGrid from "./ProjectGrid";
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const Work = () => {
  const { theme } = useTheme(); 
  const [bgColor, setBackgroundColor] = useState('');
  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    <section
      className={clsx("relative z-10 flex w-full flex-col items-center justify-center bg-cover bg-center py-16 md:py-20 lg:py-20",
        bgColor  
      )}
        id="work"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;
