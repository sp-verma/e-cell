"use client";
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social media icons

export default function FooterTwo() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-between px-4 py-8 space-y-8 md:space-y-0">
        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4">
            <input
              className="flex-1 h-10 rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
            />
            <button
              type="button"
              className="flex-shrink-0 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <p className="text-lg font-semibold">Company</p>
              <ul className="flex flex-col space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">About us</a></li>
                <li><a href="#" className="hover:text-blue-400">Company History</a></li>
                <li><a href="#" className="hover:text-blue-400">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-400">Our Vision</a></li>
                <li><a href="#" className="hover:text-blue-400">Press Release</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-4 text-center">
        <p className="text-sm font-medium text-gray-400">© 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}
