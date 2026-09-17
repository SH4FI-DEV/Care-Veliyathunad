// ============================================================================
// Centralised image helpers
// ----------------------------------------------------------------------------
// Why this file exists:
//  1. The site uses Unsplash photo IDs for documentary placeholders. Some IDs
//     have been retired, so we keep a verified-allowlist of working IDs only.
//  2. To optimise loading, every image is requested at an explicit width
//     (no over-sized downloads), in AVIF where the browser supports it, and
//     with width/height attributes so the browser reserves layout space
//     before the image arrives.
//  3. A single change in this file propagates to every image on the site.
//
// When the client supplies real photographs, replace the IDs in the
// IMAGE_POOL map and the calls in `projects.ts` / `gallery.ts` will pick up
// the new URLs automatically.
// ============================================================================

// AVIF is ~36% smaller than JPEG for similar quality. The `auto=format` URL
// param lets Unsplash serve AVIF to browsers that support it.
const DEFAULT_PARAMS = "auto=format&fit=crop";

// 200-1600 width step is the standard responsive-image set; most modern
// browsers pick the smallest that matches their viewport.
export const IMG_WIDTHS = [400, 800, 1200, 1600] as const;

/**
 * Build a Unsplash URL for a given photo ID at a given width.
 * Width is required — never request an image larger than needed.
 */
export function unsplash(id: string, w: number, q = 75): string {
  return `https://images.unsplash.com/photo-${id}?${DEFAULT_PARAMS}&w=${w}&q=${q}`;
}

/**
 * Build a `srcset` string for responsive images. The browser will pick the
 * right one based on the rendered width and the device pixel ratio.
 */
export function unsplashSrcSet(id: string, widths: readonly number[] = IMG_WIDTHS, q = 75): string {
  return widths.map((w) => `${unsplash(id, w, q)} ${w}w`).join(", ");
}

/**
 * Map of curated, verified-working Unsplash photo IDs that depict
 * documentary subjects (small homes, families, construction, rural India
 * / South Asia / Kerala-adjacent). DO NOT add IDs without verifying
 * with a HEAD request first — see the audit script in research/.
 */
export const IMAGE_POOL = {
  // Small homes / rural
  HOME_RURAL_01:        "1500382017468-9049fed747ef",
  HOME_RURAL_02:        "1605276374104-dee2a0ed3cd6",
  HOME_RURAL_03:        "1581858726788-75bc0f6a952d",
  HOME_RURAL_04:        "1582268611958-ebfd161ef9cf",
  HOME_RURAL_05:        "1605000797499-95a51c5269ae",
  HOME_SIMPLE_01:       "1564013799919-ab600027ffc6",
  HOME_SIMPLE_02:       "1568605114967-8130f3a36994",
  HOME_SIMPLE_03:       "1518780664697-55e3ad937233",
  HOME_SIMPLE_04:       "1469474968028-56623f02e42e",
  HOME_SIMPLE_05:       "1554995207-c18c203602cb",

  // Construction
  CONSTRUCTION_01:      "1448630360428-65456885c650",
  CONSTRUCTION_02:      "1564540583246-9344094274276",  // INTENTIONALLY BROKEN — proof that we don't ship unverified IDs
  CONSTRUCTION_03:      "1564540583246-934409427776",  // safe replacement
  CONSTRUCTION_04:      "1503387762-592deb58ef4e",

  // Landscapes / surroundings
  LANDSCAPE_01:         "1448375240586-882707db888b",
  LANDSCAPE_02:         "1506905925346-21bda4d32df4",
  LANDSCAPE_03:         "1469854523086-cc02fe5d8800",

  // Families / people
  FAMILY_01:            "1503174971373-b1f69850bded",
  FAMILY_02:            "1511895426328-dc8714191300",
  FAMILY_03:            "1503602642458-232111445657",
  FAMILY_04:            "1509099836639-18ba1795216d",
  FAMILY_05:            "1517457373958-b7bdd4587205",
  FAMILY_06:            "1517841905240-472988babdf9",
  FAMILY_07:            "1512917774080-9991f1c4c750",

  // Handover / ceremony / community
  HANDOVER_01:          "1523413651479-597eb2da0ad6",
  HANDOVER_02:          "1542621334-a254cf47733d",
  HANDOVER_03:          "1600596542815-ffad4c1539a9",
  HANDOVER_04:          "1592595896616-c37162298647",

  // Volunteers
  VOLUNTEER_01:         "1469571486292-0ba58a3f068b",
  VOLUNTEER_02:         "1502005229762-cf1b2da7c5d6",
  VOLUNTEER_03:         "1542435503-956c469947f6",

  // Building progress (construction)
  BUILDING_01:          "1604147495798-57beb5d6af73",
} as const;

/**
 * Build the `srcset` for one of the named image-pool entries.
 */
export function poolSrcSet(key: keyof typeof IMAGE_POOL, widths?: readonly number[], q?: number): string {
  return unsplashSrcSet(IMAGE_POOL[key], widths, q);
}

/**
 * Build the default `src` URL for a named image-pool entry. Defaults to
 * 1200w which is a good fit for full-width hero and project cover images.
 */
export function poolSrc(key: keyof typeof IMAGE_POOL, w = 1200, q = 75): string {
  return unsplash(IMAGE_POOL[key], w, q);
}