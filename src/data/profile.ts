// Single source of truth for all portfolio content.
// Edit this file to change any text on the site.

export interface Link {
  label: string;
  url: string;
}

export interface Job {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  blurb?: string;
  bullets: string[];
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

export const experience: Job[] = [
  {
    role: "Algorithm & AI Engineer",
    company: "Invofox",
    companyUrl: "https://www.invofox.com",
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
  },
  {
    role: "Software Engineer",
    company: "Toshiba Global Commerce Solutions",
    companyUrl: "https://commerce.toshiba.com",
    location: "Guadalajara, México",
    period: "May 2022 – Aug 2024",
    blurb: "Global market share leader in retail store technology: POS systems, self-checkout and retail software.",
    bullets: [
      "Maintained a production Linux-based retail operating system; performed root-cause analysis and debugging using low-level system tools.",
      "Developed features and fixes in C, C++, Java, Python and Bash across OS-level components.",
      "Authored technical documentation and contributed ideas to internal patent registration processes.",
      "Built internal tooling to automate compilation environment configuration, reducing developer setup time.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Middlesoft",
    location: "Montevideo, Uruguay (Remote)",
    period: "Nov 2020 – May 2022",
    blurb: "Custom industrial, logistics and commercial software solutions.",
    bullets: [
      "Built server-side logic, REST APIs and database layers for resource management systems in the steel industry using ASP.NET and ASP.NET Core.",
      "Developed front-end interfaces with HTML, CSS, JavaScript and jQuery; implemented SQL Server stored procedures and SSDT pipelines.",
      "Worked within Azure DevOps under Scrum methodology.",
    ],
  },
  {
    role: "College Professor",
    company: "Universidad de Oriente",
    location: "Santiago de Cuba, Cuba",
    period: "Aug 2020 – Dec 2021",
    bullets: [
      "Taught Algebra and Analytical Geometry.",
      "Mentored competitive programming teams for ICPC.",
    ],
  },
];

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

export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Universidad de Oriente",
    location: "Cuba",
    period: "Sep 2015 – Aug 2020",
  },
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
  { result: "Bronze Medal", event: "Ibero-American Informatics Competition, Portugal", year: 2013 },
  { result: "Gold Medal", event: "Cuban Competition in Informatics", year: 2013 },
  { result: "Silver Medal", event: "Cuban Competition in Informatics", year: 2012 },
];

export const icpcProfileUrl = "https://icpc.global/ICPCID/6SAUHN5TJQJD";

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Proficient (B2/C1)" },
];

export const personal = {
  intro:
    "When I'm not arguing with an LLM about what a valid invoice looks like, this is what the rest of my life looks like.",
  facts: [
    "Cuban, married, and living in Barcelona since October 2025.",
    "FC Barcelona fan since I was a kid. Moving to Barcelona was partly a career decision and partly a lifelong dream: one day I want to meet Messi and the Barça players in person. No regrets so far.",
    "I share my home with Carlitos, a cat named after Carlito's Way. As a kitten he had the face of a small-time gangster, so the name picked itself. He has since mellowed, mostly.",
    "Competitive programming has been part of my life since the school olympiads. The ICPC years with my team Limitless and the trips to the World Finals are some of my best memories.",
    "Recently I started running. I finished my first official 10k and I'm already looking for the next one.",
  ],
  // Drop image files into /public/images and list them here.
  // The gallery only renders the photos listed below.
  photos: [
    {
      src: "/images/camp-nou.jpg",
      alt: "William holding a Barça scarf in the stands at Camp Nou",
      caption: "Dream unlocked: first time at Camp Nou watching Barça.",
    },
    {
      src: "/images/carlitos-sweater.jpg",
      alt: "Carlitos the cat wearing a red Christmas sweater",
      caption: "Carlitos, dressed for the occasion.",
    },
    {
      src: "/images/carlitos-bowtie.jpg",
      alt: "Carlitos the cat with a red bow tie lying on a cat tree",
      caption: "The face that earned him the name.",
    },
    {
      src: "/images/icpc-2019-with-tourist.jpg",
      alt: "William with Gennady Korotkevich at the ICPC World Finals 2019",
      caption:
        "With Gennady \"tourist\" Korotkevich at the 2019 World Finals in Porto. Widely regarded as the greatest competitive programmer of all time.",
      link: { label: "Who is tourist?", url: "https://en.wikipedia.org/wiki/Gennady_Korotkevich" },
    },
    {
      src: "/images/icpc-2019-porto-arrival.jpg",
      alt: "Team Limitless in front of the ICPC 2019 World Finals welcome banner",
      caption: "Arriving at the ICPC World Finals, Porto 2019.",
    },
    {
      src: "/images/icpc-2021-moscow-team.jpg",
      alt: "Team Limitless wearing masks at the ICPC World Finals in Moscow",
      caption: "World Finals in Moscow, 2021. Masks on, spirits up.",
    },
    {
      src: "/images/icpc-2021-moscow-contest.jpg",
      alt: "Contest floor with the scoreboard at the ICPC World Finals 2021",
      caption: "Contest day in Moscow, scoreboard in sight.",
    },
    {
      src: "/images/icpc-2016-caribbean-regional.jpg",
      alt: "Team Limitless at the ICPC Caribbean regional 2016",
      caption: "Where it started: Caribbean regional, 2016, first year of university.",
    },
    {
      src: "/images/wedding.jpg",
      alt: "William and his wife holding a heart-shaped balloon on their wedding day",
      caption: "Wedding day.",
    },
    {
      src: "/images/first-10k.jpg",
      alt: "William and a friend showing their medals after a 10k race",
      caption: "First official 10k, medal included.",
    },
  ] as Photo[],
};
