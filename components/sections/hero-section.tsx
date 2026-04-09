"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-accent-radial" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[linear-gradient(to_bottom,rgba(99,102,241,0.08),transparent)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl md:h-80 md:w-80"
        animate={{ y: [0, -12, 0], opacity: [0.65, 0.8, 0.65] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-wrap">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300"
        >
          Hi, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.12 }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[4.1rem]"
        >
          Nidhi Sharma
          <span className="mt-3 block max-w-3xl text-[0.55em] font-medium leading-[1.2] tracking-[-0.015em] text-zinc-600 dark:text-zinc-300">
            Building intelligent systems & scalable web apps
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.22 }}
          className="mt-10 max-w-2xl text-[1.08rem] leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-xl"
        >
          I design ML-powered solutions and full-stack applications that solve
          real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3.5"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl border border-zinc-300/80 bg-white/70 px-5 py-3.5 text-sm font-medium text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-2xl border border-accent/35 bg-accent/10 px-5 py-3.5 text-sm font-medium text-accent transition duration-300 hover:-translate-y-0.5 hover:bg-accent/15"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
