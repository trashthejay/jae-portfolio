'use client'

import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import TimelineEntry from '@/components/TimelineEntry'
import { experiences } from '@/data/experience'

export default function ExperienceContent() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-teal-600 mb-3 tracking-wide uppercase">Career</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Experience
          </h1>
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            15+ years across telecom, enterprise platforms, and AI — from medical data to messaging
            products to next-generation consumer experiences.
          </p>
        </motion.div>

        <div className="max-w-2xl">
          {experiences.map((exp, i) => (
            <TimelineEntry key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
