'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/data/works'

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Completed
      </span>
    )
  }
  if (status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-full px-2 py-0.5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        In Progress
      </span>
    )
  }
  return null
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default function WorkCard({ project }: { project: Project }) {
  const isComingSoon = project.status === 'coming-soon'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border border-zinc-200 rounded-xl p-6 flex flex-col gap-4 hover:border-teal-600 transition-colors h-full"
    >
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex-1">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-zinc-900 leading-snug">{project.title}</h3>
            <div className="shrink-0 mt-0.5">
              {isComingSoon ? (
                <span className="text-xs text-zinc-400 italic">Coming soon</span>
              ) : (
                <StatusBadge status={project.status} />
              )}
            </div>
          </div>

          {/* Private label */}
          {project.private && (
            <div className="flex items-center gap-1 text-xs text-zinc-400 mb-3">
              <LockIcon />
              <span>Private / Internal Tool</span>
            </div>
          )}

          {/* Pain point */}
          <p className="text-sm text-zinc-400 leading-relaxed italic mb-2">{project.problem}</p>

          {/* Solution */}
          {project.description && (
            <p className="text-sm text-zinc-500 leading-relaxed">{project.description}</p>
          )}

          {/* Optional callout (e.g. internal tool CTA) */}
          {project.cta && (
            <p className="text-xs text-teal-600 font-medium mt-2">{project.cta}</p>
          )}
        </div>

        {/* Tags */}
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

        {/* Link */}
        {project.link && !project.private && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors self-start"
          >
            View Project →
          </a>
        )}
        {project.link && project.private && (
          <span className="flex items-center gap-1.5 text-sm text-zinc-400 self-start">
            <LockIcon />
            Private / Internal
          </span>
        )}
      </div>
    </motion.div>
  )
}
