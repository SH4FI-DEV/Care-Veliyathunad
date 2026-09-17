// ============================================================================
// Project data — REAL Care Veliyathunadu projects
//
// ⚠️  CONTENT NOTES — Reviewer should verify with the client before launch:
//   - All family names, locations, completion dates, beneficiaries, and
//     contributor counts are PLACEHOLDER STRUCTURES modelled on realistic
//     Indian NGO project records. The client (Care Veliyathunadu) must
//     confirm/replace these with verified facts.
//   - Project images come from the central IMAGE_POOL in `images.ts` — only
//     verified-working Unsplash IDs that depict documentary subjects
//     (small homes, families, construction). Replace with real handover /
//     family photographs as soon as they are available.
//   - Stories are illustrative. Final versions should come from Care
//     Veliyathunadu's own records and the families' own words.
// ============================================================================

import { IMAGE_POOL, unsplash } from "./images";

export type ProjectStatus = "delivered" | "in-progress" | "planned";

export interface Project {
  slug: string;
  number: number;
  familyName: string;
  head: string;
  location: string;
  district: string;
  completedOn: string;
  status: ProjectStatus;
  cover: string;
  gallery: string[];
  short: string;
  story: string;
  beneficiaries: number;
  contributors: number;
}

// Build a project's gallery at the correct size for the detail page.
const galleryFor = (cover: string, b: string, h: string, v: string) => [
  unsplash(IMAGE_POOL[cover], 1200),
  unsplash(IMAGE_POOL[b], 1200),
  unsplash(IMAGE_POOL[h], 1200),
  unsplash(IMAGE_POOL[v], 1200),
];

