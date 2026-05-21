"use client";

import Marquee from "react-fast-marquee";

export default function FastMarquee() {
  const text = "COME.GET.STUFFED";

  return (
    <div className="w-full bg-[#FEE354] py-4 overflow-hidden">
      <Marquee
        speed={120}
        gradient={false}
        pauseOnHover={false}
        direction="left"
      >
        <div className="flex gap-10">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="text-white text-2xl font-bold tracking-widest"
            >
              {text}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}