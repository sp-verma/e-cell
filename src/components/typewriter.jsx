"use client";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "IDEATE.",
    },
    {
      text: "INNOVATE.",
    },
    {
      text: "ACTUATE.",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center ">
      
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
