import { MotionInView } from "@/components/motion-in-view";
import { SectionHeading } from "@/components/section-heading";

const highlights = ["MEAN Stack", "Java", "Machine Learning", "Database Systems"];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-20">
      <div className="section-wrap">
        <MotionInView>
          <SectionHeading
            eyebrow="About"
            title="Designing practical software with intelligence and scale in mind."
            description="I am a developer focused on blending robust engineering with thoughtful product design. My work spans machine learning, full-stack development, and data-driven systems that improve decision-making and user experience."
          />
        </MotionInView>

        <MotionInView delay={0.08} className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="glass-card px-5 py-4 text-sm font-medium text-zinc-700 transition duration-300 hover:-translate-y-1 dark:text-zinc-200"
            >
              {item}
            </div>
          ))}
        </MotionInView>
      </div>
    </section>
  );
}
