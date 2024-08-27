import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import logo from "../public/logo_1.png"

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Huỳnh Vĩnh Tiến Personal Portfolio",
  description:
    "Huỳnh Vĩnh Tiến Personal Portfolio Vercel",
    icons: {
      icon: "/logo_1.png",  // Đảm bảo đường dẫn đúng
      // icon: "https://static.vecteezy.com/system/resources/previews/009/126/098/non_2x/hvt-logo-hvt-letter-hvt-letter-logo-design-initials-hvt-logo-linked-with-circle-and-uppercase-monogram-logo-hvt-typography-for-technology-business-and-real-estate-brand-vector.jpg",
    },
    generator: "Next.js",
  applicationName: "Huỳnh Vĩnh Tiến",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Huỳnh Vĩnh Tiến Personal Portfolio",
    description:
      "Huỳnh Vĩnh Tiến Personal Portfolio",
    url: "https://prsonal-portfolio-main.vercel.app/",
    siteName: "https://prsonal-portfolio-main.vercel.app/",
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/previews/009/126/098/non_2x/hvt-logo-hvt-letter-hvt-letter-logo-design-initials-hvt-logo-linked-with-circle-and-uppercase-monogram-logo-hvt-typography-for-technology-business-and-real-estate-brand-vector.jpg",
        width: 1200,
        height: 630,
        alt: "Huỳnh Vĩnh Tiến",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huỳnh Vĩnh Tiến Personal Portfolio",
    description:
      "Huỳnh Vĩnh Tiến Personal Portfolio",
    creator: "huynhvinhtien", // username twitter của tôi
    creatorId: "1243720976552144897",
    images: [
      "https://static.vecteezy.com/system/resources/previews/009/126/098/non_2x/hvt-logo-hvt-letter-hvt-letter-logo-design-initials-hvt-logo-linked-with-circle-and-uppercase-monogram-logo-hvt-typography-for-technology-business-and-real-estate-brand-vector.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
