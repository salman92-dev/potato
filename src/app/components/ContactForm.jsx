"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-20 px-6 flex justify-center -mt-28 md:mt-[-10rem] relative z-10">
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl bg-[#1e1b1b] text-white shadow-4xl py-12 px-8 md:px-22 lg:px-32"
      >
        
        {/* Title */}
        <h2 className="alan text-center text-3xl md:text-7xl font-extrabold mb-8 tracking-wide">
          CONTACT
        </h2>

        {/* Info Row */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 text-sm text-gray-300 mb-10">
          
          <div className="flex md:items-center gap-2 text-[#828282] text-sm md:text-lg">
            <FaMapMarkerAlt className="text-[#FEE63C] size-5" />
            <span>1516 Martin Luther King Jr Blvd Dallas, TX 75215</span>
          </div>

          <div className="flex md:items-center gap-2 text-[#828282] text-sm md:text-lg">
            <FaPhoneAlt className="text-[#FEE63C] size-5" />
            <span>(214) 210-9098</span>
          </div>

          <div className="flex md:items-center gap-2 text-[#828282] text-sm md:text-lg">
            <FaEnvelope className="text-[#FEE63C] size-6" />
            <span>info@thepotatolab.com</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="urbanist text-[#FEFEFE] bg-black/40 px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="urbanist text-[#FEFEFE] bg-black/40 px-4 py-3 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Message"
            className="urbanist text-[#FEFEFE] w-full bg-black/40 p-4 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="urbanist bg-yellow-400 text-black font-semibold px-8 py-3 shadow-lg hover:bg-yellow-300 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}