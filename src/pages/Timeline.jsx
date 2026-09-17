import React from "react";
import TimelineItem from "../components/TimelineItem";
import { timelineData } from "../data/timelinedata";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="relative w-full px-5 sm:px-8 lg:px-20 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* TITLE */}
      <div className="text-center mb-14 sm:mb-20 lg:mb-24">
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[#8b1e3f] mb-3 sm:mb-4">
          Journey
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Experience & Education
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto">
        {/* RAIL — left edge on mobile, centered from md up */}
        <div
          className="
            absolute top-0 h-full w-[2px] md:w-[3px]
            left-[7px] md:left-1/2
            md:-translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#8b1e3f]
            to-transparent
          "
        />

        {/* ITEMS */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
