/**
 * Display casing for post tags. Tags are stored in sentence case ("Ai", "Css"),
 * which reads wrong for acronyms and product names.
 */
const TAG_LABELS: Record<string, string> = {
  ai: "AI",
  css: "CSS",
  genai: "GenAI",
  "html5 boilerplate": "HTML5 Boilerplate",
  kpis: "KPIs",
  llm: "LLM",
  "n+one": "N+One",
  npm: "npm",
  openspec: "OpenSpec",
  sdlc: "SDLC",
  typescript: "TypeScript",
  "express.js": "Express.js",
  "spec-driven": "Spec-driven",
};

export const formatTag = (tag: string): string => {
  if (!tag) return tag;
  const key = tag.trim().toLowerCase();
  if (TAG_LABELS[key]) return TAG_LABELS[key];
  return key.charAt(0).toUpperCase() + key.slice(1);
};

/** URL segment for a tag, e.g. "Agentic engineering" → "agentic%20engineering". */
export const tagSlug = (tag: string): string =>
  encodeURIComponent(tag.toLowerCase());

/** Static tag archive (legacy `/blog?tag=` URLs are rewritten to this). */
export const tagHref = (tag: string): string => `/blog/tag/${tagSlug(tag)}`;
