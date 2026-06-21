import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`
        relative flex items-center
        ${index % 2 === 0 ? "justify-start" : "justify-end"}
      `}
    >
      {/* CARD */}
      <div
        className="
          w-full md:w-[45%]
          bg-[#141414]/80
          backdrop-blur-xl
          border border-white/10
          rounded-[30px]
          p-8
          shadow-2xl
          hover:-translate-y-2
          hover:shadow-[#8b1e3f]/20
          duration-500
        "
      >
        <span className="text-[#8b1e3f] text-sm tracking-[4px] uppercase">
          {item.year}
        </span>

        <h3 className="text-2xl font-bold mt-3 mb-4">{item.title}</h3>

        <p className="text-gray-400 leading-8">{item.description}</p>
      </div>

      {/* DOT */}
      <div
        className="
          absolute left-1/2
          -translate-x-1/2
          w-5 h-5
          bg-[#8b1e3f]
          rounded-full
          border-4 border-black
          shadow-lg shadow-[#8b1e3f]/40
        "
      ></div>
    </motion.div>
  );
};

export default TimelineItem;
