'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import WorkCard from '@/components/WorkCard'
import { works } from '@/data/works'
import type { Project } from '@/data/works'

type Filter = 'all' | 'completed' | 'in-progress'

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'In Progress', value: 'in-progress' },
]

function filterProjects(projects: Project[], filter: Filter): Project[] {
  if (filter === 'all') return projects
  return projects.filter((p) => p.status === filter)
}

export default function WorksContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const filtered = filterProjects(works, activeFilter)

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
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

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-1 mb-8"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                activeFilter === value
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
