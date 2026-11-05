// Single source of truth for all portfolio content.
// Edit this file to change any text on the site.

export interface Link {
  label: string;
  url: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string[];
  pipeline: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  demo?: string;
  status?: string;
}

export interface Award {
  url?: string; // optional link rendered on the event name
  result: string;
  event: string;
  year: number;
}

export interface Photo {
  src: string; // path relative to /public
  alt: string;
  caption?: string;
  link?: Link; // optional "read more" link rendered after the caption
}

export const profile = {
  name: "William Martínez Acosta",
  title: "Algorithm & AI Engineer · LLM & Agentic Systems",
  location: "Barcelona, Spain",
  email: "williamma961214@gmail.com",
  phone: "+34 624 771 195",
  cvUrl: "/cv.pdf",
  photo: "/images/profile.jpg",
  heroBackground: "/images/hero-bg.jpg",
  heroBackgroundCaption: "ICPC World Finals, Moscow 2021, during the contest",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/william-martinez-acosta" },
    { label: "GitHub", url: "https://github.com/WillMA96" },
  ] as Link[],
  summary: [
    "Software engineer with a strong foundation in algorithms and competitive programming, currently building production LLM and agentic systems for document processing.",
    "My work spans the full lifecycle of AI products: dataset preparation, experimentation, pipeline and agent development, evaluation, and operation in production.",
    "I enjoy the intersection of algorithmic thinking and practical AI: turning ambiguous problems into reliable, measurable solutions and owning them end-to-end.",
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "LLM pipeline design",
      "AI agents & tool calling",
      "Multi-step orchestration",
      "Evaluation frameworks",
      "Prompt engineering",
      "Structured outputs & schema validation",
      "Multi-provider model integration",
      "OCR post-processing",
      "Document intelligence",
    ],
  },
  { category: "Languages", items: ["Python", "C", "C++", "Java", "Bash", "JavaScript", "HTML/CSS"] },
  { category: "Databases & Storage", items: ["MongoDB", "SQL Server", "S3"] },
  { category: "Backend & APIs", items: ["REST API design", "ASP.NET Core", "Node"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure DevOps"] },
];

export const projects: Project[] = [
  {
    name: "Document Parser",
    tagline:
      "Turns purchase documents (invoices, receipts and delivery notes, as native PDFs, scans or photos) into structured, validated, traceable data.",
    description: [
      "Getting an LLM to return JSON from an invoice is the easy part. This project is about the harder one: knowing whether that JSON is right without checking every document by hand, and being able to change the prompt or the model without silently making things worse.",
      "The approach: a deterministic pipeline by default, with an agent only at the edge. The repair agent fires only when an objective validator says something is wrong. Determinism comes first because it is what makes measurement possible.",
    ],
    pipeline:
      "PDF or photo → orientation → preprocess → extract (Gemini Flash) → validate → auto-accepted | repair agent (Gemini Pro) → repaired | needs review",
    highlights: [
      "50 / 50 sample documents pass every validator; 8 / 12 on unseen formats and sectors, with the agent repairing 5 of them.",
      "95% of injected faults detected by the validators.",
      "50 / 50 four-way page orientation detection on a separate labelled corpus.",
      "Median latency of 8.6 s per document; ~4.9k input tokens per document.",
      "Eval suite to change prompts or models without regressions; Langfuse traces with per-generation cost.",
      "FastAPI viewer to inspect runs, documents and validator results.",
    ],
    stack: ["Python 3.12", "FastAPI", "Pydantic v2", "PyMuPDF", "google-genai (Gemini)", "Langfuse", "rapidfuzz", "pytest"],
    repo: "https://github.com/WillMA96/document_parser",
    status: "Work in progress",
  },
];

export const awardsIntro =
  "The International Collegiate Programming Contest (ICPC) is the world's largest and most prestigious programming competition, with over 50,000 participants annually from 3,000+ universities across 111 countries. Reaching the World Finals places contestants among the top 0.1% globally.";

export const icpcAwards: Award[] = [
  { result: "Honorable Mention", event: "ICPC World Finals, Moscow, Russia", year: 2021 },
  { result: "2nd Place", event: "ICPC Caribbean Finals", year: 2020 },
  { result: "Honorable Mention", event: "ICPC World Finals, Porto, Portugal", year: 2019 },
  { result: "2nd Place", event: "ICPC Caribbean Finals", year: 2018 },
  { result: "4th Place", event: "ICPC Caribbean Finals", year: 2017 },
  { result: "5th Place", event: "ICPC Caribbean Finals", year: 2016 },
];

export const olympiadAwards: Award[] = [
  {
    result: "Bronze Medal",
    event: "Ibero-American Informatics Competition, Portugal",
    year: 2013,
    url: "https://www.iberoinformatica.org/contestant_details/7944",
  },
  { result: "Gold Medal", event: "Cuban Competition in Informatics", year: 2013 },
  { result: "Silver Medal", event: "Cuban Competition in Informatics", year: 2012 },
];

export const icpcProfileUrl = "https://icpc.global/ICPCID/6SAUHN5TJQJD";

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Proficient (B2/C1)" },
];

