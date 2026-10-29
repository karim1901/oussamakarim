"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import ProjectMockup from "./ProjectMockup";
import ScreenshotImage, { frameLabel } from "./ScreenshotImage";

export default function ProjectGallery({ project }) {
  const images = project.images;
  const count = images.length;
  const [index, setIndex] = useState(0);

  const go = (step) => setIndex((current) => (current + step + count) % count);

  function handleKeyDown(event) {
    if (count < 2) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-strong shadow-card">
        <div className="flex items-center gap-1.5 border-b border-line bg-bg-soft/80 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate rounded-md bg-muted/10 px-2 py-0.5 text-[10px] text-subtle">
            {frameLabel(project)}
          </span>
          {count > 1 && (
            <span className="ml-auto text-[10px] font-medium tabular-nums text-muted" aria-live="polite">
              {index + 1} / {count}
            </span>
          )}
        </div>

        <div
          className="group/gallery relative aspect-[16/10] overflow-hidden"
          role={count > 1 ? "region" : undefined}
          aria-roledescription={count > 1 ? "carousel" : undefined}
          aria-label={count > 1 ? `${project.name} screenshots` : undefined}
          tabIndex={count > 1 ? 0 : undefined}
          onKeyDown={handleKeyDown}
        >
          {count > 0 ? (
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={images[index].src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ScreenshotImage image={images[index]} sizes="(min-width: 640px) 560px, 100vw" />
              </motion.div>
            </AnimatePresence>
          ) : project.mockup ? (
            <>
              <ProjectMockup variant={project.mockup} />
              <span className="absolute top-2.5 left-2.5 rounded-full bg-black/65 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                Illustrative preview
              </span>
            </>
          ) : (
            <div className="grid h-full place-items-center bg-bg-soft text-subtle">
              <span className="flex flex-col items-center gap-2 text-xs">
                <ImageOff className="h-6 w-6" aria-hidden="true" />
                Screenshots coming soon
              </span>
            </div>
          )}

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
                className="focus-ring glass absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink opacity-80 transition-opacity hover:opacity-100 group-hover/gallery:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next screenshot"
                className="focus-ring glass absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink opacity-80 transition-opacity hover:opacity-100 group-hover/gallery:opacity-100"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>

      {count > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Choose screenshot">
          {images.map((image, i) => (
            <li key={image.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                className={`focus-ring relative block h-11 w-[70px] overflow-hidden rounded-lg border transition-all duration-300 ${
                  i === index ? "border-accent opacity-100 shadow-[0_0_0_1px_var(--accent)]" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="70px" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
