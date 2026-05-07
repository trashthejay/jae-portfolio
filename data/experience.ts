export interface Experience {
  company: string
  title: string
  period: string
  current: boolean
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Verizon',
    title: 'Senior Product Manager, Next Generation Products & Platforms',
    period: 'Nov 2024 – Present',
    current: true,
    tags: ['AI/ML', 'Omnichannel'],
    highlights: [
      'Led omnichannel marketplace transformation (Project Elysium), delivering $69.2M direct revenue in 5 months.',
      'Drove AI-powered personalization that increased perk attachment 62.2% YoY.',
      'Independently built UX/CX Analysis Platform (5-step Claude Vision pipeline, A/B variant comparison, 35-pattern competitor library) — zero engineering resources, deployed internally at Verizon.',
    ],
  },
  {
    company: 'Verizon',
    title: 'Product Engineer, Consumer Innovation',
    period: 'Sep 2021 – Oct 2024',
    current: false,
    tags: ['0→1', 'AR/VR', 'Edge AI'],
    highlights: [
      '0→1 incubation of emerging platforms: Home Automation, OTT, AR/VR.',
      'Evaluated 20+ venture-stage technologies for strategic fit and buildability.',
      'Built exec-ready proofs-of-concept with edge AI and computer vision.',
    ],
  },
  {
    company: 'Verizon',
    title: 'Product Manager, CCaaS & Business Messaging',
    period: 'Sep 2019 – Sep 2021',
    current: false,
    tags: ['CCaaS', 'Messaging'],
    highlights: [
      'Launched 0→1 cloud Contact Center (CCaaS) product for SMB — from concept to commercial GA.',
      'Drove Business Messaging product integration across A2P SMS and RCS carrier channels.',
      'Led 15+ cross-functional teams; delivered 20+ regional training sessions for commercial readiness.',
    ],
  },
  {
    company: 'KDDI America',
    title: 'Lead Manager, Global Messaging Services',
    period: 'Dec 2018 – Sep 2019',
    current: false,
    tags: ['A2P SMS', 'RCS', 'International'],
    highlights: [
      'Defined product vision for SMS/RCS API platform across enterprise segments.',
      'Drove international marketplace adoption and partner ecosystem growth.',
    ],
  },
  {
    company: 'KDDI America',
    title: 'Senior Product Manager, Messaging Services',
    period: 'Feb 2010 – Nov 2018',
    current: false,
    tags: ['Carrier Services', 'MVNO', 'A2P SMS'],
    highlights: [
      'Achieved 270% quarterly profit growth through product repositioning.',
      'Owned A2P SMS product across global segments; conducted competitive intelligence on Twilio, LINE, and OTT players.',
    ],
  },
  {
    company: 'Global Statistics Group',
    title: 'Medical Data Analyst',
    period: 'Jan 2008 – Jan 2010',
    current: false,
    tags: ['Medical Data', 'FDA'],
    highlights: [
      'Processed FDA clinical trial data to ADaM/SDTM standards using SAS and SQL.',
      'Produced define.xml submissions for regulatory filings.',
    ],
  },
]
