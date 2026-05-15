import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Jae Chung — Product Manager & AI Prototyper',
  description:
    'Senior Product Manager at Verizon. I prototype with AI to validate ideas fast and ship what matters.',
  openGraph: {
    title: 'Jae Chung — Product Manager & AI Prototyper',
    description: 'Senior PM at Verizon. I prototype with AI, validate fast, and ship what matters.',
  },
}

export default function Home() {
  return <HomeContent />
}
