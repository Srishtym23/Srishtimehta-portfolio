export type Project = {
  number: string;
  slug: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  featured?: boolean;
  challenge: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "agent-behaviour-lab",
    title: "Agent Behaviour Lab",
    status: "In progress",
    description:
      "Exploring how security teams can understand anomalous AI-agent activity through API patterns, MCP traffic, token consumption, and application context.",
    tags: ["AI agents", "Security analytics", "MCP"],
    featured: true,
    challenge: "Help security teams interpret unfamiliar agent behaviour without turning complex telemetry into more noise.",
    approach: ["Map the investigation journey", "Identify explainable behavioural signals", "Prototype analyst decision workflows"],
    outcome: "This exploration is still in progress. The full case study will evolve as the work becomes ready to share.",
  },
  {
    number: "02",
    slug: "ai-pm-toolkit",
    title: "AI PM Toolkit",
    status: "Building",
    description:
      "A practical set of AI-assisted workflows for customer-call synthesis, PRD drafting, prototyping, and faster requirements iteration.",
    tags: ["Product craft", "LLMs", "Prototyping"],
    challenge: "Reduce repetitive product work while keeping judgment, context, and accountability with the PM.",
    approach: ["Find high-friction workflows", "Design human-in-the-loop prompts", "Measure speed and decision quality"],
    outcome: "Early workflows have helped accelerate customer synthesis, drafting, prototyping, and requirements iteration.",
  },
  {
    number: "03",
    slug: "product-musings",
    title: "Product Musings",
    status: "Writing",
    description:
      "Notes on enterprise product strategy, building trustworthy AI experiences, and turning complex systems into useful decisions.",
    tags: ["Writing", "Frameworks", "Learning"],
    challenge: "Turn lessons from complex enterprise product work into practical ideas other builders can use.",
    approach: ["Capture the observation", "Connect it to a reusable principle", "Test it against real product decisions"],
    outcome: "A growing collection of working notes, frameworks, and product reflections.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
