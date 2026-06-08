"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export function ContactForm({ email }: { email: string }) {
  const [from, setFrom] = useState("");
  const [focused, setFocused] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Project enquiry from portfolio");
    const body = encodeURIComponent(
      from
        ? `Hi Femi,\n\nI'd like to discuss a project.\n\nReply to: ${from}`
        : "Hi Femi,\n\nI'd like to discuss a project."
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex max-w-[600px] flex-col items-center gap-4"
    >
      <motion.input
        type="email"
        name="email"
        placeholder="Enter Your email."
        value={from}
        onChange={(event) => setFrom(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{
          borderColor: focused ? "rgba(255,255,255,1)" : "rgba(250,250,250,0.7)",
          boxShadow: focused
            ? "0 0 0 3px rgba(255,255,255,0.18)"
            : "0 0 0 0 rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-[10px] border bg-transparent px-6 py-4 text-center text-base text-white placeholder:text-[#676767] focus:outline-none"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-xl font-medium text-white sm:text-2xl"
      >
        SEND
      </motion.button>
    </form>
  );
}
