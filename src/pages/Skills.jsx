import React from "react";

import MainStack from "../components/MainStack";
import { skills } from "../data/SkillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full px-5 sm:px-8 lg:px-20 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[min(500px,110vw)] h-[min(500px,110vw)]
          bg-[#8b1e3f]/20 blur-[100px] sm:blur-[140px] rounded-full
          pointer-events-none
        "
      />

      {/* TITLE */}
      <div className="text-center mb-14 sm:mb-20 lg:mb-24 relative z-10">
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[#8b1e3f] mb-3 sm:mb-4">
          Technologies
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          My Skills
        </h2>
      </div>

      <div className="text-center mb-10 sm:mb-14 relative z-10 max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold">Main Stack</h3>

        <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
          Specialized in building scalable frontend and backend applications
          using modern React ecosystems and enterprise-grade Spring Boot
          architectures.
        </p>
      </div>

      {/* MAIN STACK */}
      <MainStack />

      {/* OTHER SKILLS TITLE */}
      <div className="text-center mb-10 sm:mb-14 relative z-10 max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold">Other Technologies</h3>

        <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4">
          Additional technologies and tools used across projects
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6 lg:gap-8 relative z-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group
              bg-[#141414]/80
              backdrop-blur-xl
              border border-white/10
              rounded-[20px] sm:rounded-[30px]
              p-5 sm:p-8
              md:hover:-translate-y-3
              duration-500
              md:hover:shadow-2xl
              md:hover:shadow-[#8b1e3f]/20
              text-center
              relative
              overflow-hidden
            "
          >
            {/* HOVER GLOW */}
            <div
              className="
                absolute inset-0
                bg-[#8b1e3f]/0
                group-hover:bg-[#8b1e3f]/5
                duration-500
              "
            />

            {/* ICON */}
            <div
              className="
                flex justify-center
                text-[#8b1e3f]
                text-3xl sm:text-4xl
                mb-4 sm:mb-6
                md:group-hover:scale-110
                duration-500
                relative z-10
              "
            >
              {skill.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-sm sm:text-lg relative z-10 break-words">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
