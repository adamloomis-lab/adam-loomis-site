// ============================================================
// Adam Loomis Website — Asset URLs & Content Constants
// Design: "Midnight Forge" — Premium Dark Craftsmanship
// ============================================================

// Every asset here once pointed at Manus, either d2xsxph8kpxj0f.cloudfront.net
// or private-us-east-1.manuscdn.com. Both hosts now answer 403 to everything,
// which broke all fourteen images on the site at once. What could be recovered
// from the originals is self-hosted below. Never hotlink either host again.
export const ASSETS = {
  logo: "/images/adam-loomis-logo.png",
  headshot: "/images/adam-loomis.webp",
  bookPhoto: "/images/book/book-cover.jpg",
  speaking1: "/images/adam-loomis.webp",
  aboutSelfie: "/images/about-selfie.jpg",
  almMonogramDark: "/images/alm-monogram-dark.webp",
  simplyVisibleCover: "/images/book/simply-visible-cover.jpg",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Podcast", href: "#podcast" },
  { label: "Books", href: "/books" },
  { label: "My Thoughts", href: "/my-thoughts" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/adamloomis",
  tiktok: "https://www.tiktok.com/@adamloomis",
  linkedin: "https://www.linkedin.com/in/adam-loomis-13ba30266/",
  youtube: "https://www.youtube.com/@adamloomismarketing/videos",
  spotify: "https://open.spotify.com/show/3lddPdoornKR2Kt8h1Cm8U?si=818abbd899884d13",
} as const;

export const ENDORSEMENTS = [
  {
    quote: "This book delivers a refreshing take on brand building and messaging that resonates deeply with those looking to share their passion and business. This book takes a real approach into a genuine, human-to-human interaction.",
    name: "Jay Porter",
    title: "Head of People Operations, HRIS & Services at JCPenney",
  },
  {
    quote: "Adam's approach to marketing is unlike anything I've seen. He focuses on what actually works — real conversations, real connections, and real results. If you're serious about growing your brand, listen to this man.",
    name: "Sarah Bush",
    title: "CEO, SarahBush.co",
  },
] as const;

export const EXPERTISE_PILLARS = [
  {
    title: "Organic Marketing",
    description: "How brands grow through content, conversation, and trust instead of depending only on ads.",
    icon: "TrendingUp",
  },
  {
    title: "Conversational Marketing",
    description: "Strategies that build authentic engagement and real customer relationships online.",
    icon: "MessageCircle",
  },
  {
    title: "Personal Brand Authority",
    description: "How entrepreneurs and leaders can build influence through content and storytelling.",
    icon: "Crown",
  },
  {
    title: "Local Business Growth",
    description: "Simple marketing systems that help small businesses dominate locally through Google, content, and reputation.",
    icon: "MapPin",
  },
] as const;

export const SPEAKING_TOPICS = [
  "Organic marketing strategies that work today",
  "Building attention without relying on ads",
  "How entrepreneurs can build powerful personal brands",
  "Marketing systems that drive consistent business growth",
] as const;
