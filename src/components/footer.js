"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social media icons

export default function FooterTwo() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Newsletter Subscription */}
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
            <form action="" className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0">
              <input
                className="flex-1 h-12 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="email"
                placeholder="Email"
              />
              <button
                type="button"
                className="ml-4 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
          
          {/* USEFUL LINKS */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">E-Cell Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">Gallery</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
            </ul>
          </div>
          
          {/* CONTACT */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-sm mb-2">E-Cell MCE Motihari, Motihari College of Engineering, Motihari</p>
            <p className="text-sm">support@ecell.in</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>
        
        <hr className="my-4 border-gray-700" />
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <img src="/logo.jpg" alt="Company Logo" className="w-12 h-12 mr-2" />
            <span className="text-lg font-bold">DevUI</span>
          </div>
          <p className="text-sm font-medium text-gray-400">© 2023 DevUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
