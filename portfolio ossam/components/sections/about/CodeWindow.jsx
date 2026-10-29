import { SiLaravel, SiNextdotjs, SiReact } from "react-icons/si";
import Tilt from "@/components/motion/Tilt";

// Decorative editor illustration; widths are percentages of the window.
const lines = [
  [["#7b8cff", 18], ["#c084fc", 30]],
  [["#5eead4", 12], ["#93c5fd", 40], ["#c084fc", 14]],
  [["#93c5fd", 26], ["#fbbf24", 20]],
  [["#c084fc", 10], ["#7b8cff", 34], ["#5eead4", 16]],
  [["#93c5fd", 22], ["#c084fc", 18]],
  [["#7b8cff", 30], ["#5eead4", 22]],
  [["#fbbf24", 14], ["#93c5fd", 28]],
  [["#c084fc", 20]],
];

const chips = [
  { label: "Next.js", icon: SiNextdotjs, color: "currentColor", z: 46, x: 18 },
  { label: "React", icon: SiReact, color: "#61DAFB", z: 62, x: 4 },
  { label: "Laravel", icon: SiLaravel, color: "#FF2D20", z: 40, x: 16 },
];

export default function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[330px]" aria-hidden="true">
      <div className="absolute inset-8 rounded-3xl bg-accent/30 blur-3xl" />
      <div className="cast-shadow absolute inset-x-10 -bottom-6 h-8" />

      <Tilt max={5} innerClassName="rounded-2xl">
        <div className="relative preserve-3d" style={{ transform: "rotateY(-9deg) rotateX(4deg)" }}>
          <div className="pane absolute -top-5 left-6 -right-3 h-full rounded-2xl" style={{ transform: "translateZ(-50px)" }} />

          <div className="relative rounded-2xl p-4 preserve-3d">
            <div className="glass-strong absolute inset-0 rounded-2xl" />
            <div className="relative mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-3 h-1.5 w-20 rounded-full bg-muted/30" />
            </div>
            <div className="relative space-y-2.5 pr-16">
              {lines.map((segments, row) => (
                <div key={row} className="flex items-center gap-1.5" style={{ paddingLeft: `${(row % 3) * 10}px` }}>
                  <span className="w-3 text-[8px] text-subtle">{row + 1}</span>
                  {segments.map(([color, width], index) => (
                    <span
                      key={index}
                      className="h-1.5 rounded-full opacity-75"
                      style={{ background: color, width: `${width}%` }}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 -right-6 flex -translate-y-1/2 flex-col gap-2.5 preserve-3d">
              {chips.map(({ label, icon: Icon, color, z, x }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-line-strong bg-surface-strong px-3 py-2 text-[11px] font-semibold text-ink shadow-deep"
                  style={{ transform: `translate3d(${x}px, 0, ${z}px)` }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