export const PROJECTS: Project[] = [
  {
    slug: "home-1-amminikkutty",
    number: 1,
    familyName: "Amminikkutty Family",
    head: "Amminikkutty",
    location: "Veliyathunadu",
    district: "Malappuram",
    completedOn: "2022-08-15",
    status: "delivered",
    cover: unsplash(IMAGE_POOL.HOME_RURAL_01, 1200),
    gallery: galleryFor("HOME_RURAL_01", "HOME_SIMPLE_01", "HANDOVER_01", "VOLUNTEER_01"),
    short: "A widow and her two grandchildren received the very first home of the initiative.",
    story: "Amminikkutty had been living with her two grandchildren under a tarpaulin sheet for nearly five years. The new home — a two-room house with a small kitchen, attached toilet, and a verandah — was built with volunteer labour and material contributions from the surrounding neighbourhood. Today, the verandah is the place she and her grandchildren sit in the evenings. (Story text is illustrative — to be confirmed with the family.)",
    beneficiaries: 3,
    contributors: 47,
  },
  {
    slug: "home-2-rafeeq",
    number: 2,
    familyName: "Rafeeq & Sulfath",
    head: "Rafeeq",
    location: "Kondotty",
    district: "Malappuram",
    completedOn: "2023-01-22",
    status: "delivered",
    cover: unsplash(IMAGE_POOL.HOME_SIMPLE_03, 1200),
    gallery: galleryFor("HOME_SIMPLE_03", "BUILDING_01", "HANDOVER_04", "FAMILY_01"),
    short: "A daily-wage mason and his family moved into a finished home after years of saving.",
    story: "Rafeeq, a daily-wage mason, and his wife Sulfath, a tailor, had been saving for years for a roof that did not leak. The home built for them includes a small workspace for Sulfath's tailoring. The children chose the colour of the front door. (Story text illustrative — to be confirmed with the family.)",
    beneficiaries: 5,
    contributors: 62,
  },
  {
    slug: "home-3-fathima",
    number: 3,
    familyName: "Fathima Kunju",
    head: "Fathima Kunju",
    location: "Edavanna",
    district: "Malappuram",
    completedOn: "2023-09-10",
    status: "delivered",
    cover: unsplash(IMAGE_POOL.HOME_RURAL_02, 1200),
    gallery: galleryFor("HOME_RURAL_02", "HOME_RURAL_01", "FAMILY_06", "VOLUNTEER_02"),
    short: "A single mother and her two daughters received a home with privacy each of them had never had.",
    story: "Fathima Kunju, a single mother, had been sharing a single room with her elderly mother and two teenage daughters. The new home gives each girl a corner of her own, a proper kitchen for her mother, and a small courtyard. (Story text illustrative — to be confirmed with the family.)",
    beneficiaries: 4,
    contributors: 54,
  },
  {
    slug: "home-4-gopalan",
    number: 4,
    familyName: "Gopalan Nair",
    head: "Gopalan",
    location: "Wandoor",
    district: "Malappuram",
    completedOn: "2024-04-18",
    status: "delivered",
    cover: unsplash(IMAGE_POOL.HOME_SIMPLE_02, 1200),
    gallery: galleryFor("HOME_SIMPLE_02", "BUILDING_01", "HANDOVER_04", "CONSTRUCTION_04"),
    short: "A retired farmer received a single-floor home designed for his age and mobility.",
    story: "Gopalan Nair, a retired farmer, had been sleeping on the ground floor of his son's house because he could no longer climb stairs. The home we constructed has a single-floor layout with gentle ramps, a non-slip floor, and a small sit-out. (Story text illustrative — to be confirmed with the family.)",
    beneficiaries: 2,
    contributors: 71,
  },
  {
    slug: "home-5-nazeer",
    number: 5,
    familyName: "Nazeer & Ayisha",
    head: "Nazeer",
    location: "Veliyathunadu",
    district: "Malappuram",
    completedOn: "2025-02-05",
    status: "delivered",
    cover: unsplash(IMAGE_POOL.HOME_RURAL_04, 1200),
    gallery: galleryFor("HOME_RURAL_04", "HOME_SIMPLE_01", "HANDOVER_04", "HANDOVER_03"),
    short: "An auto-rickshaw driver and his family received a new home after ten years of saving.",
    story: "Nazeer, an auto-rickshaw driver, and his wife Ayisha had been saving for ten years. Their old home was a one-room tiled shed that flooded every monsoon. The new home has two bedrooms, an attached bathroom, and a small front yard. (Story text illustrative — to be confirmed with the family.)",
    beneficiaries: 4,
    contributors: 89,
  },
  {
    slug: "home-6-sreedharan",
    number: 6,
    familyName: "Sreedharan Family",
    head: "Sreedharan",
    location: "Areacode",
    district: "Malappuram",
    completedOn: "2025-12-01",
    status: "in-progress",
    cover: unsplash(IMAGE_POOL.HOME_RURAL_05, 1200),
    gallery: galleryFor("HOME_RURAL_05", "CONSTRUCTION_04", "CONSTRUCTION_01", "HOME_SIMPLE_05"),
    short: "Currently in progress. Construction started in early 2025.",
    story: "Sreedharan, a coconut-tappler, lost his previous home in heavy rains. The new home is being built with a raised foundation to weather future monsoons. (Story text illustrative — to be confirmed with the family.)",
    beneficiaries: 3,
    contributors: 0,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.status === "delivered").slice(-3);

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const TIMELINE = PROJECTS
  .filter((p) => p.status === "delivered")
  .map((p) => ({
    year: new Date(p.completedOn).getFullYear(),
    date: new Date(p.completedOn).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    }),
    title: `Home #${p.number} — ${p.familyName}`,
    location: p.location,
  }));

export const COUNTS = {
  homesDelivered: PROJECTS.filter((p) => p.status === "delivered").length,
  homesInProgress: PROJECTS.filter((p) => p.status === "in-progress").length,
  totalBeneficiaries: PROJECTS.reduce((acc, p) => acc + p.beneficiaries, 0),
  totalContributors: PROJECTS.reduce((acc, p) => acc + p.contributors, 0),
};

// ⚠️  Reviewer note: all numbers above (beneficiaries, contributors, locations)
// are placeholder values modelled for layout purposes. Care Veliyathunadu must
// confirm every figure with their own records before public launch.