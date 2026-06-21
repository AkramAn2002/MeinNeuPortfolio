import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegAddressCard,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ACCENT = "#8b1e3f";

const fields = [
  { name: "user_name", label: "Full Name", icon: FaUser, type: "text" },
  {
    name: "user_email",
    label: "Email Address",
    icon: FaEnvelope,
    type: "email",
  },
  { name: "user_phone", label: "Phone Number", icon: FaPhone, type: "tel" },
  { name: "subject", label: "Subject", icon: FaRegAddressCard, type: "text" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/AkramAn2002", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/akram-anou-9493aa252/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/akramanou/",
    label: "Instagram",
  },
  { icon: FaEnvelope, href: "mailto:aanou.akram@gmail.com", label: "Email" },
];

// Animated input field
const Field = ({ field, value, onChange }) => {
  const [focused, setFocused] = useState(false);
  const Icon = field.icon;
  const active = focused || value.length > 0;

  return (
    <div className="relative group">
      <div
        className="relative flex items-center rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${active ? ACCENT : "rgba(255,255,255,0.08)"}`,
          boxShadow: active ? `0 0 0 3px ${ACCENT}18` : "none",
        }}
      >
        {/* Icon */}
        <div
          className="absolute left-4 transition-colors duration-300"
          style={{ color: active ? ACCENT : "rgba(255,255,255,0.2)" }}
        >
          <Icon size={14} />
        </div>

        {/* Input */}
        <input
          type={field.type}
          name={field.name}
          value={value}
          required
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none pt-5 pb-2 pl-10 pr-4 text-[14px] text-white/90"
          style={{ caretColor: ACCENT }}
        />

        {/* Floating label */}
        <label
          className="absolute left-10 pointer-events-none font-medium transition-all duration-200"
          style={{
            fontSize: active ? "10px" : "13px",
            top: active ? "6px" : "50%",
            transform: active ? "none" : "translateY(-50%)",
            color: active ? ACCENT : "rgba(255,255,255,0.3)",
            letterSpacing: active ? "0.06em" : "0",
            textTransform: active ? "uppercase" : "none",
          }}
        >
          {field.label}
        </label>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const form = useRef();
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [sending, setSending] = useState(false);
  const [msgFocused, setMsgFocused] = useState(false);

  const handleChange = (name) => (e) =>
    setValues((v) => ({ ...v, [name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs;
    emailjs;
    emailjs;
    emailjs
      .sendForm("xxxxx", "xxxxx", form.current, { publicKey: "xxxxx" })
      .then(() => {
        setStatus("success");

        setValues({
          user_name: "",
          user_email: "",
          user_phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("EmailJS ERROR:", err);
        setStatus("error");
      })
      .finally(() => setSending(false));
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 lg:px-20 py-32 overflow-hidden"
    >
      {/* ── Ambient glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}14 0%, transparent 65%)`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ACCENT }} />
            <span
              className="text-[11px] font-semibold tracking-[5px] uppercase"
              style={{ color: ACCENT }}
            >
              Get in touch
            </span>
          </div>
          <motion.h1
            variants={itemVariants}
            className="leading-none mb-8"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              fontFamily:
                "'Inter', 'SF Pro Display', 'Helvetica Neue', sans-serif",
              color: "#ffffff",
            }}
          >
            <span className="block text-white/95">Contact</span>

            <span
              className="block mt-1"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(139,30,63,0.9)",
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              ME
            </span>
          </motion.h1>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16">
          {/* ── LEFT INFO PANEL ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.9]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out — I'm always open to discussing new opportunities.
            </motion.p>

            {/* Info cards */}
            {[
              {
                icon: FaEnvelope,
                title: "Email",
                value: "aanou.akram@gmail.com",
              },
              { icon: FaPhone, title: "Phone", value: "+212 618-162049" },
              { icon: FaUser, title: "Location", value: "Morocco, Casablanca" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: `${ACCENT}14`,
                      border: `1px solid ${ACCENT}30`,
                    }}
                  >
                    <Icon size={16} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {info.title}
                    </p>
                    <p
                      className="text-[14px] font-medium"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex gap-3 pt-2">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = ACCENT;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.border = `1px solid ${ACCENT}`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.style.border =
                        "1px solid rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.3, 1] }}
          >
            <div
              className="rounded-[28px] p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {/* 2-col grid for first 4 fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {fields.map((field) => (
                    <Field
                      key={field.name}
                      field={field}
                      value={values[field.name]}
                      onChange={handleChange(field.name)}
                    />
                  ))}
                </div>

                {/* Textarea */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${msgFocused || values.message ? ACCENT : "rgba(255,255,255,0.08)"}`,
                    boxShadow:
                      msgFocused || values.message
                        ? `0 0 0 3px ${ACCENT}18`
                        : "none",
                  }}
                >
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={handleChange("message")}
                    onFocus={() => setMsgFocused(true)}
                    onBlur={() => setMsgFocused(false)}
                    className="w-full bg-transparent outline-none resize-none pt-7 pb-3 px-4 text-[14px] text-white/90"
                    style={{ caretColor: ACCENT }}
                  />
                  <label
                    className="absolute left-4 pointer-events-none font-medium transition-all duration-200"
                    style={{
                      fontSize: msgFocused || values.message ? "10px" : "13px",
                      top: msgFocused || values.message ? "8px" : "16px",
                      color:
                        msgFocused || values.message
                          ? ACCENT
                          : "rgba(255,255,255,0.3)",
                      letterSpacing:
                        msgFocused || values.message ? "0.06em" : "0",
                      textTransform:
                        msgFocused || values.message ? "uppercase" : "none",
                    }}
                  >
                    Your Message
                  </label>
                </div>

                {/* Status */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[13px] font-medium px-4 py-2.5 rounded-xl"
                    style={{
                      background:
                        status === "success"
                          ? "rgba(34,197,94,0.08)"
                          : "rgba(239,68,68,0.08)",
                      border: `1px solid ${status === "success" ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
                      color: status === "success" ? "#4ade80" : "#f87171",
                    }}
                  >
                    {status === "success"
                      ? "✓ Message sent successfully!"
                      : "✗ Something went wrong. Please contact me directly."}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl font-semibold text-[14px] tracking-wide transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: sending
                      ? "rgba(139,30,63,0.5)"
                      : `linear-gradient(135deg, ${ACCENT} 0%, #6b1530 100%)`,
                    color: "#fff",
                    boxShadow: sending ? "none" : `0 8px 32px ${ACCENT}40`,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="3"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
