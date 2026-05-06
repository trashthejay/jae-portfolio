'use client'

import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import WorkCard from '@/components/WorkCard'
import { works } from '@/data/works'

export default function WorksContent() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-teal-600 mb-3 tracking-wide uppercase">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Selected Work
          </h1>
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            Things I&apos;ve built with AI — prototypes, tools, and automations that solve real
            problems without waiting on engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
