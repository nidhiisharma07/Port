import { MotionInView } from "@/components/motion-in-view";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 md:py-24">
      <div className="section-wrap">
        <MotionInView>
          <SectionHeading
            eyebrow="Skills"
            title="A balanced stack across product and platform."
          />
        </MotionInView>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <MotionInView key={group.title} delay={index * 0.08}>
              <div className="glass-card p-6 transition duration-300 hover:-translate-y-1 md:p-7">
                <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
