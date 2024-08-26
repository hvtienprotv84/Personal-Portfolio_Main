import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon3.png";
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import './Square.css'; // Import CSS module

const Square = () => {
  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === "dark" ? "border-[#ffffff]" : "border-[#ffb800]");
    // setBackgroundColor(theme === 'dark' ? 'bg-[#0E1016]' : 'bg-[#e4ded7]');
  }, [theme]);  

  return (
    <motion.section 
      className="hidden lg:block" 
      id="connect"
      initial="initial"
      animate="animate"
    >
            <div className="available__frame">
              <div className="square">
                <span className={clsx('border-[2px]',
                    textColor // Sử dụng state để đảm bảo đồng bộ
                    )}>
                </span>
                <span className={clsx('border-[2px]',
                        textColor // Sử dụng state để đảm bảo đồng bộ
                    )}>
                </span>
                <span className={clsx('border-[2px]',
                        textColor // Sử dụng state để đảm bảo đồng bộ
                    )}>
                </span>
                <div className="square__title">
                  <p data-translate="available">Xin Chào, Tôi là <h1 className='text-[20px] font-bold'>Huỳnh Vĩnh Tiến</h1> Mọi Thắc Mắc Xin Liên Hệ <br/>Xin Cám Ơn!</p>
                </div>
              </div>
            </div>

    </motion.section>
    
  );
};

export default Square;
