import { Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-16 sm:pt-20">
      <SectionHeading id="skills-title" eyebrow="My Skills" title="Technologies I Work With" icon={Sparkles} />

      <Reveal as="ul" className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-[repeat(auto-fill,minmax(104px,1fr))]">
        {skills.map(({ name, icon: Icon, color, scale = 1 }) => (
          <li key={name} className="[perspective:700px]">
            <div
              className="glass group relative flex h-[100px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl px-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:[transform:translateY(-4px)_rotateX(5deg)] hover:border-line-strong hover:bg-surface-hover hover:shadow-deep"
              style={{ "--brand": color ?? "var(--accent)" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--brand) to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-6 top-3 h-10 rounded-full bg-(--brand) opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              />
              <span className="relative transition-transform duration-500 group-hover:-translate-y-0.5">
                <Icon
                  aria-hidden="true"
                  className={`h-8 w-8 ${color ? "" : "text-ink"}`}
                  style={{ color: color ?? undefined, transform: scale === 1 ? undefined : `scale(${scale})` }}
                />
              </span>
              <span className="relative text-center text-[12px] leading-tight font-medium text-ink">{name}</span>
            </div>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
