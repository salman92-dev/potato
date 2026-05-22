"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#e6d8c7] py-6 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left text */}
        <p className="urbanist text-base text-black text-center md:text-left">
          © Copyright 2026 by The POT baked potato bar.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3 text-gray-900">
          
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href="#"
            className="transition"
          >
            <FaFacebookF size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href="#"
            className="transition"
          >
            <FaInstagram size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href="#"
            className="transition"
          >
            <FaTiktok size={22} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}