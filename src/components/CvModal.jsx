import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import { useState, useEffect } from "react";

import cvAkram from "/Cv_AnouAkram --.pdf";

const ACCENT = "#8b1e3f";
const CV_PATH = cvAkram;

export default function CvModal({ onClose }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Inline PDF viewing is unreliable on mobile browsers (iOS Safari in
  // particular refuses to render a PDF inside an iframe), so below 768px
  // we offer open/download actions instead of an embedded viewer.
  useEffect(() => {
    const calc = () => setIsMobile(window.innerWidth < 768);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Escape closes, body scroll locks while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
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
          className="relative flex flex-col rounded-[18px] sm:rounded-3xl"
          style={{
            width: expanded ? "98vw" : "min(880px, 94vw)",
            height: isMobile ? "auto" : expanded ? "97vh" : "90vh",
            maxHeight: "92vh",
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(139,30,63,0.15)`,
            overflow: "hidden",
            transition: "width 0.4s ease, height 0.4s ease",
          }}
        >
          {/* ── Top bar ── */}
          <div
            className="flex-shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Left — title */}
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
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
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-white/90 leading-none truncate">
                  Resume
                </p>
                <p className="text-[10px] text-white/30 mt-0.5 leading-none truncate">
                  Akram ANOU
                </p>
              </div>
            </div>

            {/* Right — actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Expand / compress — desktop only */}
              <button
                onClick={() => setExpanded((e) => !e)}
                className="hidden md:flex w-9 h-9 rounded-xl items-center justify-center transition-all duration-200"
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
                title={expanded ? "Shrink" : "Expand"}
              >
                {expanded ? <FaCompress size={12} /> : <FaExpand size={12} />}
              </button>

              {/* Download — label collapses to an icon on small screens */}
              <a
                href={CV_PATH}
                download="Akram_ANOU_CV.pdf"
                className="flex items-center gap-2 h-9 px-3 sm:px-4 rounded-xl text-[12px] font-semibold transition-all duration-200"
                style={{
                  background: `${ACCENT}18`,
                  border: `1px solid ${ACCENT}40`,
                  color: ACCENT,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = ACCENT;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${ACCENT}18`;
                  e.currentTarget.style.color = ACCENT;
                }}
              >
                <FaDownload size={11} />
                <span className="hidden sm:inline">Download</span>
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
                title="Close"
              >
                <FaTimes size={12} />
              </button>
            </div>
          </div>

          {/* ── Viewer ── */}
          {isMobile ? (
            <div
              className="flex flex-col items-center text-center gap-5 px-6 py-12"
              style={{ background: "#111" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${ACCENT}18`,
                  border: `1px solid ${ACCENT}40`,
                }}
              >
                <FaDownload size={22} style={{ color: ACCENT }} />
              </div>

              <div>
                <p className="text-[15px] font-semibold text-white/90">
                  View the resume
                </p>
                <p className="text-[13px] text-white/40 mt-2 leading-relaxed">
                  Mobile browsers can't display a PDF inside this window. Open
                  it in a new tab or save it to your device.
                </p>
              </div>

              <div className="flex flex-col w-full gap-2.5 max-w-xs">
                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-2xl text-[13px] font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT} 0%, #6b1530 100%)`,
                    textDecoration: "none",
                  }}
                >
                  Open PDF
                </a>

                <a
                  href={CV_PATH}
                  download="Akram_ANOU_CV.pdf"
                  className="w-full py-3.5 rounded-2xl text-[13px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                  }}
                >
                  Save to device
                </a>
              </div>
            </div>
          ) : (
            <div className="flex-1 relative" style={{ background: "#111" }}>
              <iframe
                src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                title="Resume — Akram ANOU"
              />

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
          )}

          {/* ── Bottom bar ── */}
          <div
            className="flex-shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 py-3"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="text-[10px] sm:text-[11px] truncate"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              <span className="hidden sm:inline">PDF · </span>Akram ANOU —
              Software Engineer
            </span>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
              />
              <span
                className="text-[10px] sm:text-[11px] whitespace-nowrap"
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
