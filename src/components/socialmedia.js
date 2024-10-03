"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialMedia() {
  // Variants for icon animation
  const iconMotion = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0], // Icon will move up and down in a loop
      transition: {
        duration: 1.5, // Time for the loop to complete
        repeat: Infinity, // Infinite loop
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.3 }, // On hover, the icon will scale up
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-6">
      <motion.a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 bg-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-lg"
        variants={iconMotion}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaFacebookF />
      </motion.a>

      <motion.a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 bg-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-lg"
        variants={iconMotion}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaTwitter />
      </motion.a>

      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 bg-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-lg"
        variants={iconMotion}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaLinkedinIn />
      </motion.a>

      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 bg-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-lg"
        variants={iconMotion}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaInstagram />
      </motion.a>
    </div>
  );
}
