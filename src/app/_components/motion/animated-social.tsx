"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedSocial({
  href,
  src,
  alt,
  label,
  width,
  height,
}: {
  href: string;
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}) {
  const isExternal = href.startsWith("http");
  return (
    <motion.a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -4, scale: 1.18 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.a>
  );
}
