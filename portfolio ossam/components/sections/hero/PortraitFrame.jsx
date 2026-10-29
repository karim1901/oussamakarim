import Image from "next/image";
import { profile } from "@/data/site";

// Depth comes from light and shadow, not motion: a backing plate, a glass frame with a rim-lit
// edge drawn just outside the photo (so the photo keeps its size), and a soft contact shadow.
export default function PortraitFrame() {
  return (
    <div className="group relative mx-auto h-[350px] w-[290px] sm:h-[384px] sm:w-[318px]">
      <div
        aria-hidden="true"
        className="absolute -inset-16 rounded-full bg-[radial-gradient(closest-side,rgb(70_95_255/0.22),rgb(110_80_255/0.1)_55%,transparent)] dark:bg-[radial-gradient(closest-side,rgb(70_95_255/0.3),rgb(110_80_255/0.14)_55%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-[9px] translate-x-3.5 translate-y-4 rounded-[30px] bg-linear-to-br from-accent/35 via-[#3b2fb8]/30 to-accent-2/35 blur-[1px] dark:from-[#2a3fd6]/45 dark:via-[#211a7a]/50 dark:to-[#4a2aa8]/45"
      />
      <div aria-hidden="true" className="cast-shadow absolute inset-x-8 -bottom-7 h-10" />

      <div className="relative h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0">
        <div
          aria-hidden="true"
          className="absolute -inset-[9px] rounded-[30px] bg-linear-to-br from-white/70 via-white/10 to-accent-2/30 p-px shadow-deep dark:from-white/40 dark:via-white/5 dark:to-accent-2/35"
        >
          <div className="h-full rounded-[29px] bg-surface-strong/70 backdrop-blur-md" />
        </div>
        <div className="relative h-full">
          <div className="relative h-full overflow-hidden rounded-[22px] bg-linear-to-b from-[#3d5bff] to-[#2a1f8a] ring-1 ring-black/10">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
              fill
              sizes="(min-width: 640px) 318px, 290px"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-[50%_75%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(150deg,rgb(255_255_255/0.14)_0%,transparent_30%,transparent_72%,rgb(20_20_60/0.18)_100%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,transparent_50%,rgb(30_25_120/0.42)_100%)] mix-blend-multiply dark:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08),inset_0_-40px_60px_-40px_rgb(10_12_40/0.35)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
