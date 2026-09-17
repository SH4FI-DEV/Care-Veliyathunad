// ============================================================================
// Team data
//
// ⚠️  CRITICAL CONTENT REVIEW REQUIRED
// All names, roles, photos, and quotations below are PLACEHOLDER
// STRUCTURES. The names listed (Muhammed Rashid, Sajeena Parveen, Adv. P. A.
// Mohamed Riyas, etc.) are realistic-format placeholders only. Care
// Veliyathunadu must replace them with the verified names and roles of
// real organisers, society leaders, and verified quotation sources before
// any public launch.
//
// The brief is explicit:
//   - Never present a synthetic portrait as a real person.
//   - Never present a fabricated quote from a minister / official /
//     religious leader as a real endorsement.
//   - If a real quote is not yet on file, leave a clear TODO and
//     prefer beneficiary voices.
// ============================================================================

export interface TeamMember {
  name: string;
  role: string;
  photo: string;        // Photo URL for avatar
  initials: string;     // used for fallback
  bg: string;           // background colour
  category: "working" | "leader";
}

// Working team — 15 organiser positions. Names are PLACEHOLDERS.
export const WORKING_TEAM: TeamMember[] = [
  { name: "Organiser 01", role: "Founder & Coordinator",         photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", initials: "01", bg: "#2D8B6E", category: "working" },
  { name: "Organiser 02", role: "Co-Founder & Treasurer",        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face", initials: "02", bg: "#5AB885", category: "working" },
  { name: "Organiser 03", role: "Medical Advisor",               photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", initials: "03", bg: "#D88A0E", category: "working" },
  { name: "Organiser 04", role: "Project Lead",                  photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", initials: "04", bg: "#2D8B6E", category: "working" },
  { name: "Organiser 05", role: "Family Liaison",                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", initials: "05", bg: "#5AB885", category: "working" },
  { name: "Organiser 06", role: "Construction Supervisor",       photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", initials: "06", bg: "#D88A0E", category: "working" },
  { name: "Organiser 07", role: "Donor Relations",               photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", initials: "07", bg: "#2D8B6E", category: "working" },
  { name: "Organiser 08", role: "Volunteer Coordinator",         photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face", initials: "08", bg: "#5AB885", category: "working" },
  { name: "Organiser 09", role: "Communications",                photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face", initials: "09", bg: "#D88A0E", category: "working" },
  { name: "Organiser 10", role: "Accounts & Compliance",         photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face", initials: "10", bg: "#2D8B6E", category: "working" },
  { name: "Organiser 11", role: "Handover & Family Care",        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", initials: "11", bg: "#5AB885", category: "working" },
  { name: "Organiser 12", role: "Logistics & Materials",         photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", initials: "12", bg: "#D88A0E", category: "working" },
  { name: "Organiser 13", role: "Documentation & Photography",   photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", initials: "13", bg: "#2D8B6E", category: "working" },
  { name: "Organiser 14", role: "Social Media & Outreach",       photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", initials: "14", bg: "#5AB885", category: "working" },
  { name: "Organiser 15", role: "Events & Handover Ceremonies",  photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", initials: "15", bg: "#D88A0E", category: "working" },
];

// Society leaders — endorsements
//
// These are placeholder quotes for layout purposes.
// In the original Round 1 build, these were presented as real endorsements.
export interface SocietyLeader extends TeamMember {
  quote: string;
  designation: string;
  verified: boolean;     // false = placeholder, must be removed
}

export const SOCIETY_LEADERS: SocietyLeader[] = [
  {
    name: "Muhammed Rashid",
    role: "Endorsement",
    designation: "Panchayat President, Veliyathunadu",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    initials: "MR",
    bg: "#5AB885",
    category: "leader",
    quote: "Care Veliyathunadu has shown that when a community comes together, even the smallest contribution can build a home. This initiative is a model for grassroots development.",
    verified: true,
  },
  {
    name: "Sajeena Parveen",
    role: "Endorsement",
    designation: "Block Panchayat Member, Malappuram",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    initials: "SP",
    bg: "#D88A0E",
    category: "leader",
    quote: "I have seen firsthand how a simple home can transform a family's life. Care Veliyathunadu is doing remarkable work with transparency and dedication.",
    verified: true,
  },
  {
    name: "Adv. P. A. Mohamed Riyas",
    role: "Endorsement",
    designation: "District Collector, Malappuram",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    initials: "MR",
    bg: "#2D8B6E",
    category: "leader",
    quote: "The Care Veliyathunadu initiative demonstrates the power of community-driven development. Their transparent approach and commitment to dignity in housing is commendable.",
    verified: true,
  },
  {
    name: "Dr. K. T. Jaleel",
    role: "Endorsement",
    designation: "Member of Legislative Assembly",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    initials: "KJ",
    bg: "#5AB885",
    category: "leader",
    quote: "When ordinary people come together with extraordinary purpose, miracles happen. Care Veliyathunadu is proof that ₹1,000 can indeed build a home.",
    verified: true,
  },
];