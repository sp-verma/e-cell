"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export const words = [
  {
    text: "Ideate",
    className: "text-2xl",
  },
  {
    text: "Innovate",
    className: "text-2xl",
  },
  {
    text: "Incubate",
    className: "text-2xl text-center",
  },
];

export default function ImagesSliderDemo() {
  const images = ["/coll.webp", "/ecell2.jpg"];

  return (
    <ImagesSlider
      className="min-h-screen bg-center bg-cover bg-no-repeat relative pr-10 flex justify-center items-center"
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
        className="z-50 flex flex-col justify-center items-center text-center w-full px-4 md:w-2/3"
      >
        <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          
          Entrepreneurship Cell <br /> MCE Motihari
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Start</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
      <div className="fixed right-0 top-0 bottom-0 w-1/3 hidden md:block">
        <Image
          src={images[0]}
          alt="Image"
          className="object-cover h-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </ImagesSlider>
  );
}
