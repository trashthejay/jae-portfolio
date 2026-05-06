import type { Metadata } from 'next'
import ExperienceContent from './ExperienceContent'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    '15+ years across telecom, enterprise platforms, and AI. Senior PM at Verizon with a track record of 0→1 product launches and measurable revenue impact.',
}

export default function ExperiencePage() {
  return <ExperienceContent />
}
