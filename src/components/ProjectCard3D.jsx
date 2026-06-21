import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const FLOAT_HEIGHT = 180; // plus de hauteur pour accueillir 2 niveaux
const LABEL_PADDING = 16;

// Mesure la largeur réelle d'un texte
function measureTextWidth(text) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `600 12px Inter, sans-serif`;
  return ctx.measureText(text).width;
}

// Assigne un niveau vertical (0 = haut, 1 = bas) à chaque label
// en alternant et en tenant compte des collisions horizontales
function assignLevels(dots) {
  // On trie par x pour détecter les voisins proches
  const sorted = dots
    .map((d, i) => ({ ...d, origIdx: i }))
    .sort((a, b) => a.x - b.x);

  const levels = new Array(dots.length).fill(0);

  for (let i = 0; i < sorted.length; i++) {
    const curr = sorted[i];
    const halfW = measureTextWidth(curr.text) / 2 + LABEL_PADDING;

    // Regarde le voisin de gauche
    if (i > 0) {
      const prev = sorted[i - 1];
      const prevHalfW = measureTextWidth(prev.text) / 2 + LABEL_PADDING;
      const gap = curr.x - prev.x;

      // S'ils se chevauchent horizontalement → niveau opposé
      if (gap < halfW + prevHalfW) {
        levels[curr.origIdx] = levels[prev.origIdx] === 0 ? 1 : 0;
        continue;
      }
    }

    // Sinon alternance simple par index
    levels[curr.origIdx] = curr.origIdx % 2;
  }

  return levels;
}

const ProjectCard3D = ({ project, isActive, onClick, carouselOffset }) => {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);
  const [svgLines, setSvgLines] = useState([]);
  const [labels, setLabels] = useState([]);
  const [showLabels, setShowLabels] = useState(false);

  const isCenter = carouselOffset === 0;
  const abs = Math.abs(carouselOffset);
  const isHidden = abs > 2;

  const compute = useCallback(() => {
    if (!wrapperRef.current || !cardRef.current) return;
    const wRect = wrapperRef.current.getBoundingClientRect();
    const img = cardRef.current.querySelector(".card-image");
    if (!img) return;
    const iRect = img.getBoundingClientRect();

    const dots = project.infoPoints.map((p, i) => ({
      x: iRect.left - wRect.left + iRect.width * (p.x / 100),
      dotY: iRect.top - wRect.top + iRect.height * (p.y / 100),
      text: p.label,
      origIdx: i,
    }));

    // Niveau 0 = haut (topY petit) / Niveau 1 = un peu plus bas
    const levels = assignLevels(dots);

    const LEVEL_Y = [28, 68]; // px depuis le haut du wrapper pour chaque niveau

    const lines = dots.map((d, i) => ({
      dotX: d.x,
      dotY: d.dotY,
      labelX: d.x, // label centré sur le dot (pas de déplacement horizontal)
      topY: LEVEL_Y[levels[i]],
    }));

    const labs = dots.map((d, i) => ({
      x: d.x,
      y: LEVEL_Y[levels[i]] - 22, // label au-dessus de la flèche
      text: d.text,
    }));

    setSvgLines(lines);
    setLabels(labs);
  }, [project.infoPoints]);

  useEffect(() => {
    if (isActive) {
      setShowLabels(false);
      setSvgLines([]);
      setLabels([]);
      const t = setTimeout(() => {
        compute();
        setTimeout(() => setShowLabels(true), 300);
      }, 800);
      return () => clearTimeout(t);
    } else {
      setShowLabels(false);
      setSvgLines([]);
      setLabels([]);
    }
  }, [isActive, compute]);

  const totalH = FLOAT_HEIGHT + (cardRef.current?.offsetHeight ?? 0);

  if (isHidden) return null;

  const cardAnimate = {
    x: carouselOffset * 420,
    z: isCenter ? (isActive ? 20 : 0) : -140 * abs,
    rotateY: carouselOffset * -26,
    rotateX: isActive ? 46 : 0,
    scale: isCenter ? (isActive ? 1.08 : 1) : Math.max(0.62, 1 - abs * 0.19),
    opacity: isCenter ? 1 : Math.max(0, 1 - abs * 0.38),
  };

  return (
    <div
      ref={wrapperRef}
      className="absolute"
      style={{
        paddingTop: FLOAT_HEIGHT,
        width: 460,
        left: "50%",
        marginLeft: -230,
        zIndex: isCenter ? 20 : 10 - abs,
        pointerEvents: isCenter ? "auto" : "none",
      }}
    >
      {/* ── SVG lignes ── */}
      <AnimatePresence>
        {isActive && svgLines.length > 0 && (
          <svg
            className="absolute inset-0 pointer-events-none z-50 overflow-visible"
            width="100%"
            height={totalH}
          >
            {svgLines.map((l, i) => {
              const x1 = l.dotX;
              const y1 = l.dotY;
              const x2 = l.labelX;
              const y2 = l.topY + 7;
              const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

              return (
                <g key={i}>
                  {/* Flèche */}
                  <polygon
                    points={`${x2 - 4},${y2 + 6} ${x2},${y2 - 1} ${x2 + 4},${y2 + 6}`}
                    fill="#8b1e3f"
                  />
                  {/* Ligne dot → flèche */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#8b1e3f"
                    strokeWidth="1"
                    strokeDasharray={len}
                    strokeDashoffset={len}
                    style={{
                      transition: `stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                    }}
                    ref={(el) => {
                      if (el)
                        requestAnimationFrame(() =>
                          requestAnimationFrame(() => {
                            el.style.strokeDashoffset = "0";
                          }),
                        );
                    }}
                  />
                </g>
              );
            })}
          </svg>
        )}
      </AnimatePresence>

      {/* ── Labels à 2 niveaux ── */}
      <AnimatePresence>
        {isActive &&
          showLabels &&
          labels.map((lab, i) => (
            <motion.span
              key={i}
              className="absolute pointer-events-none z-50 text-white/80 text-[11.5px] font-semibold tracking-wide whitespace-nowrap"
              style={{
                left: lab.x,
                top: lab.y,
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{
                delay: i * 0.1,
                duration: 0.3,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {lab.text}
            </motion.span>
          ))}
      </AnimatePresence>

      {/* ── Carte ── */}
      <motion.div
        ref={cardRef}
        onClick={onClick}
        className="relative cursor-pointer rounded-[24px] overflow-hidden bg-[#141414] border border-white/[0.08]"
        style={{ transformStyle: "preserve-3d" }}
        animate={cardAnimate}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.3, 1] }}
      >
        <div className="card-image relative h-[320px] overflow-hidden bg-[#1a1a1a]">
          <img
            src={project.image}
            className="w-full h-full object-cover"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />

          {isActive &&
            project.infoPoints?.map((p, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <div className="w-2.5 h-2.5 bg-[#8b1e3f] rounded-full shadow-[0_0_8px_rgba(139,30,63,0.8)] relative z-10" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7  h-7  border border-[#8b1e3f]/70 rounded-full animate-ping" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#8b1e3f]/30 rounded-full animate-pulse" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#8b1e3f]/12 rounded-full" />
              </div>
            ))}
        </div>

        <div className="px-6 py-5 space-y-4">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="text-white/40 text-[13px] leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <p className="text-white/60 text-[12px] leading-relaxed line-clamp-2">
            {project.moreDetails}
          </p>
          <div className="flex items-center justify-between pt-2">
            <a
              href={project.linkGit}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[12px] text-[#8b1e3f] hover:underline"
            >
              GitHub Repository →
            </a>
            <span className="text-[11px] text-white/30">Click for details</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard3D;
