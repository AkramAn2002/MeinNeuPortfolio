import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Mesure la largeur réelle du texte
function getTextWidth(text) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "600 11.5px Inter, sans-serif";
  return ctx.measureText(text).width + 24; // +24 = padding pill
}

const InfoPoint = ({ point, index, cardRef, allPoints }) => {
  const dotRef = useRef(null);
  const pillRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (
      !dotRef.current ||
      !pillRef.current ||
      !lineRef.current ||
      !cardRef?.current
    )
      return;

    const update = () => {
      const dotRect = dotRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();

      const cx = dotRect.left + dotRect.width / 2 - cardRect.left;
      const cy = dotRect.top + dotRect.height / 2 - cardRect.top;

      const goUp = cy > cardRect.height * 0.55;
      const lineLen = 44;

      // ── Calcul anti-collision horizontal ──
      // Récupère la position x de tous les autres dots
      const siblings = allPoints || [];
      const myX = cx;

      // Cherche si un autre dot est très proche à gauche ou à droite
      let forcedSide = null; // "left" | "right" | null
      siblings.forEach((p, i) => {
        if (p.label === point.label) return; // c'est moi
        // Convertir % en px
        const otherX = (p.x / 100) * cardRect.width;
        const dist = otherX - myX;

        // Si un voisin est à moins de (largeur du label) à droite → je vais à gauche
        const myW = getTextWidth(point.label);
        if (Math.abs(dist) < myW + 12) {
          forcedSide = dist > 0 ? "left" : "right";
        }
      });

      const goRight = forcedSide
        ? forcedSide === "right"
        : cx < cardRect.width * 0.6;

      // LINE
      lineRef.current.style.height = `${lineLen}px`;
      lineRef.current.style.top = goUp ? `-${lineLen}px` : "10px";

      // PILL
      pillRef.current.style.top = goUp
        ? `-${lineLen + 34}px`
        : `${lineLen + 6}px`;
      pillRef.current.style.left = goRight ? "14px" : "auto";
      pillRef.current.style.right = goRight ? "auto" : "14px";
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cardRef, allPoints, point]);

  return (
    <div
      ref={dotRef}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
    >
      {/* DOT */}
      <div className="w-2.5 h-2.5 bg-[#8b1e3f] rounded-full shadow-[0_0_8px_rgba(139,30,63,0.7)] relative z-10" />

      {/* RINGS */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7  h-7  border border-[#8b1e3f]/70 rounded-full animate-ping" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-[#8b1e3f]/30 rounded-full animate-pulse" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#8b1e3f]/10 rounded-full" />

      {/* LINE */}
      <motion.div
        ref={lineRef}
        className="absolute left-1/2 w-px bg-[#8b1e3f]/60"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: index * 0.08, duration: 0.25 }}
        style={{ transformOrigin: "top" }}
      />

      {/* LABEL PILL */}
      <motion.div
        ref={pillRef}
        className="absolute whitespace-nowrap bg-[rgba(20,8,12,0.9)] border border-[#8b1e3f]/50 text-[#e8a0b5] text-[11.5px] px-3 py-1 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.35 }}
      >
        {point.label}
      </motion.div>
    </div>
  );
};

export default InfoPoint;
