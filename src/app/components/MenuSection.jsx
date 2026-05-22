"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menuItems = [
  { id: 1, name: "Eat Me At Spot", price: "US$19.39", category: "food", img: "/images/m-1.png" },
  { id: 2, name: "Seapot", price: "US$30.39", category: "food", img: "/images/m-2.png" },
  { id: 3, name: "The Humbler", price: "US$15.39", category: "food", img: "/images/m-3.png" },
  { id: 4, name: "Taco-ato", price: "US$20.39", category: "food", img: "/images/m-4.png" },
  { id: 5, name: "Texan Dream", price: "US$24.39", category: "food", img: "/images/m-5.png" },

  { id: 6, name: "Crispy Wings", price: "US$18.99", category: "sides", img: "/images/m-1.png" },
  { id: 7, name: "Loaded Fries", price: "US$9.99", category: "sides", img: "/images/m-2.png" },
  { id: 8, name: "Onion Rings", price: "US$7.99", category: "sides", img: "/images/m-3.png" },

  { id: 9, name: "Fresh Lemonade", price: "US$5.99", category: "beverages", img: "/images/m-4.png" },
  { id: 10, name: "Craft Cola", price: "US$4.99", category: "beverages", img: "/images/m-5.png" },
  { id: 11, name: "Iced Tea", price: "US$4.49", category: "beverages", img: "/images/m-1.png" },
];

const tabs = ["Food", "Sides & Extras", "Beverages"];
const tabKeys = ["food", "sides", "beverages"];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = menuItems.filter(
    (item) => item.category === tabKeys[activeTab]
  );

  return (
    <section className="min-h-screen bg-[#241F21] py-20 px-4 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-3xl block mb-2">
            <img src="/images/tree-branch.png" alt="tree branch" className="w-30 mx-auto -mb-7" />
          </span>

          <h2 className="text-white text-6xl md:text-7xl font-black uppercase alan">
            Our Menu
          </h2>

          <button className="mt-10 bg-[#C1282F] hover:bg-[#d6343c] transition-all duration-300 text-white px-8 py-4 rounded-md text-xl font-bold uppercase tracking-wider">
            Order Now
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 md:gap-24 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative text-2xl uppercase urbanist transition-all duration-300 ${
                activeTab === i
                  ? "text-white font-bold"
                  : "text-white/40"
              }`}
            >
              {tab}

              {activeTab === i && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80%] h-[4px] rounded-full bg-[#FC5E2A]" />
              )}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
         
          pagination={{ clickable: true }}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4.3,
            },
          }}
          className="menuSwiper !overflow-visible"
        >
          {filtered.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <SwiperSlide key={item.id}>
                <div
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative rounded-3xl overflow-hidden transition-all duration-500"
                >
                  {/* Image */}
                  <div className="flex justify-center pt-8 pb-5">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`transition-transform duration-500`}
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center pb-6 px-4">
                    <h3 className="text-white text-3xl font-semibold urbanist mb-2">
                      {item.name}
                    </h3>

                    <p className="text-white/70 text-lg urbanist">
                      {item.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Swiper custom styles */}
        <style jsx global>{`
          .menuSwiper {
            padding-bottom: 60px !important;
          }

          .menuSwiper .swiper-button-next,
          .menuSwiper .swiper-button-prev {
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
          }

          .menuSwiper .swiper-button-next:after,
          .menuSwiper .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }

          .menuSwiper .swiper-pagination-bullet {
            background: #393537;
            opacity: 1;
            width :12.5px;
            height:12.5px;
          }

          .menuSwiper .swiper-pagination-bullet-active {
            background: white;
            border-radius: 999px;
          }
        `}</style>
      </div>
    </section>
  );
}