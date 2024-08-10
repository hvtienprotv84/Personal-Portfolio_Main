import { StaticImageData } from "next/image";
// import alex from "../../public/samuel.avif";
// import jerry from "../../public/jerry.avif";
// import mauro from "../../public/mauro.jpeg";
import alan from "../../public/hero.png";
// import olamide from "../../public/olamide.jpeg";
// import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
  title_name: string;
};

export const reviewDetails = [
  {
    name: "Huỳnh Vĩnh Tiến",
    role: "Chuyên ngành",
    company: "Software Engineer",
    profileImg: alan,
    title_name: "Đại Học Công Nghệ TP.HCM",
    testimonial:`🡢 Ngành học: Công Nghệ Thông Tin \n🡢 Chuyên ngành: Công Nghệ Phần Mềm \n🡢 GPA: 8.5/10 \n🡢 Tốt Nghiệp Loại Giỏi Toàn Khóa Học.`,
  },
  {
    name: "Huỳnh Vĩnh Tiến",
    role: "Thực Tập",
    company: "Front-End Developer",
    profileImg: alan,
    title_name: "Công ty TNHH Giải Pháp và Công Nghệ",
    testimonial: "🡢 Công nghệ sử dụng cho dự án: ReactJS, Tailwind CSS, Github,... \n🡢 Top 1. Sinh Viên Thực Tập Xuất Sắc",
  },
  // {
  //   name: "Mauro Reis",
  //   role: "CEO",
  //   company: "Meuclone Digital",
  //   profileImg: alan,
  //   testimonial:
  //     "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  // },
  // {
  //   name: "Umar Abdullahi",
  //   role: "Head of Engineering",
  //   company: "Mono",
  //   profileImg: alan,
  //   testimonial:
  //     "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  // },
  // {
  //   name: "Olamide Sholanke",
  //   role: "Senior Frontend Engineer",
  //   company: "Mono",
  //   profileImg: alan,
  //   testimonial:
  //     "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  // },
  // {
  //   name: "Alan Franciskovic",
  //   role: "Sales Specialist",
  //   company: "Croatia Osiguranje d.d",
  //   profileImg: alan,
  //   testimonial:
  //     "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  // },
  
];
