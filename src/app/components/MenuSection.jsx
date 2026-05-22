"use client";
import { useState, useEffect, useRef } from "react";

const menuItems = [
  { id: 1, name: "Eat Me At Spot", price: "US$19.39", category: "food", emoji: "🥩", description: "A legendary local classic" },
  { id: 2, name: "Seapot", price: "US$30.39", category: "food", emoji: "🫕", description: "Rich & indulgent layers" },
  { id: 3, name: "The Humbler", price: "US$15.39", category: "food", emoji: "🥔", description: "Loaded with soul", featured: true },
  { id: 4, name: "Taco-ato", price: "US$20.39", category: "food", emoji: "🌮", description: "Fresh & vibrant bites" },
  { id: 5, name: "Texan Dream", price: "US$24.39", category: "food", emoji: "🍖", description: "Bold smoky flavors" },
  { id: 6, name: "Crispy Wings", price: "US$18.99", category: "sides", emoji: "🍗", description: "Golden & perfectly spiced" },
  { id: 7, name: "Loaded Fries", price: "US$9.99", category: "sides", emoji: "🍟", description: "Topped to perfection" },
  { id: 8, name: "Onion Rings", price: "US$7.99", category: "sides", emoji: "🧅", description: "Crispy golden hoops" },
  { id: 9, name: "Fresh Lemonade", price: "US$5.99", category: "beverages", emoji: "🍋", description: "Zingy & ice cold" },
  { id: 10, name: "Craft Cola", price: "US$4.99", category: "beverages", emoji: "🥤", description: "House-made & fizzy" },
  { id: 11, name: "Iced Tea", price: "US$4.49", category: "beverages", emoji: "🧋", description: "Sweet & refreshing" },
];

