import { useState, useEffect, useRef, useCallback } from "react";
import ProjectCard3D from "../components/ProjectCard3D";
import { projects } from "../data/projectsdata";

const mod = (n, m) => ((n % m) + m) % m;
const AUTO_PLAY_MS = 4000;

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

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

  return (
    <section
      id="projects"
      className="px-6 lg:px-20 py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-5xl font-bold text-center mb-24 text-[#8b1e3f]">
        Projects
      </h2>

      {/* ── Carousel stage ── */}
      <div
        className="relative mx-auto"
        style={{
          height: 680 /* ↑ était 520 */,
          maxWidth: 1100 /* ↑ était 900 */,
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

        {/* Bouton Précédent */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30
                     w-12 h-12 rounded-full
                     border border-white/10 bg-black/50 backdrop-blur-sm
                     flex items-center justify-center
                     text-white/50 hover:text-white hover:border-[#8b1e3f]/60
                     transition-all duration-200"
          aria-label="Précédent"
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

        {/* Bouton Suivant */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30
                     w-12 h-12 rounded-full
                     border border-white/10 bg-black/50 backdrop-blur-sm
                     flex items-center justify-center
                     text-white/50 hover:text-white hover:border-[#8b1e3f]/60
                     transition-all duration-200"
          aria-label="Suivant"
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
      <div className="flex items-center justify-center gap-2.5 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Projet ${i + 1}`}
            className="transition-all duration-300 rounded-full mt-10"
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
