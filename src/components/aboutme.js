"use client";
import React from "react";
import { motion } from "framer-motion";


export default function LampDemo() {
  return (
    <div className="min-h-[30rem] text-center flex flex-col justify-between items-center bg-black-300 ">
    
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-white opacity-100 py-[5rem] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
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
       className="w-[60rem] border-red border-b-rose-700 border-solid border-2 mb-8" />
      <motion.p 
       initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      className="text-center pb-[10rem] text-xl font-serif text-balance text-white opacity-85">E-Cell, Mce-Motihari is a non-profit student-run organization promoting and nurturing the entrepreneurial spirit among students. It offers pre-incubation facilities to startups and encourages students to work on their ideas through events. E-Cell ' s mission is to improve the culture of entrepreneurship in technical and non-technical fields and uplift students to innovate and develop their models. Its objective is to develop the spirit of entrepreneurship by providing various programs and events such as Srijan to educate students on financial literacy, real-world problem-solving skills, and event management.</motion.p>
      </div>
    
  );
}
