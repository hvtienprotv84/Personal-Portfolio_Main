import { StaticImageData } from "next/image";
// import alex from "../../public/samuel.avif";
// import jerry from "../../public/jerry.avif";
// import mauro from "../../public/mauro.jpeg";
import huynhvinhtien from "../../public/hero.png";
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
  year_exp: string;
};

export const reviewDetails = [
  {
    name: "Huỳnh Vĩnh Tiến - VN",
    role: "Chuyên ngành",
    company: "Software Engineer",
    profileImg: huynhvinhtien,
    title_name: "Đại Học Công Nghệ TP.HCM",
    year_exp: "2020 - 2024",
    testimonial:`🡢 Ngành học: Công Nghệ Thông Tin \n🡢 Chuyên ngành: Công Nghệ Phần Mềm \n🡢 GPA: 8.5/10 \n🡢 Tốt Nghiệp Loại Giỏi Toàn Khóa Học.`,
  },
  {
    name: "Huỳnh Vĩnh Tiến - VN",
    role: "Thực Tập",
    company: "Front-End Developer",
    profileImg: huynhvinhtien,
    title_name: "Công ty TNHH Giải Pháp và Công Nghệ",
    year_exp: "Th 4, 2024 - Th 7, 2024",
    testimonial: "🡢 Công nghệ sử dụng cho dự án: ReactJS, Tailwind CSS, Github,... \n🡢 Top 1. Sinh Viên Thực Tập Xuất Sắc",
  },
];
