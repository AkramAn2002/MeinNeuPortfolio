import React from "react";

import MainStack from "../components/MainStack";
import { skills } from "../data/SkillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 lg:px-20 py-32 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8b1e3f]/20 blur-[140px] rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-24 relative z-10">
        <p className="uppercase tracking-[6px] text-[#8b1e3f] mb-4">
          Technologies
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">My Skills</h2>
      </div>
      <div className="text-center mb-14 relative z-10">
        <h3 className="text-3xl font-bold">Main Stack</h3>

        <p className="text-gray-500 mt-4">
          Specialized in building scalable frontend and backend applications
          using modern React ecosystems and enterprise-grade Spring Boot
          architectures.
        </p>
      </div>
      {/* MAIN STACK */}
      <MainStack />

      {/* OTHER SKILLS TITLE */}
      <div className="text-center mb-14 relative z-10">
        <h3 className="text-3xl font-bold">Other Technologies</h3>

        <p className="text-gray-500 mt-4">
          Additional technologies and tools used across projects
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group
              bg-[#141414]/80
              backdrop-blur-xl
              border border-white/10
              rounded-[30px]
              p-8
              hover:-translate-y-3
              duration-500
              hover:shadow-2xl
              hover:shadow-[#8b1e3f]/20
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
            ></div>

            {/* ICON */}
            <div
              className="
                flex justify-center
                text-[#8b1e3f]
                mb-6
                group-hover:scale-110
                duration-500
                relative z-10
              "
            >
              {skill.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg relative z-10">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
