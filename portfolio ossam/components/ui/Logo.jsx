import { useId } from "react";
import { profile } from "@/data/site";

export function LogoMark({ className = "h-9 w-9" }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f7bff" />
          <stop offset="1" stopColor="#8a4dff" />
        </linearGradient>
      </defs>
      <path
        d="M20 9.5a14.5 14.5 0 1 0 0 29"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M24 9.5v29M24 24l13-14.5M27.5 21l10 17.5"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWordmark() {
  return (
    <a href="#home" className="focus-ring flex items-center gap-3 rounded-lg" aria-label={`${profile.firstName} ${profile.lastName}, back to top`}>
      <LogoMark />
      <span className="font-display text-[15px] font-medium tracking-wide text-ink">
        {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
      </span>
    </a>
  );
}
