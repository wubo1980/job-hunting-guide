/** Represents a top-level content category and its hero presentation details. */
export type Category = {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  accent: string;
  icon: "cpu" | "refreshCcw" | "brain" | "briefcaseBusiness";
};

/** Represents a structured article section with optional tactical lists. */
export type ArticleSection = {
  title: string;
  content: string[];
  bullets?: string[];
  checklist?: string[];
};

/** Represents a cited source displayed at the end of an article. */
export type ArticleSource = {
  label: string;
  url: string;
  note?: string;
};

/** Represents the call to action block attached to an article. */
export type ArticleCta = {
  heading: string;
  body: string;
  label: string;
  href: string;
};

/** Represents a single editorial article used throughout the site. */
export type Article = {
  slug: string;
  category: Category["slug"];
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  thumbnail?: string;
  sections: ArticleSection[];
  cta: ArticleCta;
  sources: ArticleSource[];
};

/** Represents the copy used exclusively for the home hero section. */
export type HomeHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};
