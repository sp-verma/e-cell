"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export const words = [
  {
    text: "Ideate",
  },
  {
    text: "Innovate",
  },
  {
    text: "Incubate",
  },
];

export default function ImagesSliderDemo() {
  const images = ["coll.webp"];
  
  return (
    <ImagesSlider 
      className="min-h-screen bg-center bg-cover bg-no-repeat" 
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <TypewriterEffectSmooth words={words} />
          Entrepreneurship Cell <br /> MCE Motihari
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Start</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
