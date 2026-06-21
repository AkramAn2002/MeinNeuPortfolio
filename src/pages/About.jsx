import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-20 py-32 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8b1e3f]/20 blur-[140px] rounded-full"></div>

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24 relative z-10"
      >
        <p className="uppercase tracking-[6px] text-[#8b1e3f] mb-4">
          Get To Know Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
      </motion.div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
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
            rounded-[35px]
            p-10 lg:p-14
            shadow-2xl
          "
          >
            <div className="w-20 h-1 bg-[#8b1e3f] mb-8 rounded-full"></div>

            <p className="text-gray-300 text-lg leading-10">
              I am a Software Engineer with experience in full-stack
              development, banking technologies, and scalable enterprise
              systems.
            </p>

            <p className="text-gray-300 text-lg leading-10 mt-8">
              Currently contributing at <s></s>
              <span className="text-white font-semibold">HPS Morocco</span>, I
              by analyzing and resolving technical issues related to online
              transactions, ATM, POS, and TPE platforms while supporting system
              reliability and continuous improvements
            </p>

            <p className="text-gray-300 text-lg leading-10 mt-8">
              I enjoy designing elegant architectures, optimizing performance,
              and creating premium digital experiences.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Angular",
                "Java",
                "Git",
                "BitBucket",
                "UNIX",
                "Jenkins",
                "PLSQL",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-5 py-2
                    rounded-full
                    bg-[#8b1e3f]/10
                    border border-[#8b1e3f]/20
                    text-[#8b1e3f]
                    text-sm
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
          className="grid grid-cols-2 gap-6"
        >
          {/* CARD 1 */}
          <div
            className="
            bg-[#141414]/80
            backdrop-blur-xl
            border border-white/10
            rounded-[30px]
            p-8
            hover:-translate-y-3
            duration-500
            hover:shadow-2xl
            hover:shadow-[#8b1e3f]/20
          "
          >
            <h3 className="text-5xl font-bold text-[#8b1e3f]">1+</h3>

            <p className="text-gray-400 mt-4 leading-8">Years of Experience</p>
          </div>

          {/* CARD 2 */}
          <div
            className="
            bg-[#141414]/80
            backdrop-blur-xl
            border border-white/10
            rounded-[30px]
            p-8
            hover:-translate-y-3
            duration-500
            hover:shadow-2xl
            hover:shadow-[#8b1e3f]/20
          "
          >
            <h3 className="text-5xl font-bold text-[#8b1e3f]">10+</h3>

            <p className="text-gray-400 mt-4 leading-8">Technologies & Tools</p>
          </div>

          {/* CARD 3 */}
          <div
            className="
            bg-[#141414]/80
            backdrop-blur-xl
            border border-white/10
            rounded-[30px]
            p-8
            hover:-translate-y-3
            duration-500
            hover:shadow-2xl
            hover:shadow-[#8b1e3f]/20
          "
          >
            <h3 className="text-5xl font-bold text-[#8b1e3f]">5+</h3>

            <p className="text-gray-400 mt-4 leading-8">Personnal Projects</p>
          </div>

          {/* CARD 4 */}
          <div
            className="
            bg-[#141414]/80
            backdrop-blur-xl
            border border-white/10
            rounded-[30px]
            p-8
            hover:-translate-y-3
            duration-500
            hover:shadow-2xl
            hover:shadow-[#8b1e3f]/20
          "
          >
            <h3 className="text-5xl font-bold text-[#8b1e3f]">HPS</h3>

            <p className="text-gray-400 mt-4 leading-8">
              Banking & Payment Systems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
