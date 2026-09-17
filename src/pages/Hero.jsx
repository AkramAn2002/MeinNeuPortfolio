import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/profile.jpeg";

import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";

import {
  SiSpringboot,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { CvModal } from "../components";

const floatingIcons = [
  { icon: <FaReact />, color: "#61DBFB", label: "React" },
  { icon: <FaJava />, color: "#f89820", label: "Java" },
  { icon: <SiSpringboot />, color: "#6DB33F", label: "Spring" },
  { icon: <FaNodeJs />, color: "#3C873A", label: "Node.js" },
  { icon: <SiExpress />, color: "#ffffff", label: "Express" },
  { icon: <SiTailwindcss />, color: "#38BDF8", label: "Tailwind" },
  { icon: <SiMysql />, color: "#00758F", label: "MySQL" },
  { icon: <SiJavascript />, color: "#F7DF1E", label: "JavaScript" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/AkramAn2002" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/akram-anou-9493aa252/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/akramanou/",
  },
  { icon: <FaEnvelope />, href: "mailto:aanou.akram@gmail.com" },
];

const ORBIT_POSITIONS = [
  { angle: -30, radius: 320 },
  { angle: 20, radius: 350 },
  { angle: 75, radius: 330 },
  { angle: 125, radius: 350 },
  { angle: 175, radius: 320 },
  { angle: 215, radius: 350 },
  { angle: 260, radius: 330 },
  { angle: 315, radius: 320 },
];

function orbitXY(angle, radius) {
  const rad = (angle * Math.PI) / 180;

  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

// Calculate experience based on start date
const startDate = new Date("2025-09-01");
const currentDate = new Date();
const diffTime = currentDate - startDate;
const totalYears = diffTime / (1000 * 60 * 60 * 24 * 365);
const experience = Math.max(1, Math.ceil(totalYears));

/**
 * Returns the orbit layout for the current viewport.
 * `show: false` below 768px — the orbit would collide with the portrait,
 * so the tech stack is shown as a wrapped row underneath instead.
 */
const useOrbit = () => {
  const [orbit, setOrbit] = useState({ show: true, scale: 1, box: 64 });

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;

      if (w < 768) setOrbit({ show: false, scale: 0, box: 0 });
      else if (w < 1024) setOrbit({ show: true, scale: 0.62, box: 46 });
      else if (w < 1280) setOrbit({ show: true, scale: 0.78, box: 54 });
      else setOrbit({ show: true, scale: 1, box: 64 });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return orbit;
};

const Hero = () => {
  const { scrollY } = useScroll();
  const orbit = useOrbit();

  const yLeft = useTransform(scrollY, [0, 500], [0, -60]);
  const yRight = useTransform(scrollY, [0, 500], [0, 40]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.3, 1],
      },
    },
  };

  const [openCv, setOpenCv] = useState(false);

  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full
        flex flex-col lg:flex-row items-center justify-center
        px-5 sm:px-8 lg:px-16 xl:px-24
        pt-28 pb-20 lg:py-24
        gap-12 sm:gap-16 lg:gap-12 xl:gap-20
        overflow-hidden
      "
    >
      {openCv && <CvModal onClose={() => setOpenCv(false)} />}

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute w-[min(700px,140vw)] h-[min(700px,140vw)]"
          style={{
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,30,63,0.18) 0%, transparent 70%)",
            top: "50%",
            left: "20%",
            transform: "translate(-50%,-50%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute w-[min(550px,120vw)] h-[min(550px,120vw)]"
          style={{
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,30,63,0.12) 0%, transparent 70%)",
            top: "40%",
            left: "78%",
            transform: "translate(-50%,-50%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* LEFT */}
      <motion.div
        style={{ y: yLeft }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 z-10 w-full max-w-2xl order-2 lg:order-1 text-center lg:text-left"
      >
        {/* Tag */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
        >
          <div className="h-px w-8 sm:w-12 bg-[#8b1e3f]" />

          <span
            className="text-[10px] sm:text-[11px] uppercase tracking-[4px] sm:tracking-[6px] font-medium"
            style={{ color: "#8b1e3f" }}
          >
            Software Engineer
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="leading-none mb-6 sm:mb-8"
          style={{
            fontSize: "clamp(2.75rem, 11vw, 6.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            fontFamily:
              "'Inter', 'SF Pro Display', 'Helvetica Neue', sans-serif",
            color: "#ffffff",
          }}
        >
          <span className="block text-white/95">Akram</span>

          <span
            className="block mt-1"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(139,30,63,0.9)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Anou
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[14px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12"
          style={{
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Passionate software engineer focused on scalable applications,
          immersive frontend experiences, elegant architectures, and premium UI
          systems crafted with modern technologies.
        </motion.p>

        {/* Socials */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="
                group w-11 h-11 sm:w-12 sm:h-12 rounded-2xl
                flex items-center justify-center
                text-[18px] sm:text-[20px]
                transition-all duration-300
              "
              style={{
                border: "1px solid rgba(139,30,63,0.35)",
                background: "rgba(139,30,63,0.06)",
                color: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
        >
          <button
            onClick={() => setOpenCv(true)}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #8b1e3f 0%, #6b1530 100%)",
              color: "#fff",
              boxShadow: "0 12px 40px rgba(139,30,63,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            Open Resume
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-center transition-all duration-300"
            style={{
              border: "1px solid rgba(139,30,63,0.4)",
              background: "rgba(255,255,255,0.02)",
              color: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              letterSpacing: "0.04em",
            }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Tech row — replaces the orbit below 768px */}
        {!orbit.show && (
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2.5 mt-10"
          >
            {floatingIcons.map((item, i) => (
              <span
                key={i}
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-[20px]"
                style={{
                  background: "rgba(15,15,15,0.82)",
                  border: `1px solid ${item.color}25`,
                  color: item.color,
                }}
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* RIGHT */}
      <motion.div
        style={{ y: yRight }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.3, 1],
        }}
        className="
          flex-1 order-1 lg:order-2
          flex justify-center items-center relative z-10
          w-full
          min-h-[360px] sm:min-h-[440px] md:min-h-[540px] xl:min-h-[720px]
        "
      >
        {/* Floating Icons */}
        {orbit.show &&
          floatingIcons.map((item, index) => {
            const { x, y } = orbitXY(
              ORBIT_POSITIONS[index].angle,
              ORBIT_POSITIONS[index].radius * orbit.scale,
            );

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center gap-2 z-20"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: x - orbit.box / 2,
                  y: y - orbit.box / 2,
                }}
                transition={{
                  delay: 0.4 + index * 0.08,
                  duration: 0.6,
                  type: "spring",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="rounded-3xl flex items-center justify-center"
                  style={{
                    width: orbit.box,
                    height: orbit.box,
                    fontSize: orbit.box * 0.44,
                    background: "rgba(15,15,15,0.82)",
                    border: `1px solid ${item.color}25`,
                    backdropFilter: "blur(18px)",
                    color: item.color,
                    boxShadow: `0 10px 35px ${item.color}18`,
                  }}
                >
                  {item.icon}
                </motion.div>

                <span
                  className="text-[9px] xl:text-[10px] uppercase tracking-[2px] xl:tracking-[3px] font-medium whitespace-nowrap"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}

        {/* Profile Image */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          {/* Outer Glow */}
          <div
            className="absolute inset-0 rounded-[28px] sm:rounded-[40px]"
            style={{
              boxShadow:
                "0 0 0 1px rgba(139,30,63,0.25), 0 0 100px rgba(139,30,63,0.18)",
            }}
          />

          <img
            src={profile}
            alt="Akram Anou"
            className="block rounded-[28px] sm:rounded-[40px]"
            style={{
              width: "clamp(220px, 60vw, 470px)",
              maxWidth: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              display: "block",
              boxShadow: "0 25px 80px rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          {/* Fade overlays */}
          <div
            className="absolute top-0 left-0 right-0 rounded-t-[28px] sm:rounded-t-[40px]"
            style={{
              height: "35%",
              background:
                "linear-gradient(to bottom, #000000 0%, transparent 100%)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 rounded-b-[28px] sm:rounded-b-[40px]"
            style={{
              height: "45%",
              background:
                "linear-gradient(to top, #000000 0%, transparent 100%)",
            }}
          />

          <div
            className="absolute top-0 bottom-0 left-0 rounded-l-[28px] sm:rounded-l-[40px]"
            style={{
              width: "30%",
              background:
                "linear-gradient(to right, #000000 0%, transparent 100%)",
            }}
          />

          <div
            className="absolute top-0 bottom-0 right-0 rounded-r-[28px] sm:rounded-r-[40px]"
            style={{
              width: "30%",
              background:
                "linear-gradient(to left, #000000 0%, transparent 100%)",
            }}
          />

          {/* Available badge */}
          <motion.div
            className="absolute z-30 bottom-6 sm:bottom-10 lg:bottom-14 left-0 -translate-x-2 sm:-translate-x-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div
              className="px-3.5 py-2.5 sm:px-5 sm:py-4 rounded-2xl sm:rounded-3xl flex items-center gap-2 sm:gap-3"
              style={{
                background: "rgba(12,12,12,0.85)",
                border: "1px solid rgba(139,30,63,0.25)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                style={{
                  background: "#8b1e3f",
                  boxShadow: "0 0 10px #8b1e3f",
                }}
              />

              <span className="text-[11px] sm:text-sm text-white/70 font-medium whitespace-nowrap">
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* XP badge */}
          <motion.div
            className="absolute z-30 top-5 sm:top-8 lg:top-10 right-0 translate-x-2 sm:translate-x-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div
              className="px-3.5 py-2.5 sm:px-5 sm:py-4 rounded-2xl sm:rounded-3xl text-center"
              style={{
                background: "rgba(12,12,12,0.85)",
                border: "1px solid rgba(139,30,63,0.25)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div className="text-[20px] sm:text-[28px] font-semibold text-white leading-none">
                {experience}+
              </div>

              <div className="text-[8px] sm:text-[10px] uppercase tracking-[2px] sm:tracking-[4px] text-white/40 mt-1 whitespace-nowrap">
                Years Exp
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
