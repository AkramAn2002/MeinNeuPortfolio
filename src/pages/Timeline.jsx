import React from "react";
import TimelineItem from "../components/TimelineItem";
import { timelineData } from "../data/timelineData";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="relative px-6 lg:px-20 py-32 overflow-hidden"
    >
      {/* TITLE */}
      <div className="text-center mb-24">
        <p className="uppercase tracking-[6px] text-[#8b1e3f] mb-4">Journey</p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Experience & Education
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto">
        {/* CENTER LINE */}
        <div
          className="
            absolute left-1/2 top-0
            -translate-x-1/2
            w-[3px] h-full
            bg-gradient-to-b
            from-transparent
            via-[#8b1e3f]
            to-transparent
          "
        ></div>

        {/* ITEMS */}
        <div className="flex flex-col gap-24">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
