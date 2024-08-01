"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Join Us", href: "/joinus" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? " bg-gray-800 border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div>
          <a href="#">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQHuZgJJY-al_w/profile-displayphoto-shrink_800_800/0/1713203997348?e=1727308800&v=beta&t=WY-L57TKju5jZCRHwhsnb8N-FU6UiNqlpBHgB1BujPk"
              alt="Logo"
              width={50}
              height={50}
              className="w-auto h-[50px]"
            />
          </a>
        </div>
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold text-white hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 top-16 z-50 bg-white shadow-lg lg:hidden">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="#">
                  <Image
                    src="/logo.webp"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-900 hover:text-gray-900 focus:outline-none"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 bg-white">
              <nav className="grid gap-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center rounded-md p-3 text-sm font-semibold text-black hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
