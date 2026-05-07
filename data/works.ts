export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string | null
  status: 'completed' | 'in-progress' | 'coming-soon'
  private?: boolean
}

export const works: Project[] = [
  {
    id: 'ux-cx-analysis',
    title: 'UX/CX Analysis Platform',
    description:
      '5-step Claude Vision pipeline · A/B variant comparison · HTML & PPTX export · 35-pattern competitor library (Amazon, Apple, Target, TikTok)',
    tags: ['Claude API', 'Gemini', 'Next.js', 'SQLite', 'Playwright', 'A/B Testing', 'PPTX Export'],
    link: 'https://github.com/vzchung/ux-platform',
    status: 'in-progress',
    private: true,
  },
  {
    id: 'donation-matcher',
    title: 'Donation Matcher',
    description:
      'Zelle CSV × PDF bank record reconciliation · Fuzzy name + date + amount matching · XLSX output with diagnostic failure reasons',
    tags: ['JavaScript', 'Fuzzy Matching', 'XLSX', 'PDF Parsing', 'No-backend'],
    link: 'https://github.com/trashthejay/chanyang',
    status: 'completed',
  },
  {
    id: 'sunday-ride',
    title: 'Sunday Ride Coordinator',
    description:
      'Google Sheet → auto-grouped vehicles → formatted HTML email · New member (새신자) detection · Zero manual coordination',
    tags: ['Google Apps Script', 'Automation', 'Google Sheets', 'HTML Email'],
    link: 'https://github.com/trashthejay/ride-automation',
    status: 'in-progress',
  },
  {
    id: 'inklings',
    title: 'Inklings',
    description:
      'Voice & text note capture with Claude AI auto-classification · Confidence thresholds · Interactive force-directed mind map · iOS / Android / macOS',
    tags: ['Flutter', 'Claude Haiku API', 'Riverpod', 'Drift ORM', 'Mind Map', 'Voice Input'],
    link: 'https://github.com/trashthejay/inklings',
    status: 'in-progress',
  },
  {
    id: 'buzzing-bird',
    title: 'Buzzing Bird',
    description:
      'Church career mentorship platform · Member directory · 3-step onboarding wizard · Admin approval queue · Connection requests with hidden contact reveal',
    tags: ['Next.js 14', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Community App'],
    link: 'https://github.com/trashthejay/Buzzing-Bird',
    status: 'in-progress',
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
