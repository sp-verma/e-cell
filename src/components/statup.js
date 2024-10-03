"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[50rem]  mt-6  rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      {/* Heading */}
      <h2
        className="text-6xl font-bold mb-12"
        style={{ color: "rgb(34, 197, 94)" }} // Custom RGB color
      >
        Our Startups
      </h2>
      
      {/* Infinite Moving Cards */}
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

      {/* Know More Button */}
      <div className="mt-8 h-32">
    
<Link href="/startup">
  <button
    className="px-6 py-3 rounded-lg text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105"
    style={{
      background: "linear-gradient(135deg, rgb(0, 140, 255), rgb(255, 215, 0))", // Gradient from blue to yellow
      color: "rgb(255, 255, 255)", // White text color
      boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)", // Attractive shadow effect
    }}
  >
    Know More
  </button>
</Link>


      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote:
      "At Ganga Koshi, our mission is to empower farmers with sustainable water solutions and modern agricultural techniques to boost productivity and preserve natural resources.",
    name: "Satyaprakash Verma",
    title: "Founder, Ganga Koshi",
  },
  {
    quote:
      "Startup Center has been instrumental in connecting young entrepreneurs with resources, mentorship, and an ecosystem that fosters innovation and growth.",
    name: "Rahul Sharma",
    title: "CEO, Startup Center",
  },
  {
    quote:
      "With years of experience in the tech industry, we've learned that success comes from collaboration, community, and a relentless focus on solving real-world problems.",
    name: "Ankita Mehta",
    title: "Co-Founder, AgriNext Solutions",
  },
  {
    quote:
      "Our startup specializes in AI-driven solutions for urban farming, helping cities become more self-sustaining and environmentally conscious.",
    name: "Neha Roy",
    title: "Founder, Urban Harvest",
  },
  {
    quote:
      "Through a shared passion for technology and education, we launched PyQHub, a platform that makes previous year question papers accessible to students nationwide.",
    name: "Satyaprakash Verma",
    title: "Co-Founder, PyQHub",
  },
];
