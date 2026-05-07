'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Product Leadership',
    skills: [
      '0→1 Products',
      'Roadmap Prioritization',
      'Omnichannel Commerce',
      'A/B Testing',
      'Stakeholder Management',
      'Product Strategy',
    ],
  },
  {
    label: 'Telecom & Carrier',
    skills: [
      'A2P SMS / RCS',
      'Carrier Services',
      'MVNO Partnerships',
      'International Ops',
      'CCaaS',
    ],
  },
  {
    label: 'Technical',
    skills: [
      'Generative AI',
      'AI Prototyping',
      'Python',
      'SQL',
      'Data Science',
      'AWS QuickSight',
      'Flutter',
      'Next.js',
    ],
  },
]

const education = [
  {
    school: 'New Jersey Institute of Technology',
    degree: 'M.S. Data Science',
    detail: 'In progress · Focus: Machine Learning, AI Applications',
  },
  {
    school: 'Rutgers University',
    degree: 'M.S. Industrial & Systems Engineering',
    detail: '',
  },
  {
    school: 'Rutgers University',
    degree: 'B.S. Electrical & Computer Engineering',
    detail: 'Minor: Mathematics',
  },
]

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.4 },
}

export default function AboutContent() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-16">
      {/* Intro */}
      <motion.section {...reveal}>
        <p className="text-sm font-medium text-teal-600 mb-3 tracking-wide uppercase">About</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
          PM who builds, not just plans.
        </h1>
        <div className="max-w-2xl space-y-4 text-zinc-500 leading-relaxed">
          <p>
            Jay is a product leader who bridges deep technical fluency with consumer product instincts.
            With 15+ years across telecom, enterprise platforms, and AI, he&apos;s shipped 0→1 products at
            Verizon and driven measurable business results — including $69.2M in direct revenue in a
            single quarter.
          </p>
          <p>
            He doesn&apos;t just define roadmaps — he builds AI-powered prototypes to validate ideas before
            engineering ever gets involved. That means faster decisions, less waste, and products that
            actually get used.
          </p>
        </div>
      </motion.section>

      {/* Skills — grouped */}
      <motion.section {...reveal} transition={{ duration: 0.4, delay: 0.05 }}>
        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-zinc-100 text-zinc-700 rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section {...reveal} transition={{ duration: 0.4, delay: 0.1 }}>
        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-6">Education</h2>
        <div className="space-y-5">
          {education.map((ed) => (
            <div key={ed.degree} className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-900">{ed.school}</p>
                <p className="text-sm text-zinc-600">{ed.degree}</p>
                {ed.detail && <p className="text-xs text-zinc-400 mt-0.5">{ed.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Notable Achievements */}
      <motion.section {...reveal} transition={{ duration: 0.4, delay: 0.15 }}>
        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
          Notable Achievements
        </h2>
        <div className="space-y-4">
          {/* Patent — expanded card */}
          <div className="border border-zinc-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-1">US Patent</p>
                <p className="font-semibold text-zinc-900">US 12,526,251 B2</p>
                <p className="text-sm text-zinc-600 mt-0.5">
                  &ldquo;System and Method for Validation of Representative Links in Messages&rdquo;
                </p>
              </div>
              <a
                href="https://patents.google.com/patent/US12526251B2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-teal-600 transition-colors shrink-0 mt-1"
                aria-label="View on USPTO"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-zinc-400 mb-3">
              Granted Jan. 13, 2026 · Verizon Patent and Licensing Inc.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Invented an A2P SMS messaging system that automatically validates representative links in
              outbound messages to prevent phishing attacks — protecting end users across carrier
              networks at scale.
            </p>
          </div>

          {/* Other achievements */}
          <div className="border-l-4 border-teal-600 pl-5 bg-zinc-50 rounded-r-xl p-5 space-y-3">
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-0.5">Revenue Impact</p>
              <p className="text-sm text-zinc-700 font-medium">$69.2M direct revenue in 5 months (Verizon)</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-0.5">Growth</p>
              <p className="text-sm text-zinc-700 font-medium">270% quarterly profit growth (KDDI America)</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
