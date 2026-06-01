/** Defines global site-level constants used by SEO and shared UI. */
export const siteConfig = {
  name: "Job Hunting Guide",
  url: "https://job-hunting-guide.vercel.app",
  description:
    "Practical guidance for laid-off tech workers, anxious graduates, and professionals navigating the AI-shaped job market in 2026.",
  discordUrl: "https://discord.gg/RdHhdgRhbc",
  navItems: [
    { href: "/ai-job-search", label: "AI Job Search" },
    { href: "/career-pivot", label: "Career Pivot" },
    { href: "/job-search-mindset", label: "Mindset" },
    { href: "/interview-prep", label: "Interview Prep" },
  ],
} as const;

export const sharedKeywords = [
  "2026 job market",
  "AI layoffs",
  "job search strategy",
  "career pivot",
  "interview preparation",
  "ghost jobs",
  "ATS resume optimization",
];
