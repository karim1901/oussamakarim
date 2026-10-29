import { ArrowRight, CodeXml, ExternalLink, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import Reveal from "@/components/motion/Reveal";
import Tilt from "@/components/motion/Tilt";
import PortraitFrame from "./hero/PortraitFrame";
import { heroHighlights, profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-10 sm:pt-14">
      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-ink">
              <CodeXml className="h-3.5 w-3.5 text-accent-ink" aria-hidden="true" />
              {profile.badge}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[44px] leading-[1.02] font-bold tracking-tight text-ink sm:text-6xl xl:text-[68px]"
            >
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 font-display text-lg font-semibold text-ink sm:text-[22px]">{profile.title}</p>
            <p className="mt-5 max-w-[34rem] text-[15px] leading-7 text-muted">{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </Reveal>

          <Reveal delay={0.32} className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-3 rounded-lg text-sm font-semibold text-ink"
            >
              <FaLinkedin className="h-7 w-7 text-[#0A66C2] dark:text-[#2f86ff]" aria-hidden="true" />
              LinkedIn
              <ExternalLink
                className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="focus-ring inline-flex items-center gap-3 rounded-lg text-sm font-semibold text-ink"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="sr-only">Call </span>
                {profile.phone}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex flex-col items-center gap-14 sm:flex-row sm:justify-center sm:gap-16 lg:gap-14">
          <PortraitFrame />

          <ul className="flex gap-3 sm:flex-col sm:gap-4" aria-label="What I do">
            {heroHighlights.map(({ title, subtitle, icon: Icon }, index) => (
              <li key={title} className="animate-bob" style={{ animationDelay: `${index * -2.6}s` }}>
                <Tilt max={6} innerClassName="rounded-2xl">
                  <div className="relative preserve-3d">
                    <div className="glass absolute inset-0 rounded-2xl" aria-hidden="true" />
                    <div className="relative flex w-[104px] flex-col items-center gap-2 p-3 text-center preserve-3d sm:w-[148px] sm:flex-row sm:gap-3 sm:text-left">
                      <span className="icon-tile h-10 w-10 shrink-0" style={{ transform: "translateZ(18px)" }}>
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className="text-[13px] leading-tight font-medium text-ink" style={{ transform: "translateZ(10px)" }}>
                        {title}
                        <span className="block text-muted">{subtitle}</span>
                      </span>
                    </div>
                  </div>
                </Tilt>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
