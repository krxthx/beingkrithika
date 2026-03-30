export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    name: "Revelio",
    tagline: "RAG made visible",
    description:
      "An interactive visualiser for retrieval-augmented generation pipelines. Makes the whole process — embedding, retrieval, generation — transparent and explorable. 3D embedding visualisation, side-by-side algorithm comparison, real-time context tracing.",
    tags: ["TypeScript", "Next.js", "Three.js", "Python", "sentence-transformers", "UMAP"],
    links: {
      github: "https://github.com/krxthx/revelio",
    },
  },
  {
    name: "Accio",
    tagline: "AI news, without the noise",
    description:
      "Terminal-first AI news digest generator. A 6-stage deterministic pipeline — discover, enhance, validate, deduplicate, categorise, render — that combines crawling with agentic tool calling to surface what actually matters in the AI space.",
    tags: ["Python", "LangGraph", "AWS Bedrock", "Playwright", "Ollama"],
    links: {
      github: "https://github.com/krxthx/accio-ai",
    },
  },
  {
    name: "lorewave",
    tagline: "Things explained properly",
    description:
      "A blog for everyday topics that deserve a clear explanation. Tech, finance, career, life — written the way I wish more things were explained to me. Plain words, no jargon, made slowly and with care.",
    tags: ["writing", "side project"],
    links: {
      live: "https://lorewave.me",
    },
  },
];
