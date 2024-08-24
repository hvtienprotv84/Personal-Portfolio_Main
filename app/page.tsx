"use client";
import React, {useState } from 'react';
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import { ThemeProvider } from 'next-themes';

import dynamic from "next/dynamic";
import Reviews from "./reviews-section/ReviewGrid";

import translation_vn from "./language/vn/translation.json"
import translation_en from "./language/en/translation.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

const Work = dynamic(() => import("./work-section/Work"));
// const About = dynamic(() => import("./about-section/About"));
const About2 = dynamic(() => import("./about-section2/About"));
const About3 = dynamic(() => import("./about-section3/About"));
const Blog2 = dynamic(() => import("./blog-section2/BlogGrid"));
// const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Github = dynamic(() => import("./github-section/Github"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));


export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || 'en' || 'vn' ,
  resources: {
    en: {
      global: translation_en,
    },
    vn: {
      global: translation_vn,
    },
  },
})

  return (
    <>
      <I18nextProvider i18n={i18next}>
    <ThemeProvider>
        <PreLoader />

        <NavBar />

        {/* <ScrollerMotion> */}
        <main className="flex flex-col items-center justify-center">
          <Hero />
          <Work />
          <About2 />
          <About3 />
          <Blog2 />
          <Reviews/>
          <Github/>
          {/* <About /> */}
          {/* <Blog /> */}
          <Contact />
          <Footer />
        </main>
        {/* </ScrollerMotion> */}
      </ThemeProvider>
      </I18nextProvider>
    </>
  );
}
