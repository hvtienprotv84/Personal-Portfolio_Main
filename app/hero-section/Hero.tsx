import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/hero.png";
import vietnam from "./vietnam.png";
import './style.css'
const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[60vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://zalo.me/0931103224"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              📞 CALL ME
            </motion.button>
          </Link>
        </div>

        <div className="gap-10 hidden lg:flex text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="/"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              Github
            </motion.p>
          </Link>
          <Link
            href="/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              Facebook
            </motion.p>
          </Link>
          <Link
            href="/"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              Zalo
            </motion.p>
          </Link>
          <Link
            href="/"
            target="_blank"
            aria-label="View Contra Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              Gmail
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
            <AnimatedWords 
              title="HUỲNH&nbsp;VĨNH&nbsp;TIẾN"
              style="inline-block overflow-hidden pt-1 text-[40px] lg:text-[150px] -mr-4 sm:-mr-5 md:-mr-7 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 font-sans"
            />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] h-[60px] lg:h-[260px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="hero"
              data-blobity-tooltip="Tôi là Huỳnh Vĩnh Tiến"
              data-blobity-invert="false"
              className=" w-[300px] mt-[-100px] lg:mt-[0px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[350px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center justify-center flex-col lg:flex-row
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[15px] mt-[20px] font-bold text-[#e4ded7] md:text-[18px] lg:text-left">
          bởi{" "}
            <Link
              href="/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline font-bold"
              aria-label="Website"
            >
              Huỳnh Vĩnh Tiến
            </Link>{" "}
            - Software Engineer.
          </p>
        </motion.div>

        <motion.div
          className=" max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="flex flex-row justify-center mt-[20px] items-center text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Tôi sinh sống và làm việc tại &nbsp;
            <Image
              src={vietnam}
              priority
              alt="vietnam"
              data-blobity-tooltip="Việt Nam"
              data-blobity-invert="false"
              className="w-[30px] lg:w-[40px]"
            />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
