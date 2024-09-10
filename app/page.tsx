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

import './globals.css';

// import LanguageSelector from '../app/containers/LanguageSelector';
import { LanguageProvider } from '../app/containers/Language';

const Mongo = dynamic(() => import("./page-mongo"));
const Work = dynamic(() => import("./work-section/Work"));
// const About = dynamic(() => import("./about-section/About"));
const AboutMe = dynamic(() => import("./aboutme-section/AboutMe"));
const About2 = dynamic(() => import("./about-section2/About"));
const About3 = dynamic(() => import("./about-section3/About"));
const Blog2 = dynamic(() => import("./blog-section2/BlogGrid"));
// const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Github = dynamic(() => import("./github-section/Github"));
const FormContact = dynamic(() => import("./form-contact-section/FormContact"));
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

  return (
    <>
    <LanguageProvider>
    <ThemeProvider>
        <PreLoader />

        <NavBar />

        {/* <ScrollerMotion> */}
        <main className="flex flex-col items-center justify-center">
          <Hero />
          {/* <LanguageSelector/> */}
          <div className="p-[300px]"> 
          <Mongo/>
          </div>
          <AboutMe/>
          <Work />
          <About2 />
          <About3 />
          <Blog2 />
          <Reviews/>
          <Github/>
          {/* <About /> */}
          {/* <Blog /> */}
          <FormContact/>
          <Contact />
          <Footer />
        </main>
        {/* </ScrollerMotion> */}
      </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
