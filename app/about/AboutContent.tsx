'use client'

import { motion } from 'framer-motion'

const skills = [
  'AI Prototyping',
  'Product Strategy',
  '0→1 Products',
  'Generative AI',
  'Data Science',
  'Python',
  'SQL',
  'AWS QuickSight',
  'Omnichannel Commerce',
  'A/B Testing',
  'Stakeholder Management',
  'Roadmap Prioritization',
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

      {/* Skills */}
      <motion.section {...reveal} transition={{ duration: 0.4, delay: 0.05 }}>
        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm bg-zinc-100 text-zinc-700 rounded-full px-3 py-1.5"
            >
              {skill}
            </span>
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

      {/* Achievements */}
      <motion.section {...reveal} transition={{ duration: 0.4, delay: 0.15 }}>
        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
          Notable Achievements
        </h2>
        <div className="border-l-4 border-teal-600 pl-5 bg-zinc-50 rounded-r-xl p-5 space-y-3">
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-0.5">US Patent</p>
            <p className="text-sm text-zinc-700 font-medium">US 12,526,251 B2 — Granted</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-0.5">Revenue Impact</p>
            <p className="text-sm text-zinc-700 font-medium">$69.2M direct revenue in 5 months (Verizon)</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wide font-medium mb-0.5">Growth</p>
            <p className="text-sm text-zinc-700 font-medium">270% quarterly profit growth (KDDI America)</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
