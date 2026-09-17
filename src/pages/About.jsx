import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Years of Experience" },
  { value: "10+", label: "Technologies & Tools" },
  { value: "5+", label: "Personal Projects" },
  { value: "HPS", label: "Banking & Payment Systems" },
];

const techStack = [
  "Angular",
  "Java",
  "Git",
  "BitBucket",
  "UNIX",
  "Jenkins",
  "PLSQL",
];

const About = () => {
  return (
    <section
      id="about"
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-20 lg:mb-24 relative z-10"
      >
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[#8b1e3f] mb-3 sm:mb-4">
          Get To Know Me
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">About Me</h2>
      </motion.div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center relative z-10 max-w-6xl mx-auto">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="
              bg-[#141414]/80
              backdrop-blur-xl
              border border-white/10
              rounded-[24px] sm:rounded-[35px]
              p-6 sm:p-10 lg:p-14
              shadow-2xl
            "
          >
            <div className="w-14 sm:w-20 h-1 bg-[#8b1e3f] mb-6 sm:mb-8 rounded-full" />

            <p className="text-gray-300 text-[15px] sm:text-lg leading-8 sm:leading-10">
              I am a Software Engineer with experience in full-stack
              development, banking technologies, and scalable enterprise
              systems.
            </p>

            <p className="text-gray-300 text-[15px] sm:text-lg leading-8 sm:leading-10 mt-6 sm:mt-8">
              Currently contributing at{" "}
              <span className="text-white font-semibold">HPS Morocco</span>, I
              analyze and resolve technical issues related to online
              transactions, ATM, POS, and TPE platforms while supporting system
              reliability and continuous improvements.
            </p>

            <p className="text-gray-300 text-[15px] sm:text-lg leading-8 sm:leading-10 mt-6 sm:mt-8">
              I enjoy designing elegant architectures, optimizing performance,
              and creating premium digital experiences.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-8 sm:mt-10">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-4 sm:px-5 py-1.5 sm:py-2
                    rounded-full
                    bg-[#8b1e3f]/10
                    border border-[#8b1e3f]/20
                    text-[#8b1e3f]
                    text-xs sm:text-sm
                    tracking-wide
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3.5 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-[#141414]/80
                backdrop-blur-xl
                border border-white/10
                rounded-[20px] sm:rounded-[30px]
                p-5 sm:p-8
                md:hover:-translate-y-3
                duration-500
                md:hover:shadow-2xl
                md:hover:shadow-[#8b1e3f]/20
              "
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b1e3f]">
                {stat.value}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 leading-6 sm:leading-8">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
