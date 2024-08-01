"use client";
import { GlareCard } from "@/components/ui/glare-card";

export default function GlareCardDemo() {
  return (
    <div className="px-4 md:px-8 lg:px-32 py-8">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-mono mb-8 lg:mb-14 font-bold text-white opacity-100">
        OUR MOTTO
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10 lg:mb-20">
        <GlareCard className="flex flex-col items-center justify-center p-6">
          <p className="font-bold text-white text-lg md:text-xl">THINK</p>
          <p className="font-serif text-sm md:text-base text-neutral-200 mt-4 text-balance text-center md:text-left">
            Successful Entrepreneurs are the ones who are great at thinking out
            solutions. Through various hackathons and workshop events, we
            promote the culture of thinking to prepare students for future
            entrepreneurial challenges.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-6">
          <p className="font-bold text-white text-lg md:text-xl">BUILD</p>
          <p className="font-serif text-sm md:text-base text-neutral-200 mt-4 text-balance text-center md:text-left">
            All great startups are started by people who have a knack at
            building products. E-Cell Mce-Motihari organizes events like Idea
            Validation camps to help bring out the best of builders among
            aspiring entrepreneurs.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-6">
          <p className="font-bold text-white text-lg md:text-xl text-center">
            INSPIRE
          </p>
          <p className="font-serif text-sm md:text-base text-neutral-200 mt-4 text-balance text-center md:text-left">
            The key to stick through tough times and not giving up is to be
            relentlessly inspired to take on challenges. By organizing various
            talks by successful entrepreneurs, E-Cell Mce-Motihari aims to
            inspire students to take the path of entrepreneurship.
          </p>
        </GlareCard>
      </div>
    </div>
  );
}
