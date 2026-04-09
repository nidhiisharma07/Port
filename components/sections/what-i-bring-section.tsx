import { CheckCircle2 } from "lucide-react";
import { MotionInView } from "@/components/motion-in-view";
import { SectionHeading } from "@/components/section-heading";
import { differentiators } from "@/lib/content";

export function WhatIBringSection() {
  return (
    <section id="what-i-bring" className="section-shell py-16 md:py-20">
      <div className="section-wrap">
        <MotionInView>
          <SectionHeading
            eyebrow="What I Bring"
            title="Execution-focused engineering with practical depth."
          />
        </MotionInView>

        <MotionInView delay={0.08}>
          <div className="glass-card p-7 md:p-8">
            <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
              {differentiators.map((point) => (
                <li key={point} className="flex items-start gap-3.5 text-zinc-700 dark:text-zinc-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                  <span className="text-sm leading-relaxed md:text-[0.98rem]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
