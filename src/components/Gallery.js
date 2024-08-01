"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return (
    <div className="flex flex-col gap-10 min-h-screen " id="gallery">
      <h1 className="text-center font-bold font-serif text-5xl mt-10 text-white opacity-100">GALLERY</h1>
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "/g3.webp",  // Updated path with leading slash
    thumbnail: "/g3.webp",  // Updated path with leading slash
  },
  {
    title: "Cursor",
    link: "/g2.webp",  // Updated path with leading slash
    thumbnail: "/g2.webp",  // Updated path with leading slash
  },
  {
    title: "Rogue",
    link: "/g4.webp",  // Updated path with leading slash
    thumbnail: "/g4.webp",  // Updated path with leading slash
  },
  {
    title: "Editorially",
    link: "/gallery1.webp",  // Updated path with leading slash
    thumbnail: "/gallery1.webp",  // Updated path with leading slash
  },
  {
    title: "Editrix AI",
    link: "/g5.webp",  // Updated path with leading slash
    thumbnail: "/g5.webp",  // Updated path with leading slash
  },
  {
    title: "Pixel Perfect",
    link: "/g6.webp",  // Updated path with leading slash
    thumbnail: "/g6.webp",  // Updated path with leading slash
  },
  {
    title: "Algochurn",
    link: "/g2.webp",  // Updated path with leading slash
    thumbnail: "/g2.webp",  // Updated path with leading slash
  },
  {
    title: "Moonbeam",
    link: "/g3.webp",  // Updated path with leading slash
    thumbnail: "/g3.webp",  // Updated path with leading slash
  },
  {
    title: "Cursor",
    link: "/g2.webp",  // Updated path with leading slash
    thumbnail: "/g2.webp",  // Updated path with leading slash
  },
  {
    title: "Rogue",
    link: "/g4.webp",  // Updated path with leading slash
    thumbnail: "/g4.webp",  // Updated path with leading slash
  },
  {
    title: "Editorially",
    link: "/gallery1.webp",  // Updated path with leading slash
    thumbnail: "/gallery1.webp",  // Updated path with leading slash
  },
  {
    title: "Editrix AI",
    link: "/g5.webp",  // Updated path with leading slash
    thumbnail: "/g5.webp",  // Updated path with leading slash
  },
];
