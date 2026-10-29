"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Expand, EyeOff, X } from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import { getActivePreview, getServerActivePreview, setActivePreview, subscribePreview } from "./previewStore";

const OPEN_DELAY = 160;
const CLOSE_DELAY = 220;
const GAP = 14;
const MARGIN = 16;

const subscribeNothing = () => () => {};

// Places the floating panel beside the card (right, then left, then centred), clamped to the viewport.
function placePanel(anchor, panel) {
  const rect = anchor.getBoundingClientRect();
  const width = panel.offsetWidth;
  const height = panel.offsetHeight;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = rect.right + GAP;
  if (left + width > vw - MARGIN) left = rect.left - GAP - width;
  if (left < MARGIN) left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, MARGIN), vw - width - MARGIN);

  const top = Math.min(Math.max(rect.top, MARGIN), Math.max(MARGIN, vh - height - MARGIN));

  panel.style.left = `${Math.round(left)}px`;
  panel.style.top = `${Math.round(top)}px`;
}

function PanelContent({ project, onClose, closeRef }) {
  return (
    <>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-accent-ink">{project.category}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.name} preview`}
          className="focus-ring grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <ProjectGallery project={project} />

      <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>

      {project.features.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xs font-semibold tracking-wide text-ink uppercase">Main features</h4>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[13px] leading-5 text-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-ink" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        {project.tech.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
            {project.tech.map((tech) => (
              <li key={tech} className="chip px-2.5 py-0.5 text-[10px]">
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <span />
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4 py-2 text-xs"
          >
            Open Project
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">{project.name} (opens in a new tab)</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-strong px-4 py-2 text-xs font-medium text-subtle">
            <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
            Preview unavailable
          </span>
        )}
      </div>
    </>
  );
}

// Wraps a project card: hover (mouse) opens a floating panel, tap or keyboard opens a sheet.
export default function ProjectPreview({ project, children }) {
  const id = project.name;
  const activeId = useSyncExternalStore(subscribePreview, getActivePreview, getServerActivePreview);
  const mounted = useSyncExternalStore(subscribeNothing, () => true, () => false);
  const open = activeId === id;

  const [mode, setMode] = useState("popover");
  const anchorRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const timers = useRef({ open: null, close: null });
  const lastPointer = useRef("mouse");

  function clearTimers() {
    clearTimeout(timers.current.open);
    clearTimeout(timers.current.close);
  }

  function scheduleOpen() {
    clearTimers();
    if (getActivePreview() === id) return;
    timers.current.open = setTimeout(() => {
      setMode("popover");
      setActivePreview(id);
    }, OPEN_DELAY);
  }

  function scheduleClose() {
    clearTimers();
    timers.current.close = setTimeout(() => {
      if (getActivePreview() === id) setActivePreview(null);
    }, CLOSE_DELAY);
  }

  function openSheet() {
    clearTimers();
    setMode("sheet");
    setActivePreview(id);
  }

  function close() {
    clearTimers();
    if (getActivePreview() === id) setActivePreview(null);
    if (mode === "sheet") triggerRef.current?.focus({ preventScroll: true });
  }

  const isMouse = (event) => event.pointerType === "mouse";

  function handleCardClick(event) {
    if (lastPointer.current === "mouse") return;
    // Portal clicks bubble through the React tree; only react to taps on the card itself.
    if (!anchorRef.current?.contains(event.target)) return;
    if (event.target.closest("a, button")) return;
    openSheet();
  }

  useEffect(() => () => clearTimers(), []);

  useLayoutEffect(() => {
    if (!open || mode !== "popover" || !panelRef.current || !anchorRef.current) return;
    const update = () => placePanel(anchorRef.current, panelRef.current);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [open, mode]);

  useEffect(() => {
    if (!open) return;
    if (mode === "sheet") closeRef.current?.focus({ preventScroll: true });

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      // Keep keyboard focus inside the sheet while it is open.
      if (event.key === "Tab" && mode === "sheet" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll("a[href], button, [tabindex='0']");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // close() only reads refs and the current mode, which is already a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mode]);

  const panelId = `preview-${id.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div
      ref={anchorRef}
      className="relative h-full"
      onPointerDown={(event) => (lastPointer.current = event.pointerType)}
      onPointerEnter={(event) => isMouse(event) && scheduleOpen()}
      onPointerLeave={(event) => isMouse(event) && scheduleClose()}
      onClick={handleCardClick}
    >
      {children}

      <button
        ref={triggerRef}
        type="button"
        onClick={openSheet}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className="focus-ring sr-only z-10 focus:not-sr-only focus:absolute focus:top-5 focus:right-5 focus:inline-flex focus:items-center focus:gap-1.5 focus:rounded-full focus:bg-surface-strong focus:px-3 focus:py-1.5 focus:text-xs focus:font-medium focus:text-ink focus:shadow-deep"
      >
        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
        Preview {project.name}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && mode === "sheet" && (
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
                aria-hidden="true"
              />
            )}
            {open && (
              <motion.div
                key="panel"
                ref={panelRef}
                id={panelId}
                role="dialog"
                aria-modal={mode === "sheet" ? "true" : undefined}
                aria-label={`${project.name} preview`}
                onPointerEnter={(event) => isMouse(event) && mode === "popover" && clearTimers()}
                onPointerLeave={(event) => isMouse(event) && mode === "popover" && scheduleClose()}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className={
                  mode === "popover"
                    ? "fixed border border-line-strong bg-surface-strong bg-linear-to-b from-white/[0.04] to-transparent shadow-deep z-50 max-h-[calc(100vh-32px)] w-[min(560px,calc(100vw-32px))] overflow-y-auto rounded-[22px] p-4"
                    : "fixed border border-line-strong bg-surface-strong bg-linear-to-b from-white/[0.04] to-transparent shadow-deep inset-x-0 bottom-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-[22px] p-4 sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:w-[min(600px,calc(100vw-48px))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[22px] sm:p-5"
                }
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
                />
                <PanelContent project={project} onClose={close} closeRef={closeRef} />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
