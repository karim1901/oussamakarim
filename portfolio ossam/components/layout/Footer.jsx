import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-2 border-t border-line py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        <span className="font-display text-sm font-medium text-ink">
          {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
        </span>
        <span className="ml-4">&copy; {profile.copyrightYear}. All rights reserved.</span>
      </p>
      <p>{profile.tagline}</p>
    </footer>
  );
}
