import { useState, useEffect, useRef, useCallback } from "react";
import ProjectCard3D from "../components/ProjectCard3D";
import { projects } from "../data/projectsdata";

const mod = (n, m) => ((n % m) + m) % m;
const AUTO_PLAY_MS = 4000;

// Design size of the 3D stage. Everything is scaled down from here so the
// card transforms inside ProjectCard3D never need to change.
const STAGE_W = 1100;
const STAGE_H = 680;

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const [scale, setScale] = useState(1);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);
  const touchX = useRef(null);

  // Scale the whole stage to fit the available width
  useEffect(() => {
    const calc = () => {
      const available = wrapRef.current?.clientWidth || window.innerWidth;
      setScale(Math.max(0.4, Math.min(1, available / STAGE_W)));
    };

    calc();
    window.addEventListener("resize", calc);
    window.addEventListener("orientationchange", calc);
    return () => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("orientationchange", calc);
    };
  }, []);

  const next = useCallback(() => {
    setActive(null);
    setCurrent((c) => mod(c + 1, projects.length));
  }, []);

  const prev = useCallback(() => {
    setActive(null);
    setCurrent((c) => mod(c - 1, projects.length));
  }, []);

  const goTo = (i) => {
    setActive(null);
    setCurrent(i);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);

  const getOffset = (index) => {
    let off = index - current;
    if (off > projects.length / 2) off -= projects.length;
    if (off < -projects.length / 2) off += projects.length;
    return off;
  };

  const handleCardClick = (index) => {
    if (index !== current) goTo(index);
    else setActive(active === index ? null : index);
  };

  // Touch swipe (mobile replacement for the arrows)
  const onTouchStart = (e) => {
    setPaused(true);
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="projects"
      className="w-full px-5 sm:px-8 lg:px-20 py-20 sm:py-28 lg:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-14 sm:mb-20 lg:mb-24 text-[#8b1e3f]">
        Projects
      </h2>

      {/* ── Carousel stage ── */}
      <div ref={wrapRef} className="relative mx-auto w-full max-w-[1100px]">
        {/* Outer box collapses to the scaled height so it never leaves a gap */}
        <div
          className="relative mx-auto select-none"
          style={{ height: STAGE_H * scale, touchAction: "pan-y" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Fixed-size stage, scaled into place */}
          <div
            className="absolute left-1/2 top-0"
            style={{
              width: STAGE_W,
              height: STAGE_H,
              marginLeft: -STAGE_W / 2,
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              perspective: "1600px",
              perspectiveOrigin: "50% 55%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {projects.map((project, index) => (
                <ProjectCard3D
                  key={index}
                  project={project}
                  isActive={active === index}
                  carouselOffset={getOffset(index)}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Previous — hidden on touch-sized screens, swipe instead */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 z-30
                     w-10 h-10 lg:w-12 lg:h-12 rounded-full
                     border border-white/10 bg-black/50 backdrop-blur-sm
                     items-center justify-center
                     text-white/50 hover:text-white hover:border-[#8b1e3f]/60
                     transition-all duration-200"
          aria-label="Previous project"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="hidden sm:flex absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 z-30
                     w-10 h-10 lg:w-12 lg:h-12 rounded-full
                     border border-white/10 bg-black/50 backdrop-blur-sm
                     items-center justify-center
                     text-white/50 hover:text-white hover:border-[#8b1e3f]/60
                     transition-all duration-200"
          aria-label="Next project"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Dots ── */}
      <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? 26 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? "#8b1e3f" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
