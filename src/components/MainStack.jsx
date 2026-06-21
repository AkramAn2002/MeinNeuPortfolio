import React from "react";
import { FaArrowLeft, FaArrowRight, FaDatabase, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const MainStack = () => {
  return (
    <div className="relative grid lg:grid-cols-3 gap-10 items-center mb-24">
      {/* REACT CARD */}
      <div
        className="
      relative overflow-hidden
      bg-gradient-to-br from-[#141414] to-[#1a1a1a]
      border border-cyan-400/20
      rounded-[35px]
      p-10
      shadow-2xl shadow-cyan-500/10
      group
      hover:-translate-y-3
      duration-500
    "
      >
        <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <FaReact
            size={80}
            className="
          text-cyan-400
          mb-8
          group-hover:rotate-180
          duration-700
        "
          />

          <p className="uppercase tracking-[5px] text-cyan-400 mb-3">
            Frontend
          </p>

          <h3 className="text-4xl font-bold mb-6">React.js</h3>

          <p className="text-gray-400 leading-8">
            Modern UI development with reusable components, animations and
            scalable frontend architectures.
          </p>
        </div>
      </div>

      {/* CENTER FLOW */}
      <div className="flex-col items-center justify-center gap-8 relative hidden sm:hidden md:hidden lg:flex">
        {/* API FLOW */}
        <div className="flex items-center gap-6">
          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <span className="text-[#8b1e3f] font-semibold tracking-[3px]">
              API
            </span>

            <FaArrowRight
              className="
            text-[#8b1e3f]
            text-3xl
            animate-pulse
          "
            />
          </div>

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <FaArrowLeft
              className="
            text-[#8b1e3f]
            text-3xl
            animate-pulse
          "
            />

            <span className="text-[#8b1e3f] font-semibold tracking-[3px]">
              JSON
            </span>
          </div>
        </div>

        {/* DATABASE */}
        <div
          className="
        bg-[#141414]/80
        border border-[#8b1e3f]/20
        rounded-[25px]
        p-8
        backdrop-blur-xl
        shadow-xl shadow-[#8b1e3f]/10
        hover:-translate-y-2
        duration-500
      "
        >
          <div className="flex flex-col items-center">
            <FaDatabase className="text-[#8b1e3f] text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-2">Database</h3>

            <p className="text-gray-400 text-center">MySQL • Oracle</p>
          </div>
        </div>
      </div>

      {/* SPRING CARD */}
      <div
        className="
      relative overflow-hidden
      bg-gradient-to-br from-[#141414] to-[#1a1a1a]
      border border-green-400/20
      rounded-[35px]
      p-10
      shadow-2xl shadow-green-500/10
      group
      hover:-translate-y-3
      duration-500
    "
      >
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-green-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <SiSpringboot
            size={80}
            className="
          text-green-400
          mb-8
          group-hover:scale-110
          duration-500
        "
          />

          <p className="uppercase tracking-[5px] text-green-400 mb-3">
            Backend
          </p>

          <h3 className="text-4xl font-bold mb-6">Spring Boot</h3>

          <p className="text-gray-400 leading-8">
            Enterprise backend systems, APIs, authentication, microservices and
            scalable architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainStack;
