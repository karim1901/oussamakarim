import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({ eyebrow, title, icon: Icon, id }) {
  return (
    <Reveal className="mb-7">
      <p className="eyebrow">
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
        {title}
      </h2>
    </Reveal>
  );
}
