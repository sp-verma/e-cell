"use client"
import { GlareCard } from "@/components/ui/glare-card";


export default function GlareCardDemo() {
  return (
    <div className=" pl-32">
   
    <h1 className="text-center text-5xl font-mono  mb-14 font-bold  pr-25 text-white opacity-100     mr-28"> OUR MOTTO</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mb-20">
      <GlareCard className="flex flex-col items-center justify-center pb-20 ">
      <p className="font-bold text-white text-xl ">THINK</p>
        <p className=" font-serif text-base text-neutral-200 mt-4 text-balance ml-4 opacity-100">
        Successful Entrepreneurs are the ones who are great at thinking out solutions. Through various hackathons and workshop events, we promote the culture of thinking to prepare students for future entrepreneurial challenges
        </p>
       
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center pb-10">
      <p className="font-bold text-white opacity-100 text-xl ">BUILD</p>
        <p className=" font-serif text-base text-neutral-200 mt-4 text-balance ml-6">
        All great startups are started by people who have a knack at building products. E-Cell Mce-Motihari organizes events like Idea Validation camps to help bring out the best of builders among aspiring entrepreneurs
        </p>
        
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
      <p className="font-bold text-white text-xl text-center ml-[40%] mb-4 ">INSPIRE</p>
        <p className=" font-serif text-base text-neutral-200 mt-4 text-balance ml-6 mb-4">
        The key to stick through tough times and not giving up is to be relentlessly inspired to take on challenges. By organizing various talks by successful entrepreneurs, E-Cell  Mce-Motihari aims to inspire students to take the path of entrepreneurship.
        </p>
      </GlareCard>
    </div>
    
    </div>
  );
}
