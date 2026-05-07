'use client'

import { motion } from 'framer-motion'
import type { Experience } from '@/data/experience'

interface Props {
  exp: Experience
  index: number
}

export default function TimelineEntry({ exp, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex gap-6"
    >
      {/* Left: line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
            exp.current ? 'bg-teal-600' : 'bg-zinc-300'
          }`}
        />
        <div className="w-px flex-1 bg-zinc-200 mt-2" />
      </div>

      {/* Right: content */}
      <div className="pb-10">
        {/* Date + domain tags */}
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <p className="text-xs text-zinc-400">{exp.period}</p>
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-400 bg-zinc-100 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-zinc-900">{exp.company}</h3>
        <p className="text-sm text-zinc-600 mb-3">{exp.title}</p>
        <ul className="space-y-1">
          {exp.highlights.map((h, i) => (
            <li key={i} className="text-sm text-zinc-500 flex gap-2">
              <span className="text-zinc-300 shrink-0">–</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
