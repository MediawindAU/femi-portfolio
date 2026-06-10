"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "ARTWORK", href: "/artwork" },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50 bg-white">
      <div className="relative z-[60] mx-auto flex max-w-[960px] items-center justify-between bg-white px-6 py-6 lg:px-8 lg:py-7">
        <Link href="/" aria-label="Femi Olatunde — Home" className="shrink-0">
          <Image
            src="/images/fm-logo.png"
            alt="Femi Olatunde"
            width={112}
            height={91}
            priority
            style={{ height: "auto", width: "auto" }}
            className="max-h-[44px] max-w-[80px] lg:max-h-[60px] lg:max-w-[90px]"
          />
        </Link>

        <nav className="hidden items-center gap-3 sm:flex sm:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-black transition-opacity hover:opacity-70 lg:text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-2 border-[#1c1c1c] px-3 py-1.5 text-xs font-semibold tracking-wide text-black transition-colors hover:bg-black hover:text-white lg:px-4 lg:py-2 lg:text-lg"
          >
            CONTACT
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center -mr-2 sm:hidden"
        >
          <motion.span
            aria-hidden
            className="absolute block h-[2.5px] w-7 origin-center rounded-full bg-black"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            transition={{ duration: 0.32, ease: easeOut }}
          />
          <motion.span
            aria-hidden
            className="absolute block h-[2.5px] w-7 rounded-full bg-black"
            animate={open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2, ease: easeOut }}
          />
          <motion.span
            aria-hidden
            className="absolute block h-[2.5px] w-7 origin-center rounded-full bg-black"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            transition={{ duration: 0.32, ease: easeOut }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="fixed inset-0 top-0 z-40 bg-white sm:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-12 pt-28">
              <nav className="flex flex-1 flex-col items-start justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 12, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: easeOut,
                      delay: 0.08 + i * 0.06,
                    }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-4xl font-semibold tracking-tight text-black transition-opacity hover:opacity-60"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: easeOut,
                    delay: 0.08 + navLinks.length * 0.06,
                  }}
                  className="mt-6 h-[2px] w-24 origin-left bg-black/80"
                />
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 12, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: easeOut,
                    delay: 0.18 + navLinks.length * 0.06,
                  }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center border-2 border-[#1c1c1c] px-6 py-3 text-lg font-semibold tracking-wide text-black transition-colors hover:bg-black hover:text-white"
                  >
                    CONTACT
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
