"use client";

import { motion } from "framer-motion";

export function AnimatedLine({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      style={{ originX: 0 }}
      className={`h-px w-full origin-left bg-white/25 ${className}`}
    />
  );
}
