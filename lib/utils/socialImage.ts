/** Origin used for absolute OG/Twitter image URLs (matches existing asset URLs). */
const SITE_ORIGIN = "https://www.hansreinl.de";

/**
 * Turns a site-relative path or protocol URL into an absolute HTTPS URL for social previews.
 */
export function toAbsoluteOgImageUrl(
  url: string | undefined | null
): string | undefined {
  if (url == null || typeof url !== "string") return undefined;
  const trimmed = url.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith("/")) return `${SITE_ORIGIN}${trimmed}`;
  return `${SITE_ORIGIN}/${trimmed}`;
}

/**
 * Prefers `image`, then `headerImage`, for Twitter/OG large cards.
 */
export function resolveSocialPreviewImage(
  image?: string | null,
  headerImage?: string | null
): string | undefined {
  return toAbsoluteOgImageUrl(image) ?? toAbsoluteOgImageUrl(headerImage);
}
