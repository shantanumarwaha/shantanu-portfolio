import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "shantanu-portfolio";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    // process.env.GITHUB_PAGES itself is only visible during the Node
    // build; client components need the resolved path re-exposed under
    // NEXT_PUBLIC_ so it's inlined into the browser bundle too.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