const tabs = ["Food", "Sides & Extras", "Beverages"];
const tabKeys = ["food", "sides", "beverages"];
const CARD_WIDTH = 220;
const CARD_GAP = 20;

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [tabAnimDir, setTabAnimDir] = useState("right");
  const [tabKey, setTabKey] = useState(0);
  const prevTabRef = useRef(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        const count = Math.max(1, Math.floor((w + CARD_GAP) / (CARD_WIDTH + CARD_GAP)));
        setVisibleCount(count);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const filtered = menuItems.filter((item) => item.category === tabKeys[activeTab]);
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  function switchTab(i) {
    if (i === activeTab) return;
    setTabAnimDir(i > prevTabRef.current ? "right" : "left");
    prevTabRef.current = i;
    setActiveTab(i);
    setSliderIndex(0);
    setTabKey((k) => k + 1);
  }

  function slide(dir) {
    setSliderIndex((prev) => Math.max(0, Math.min(maxIndex, prev + dir)));
  }

  function addToCart(e, item) {
    e.stopPropagation();
    setCartCount((c) => c + 1);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 800);
  }

  // Drag / swipe
  function onPointerDown(e) {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
    trackRef.current?.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e) {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStartX);
  }
  function onPointerUp() {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragDelta < -threshold) slide(1);
    else if (dragDelta > threshold) slide(-1);
    setDragDelta(0);
  }

  const translateX = -(sliderIndex * (CARD_WIDTH + CARD_GAP)) + (isDragging ? dragDelta : 0);

  return (
    <div
      className="min-h-screen flex items-center justify-center py-16 px-4 bg-[#241F21]"
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatLeaf {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50%     { transform: translateY(-6px) rotate(8deg); }
        }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0px rgba(234,179,8,0.5); }
          50%     { box-shadow: 0 0 0 8px rgba(234,179,8,0); }
        }
        @keyframes popIn {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.18); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fade-up        { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .leaf           { animation: floatLeaf 2.8s ease-in-out infinite; }
        .featured-pulse { animation: pulseRing 2s ease-in-out infinite; }
        .pop-in         { animation: popIn 0.4s cubic-bezier(.22,1,.36,1) both; }
        .tab-enter-r    { animation: slideInRight 0.32s cubic-bezier(.22,1,.36,1) both; }
        .tab-enter-l    { animation: slideInLeft  0.32s cubic-bezier(.22,1,.36,1) both; }
        .card-in        { animation: cardIn 0.4s cubic-bezier(.22,1,.36,1) both; }
        .slider-track   { will-change: transform; }
        .arrow-btn:hover { transform: scale(1.12); }
        .arrow-btn:active { transform: scale(0.94); }
      `}</style>

      <div className="w-full max-w-5xl">
        {/* ── Header ── */}
        <div className="text-center mb-10" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s" }}>
          <div className="flex justify-center mb-2">
            <span className="leaf text-3xl">🌿</span>
          </div>
          <h1
            className="fade-up text-white font-extrabold uppercase alan text-7xl"
          >
            Our Menu
          </h1>

          <div className="fade-up flex items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
            <button
              className="px-8 py-3 rounded-full text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 active:scale-95"
              style={{ background: "linear-gradient(135deg,#dc2626,#b91c1c)", boxShadow: "0 4px 24px rgba(220,38,38,0.45)", letterSpacing: "0.14em" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 32px rgba(220,38,38,0.65)"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(220,38,38,0.45)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Order Now
            </button>
            {cartCount > 0 && (
              <div className="pop-in flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                🛒 {cartCount} item{cartCount > 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="fade-up flex justify-center gap-1 mb-10" style={{ animationDelay: "0.4s" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => switchTab(i)}
              className="relative px-6 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{ color: activeTab === i ? "#fff" : "rgba(255,255,255,0.38)", letterSpacing: "0.1em", fontFamily: "'Georgia',serif" }}
            >
              {tab}
              {activeTab === i && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{ width: "60%", background: "linear-gradient(90deg,#dc2626,#f97316)", boxShadow: "0 0 8px rgba(249,115,22,0.6)", transition: "all 0.3s" }} />
              )}
            </button>
          ))}
        </div>

        {/* ── Slider ── */}
        <div className="relative" ref={containerRef}>
          {/* Left arrow */}
          <button
            className="arrow-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200"
            style={{
              background: "rgba(20,20,20,0.9)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              opacity: sliderIndex === 0 ? 0.25 : 1,
              cursor: sliderIndex === 0 ? "default" : "pointer",
            }}
            onClick={() => slide(-1)}
            disabled={sliderIndex === 0}
          >
            ‹
          </button>

          {/* Right arrow */}
          <button
            className="arrow-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200"
            style={{
              background: "rgba(20,20,20,0.9)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              opacity: sliderIndex >= maxIndex ? 0.25 : 1,
              cursor: sliderIndex >= maxIndex ? "default" : "pointer",
            }}
            onClick={() => slide(1)}
            disabled={sliderIndex >= maxIndex}
          >
            ›
          </button>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg,#0d0d0d,transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg,#0d0d0d,transparent)" }} />

          {/* Track viewport */}
          <div className="overflow-hidden" style={{ padding: "12px 4px 20px" }}>
            <div
              ref={trackRef}
              className="slider-track flex"
              key={tabKey}
              style={{
                gap: CARD_GAP,
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? "none" : "transform 0.45s cubic-bezier(.22,1,.36,1)",
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {filtered.map((item, idx) => {
                const isHovered = hoveredId === item.id;
                return (
                  <div
                    key={item.id}
                    className="card-in flex-shrink-0"
                    style={{ width: CARD_WIDTH, animationDelay: `${idx * 0.06}s` }}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        background: "#111",
                        border: isHovered ? "1px solid rgba(234,179,8,0.5)" : "1px solid rgba(255,255,255,0.07)",
                        transform: isHovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
                        boxShadow: isHovered
                          ? "0 24px 60px rgba(0,0,0,0.8), 0 0 30px rgba(234,179,8,0.18)"
                          : "0 4px 24px rgba(0,0,0,0.4)",
                        transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease, border-color 0.35s ease",
                      }}
                    >
                      {item.featured && (
                        <div className="absolute top-3 right-3 z-10 font-bold uppercase px-2 py-0.5 rounded-full"
                          style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)", color: "#fff", fontSize: "10px", letterSpacing: "0.1em" }}>
                          ★ Popular
                        </div>
                      )}

                      {/* Emoji circle */}
                      <div className="flex justify-center pt-7 pb-4">
                        <div
                          className={item.featured ? "featured-pulse" : ""}
                          style={{
                            width: 120, height: 120,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg,#1c1c1c,#252525)",
                            outline: isHovered ? "3px solid rgba(234,179,8,0.7)" : "3px solid rgba(255,255,255,0.09)",
                            outlineOffset: "3px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transform: isHovered ? "scale(1.1) rotate(6deg)" : "scale(1) rotate(0deg)",
                            transition: "transform 0.4s cubic-bezier(.22,1,.36,1), outline-color 0.3s",
                          }}
                        >
                          <span style={{
                            fontSize: "3.2rem",
                            filter: isHovered ? "drop-shadow(0 0 14px rgba(234,179,8,0.85))" : "none",
                            transition: "filter 0.3s",
                          }}>
                            {item.emoji}
                          </span>
                        </div>
                      </div>

                      {/* Text */}
                      <div className="px-5 pb-5 text-center">
                        <h3 className="font-bold text-white mb-1" style={{ fontSize: "1.05rem", letterSpacing: "0.02em" }}>
                          {item.name}
                        </h3>
                        <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.38)" }}>
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold" style={{ color: "#eab308", fontSize: "0.95rem", fontFamily: "monospace" }}>
                            {item.price}
                          </span>
                          <button
                            onClick={(e) => addToCart(e, item)}
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 active:scale-90"
                            style={{
                              background: addedId === item.id
                                ? "linear-gradient(135deg,#16a34a,#15803d)"
                                : "linear-gradient(135deg,#dc2626,#b91c1c)",
                              boxShadow: addedId === item.id
                                ? "0 0 18px rgba(22,163,74,0.65)"
                                : "0 2px 10px rgba(220,38,38,0.4)",
                              transform: addedId === item.id ? "scale(1.22)" : "scale(1)",
                              fontSize: "1.2rem",
                              transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
                            }}
                          >
                            {addedId === item.id ? "✓" : "+"}
                          </button>
                        </div>
                      </div>

                      {/* Hover glow overlay */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: "radial-gradient(ellipse at 50% 0%, rgba(234,179,8,0.07) 0%, transparent 70%)",
                          opacity: isHovered ? 1 : 0,
                          transition: "opacity 0.4s",
                        }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Dot pagination ── */}
        <div className="fade-up flex justify-center gap-2 mt-4" style={{ animationDelay: "0.55s" }}>
          {filtered.map((_, i) => {
            const isActive = i === sliderIndex;
            return (
              <button
                key={i}
                onClick={() => setSliderIndex(Math.min(i, maxIndex))}
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 24 : 8,
                  height: 8,
                  background: isActive
                    ? "linear-gradient(90deg,#dc2626,#f97316)"
                    : "rgba(255,255,255,0.18)",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}