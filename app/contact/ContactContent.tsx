'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactContent() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <p className="text-sm font-medium text-teal-600 mb-3 tracking-wide uppercase">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Let&apos;s talk.
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-zinc-500 leading-relaxed mb-6">
            Interested in collaborating, or want to see my full resume? Leave your name, email, and
            a brief note — I&apos;ll follow up directly.
          </p>
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">
              Email
            </p>
            <span className="text-sm text-zinc-700 select-all">
              chung.jaehoc&#64;gmail.com
            </span>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
              Also find me on
            </p>
            <a
              href="https://www.linkedin.com/in/jae-ho-jae-chung-6064398/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-teal-600 hover:text-teal-700 transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/trashthejay"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-teal-600 hover:text-teal-700 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
}
