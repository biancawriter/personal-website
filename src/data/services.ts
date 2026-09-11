/**
 * Services offered. Rendered on /services/.
 * TODO: edit the copy — these are starting points drafted from the resume.
 */
export const SERVICES = [
  {
    title: 'Technical writing',
    description:
      'Developer documentation that people and AI agents can actually use: overviews, task-based guides, API references, and SDK docs. I write and test the sample code myself.',
  },
  {
    title: 'Documentation automation',
    description:
      'Agentic workflows that watch your engineering repos, flag PRs that affect customer-facing docs, and draft updates grounded in your style guide — so docs stay accurate as the product changes.',
  },
  {
    title: 'Authoring tool consulting',
    description:
      'Choosing the right platform for your team and content. I have built the business case, written the requirements, and evaluated vendors for docs-as-code (Mintlify), MadCap Flare, and Document360.',
  },
  {
    title: 'Authoring tool migration',
    description:
      'End-to-end migrations — Word and InDesign to Flare, an internal wiki to Flare, Document360 to Mintlify — including information-architecture overhauls and cross-functional adoption.',
  },
] as const;
