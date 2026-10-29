import { Briefcase } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-16 sm:pt-20">
      <SectionHeading id="experience-title" eyebrow="My Experience" title="Professional Journey" icon={Briefcase} />

      <ol className="relative grid gap-8 border-l border-line-strong pl-7 md:grid-cols-3 md:gap-6 md:border-l-0 md:pl-0">
        <span
          aria-hidden="true"
          className="absolute top-[7px] left-0 hidden h-px w-full bg-linear-to-r from-accent via-accent-2 to-transparent opacity-60 md:block"
        />
        {experience.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 0.1} className="relative md:pt-9">
            <span
              aria-hidden="true"
              className="absolute top-0.5 -left-[35px] grid h-3.5 w-3.5 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 shadow-[0_0_0_5px_rgb(90_100_255/0.14),0_0_16px_var(--glow)] md:top-0 md:left-0"
            />
            {item.period ? (
              <p className="text-xs font-semibold text-ink">{item.period}</p>
            ) : (
              <p className="chip w-fit py-0.5 text-[10px]">Focus area</p>
            )}
            <h3 className="mt-2 text-sm font-semibold text-accent-ink">{item.title}</h3>
            {item.organization && <p className="text-xs text-muted">{item.organization}</p>}
            <p className="mt-1.5 max-w-xs text-[13px] leading-6 text-muted">{item.summary}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
