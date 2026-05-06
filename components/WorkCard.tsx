'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/data/works'

export default function WorkCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border border-zinc-200 rounded-xl p-6 flex flex-col gap-4 hover:border-teal-600 transition-colors"
    >
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-zinc-900">{project.title}</h3>
          {project.status === 'coming-soon' && (
            <span className="text-xs text-zinc-400 italic shrink-0">Coming soon</span>
          )}
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors self-start"
        >
          View Project →
        </a>
      )}
    </motion.div>
  )
}
