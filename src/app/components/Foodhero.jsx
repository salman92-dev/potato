"use client";
import { motion } from "framer-motion";


export default function FoodHero() {
  return (
    <section className="foodhero relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 py-16">
      
      {/* Background blob */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute w-[700px] h-[700px] bg-red-500 rounded-full blur-3xl top-[-100px] left-[-100px]"
      />

      {/* Content */}
      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src="/images/food.png"
            alt="Food"
            className="drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="alan text-3xl md:text-6xl font-extrabold text-[#4E230B] leading-tight uppercase">
            Bold Flavors.
            Perfectly Stuffed.
            Made to Impress
          </h1>

          {/* Award Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mt-8 flex items-center gap-4"
          >
            <img src="/images/food-2.png" alt="food" className="max-w-[300px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}