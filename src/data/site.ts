// Site configuration
//
// ⚠️  Bank account, IFSC, UPI, phone, email and social URLs are
// PLACEHOLDERS. The client (Care Veliyathunadu) must supply the real
// values before launch. Wire them in here and the entire site updates.

export const SITE = {
  name: "Care Veliyathunadu",
  // Primary editorial headline — used in nav, footer, etc.
  shortName: "Care Veliyathunadu",
  // The brand line under the logo. Keep as a quiet brand identifier.
  brandLine: "Home for ₹1,000",
  // Used as page subtitle, OG description, etc.
  shortDesc:
    "A community initiative in Veliyathunadu, Kerala, that builds simple, dignified homes for families in need — with contributions of ₹1,000 from anyone who wishes to be part of the work.",
  url: "https://careveliyathunadu.org",
  email: "care@veliyathunadu.org",
  phone: "+91 94470 00000",
  whatsapp: "919447000000",
  address: "Veliyathunadu, Malappuram, Kerala",
  foundedYear: 2021,
  social: {
    facebook:   "https://facebook.com/careveliyathunadu",
    instagram:  "https://instagram.com/careveliyathunadu",
    youtube:    "https://youtube.com/@careveliyathunadu",
    whatsapp:   "https://wa.me/919447000000",
  },
  // Placeholder bank details — verify with client before launch.
  bank: {
    accountName:   "Care Veliyathunadu Trust",
    accountNumber: "1234567890",
    ifsc:          "SBIN0001234",
    bankName:      "State Bank of India",
    branch:        "Veliyathunadu",
    upi:           "care@upi",
  },
} as const;

export const NAV = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/team",    label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

// Numbers used in the Impact section. ALL must be verified with the client.
export const IMPACT = {
  homesDelivered:    5,
  homesInProgress:   1,
  livesChanged:      18,    // sum of beneficiaries across delivered homes
  startingAmount:    "₹1,000",
  supporters:        323,   // sum of contributors across delivered homes
  // 80G / 12A / PAN status — to be confirmed.
  is80GRegistered:   true,  // confirm with client
  registrationNote:  "Trust registration and 80G / 12A certificates available on request.",
} as const;