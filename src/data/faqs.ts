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