"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { MotionInView } from "@/components/motion-in-view";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 md:py-24">
      <div className="section-wrap">
        <MotionInView>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work built to solve real problems."
            description="Each project combines clear problem framing, thoughtful architecture, and measurable outcome."
          />
        </MotionInView>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionInView key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7, scale: 1.008 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card group h-full p-6 md:p-7"
              >
                <h3 className="text-[1.35rem] font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-300/80 px-3 py-1 text-xs text-zinc-600 transition-colors group-hover:border-accent/40 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/70 px-3.5 py-2 text-sm text-zinc-700 transition duration-300 group-hover:border-accent/40 group-hover:text-accent dark:border-zinc-700 dark:text-zinc-200"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2 text-sm text-zinc-50 transition duration-300 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </motion.article>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
