// ============================================================================
// Gallery data
//
// ⚠️  Image review: only verified-working Unsplash IDs are used here. All
// entries depict documentary subjects: small homes, families, construction,
// handover ceremonies. Replace every entry with real Care Veliyathunadu
// photographs as they become available. Image alt text is illustrative.
// ============================================================================

import { IMAGE_POOL, unsplash } from "./images";

export interface GalleryItem {
  src: string;
  alt: string;
  category: "before" | "building" | "handover" | "people" | "volunteers";
  aspect: "tall" | "wide" | "square";
}

export const GALLERY: GalleryItem[] = [
  // BEFORE
  { src: unsplash(IMAGE_POOL.HOME_RURAL_03, 1000), alt: "Original site of a future home",        category: "before",     aspect: "wide" },
  { src: unsplash(IMAGE_POOL.HOME_RURAL_05, 1000), alt: "Clearing the plot",                     category: "before",     aspect: "tall" },

  // BUILDING
  { src: unsplash(IMAGE_POOL.CONSTRUCTION_01, 1000), alt: "Foundation work",                     category: "building",   aspect: "square" },
  { src: unsplash(IMAGE_POOL.HANDOVER_04, 1000),     alt: "Walls going up",                      category: "building",   aspect: "wide" },
  { src: unsplash(IMAGE_POOL.CONSTRUCTION_04, 1000), alt: "Volunteers mixing concrete",          category: "building",   aspect: "tall" },

  // HANDOVER
  { src: unsplash(IMAGE_POOL.HANDOVER_01, 1000), alt: "Handover ceremony — community present", category: "handover",   aspect: "wide" },
  { src: unsplash(IMAGE_POOL.HANDOVER_02, 1000), alt: "Family receiving the keys",             category: "handover",   aspect: "tall" },

  // PEOPLE
  { src: unsplash(IMAGE_POOL.FAMILY_06, 1000), alt: "Family at the doorway of the new home",  category: "people",     aspect: "square" },
  { src: unsplash(IMAGE_POOL.FAMILY_07, 1000), alt: "First meal in the new home",             category: "people",     aspect: "tall" },
  { src: unsplash(IMAGE_POOL.FAMILY_04, 1000), alt: "Family portrait in the new home",        category: "people",     aspect: "wide" },

  // VOLUNTEERS
  { src: unsplash(IMAGE_POOL.VOLUNTEER_01, 1000), alt: "Volunteers working together",          category: "volunteers", aspect: "wide" },
  { src: unsplash(IMAGE_POOL.VOLUNTEER_02, 1000), alt: "Community gathering",                  category: "volunteers", aspect: "square" },
  { src: unsplash(IMAGE_POOL.VOLUNTEER_03, 1000), alt: "Volunteers and family after handover",  category: "volunteers", aspect: "tall" },
];

export const GALLERY_CATEGORIES = [
  { id: "all",        label: "All" },
  { id: "before",     label: "Before" },
  { id: "building",   label: "Building" },
  { id: "handover",   label: "Handover" },
  { id: "people",     label: "People" },
  { id: "volunteers", label: "Volunteers" },
] as const;