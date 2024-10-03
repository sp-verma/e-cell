"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LampDemo() {
  return (
    <div className="min-h-[30rem] flex flex-col justify-between items-center bg-black px-4 md:px-8 lg:px-16" id="about-us">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-white opacity-100 py-16 bg-clip-text text-center text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-transparent"
      >
        ABOUT US
      </motion.h1>
      <motion.hr 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full max-w-[60rem] border-b-2 border-rose-700 mb-8"
      />
      <motion.p 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center pb-16 text-lg md:text-2xl font-serif text-white opacity-90 max-w-4xl "
      >
        E-Cell, MCE-Motihari is a non-profit student-run organization promoting and nurturing the entrepreneurial spirit among students. It offers pre-incubation facilities to startups and encourages students to work on their ideas through events. E-Cell&apos;s mission is to improve the culture of entrepreneurship in technical and non-technical fields and uplift students to innovate and develop their models. Its objective is to develop the spirit of entrepreneurship by providing various programs and events such as Srijan to educate students on financial literacy, real-world problem-solving skills, and event management.
      </motion.p>
    </div>
  );
}
