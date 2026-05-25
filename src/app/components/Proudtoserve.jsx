"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "/images/innovative.png",
    title: "Innovative Food Experience",
    desc: "Revolutionizing how people eat and enjoy food.",
    delay: "delay-[100ms]",
    side: "left",
  },
  {
    icon: "/images/flavors.png",
    title: "Unique Global Flavors",
    desc: "Bringing the most exciting tastes from around the world.",
    delay: "delay-[300ms]",
    side: "left",
  },
  {
    icon: "/images/quality.png",
    title: "Passion for Quality",
    desc: "Proudly delivering flavors we carefully discover and curate.",
    delay: "delay-[200ms]",
    side: "right",
  },
  {
    icon: "/images/community.png",
    title: "Serving the DFW Community",
    desc: "Sharing great food experiences with the local area.",
    delay: "delay-[400ms]",
    side: "right",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FeatureCard({ icon, title, desc, delay, side, inView }) {
  return (
    <div
      className={`flex flex-col gap-3 transition-all duration-700 ease-out ${delay}
        ${inView
          ? "opacity-100 translate-x-0"
          : side === "left" ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
        }`}
    >
      <div className="w-12 h-12  flex items-center justify-center text-2xl
        transition-all duration-300 cursor-default">
        <img src={icon} alt={title} />
      </div>
      <h3 className="urbanist text-[#1a1200] font-bold text-3xl">
        {title}
      </h3>
      <p className="text-[#000000] text-[17px] font-medium max-w-xs">
        {desc}
      </p>
    </div>
  );
}

export default function ProudToServeSection() {
  const [sectionRef, inView] = useInView(0.1);
  const [playing, setPlaying] = useState(false);

  const leftFeatures = features.filter((f) => f.side === "left");
  const rightFeatures = features.filter((f) => f.side === "right");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700;800&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes phoneGlow {
          0%, 100% { box-shadow: 0 32px 80px rgba(0,0,0,0.35), 0 0 0 0 rgba(240,180,0,0); }
          50% { box-shadow: 0 40px 100px rgba(0,0,0,0.4), 0 0 60px 10px rgba(240,180,0,0.12); }
        }
        @keyframes badgePop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          70% { transform: scale(1.1) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(1.05); }
          66% { transform: translate(20px, -15px) scale(1.08); }
        }

        .phone-float { animation: float 5s ease-in-out infinite, phoneGlow 5s ease-in-out infinite; }
        .badge-pop { animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) forwards; }
        .shimmer-text {
          background: #FC5E2A;
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .ripple-ring {
          animation: ripple 1.8s ease-out infinite;
        }
        .orb1 { animation: orb1 8s ease-in-out infinite; }
        .orb2 { animation: orb2 10s ease-in-out infinite; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full bg-[#fdf6e9] overflow-hidden py-20 px-6"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {/* Background orbs */}
        <div className="orb1 absolute top-[-80px] left-[-80px] w-[340px] h-[340px] rounded-full bg-[#fde68a] opacity-30 blur-3xl pointer-events-none" />
        <div className="orb2 absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full bg-[#fed7aa] opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#fff7d6] opacity-40 blur-[80px] pointer-events-none" />

        {/* Badge */}
        <div className={`flex justify-center mb-5 transition-all duration-500 ${inView ? "opacity-100" : "opacity-0 -translate-y-4"}`}>
          <span className="relative inline-flex items-center gap-1.5 bg-[#FFDE16] text-[#4E220A] text-xs font-bold tracking-widest uppercase px-4 py-3 rounded-md shadow-md">
             <img src="/images/arrow.png" alt="arrow" className="absolute -left-4 -top-4 w-5" />
             Green Living
          </span>
        </div>

        {/* Heading */}
        <div className={`text-center mb-14 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2
            className="text-5xl md:text-7xl font-black text-[#4E230B] alan leading-tight tracking-tight"
          >
            PROUD TO{" "}
            <span className="shimmer-text">SERVE</span>{" "}
            YOU
          </h2>
        </div>

        {/* Three-column layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.7fr_1fr] gap-12 md:gap-8 items-center">

          {/* Left features */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} inView={inView} />
            ))}
          </div>

          {/* Phone mockup */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-200 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <img src="/images/iphone-13.png" alt="iphone 13" className="relative z-10"/>
            <div className="absolute top-20 -left-12 w-[100%] h-[90%] bg-black/40"style={{filter: "blur(40px)"}}></div>
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}