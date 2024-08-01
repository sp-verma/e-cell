"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const DirectionAwareHover = ({
  imageUrl,
  name,
  position,
  socialLinks,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");

  const handleMouseEnter = (event) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={`w-full max-w-xs md:max-w-sm lg:max-w-md bg-transparent rounded-lg overflow-hidden group/card relative ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className={`h-full w-full relative ${imageClassName}`}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={`absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black/50 ${childrenClassName}`}
          >
            <p className="font-bold text-lg">{name}</p>
            <p className="text-sm">{position}</p>
            <div className="flex justify-center space-x-4 mt-2">
              {socialLinks}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};

export default function DirectionAwareHoverDemo() {
  const imageUrl = "/bitu.webg"; // Replace with your image path

  const socialLinks = (
    <div className="space-y-2 text-white">
      <FaLinkedin className="hover:text-blue-500 h-6 w-6" />
      <FaTwitter className="hover:text-blue-400 h-6 w-6" />
      <FaInstagram className="hover:text-pink-500 h-6 w-6" />
    </div>
  );

  const teamMembers = [
    { name: "Bittu kumar", position: "Team Lead", imageUrl, socialLinks },
    { name: "Jane Smith", position: "Developer", imageUrl, socialLinks },
    { name: "Alice Johnson", position: "Designer", imageUrl, socialLinks },
    // Add more members as needed
  ];

  return (
    <motion.div
      className="h-auto bg-gray-800 text-white p-4 md:p-8 pt-40 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-[3rem]">
        E-cell MCE Motihari
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
        Team Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {teamMembers.map((member, index) => (
          <DirectionAwareHover
            key={index}
            imageUrl={member.imageUrl}
            name={member.name}
            position={member.position}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </motion.div>
  );
}
