"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type Variant = "primary-light" | "primary-dark" | "outline-light" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  // White-fill button on dark surfaces (SEE WORKS)
  "primary-light":
    "border-2 border-white bg-white text-[#071459] rounded-[7px]",
  // Black-fill button on light surfaces (SEE PROJECT / START A PROJECT)
  "primary-dark":
    "border border-transparent bg-[#090000] text-white rounded-[8px]",
  // Outlined white on dark (WORK WITH ME)
  "outline-light":
    "border-2 border-white text-white rounded-[5px] bg-transparent",
  // Outlined black on light (RESUME / ABOUT WORK)
  "outline-dark":
    "border-2 border-black text-black rounded-[7px] bg-transparent",
};

type CtaButtonProps = {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean | string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

const easeOut = [0.16, 1, 0.3, 1] as const;

export function CtaButton({
  href,
  variant = "primary-dark",
  size = "md",
  children,
  className = "",
  external,
  download,
  ...rest
}: CtaButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "h-[62px] px-6 text-xl"
      : "h-[52px] px-5 text-base";

  const isOutlineLight = variant === "outline-light";
  const isOutlineDark = variant === "outline-dark";
  const isOutline = isOutlineLight || isOutlineDark;

  const fillColor = isOutlineLight
    ? "rgba(255,255,255,0.14)"
    : "rgba(0,0,0,0.08)";

  const inner = (
    <motion.span
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      animate="rest"
      className={`relative inline-flex items-center justify-center overflow-hidden font-semibold ${sizeClasses} ${variantClasses[variant]} ${className}`}
      style={{ minWidth: 180 }}
    >
      {/* Outline buttons: background fill wipe from left on hover */}
      {isOutline && (
        <motion.span
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: fillColor, originX: 0 }}
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        />
      )}

      {/* Label nudges left to make room for the arrow */}
      <motion.span
        className="relative z-10 flex items-center"
        variants={{
          rest: { x: 0 },
          hover: { x: -6 },
        }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        {children}
      </motion.span>

      {/* Chevron arrow slides in from the right on hover */}
      <motion.svg
        aria-hidden
        viewBox="0 0 24 24"
        className="relative z-10 ml-1 h-4 w-4 shrink-0"
        variants={{
          rest: { opacity: 0, x: -10, width: 0 },
          hover: { opacity: 1, x: 0, width: 16 },
        }}
        transition={{ duration: 0.35, ease: easeOut }}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </motion.svg>

      {/* Solid buttons: subtle lift via shadow on hover */}
      {!isOutline && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          variants={{
            rest: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
            hover: { boxShadow: "0 12px 28px -14px rgba(0,0,0,0.45)" },
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.span>
  );

  if (download) {
    return (
      <a
        href={href}
        download={typeof download === "string" ? download : true}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block" {...rest}>
      {inner}
    </Link>
  );
}
