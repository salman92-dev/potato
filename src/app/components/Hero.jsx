"use client";

import Navbar from "./navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[92vh] md:h-screen overflow-hidden bg-[#241F21]">
      
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-full
          w-[220%]
          md:w-[170%]
          lg:w-full
          object-cover
        "
      >
        <source
          src="https://res.cloudinary.com/dwhcqyymc/video/upload/pot_-_Trim_-_Trim_-_Trim_d2hrot.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-12 md:pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-12 urbanist font-extrabold text-6xl sm:text-5xl md:text-9xl text-center leading-[90%] text-white">
            COME. GET.<br/> STUFFED.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;