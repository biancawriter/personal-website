/**
 * Site-wide constants. Edit these rather than hunting through components.
 */

export const SITE = {
  title: 'Bianca Ragsdale',
  tagline: 'Senior technical writer',
  description:
    'Senior technical writer specializing in developer documentation, docs-as-code, and AI-assisted documentation workflows.',
  author: 'Bianca Ragsdale',
  location: 'Glendale, CA',
};

export const NAV = [
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About', href: '/about/' },
] as const;

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/biancaragsdale/' },
  { label: 'GitHub', href: 'https://github.com/biancawriter' },
] as const;
