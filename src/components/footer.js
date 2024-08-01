"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function FooterTwo() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <Image
            src="/logo.webp"
            alt="E-Cell MCE Motihari Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold">E-Cell, Mce-motihari</h1>
          <p className="text-lg font-semibold">Ideate Innovate Incubate</p>
        </div>

        {/* Follow Us */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedinIn className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaFacebookF className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaYoutube className="h-6 w-6" />
            </motion.a>
          </div>
        </div>

        {/* Get Notified */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Get Notified</h2>
          <form action="" className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              className="flex-1 h-10 rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Your Email"
            />
            <button
              type="button"
              className="flex-shrink-0 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="text-white">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-gray-400 text-center py-4">
        <p className="text-sm">© 2023 MCE Motihari E-Cell. All rights reserved.</p>
      </div>
    </footer>
  );
}