export const referenceNotebook = {
  title: "UO-SAM Limitless team reference",
  file: "/limitless-reference.pdf",
  summary:
    "A 24-page notebook of reference algorithms that my ICPC team implemented ourselves and used during contests to solve recurring problem types. Written in C++, the language we competed in.",
  categories: [
    { name: "Data structures", items: ["2D RMQ", "Persistent Treap", "Red-Black Tree", "Rectangle Union O(n log n)"] },
    { name: "Dynamic programming", items: ["Convex Hull Optimization", "Divide & Conquer to Knuth optimization"] },
    { name: "Geometry", items: ["Delaunay Triangulation", "Pick's Theorem", "Geometry primitives"] },
    {
      name: "Graphs",
      items: [
        "Dinic", "Min-Cost Max-Flow", "Flow with lower bounds", "Hopcroft–Karp", "Hungarian", "Stable Marriage",
        "Dominator Tree", "DSU on Tree", "Mo's Algorithm on Tree", "Minimum Arborescences",
        "Articulation Points & Bridges", "Steiner Tree", "Stoer–Wagner",
      ],
    },
    {
      name: "Number theory",
      items: [
        "Extended GCD", "Modular inverse", "Modular equations", "Linear congruences", "Möbius", "Euler phi",
        "Tonelli–Shanks", "Baby-step giant-step", "Primitive roots", "Pollard rho", "FFT / Fast Modulo Transform",
        "Polynomial inverse", "Linear recurrence solver", "Gauss elimination", "Simplex method", "Partitions",
        "Josephus", "Floyd cycle finding", "Simpson rule", "Square-free",
      ],
    },
    {
      name: "Strings",
      items: [
        "Aho-Corasick", "Suffix array", "Suffix automaton", "Palindrome tree", "Manacher", "Lyndon decomposition",
        "Tandems", "Z-function & prefix function",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------------

const photo = {
  icpc2015: {
    src: "/images/icpc-2015-caribbean-regional.jpg",
    alt: "Team Limitless at the ICPC Caribbean regional 2015",
    caption: "Where it started: my first Caribbean regional, 2015, first year of university.",
  },
  icpc2016: {
    src: "/images/icpc-2016-caribbean-regional.jpg",
    alt: "Team Limitless at the ICPC Caribbean regional 2016",
    caption: "My second Caribbean regional, 2016.",
  },
  icpc2019Team: {
    src: "/images/icpc-2019-porto-team.jpg",
    alt: "The four members of team Limitless with arms crossed in front of the ICPC World Finals Porto sponsor wall",
    caption: "Team Limitless at the ICPC World Finals, Porto 2019. They always ask us to strike a strange pose in these photos, haha.",
  },
  icpc2019Tourist: {
    src: "/images/icpc-2019-with-tourist.jpg",
    alt: "William with Gennady Korotkevich at the ICPC World Finals 2019",
    caption:
      'With Gennady "tourist" Korotkevich at the 2019 World Finals in Porto. Widely regarded as the greatest competitive programmer of all time.',
    link: { label: "Who is tourist?", url: "https://en.wikipedia.org/wiki/Gennady_Korotkevich" },
  },
  icpc2021Team: {
    src: "/images/icpc-2021-moscow-team.jpg",
    alt: "The four members of team Limitless in front of the ICPC World Finals Moscow sponsor wall",
    caption: "Team Limitless at the ICPC World Finals, Moscow 2021.",
  },
  icpc2021Contest: {
    src: "/images/icpc-2021-moscow-contest.jpg",
    alt: "Contest floor with the scoreboard at the ICPC World Finals 2021",
    caption: "Contest day in Moscow 2021 (COVID-19 era): masks, plexiglass dividers and the scoreboard in sight.",
  },
  invofoxOffice: {
    src: "/images/invofox-office.jpg",
    alt: "William in front of the Invofox logo at the office",
    caption: "At the Invofox office.",
  },
  campNou: {
    src: "/images/camp-nou.jpg",
    alt: "William holding a Barça scarf in the stands at Camp Nou",
    caption: "Dream unlocked: first time at Camp Nou watching Barça.",
  },
} satisfies Record<string, Photo>;

// ---------------------------------------------------------------------------
// Timeline milestones (shown on the Profile view, one dot per milestone)
// ---------------------------------------------------------------------------

export interface AwardGroup {
  title: string;
  intro?: string;
  /** Part of the intro text that becomes a link. */
  introLink?: { text: string; url: string };
  items: Award[];
}

export interface Milestone {
  id: string;
  /** Short label under the dot. */
  year: string;
  label: string;
  title: string;
  org?: string;
  period: string;
  location?: string;
  blurb?: string;
  bullets?: string[];
  awardGroups?: AwardGroup[];
  showNotebook?: boolean;
  links?: Link[];
  photos?: Photo[];
  current?: boolean;
}

export const milestones: Milestone[] = [
  {
    id: "preuniversity",
    year: "2012–15",
    label: "Pre-university",
    title: "Pre-university education",
    org: "Cuqui Bosch",
    location: "Santiago de Cuba, Cuba",
    period: "Until 2015",
    blurb: "Where competitive programming started: national and international informatics olympiads.",
    awardGroups: [{ title: "Olympiad medals", items: olympiadAwards }],
  },
  {
    id: "bsc",
    year: "2015–21",
    label: "Computer Science",
    title: "Bachelor's Degree in Computer Science",
    org: "Universidad de Oriente",
    location: "Cuba",
    period: "Sep 2015 – Aug 2020 · ICPC until 2021",
    blurb:
      "Six years with team UO-SAM Limitless at the ICPC, including two World Finals appearances in Porto (2019) and Moscow (2021). Graduated with honors and received the Scientific Merit Award.",
    awardGroups: [
      {
        title: "ICPC results",
        intro: awardsIntro,
        introLink: { text: "International Collegiate Programming Contest (ICPC)", url: "https://icpc.foundation/" },
        items: icpcAwards,
      },
    ],
    showNotebook: true,
    links: [{ label: "Official ICPC profile", url: icpcProfileUrl }],
    photos: [
      photo.icpc2015,
      photo.icpc2016,
      photo.icpc2019Team,
      photo.icpc2019Tourist,
      photo.icpc2021Team,
      photo.icpc2021Contest,
    ],
  },
  {
    id: "professor",
    year: "2020–21",
    label: "Professor",
    title: "College Professor",
    org: "Universidad de Oriente",
    location: "Santiago de Cuba, Cuba",
    period: "Aug 2020 – Dec 2021",
    bullets: ["Taught Algebra and Analytical Geometry.", "Mentored competitive programming teams for ICPC."],
  },
  {
    id: "middlesoft",
    year: "2020–22",
    label: "Middlesoft",
    title: "Full Stack Web Developer",
    org: "Middlesoft",
    location: "Montevideo, Uruguay (Remote)",
    period: "Nov 2020 – May 2022",
    blurb: "Custom industrial, logistics and commercial software solutions.",
    bullets: [
      "Built server-side logic, REST APIs and database layers for resource management systems in the steel industry using ASP.NET and ASP.NET Core.",
      "Developed front-end interfaces with HTML, CSS, JavaScript and jQuery; implemented SQL Server stored procedures and SSDT pipelines.",
      "Worked within Azure DevOps under Scrum methodology.",
    ],
    links: [{ label: "Middlesoft website", url: "https://middlesoft.tech/mds-about.html" }],
  },
  {
    id: "toshiba",
    year: "2022–24",
    label: "Toshiba GCS",
    title: "Software Engineer",
    org: "Toshiba Global Commerce Solutions",
    location: "Guadalajara, México",
    period: "May 2022 – Aug 2024",
    blurb: "Global market share leader in retail store technology: POS systems, self-checkout and retail software.",
    bullets: [
      "Maintained a production Linux-based retail operating system; performed root-cause analysis and debugging using low-level system tools.",
      "Developed features and fixes in C, C++, Java, Python and Bash across OS-level components.",
      "Authored technical documentation and contributed ideas to internal patent registration processes.",
      "Built internal tooling to automate compilation environment configuration, reducing developer setup time.",
    ],
    links: [{ label: "Toshiba GCS website", url: "https://commerce.toshiba.com" }],
  },
  {
    id: "invofox",
    year: "2024–now",
    label: "Invofox",
    title: "Algorithm & AI Engineer",
    org: "Invofox",
    location: "Barcelona, Spain (Hybrid)",
    period: "Aug 2024 – Present",
    blurb: "AI-powered startup automating invoice and document processing.",
    bullets: [
      "Own use cases end-to-end: requirements analysis, design, implementation, testing, deployment and post-production monitoring of results and costs.",
      "Design multi-step document processing pipelines that orchestrate LLM-based and algorithmic components to deliver reliable structured data extraction.",
      "Develop tool-using agents that automate internal processes: configuring and optimizing client-specific extraction pipelines through iterative evaluation, and investigating production issues across logs and stored data.",
      "Integrate and evaluate multiple LLM providers, iterating on model and prompt strategies to balance quality, latency and cost.",
      "Build evaluation practices end-to-end: ground-truth datasets, baselines, accuracy metrics and reproducible experimentation cycles to catch regressions and track business impact.",
      "Develop algorithms to improve document and OCR processing quality; maintain and refactor production components and define schemas and validation rules from business requirements.",
    ],
    links: [{ label: "Invofox website", url: "https://www.invofox.com" }],
    photos: [photo.invofoxOffice],
    current: true,
  },
  {
    id: "barcelona",
    year: "Oct 2025",
    label: "Barcelona",
    title: "Moving to Barcelona",
    location: "Barcelona, Spain",
    period: "October 2025",
    blurb:
      "I moved to Barcelona in October 2025. It was partly a career decision and partly a lifelong dream: I have been a FC Barcelona fan since I was a kid, and one day I want to meet Messi and the Barça players in person.",
    photos: [photo.campNou],
  },
];

// ---------------------------------------------------------------------------
// Personal view
// ---------------------------------------------------------------------------

export interface Interest {
  title: string;
  text: string;
  link?: Link;
}

export const personal = {
  intro:
    "When I'm not arguing with an LLM about what a valid invoice looks like, this is what the rest of my life looks like.",
  facts: [
    "I'm a very passionate person and I like a lot of things, especially sport, music and cinema.",
    "I'm married, and I share my home with my wife and Carlitos, a cat named after Carlito's Way. As a kitten he had the face of a small-time gangster, so the name picked itself. He has since mellowed, mostly.",
  ],
  interests: [
    {
      title: "Sport",
      text: "Football first: FC Barcelona fan since I was a kid, and still chasing the dream of meeting Messi. Recently I started running and finished my first official 10k.",
    },
    {
      title: "Music",
      text: "Rock above all: Linkin Park, Coldplay (the early Coldplay), Nirvana, Guns N' Roses, Metallica and plenty of other classics. I also love electronic and instrumental music. In short, good music.",
    },
    {
      title: "Movies",
      text: "A proper cinephile. Mafia movies are my favorite genre for the great acting, though my favorite films are Forrest Gump and The Shawshank Redemption. Favorite actors: Johnny Depp and, more recently, Bob Odenkirk.",
    },
    {
      title: "Chess",
      text: "I love chess and would like to get better, but I haven't had the time to study it properly yet, haha.",
      link: { label: "My chess.com profile", url: "https://www.chess.com/member/williamma96" },
    },
  ] as Interest[],
  // Add photos here (from the `photo` map above) and the gallery appears on its own.
  photos: [] as Photo[],
};
