import React from "react";
import { FaArrowLeft, FaArrowRight, FaDatabase, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const MainStack = () => {
  return (
    <div className="relative grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center mb-16 sm:mb-20 lg:mb-24 max-w-6xl mx-auto">
      {/* REACT CARD */}
      <div
        className="
          relative overflow-hidden
          bg-gradient-to-br from-[#141414] to-[#1a1a1a]
          border border-cyan-400/20
          rounded-[24px] sm:rounded-[35px]
          p-6 sm:p-10
          shadow-2xl shadow-cyan-500/10
          group
          md:hover:-translate-y-3
          duration-500
        "
      >
        <div className="absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-cyan-400/10 blur-[80px] sm:blur-[120px] rounded-full" />

        <div className="relative z-10">
          <FaReact
            className="
              text-cyan-400
              text-[52px] sm:text-[70px] lg:text-[80px]
              mb-5 sm:mb-8
              md:group-hover:rotate-180
              duration-700
            "
          />

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm text-cyan-400 mb-2 sm:mb-3">
            Frontend
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            React.js
          </h3>

          <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
            Modern UI development with reusable components, animations and
            scalable frontend architectures.
          </p>
        </div>
      </div>

      {/* CENTER — database card, shown at every size; arrows only on desktop */}
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 relative order-last lg:order-none">
        {/* API FLOW — horizontal arrows only make sense in the 3-column layout */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[#8b1e3f] font-semibold tracking-[3px]">
              API
            </span>
            <FaArrowRight className="text-[#8b1e3f] text-3xl animate-pulse" />
          </div>

          <div className="flex items-center gap-3">
            <FaArrowLeft className="text-[#8b1e3f] text-3xl animate-pulse" />
            <span className="text-[#8b1e3f] font-semibold tracking-[3px]">
              JSON
            </span>
          </div>
        </div>

        {/* DATABASE */}
        <div
          className="
            w-full lg:w-auto
            bg-[#141414]/80
            border border-[#8b1e3f]/20
            rounded-[20px] sm:rounded-[25px]
            p-6 sm:p-8
            backdrop-blur-xl
            shadow-xl shadow-[#8b1e3f]/10
            md:hover:-translate-y-2
            duration-500
          "
        >
          <div className="flex flex-col items-center">
            <FaDatabase className="text-[#8b1e3f] text-4xl sm:text-5xl mb-4 sm:mb-5" />

            <h3 className="text-xl sm:text-2xl font-bold mb-2">Database</h3>

            <p className="text-gray-400 text-sm sm:text-base text-center">
              MySQL • Oracle
            </p>
          </div>
        </div>
      </div>

      {/* SPRING CARD */}
      <div
        className="
          relative overflow-hidden
          bg-gradient-to-br from-[#141414] to-[#1a1a1a]
          border border-green-400/20
          rounded-[24px] sm:rounded-[35px]
          p-6 sm:p-10
          shadow-2xl shadow-green-500/10
          group
          md:hover:-translate-y-3
          duration-500
        "
      >
        <div className="absolute bottom-0 left-0 w-40 sm:w-60 h-40 sm:h-60 bg-green-400/10 blur-[80px] sm:blur-[120px] rounded-full" />

        <div className="relative z-10">
          <SiSpringboot
            className="
              text-green-400
              text-[52px] sm:text-[70px] lg:text-[80px]
              mb-5 sm:mb-8
              md:group-hover:scale-110
              duration-500
            "
          />

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm text-green-400 mb-2 sm:mb-3">
            Backend
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Spring Boot
          </h3>

          <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
            Enterprise backend systems, APIs, authentication, microservices and
            scalable architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainStack;
