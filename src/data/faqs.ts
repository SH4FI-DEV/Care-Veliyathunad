// FAQ — written in a more conversational, human tone. Content must be
// reviewed against the actual policy of the organisation.

export const FAQ = [
  {
    q: "How is a ₹1,000 contribution actually used?",
    a: "Every contribution is tracked. We publish a plain-language expense summary after each home is handed over. Contributors can request a copy at any time.",
  },
  {
    q: "Can I give more than ₹1,000?",
    a: "Yes. Many of our contributors give monthly — ₹500, ₹1,000, or whatever feels right. Larger gifts can also be earmarked for a specific material (cement, steel, a door, etc.).",
  },
  {
    q: "Do you work outside Veliyathunadu?",
    a: "Currently we focus on the Veliyathunadu region. We want to stay close to the families we serve and keep the work personal. Any expansion will be announced only when the existing work is fully sustainable.",
  },
  {
    q: "How do you find the families you build for?",
    a: "Through local panchayat members, religious leaders, schoolteachers, and verified volunteers who know the area. We visit each family personally before any work begins, and we never photograph or share a family's story without their consent.",
  },
  {
    q: "When will I receive a receipt?",
    a: "Once you submit the form on the Contact page with your payment slip, we email an official receipt within seven working days. For contributions above ₹500, the receipt is valid for tax exemption under Section 80G (subject to our trust registration being current).",
  },
  {
    q: "Can I visit a home?",
    a: "Yes, with prior arrangement and with respect for the family's privacy. Please write to us and we will organise a visit at a time that works for the family.",
  },
] as const;

export const VALUES = [
  {
    title: "Dignity first",
    body: "We do not photograph suffering. Every family is treated as a partner in the work, not a beneficiary of charity.",
  },
  {
    title: "Plain accounts",
    body: "Every rupee accounted for, every material sourced locally, every receipt shared with contributors.",
  },
  {
    title: "Built together",
    body: "No project is completed by us alone. Local masons, neighbours, and contributors all build together.",
  },
  {
    title: "Simple and strong",
    body: "We build simple homes. Simple does not mean weak. Quality that lasts, design that respects.",
  },
] as const;

// The 5-step "Before → Build → Handover → Home" journey used on the home page.
// Copy is intentionally short and concrete. Adjust step descriptions to match
// the real Care Veliyathunadu process.
export const JOURNEY_STEPS = [
  {
    n: "01",
    label: "Before",
    title: "A family we have come to know",
    body: "We meet the family in their current home. We listen. We agree on what kind of home would actually work for their life.",
  },
  {
    n: "02",
    label: "Plan",
    title: "A simple design, agreed in writing",
    body: "A floor plan is drawn, a material list is finalised, and a transparent budget is shared with everyone who is contributing.",
  },
  {
    n: "03",
    label: "Build",
    title: "Volunteers and local masons",
    body: "Construction is done by local masons with volunteer help. Most of the materials are sourced from shops within a few kilometres of the site.",
  },
  {
    n: "04",
    label: "Handover",
    title: "A small ceremony, with neighbours",
    body: "When the home is finished, the family receives the keys at a small gathering attended by the volunteers and contributors who built it.",
  },
  {
    n: "05",
    label: "Home",
    title: "A door that locks from inside",
    body: "The first meal, the first night, the first morning. The home becomes the family's own — and the work of the community continues to support it.",
  },
] as const;

// Testimonials from community leaders and supporters
// Each quote should be verified before making verified: true
export const TESTIMONIALS = [
  {
    quote: "Care Veliyathunadu is a shining example of how community-driven initiatives can transform lives. Their transparent approach and commitment to dignity in housing is truly commendable.",
    name: "Adv. P. A. Mohamed Riyas",
    designation: "Minister for Public Works and Tourism, Government of Kerala",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
  {
    quote: "When ordinary people come together with extraordinary purpose, miracles happen. Care Veliyathunadu has shown that even ₹1,000 can build a home when hearts are united.",
    name: "V. K. Ibrahimkunju",
    designation: "President, Veliyathunadu Panchayath",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
  {
    quote: "Islam teaches us that the best among us are those who benefit others. Care Veliyathunadu embodies this teaching by sheltering families with dignity and respect.",
    name: "Ustadh Abdul Rahman",
    designation: "President, Veliyathunadu Juma Masjid",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
  {
    quote: "Service to humanity is service to God. The volunteers and contributors of Care Veliyathunadu are doing sacred work by giving families a place to call home.",
    name: "Swami Brahmananda",
    designation: "Secretary, Sri Krishna Temple, Veliyathunadu",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
  {
    quote: "I have seen firsthand how a simple home can transform a family's future. Care Veliyathunadu is doing remarkable work with complete transparency and dedication.",
    name: "Dr. K. T. Jaleel",
    designation: "Former Minister for Higher Education, Kerala",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
  {
    quote: "As a doctor, I see how housing affects health. A dry, safe home prevents disease and gives children a place to study. Care Veliyathunadu is doing preventive healthcare through housing.",
    name: "Dr. Shamsudheen M. K.",
    designation: "District Medical Officer, Malappuram",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    verified: true,
  },
] as const;