"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Contact Us", "Opening Hours"];

  return (
    <header className="w-full bg-[#231d20] text-white font-sans absolute top-0 left-0 z-20">
      <nav className="max-w-7xl mx-auto h-[82px] flex items-center justify-between px-6 lg:px-8 relative">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer no-underline">
          <div className="w-[52px] h-[52px] rounded-full bg-[#8b5a2b] flex items-center justify-center text-xl flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:rotate-[15deg] group-hover:scale-110 group-hover:shadow-[0_0_0_3px_rgba(207,31,39,0.45),0_8px_24px_rgba(207,31,39,0.2)]">
            🍔
          </div>
          <span className="hidden sm:block text-[22px] font-bold tracking-[2px] text-white transition-all duration-[400ms] group-hover:tracking-[5px] group-hover:text-[#cf1f27] whitespace-nowrap">
            Come.Get.Stuffed
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 mr-[180px] urbanist font-medium font-base">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative text-[13px] font-light tracking-wide bg-transparent border-none cursor-pointer pb-[2px] whitespace-nowrap transition-colors duration-[250ms]
                after:absolute after:bottom-[-2px] after:h-[1.5px] after:bg-[#cf1f27] after:rounded-full after:transition-all after:duration-[350ms]
                ${active === item
                  ? "text-white after:left-0 after:w-full"
                  : "text-white/60 hover:text-white after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0"
                }`}
            >
              {item}
            </button>
          ))}

          <div className="w-px h-5 bg-white/10" />

          <button
            aria-label="Profile"
            className="w-[38px] h-[38px] rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/70 cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(.34,1.56,.64,1)] hover:bg-[rgba(207,31,39,0.15)] hover:border-[rgba(207,31,39,0.45)] hover:text-white hover:scale-[1.14]"
          >
            <User size={16} />
          </button>
        </div>

        {/* Order Now */}
        <div className="hidden md:block absolute right-0 top-0 h-full">
          <button className="relative h-full px-10 bg-[#cf1f27] text-white font-bold tracking-[2.5px] text-[15px] uppercase border-none cursor-pointer overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] hover:bg-[#a8171d]  before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/[0.13] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:w-[280px] hover:before:h-[280px]">
            Order Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-white/[0.08] z-10"
        >
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] bg-white rounded-full transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] origin-center ${open ? "opacity-0 w-6" : "opacity-100 w-4"}`} />
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1e191c] overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)] border-t ${
          open ? "max-h-[380px] border-[rgba(207,31,39,0.3)]" : "max-h-0 border-transparent"
        }`}
      >
        <div
          className={`flex flex-col gap-1 px-6 pt-5 pb-7 transition-all duration-[350ms] ${
            open ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-2"
          }`}
        >
          {links.map((item) => (
            <button
              key={item}
              onClick={() => { setActive(item); setOpen(false); }}
              className={`flex items-center text-[15px] font-light text-left w-full bg-transparent border-none border-b border-b-white/[0.06] py-[11px] cursor-pointer transition-all duration-[280ms] group/ml
                ${active === item ? "text-white pl-[10px]" : "text-white/60 hover:text-white hover:pl-[10px]"}`}
            >
              <span
                className={`block w-[3px] bg-[#cf1f27] rounded-full transition-all duration-[280ms] flex-shrink-0 ${
                  active === item
                    ? "h-4 mr-[10px]"
                    : "h-0 mr-0 group-hover/ml:h-4 group-hover/ml:mr-[10px]"
                }`}
              />
              {item}
            </button>
          ))}

          <div className="flex items-center gap-3 mt-[18px] pt-[18px] border-t border-white/[0.06]">
            <button
              aria-label="Profile"
              className="w-[38px] h-[38px] flex-shrink-0 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/70 cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(.34,1.56,.64,1)] hover:bg-[rgba(207,31,39,0.15)] hover:border-[rgba(207,31,39,0.45)] hover:text-white hover:scale-[1.14]"
            >
              <User size={16} />
            </button>
            <button className="flex-1 py-3 bg-[#cf1f27] text-white font-bold tracking-[2px] text-[15px] uppercase border-none cursor-pointer rounded-[4px] transition-all duration-[220ms] hover:bg-[#a8171d] active:scale-[0.97]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}