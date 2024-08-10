import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:mt-[-100px] lg:pb-56"
      id="skills"
    >
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-0">
          <SongCarousel />
        </div>
    </section>
  );
};

export default About;
