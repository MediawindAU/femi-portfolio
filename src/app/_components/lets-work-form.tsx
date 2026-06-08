"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function LetsWorkForm({ email }: { email: string }) {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Let's work — project enquiry");
    const greeting = "Hi Femi,\n\n";
    const intro = message
      ? message
      : "I'd like to collaborate on a project.";
    const reply = from ? `\n\nReply to: ${from}` : "";
    const body = encodeURIComponent(`${greeting}${intro}${reply}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <motion.input
        type="email"
        name="email"
        placeholder="Enter Your email."
        value={from}
        onChange={(event) => setFrom(event.target.value)}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        animate={{
          borderColor: emailFocused
            ? "rgba(255,255,255,1)"
            : "rgba(250,250,250,0.7)",
          boxShadow: emailFocused
            ? "0 0 0 3px rgba(255,255,255,0.18)"
            : "0 0 0 0 rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35, ease: easeOut }}
        className="w-full rounded-[10px] border bg-transparent px-5 py-3 text-center text-sm text-white placeholder:text-[#fafafa]/70 focus:outline-none"
      />
      <motion.textarea
        name="message"
        placeholder="Tell me a little about your project."
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onFocus={() => setMessageFocused(true)}
        onBlur={() => setMessageFocused(false)}
        animate={{
          borderColor: messageFocused
            ? "rgba(255,255,255,1)"
            : "rgba(250,250,250,0.7)",
          boxShadow: messageFocused
            ? "0 0 0 3px rgba(255,255,255,0.18)"
            : "0 0 0 0 rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35, ease: easeOut }}
        className="w-full resize-none rounded-[10px] border bg-transparent px-5 py-3 text-left text-sm leading-relaxed text-white placeholder:text-[#fafafa]/70 focus:outline-none"
      />
      <motion.button
        type="submit"
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        animate="rest"
        className="relative mt-1 inline-flex h-[52px] w-[140px] items-center justify-center overflow-hidden rounded-[7px] border-2 border-white text-base font-semibold text-white"
      >
        <motion.span
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(255,255,255,0.14)", originX: 0 }}
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        />
        <motion.span
          className="relative z-10 flex items-center"
          variants={{
            rest: { x: 0 },
            hover: { x: -6 },
          }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          SEND
        </motion.span>
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
      </motion.button>
    </form>
  );
}
