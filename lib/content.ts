// ---------------------------------------------------------------------------
// All copy on the site lives here. Update this file to change any text.
// ---------------------------------------------------------------------------

// GitHub Pages serves this site from a /shantanu-portfolio subpath, so
// hardcoded links to files in `public/` need that prefix at build time.
export const basePath =
  process.env.GITHUB_PAGES === "true" ? "/shantanu-portfolio" : "";

export const profile = {
  name: "Shantanu Marwaha",
  subtitle: "MBA Candidate | UNC Kenan-Flagler Business School",
  expertise: "Private Equity Consulting • Growth Strategy • AI & Business Innovation",
  statement:
    "Helping investors and businesses make strategic decisions through commercial due diligence, market intelligence, growth strategy, and AI-driven innovation.",
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
    { value: "$2B+", label: "Investment Decisions", description: "Supported" },
    { value: "300+", label: "Deals", description: "Evaluated" },
    { value: "20+", label: "Private Equity", description: "Funds Advised" },
    { value: "1", label: "AI Strategy", description: "MVP Built" },
  ],
  industriesLabel: "Industries Worked Across",
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
    id: "airbnb",
    company: "Airbnb",
    monogram: "A",
    role: "Founder & Operator",
    period: "2019 – 2025",
    companyDescription:
      "Independent short-term rental venture, built and operated alongside a full-time consulting career.",
    roleOverview:
      "Built and scaled a short-term rental business from scratch — owning pricing strategy, customer acquisition, and guest experience for guests from 8 countries, entirely alongside a full-time consulting career.",
    metrics: [
      { value: "$35K", label: "Annual Revenue" },
      { value: "200%+", label: "Return vs. Long-Term Rental" },
      { value: "75+", label: "Guests Hosted" },
      { value: "8", label: "Countries Represented" },
    ],
    responsibilities: [
      "Owned end-to-end pricing and revenue management strategy",
      "Drove guest acquisition and channel marketing",
      "Managed guest experience and day-to-day operations",
      "Ran comparable-market analysis to inform listing strategy",
    ],
    skills: [
      "Growth Strategy",
      "Market Intelligence",
      "Stakeholder Management",
      "Competitive Intelligence",
    ],
    takeaway:
      "Learned to own outcomes end-to-end — planting the seed for a career built on more than advisory work.",
  },
  {
    id: "grant-thornton",
    company: "Grant Thornton",
    monogram: "GT",
    role: "Private Equity & Risk Consulting",
    period: "2021 – 2025",
    companyDescription:
      "Global professional services firm advising private equity funds on deal due diligence.",
    roleOverview:
      "Advised 20+ global private equity funds across 300+ deals and $2B in investment decisions, directing commercial and risk due diligence that directly reshaped deal outcomes.",
    metrics: [
      { value: "$2B+", label: "Investment Decisions Supported" },
      { value: "300+", label: "Deals Evaluated" },
      { value: "20+", label: "PE Funds Advised" },
      { value: "11%", label: "Valuation Renegotiation, $229M Deal" },
      { value: "$400K", label: "Irregularities Uncovered" },
    ],
    responsibilities: [
      "Led commercial due diligence workstreams for live PE transactions",
      "Directed investigations that surfaced financial irregularities",
      "Advised deal teams on valuation and structuring implications",
      "Managed cross-functional risk assessments across geographies",
    ],
    skills: [
      "Commercial Due Diligence",
      "Market Intelligence",
      "Competitive Intelligence",
      "Stakeholder Management",
    ],
    takeaway:
      "Built the analytical rigor and deal-evaluation instincts that now anchor every strategic recommendation I make.",
  },
  {
    id: "leo",
    company: "LEO",
    monogram: "LEO",
    role: "MBA Strategy Consulting Project",
    period: "Spring 2026",
    companyDescription: "$380M PE-backed facilities maintenance platform.",
    roleOverview:
      "Built an AI-powered market intelligence and M&A screening MVP, automating competitor research and stakeholder survey analysis to shape pricing and go-to-market strategy.",
    metrics: [
      { value: "45+", label: "Competitors Automated" },
      { value: "30,000+", label: "Stakeholders Surveyed" },
      { value: "1", label: "AI MVP Shipped" },
    ],
    responsibilities: [
      "Designed an AI-driven competitor research automation tool",
      "Ran survey analytics across 30,000+ stakeholders",
      "Translated findings into pricing and go-to-market recommendations",
      "Presented strategic findings to PE-backed leadership",
    ],
    skills: [
      "AI & Automation",
      "Market Sizing",
      "Growth Strategy",
      "Market Intelligence",
    ],
    takeaway:
      "Proved that AI tooling can compress weeks of manual research into an on-demand strategic asset.",
  },
  {
    id: "solenis",
    company: "Solenis",
    monogram: "S",
    role: "Commercial Strategy MBA Internship",
    period: "Summer 2026",
    companyDescription: "$7.3B specialty chemicals manufacturer.",
    roleOverview:
      "Leading market sizing across North America, Europe, APAC, Emerging Markets, and LATAM to identify strategic white spaces supporting a 3x revenue growth roadmap.",
    metrics: [
      { value: "$7.3B", label: "Manufacturer Revenue" },
      { value: "5", label: "Regions Sized" },
      { value: "3x", label: "Growth Roadmap Target" },
    ],
    responsibilities: [
      "Led cross-regional market sizing across 5 geographies",
      "Identified strategic white space opportunities",
      "Built frameworks supporting a 3x growth roadmap",
      "Partnered directly with commercial leadership",
    ],
    skills: [
      "Market Sizing",
      "Growth Strategy",
      "Commercial Due Diligence",
      "Competitive Intelligence",
    ],
    takeaway:
      "Applied consulting rigor to real commercial strategy decisions at global scale — the clearest bridge yet to management consulting.",
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
