'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'

const steps = [
  { step: '1', label: 'Scheduled run', detail: 'A timer starts the script every morning at about 6 AM.' },
  { step: '2', label: 'Check what customers see', detail: 'It looks at what the shopping site shows for each item, so the team sees what customers see.' },
  { step: '3', label: 'Flag and save', detail: 'Items shown as out of stock are kept and saved as a dated report.' },
  { step: '4', label: 'Dashboard', detail: 'The team can search, sort, and open each product page from a simple web dashboard.' },
]

const results = [
  {
    title: 'About 10 minutes',
    body: 'A person can’t check thousands of items every day. The script does it before the workday starts.',
  },
  {
    title: 'Catch issues early',
    body: 'Wrong information is spotted early, so the cause can be found and fixed instead of reacting after a complaint.',
  },
  {
    title: 'Partner trust',
    body: 'Partners see issues caught before they have to report them.',
  },
  {
    title: 'Protect sales',
    body: 'Avoids losing sales when an item shows as out of stock but is actually available.',
  },
]

const tags = ['Claude Code', 'Google Apps Script', 'Python', 'Automation', 'Dashboard']

export default function StockMonitorContent() {
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
            Stock Monitor
          </h1>
          <p className="text-zinc-500 leading-relaxed">
            A proactive monitoring tool built alone, as a PM, with Claude Code. It checks
            thousands of items every morning and flags gaps before customers or partners find them.
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
            src="/stock-monitor-dashboard.jpg"
            alt="Stock Monitor dashboard mockup with a list of days on the left and a searchable table of out-of-stock items on the right"
            width={2000}
            height={1116}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-xl border border-zinc-200 shadow-sm"
          />
          <figcaption className="text-xs text-zinc-400 mt-2">
            AI-generated mockup with sample data — the real dashboard is internal. Each day lists
            flagged items with search, sort, and a link to the product page.
          </figcaption>
        </motion.figure>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">The problem</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            At work there were thousands of items to keep an eye on, and no one had time to check
            them by hand. Problems were only noticed once a customer or partner pointed them out.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">How it works</h2>
          <ol className="flex flex-col gap-3">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-4 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-teal-50 text-teal-700 text-sm font-medium flex items-center justify-center">
                  {s.step}
                </span>
                <p className="text-sm text-zinc-500 leading-relaxed pt-1">
                  <span className="font-semibold text-zinc-900">{s.label}.</span> {s.detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-zinc-500 leading-relaxed mt-5">
            The first attempt, reading the web pages directly, didn’t work at this scale. While
            troubleshooting with Claude, we found a more reliable way to get the same information
            the website shows — and that’s when the tool started to work. If the site refuses a
            request, the script retries it later instead of skipping that category for the day, and
            flags anything still missing on the dashboard.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Results</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r) => (
              <li key={r.title} className="border border-zinc-200 rounded-xl p-5">
                <h3 className="font-semibold text-zinc-900 text-sm mb-1">{r.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-xs text-teal-600 font-medium">
          Internal tool — reach out via the Contact tab for details.
        </p>
      </div>
    </PageWrapper>
  )
}
