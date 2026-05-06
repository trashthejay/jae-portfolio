import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'PM who bridges technical depth with consumer product instincts — and builds AI-powered prototypes to validate before engineering gets involved.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  )
}
