"use client";

import Navbar from "./navbar";
import { motion } from "framer-motion";

const floating = (duration = 5, y = 20) => ({
  animate: {
    y: [0, -y, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex items-end justify-center h-[92vh] md:h-screen bg-[#241F21] pb-12 md:pb-16 px-4">
      <Navbar />

      {/* Floating Images */}

      <motion.img
        src="/images/img-1.png"
        alt="img-1"
        className="absolute top-24 left-2 md:left-40 w-28 md:w-60"
        {...floating(5, 18)}
      />

      <motion.img
        src="/images/img-2.png"
        alt="img-2"
        className="absolute top-20 right-2 md:right-70 w-28 md:w-60"
        {...floating(6, 22)}
      />

      <motion.img
        src="/images/img-3.png"
        alt="img-3"
        className="absolute top-52 -left-20 md:-left-66 w-52 md:w-[30rem]"
        {...floating(7, 25)}
      />

      <motion.img
        src="/images/img-4.png"
        alt="img-4"
        className="absolute bottom-24 left-4 md:left-46 w-28 md:w-50"
        {...floating(4, 15)}
      />

      <motion.img
        src="/images/img-5.png"
        alt="img-5"
        className="absolute bottom-[28%] -right-10 md:-right-36 w-36 md:w-70"
        {...floating(5.5, 20)}
      />

      <motion.img
        src="/images/img-6.png"
        alt="img-6"
        className="absolute bottom-6 right-4 md:right-36 w-28 md:w-50"
        {...floating(6.5, 18)}
      />

      {/* Hero Text */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="urbanist font-extrabold text-4xl sm:text-5xl md:text-7xl text-center leading-[90%]">
          COME. GET. STUFFED.
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;