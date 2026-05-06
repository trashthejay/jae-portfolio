export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string | null
  status: 'live' | 'coming-soon'
}

export const works: Project[] = [
  {
    id: 'ux-cx-analysis',
    title: 'UX/CX Analysis Tool',
    description:
      'AI-powered product page evaluator using Claude and Gemini vision models to assess usability, conversion likelihood, and PDP content completeness — compressing discovery cycles without engineering resources.',
    tags: ['Claude API', 'Gemini', 'Python', 'AI Prototyping', 'UX Research'],
    link: 'https://github.com/trashthejay/chanyang',
    status: 'live',
  },
  {
    id: 'donation-matcher',
    title: 'Donation Matcher',
    description:
      'Client-side web app that reconciles Chase Zelle CSV exports against PDF bank records using fuzzy name matching, date/amount tolerance, and outputs a styled XLSX with diagnostic failure reasons.',
    tags: ['JavaScript', 'Fuzzy Matching', 'XLSX', 'PDF Parsing', 'No-backend'],
    link: 'https://github.com/trashthejay/family-finance',
    status: 'live',
  },
  {
    id: 'sunday-ride',
    title: 'Sunday Ride Coordinator',
    description:
      'Google Apps Script system that reads a Google Sheet, groups riders by pickup stop across two vehicles, detects new members, and sends formatted HTML email summaries — replacing 100% manual coordination.',
    tags: ['Google Apps Script', 'HTML Email', 'Automation', 'Google Sheets'],
    link: 'https://github.com/trashthejay/ride-automation',
    status: 'live',
  },
  {
    id: 'next-project',
    title: 'Next Project',
    description: 'Currently building with Claude Code. Stay tuned.',
    tags: ['Claude Code', 'In Progress'],
    link: null,
    status: 'coming-soon',
  },
]
