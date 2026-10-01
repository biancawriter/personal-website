/**
 * Links rendered on /resources/. Three sections: community/reading, books, and tools.
 */
export const RESOURCES = [
  {
    title: 'Write the Docs',
    url: 'https://www.writethedocs.org/',
    description: 'The global community for people who care about documentation.',
  },
  {
    title: "I'd Rather Be Writing — Tom Johnson",
    url: 'https://idratherbewriting.com/',
    description: 'Long-running blog on API documentation, AI, and the craft of technical writing.',
  },
  {
    title: 'AI Book Club: A Human in the Loop',
    url: 'https://idratherbewriting.com/ai-book-club/',
    description: "Tom Johnson's monthly book club on AI and its impact on technical writing and society.",
  },
  {
    title: 'Dachary Carey',
    url: 'https://dacharycarey.com/',
    description: 'Writing on developer docs, docs-as-code, and documentation engineering.',
  },
] as const;

export const BOOKS = [
  {
    title: 'The Elements of Style',
    authors: 'William Strunk and E. B. White',
    url: 'https://www.barnesandnoble.com/w/the-elements-of-style-william-strunk/1116670762',
    description: 'Short and concise, just like the writing style the authors recommend.',
  },
  {
    title: 'Eats, Shoots & Leaves: The Zero Tolerance Approach to Punctuation',
    authors: 'Lynne Truss',
    url: 'https://www.barnesandnoble.com/w/eats-shoots-leaves-lynne-truss/1100734289',
    description:
      'This is like the cheeky British descendant of "The Elements of Style." If dry wit helps you remember rules better, this book is for you.',
  },
  {
    title: 'On Writing: A Memoir of the Craft',
    authors: 'Stephen King',
    url: 'https://www.barnesandnoble.com/w/on-writing-stephen-king/1100630876',
    description: 'Part memoir, part manual, this book has practical advice for how to write prose that connects with people.',
  },
] as const;

export const TOOLS = [
  {
    title: 'Mintlify',
    url: 'https://mintlify.com/',
    description: 'Docs-as-code platform. Led a full migration onto it and maintain a production docs site with it.',
  },
  {
    title: 'Claude & Claude Code',
    url: 'https://claude.com/',
    description: 'Drafting, review, and agentic documentation workflows, guided by a CLAUDE.md that encodes the style guide.',
  },
  {
    title: 'Cursor',
    url: 'https://cursor.com/',
    description: 'Day-to-day editor for docs-as-code and sample code.',
  },
  {
    title: 'Astro',
    url: 'https://astro.build/',
    description: 'What this site is built with.',
  },
] as const;
