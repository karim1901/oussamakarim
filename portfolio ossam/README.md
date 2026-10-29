# Oussama Karim — Portfolio

Next.js (App Router, JavaScript/JSX) · Tailwind CSS v4 · Framer Motion · Lucide React.

```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Editing content

All copy lives in `data/site.js`:

- `profile` — name, intro, LinkedIn, `cvUrl` (set to e.g. `"/cv.pdf"` to show a Download CV button).
- `skills`, `projects`, `experience` — add a `period` / `organization` to timeline entries once confirmed.

## Images

- `public/images/profile.jpeg` — portrait. Currently a low-resolution crop from the design reference;
  replace it with your original photo (same filename, roughly 6:7).
- `public/projects/<project>/` — real project screenshots, one folder per project.
  A project with no screenshots shows a labelled illustrative mockup instead.
- Each project has an `images` array in `data/site.js` (`{ src, alt }` entries, any count). The first
  image is the card cover; all of them appear in the hover / tap preview gallery. `features` is optional.
