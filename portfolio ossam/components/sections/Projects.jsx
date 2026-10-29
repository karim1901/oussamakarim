import { ArrowUpRight, EyeOff, FolderKanban } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Tilt from "@/components/motion/Tilt";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectMockup from "./projects/ProjectMockup";
import ProjectPreview from "./projects/ProjectPreview";
import ScreenshotImage, { frameLabel } from "./projects/ScreenshotImage";
import { projects } from "@/data/site";

// A front-facing browser window floating above a glass pane; depth comes from Z spacing only.
function ProjectShowcase({ project }) {
  const cover = project.images[0];

  return (
    <div className="relative pt-3 preserve-3d">
      <div
        aria-hidden="true"
        className="pane absolute inset-x-5 top-0 bottom-7 rounded-xl"
        style={{ transform: "translateZ(-30px)" }}
      />
      <div aria-hidden="true" className="cast-shadow absolute inset-x-8 -bottom-3 h-8 transition-opacity duration-500 group-hover:opacity-70" />

      <div className="relative transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateZ(28px)] group-hover:[transform:translateZ(46px)]">
        <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-strong shadow-deep">
          <div className="flex items-center gap-1.5 border-b border-line bg-bg-soft/80 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate rounded-md bg-muted/10 px-2 py-0.5 text-[9px] text-subtle">
              {frameLabel(project)}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
              {cover ? (
                <ScreenshotImage image={cover} sizes="(min-width: 1280px) 270px, (min-width: 640px) 45vw, 90vw" />
              ) : (
                <ProjectMockup variant={project.mockup} />
              )}
            </div>
            {!cover && (
              <span className="absolute top-2 left-2 rounded-full bg-black/65 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur">
                Illustrative preview
              </span>
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgb(255_255_255/0.1),transparent_35%)]"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Tilt max={4} className="group h-full" innerClassName="rounded-[22px]">
      <article className="relative flex h-full flex-col rounded-[22px] p-3.5 preserve-3d">
        <div
          className="glass absolute inset-0 rounded-[22px] transition-[border-color,box-shadow] duration-500 group-hover:border-line-strong group-hover:shadow-deep"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-8 h-24 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          style={{ transform: "translateZ(-40px)" }}
        />

        <ProjectShowcase project={project} />

        <div className="relative flex flex-1 flex-col px-1.5 pt-5 pb-1" style={{ transform: "translateZ(16px)" }}>
          <h3 className="font-display text-[17px] font-semibold text-ink">{project.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-accent-ink">{project.category}</p>
          <p className="mt-2 text-[13px] leading-6 text-muted">{project.description}</p>

          <div className="mt-auto pt-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2 text-xs"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">of {project.name} (opens in a new tab)</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-strong px-4 py-2 text-xs font-medium text-subtle">
                <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                Preview unavailable
              </span>
            )}

            {project.tech.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
                {project.tech.map((tech) => (
                  <li key={tech} className="chip px-2.5 py-0.5 text-[10px]">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-16 sm:pt-20">
      <SectionHeading id="projects-title" eyebrow="My Projects" title="Featured Projects" icon={FolderKanban} />

      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.name} delay={index * 0.08} className="h-full">
            <ProjectPreview project={project}>
              <ProjectCard project={project} />
            </ProjectPreview>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
