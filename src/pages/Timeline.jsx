import React from "react";
import { motion } from "framer-motion";

/**
 * Mobile  (< md): left-edge rail, every card to its right.
 * Desktop (>= md): centered rail, cards alternate sides.
 * Pairs with the rail in Timeline.jsx (left-[7px] md:left-1/2).
 */
const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.25 }}
      className={`
        relative flex items-center
        pl-10 md:pl-0
        ${isLeft ? "md:justify-start" : "md:justify-end"}
      `}
    >
      {/* CARD */}
      <div
        className="
          w-full md:w-[45%]
          bg-[#141414]/80
          backdrop-blur-xl
          border border-white/10
          rounded-[20px] sm:rounded-[30px]
          p-5 sm:p-7 lg:p-8
          shadow-2xl
          md:hover:-translate-y-2
          md:hover:shadow-[#8b1e3f]/20
          duration-500
        "
      >
        <span className="text-[#8b1e3f] text-[11px] sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase">
          {item.year}
        </span>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
          {item.title}
        </h3>

        <p className="text-gray-400 text-[13px] sm:text-[15px] leading-7 sm:leading-8">
          {item.description}
        </p>
      </div>

      {/* DOT — sits on the rail at both breakpoints */}
      <div
        className="
          absolute
          left-0 md:left-1/2
          md:-translate-x-1/2
          w-4 h-4 sm:w-5 sm:h-5
          bg-[#8b1e3f]
          rounded-full
          border-[3px] sm:border-4 border-black
          shadow-lg shadow-[#8b1e3f]/40
        "
      />
    </motion.div>
  );
};

export default TimelineItem;
