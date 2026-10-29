import {
  Briefcase,
  CodeXml,
  FolderKanban,
  House,
  Layers,
  Lightbulb,
  Mail,
  Network,
  Settings2,
  User,
  Webhook,
  Workflow,
} from "lucide-react";
import {
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";

export const profile = {
  firstName: "Oussama",
  lastName: "Karim",
  initials: "OK",
  title: "Full-Stack Web & Mobile App Developer",
  badge: "Full-Stack Developer",
  intro:
    "I build modern, scalable and high-performance web and mobile applications with clean code, great user experiences and a passion for solving real problems.",
  about:
    "I'm a passionate Full-Stack Web & Mobile App Developer who enjoys turning ideas into real, working products. I focus on clean architecture, responsive interfaces and maintainable code, using modern technologies and best practices.",
  // Replace this file with your original high-resolution portrait (same path, any aspect close to 6:7).
  portrait: "/images/profile.jpeg",
  linkedin: "https://ma.linkedin.com/in/osama-karim-365237268",
  phone: "+212681109073",
  // Set to a file in /public (for example "/cv.pdf") to show the Download CV button.
  cvUrl: null,
  copyrightYear: 2026,
  tagline: "Building a better digital future.",
};

export const navItems = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export const heroHighlights = [
  { title: "Build", subtitle: "Ideas", icon: Lightbulb },
  { title: "Write", subtitle: "Code", icon: CodeXml },
  { title: "Create", subtitle: "Solutions", icon: Settings2 },
];

// `color` is the brand tint (null follows the text color); `scale` enlarges logos with lots of padding.
export const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#8892BF" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#2965F1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: null },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#3E8DC7", scale: 1.45 },
  { name: "GitHub", icon: SiGithub, color: null },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "REST APIs", icon: Webhook, color: "#8B7CFF" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#F2545B", scale: 1.5 },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "UML", icon: Workflow, color: "#A78BFA" },
  { name: "Merise", icon: Network, color: "#5B8CFF" },
];

// `images` are real screenshots in /public/projects, shown in order (the first one is the card cover).
// Add, remove or reorder entries freely; any count works. `width`/`height` are the real pixel size,
// used to show tall (mobile) and wide screenshots uncropped. With no images, the card and preview fall
// back to the labelled illustrative `mockup`. `features` is optional and only shown when filled in.
export const projects = [
  {
    name: "BuildTrack",
    category: "Construction Management",
    description: "Construction management platform.",
    liveUrl: "https://build-track-new.vercel.app/login",
    images: [
      { src: "/projects/buildtrack/03-desktop-dashboard.png", alt: "BuildTrack owner dashboard on desktop", width: 1909, height: 944 },
      { src: "/projects/buildtrack/01-mobile-dashboard.jpg", alt: "BuildTrack owner dashboard on mobile", width: 822, height: 1600 },
      { src: "/projects/buildtrack/02-mobile-more-menu.jpg", alt: "BuildTrack mobile navigation menu", width: 825, height: 1600 },
    ],
    mockup: null,
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    features: [],
  },
  {
    name: "CST Confirmation System",
    category: "Order Management",
    description: "Order confirmation and management system.",
    liveUrl: "https://cst-confirmationsystem.vercel.app",
    images: [
      { src: "/projects/cst-confirmation/03-desktop-dashboard.png", alt: "CST merchant dashboard on desktop", width: 1903, height: 939 },
      { src: "/projects/cst-confirmation/04-desktop-advertising-profit.png", alt: "CST Advertising & Profit page on desktop", width: 1903, height: 944 },
      { src: "/projects/cst-confirmation/01-mobile-dashboard.jpg", alt: "CST merchant dashboard on mobile", width: 773, height: 1600 },
      { src: "/projects/cst-confirmation/02-mobile-advertising-profit.jpg", alt: "CST Advertising & Profit page on mobile", width: 776, height: 1600 },

    ],
    mockup: null,
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    features: [],
  },
  {
    name: "ZenithOutlet",
    category: "E-commerce",
    description: "E-commerce store for selling products.",
    liveUrl: null,
    images: [
      
      { src: "/projects/zenithoutlet/01-store-page.jpg", alt: "ZenithOutlet store page", width: 1280, height: 604 },
      { src: "/projects/zenithoutlet/02-product-page.jpg", alt: "ZenithOutlet product page", width: 1280, height: 604 },
      { src: "/projects/zenithoutlet/03-dashboard.jpeg", alt: "ZenithOutlet product page", width: 1280, height: 604 },
    ],
    mockup: "shop",
    tech: [],
    features: [],
  },
  {
    name: "Enjoy Food",
    category: "Restaurant & Food Ordering",
    description: "Restaurant and food-ordering website.",
    liveUrl: null,
    images: [
      { src: "/projects/enjoy-food/04-welcome.jpg", alt: "Enjoy Food welcome screen", width: 816, height: 1600 },
      { src: "/projects/enjoy-food/03-menu.jpg", alt: "Enjoy Food menu screen", width: 816, height: 1600 },
      { src: "/projects/enjoy-food/02-product-detail.jpg", alt: "Enjoy Food product detail screen", width: 819, height: 1600 },
      { src: "/projects/enjoy-food/01-cart.jpg", alt: "Enjoy Food cart screen", width: 816, height: 1600 },
    ],
    mockup: "food",
    tech: [],
    features: [],
  },
];

// Editable timeline. Add `period` (e.g. "2024 - 2025") and optionally `organization`
// once confirmed; entries without a period are shown as focus areas.
export const experience = [
  {
    period: null,
    organization: null,
    title: "Web Development",
    summary: "Responsive web interfaces built with HTML5, CSS3, JavaScript and React.",
  },
  {
    period: null,
    organization: null,
    title: "Full-Stack Development",
    summary: "Applications spanning backend APIs, databases and modern frontends.",
  },
  {
    period: null,
    organization: null,
    title: "Mobile App Development",
    summary: "Mobile-first products and apps with modern frameworks.",
  },
];
