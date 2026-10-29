"use client";

import { navItems } from "@/data/site";
import { LogoMark } from "@/components/ui/Logo";
import { ThemeSwitch } from "@/components/theme/ThemeToggle";
import useActiveSection from "./useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-24 flex-col items-center border-r border-line bg-surface/40 py-6 backdrop-blur-xl lg:flex">
      <a href="#home" className="focus-ring relative rounded-xl" aria-label="Back to top">
        <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-xl" />
        <LogoMark className="h-10 w-10" />
      </a>

      <nav aria-label="Sections" className="mt-12 flex w-full flex-col gap-2">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className={`focus-ring group relative mx-2 flex flex-col items-center gap-1.5 rounded-xl py-3 text-[11px] font-medium transition-colors ${
                isActive ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-2 bottom-2 -left-2 w-[3px] rounded-r-full bg-linear-to-b from-accent to-accent-2 shadow-[0_0_12px_var(--glow)] transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-br from-accent/25 to-accent-2/20 text-accent-ink shadow-[0_0_22px_-8px_var(--glow)]"
                    : "group-hover:bg-surface-hover"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              {label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto">
        <ThemeSwitch />
      </div>
    </aside>
  );
}
