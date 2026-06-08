"use client";

import { motion } from "framer-motion";

export function PrintButton() {
  return (
    <motion.button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex h-[52px] items-center justify-center rounded-[7px] border-2 border-black/30 bg-transparent px-5 text-base font-semibold text-black transition-colors hover:border-black hover:bg-black hover:text-white"
    >
      Print
    </motion.button>
  );
}
