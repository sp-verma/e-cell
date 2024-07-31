"use client";
import React from "react";
import { motion } from "framer-motion";
import TypewriterEffectSmoothDemo from "@/components/typewriter";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Left Side: Text and Typewriter Effect */}
      <div className="flex-1 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-bold gap-4 text-xl md:text-6xl text-left pl-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-4">
            <TypewriterEffectSmoothDemo />
            Entrepreneurship Cell
            <br />
            MCE-Motihari
          </p>
        </motion.div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center items-center">
        <motion.img
          src="/logo2.jpeg"
          alt="MCE-Motihari Logo"
          className="w-64 h-64 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          height={300}
          width={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
