// ---------------------------------------------------------------------------
// All copy on the site lives here. Update this file to change any text.
// ---------------------------------------------------------------------------

// GitHub Pages serves this site from a /shantanu-portfolio subpath, so
// hardcoded links to files in `public/` need that prefix at build time.
// Read via the NEXT_PUBLIC_ mirror (set in next.config.ts) rather than
// GITHUB_PAGES directly — plain env vars aren't inlined into client
// component bundles, only NEXT_PUBLIC_-prefixed ones are.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  workAuthorization: "Authorized to work in the U.S. (STEM OPT through May 2030)",
};

export const navLinks = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Career Roadmap", href: "#career-roadmap" },
  { label: "Engagements", href: "#engagements" },
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
    company: "Airbnb Rental Properties",
    logo: "airbnb.svg",
    role: "Founder & Operator",
    period: "2019 – 2025",
    companyDescription:
      "Independent short-term rental venture, built and operated alongside a full-time consulting career.",
    roleOverview:
      "Built and scaled a short-term rental business from scratch, owning pricing strategy, customer acquisition, and guest experience for guests from 8 countries, entirely alongside a full-time consulting career.",
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
      "Learned to own outcomes end-to-end, planting the seed for a career built on more than advisory work.",
  },
  {
    id: "grant-thornton",
    company: "Grant Thornton",
    logo: "grant-thornton-2.svg",
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
    logo: "leo.svg",
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
    logo: "solenis.svg",
    role: "MBA Intern – Product and Strategy",
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
      "Applied consulting rigor to real commercial strategy decisions at global scale, the clearest bridge yet to management consulting.",
  },
];

export const engagements = [
  {
    id: "housing-finance",
    title: "Commercial Due Diligence on an Affordable Housing Finance Company",
    tags: ["Private Equity", "Commercial Due Diligence", "Financial Services"],
    situation:
      "A leading private equity firm was evaluating an investment in an affordable housing finance company and required a deeper assessment of its commercial viability, underwriting quality, operational practices, and long-term growth potential before proceeding with the acquisition.",
    outcome:
      "120 branches analyzed • 46 underperforming branches identified • Investment declined",
    approach:
      "Conducted branch-level performance reviews across the lender's network, benchmarking underwriting discipline and loan quality against portfolio-wide standards. Combined on-the-ground field investigations with financial analysis to pressure-test growth assumptions and surface risks not visible in headline portfolio metrics.",
    metrics: [
      { value: "120", label: "Branches Analyzed" },
      { value: "46", label: "Underperforming Branches" },
      { value: "Declined", label: "Investment Recommendation" },
    ],
    capabilities: [
      "Commercial Due Diligence",
      "Operational Due Diligence",
      "Financial Analysis",
      "Stakeholder Interviews",
    ],
  },
  {
    id: "b2b-saas",
    title: "Commercial Due Diligence on a B2B SaaS Company",
    tags: ["Private Equity", "Commercial Due Diligence", "SaaS"],
    situation:
      "Conducted commercial due diligence for a leading B2B SaaS company by assessing market attractiveness, competitive positioning, regulatory compliance, and commercial scalability across North America, EMEA, and APAC.",
    outcome: "11% valuation renegotiation • $229M transaction",
    approach:
      "Assessed market attractiveness and competitive positioning across North America, EMEA, and APAC, combining regulatory compliance review with commercial scalability analysis to stress-test the company's growth trajectory ahead of a $229M transaction.",
    metrics: [
      { value: "11%", label: "Valuation Renegotiation" },
      { value: "$229M", label: "Transaction Size" },
      { value: "3", label: "Regions Assessed" },
    ],
    capabilities: [
      "Commercial Due Diligence",
      "Market Sizing",
      "Competitive Intelligence",
      "Financial Analysis",
    ],
  },
  {
    id: "fintech-lending",
    title: "Commercial Due Diligence on a FinTech Lending Platform",
    tags: ["Private Equity", "Commercial Due Diligence", "FinTech"],
    situation:
      "Evaluated a digital lending platform's underwriting model, customer acquisition strategy, operational processes, and portfolio quality to assess commercial attractiveness and identify investment risks.",
    outcome:
      "7+ underwriting gaps identified • Strengthened post-investment credit controls",
    approach:
      "Evaluated the platform's underwriting model and customer acquisition strategy through financial analysis and operational process reviews, benchmarking portfolio quality against industry standards to size commercial attractiveness and investment risk.",
    metrics: [
      { value: "7+", label: "Underwriting Gaps Identified" },
      { value: "Post-Investment", label: "Credit Controls Strengthened" },
      { value: "Full-Cycle", label: "Underwriting Model Reviewed" },
    ],
    capabilities: [
      "Commercial Due Diligence",
      "Financial Analysis",
      "Competitive Intelligence",
      "Investment Strategy",
    ],
  },
  {
    id: "healthcare-provider",
    title: "Operational & Integrity Due Diligence on a Healthcare Provider",
    tags: ["Private Equity", "Investigative Due Diligence", "Healthcare"],
    situation:
      "Conducted operational and integrity due diligence to evaluate governance practices, financial integrity, and reputational risks before acquisition through investigative research and forensic document reviews.",
    outcome:
      "$400K financial misappropriation uncovered • 17% valuation reduction",
    approach:
      "Led investigative due diligence combining forensic document review with stakeholder interviews to evaluate governance practices, financial integrity, and reputational risk ahead of acquisition.",
    metrics: [
      { value: "$400K", label: "Financial Misappropriation Uncovered" },
      { value: "17%", label: "Valuation Reduction" },
      { value: "Governance", label: "Risks Identified" },
    ],
    capabilities: [
      "Integrity Due Diligence",
      "Financial Analysis",
      "Stakeholder Interviews",
      "Investment Strategy",
    ],
  },
];
