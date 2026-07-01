/*
 * Postbuild prerender: per-route static HTML with title/meta/canonical/OG + JSON-LD,
 * plus sitemap.xml and robots.txt.
 *
 * Netlify serves these static files ahead of the SPA fallback rewrite, so crawlers
 * and AI search get real head metadata per route while the SPA hydrates as usual.
 */
import fs from "node:fs";
import path from "node:path";

const SITE = "https://adamloomis.online";
const DIST = path.resolve(import.meta.dirname, "../dist");

const BOOK_COVER = `${SITE}/images/book/simply-visible-cover.jpg`;
const PORTRAIT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663307809653/iSGdkRyQsxV59hys4MR3Ky/about-selfie_f0d8c856.jpg";

const PERSON = {
  "@type": "Person",
  "@id": `${SITE}/#adam`,
  name: "Adam Loomis",
  url: SITE,
  image: PORTRAIT,
  jobTitle: "Marketing Strategist, Speaker, and Author",
  worksFor: { "@id": `${SITE}/#alm` },
  sameAs: [
    "https://www.instagram.com/adamloomis",
    "https://www.tiktok.com/@adamloomis",
    "https://www.linkedin.com/in/adam-loomis-13ba30266/",
    "https://www.youtube.com/@adamloomismarketing/videos",
    "https://open.spotify.com/show/3lddPdoornKR2Kt8h1Cm8U",
    "https://www.amazon.com/dp/B0H4Q9PPPW",
  ],
};

const ORG = {
  "@type": "Organization",
  "@id": `${SITE}/#alm`,
  name: "Adam Loomis Marketing",
  url: "https://www.adamloomismarketing.com",
  founder: { "@id": `${SITE}/#adam` },
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Adam Loomis",
  publisher: { "@id": `${SITE}/#adam` },
};

const BOOK_SV = {
  "@type": "Book",
  "@id": `${SITE}/#book-simply-visible`,
  name: "Simply Visible: How Local Businesses Get Found, Trusted, and Chosen in the AI Era",
  author: { "@id": `${SITE}/#adam` },
  image: BOOK_COVER,
  url: `${SITE}/simply-visible`,
  workExample: [
    {
      "@type": "Book",
      bookFormat: "https://schema.org/Paperback",
      potentialAction: {
        "@type": "ReadAction",
        target: "https://www.amazon.com/dp/B0H4Q9PPPW",
      },
    },
    {
      "@type": "Book",
      bookFormat: "https://schema.org/EBook",
      potentialAction: {
        "@type": "ReadAction",
        target: "https://www.amazon.com/Simply-Visible-Adam-Loomis-ebook/dp/B0H3FLDD55",
      },
    },
  ],
};

const BOOK_CM = {
  "@type": "Book",
  "@id": `${SITE}/#book-conversational-marketing`,
  name: "Conversational Marketing: How to Effectively Engage Customers and Build Trust on Social Media",
  author: { "@id": `${SITE}/#adam` },
  url: `${SITE}/books`,
  workExample: [
    {
      "@type": "Book",
      bookFormat: "https://schema.org/EBook",
      potentialAction: {
        "@type": "ReadAction",
        target:
          "https://www.amazon.com/CONVERSATIONAL-MARKETING-EFFECTIVELY-ENGAGE-SOCIAL-ebook/dp/B0FZLK3L4H",
      },
    },
  ],
};

const PODCAST = {
  "@type": "PodcastSeries",
  "@id": `${SITE}/#mondays-with-adam`,
  name: "Mondays with Adam",
  url: "https://podcasts.apple.com/us/podcast/mondays-with-adam/id1737452204",
  author: { "@id": `${SITE}/#adam` },
};

const ROUTES = [
  {
    path: "/",
    title: "Adam Loomis — Marketing Strategist, Speaker & Author",
    description:
      "Adam Loomis is a marketing strategist, speaker, and author helping businesses grow through practical organic marketing. Home of Simply Visible, Mondays with Adam, and Adam Loomis Marketing.",
    image: PORTRAIT,
    schema: [PERSON, ORG, WEBSITE, PODCAST, BOOK_SV],
  },
  {
    path: "/books",
    title: "Books by Adam Loomis — Simply Visible & Conversational Marketing",
    description:
      "Two books, one playbook. Simply Visible is the technical side of getting found in the AI era. Conversational Marketing is the method for connecting and engaging. Read both to be effective online.",
    image: BOOK_COVER,
    schema: [PERSON, BOOK_SV, BOOK_CM],
  },
  {
    path: "/simply-visible",
    title: "Simply Visible — Book, Podcast & System | Adam Loomis",
    description:
      "Simply Visible: How Local Businesses Get Found, Trusted, and Chosen in the AI Era. The book is available on Amazon, the podcast is launching soon, and the system is live at simplyvisible.online.",
    image: BOOK_COVER,
    schema: [PERSON, BOOK_SV],
  },
  {
    path: "/simply-visible/preview",
    title: "Read a Free Preview — Simply Visible | Adam Loomis",
    description:
      "Read the Introduction and Chapter One of Simply Visible by Adam Loomis free online. How local businesses get found, trusted, and chosen in the AI era.",
    image: BOOK_COVER,
    schema: [PERSON, BOOK_SV],
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Adam Loomis",
    description: "How adamloomis.online collects, uses, and protects your information.",
    image: PORTRAIT,
    schema: [PERSON],
  },
  {
    path: "/terms",
    title: "Terms of Service | Adam Loomis",
    description: "The terms governing use of adamloomis.online, in plain English.",
    image: PORTRAIT,
    schema: [PERSON],
  },
  {
    path: "/accessibility",
    title: "Accessibility | Adam Loomis",
    description:
      "Our accessibility standard (WCAG 2.1 AA), what we do to meet it, and how to report a barrier.",
    image: PORTRAIT,
    schema: [PERSON],
  },
  {
    path: "/playbook-thank-you",
    title: "Your Playbook Is Ready | Adam Loomis",
    description: "Download the Organic Marketing Playbook.",
    image: PORTRAIT,
    schema: [PERSON],
    noindex: true,
  },
];

