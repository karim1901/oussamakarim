"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const spring = { stiffness: 120, damping: 20, mass: 0.8 };

// Pointer-driven 3D tilt with a soft glare; mouse only, disabled for reduced motion.
export default function Tilt({ children, max = 5, glare = true, className = "", innerClassName = "" }) {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(520px circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.09), transparent 45%)`;

  function handleMove(event) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={`[perspective:1400px] ${className}`} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      <motion.div
        className={`relative h-full preserve-3d ${innerClassName}`}
        style={reduceMotion ? undefined : { rotateX, rotateY }}
      >
        {children}
        {glare && !reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: glareBg, transform: "translateZ(80px)" }}
          />
        )}
      </motion.div>
    </div>
  );
}
