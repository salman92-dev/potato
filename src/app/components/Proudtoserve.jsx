"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "💡",
    title: "Innovative Food Experience",
    desc: "Revolutionizing how people eat and enjoy food.",
    delay: "delay-[100ms]",
    side: "left",
  },
  {
    icon: "🌍",
    title: "Unique Global Flavors",
    desc: "Bringing the most exciting tastes from around the world.",
    delay: "delay-[300ms]",
    side: "left",
  },
  {
    icon: "🍽️",
    title: "Passion for Quality",
    desc: "Proudly delivering flavors we carefully discover and curate.",
    delay: "delay-[200ms]",
    side: "right",
  },
  {
    icon: "🏘️",
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
      <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl
        transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6 cursor-default">
        {icon}
      </div>
      <h3 className="text-[#1a1200] font-extrabold text-lg leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-[#6b5c3e] text-sm leading-relaxed font-medium">
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
          background: linear-gradient(90deg, #c8390a 0%, #ff6b35 40%, #ff9a00 60%, #c8390a 100%);
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
          <span className="inline-flex items-center gap-1.5 bg-[#3a7d44] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
            <span>▶</span> Green Living
          </span>
        </div>

        {/* Heading */}
        <div className={`text-center mb-14 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2
            className="text-5xl md:text-6xl font-black text-[#1a0a00] leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PROUD TO{" "}
            <span className="shimmer-text">SERVE</span>{" "}
            YOU
          </h2>
        </div>

        {/* Three-column layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 items-center">

          {/* Left features */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} inView={inView} />
            ))}
          </div>

          {/* Phone mockup */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative">
              {/* Glow rings behind phone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="ripple-ring absolute w-[220px] h-[220px] rounded-full border-2 border-yellow-300/40" />
                <div className="ripple-ring absolute w-[260px] h-[260px] rounded-full border border-orange-300/30" style={{ animationDelay: "0.6s" }} />
                <div className="ripple-ring absolute w-[300px] h-[300px] rounded-full border border-yellow-200/20" style={{ animationDelay: "1.2s" }} />
              </div>

              {/* Phone shell */}
              <div className="phone-float relative w-[200px] md:w-[230px] rounded-[36px] bg-[#111] p-[6px] shadow-2xl z-10">
                {/* Notch */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[18px] bg-[#111] rounded-full z-20" />

                {/* Screen */}
                <div className="w-full rounded-[30px] overflow-hidden bg-[#222] aspect-[9/19] relative">
                  {/* Mock food menu image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a0800] via-[#3d1a00] to-[#1a0800] flex flex-col">
                    {/* Top bar */}
                    <div className="flex items-center gap-2 px-3 pt-6 pb-2 bg-black/30">
                      <div className="w-4 h-4 rounded-full bg-orange-400" />
                      <div className="flex-1 h-2 rounded bg-white/20" />
                      <div className="w-4 h-4 rounded bg-white/20" />
                    </div>

                    {/* Menu content mockup */}
                    <div className="flex-1 px-3 py-2 flex flex-col gap-1.5 overflow-hidden">
                      <div className="text-orange-400 text-[10px] font-black tracking-widest text-center mb-1">MENU</div>
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <div className="w-7 h-7 rounded bg-orange-900/60 flex-shrink-0" />
                            <div className="flex flex-col gap-0.5">
                              <div className="h-1.5 w-16 rounded bg-white/25" />
                              <div className="h-1 w-10 rounded bg-white/15" />
                            </div>
                          </div>
                          <div className="h-1.5 w-6 rounded bg-orange-400/60 flex-shrink-0" />
                        </div>
                      ))}
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setPlaying(!playing)}
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30 active:scale-95"
                      >
                        <span className="text-white text-xl ml-1">▶</span>
                      </button>
                    </div>

                    {/* Bottom caption */}
                    <div className="bg-black/60 px-3 py-2 text-center">
                      <p className="text-white/70 text-[7px] leading-relaxed">Best baked potatoes in the DFW!</p>
                      <p className="text-orange-400 text-[7px] font-bold tracking-widest mt-0.5">★ DALLAS, TEXAS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              {inView && (
                <div className="badge-pop absolute -top-3 -right-4 bg-yellow-400 text-[#1a0a00] text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg rotate-6 whitespace-nowrap">
                  🔥 Trending Now
                </div>
              )}

              {/* Bottom floating tag */}
              {inView && (
                <div className="badge-pop absolute -bottom-3 -left-5 bg-[#cf1f27] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg -rotate-3 whitespace-nowrap" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  📍 Open Tue–Sat
                </div>
              )}
            </div>
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