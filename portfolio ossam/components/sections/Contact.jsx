import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import Reveal from "@/components/motion/Reveal";
import Tilt from "@/components/motion/Tilt";
import { profile } from "@/data/site";

const planes = [
  { z: -80, x: 0, opacity: 0.45 },
  { z: -30, x: 38, opacity: 0.7 },
  { z: 20, x: 76, opacity: 1 },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-16 sm:pt-20">
      <Reveal className="relative overflow-hidden rounded-[26px] border border-line-strong bg-linear-to-r from-accent/25 via-accent-2/15 to-accent/10 p-6 shadow-deep sm:p-8">
        <div aria-hidden="true" className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-0 hidden h-52 w-56 -translate-y-1/2 [perspective:900px] lg:block"
        >
          <div
            className="absolute top-1/2 right-0 left-0 h-px bg-linear-to-r from-transparent via-[var(--pane-edge)] to-transparent"
          />
          <div className="relative h-full w-full preserve-3d" style={{ transform: "rotateY(-52deg) rotateX(6deg)" }}>
            {planes.map(({ z, x, opacity }) => (
              <div
                key={z}
                className="pane absolute inset-y-4 left-6 w-32 rounded-xl"
                style={{ transform: `translate3d(${x}px, 0, ${z}px)`, opacity }}
              />
            ))}
          </div>
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,300px)] lg:gap-10 lg:pr-36">
          <div>
            <h2 id="contact-title" className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[26px]">
              Let&apos;s Work Together
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>
          </div>

          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-fit px-7">
            Contact Me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">on LinkedIn (opens in a new tab)</span>
          </a>

          <div className="flex flex-col gap-3">
            <Tilt max={6} innerClassName="rounded-2xl">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring glass group flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0A66C2] text-white shadow-[0_10px_24px_-10px_rgb(10_102_194/0.8)]">
                  <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">LinkedIn</span>
                  <span className="block text-xs text-muted">Connect with me</span>
                </span>
                <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-accent-ink" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Tilt>
            <Tilt max={6} innerClassName="rounded-2xl">
              <a href={`tel:${profile.phone}`} className="focus-ring glass group flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_10px_24px_-10px_var(--glow)]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">Phone</span>
                  <span className="block text-xs text-muted">{profile.phone}</span>
                </span>
              </a>
            </Tilt>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