// ── My Thoughts: parse post metadata from src/lib/thoughts.ts so new posts
//    auto-prerender. Relies on the consistent authoring format in that file
//    (each POSTS entry lists slug/title/subtitle/category/date/isoDate/
//    readingTime/excerpt as plain double-quoted strings, in that order).
function parsePosts() {
  const src = fs.readFileSync(
    path.resolve(import.meta.dirname, "../src/lib/thoughts.ts"),
    "utf-8"
  );
  const grab = (field) => {
    const re = new RegExp(`\\b${field}:\\s*"([^"]*)"`, "g");
    const out = [];
    let m;
    while ((m = re.exec(src))) out.push(m[1]);
    return out;
  };
  const slugs = grab("slug");
  const titles = grab("title");
  const subtitles = grab("subtitle");
  const categories = grab("category");
  const dates = grab("date");
  const isoDates = grab("isoDate");
  const excerpts = grab("excerpt");
  return slugs.map((slug, i) => ({
    slug,
    title: titles[i],
    subtitle: subtitles[i],
    category: categories[i],
    date: dates[i],
    isoDate: isoDates[i],
    excerpt: excerpts[i],
  }));
}

const POSTS = parsePosts();

// My Thoughts index
ROUTES.push({
  path: "/my-thoughts",
  title: "My Thoughts — Adam Loomis",
  description:
    "My Thoughts by Adam Loomis. Notes on marketing, faith, and building a life worth living. Honest words meant to encourage you.",
  image: PORTRAIT,
  schema: [
    PERSON,
    {
      "@type": "Blog",
      "@id": `${SITE}/my-thoughts#blog`,
      name: "My Thoughts",
      url: `${SITE}/my-thoughts`,
      author: { "@id": `${SITE}/#adam` },
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE}/my-thoughts/${p.slug}`,
        datePublished: p.isoDate,
      })),
    },
  ],
});

// One route per post
for (const p of POSTS) {
  ROUTES.push({
    path: `/my-thoughts/${p.slug}`,
    title: `${p.title} — My Thoughts | Adam Loomis`,
    description: p.excerpt,
    image: PORTRAIT,
    schema: [
      PERSON,
      {
        "@type": "BlogPosting",
        "@id": `${SITE}/my-thoughts/${p.slug}#post`,
        headline: p.title,
        description: p.subtitle,
        articleSection: p.category,
        datePublished: p.isoDate,
        dateModified: p.isoDate,
        url: `${SITE}/my-thoughts/${p.slug}`,
        image: PORTRAIT,
        author: { "@id": `${SITE}/#adam` },
        publisher: { "@id": `${SITE}/#adam` },
        mainEntityOfPage: `${SITE}/my-thoughts/${p.slug}`,
      },
    ],
  });
}

function headFor(route) {
  const url = `${SITE}${route.path === "/" ? "" : route.path}`;
  const jsonLd = JSON.stringify(
    { "@context": "https://schema.org", "@graph": route.schema },
    null,
    0
  );
  return [
    `<title>${route.title}</title>`,
    `<meta name="description" content="${route.description}" />`,
    route.noindex ? `<meta name="robots" content="noindex" />` : "",
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Adam Loomis" />`,
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${route.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${route.title}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
    `<meta name="twitter:image" content="${route.image}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

// Strip the template's static <title> + description so we don't double up.
const stripped = template
  .replace(/<title>.*?<\/title>\s*/s, "")
  .replace(/<meta name="description"[^>]*\/>\s*/s, "");

for (const route of ROUTES) {
  const html = stripped.replace("</head>", `    ${headFor(route)}\n  </head>`);
  const outDir =
    route.path === "/" ? DIST : path.join(DIST, route.path.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${route.path}`);
}

// sitemap.xml (indexable routes only)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.filter((r) => !r.noindex)
  .map(
    (r) =>
      `  <url><loc>${SITE}${r.path === "/" ? "" : r.path}</loc></url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

// robots.txt
fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`
);

console.log("sitemap.xml + robots.txt written");
