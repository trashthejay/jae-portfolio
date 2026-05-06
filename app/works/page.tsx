import type { Metadata } from 'next'
import WorksContent from './WorksContent'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'AI-powered prototypes and tools built without engineering resources — UX analysis, church automation, donation reconciliation, and more.',
}

export default function WorksPage() {
  return <WorksContent />
}
