"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-20 px-6 flex justify-center mt-[-8rem] relative z-10">
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-[#1e1b1b] text-white shadow-4xl p-8 md:p-12"
      >
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8 tracking-wide">
          CONTACT
        </h2>

        {/* Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300 mb-10">
          
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>1516 Martin Luther King Jr Blvd Dallas, TX 75215</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>(214) 210-9098</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>info@thepotatolab.com</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black/40 border border-white/10 rounded-md p-4 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-black/40 border border-white/10 rounded-md p-4 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full bg-black/40 border border-white/10 rounded-md p-4 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}