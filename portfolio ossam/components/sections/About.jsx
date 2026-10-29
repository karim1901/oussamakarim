import { Download, Layers, Mail, MonitorSmartphone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CodeWindow from "./about/CodeWindow";
import { profile, skills } from "@/data/site";

// Derived from the content data so the numbers stay truthful.
const facts = [
  { value: `${skills.length}`, label: "Technologies", icon: Layers },
  { value: "Web & Mobile", label: "Platforms", icon: MonitorSmartphone },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pt-20 sm:pt-24">
      <Reveal className="glass-strong relative overflow-hidden rounded-[28px] p-6 sm:p-8">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/3 h-56 w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-8">
          <div>
            <span className="inline-flex rounded-full bg-linear-to-r from-accent/25 to-accent-2/25 px-3 py-1 text-xs font-medium text-accent-ink ring-1 ring-accent/30">
              About Me
            </span>
            <h2 id="about-title" className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[26px]">
              Turning Ideas Into Real Solutions
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">{profile.about}</p>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} download className="btn btn-ghost mt-7">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost mt-7">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get In Touch
              </a>
            )}
          </div>

          <CodeWindow />

          <ul className="glass space-y-1 rounded-2xl p-3">
            {facts.map(({ value, label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-surface-hover">
                <span className="icon-tile h-11 w-11 shrink-0">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="text-gradient block font-display text-xl font-semibold">{value}</span>
                  <span className="block text-xs text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
