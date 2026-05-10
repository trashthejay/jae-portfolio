export interface Project {
  id: string
  title: string
  problem: string
  description: string
  cta?: string
  thumbnail?: string
  tags: string[]
  link: string | null
  status: 'completed' | 'in-progress' | 'coming-soon'
  private?: boolean
}

export const works: Project[] = [
  {
    id: 'ux-cx-analysis',
    title: 'UX/CX Analysis Platform',
    problem:
      'Evaluating product page UX at Verizon meant weeks of manual review cycles.',
    description:
      'Built an internal AI tool that scores any digital product page in minutes — 5-step Claude Vision pipeline, A/B variant comparison, 35-pattern competitor library (Amazon, Apple, Target, TikTok), HTML & PPTX export.',
    cta: 'Internal tool — reach out via the Contact tab for details.',
    tags: ['Claude API', 'Gemini', 'Next.js', 'SQLite', 'Playwright', 'A/B Testing', 'PPTX Export'],
    link: 'https://github.com/vzchung/ux-platform',
    status: 'completed',
    private: true,
  },
  {
    id: 'donation-matcher',
    title: 'Donation Matcher',
    problem:
      'The church treasurer spent hours every month manually cross-referencing Zelle transfers against bank statements — error-prone and tedious.',
    description:
      'Built a browser-only tool that does it in seconds: fuzzy name + date + amount matching, XLSX output with diagnostic failure reasons. No backend, no data leaves the browser.',
    thumbnail: 'https://opengraph.github.com/trashthejay/chanyang',
    tags: ['JavaScript', 'Fuzzy Matching', 'XLSX', 'PDF Parsing', 'No-backend'],
    link: 'https://github.com/trashthejay/chanyang',
    status: 'completed',
  },
  {
    id: 'family-finance',
    title: 'Family Finance',
    problem:
      'Mint shut down and no existing app handled multi-owner finances without giving up data control.',
    description:
      'Built a self-hosted dashboard with Plaid bank sync (12,000+ banks), per-owner transaction tracking, auto-categorization rules, subscription detection, anomaly alerts, and net worth monitoring — running on our own server.',
    thumbnail: 'https://opengraph.github.com/trashthejay/family-finance',
    tags: ['Next.js', 'Plaid API', 'SQLite', 'Drizzle ORM', 'NextAuth', 'Recharts', 'Fly.io'],
    link: 'https://github.com/trashthejay/family-finance',
    status: 'in-progress',
  },
  {
    id: 'sunday-ride',
    title: 'Sunday Ride Coordinator',
    problem:
      'Every Sunday morning, someone had to manually text 20+ people to figure out who needs a ride, which car they\'re in, and what time to pick them up — then repeat it all again after any changes.',
    description:
      'Automated the entire process: reads a Google Sheet, auto-groups riders by pickup stop across two vehicles, and sends a formatted email summary to drivers. Zero manual coordination.',
    thumbnail: 'https://opengraph.github.com/trashthejay/ride-automation',
    tags: ['Google Apps Script', 'Automation', 'Google Sheets', 'HTML Email'],
    link: 'https://github.com/trashthejay/ride-automation',
    status: 'completed',
  },
  {
    id: 'inklings',
    title: 'Inklings',
    problem:
      'Good ideas disappear because capturing them is too slow or too fragmented.',
    description:
      'Built a cross-platform app where you speak or type a thought — Claude AI instantly classifies it, connects it to related notes, and maps everything into an interactive force-directed mind map. Available on iOS, Android, and macOS.',
    thumbnail: 'https://opengraph.github.com/trashthejay/inklings',
    tags: ['Flutter', 'Claude Haiku API', 'Riverpod', 'Drift ORM', 'Mind Map', 'Voice Input'],
    link: 'https://github.com/trashthejay/inklings',
    status: 'in-progress',
  },
  {
    id: 'buzzing-bird',
    title: 'Buzzing Bird',
    problem:
      'The church had experienced professionals ready to mentor younger members — but no way to find or connect with them. Everything was word of mouth.',
    description:
      'Built a career mentorship platform with a member directory, 3-step onboarding wizard, admin approval queue, and connection requests with contact info revealed only after both sides agree.',
    thumbnail: 'https://opengraph.github.com/trashthejay/Buzzing-Bird',
    tags: ['Next.js 14', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Community App'],
    link: 'https://github.com/trashthejay/Buzzing-Bird',
    status: 'in-progress',
  },
  {
    id: 'jae-portfolio',
    title: 'This Portfolio',
    problem:
      'Most PM portfolios are static PDFs or generic LinkedIn pages — they tell, not show.',
    description:
      'Built a live portfolio with Next.js App Router, Tailwind CSS, and Framer Motion: animated hero with cycling roles, filterable project cards, vertical experience timeline, and a working contact form via Web3Forms. Deployed on Vercel.',
    thumbnail: 'https://opengraph.github.com/trashthejay/jae-portfolio',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Web3Forms', 'Vercel'],
    link: 'https://github.com/trashthejay/jae-portfolio',
    status: 'completed',
  },
  {
    id: 'next-project',
    title: 'Next Project',
    problem: 'Currently building with Claude Code. Stay tuned.',
    description: '',
    tags: ['Claude Code', 'In Progress'],
    link: null,
    status: 'coming-soon',
  },
]
