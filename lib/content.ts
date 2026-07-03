// ---------------------------------------------------------------------------
// All copy on the site lives here. Update this file to change any text.
// ---------------------------------------------------------------------------

// GitHub Pages serves this site from a /shantanu-portfolio subpath, so
// hardcoded links to files in `public/` need that prefix at build time.
const basePath = process.env.GITHUB_PAGES === "true" ? "/shantanu-portfolio" : "";

export const profile = {
  name: "Shantanu Marwaha",
  tagline: "MBA Candidate, UNC Kenan-Flagler — Class of 2027",
  headline:
    "Six years evaluating, building, and scaling businesses. Now doing it from the inside.",
  subhead:
    "I've spent six years across private equity consulting, business operations, growth strategy, and AI product development — advising on $2B+ in investment decisions while building a profitable venture from scratch. I'm now focused on putting that foundation to work building and scaling a company from within.",
  email: "shantanumarwaha@gmail.com",
  linkedin: "https://www.linkedin.com/in/shantanu-marwaha/",
  resumeUrl: `${basePath}/resume.pdf`,
  location: "Chapel Hill, NC",
  workAuthorization: "Authorized to work in the U.S. — STEM OPT through May 2030",
};

export const navLinks = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Career Roadmap", href: "#career-roadmap" },
  { label: "Goals", href: "#goals" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const executiveSummary = {
  label: "Executive Summary",
  paragraphs: [
    "MBA candidate at UNC Kenan-Flagler Business School with experience across private equity consulting, commercial strategy, and entrepreneurship. My work has focused on helping investors and businesses make strategic decisions through commercial due diligence, market analysis, growth strategy, and technology-enabled problem solving.",
    "Today, I am building on that foundation through strategy consulting projects and AI-driven business initiatives while preparing for a career in management consulting.",
  ],
  metrics: [
    { value: "$2B+", label: "Investment decisions supported" },
    { value: "300+", label: "Deals evaluated" },
    { value: "20+", label: "PE funds advised" },
    { value: "6", label: "Years across PE, strategy & entrepreneurship" },
  ],
  industries: [
    "FinTech",
    "Artificial Intelligence",
    "Retail",
    "Healthcare",
    "D2C / Consumer",
    "SaaS",
    "Industrials / Chemicals",
  ],
};

export const careerRoadmap = [
  {
    index: "01",
    period: "2021 — 2025",
    role: "Private Equity & Risk Consulting",
    org: "Grant Thornton, New Delhi",
    description:
      "Advised 20+ global private equity funds across 300+ deals and $2B in investment decisions. Directed due diligence that reshaped outcomes — an 11% valuation renegotiation on a $229M SaaS deal, $400K in financial irregularities uncovered on a healthcare acquisition (17% lower valuation), a branch restructuring on a $76M housing finance deal (-19% loan defaults), and a $183M deal an investor withdrew from after a reputational-risk finding.",
  },
  {
    index: "02",
    period: "2025 — 2027",
    role: "Candidate, Full-Time Program",
    org: "UNC Kenan-Flagler Business School",
    description:
      "Concentrating in Strategy & Consulting, Entrepreneurship, and Technology Innovation. UNC Wittman Centennial Merit Fellow. EVP – Finance for the Consulting Club, leading budgets and strategic planning for treks and labs.",
  },
  {
    index: "03",
    period: "Summer 2026",
    role: "Commercial Strategy Intern",
    org: "Solenis",
    description:
      "Led market sizing across North America, Europe, APAC, Emerging Markets, and LATAM for a $7.3B specialty chemicals manufacturer, identifying strategic white spaces to support a 3x revenue growth roadmap.",
  },
];

export const goals = {
  label: "Goals",
  headline: "From evaluating businesses to building one of my own.",
  shortTerm: {
    title: "Short-term (post-MBA)",
    items: [
      "Land a strategy, consulting, or venture-backed operating role that builds hands-on execution experience beyond advisory work.",
      "Go deeper on entrepreneurship-through-acquisition and growth strategy — the bridge between evaluating businesses and running one.",
      "Keep building at the intersection of AI and business strategy, extending the market-intelligence work started at LeO.",
    ],
  },
  longTerm: {
    title: "Long-term",
    items: [
      "Build and scale a company from the inside, owning outcomes rather than advising on them.",
      "Combine six years of deal evaluation experience with hands-on operating and AI product experience to found or lead a high-growth venture.",
      "Apply consulting rigor with entrepreneurial ownership — evaluate, build, scale.",
    ],
  },
};

export const projects = [
  {
    index: "01",
    title: "AI-Powered Market Intelligence MVP",
    result: "Automated research across 45+ competitors and 30,000+ stakeholder surveys",
    description:
      "Built an AI-powered market intelligence and M&A screening MVP for LeO, a $380M PE-backed facilities maintenance platform — turning weeks of manual research into an on-demand tool and running survey analytics across 30,000+ stakeholders to shape pricing and go-to-market strategy.",
    tags: ["AI/ML", "MBA Consulting Project"],
  },
  {
    index: "02",
    title: "B2B SaaS Regulatory Risk Review",
    result: "11% valuation renegotiation on a $229M deal",
    description:
      "Directed risk analysis for a $229M B2B SaaS acquisition at Grant Thornton, identifying regulatory compliance gaps across North America, EMEA, and APAC that compelled the client to renegotiate the deal's valuation.",
    tags: ["Private Equity", "Due Diligence"],
  },
  {
    index: "03",
    title: "Housing Finance Field Investigation",
    result: "19% reduction in loan defaults across 120 branches",
    description:
      "Analyzed loan performance data across 120 branches of an affordable housing lender, pinpointing 46 underperforming locations and driving a branch restructuring that cut loan defaults by 19%.",
    tags: ["Private Equity", "Financial Services"],
  },
  {
    index: "04",
    title: "Airbnb Venture — Founder & Operator",
    result: "$35K annual revenue, 200%+ returns vs. long-term rentals",
    description:
      "Built and scaled a short-term rental business from scratch alongside a full-time consulting career — owning pricing strategy, customer acquisition, and guest experience for 75+ guests from 8 countries.",
    tags: ["Entrepreneurship", "Operations"],
  },
];
