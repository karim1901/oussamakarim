"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/site";
import { LogoWordmark } from "@/components/ui/Logo";
import { ThemeSegmented } from "@/components/theme/ThemeToggle";
import useActiveSection from "./useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function Topbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <LogoWordmark />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-3">
            {navItems.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`focus-ring relative block rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                      isActive ? "text-accent-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-[15px] h-[2px] rounded-full bg-linear-to-r from-accent to-accent-2 shadow-[0_0_10px_var(--glow)] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSegmented />
          <button
            type="button"
            className="focus-ring glass grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[80px] rounded-2xl border border-line-strong bg-surface-strong p-2 shadow-deep md:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={`focus-ring flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === id ? "bg-accent/15 text-accent-ink" : "text-ink hover:bg-surface-hover"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
