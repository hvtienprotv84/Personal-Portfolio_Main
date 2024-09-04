import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { monaSans } from "../fonts/monaSans";
import AnimatedWords2 from "../animations/AnimatedWords2";
import clsx from "clsx";
import { useTheme } from "next-themes";
import profile from "../../public/hero-about.png";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

interface Post {
  id: number;
  name: string;
  technologies: string;
  content: string;
  graduate: string;
  exp: string;
}

const AboutMe: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { theme } = useTheme();
  const [textColor, setTextColor] = useState("");
  const [textColorName, setTextColorName] = useState("");
  const [textColor2, setTextColor2] = useState("");
  const [textColorTech, setTextColorTech] = useState("");
  const [bgColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
    setTextColorName(theme === 'dark' ? 'text-[#00ff90]' : 'text-[#f1490b]')
    setTextColorTech(theme === 'dark' ? 'text-[#e8ff00]' : 'text-[#0b00ff]')
    setTextColor2(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#000000]')
    // setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
    setBackgroundColor(theme === "dark" ? "bg-[#0E1016]" : "bg-[#e4ded7]");
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hvtienprotv84.github.io/fetchapi-main/data.json');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.section
      className={clsx("relative w-full items-center justify-center mb-[-150px] lg:mb-[-200px] overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:mt-[-100px] lg:pb-56",
        bgColor  
      )}
    >
      <AnimatedWords2
          title={"About-Me!"}
          style={clsx(`flex items-center justify-center max-w-[500px] lg:ml-[0px] lg:text-[155px] lg:max-w-full lg:mt-[-150px] lg:h-[350px] mb-[50px] flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:mt-[-20px] lg:text-center text-[clamp(70px,14vw,155.04px)]`,
            textColor  
          )}
          /> 
      {posts.length > 0 ? (
        posts.map((post) => (
          <motion.div key={post.id}>
            <motion.div className='flex flex-row justify-center items-center p-10 lg:mt-[-140px] pb-[-150px]'>
              <motion.div>
                <Image
                  src={profile}
                  priority
                  alt="hero"
                  data-blobity-tooltip="Tôi là Huỳnh Vĩnh Tiến"
                  data-blobity-invert="false"
                  className=" w-[300px] mt-[-100px] hidden lg:block lg:mt-[0px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[350px] lg:rounded-[0px]"
                />
              </motion.div>
              <motion.div className='lg:max-w-[800px] lg:ml-[100px]'>
                <AnimatedTitle
                  text={post.name}
                  className={clsx(
                    'max-w-[90%] font-bold font-sans text-[35px] lg:text-[45px] lg:mt-[-20px] leading-none md:text-[44px] md:leading-none lg:max-w-[450px] lg:leading-none',
                    textColorName
                  )}
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"-mr-[0.01em]"}
                />
                 <AnimatedBody
                  text={post.technologies}
                  className={clsx(
                    "mt-4 w-[100%] text-[20px] lg:text-[24px] font-bold font-sans",
                    textColorTech
                  )}
                />
                <AnimatedBody
                  text={post.content}
                  className={clsx(
                    "mt-4 w-[100%] text-[16px] lg:text-[20px] font-semibold font-sans",
                    textColor2
                  )}
                />
                <AnimatedBody
                  text={`Niên khóa: ${post.graduate}`}
                  className={clsx(
                    "mt-4 w-[100%] text-[16px] lg:text-[20px] font-semibold font-sans",
                    textColor2
                  )}
                />
                <AnimatedBody
                  text={`Kinh nghiệm: ${post.exp}`}
                  className={clsx(
                    "mt-4 w-[100%] text-[16px] lg:text-[20px] font-semibold font-sans",
                    textColor2
                  )}
                />
              </motion.div>
            </motion.div>
          </motion.div>
                
        ))
      ) : (
        <motion.div>No posts available</motion.div>
      )}
    </motion.section>
  );
};

export default AboutMe;
