import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon3.png";
import clsx from "clsx";
import { useTheme } from "next-themes";
// import './ConnectSection.css'; // Import CSS module
import Square from "./Square";
import EmailContact from "./EmailContact";

const FormContact = () => {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
    // setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
    setBackgroundColor(theme === "dark" ? "bg-[#0E1016]" : "bg-[#e4ded7]");
  }, [theme]);

  return (
    <motion.section
      id="connect"
      initial="initial"
      animate="animate"
      className={clsx("w-full flex flex-row justify-around items-center lg:mt-[-50px]", bgColor)}
    >
      <motion.div className="flex flex-col py-24">
      <AnimatedWords2
          title={"Email-Contact"}
          style={clsx(`flex mt-[-50px] lg:ml-[0px] text-[60px] lg:text-[155px] lg:max-w-full lg:mt-[-150px] lg:h-[350px] mb-[50px] flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:mt-[-20px] lg:text-center text-[clamp(70px,14vw,155.04px)]`,
            textColor  
          )}
          /> 
                <motion.form
                  className="form mt-[20px] lg:mt-[-150px]"
                  action="https://formspree.io/f/mgvwkgnn"
                  method="POST"
                >
                  <motion.div className="group flex items-center gap-2 rounded-md border-gray-400 bg-white p-2 shadow-lg delay-200 duration-300 hover:border-2 hover:shadow-xl">
                    <svg
                      className="duration-300 group-hover:rotate-[360deg]"
                      fill="none"
                      stroke="#000000"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <path d="M22 6l-10 7L2 6"></path>
                    </svg>
                    <motion.input
                      type="email"
                      name="email"
                      id="emailInput"
                      required
                      className="flex outline-none text-black w-full max-w-full bg-transparent"
                      placeholder="Email"
                    />
                  </motion.div>

                  <motion.div className="mt-3 w-full max-w-full rounded-lg bg-white p-5 font-mono">
                    <motion.label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      id="unique-input"
                    >
                      Nội dung tin nhắn
                    </motion.label>
                    <motion.textarea
                      className="custom-input h-[100px] w-full text-black max-w-full transform rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out focus:-translate-y-1 focus:outline-blue-300 hover:border-blue-300 hover:shadow-lg"
                      placeholder="Vd: Xin chào"
                      name="message"
                      id="messageInput"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="group/button mt-3 relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/20 bg-blue-500 px-6 py-2 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600"
                  >
                    <motion.span className="text-lg">Gửi</motion.span>
                    <motion.div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <motion.div className="relative h-full w-10 bg-white/30"></motion.div>
                    </motion.div>
                  </motion.button>
                
                </motion.form>
        <EmailContact/>
      </motion.div>
      
      <motion.div>
      <Square />
      </motion.div>

    </motion.section>
  );
};

export default FormContact;
