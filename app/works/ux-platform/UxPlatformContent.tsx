'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'

const capabilities = [
  {
    title: 'Analyze any URL or screenshot',
    body: 'Paste a URL or upload an image; the platform captures and scores the page automatically.',
  },
  {
    title: '5-call Claude Vision pipeline',
    body: 'Brand compliance → UX heuristics → conversion → competitive benchmarking → synthesis, with multi-model consensus from Gemini.',
  },
  {
    title: 'A/B comparison mode',
    body: 'Upload two variants side by side and get a diff analysis with a winner recommendation.',
  },
  {
    title: 'Export results',
    body: 'A self-contained HTML report or a 10-slide PPTX deck, ready to share.',
  },
  {
    title: 'History & versioning',
    body: 'Every analysis is stored, so you can re-run and compare over time.',
  },
  {
    title: 'Competitor pattern library',
    body: '35 seeded patterns from Amazon, Apple, Target, Best Buy, TikTok, Instagram, Mercari, and more.',
  },
]

const pipeline = [
  { step: '1', label: 'Brand compliance', detail: 'Checks the page against design-system tokens.' },
  { step: '2', label: 'UX heuristics', detail: "Scores against Nielsen's usability heuristics." },
  { step: '3', label: 'Conversion', detail: 'Looks for conversion-rate optimization signals.' },
  { step: '4', label: 'Competitive benchmark', detail: 'Compares against the seeded pattern library.' },
  { step: '5', label: 'Synthesis', detail: 'Combines prior outputs with a Gemini consensus check into a final score and prioritized recommendations.' },
]

const tags = ['Claude API', 'Gemini', 'Next.js', 'SQLite', 'Playwright', 'A/B Testing', 'PPTX Export']

export default function UxPlatformContent() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/works"
            className="text-sm text-zinc-500 hover:text-teal-600 transition-colors"
          >
            ← Back to Works
          </Link>
          <p className="text-sm font-medium text-teal-600 mt-6 mb-3 tracking-wide uppercase">
            Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            UX/CX Analysis Platform
          </h1>
          <p className="text-zinc-500 leading-relaxed">
            AI-powered page analysis for digital properties. Built to replace weeks of manual
            review cycles with a scored, shareable report in about a minute.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <Image
            src="/ux-platform-dashboard.webp"
            alt="UX/CX Analysis Platform dashboard showing completed analyses with overall scores and per-dimension ratings"
            width={2000}
            height={1294}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-xl border border-zinc-200 shadow-sm"
          />
          <figcaption className="text-xs text-zinc-400 mt-2">
            The dashboard: every analysis is scored overall and across four dimensions, with history and re-run built in.
          </figcaption>
        </motion.figure>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">What it does</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <li key={c.title} className="border border-zinc-200 rounded-xl p-5">
                <h3 className="font-semibold text-zinc-900 text-sm mb-1">{c.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">How the analysis works</h2>
          <ol className="flex flex-col gap-3">
            {pipeline.map((p) => (
              <li key={p.step} className="flex gap-4 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-teal-50 text-teal-700 text-sm font-medium flex items-center justify-center">
                  {p.step}
                </span>
                <p className="text-sm text-zinc-500 leading-relaxed pt-1">
                  <span className="font-semibold text-zinc-900">{p.label}.</span> {p.detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-zinc-500 leading-relaxed mt-5">
            Jobs run through an in-memory queue while the client polls for the result, and all
            analyses and history are persisted in a local SQLite database.
          </p>
        </section>

        <p className="text-xs text-teal-600 font-medium">
          Internal tool — reach out via the Contact tab for details.
        </p>
      </div>
    </PageWrapper>
  )
}
