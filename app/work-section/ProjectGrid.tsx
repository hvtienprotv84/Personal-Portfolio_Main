import React, { useEffect, useState } from 'react';
import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
// import { useState } from "react";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);
  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
  }, [theme]);  
  return (
    <>
    <AnimatedWords2
          title={"Portfolio"}
          style={clsx(`flex max-w-[500px] mb-[50px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:mt-[-20px] lg:text-center text-[clamp(70px,14vw,155.04px)]`,
            textColor  
          )}
          />
          {/* <motion.p>
            <Text tid="exploreHeader" />
          </motion.p> */}

      {/* <motion.p
      className={clsx(
        `flex max-w-[500px] mb-[50px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:mt-[-20px] lg:text-center text-[clamp(70px,14vw,155.04px)]`,
        textColor
        )}
      >
        <Text tid="exploreHeader" />
      </motion.p> */}

        {/* <Text tid="exploreHeader" className={clsx(
        `flex max-w-[500px] mb-[50px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:mt-[-20px] lg:text-center text-[clamp(70px,14vw,155.04px)]`,
        textColor
        )} /> */}


      {/* <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div> */}

      {/* {filter ? ( */}
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:mt-[100px] lg:grid-cols-1">
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
      {/* ) : (
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-6 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              bgColor={project.bgColor}
              available={project.available}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default ProjectGrid;
