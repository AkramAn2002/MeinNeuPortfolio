import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import { useState } from "react";

import cvAkram from "/Cv_AnouAkram --.pdf";
const ACCENT = "#8b1e3f";
const CV_PATH = cvAkram;

export default function CvModal({ onClose }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* ── Backdrop ── */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(16px)",
          }}
          onClick={onClose}
        />

        {/* ── Modal ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.3, 1] }}
          className="relative flex flex-col"
          style={{
            width: expanded ? "98vw" : "min(880px, 92vw)",
            height: expanded ? "97vh" : "90vh",
            borderRadius: 24,
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(139,30,63,0.15)`,
            overflow: "hidden",
            transition: "width 0.4s ease, height 0.4s ease",
          }}
        >
          {/* ── Top bar ── */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-4"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Left — title */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{
                  background: `${ACCENT}20`,
                  border: `1px solid ${ACCENT}40`,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white/90 leading-none">
                  Resume
                </p>
                <p className="text-[10px] text-white/30 mt-0.5 leading-none">
                  Akram ANOU
                </p>
              </div>
            </div>

            {/* Right — actions */}
            <div className="flex items-center gap-2">
              {/* Expand / compress */}
              <button
                onClick={() => setExpanded((e) => !e)}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
                title={expanded ? "Réduire" : "Agrandir"}
              >
                {expanded ? <FaCompress size={12} /> : <FaExpand size={12} />}
              </button>

              {/* Download */}
              <a
                href={CV_PATH}
                download="Akram_ANOU_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200"
                style={{
                  background: `${ACCENT}18`,
                  border: `1px solid ${ACCENT}40`,
                  color: ACCENT,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = ACCENT;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${ACCENT}18`;
                  e.currentTarget.style.color = ACCENT;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaDownload size={11} />
                Download
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                  e.currentTarget.style.color = "#f87171";
                  e.currentTarget.style.border =
                    "1px solid rgba(239,68,68,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)";
                }}
                title="Fermer"
              >
                <FaTimes size={12} />
              </button>
            </div>
          </div>

          {/* ── PDF viewer ── */}
          <div className="flex-1 relative" style={{ background: "#111" }}>
            <iframe
              src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              title="CV Akram ANOU"
            />

            {/* Subtle inner shadow top */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: 32,
                background:
                  "linear-gradient(to bottom, rgba(13,13,13,0.5), transparent)",
                zIndex: 2,
              }}
            />
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-3"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="text-[11px]"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              PDF · Akram ANOU — Software Engineer
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
              />
              <span
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Available for hire
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
